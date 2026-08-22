import { NextResponse } from 'next/server';
import {
  insertEngagementApplication,
  markEngagementEmailFailed,
  markEngagementEmailSent,
  markTableHubspotFailed,
  markTableHubspotSynced,
  recentEngagementCount,
} from '@/lib/db';
import { sendFormNotification } from '@/lib/email';
import { contactWorkflowConfigured } from '@/lib/env';
import { log, redact } from '@/lib/logger';
import { syncEngagementApplicationToHubSpot } from '@/lib/hubspot/sync';
import { engagementSchema } from '@/lib/validation/engagement';

/**
 * POST /api/engagement-application
 *
 * The long-form qualifier on /strategy/. Same lifecycle as /api/contact:
 * validate, persist, notify, then sync to the CRM. The row is committed before
 * anything downstream runs, and neither mail nor HubSpot failure rolls it back.
 *
 * Unlike the contact form this one collects no email address — the design asks
 * for company, budget and intent instead. That has a real consequence for the
 * CRM: HubSpot identifies contacts by email, so without one there is nothing to
 * upsert against. The sync therefore only runs when a website is present to
 * derive nothing from, and otherwise records why it was skipped. See sync.ts.
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
  if (!contactWorkflowConfigured()) {
    log.error('engagement.misconfigured');
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

  const parsed = engagementSchema.safeParse(payload);
  if (!parsed.success) {
    log.warn('engagement.validation_failed', { issues: parsed.error.issues.length });
    return fail(400, parsed.error.issues[0]?.message ?? 'Please check the form and try again.');
  }
  const data = parsed.data;

  if (data.company_website && data.company_website.trim() !== '') {
    log.warn('engagement.honeypot_triggered');
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
      const recent = await recentEngagementCount(ip, RATE_LIMIT_WINDOW_MINUTES);
      if (recent >= RATE_LIMIT_MAX) {
        log.warn('engagement.rate_limited', { recent });
        return fail(429, 'You have already sent us a few applications. Please give us a little time.');
      }
    } catch (e) {
      log.warn('engagement.rate_limit_check_failed', {
        error: redact(e instanceof Error ? e.message : String(e)),
      });
    }
  }

  let application: { id: string; created_at: Date };
  try {
    application = await insertEngagementApplication({
      name: data.name,
      company: data.company,
      website: data.website,
      industry: data.industry,
      revenue: data.revenue,
      team_size: data.team_size,
      challenge: data.challenge,
      already_tried: data.already_tried,
      desired_outcome: data.desired_outcome,
      investment_readiness: data.investment_readiness,
      preferred_engagement: data.preferred_engagement,
      source_page: sourcePage,
      ip,
      user_agent: userAgent,
    });
  } catch (e) {
    log.error('engagement.db_insert_failed', {
      error: redact(e instanceof Error ? e.message : String(e)),
    });
    return fail(500, 'We could not save your application. Please try again shortly.');
  }

  log.info('engagement.application_created', { id: application.id });

  try {
    await sendFormNotification({
      title: 'New engagement application',
      subject: `New engagement application — ${data.name}${data.company ? `, ${data.company}` : ''}`,
      rows: [
        ['Name', data.name],
        ['Company', data.company],
        ['Website', data.website],
        ['Industry', data.industry],
        ['Annual Revenue', data.revenue],
        ['Team Size', data.team_size],
        ['Investment Readiness', data.investment_readiness],
        ['Preferred Engagement', data.preferred_engagement],
      ],
      sections: [
        ['Challenge', data.challenge],
        ['Already tried', data.already_tried],
        ['Desired outcome', data.desired_outcome],
      ],
      submittedAt: application.created_at,
      sourcePage,
      id: application.id,
    });
    await markEngagementEmailSent(application.id);
    log.info('engagement.email_sent', { id: application.id });
  } catch (e) {
    const error = redact(e instanceof Error ? e.message : String(e));
    log.error('engagement.email_failed', { id: application.id, error });
    try {
      await markEngagementEmailFailed(application.id, error);
    } catch (inner) {
      log.error('engagement.email_status_update_failed', {
        id: application.id,
        error: redact(inner instanceof Error ? inner.message : String(inner)),
      });
    }
  }

  // CRM last, and never fatal — same contract as /api/contact.
  const crm = await syncEngagementApplicationToHubSpot(application.id, data);
  try {
    if (crm.ok) {
      await markTableHubspotSynced(
        'engagement_applications',
        application.id,
        crm.contactId,
        crm.dealId ?? null,
      );
    } else if (!crm.skipped) {
      await markTableHubspotFailed('engagement_applications', application.id, crm.error);
    }
  } catch (e) {
    log.error('engagement.hubspot_status_update_failed', {
      id: application.id,
      error: redact(e instanceof Error ? e.message : String(e)),
    });
  }

  return NextResponse.json({
    success: true,
    message: 'Your application has been submitted successfully.',
    id: application.id,
    submittedAt: application.created_at,
  });
}

export async function GET() {
  return fail(405, 'Method not allowed.');
}
