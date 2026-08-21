-- HubSpot synchronisation metadata for contact_submissions.
--
-- Supabase stays the source of truth: these columns record what happened when
-- the row was pushed to HubSpot, they never gate whether the row exists. A
-- submission with hubspot_contact_id null is a perfectly valid lead that simply
-- has not reached the CRM yet.
--
-- All nullable, all additive. 0001 is already applied in production and is not
-- touched.

alter table contact_submissions
  add column if not exists hubspot_contact_id text,
  add column if not exists hubspot_deal_id    text,
  add column if not exists hubspot_synced_at  timestamptz,
  add column if not exists hubspot_sync_error text;

-- Retry queue. Mirrors contact_submissions_undelivered_idx: partial, so it
-- indexes only the rows that still need work rather than the whole table.
-- "Not yet in HubSpot" is the condition worth finding quickly — whether it
-- failed loudly or was never attempted.
create index if not exists contact_submissions_hubspot_pending_idx
  on contact_submissions (created_at desc)
  where hubspot_synced_at is null;

-- One HubSpot contact per submission row. Duplicate submissions from the same
-- person upsert onto the same HubSpot contact by email, so this is not unique
-- across the table — it only speeds up "which row produced this contact".
create index if not exists contact_submissions_hubspot_contact_idx
  on contact_submissions (hubspot_contact_id)
  where hubspot_contact_id is not null;
