import { NextResponse } from 'next/server';
import {
  attachRazorpayOrder,
  insertStrategySessionBooking,
  recentBookingCount,
} from '@/lib/db';
import { env, razorpayConfigured } from '@/lib/env';
import { log, redact } from '@/lib/logger';
import {
  razorpayClient,
  STRATEGY_SESSION_AMOUNT_PAISE,
  STRATEGY_SESSION_CURRENCY,
} from '@/lib/razorpay';
import { strategySessionSchema } from '@/lib/validation/strategy-session';

/**
 * POST /api/strategy-session
 *
 * Step 1 of the payment flow (see the Razorpay Production Integration Guide):
 * validate the booking, persist it as the lead/CRM record, then create the
 * Razorpay Order. The row is committed before Razorpay is ever contacted, so
 * the lead survives even if Order creation or the payment itself fails —
 * exactly the "CRM before payment" requirement the guide calls out.
 *
 * The ₹9,999 amount is a server constant (see lib/razorpay.ts) and is never
 * read from the request body.
 */

export const dynamic = 'force-dynamic';

const MAX_BODY_BYTES = 32 * 1024;
const RATE_LIMIT_WINDOW_MINUTES = 10;
const RATE_LIMIT_MAX = 5;

function clientIp(request: Request): string | null {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0]!.trim();
  return request.headers.get('x-real-ip');
}

function fail(status: number, message: string) {
  return NextResponse.json({ success: false, message }, { status });
}

export async function POST(request: Request) {
  if (!razorpayConfigured()) {
    log.error('strategy_session.misconfigured');
    return fail(503, 'Booking is temporarily unavailable. Please email us directly.');
  }

  const declared = Number(request.headers.get('content-length') ?? 0);
  if (declared > MAX_BODY_BYTES) {
    return fail(413, 'That submission is too large. Please shorten it and try again.');
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return fail(400, 'We could not read that submission. Please try again.');
  }

  const parsed = strategySessionSchema.safeParse(payload);
  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? 'Please check the form and try again.';
    log.warn('strategy_session.validation_failed', { issues: parsed.error.issues.length });
    return fail(400, message);
  }
  const data = parsed.data;

  const ip = clientIp(request);
  const sourcePage = request.headers.get('referer');
  const userAgent = request.headers.get('user-agent');

  if (ip) {
    try {
      const recent = await recentBookingCount(ip, RATE_LIMIT_WINDOW_MINUTES);
      if (recent >= RATE_LIMIT_MAX) {
        log.warn('strategy_session.rate_limited', { recent });
        return fail(
          429,
          'You have already started a few bookings. Please give it a moment and try again.',
        );
      }
    } catch (e) {
      // A rate-limit lookup failure must not block a genuine booking.
      log.warn('strategy_session.rate_limit_check_failed', {
        error: redact(e instanceof Error ? e.message : String(e)),
      });
    }
  }

  // 1 — Persist the lead/booking. This is the source of truth; nothing is
  // sent to Razorpay before it.
  let booking: { id: string; created_at: Date };
  try {
    booking = await insertStrategySessionBooking({
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      website: data.website,
      revenue: data.revenue,
      challenge: data.challenge,
      date: data.date,
      time: data.time,
      source_page: sourcePage,
      ip,
      user_agent: userAgent,
    });
  } catch (e) {
    log.error('strategy_session.db_insert_failed', {
      error: redact(e instanceof Error ? e.message : String(e)),
    });
    return fail(500, 'We could not start your booking. Please try again shortly.');
  }

  log.info('strategy_session.booking_created', { id: booking.id });

  // 2 — Create the Razorpay Order server-side, for exactly ₹9,999. The
  // booking id doubles as the receipt: unique per attempt, and it is how the
  // verify route re-links a Checkout callback back to this exact row.
  let order: { id: string };
  try {
    order = await razorpayClient().orders.create({
      amount: STRATEGY_SESSION_AMOUNT_PAISE,
      currency: STRATEGY_SESSION_CURRENCY,
      receipt: booking.id,
      notes: {
        booking_id: booking.id,
        engagement: 'Founder Strategy Session',
      },
    });
  } catch (e) {
    log.error('strategy_session.order_create_failed', {
      id: booking.id,
      error: redact(e instanceof Error ? e.message : String(e)),
    });
    // The lead row already exists — nothing is lost. The visitor just can't
    // pay right now.
    return fail(502, 'We could not start the payment. Please try again shortly.');
  }

  try {
    await attachRazorpayOrder(booking.id, order.id);
  } catch (e) {
    log.error('strategy_session.order_attach_failed', {
      id: booking.id,
      error: redact(e instanceof Error ? e.message : String(e)),
    });
    // Without this attached, the verify route cannot later confirm that a
    // Checkout callback belongs to this booking — treat it as a hard failure.
    return fail(500, 'We could not start the payment. Please try again shortly.');
  }

  log.info('strategy_session.order_created', { id: booking.id, orderId: order.id });

  return NextResponse.json({
    success: true,
    bookingId: booking.id,
    orderId: order.id,
    amount: STRATEGY_SESSION_AMOUNT_PAISE,
    currency: STRATEGY_SESSION_CURRENCY,
    keyId: env.razorpay.keyId,
  });
}

/** Anything other than POST is not part of this endpoint's contract. */
export async function GET() {
  return fail(405, 'Method not allowed.');
}
