import 'server-only';
import crypto from 'node:crypto';
import Razorpay from 'razorpay';
import { env } from './env';

/**
 * Razorpay SDK client, cached the same way lib/db.ts caches the Postgres
 * client: on globalThis, so Next's dev-mode module reloading does not
 * construct a new client (and re-read env) on every edit.
 */
declare global {
  // eslint-disable-next-line no-var
  var __razorpay: Razorpay | undefined;
}

export function razorpayClient(): Razorpay {
  if (!globalThis.__razorpay) {
    const { keyId, keySecret } = env.razorpay;
    globalThis.__razorpay = new Razorpay({ key_id: keyId, key_secret: keySecret });
  }
  return globalThis.__razorpay;
}

/**
 * Only the Founder Strategy Session is in scope. The amount is a server
 * constant on purpose — it must never be derived from anything the browser
 * sends.
 */
export const STRATEGY_SESSION_AMOUNT_PAISE = 999900;
export const STRATEGY_SESSION_CURRENCY = 'INR';

/**
 * Verifies a Checkout success callback.
 *
 * Razorpay's documented scheme: HMAC-SHA256 of `order_id|payment_id`, keyed
 * with the account's key secret. Comparison is constant-time so response
 * timing cannot be used to guess a valid signature byte-by-byte.
 */
export function verifyPaymentSignature(
  orderId: string,
  paymentId: string,
  signature: string,
): boolean {
  const { keySecret } = env.razorpay;
  const expected = crypto
    .createHmac('sha256', keySecret)
    .update(`${orderId}|${paymentId}`)
    .digest('hex');

  const expectedBuffer = Buffer.from(expected, 'hex');
  let providedBuffer: Buffer;
  try {
    providedBuffer = Buffer.from(signature, 'hex');
  } catch {
    return false;
  }
  if (expectedBuffer.length !== providedBuffer.length) return false;
  return crypto.timingSafeEqual(expectedBuffer, providedBuffer);
}

/**
 * Verifies a webhook delivery's `X-Razorpay-Signature` against the raw
 * request body. Must run on the untouched body text — reserializing parsed
 * JSON is not guaranteed to reproduce the exact bytes Razorpay signed.
 */
export function verifyWebhookSignature(rawBody: string, signature: string): boolean {
  return Razorpay.validateWebhookSignature(rawBody, signature, env.razorpayWebhookSecret);
}
