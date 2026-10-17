import 'server-only';
import { createHash, timingSafeEqual } from 'node:crypto';
import { env } from './env';
import { SITE_URL } from './site';

export const GROWTH_AUDIT_AMOUNT = 999;
export const GROWTH_AUDIT_PRODUCT = 'Grow Spark Business Growth Audit';

function sha512(value: string): string {
  return createHash('sha512').update(value, 'utf8').digest('hex');
}

function sameHash(expected: string, received: string): boolean {
  const expectedBytes = Buffer.from(expected.toLowerCase(), 'hex');
  const receivedBytes = Buffer.from(received.toLowerCase(), 'hex');
  return expectedBytes.length === receivedBytes.length
    && timingSafeEqual(expectedBytes, receivedBytes);
}

export function createPayuRequestHash(input: {
  txnid: string;
  amount: string;
  firstname: string;
  email: string;
}): string {
  const { key, salt } = env.payu;
  return sha512([
    key, input.txnid, input.amount, GROWTH_AUDIT_PRODUCT,
    input.firstname, input.email, '', '', '', '', '', '', '', '', '', '', salt,
  ].join('|'));
}

export function payuPaymentUrl(): string {
  return env.payu.environment === 'production'
    ? 'https://secure.payu.in/_payment'
    : 'https://test.payu.in/_payment';
}

export function payuCallbackUrl(): string {
  const raw = process.env.PAYU_CALLBACK_BASE_URL || SITE_URL;
  const url = new URL(raw);
  if (url.protocol !== 'https:' || url.username || url.password) {
    throw new Error('PAYU_CALLBACK_BASE_URL must be an HTTPS origin.');
  }
  return `${url.origin}/api/payu/return/`;
}

export type PayuCallback = Record<string, string>;

export function verifyPayuResponseHash(response: PayuCallback): boolean {
  const { key, salt } = env.payu;
  if (!response.hash || response.key !== key) return false;

  const reverse = [
    response.status ?? '',
    '', '', '', '', '',
    response.udf5 ?? '', response.udf4 ?? '', response.udf3 ?? '',
    response.udf2 ?? '', response.udf1 ?? '',
    response.email ?? '', response.firstname ?? '', response.productinfo ?? '',
    response.amount ?? '', response.txnid ?? '', key,
  ];
  const standard = `${salt}|${reverse.join('|')}`;
  const withAdditionalCharges = response.additionalCharges
    ? `${response.additionalCharges}|${salt}|${reverse.join('|')}`
    : standard;

  return sameHash(sha512(standard), response.hash)
    || (Boolean(response.additionalCharges)
      && sameHash(sha512(withAdditionalCharges), response.hash));
}

export type PayuVerification = {
  paid: boolean;
  mihpayid: string | null;
  status: string;
};

/** Reconcile a browser return against PayU's server-to-server verify API. */
export async function verifyPayuTransaction(txnid: string): Promise<PayuVerification> {
  const { key, salt, environment } = env.payu;
  const command = 'verify_payment';
  const hash = sha512(`${key}|${command}|${txnid}|${salt}`);
  const endpoint = environment === 'production'
    ? 'https://info.payu.in/merchant/postservice.php?form=2'
    : 'https://test.payu.in/merchant/postservice?form=2';

  const body = new URLSearchParams({ key, command, var1: txnid, hash });
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body,
    cache: 'no-store',
    signal: AbortSignal.timeout(12_000),
  });
  if (!response.ok) throw new Error(`PayU verify API returned HTTP ${response.status}`);

  const result: unknown = await response.json();
  if (!result || typeof result !== 'object') throw new Error('PayU verify API response was invalid');
  const root = result as Record<string, unknown>;
  const details = root.transaction_details;
  const transaction = details && typeof details === 'object'
    ? (details as Record<string, unknown>)[txnid] as Record<string, unknown> | undefined
    : undefined;

  if (!transaction || typeof transaction !== 'object') {
    return { paid: false, mihpayid: null, status: 'not_found' };
  }

  const status = String(transaction.status ?? '').toLowerCase();
  const unmappedStatus = String(transaction.unmappedstatus ?? '').toLowerCase();
  const transactionIdMatches = String(transaction.txnid ?? '') === txnid;
  const verifiedAmount = transaction.amt ?? transaction.amount ?? transaction.transaction_amount;
  const amountMatches = Number(verifiedAmount).toFixed(2) === '999.00';
  const paid = Number(root.status) === 1 && transactionIdMatches && amountMatches
    && status === 'success' && unmappedStatus === 'captured';

  return {
    paid,
    mihpayid: transaction.mihpayid == null && transaction.mihpayupid == null
      ? null
      : String(transaction.mihpayid ?? transaction.mihpayupid),
    status: paid ? 'captured' : (unmappedStatus || status || 'pending'),
  };
}
