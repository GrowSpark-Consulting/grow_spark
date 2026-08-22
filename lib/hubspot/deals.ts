import 'server-only';
import { hubspot } from './client';
import { env } from '@/lib/env';

/**
 * Deal creation and contact association, for the strategy-session and
 * engagement workflows.
 *
 * Called by the strategy-session and growth-intensive booking routes when
 * HUBSPOT_DEAL_PIPELINE_ID and HUBSPOT_DEAL_STAGE_ID are configured. The
 * engagement-application route syncs contacts only (no deal). The
 * careers-application route deliberately has no function here: a job
 * applicant must never enter the sales pipeline.
 */

/** HubSpot's association type id for deal -> contact. */
const DEAL_TO_CONTACT = 3;

export type DealInput = {
  /** Shown in the pipeline, e.g. "Strategy Session — Brightleaf Foods". */
  dealname: string;
  contactId: string;
  /** Extra HubSpot deal properties, already mapped to internal names. */
  properties?: Record<string, string>;
};

/**
 * Create a deal and associate it with an existing contact.
 *
 * Pipeline and stage come from the environment, never hardcoded: they are
 * portal-specific ids that differ between a sandbox and production, and baking
 * one in would silently file deals into the wrong pipeline after a portal
 * change.
 */
export async function createDealForContact(input: DealInput): Promise<string> {
  const created = await hubspot().crm.deals.basicApi.create({
    properties: {
      dealname: input.dealname,
      pipeline: env.hubspotDealPipelineId,
      dealstage: env.hubspotDealStageId,
      ...input.properties,
    },
    associations: [
      {
        to: { id: input.contactId },
        types: [
          {
            associationCategory: 'HUBSPOT_DEFINED' as never,
            associationTypeId: DEAL_TO_CONTACT,
          },
        ],
      },
    ],
  });
  return created.id;
}

/**
 * Create a deal only if this submission has not already produced one.
 *
 * The caller passes whatever `hubspot_deal_id` is stored on the row. A retry of
 * a partially-successful sync — contact created, deal failed — must not create
 * a second deal for the same booking, so an existing id short-circuits.
 */
export async function ensureDealForContact(
  existingDealId: string | null,
  input: DealInput,
): Promise<{ id: string; created: boolean }> {
  if (existingDealId) return { id: existingDealId, created: false };
  const id = await createDealForContact(input);
  return { id, created: true };
}
