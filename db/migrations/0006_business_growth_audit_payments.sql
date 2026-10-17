-- PayU hosted-checkout records for the Business Growth Audit offer.
-- The amount and currency are fixed server-side and captured for reconciliation.
create table if not exists business_growth_audit_payments (
  id              uuid primary key default gen_random_uuid(),
  txnid           text not null unique,
  name            text not null,
  email           text not null,
  phone           text not null,
  company         text not null,
  website         text,
  team_size       text not null,
  industry        text not null,
  revenue         text not null,
  business_problem text not null,
  amount          integer not null default 99900 check (amount = 99900),
  currency        text not null default 'INR' check (currency = 'INR'),
  mihpayid        text unique,
  status          text not null default 'PENDING'
                    check (status in ('PENDING', 'PAID', 'FAILED')),
  paid_at         timestamptz,
  source_page     text,
  ip              text,
  user_agent      text,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now(),
  constraint business_growth_audit_payments_paid_at_check
    check ((status = 'PAID') = (paid_at is not null))
);

create index if not exists business_growth_audit_payments_email_idx
  on business_growth_audit_payments (email);
create index if not exists business_growth_audit_payments_created_at_idx
  on business_growth_audit_payments (created_at desc);
create index if not exists business_growth_audit_payments_ip_created_at_idx
  on business_growth_audit_payments (ip, created_at desc);

drop trigger if exists business_growth_audit_payments_set_updated_at
  on business_growth_audit_payments;
create trigger business_growth_audit_payments_set_updated_at
  before update on business_growth_audit_payments
  for each row execute function set_updated_at();

create or replace function prevent_business_growth_audit_paid_downgrade()
returns trigger as $$
begin
  if old.status = 'PAID' and new.status <> 'PAID' then
    raise exception 'business_growth_audit_payments %: cannot downgrade PAID status', old.id;
  end if;
  return new;
end;
$$ language plpgsql;

drop trigger if exists business_growth_audit_payments_prevent_paid_downgrade
  on business_growth_audit_payments;
create trigger business_growth_audit_payments_prevent_paid_downgrade
  before update on business_growth_audit_payments
  for each row execute function prevent_business_growth_audit_paid_downgrade();

alter table business_growth_audit_payments enable row level security;
