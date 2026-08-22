import 'server-only';
import type { ContactInput } from '@/lib/validation/contact';
import { hubspotConfigured } from '@/lib/env';
import { log, redact } from '@/lib/logger';
import { describeHubspotError, isAuthError } from './client';
import { upsertContact } from './contacts';
import { ensureDealForContact } from './deals';
import { contactProperties, splitName } from './properties';

/**
 * High-level synchronisation entry points.
 *
 * These never throw. HubSpot is downstream of the database: by the time any of
 * this runs the submission is already committed and the visitor has already
 * been told it was received. A CRM outage is an operations problem to be
 * retried later, not something the caller should have to handle — so failure is
 * returned as data and recorded, never propagated.
 */

export type SyncResult =
  | { ok: true; contactId: string; dealId?: string }
  | { ok: false; error: string; skipped?: boolean };

/**
 * Contact form -> HubSpot contact. No deal: a general enquiry is not yet an
 * opportunity, and manufacturing one would pollute the sales pipeline.
 */
export async function syncContactSubmissionToHubSpot(
  submissionId: string,
  data: ContactInput,
): Promise<SyncResult> {
  if (!hubspotConfigured()) {
    // Not an error. The site is expected to run without a CRM configured;
    // rows simply stay unsynced and the retry query will find them later.
    return { ok: false, error: 'HubSpot is not configured', skipped: true };
  }

  log.info('hubspot.contact_sync_started', { id: submissionId });

  try {
    const { id, created } = await upsertContact(contactProperties(data));
    log.info('hubspot.contact_sync_succeeded', {
      id: submissionId,
      contactId: id,
      created,
    });
    return { ok: true, contactId: id };
  } catch (e) {
    const { status, message } = describeHubspotError(e);
    const error = redact(message);
    log.error('hubspot.contact_sync_failed', {
      id: submissionId,
      status,
      // A bad token is a deployment problem, not a transient one — worth
      // distinguishing in the logs so it is not lost among timeouts.
      fatal: isAuthError(status),
      error,
    });
    return { ok: false, error: status ? `${status}: ${error}` : error };
  }
}

export type StrategyBookingInput = {
  submissionId: string;
  /** Already-mapped HubSpot contact properties for this booking. */
  contactProperties: Record<string, string>;
  dealname: string;
  dealProperties?: Record<string, string>;
  /** Whatever is already stored on the row, so retries do not duplicate. */
  existingContactId?: string | null;
  existingDealId?: string | null;
};

/**
 * Strategy session / engagement -> HubSpot contact *and* deal.
 *
 * Written ahead of its caller: the four booking routes do not exist yet. When
 * they are built they should call this rather than talking to HubSpot directly.
 *
 * A partial success is reported as a failure with the contact id preserved by
 * the caller, so a retry updates the same contact and creates only the missing
 * deal.
 */
export async function syncStrategyBookingToHubSpot(
  input: StrategyBookingInput,
): Promise<SyncResult> {
  if (!hubspotConfigured()) {
    return { ok: false, error: 'HubSpot is not configured', skipped: true };
  }

  log.info('hubspot.booking_sync_started', { id: input.submissionId });

  let contactId: string;
  try {
    const contact = await upsertContact(input.contactProperties);
    contactId = contact.id;
    log.info('hubspot.contact_sync_succeeded', {
      id: input.submissionId,
      contactId,
      created: contact.created,
    });
  } catch (e) {
    const { status, message } = describeHubspotError(e);
    const error = redact(message);
    log.error('hubspot.contact_sync_failed', { id: input.submissionId, status, error });
    return { ok: false, error: status ? `${status}: ${error}` : error };
  }

  try {
    const deal = await ensureDealForContact(input.existingDealId ?? null, {
      dealname: input.dealname,
      contactId,
      properties: input.dealProperties,
    });
    log.info('hubspot.deal_sync_succeeded', {
      id: input.submissionId,
      dealId: deal.id,
      created: deal.created,
    });
    return { ok: true, contactId, dealId: deal.id };
  } catch (e) {
    const { status, message } = describeHubspotError(e);
    const error = redact(message);
    log.error('hubspot.deal_sync_failed', { id: input.submissionId, contactId, status, error });
    // The contact did land. Returning ok:false with the contact id lets the
    // caller store it, so the retry only has the deal left to do.
    return { ok: false, error: `contact ${contactId} created, deal failed — ${error}` };
  }
}

/**
 * Engagement application -> HubSpot contact.
 *
 * The form now collects an email, so this upserts by email exactly like the
 * contact form and stays idempotent: the same founder applying twice, or a
 * retry of a half-finished sync, lands on one HubSpot contact.
 *
 * The no-email branch below is kept rather than deleted. Rows captured before
 * the email field existed have none, and a backfill or retry over those rows
 * must decline rather than mint an orphan contact per row. It declines loudly —
 * ok:false without `skipped` — so the reason lands in hubspot_sync_error and
 * shows in the pending index instead of looking like a CRM outage.
 */
export async function syncEngagementApplicationToHubSpot(
  applicationId: string,
  data: {
    name: string;
    company?: string | null;
    website?: string | null;
    industry?: string | null;
    revenue?: string | null;
    team_size?: string | null;
    challenge?: string | null;
    already_tried?: string | null;
    desired_outcome?: string | null;
    investment_readiness?: string | null;
    preferred_engagement?: string | null;
    email?: string | null;
  },
): Promise<SyncResult> {
  if (!hubspotConfigured()) {
    return { ok: false, error: 'HubSpot is not configured', skipped: true };
  }

  const email = data.email?.trim();
  if (!email) {
    log.warn('hubspot.engagement_sync_no_email', { id: applicationId });
    return {
      ok: false,
      error:
        'No email on the engagement application, so the contact cannot be upserted '
        + 'without creating a duplicate. Add an email field to the form to enable sync.',
    };
  }

  log.info('hubspot.engagement_sync_started', { id: applicationId });

  const { firstname, lastname } = splitName(data.name);
  const properties = Object.fromEntries(
    Object.entries({
      email,
      firstname,
      lastname,
      company: data.company,
      website: data.website,
      industry: data.industry,
      gs_revenue_band: data.revenue,
      gs_team_size: data.team_size,
      gs_challenge: data.challenge,
      gs_already_tried: data.already_tried,
      gs_desired_outcome: data.desired_outcome,
      gs_investment_readiness: data.investment_readiness,
      gs_preferred_engagement: data.preferred_engagement,
    }).filter(([, v]) => typeof v === 'string' && v.trim() !== ''),
  ) as Record<string, string>;

  try {
    const { id, created } = await upsertContact(properties);
    log.info('hubspot.engagement_sync_succeeded', { id: applicationId, contactId: id, created });
    return { ok: true, contactId: id };
  } catch (e) {
    const { status, message } = describeHubspotError(e);
    const error = redact(message);
    log.error('hubspot.engagement_sync_failed', {
      id: applicationId,
      status,
      fatal: isAuthError(status),
      error,
    });
    return { ok: false, error: status ? `${status}: ${error}` : error };
  }
}

/**
 * Strategy session / growth intensive booking -> HubSpot contact.
 *
 * Bookings carry an email, so unlike the engagement application this can upsert
 * properly and stays idempotent: someone who books twice, or a retry of a
 * partly-finished sync, lands on one contact.
 *
 * Contact only, no Deal. Creating a Deal needs a pipeline and stage id, and
 * HUBSPOT_DEAL_PIPELINE_ID / HUBSPOT_DEAL_STAGE_ID are portal-specific with no
 * safe default — guessing would file real bookings into the wrong pipeline.
 * hubspotDealsConfigured() gates that, and when it is configured
 * syncStrategyBookingToHubSpot is the function to call instead.
 */
export async function syncBookingToHubSpot(
  bookingId: string,
  data: {
    name: string;
    email: string;
    phone?: string | null;
    company?: string | null;
    website?: string | null;
    revenue?: string | null;
    challenge?: string | null;
    engagement: string;
  },
): Promise<SyncResult> {
  if (!hubspotConfigured()) {
    return { ok: false, error: 'HubSpot is not configured', skipped: true };
  }

  log.info('hubspot.booking_contact_sync_started', { id: bookingId });

  const { firstname, lastname } = splitName(data.name);
  const properties = Object.fromEntries(
    Object.entries({
      email: data.email,
      firstname,
      lastname,
      phone: data.phone,
      company: data.company,
      website: data.website,
      gs_revenue_band: data.revenue,
      gs_challenge: data.challenge,
      gs_preferred_engagement: data.engagement,
    }).filter(([, v]) => typeof v === 'string' && v.trim() !== ''),
  ) as Record<string, string>;

  try {
    const { id, created } = await upsertContact(properties);
    log.info('hubspot.booking_contact_sync_succeeded', {
      id: bookingId,
      contactId: id,
      created,
    });
    return { ok: true, contactId: id };
  } catch (e) {
    const { status, message } = describeHubspotError(e);
    const error = redact(message);
    log.error('hubspot.booking_contact_sync_failed', {
      id: bookingId,
      status,
      fatal: isAuthError(status),
      error,
    });
    return { ok: false, error: status ? `${status}: ${error}` : error };
  }
}
