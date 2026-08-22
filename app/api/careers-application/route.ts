import { NextResponse } from 'next/server';
import {
  insertCareersApplication,
  markCareersEmailFailed,
  markCareersEmailSent,
  recentCareersCount,
} from '@/lib/db';
import { sendFormNotification } from '@/lib/email';
import { contactWorkflowConfigured } from '@/lib/env';
import { log, redact } from '@/lib/logger';
import { careersSchema } from '@/lib/validation/careers';

/**
 * POST /api/careers-application
 *
 * Same lifecycle as /api/contact — validate, persist, notify — because the
 * reliability requirement is identical: the row is committed before any mail is
 * attempted, and a failed send leaves email_sent = false rather than losing the
 * application.
 *
 * What is deliberately absent is HubSpot. A job applicant is not a sales lead,
 * and pushing one into the CRM would put them in front of the pipeline that
 * exists to sell consulting work. careers_applications has no hubspot_*
 * columns for the same reason.
 */

export const dynamic = 'force-dynamic';

const MAX_BODY_BYTES = 64 * 1024;
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
  // 1 — Refuse rather than silently collect applications nobody will ever see.
  if (!contactWorkflowConfigured()) {
    log.error('careers.misconfigured');
    return fail(503, 'Applications are temporarily unavailable. Please email us directly.');
  }

  const declared = Number(request.headers.get('content-length') ?? 0);
  if (declared > MAX_BODY_BYTES) {
    return fail(413, 'That submission is too large.');
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return fail(400, 'We could not read that submission. Please try again.');
  }

  const parsed = careersSchema.safeParse(payload);
  if (!parsed.success) {
    log.warn('careers.validation_failed', { issues: parsed.error.issues.length });
    return fail(400, parsed.error.issues[0]?.message ?? 'Please check the form and try again.');
  }
  const data = parsed.data;

  // 2 — Honeypot. Answer exactly like a success so the bot learns nothing, and
  // store nothing.
  if (data.company_website && data.company_website.trim() !== '') {
    log.warn('careers.honeypot_triggered');
    return NextResponse.json({
      success: true,
      message: 'Your application has been submitted successfully.',
    });
  }

  const ip = clientIp(request);
  const sourcePage = request.headers.get('referer');
  const userAgent = request.headers.get('user-agent');

  if (ip) {
    try {
      const recent = await recentCareersCount(ip, RATE_LIMIT_WINDOW_MINUTES);
      if (recent >= RATE_LIMIT_MAX) {
        log.warn('careers.rate_limited', { recent });
        return fail(429, 'You have already sent us a few applications. Please give us a little time.');
      }
    } catch (e) {
      // A rate-limit lookup failure must not block a genuine application.
      log.warn('careers.rate_limit_check_failed', {
        error: redact(e instanceof Error ? e.message : String(e)),
      });
    }
  }

  // 3 — Persist. Source of truth; nothing is sent before it.
  let application: { id: string; created_at: Date };
  try {
    application = await insertCareersApplication({
      name: data.name,
      email: data.email,
      what_you_do: data.what_you_do,
      strengths: data.strengths,
      problems: data.problems,
      why_grow_spark: data.why_grow_spark,
      build_or_learn: data.build_or_learn,
      link: data.link,
      source_page: sourcePage,
      ip,
      user_agent: userAgent,
    });
  } catch (e) {
    log.error('careers.db_insert_failed', {
      error: redact(e instanceof Error ? e.message : String(e)),
    });
    return fail(500, 'We could not save your application. Please try again shortly.');
  }

  log.info('careers.application_created', { id: application.id });

  // 4 — Notify. Recorded on failure, never fatal, never rolls back the row.
  try {
    await sendFormNotification({
      title: 'New careers application',
      subject: `New careers application — ${data.name}`,
      replyTo: data.email,
      rows: [
        ['Name', data.name],
        ['Email', data.email],
        ['What they do', data.what_you_do],
        ['Link', data.link],
      ],
      sections: [
        ['Strengths', data.strengths],
        ['Problems they enjoy', data.problems],
        ['Why Grow Spark', data.why_grow_spark],
        ['Build or learn', data.build_or_learn],
      ],
      submittedAt: application.created_at,
      sourcePage,
      id: application.id,
    });
    await markCareersEmailSent(application.id);
    log.info('careers.email_sent', { id: application.id });
  } catch (e) {
    const error = redact(e instanceof Error ? e.message : String(e));
    log.error('careers.email_failed', { id: application.id, error });
    try {
      await markCareersEmailFailed(application.id, error);
    } catch (inner) {
      log.error('careers.email_status_update_failed', {
        id: application.id,
        error: redact(inner instanceof Error ? inner.message : String(inner)),
      });
    }
    // Still a success for the applicant: their application is stored.
  }

  return NextResponse.json({
    success: true,
    message: 'Your application has been submitted successfully.',
    id: application.id,
    submittedAt: application.created_at,
  });
}

/** Anything other than POST is not part of this endpoint's contract. */
export async function GET() {
  return fail(405, 'Method not allowed.');
}
