import 'server-only';
import type { ContactInput } from '@/lib/validation/contact';
import { hubspotConfigured } from '@/lib/env';
import { log, redact } from '@/lib/logger';
import { describeHubspotError, isAuthError } from './client';
import { upsertContact } from './contacts';
import { ensureDealForContact } from './deals';
import { contactProperties } from './properties';

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
