import 'server-only';
import { Client } from '@hubspot/api-client';
import { env } from '@/lib/env';

/**
 * The single authenticated HubSpot client.
 *
 * Cached per server instance for the same reason lib/db.ts caches the Postgres
 * client: a serverless function may handle several requests, and rebuilding the
 * SDK per request wastes the connection pool underneath it. The token is read
 * lazily so `next build` still succeeds on a machine with no HubSpot
 * credentials — the static pages must keep building without a CRM.
 */

let cached: Client | null = null;

export function hubspot(): Client {
  if (!cached) {
    cached = new Client({
      accessToken: env.hubspotAccessToken,
      // The SDK retries 429s and 5xx itself; two attempts is enough here
      // because the caller already treats failure as non-fatal and the row is
      // queued for retry in Postgres.
      numberOfApiCallRetries: 2,
    });
  }
  return cached;
}

/** Test seam: drop the cached client so a new token is picked up. */
export function resetHubspotClient(): void {
  cached = null;
}

/**
 * Turn an SDK error into something safe to store in
 * contact_submissions.hubspot_sync_error and to log.
 *
 * HubSpot errors carry the full request context, which includes the
 * Authorization header. Only the status, category and message are kept, and
 * the message is passed through redact() by the caller.
 */
export function describeHubspotError(e: unknown): { status: number | null; message: string } {
  if (typeof e === 'object' && e !== null) {
    const anyErr = e as {
      code?: number;
      status?: number;
      body?: { category?: string; message?: string };
      message?: string;
    };
    const status = anyErr.code ?? anyErr.status ?? null;
    const category = anyErr.body?.category;
    const message = anyErr.body?.message ?? anyErr.message ?? 'Unknown HubSpot error';
    return {
      status: typeof status === 'number' ? status : null,
      message: category ? `${category}: ${message}` : message,
    };
  }
  return { status: null, message: String(e) };
}

/** 401/403 mean the token is wrong; retrying will not help. */
export function isAuthError(status: number | null): boolean {
  return status === 401 || status === 403;
}
