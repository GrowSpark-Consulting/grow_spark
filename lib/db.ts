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
