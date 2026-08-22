-- Email on engagement_applications.
--
-- The form shipped without any contact channel — no email, no phone — while the
-- panel it sits in promises that Grow Spark "follows up with appropriate next
-- steps". There was no way to keep that promise, and HubSpot identifies
-- contacts by email, so the CRM sync declined rather than create orphan records.
--
-- Nullable rather than NOT NULL: rows already captured under the old form have
-- no email and must not be invented or deleted. The application layer requires
-- it for new submissions, so this backfills as null and fills forward.
alter table engagement_applications
  add column if not exists email text;

-- Mirrors contact_submissions_email_idx: the column the CRM keys on, and the
-- one a human searches by when a follow-up lands.
create index if not exists engagement_applications_email_idx
  on engagement_applications (email);
