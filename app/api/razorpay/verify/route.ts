import { NextResponse } from 'next/server';
import { z } from 'zod';
import {
  getFullStrategySessionBookingById,
  getStrategySessionBookingById,
  markBookingPaid,
} from '@/lib/db';
import { sendAppointmentConfirmationEmail } from '@/lib/email';
import { razorpayConfigured } from '@/lib/env';
import { log, redact } from '@/lib/logger';
import { razorpayClient, verifyPaymentSignature } from '@/lib/razorpay';

/**
 * POST /api/razorpay/verify
 *
 * Step 2 of the payment flow: the browser hands back what Razorpay Checkout
 * returned, and this route is the only place that is allowed to decide the
 * payment succeeded. Two independent checks both have to pass — the HMAC
 * signature (proves the callback wasn't forged) and a live status fetch from
 * Razorpay (proves the payment is actually captured, not just that the
 * signature math is correct) — before the booking is marked PAID.
 */

export const dynamic = 'force-dynamic';

const verifySchema = z.object({
  bookingId: z.uuid(),
  razorpay_order_id: z.string().min(1).max(100),
  razorpay_payment_id: z.string().min(1).max(100),
  razorpay_signature: z.string().min(1).max(256),
});

function fail(status: number, message: string) {
  return NextResponse.json({ success: false, message }, { status });
}

export async function POST(request: Request) {
  if (!razorpayConfigured()) {
    log.error('razorpay_verify.misconfigured');
    return fail(503, 'Payment verification is temporarily unavailable.');
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return fail(400, 'We could not read that request.');
  }

  const parsed = verifySchema.safeParse(payload);
  if (!parsed.success) {
    return fail(400, 'That payment confirmation is invalid.');
  }
  const { bookingId, razorpay_order_id, razorpay_payment_id, razorpay_signature } = parsed.data;

  let booking;
  try {
    booking = await getStrategySessionBookingById(bookingId);
  } catch (e) {
    log.error('razorpay_verify.db_lookup_failed', {
      error: redact(e instanceof Error ? e.message : String(e)),
    });
    return fail(500, 'We could not verify your payment right now. Please contact us.');
  }

  // The Order ID must be the one this server created for this exact booking —
  // otherwise a valid signature for a *different* order/payment pair could be
  // replayed against an unrelated booking.
  if (!booking || booking.razorpay_order_id !== razorpay_order_id) {
    log.warn('razorpay_verify.order_mismatch', { bookingId });
    return fail(400, 'This payment does not match your booking.');
  }

  // Verify is safe to call more than once (network retry, duplicate tab):
  // once a booking is PAID, re-confirm success without redoing any checks.
  if (booking.status === 'PAID') {
    return NextResponse.json({ success: true, bookingId: booking.id });
  }

  const signatureOk = verifyPaymentSignature(
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
  );
  if (!signatureOk) {
    log.warn('razorpay_verify.signature_mismatch', { bookingId });
    return fail(400, 'Payment verification failed.');
  }

  // Signature alone only proves the message wasn't tampered with — it does
  // not prove the payment was actually captured. Confirm the real state with
  // Razorpay before marking anything paid.
  let payment: { status: string; amount: number | string; currency: string; order_id: string };
  try {
    payment = await razorpayClient().payments.fetch(razorpay_payment_id);
  } catch (e) {
    log.error('razorpay_verify.payment_fetch_failed', {
      bookingId,
      error: redact(e instanceof Error ? e.message : String(e)),
    });
    return fail(502, 'We could not confirm your payment status. Please contact us.');
  }

  // Checked against what *this booking* was actually created for, not a
  // hardcoded constant — the same route verifies both the ₹9,999 Founder
  // Strategy Session and the ₹15,999 Founder Growth Intensive this way.
  const amountOk = Number(payment.amount) === booking.amount;
  const currencyOk = payment.currency === booking.currency;
  const orderOk = payment.order_id === razorpay_order_id;
  const capturedOk = payment.status === 'captured';

  if (!amountOk || !currencyOk || !orderOk || !capturedOk) {
    log.warn('razorpay_verify.payment_not_captured', { bookingId, status: payment.status });
    return fail(400, 'Payment has not completed successfully.');
  }

  try {
    const transitioned = await markBookingPaid(booking.id, razorpay_payment_id);
    if (transitioned) {
      try {
        const fullBooking = await getFullStrategySessionBookingById(booking.id);
        if (fullBooking) {
          await sendAppointmentConfirmationEmail({
            id: fullBooking.id,
            name: fullBooking.name,
            email: fullBooking.email,
            engagement: fullBooking.engagement,
            preferredDate: fullBooking.preferred_date,
            preferredTime: fullBooking.preferred_time,
            amount: fullBooking.amount,
            currency: fullBooking.currency,
          });
          log.info('razorpay_verify.admin_email_sent', { bookingId: booking.id });
        }
      } catch (emailErr) {
        log.error('razorpay_verify.admin_email_failed', {
          bookingId: booking.id,
          error: redact(emailErr instanceof Error ? emailErr.message : String(emailErr)),
        });
      }
    }
  } catch (e) {
    log.error('razorpay_verify.mark_paid_failed', {
      bookingId,
      error: redact(e instanceof Error ? e.message : String(e)),
    });
    return fail(500, 'Payment was verified but we could not update your booking. Please contact us.');
  }

  log.info('razorpay_verify.success', { bookingId });
  return NextResponse.json({ success: true, bookingId: booking.id });
}

export async function GET() {
  return fail(405, 'Method not allowed.');
}
