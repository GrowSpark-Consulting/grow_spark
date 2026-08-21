-- Founder Strategy Session bookings + Razorpay payment state.
--
-- Same principle as contact_submissions: the row is the source of truth and is
-- written before Razorpay is ever contacted, so a booking survives a cancelled
-- or failed payment. Shaaz's DB/HubSpot work reads from this table; it does
-- not replace or compete with it.

create table if not exists strategy_session_bookings (
  id                 uuid         primary key default gen_random_uuid(),

  -- Fields as they exist on the live form (components/sections/StrategySessionForm.tsx).
  name               text         not null,
  email              text         not null,
  phone              text,
  company            text,
  website            text,
  revenue            text,
  challenge          text,
  preferred_date     text,
  preferred_time     text,

  -- Amount is fixed server-side; stored for traceability only, never read from
  -- the client as authoritative. Must always be positive — zero or negative
  -- can only mean a bug upstream, never a legitimate booking.
  amount             integer      not null default 999900 check (amount > 0),
  currency           text         not null default 'INR',

  -- Razorpay identifiers. order_id is attached right after the Order is
  -- created (still before Checkout opens); payment_id is attached only once
  -- the payment is verified as captured. Both are unique: a given Razorpay
  -- Order or Payment can only ever belong to one booking.
  razorpay_order_id   text        unique,
  razorpay_payment_id text        unique,

  status             text         not null default 'PENDING',
  paid_at            timestamptz,

  -- Request metadata, used for rate limiting and abuse triage.
  source_page        text,
  ip                 text,
  user_agent         text,

  created_at         timestamptz  not null default now(),
  updated_at         timestamptz  not null default now(),

  constraint strategy_session_bookings_status_check
    check (status in ('PENDING', 'PAID', 'FAILED', 'CANCELLED')),

  -- DB-level twin of the application rule that paid_at is only ever set
  -- alongside status = 'PAID' (see markBookingPaid / markBookingPaidByOrderId
  -- in lib/db.ts, which always set both together): a row can be PAID only
  -- with paid_at set, and can have paid_at set only while PAID.
  constraint strategy_session_bookings_paid_at_check
    check ((status = 'PAID') = (paid_at is not null))
);

create index if not exists strategy_session_bookings_email_idx
  on strategy_session_bookings (email);

create index if not exists strategy_session_bookings_created_at_idx
  on strategy_session_bookings (created_at desc);

-- Rate limiting counts recent rows per IP; without this it is a sequential scan.
create index if not exists strategy_session_bookings_ip_created_at_idx
  on strategy_session_bookings (ip, created_at desc);

-- set_updated_at() already exists from 0001_contact_submissions.sql; reused
-- here rather than redefined.
drop trigger if exists strategy_session_bookings_set_updated_at on strategy_session_bookings;
create trigger strategy_session_bookings_set_updated_at
  before update on strategy_session_bookings
  for each row execute function set_updated_at();

-- A PAID booking is a fact, not a status to be revised: the application code
-- already never issues an update that would downgrade one (every "mark
-- failed"/"mark paid" query in lib/db.ts is scoped with a `status <> 'PAID'`
-- or `status = 'PENDING'` guard), but this trigger makes that a hard database
-- invariant rather than something that only holds as long as every future
-- query remembers to add the same guard.
create or replace function prevent_strategy_session_booking_paid_downgrade()
returns trigger as $$
begin
  if old.status = 'PAID' and new.status <> 'PAID' then
    raise exception
      'strategy_session_bookings %: cannot change status from PAID to %', old.id, new.status;
  end if;
  return new;
end;
$$ language plpgsql;

drop trigger if exists strategy_session_bookings_prevent_paid_downgrade on strategy_session_bookings;
create trigger strategy_session_bookings_prevent_paid_downgrade
  before update on strategy_session_bookings
  for each row execute function prevent_strategy_session_booking_paid_downgrade();

-- Same RLS posture as contact_submissions: enabled, no policies, server
-- connects as owner and bypasses it.
alter table strategy_session_bookings enable row level security;


-- Razorpay webhook events, for idempotency.
--
-- processed_at is deliberately separate from the insert: a row is claimed
-- (inserted) before processing starts, then marked processed once the booking
-- update actually succeeds. A webhook retry that lands while processed_at is
-- still null (e.g. the first attempt crashed mid-update) is safe to reprocess,
-- because the booking updates it drives are themselves idempotent. A retry
-- that lands after processed_at is set is a true duplicate and is skipped.
create table if not exists razorpay_webhook_events (
  id            uuid         primary key default gen_random_uuid(),
  event_id      text         not null unique,
  event_type    text         not null,
  payload       jsonb        not null,
  processed_at  timestamptz,
  created_at    timestamptz  not null default now()
);

alter table razorpay_webhook_events enable row level security;
