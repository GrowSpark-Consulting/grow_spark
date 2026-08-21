import 'server-only';
import { hubspot, describeHubspotError } from './client';

/**
 * Contact upsert, keyed on email.
 *
 * Idempotency is the whole point of this module. The same person filling the
 * form twice, or a retry of a sync that already half-succeeded, must land on
 * one HubSpot contact rather than two. Email is HubSpot's natural identity for
 * contacts, so it is the key used here.
 */

/**
 * Look a contact up by email.
 *
 * Uses the CRM search API rather than the legacy get-by-email endpoint, which
 * is the currently supported path. Returns null when nobody matches — a 404
 * from HubSpot is an answer, not a failure.
 */
export async function findContactIdByEmail(email: string): Promise<string | null> {
  try {
    const res = await hubspot().crm.contacts.searchApi.doSearch({
      filterGroups: [
        {
          filters: [{ propertyName: 'email', operator: 'EQ' as never, value: email }],
        },
      ],
      properties: ['email'],
      limit: 1,
      after: '0',
      sorts: [],
    });
    return res.results?.[0]?.id ?? null;
  } catch (e) {
    const { status } = describeHubspotError(e);
    if (status === 404) return null;
    throw e;
  }
}

/**
 * Create the contact, or update it if that email is already in the portal.
 *
 * Create-then-fallback rather than search-then-decide: HubSpot answers a
 * duplicate create with 409 and names the existing id, so the happy path for a
 * new lead costs one call instead of two. The search only runs if the 409 does
 * not carry an id.
 */
export async function upsertContact(
  properties: Record<string, string>,
): Promise<{ id: string; created: boolean }> {
  const email = properties.email;
  if (!email) throw new Error('upsertContact requires an email property');

  try {
    const created = await hubspot().crm.contacts.basicApi.create({
      properties,
      associations: [],
    });
    return { id: created.id, created: true };
  } catch (e) {
    const { status, message } = describeHubspotError(e);

    // 409 Conflict — the email already exists. HubSpot usually embeds the
    // existing id in the message; fall back to a search when it does not.
    if (status === 409) {
      const existingId = message.match(/\b(\d{6,})\b/)?.[1] ?? (await findContactIdByEmail(email));
      if (!existingId) throw e;
      await hubspot().crm.contacts.basicApi.update(existingId, { properties });
      return { id: existingId, created: false };
    }

    throw e;
  }
}
