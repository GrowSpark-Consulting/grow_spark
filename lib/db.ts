import 'server-only';
import postgres from 'postgres';
import { env } from './env';

/**
 * Postgres connection.
 *
 * Two settings are load-bearing on serverless:
 *
 * - `prepare: false`. Supabase's connection string on port 6543 is the
 *   transaction pooler, which multiplexes statements across backends and
 *   therefore cannot support prepared statements. Leaving prepare on produces
 *   "prepared statement already exists" once traffic overlaps.
 * - `max: 1`. Each serverless invocation is its own process, so a large pool
 *   per invocation multiplies into hundreds of connections against the pooler's
 *   limit. One connection per invocation is the correct shape here.
 *
 * The client is cached on globalThis so Next's dev-mode module reloading does
 * not open a new pool on every edit.
 */
declare global {
  // eslint-disable-next-line no-var
  var __contactDb: ReturnType<typeof postgres> | undefined;
}

export function db() {
  if (!globalThis.__contactDb) {
    globalThis.__contactDb = postgres(env.databaseUrl, {
      prepare: false,
      max: 1,
      idle_timeout: 20,
      connect_timeout: 10,
    });
  }
  return globalThis.__contactDb;
}

export type ContactSubmissionInput = {
  name: string;
  email: string;
  company: string;
  team_size: string;
  challenge: string;
  website: string | null;
  revenue: string;
  context: string | null;
  source_page: string | null;
  ip: string | null;
  user_agent: string | null;
};

export type ContactSubmissionRow = {
  id: string;
  created_at: Date;
};

/** Insert the submission. This runs before any notification is attempted. */
export async function insertContactSubmission(
  input: ContactSubmissionInput,
): Promise<ContactSubmissionRow> {
  const sql = db();
  const [row] = await sql<ContactSubmissionRow[]>`
    insert into contact_submissions ${sql(input)}
    returning id, created_at
  `;
  return row;
}

export async function markEmailSent(id: string): Promise<void> {
  const sql = db();
  await sql`
    update contact_submissions
       set email_sent = true, email_sent_at = now(), email_error = null
     where id = ${id}
  `;
}

/**
 * Record why a notification failed. The row itself is never deleted — a failed
 * send leaves a lead that is stored but unnotified, which is exactly what the
 * undelivered index exists to find.
 */
export async function markEmailFailed(id: string, error: string): Promise<void> {
  const sql = db();
  await sql`
    update contact_submissions
       set email_sent = false, email_sent_at = null, email_error = ${error.slice(0, 500)}
     where id = ${id}
  `;
}

/**
 * Record a successful HubSpot sync.
 *
 * Clearing hubspot_sync_error matters: it is what takes the row out of the
 * retry set once a previously failing sync finally lands.
 */
export async function markHubspotSynced(
  id: string,
  contactId: string,
  dealId?: string | null,
): Promise<void> {
  const sql = db();
  await sql`
    update contact_submissions
       set hubspot_contact_id = ${contactId},
           hubspot_deal_id    = ${dealId ?? null},
           hubspot_synced_at  = now(),
           hubspot_sync_error = null
     where id = ${id}
  `;
}

/**
 * Record why a HubSpot sync failed. hubspot_synced_at stays null, which is what
 * contact_submissions_hubspot_pending_idx indexes, so the row remains findable
 * for retry. A contact id is still stored when the contact succeeded and only
 * the deal failed — that way a retry updates the same contact instead of
 * creating a second one.
 */
export async function markHubspotFailed(
  id: string,
  error: string,
  contactId?: string | null,
): Promise<void> {
  const sql = db();
  await sql`
    update contact_submissions
       set hubspot_sync_error = ${error.slice(0, 500)},
           hubspot_synced_at  = null,
           hubspot_contact_id = coalesce(${contactId ?? null}, hubspot_contact_id)
     where id = ${id}
  `;
}

/** Submissions from one IP within the window, used for rate limiting. */
export async function recentSubmissionCount(
  ip: string,
  windowMinutes: number,
): Promise<number> {
  const sql = db();
  const [row] = await sql<{ count: string }[]>`
    select count(*)::text as count
      from contact_submissions
     where ip = ${ip}
       and created_at > now() - (${windowMinutes} * interval '1 minute')
  `;
  return Number(row?.count ?? 0);
}

/**
 * Founder Strategy Session bookings + Razorpay payment state.
 *
 * Mirrors the contact_submissions functions above: insert first (the lead
 * record), attach the Razorpay Order once it exists, then move status forward
 * only on a verified result. Every status transition here is idempotent —
 * calling it twice with the same inputs is safe — because both the Checkout
 * verify route and the webhook route can legitimately race to update the same
 * booking.
 */

export type StrategySessionEngagement = 'strategy_session' | 'growth_intensive';

export type StrategySessionBookingInput = {
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  website: string | null;
  revenue: string | null;
  challenge: string | null;
  date: string | null;
  time: string | null;
  source_page: string | null;
  ip: string | null;
  user_agent: string | null;
  /** Defaults to 'strategy_session' (the ₹9,999 Founder Strategy Session) when omitted. */
  engagement?: StrategySessionEngagement;
  /**
   * Overrides the table's own default (999900 / 'INR'). Omit for the ₹9,999
   * Founder Strategy Session; set explicitly for any other engagement, e.g.
   * GROWTH_INTENSIVE_AMOUNT_PAISE for the Founder Growth Intensive.
   */
  amount?: number;
  currency?: string;
};

export type StrategySessionBookingRow = {
  id: string;
  created_at: Date;
};

export type StrategySessionBooking = {
  id: string;
  razorpay_order_id: string | null;
  status: 'PENDING' | 'PAID' | 'FAILED' | 'CANCELLED';
  amount: number;
  currency: string;
};

/** Insert the booking. Runs before the Razorpay Order is created. */
export async function insertStrategySessionBooking(
  input: StrategySessionBookingInput,
): Promise<StrategySessionBookingRow> {
  const sql = db();
  const {
    date,
    time,
    engagement,
    ...rest
  } = input;
  const [row] = await sql<StrategySessionBookingRow[]>`
    insert into strategy_session_bookings ${sql({
    ...rest,
    preferred_date: date,
    preferred_time: time,
    engagement: engagement ?? 'strategy_session',
  })}
    returning id, created_at
  `;
  return row;
}

/** Attaches the server-created Razorpay Order ID to an existing booking row. */
export async function attachRazorpayOrder(bookingId: string, orderId: string): Promise<void> {
  const sql = db();
  await sql`
    update strategy_session_bookings
       set razorpay_order_id = ${orderId}
     where id = ${bookingId}
  `;
}

/**
 * Used by the Checkout verify route to confirm a Checkout callback belongs to
 * this exact booking and to know the amount/currency *that booking* was
 * actually created for — not a hardcoded constant — so the same route can
 * verify a ₹9,999 Founder Strategy Session payment and a ₹15,999 Founder
 * Growth Intensive payment without knowing engagement-specific amounts.
 */
export async function getStrategySessionBookingById(
  bookingId: string,
): Promise<StrategySessionBooking | null> {
  const sql = db();
  const [row] = await sql<StrategySessionBooking[]>`
    select id, razorpay_order_id, status, amount, currency
      from strategy_session_bookings
     where id = ${bookingId}
  `;
  return row ?? null;
}

export type StrategySessionBookingSummary = {
  status: 'PENDING' | 'PAID' | 'FAILED' | 'CANCELLED';
  engagement: StrategySessionEngagement;
  amount: number;
};

/**
 * Used only by the payment-success page to decide what to render. Deliberately
 * returns nothing beyond status/engagement/amount — the success page must not
 * become a way to read back a stranger's contact details from a guessed or
 * shared URL. engagement/amount let the page show the right product name and
 * price instead of assuming every booking is the Founder Strategy Session.
 */
export async function getStrategySessionBookingSummary(
  bookingId: string,
): Promise<StrategySessionBookingSummary | null> {
  const sql = db();
  const [row] = await sql<StrategySessionBookingSummary[]>`
    select status, engagement, amount
      from strategy_session_bookings
     where id = ${bookingId}
  `;
  return row ?? null;
}

/**
 * Marks a booking paid by its own id, used by the Checkout verify route
 * immediately after signature + payment-status verification succeed.
 * `status <> 'PAID'` makes a second call (e.g. the browser retrying verify
 * after a network hiccup) a safe no-op rather than an error.
 */
export async function markBookingPaid(bookingId: string, paymentId: string): Promise<void> {
  const sql = db();
  await sql`
    update strategy_session_bookings
       set status = 'PAID', razorpay_payment_id = ${paymentId}, paid_at = now()
     where id = ${bookingId}
       and status <> 'PAID'
  `;
}

/**
 * Marks a booking paid by Razorpay Order ID, used by the webhook handler,
 * which never sees the booking id — only what Razorpay itself reports.
 */
export async function markBookingPaidByOrderId(
  orderId: string,
  paymentId: string | null,
): Promise<void> {
  const sql = db();
  await sql`
    update strategy_session_bookings
       set status = 'PAID',
           razorpay_payment_id = coalesce(${paymentId}, razorpay_payment_id),
           paid_at = now()
     where razorpay_order_id = ${orderId}
       and status <> 'PAID'
  `;
}

/**
 * Marks a booking failed by Razorpay Order ID. Guarded to only ever move a
 * booking out of PENDING: a `payment.failed` webhook that arrives after the
 * booking was already marked PAID (out-of-order delivery, or a retried
 * payment on the same order) must never downgrade a successful booking.
 */
export async function markBookingFailedByOrderId(orderId: string): Promise<void> {
  const sql = db();
  await sql`
    update strategy_session_bookings
       set status = 'FAILED'
     where razorpay_order_id = ${orderId}
       and status = 'PENDING'
  `;
}

/** Bookings from one IP within the window, used for rate limiting. */
export async function recentBookingCount(ip: string, windowMinutes: number): Promise<number> {
  const sql = db();
  const [row] = await sql<{ count: string }[]>`
    select count(*)::text as count
      from strategy_session_bookings
     where ip = ${ip}
       and created_at > now() - (${windowMinutes} * interval '1 minute')
  `;
  return Number(row?.count ?? 0);
}

/**
 * Claims a webhook event for processing.
 *
 * Returns 'new' the first time an event id is seen (caller should process it),
 * 'retry' if the event was claimed before but never finished processing
 * (caller should safely reprocess — the booking updates it drives are
 * idempotent), and 'duplicate' if it was already fully processed (caller
 * should acknowledge and do nothing).
 */
export async function claimWebhookEvent(
  eventId: string,
  eventType: string,
  payload: Record<string, unknown>,
): Promise<'new' | 'retry' | 'duplicate'> {
  const sql = db();
  // The payload is an arbitrary Razorpay-shaped object decoded from JSON, not
  // a type postgres's recursive JSONValue can express structurally — this
  // boundary is where dynamic JSON meets a typed query, so the cast is
  // intentional rather than a type-safety gap.
  const [inserted] = await sql<{ id: string }[]>`
    insert into razorpay_webhook_events (event_id, event_type, payload)
    values (${eventId}, ${eventType}, ${sql.json(payload as never)})
    on conflict (event_id) do nothing
    returning id
  `;
  if (inserted) return 'new';

  const [existing] = await sql<{ processed_at: Date | null }[]>`
    select processed_at from razorpay_webhook_events where event_id = ${eventId}
  `;
  return existing?.processed_at ? 'duplicate' : 'retry';
}

export async function markWebhookEventProcessed(eventId: string): Promise<void> {
  const sql = db();
  await sql`
    update razorpay_webhook_events
       set processed_at = now()
     where event_id = ${eventId}
  `;
}

/* ── Careers applications ─────────────────────────────────────────────────── */

export async function insertCareersApplication(
  input: Record<string, string | null>,
): Promise<{ id: string; created_at: Date }> {
  const sql = db();
  const [row] = await sql<{ id: string; created_at: Date }[]>`
    insert into careers_applications ${sql(
    input,
    'name', 'email', 'what_you_do', 'strengths', 'problems',
    'why_grow_spark', 'build_or_learn', 'link',
    'source_page', 'ip', 'user_agent',
  )}
    returning id, created_at
  `;
  return row!;
}

export async function markCareersEmailSent(id: string): Promise<void> {
  const sql = db();
  await sql`
    update careers_applications
       set email_sent = true, email_sent_at = now(), email_error = null
     where id = ${id}
  `;
}

export async function markCareersEmailFailed(id: string, error: string): Promise<void> {
  const sql = db();
  await sql`
    update careers_applications
       set email_sent = false, email_sent_at = null, email_error = ${error.slice(0, 500)}
     where id = ${id}
  `;
}

export async function recentCareersCount(ip: string, windowMinutes: number): Promise<number> {
  const sql = db();
  const [row] = await sql<{ count: number }[]>`
    select count(*)::int as count
      from careers_applications
     where ip = ${ip}
       and created_at > now() - (${windowMinutes} || ' minutes')::interval
  `;
  return row?.count ?? 0;
}

/* ── Engagement applications ──────────────────────────────────────────────── */

export async function insertEngagementApplication(
  input: Record<string, string | null>,
): Promise<{ id: string; created_at: Date }> {
  const sql = db();
  const [row] = await sql<{ id: string; created_at: Date }[]>`
    insert into engagement_applications ${sql(
    input,
    'name', 'email', 'company', 'website', 'industry', 'revenue', 'team_size',
    'challenge', 'already_tried', 'desired_outcome',
    'investment_readiness', 'preferred_engagement',
    'source_page', 'ip', 'user_agent',
  )}
    returning id, created_at
  `;
  return row!;
}

export async function markEngagementEmailSent(id: string): Promise<void> {
  const sql = db();
  await sql`
    update engagement_applications
       set email_sent = true, email_sent_at = now(), email_error = null
     where id = ${id}
  `;
}

export async function markEngagementEmailFailed(id: string, error: string): Promise<void> {
  const sql = db();
  await sql`
    update engagement_applications
       set email_sent = false, email_sent_at = null, email_error = ${error.slice(0, 500)}
     where id = ${id}
  `;
}

export async function recentEngagementCount(ip: string, windowMinutes: number): Promise<number> {
  const sql = db();
  const [row] = await sql<{ count: number }[]>`
    select count(*)::int as count
      from engagement_applications
     where ip = ${ip}
       and created_at > now() - (${windowMinutes} || ' minutes')::interval
  `;
  return row?.count ?? 0;
}

/**
 * HubSpot sync state for any of the submission tables.
 *
 * One helper rather than three near-identical pairs: the columns are the same
 * shape everywhere by design, and the table name is a fixed literal from the
 * caller, never user input.
 */
type SyncTable = 'engagement_applications' | 'strategy_session_bookings';

export async function markTableHubspotSynced(
  table: SyncTable,
  id: string,
  contactId: string,
  dealId?: string | null,
): Promise<void> {
  const sql = db();
  await sql`
    update ${sql(table)}
       set hubspot_contact_id = ${contactId},
           hubspot_deal_id    = ${dealId ?? null},
           hubspot_synced_at  = now(),
           hubspot_sync_error = null
     where id = ${id}
  `;
}

export async function markTableHubspotFailed(
  table: SyncTable,
  id: string,
  error: string,
  contactId?: string | null,
): Promise<void> {
  const sql = db();
  await sql`
    update ${sql(table)}
       set hubspot_sync_error = ${error.slice(0, 500)},
           hubspot_synced_at  = null,
           hubspot_contact_id = coalesce(${contactId ?? null}, hubspot_contact_id)
     where id = ${id}
  `;
}
