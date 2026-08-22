import { NextResponse } from 'next/server';
import {
  claimWebhookEvent,
  getFullStrategySessionBookingByOrderId,
  markBookingFailedByOrderId,
  markBookingPaidByOrderId,
  markWebhookEventProcessed,
} from '@/lib/db';
import { sendAppointmentConfirmationEmail } from '@/lib/email';
import { razorpayWebhookConfigured } from '@/lib/env';
import { log, redact } from '@/lib/logger';
import { verifyWebhookSignature } from '@/lib/razorpay';

/**
 * POST /api/razorpay/webhook
 *
 * Server-to-server payment status, independent of whether the browser ever
 * comes back after Checkout (closed tab, crashed device, network drop). Only
 * `payment.captured` moves a booking to PAID; `payment.failed` moves it to
 * FAILED, and only from PENDING — see markBookingFailedByOrderId for why a
 * booking already marked PAID can never be downgraded by a later event.
 *
 * The signature is checked against the raw request body, per Razorpay's
 * documented scheme — not against a re-serialized copy of the parsed JSON,
 * which is not guaranteed to produce identical bytes.
 */

export const dynamic = 'force-dynamic';

type RazorpayWebhookEvent = {
  event?: string;
  payload?: {
    payment?: {
      entity?: {
        id?: string;
        order_id?: string;
        status?: string;
      };
    };
  };
};

export async function POST(request: Request) {
  if (!razorpayWebhookConfigured()) {
    log.error('razorpay_webhook.misconfigured');
    return NextResponse.json({ success: false }, { status: 503 });
  }

  const signature = request.headers.get('x-razorpay-signature');
  const eventId = request.headers.get('x-razorpay-event-id');
  if (!signature || !eventId) {
    log.warn('razorpay_webhook.missing_headers');
    return NextResponse.json({ success: false }, { status: 400 });
  }

  const rawBody = await request.text();

  let signatureOk: boolean;
  try {
    signatureOk = verifyWebhookSignature(rawBody, signature);
  } catch (e) {
    log.error('razorpay_webhook.signature_check_error', {
      error: redact(e instanceof Error ? e.message : String(e)),
    });
    return NextResponse.json({ success: false }, { status: 400 });
  }
  if (!signatureOk) {
    log.warn('razorpay_webhook.invalid_signature');
    return NextResponse.json({ success: false }, { status: 400 });
  }

  let event: RazorpayWebhookEvent;
  try {
    event = JSON.parse(rawBody);
  } catch {
    log.warn('razorpay_webhook.invalid_json');
    return NextResponse.json({ success: false }, { status: 400 });
  }

  const eventType = typeof event.event === 'string' ? event.event : 'unknown';

  let claim: 'new' | 'retry' | 'duplicate';
  try {
    claim = await claimWebhookEvent(eventId, eventType, event);
  } catch (e) {
    log.error('razorpay_webhook.claim_failed', {
      eventId,
      error: redact(e instanceof Error ? e.message : String(e)),
    });
    return NextResponse.json({ success: false }, { status: 500 });
  }

  if (claim === 'duplicate') {
    log.info('razorpay_webhook.duplicate_ignored', { eventId, eventType });
    return NextResponse.json({ success: true });
  }

  try {
    const entity = event.payload?.payment?.entity;
    const orderId = entity?.order_id;
    const paymentId = entity?.id ?? null;
    const paymentStatus = entity?.status;

    if (orderId && paymentStatus === 'captured') {
      const fullBooking = await getFullStrategySessionBookingByOrderId(orderId);
      const transitioned = await markBookingPaidByOrderId(orderId, paymentId);
      if (transitioned && fullBooking) {
        try {
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
          log.info('razorpay_webhook.admin_email_sent', { orderId });
        } catch (emailErr) {
          log.error('razorpay_webhook.admin_email_failed', {
            orderId,
            error: redact(emailErr instanceof Error ? emailErr.message : String(emailErr)),
          });
        }
      }
    } else if (orderId && eventType === 'payment.failed') {
      await markBookingFailedByOrderId(orderId);
    }

    await markWebhookEventProcessed(eventId);
  } catch (e) {
    log.error('razorpay_webhook.processing_failed', {
      eventId,
      eventType,
      error: redact(e instanceof Error ? e.message : String(e)),
    });
    // Leave processed_at unset: the next retry from Razorpay will be claimed
    // as 'retry' and reprocessed rather than silently dropped.
    return NextResponse.json({ success: false }, { status: 500 });
  }

  log.info('razorpay_webhook.processed', { eventId, eventType });
  return NextResponse.json({ success: true });
}

export async function GET() {
  return NextResponse.json({ success: false }, { status: 405 });
}
