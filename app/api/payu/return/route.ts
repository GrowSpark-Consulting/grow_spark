import { NextResponse } from 'next/server';
import {
  getGrowthAuditPayment,
  markGrowthAuditPaymentFailed,
  markGrowthAuditPaymentPaid,
} from '@/lib/db';
import { payuConfigured } from '@/lib/env';
import { log, redact } from '@/lib/logger';
import { SITE_URL } from '@/lib/site';
import {
  GROWTH_AUDIT_PRODUCT,
  payuCallbackUrl,
  verifyPayuResponseHash,
  verifyPayuTransaction,
  type PayuCallback,
} from '@/lib/payu';

export const dynamic = 'force-dynamic';

function thankYou(txnid: string, payment: string) {
  let base = SITE_URL;
  try {
    base = new URL(payuCallbackUrl()).origin;
  } catch {
    // Fall back to the canonical site if optional callback configuration is invalid.
  }
  const url = new URL('/bussiness-growth-audit/thank-you.html', base);
  if (/^[a-f0-9]{24}$/.test(txnid)) url.searchParams.set('txnid', txnid);
  url.searchParams.set('payment', payment);
  return NextResponse.redirect(url, 303);
}

export async function POST(request: Request) {
  if (!payuConfigured()) {
    return thankYou('', 'pending');
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return thankYou('', 'pending');
  }

  const response: PayuCallback = {};
  for (const [key, value] of form.entries()) {
    if (typeof value === 'string' && value.length <= 2_000) response[key] = value;
  }
  const txnid = response.txnid ?? '';
  if (!/^[a-f0-9]{24}$/.test(txnid) || !verifyPayuResponseHash(response)) {
    log.warn('payu.return.invalid_hash', { txnid: /^[a-f0-9]{24}$/.test(txnid) ? txnid : undefined });
    return thankYou(txnid, 'pending');
  }

  try {
    const payment = await getGrowthAuditPayment(txnid);
    if (!payment) return thankYou(txnid, 'pending');

    const callbackMatches = response.key === process.env.PAYU_KEY
      && response.txnid === payment.txnid
      && Number(response.amount).toFixed(2) === (payment.amount / 100).toFixed(2)
      && response.productinfo === GROWTH_AUDIT_PRODUCT
      && response.firstname === (payment.name.split(/\s+/)[0] ?? payment.name)
      && response.email?.toLowerCase() === payment.email.toLowerCase();
    if (!callbackMatches) {
      log.warn('payu.return.transaction_mismatch', { txnid });
      return thankYou(txnid, 'pending');
    }

    const verification = await verifyPayuTransaction(txnid);
    if (verification.paid && verification.mihpayid) {
      await markGrowthAuditPaymentPaid(txnid, verification.mihpayid);
      log.info('payu.return.payment_confirmed', { txnid });
      return thankYou(txnid, 'success');
    }

    if (['failed', 'failure', 'usercancelled', 'bounced', 'dropped'].includes(verification.status)) {
      await markGrowthAuditPaymentFailed(txnid, verification.mihpayid);
      log.info('payu.return.payment_not_completed', { txnid, status: verification.status });
      return thankYou(txnid, 'failed');
    }

    log.info('payu.return.payment_pending', { txnid, status: verification.status });
    return thankYou(txnid, 'pending');
  } catch (error) {
    log.error('payu.return.processing_failed', {
      txnid,
      error: redact(error instanceof Error ? error.message : String(error)),
    });
    return thankYou(txnid, 'pending');
  }
}

export async function GET() {
  return thankYou('', 'pending');
}
