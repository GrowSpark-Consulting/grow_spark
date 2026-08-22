-- Backends for the two remaining forms, plus the HubSpot columns the booking
-- table never got.
--
-- Numbering note: 0002 was used twice (0002_hubspot_sync.sql and
-- 0002_strategy_session_bookings.sql) by two parallel branches. Both are
-- applied and the runner orders by filename, so the result is deterministic,
-- but this file takes 0004 to keep the sequence unambiguous from here on.

-- ── Careers applications ────────────────────────────────────────────────────
-- Deliberately separate from contact_submissions: an applicant is not a lead.
-- Different fields, different lifecycle, and — importantly — this table must
-- never be joined into anything that feeds the sales pipeline.
create table if not exists careers_applications (
  id              uuid primary key default gen_random_uuid(),
  name            text not null,
  email           text not null,
  what_you_do     text,
  strengths       text,
  problems        text,
  why_grow_spark  text,
  build_or_learn  text,
  link            text,
  status          text not null default 'NEW',
  email_sent      boolean not null default false,
  email_sent_at   timestamptz,
  email_error     text,
  source_page     text,
  ip              text,
  user_agent      text,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

-- No hubspot_* columns here, and that is the point: job applicants must not
-- enter the CRM's sales pipeline. There is nothing to record because nothing
-- is ever synced.

create index if not exists careers_applications_created_at_idx
  on careers_applications (created_at desc);
create index if not exists careers_applications_email_idx
  on careers_applications (email);
create index if not exists careers_applications_undelivered_idx
  on careers_applications (created_at desc)
  where email_sent = false;
create index if not exists careers_applications_ip_created_at_idx
  on careers_applications (ip, created_at desc);

drop trigger if exists careers_applications_set_updated_at on careers_applications;
create trigger careers_applications_set_updated_at
  before update on careers_applications
  for each row execute function set_updated_at();

alter table careers_applications enable row level security;


-- ── Engagement applications ─────────────────────────────────────────────────
-- The long-form qualifier on /strategy/. A lead, so it does sync to HubSpot.
create table if not exists engagement_applications (
  id                    uuid primary key default gen_random_uuid(),
  name                  text not null,
  company               text,
  website               text,
  industry              text,
  revenue               text,
  team_size             text,
  challenge             text,
  already_tried         text,
  desired_outcome       text,
  investment_readiness  text,
  preferred_engagement  text,
  status                text not null default 'NEW',
  email_sent            boolean not null default false,
  email_sent_at         timestamptz,
  email_error           text,
  hubspot_contact_id    text,
  hubspot_deal_id       text,
  hubspot_synced_at     timestamptz,
  hubspot_sync_error    text,
  source_page           text,
  ip                    text,
  user_agent            text,
  created_at            timestamptz not null default now(),
  updated_at            timestamptz not null default now()
);

create index if not exists engagement_applications_created_at_idx
  on engagement_applications (created_at desc);
create index if not exists engagement_applications_undelivered_idx
  on engagement_applications (created_at desc)
  where email_sent = false;
create index if not exists engagement_applications_hubspot_pending_idx
  on engagement_applications (created_at desc)
  where hubspot_synced_at is null;
create index if not exists engagement_applications_ip_created_at_idx
  on engagement_applications (ip, created_at desc);

drop trigger if exists engagement_applications_set_updated_at on engagement_applications;
create trigger engagement_applications_set_updated_at
  before update on engagement_applications
  for each row execute function set_updated_at();

alter table engagement_applications enable row level security;


-- ── HubSpot columns for the booking table ───────────────────────────────────
-- strategy_session_bookings was built without them, so every booking taken so
-- far — paid ones included — exists only in Postgres and has never reached the
-- CRM. Same shape as contact_submissions so one retry query can cover both.
alter table strategy_session_bookings
  add column if not exists hubspot_contact_id text,
  add column if not exists hubspot_deal_id    text,
  add column if not exists hubspot_synced_at  timestamptz,
  add column if not exists hubspot_sync_error text;

create index if not exists strategy_session_bookings_hubspot_pending_idx
  on strategy_session_bookings (created_at desc)
  where hubspot_synced_at is null;
