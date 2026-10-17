import { randomBytes } from 'node:crypto';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import {
  insertGrowthAuditPayment,
  recentGrowthAuditPaymentCount,
} from '@/lib/db';
import { payuConfigured } from '@/lib/env';
import { log, redact } from '@/lib/logger';
import {
  createPayuRequestHash,
  GROWTH_AUDIT_AMOUNT,
  GROWTH_AUDIT_PRODUCT,
  payuCallbackUrl,
  payuPaymentUrl,
} from '@/lib/payu';

export const dynamic = 'force-dynamic';

const RATE_LIMIT_WINDOW_MINUTES = 10;
const RATE_LIMIT_MAX = 5;
const formSchema = z.object({
  name: z.string().trim().min(2).max(120),
  phone: z.string().trim().min(10).max(24).regex(/^\+?[0-9 ()-]+$/),
  email: z.string().trim().email().max(254),
  company: z.string().trim().min(2).max(160),
  website: z.union([z.literal(''), z.string().trim().url().max(300)]).optional(),
  team: z.enum(['1-5', '6-15', '16-30', '31-75', '76+']),
  industry: z.enum([
    'Professional services', 'Technology & software', 'Manufacturing',
    'Retail & e-commerce', 'Healthcare & wellness', 'Financial services',
    'Education & training', 'Construction & real estate', 'Hospitality & food', 'Other',
  ]),
  revenue: z.enum([
    'Below ₹50 lakh', '₹50 lakh-₹1 crore', '₹1-2 crore', '₹2-3 crore',
    '₹3-5 crore', 'Above ₹5 crore', 'Prefer to discuss',
  ]),
  businessProblem: z.enum([
    'Revenue is growing, but profit is not',
    'Stuck at the same revenue for years',
    'My revenue is going down every year',
    'Another business challenge',
  ]),
}).strict();

function clientIp(request: Request): string | null {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0]?.trim() || null;
  return request.headers.get('x-real-ip');
}

function fail(status: number, message: string) {
  return NextResponse.json({ success: false, message }, { status });
}

export async function POST(request: Request) {
  if (!payuConfigured()) {
    return fail(503, 'Online payment is being configured. Please contact Grow Spark Consulting.');
  }

  const origin = request.headers.get('origin');
  let sameOrigin = false;
  try {
    sameOrigin = Boolean(origin && new URL(origin).origin === new URL(request.url).origin);
  } catch {
    sameOrigin = false;
  }
  if (!sameOrigin) {
    return fail(403, 'Please submit the form from the audit page.');
  }

  if (Number(request.headers.get('content-length') ?? 0) > 32 * 1024) {
    return fail(413, 'That submission is too large. Please shorten it and try again.');
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return fail(400, 'We could not read that submission. Please try again.');
  }
  const parsed = formSchema.safeParse(payload);
  if (!parsed.success) {
    return fail(400, parsed.error.issues[0]?.message ?? 'Please check the form and try again.');
  }

  const ip = clientIp(request);
  if (ip) {
    try {
      if (await recentGrowthAuditPaymentCount(ip, RATE_LIMIT_WINDOW_MINUTES) >= RATE_LIMIT_MAX) {
        return fail(429, 'You have started several payment requests. Please wait a few minutes and try again.');
      }
    } catch (error) {
      log.error('payu.rate_limit_check_failed', { error: redact(error instanceof Error ? error.message : String(error)) });
      return fail(503, 'We could not start checkout right now. Please try again shortly.');
    }
  }

  const txnid = randomBytes(12).toString('hex');
  const data = parsed.data;
  const amount = GROWTH_AUDIT_AMOUNT.toFixed(2);
  try {
    await insertGrowthAuditPayment({
      txnid,
      name: data.name,
      email: data.email.toLowerCase(),
      phone: data.phone,
      company: data.company,
      website: data.website || null,
      team_size: data.team,
      industry: data.industry,
      revenue: data.revenue,
      business_problem: data.businessProblem,
      ip,
      user_agent: request.headers.get('user-agent'),
    });

    const callback = payuCallbackUrl();
    const firstname = data.name.split(/\s+/)[0] ?? data.name;
    return NextResponse.json({
      success: true,
      paymentUrl: payuPaymentUrl(),
      fields: {
        key: process.env.PAYU_KEY,
        txnid,
        amount,
        productinfo: GROWTH_AUDIT_PRODUCT,
        firstname,
        email: data.email.toLowerCase(),
        phone: data.phone,
        surl: callback,
        furl: callback,
        udf1: '', udf2: '', udf3: '', udf4: '', udf5: '',
        hash: createPayuRequestHash({ txnid, amount, firstname, email: data.email.toLowerCase() }),
      },
    }, { headers: { 'cache-control': 'no-store' } });
  } catch (error) {
    log.error('payu.checkout_start_failed', { txnid, error: redact(error instanceof Error ? error.message : String(error)) });
    return fail(500, 'We could not start checkout right now. Please try again shortly.');
  }
}
