-- Meta Conversions API delivery state for the three lead tables.
--
-- Written only for submissions made with cookie consent (gs_consent=granted);
-- without it nothing is sent to Meta and all three columns stay null. No
-- tracking data is stored here — not the _fbp/_fbc cookies, not the hashes,
-- not the request — only whether and when the event went out.
--
-- meta_capi_claimed_at is the at-most-once guard. lib/db.ts claimMetaCapiEvent
-- sets it before the request to Meta, and only while it is still null, so a
-- retry, refresh or duplicated invocation can never send the same Lead twice.
-- meta_capi_sent_at records a 2xx from Meta; meta_capi_error the status and
-- error code of a claimed send that failed.
--
-- Until this is applied, lib/meta/capi.ts cannot claim a row and so sends
-- nothing; the forms themselves are unaffected.
--
-- careers_applications is left alone: a job applicant is not a lead.

alter table contact_submissions
  add column if not exists meta_capi_claimed_at timestamptz,
  add column if not exists meta_capi_sent_at    timestamptz,
  add column if not exists meta_capi_error      text;

alter table engagement_applications
  add column if not exists meta_capi_claimed_at timestamptz,
  add column if not exists meta_capi_sent_at    timestamptz,
  add column if not exists meta_capi_error      text;

alter table strategy_session_bookings
  add column if not exists meta_capi_claimed_at timestamptz,
  add column if not exists meta_capi_sent_at    timestamptz,
  add column if not exists meta_capi_error      text;
