-- Contact form submissions.
--
-- The table is the source of truth for a lead. The row is written before any
-- notification is attempted, so an SMTP outage can never lose a submission —
-- it only leaves email_sent = false for later retry.

create table if not exists contact_submissions (
  id            uuid         primary key default gen_random_uuid(),

  -- Fields as they exist on the live form (components/sections/ContactForm.tsx).
  -- Column names mirror the HTML input names so the mapping stays obvious.
  name          text         not null,
  email         text         not null,
  company       text         not null,
  team_size     text         not null,
  challenge     text         not null,
  website       text,
  revenue       text         not null,
  context       text,

  -- Delivery tracking. status is deliberately separate from email_sent: a lead
  -- can be worked (status) regardless of whether the notification went out.
  status        text         not null default 'NEW',
  email_sent    boolean      not null default false,
  email_sent_at timestamptz,
  email_error   text,

  -- Request metadata, used for rate limiting and abuse triage.
  source_page   text,
  ip            text,
  user_agent    text,

  created_at    timestamptz  not null default now(),
  updated_at    timestamptz  not null default now(),

  constraint contact_submissions_status_check
    check (status in ('NEW', 'IN_PROGRESS', 'CLOSED', 'SPAM'))
);

-- Only the three indexes the application actually queries on:
-- looking a person up by address, listing newest-first, and finding
-- submissions whose notification failed so they can be retried.
create index if not exists contact_submissions_email_idx
  on contact_submissions (email);

create index if not exists contact_submissions_created_at_idx
  on contact_submissions (created_at desc);

create index if not exists contact_submissions_undelivered_idx
  on contact_submissions (created_at desc)
  where email_sent = false;

-- Rate limiting counts recent rows per IP; without this it is a sequential scan.
create index if not exists contact_submissions_ip_created_at_idx
  on contact_submissions (ip, created_at desc);

-- updated_at is maintained by the database so no code path can forget it.
create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists contact_submissions_set_updated_at on contact_submissions;
create trigger contact_submissions_set_updated_at
  before update on contact_submissions
  for each row execute function set_updated_at();

-- Row Level Security on, with no policies. Supabase hands every browser a
-- public anon key; without RLS that key could read every lead in this table.
-- The API routes connect as the database owner, which bypasses RLS, so server
-- writes are unaffected.
alter table contact_submissions enable row level security;
