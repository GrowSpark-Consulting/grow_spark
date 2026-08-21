-- Adds an engagement/product distinction to strategy_session_bookings, so the
-- ₹15,999 Founder Growth Intensive can share the same table, API routes and
-- verification logic as the existing ₹9,999 Founder Strategy Session instead
-- of a parallel, duplicated payment architecture.
--
-- 0002_strategy_session_bookings.sql has already been applied (the Founder
-- Strategy Session flow is live), so this ships as its own migration rather
-- than an edit to that file — the migration runner tracks applied files by
-- name and would never re-run an edited 0002.
--
-- Existing rows (all Founder Strategy Session bookings) get 'strategy_session'
-- via the column default; this migration does not change their meaning, and
-- adding a NOT NULL column with a default is a metadata-only operation on
-- Postgres 11+, not a table rewrite.

alter table strategy_session_bookings
  add column if not exists engagement text not null default 'strategy_session';

alter table strategy_session_bookings
  drop constraint if exists strategy_session_bookings_engagement_check;
alter table strategy_session_bookings
  add constraint strategy_session_bookings_engagement_check
  check (engagement in ('strategy_session', 'growth_intensive'));
