import { NextResponse } from 'next/server';
import { z } from 'zod';
import {
  insertContactSubmission,
  markEmailFailed,
  markEmailSent,
  recentSubmissionCount,
} from '@/lib/db';
import { sendContactNotification } from '@/lib/email';
import { contactWorkflowConfigured } from '@/lib/env';
import { log, redact } from '@/lib/logger';
import { contactSchema } from '@/lib/validation/contact';

/**
 * POST /api/contact
 *
 * Ordering is the point of this handler: the row is committed before any mail
 * is attempted. If the insert fails nothing is sent and the caller gets an
 * error; if the insert succeeds but SMTP does not, the row stays with
 * email_sent = false and the caller still gets success, because from the
 * visitor's side the message has been received. Losing a lead to a temporary
 * mail outage would be the worst possible failure mode here.
 */

// Never prerender or cache: this route only ever handles POSTs with side effects.
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
  if (!contactWorkflowConfigured()) {
    // Surfaces a misconfigured deployment in the logs rather than throwing a
    // stack trace at the visitor.
    log.error('contact.misconfigured');
    return fail(503, 'The contact form is temporarily unavailable. Please email us directly.');
  }

  // 1 — Reject oversized bodies before parsing them.
  const declared = Number(request.headers.get('content-length') ?? 0);
  if (declared > MAX_BODY_BYTES) {
    return fail(413, 'That message is too large. Please shorten it and try again.');
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return fail(400, 'We could not read that submission. Please try again.');
  }

  // 2 — Validate and sanitise. The schema is the only gate that counts.
  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    const first = z.treeifyError(parsed.error);
    const message =
      parsed.error.issues[0]?.message ?? 'Please check the form and try again.';
    log.warn('contact.validation_failed', { issues: parsed.error.issues.length });
    void first;
    return fail(400, message);
  }
  const data = parsed.data;

  // 3 — Honeypot. Bots fill every field; people never see this one.
  if (data.company_website && data.company_website.trim() !== '') {
    log.warn('contact.honeypot_triggered');
    // Answer exactly like a success so the bot learns nothing.
    return NextResponse.json({
      success: true,
      message: 'Your message has been submitted successfully.',
    });
  }

  const ip = clientIp(request);
  const sourcePage = request.headers.get('referer');
  const userAgent = request.headers.get('user-agent');

  // 4 — Rate limit per IP. Counted in Postgres rather than in memory, because
  // each serverless invocation is a separate process and an in-memory counter
  // would reset constantly.
  if (ip) {
    try {
      const recent = await recentSubmissionCount(ip, RATE_LIMIT_WINDOW_MINUTES);
      if (recent >= RATE_LIMIT_MAX) {
        log.warn('contact.rate_limited', { recent });
        return fail(429, 'You have already sent us a few messages. Please give us a little time to reply.');
      }
    } catch (e) {
      // A rate-limit lookup failure must not block a genuine submission.
      log.warn('contact.rate_limit_check_failed', {
        error: redact(e instanceof Error ? e.message : String(e)),
      });
    }
  }

  // 5 — Persist. This is the source of truth; nothing is sent before it.
  let submission: { id: string; created_at: Date };
  try {
    submission = await insertContactSubmission({
      name: data.name,
      email: data.email,
      company: data.company,
      team_size: data.team_size,
      challenge: data.challenge,
      website: data.website,
      revenue: data.revenue,
      context: data.context,
      source_page: sourcePage,
      ip,
      user_agent: userAgent,
    });
  } catch (e) {
    log.error('contact.db_insert_failed', {
      error: redact(e instanceof Error ? e.message : String(e)),
    });
    return fail(500, 'We could not save your message. Please try again shortly.');
  }

  log.info('contact.submission_created', { id: submission.id });

  // 6 — Notify. A failure here is recorded, never fatal, and never rolls back
  // the row: email_sent = false marks it for retry.
  try {
    await sendContactNotification({
      id: submission.id,
      submittedAt: submission.created_at,
      data,
      sourcePage,
    });
    await markEmailSent(submission.id);
    log.info('contact.email_sent', { id: submission.id });
  } catch (e) {
    const error = redact(e instanceof Error ? e.message : String(e));
    log.error('contact.email_failed', { id: submission.id, error });
    try {
      await markEmailFailed(submission.id, error);
    } catch (inner) {
      log.error('contact.email_status_update_failed', {
        id: submission.id,
        error: redact(inner instanceof Error ? inner.message : String(inner)),
      });
    }
    // Still a success for the visitor: their message is stored.
  }

  return NextResponse.json({
    success: true,
    message: 'Your message has been submitted successfully.',
    id: submission.id,
    submittedAt: submission.created_at,
  });
}

/** Anything other than POST is not part of this endpoint's contract. */
export async function GET() {
  return fail(405, 'Method not allowed.');
}
