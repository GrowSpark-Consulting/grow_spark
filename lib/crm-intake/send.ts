import 'server-only';
import type { ContactInput } from '@/lib/validation/contact';
import { crmIntakeConfigured } from '@/lib/env';
import { log } from '@/lib/logger';

/**
 * Website-intake add-on for the Sales & CRM app (POST /api/v1/intake/website-enquiries).
 *
 * This is a pure add-on beside HubSpot. It is called from `after()`, i.e. once
 * the response has already gone, and it NEVER throws. Whatever happens here —
 * CRM down, slow, rejecting the key — the visitor, the stored row, the email,
 * HubSpot and Meta are unaffected.
 *
 * TIME BUDGET. `after()` work shares the route's function time limit
 * (`maxDuration` in app/api/contact/route.ts, 60s). The request itself —
 * database, email, HubSpot — runs first and uses part of that budget, so the
 * CRM call is held to a hard overall deadline of CRM_TOTAL_BUDGET_MS. Worst
 * case, including waits between retries, is that deadline and no more:
 *
 *   attempt 1  up to 25s   (generous: absorbs most of a cold start)
 *   wait 1s
 *   attempt 2  up to 10s   (never past the 40s deadline)
 *   wait 2s
 *   attempt 3  up to 10s   (never past the 40s deadline)
 *   => at most 40s; with ~15s for the request itself, inside 60s.
 *
 * KNOWN LIMITATION — COLD START. If the CRM host sleeps on a free plan it can
 * take 30-60s to wake. A submission arriving right after idle time may time out
 * on every attempt, and is then NOT retried later (no queue, no database
 * column, by design). The only trace is one `crm_intake.failed` log line. The
 * visitor and HubSpot are unaffected; the lead can be re-entered from the
 * stored row / HubSpot. Because every attempt reuses the same Idempotency-Key,
 * a timed-out request that the CRM did process cannot create a second lead.
 *
 * Visitor data (name, email, message, ...) and the API key are never logged.
 */

const FIRST_ATTEMPT_TIMEOUT_MS = 25_000;
const RETRY_TIMEOUT_MS = 10_000;
const RETRY_DELAYS_MS = [1_000, 2_000];
export const CRM_TOTAL_BUDGET_MS = 40_000;
const MAX_SOURCE_PAGE = 2000;

export type CrmIntakeInput = {
  /** The saved contact_submissions id. Sent as the Idempotency-Key. */
  submissionId: string;
  submittedAt: Date;
  sourcePage: string | null;
  data: ContactInput;
};

/** Contract: fields.* aliases name/email/company/website/challenge are mapped by the CRM. */
export function buildCrmPayload(input: CrmIntakeInput) {
  const { data } = input;
  const fields: Record<string, string> = {
    name: data.name,
    email: data.email,
    company: data.company,
    challenge: data.challenge,
    // team_size / revenue / context are unmapped; the CRM keeps them in capturedFields.
    team_size: data.team_size,
    revenue: data.revenue,
  };
  if (data.website) fields.website = data.website;
  if (data.context) fields.context = data.context;

  const payload: Record<string, unknown> = {
    formType: 'contact',
    submittedAt: input.submittedAt.toISOString(),
    fields,
    // Honeypot: always empty here — honeypot hits are dropped before this runs.
    hp: '',
  };
  if (input.sourcePage) payload.sourcePage = input.sourcePage.slice(0, MAX_SOURCE_PAGE);
  return payload;
}

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

export async function sendCrmIntake(input: CrmIntakeInput): Promise<void> {
  try {
    if (!crmIntakeConfigured()) return;

    const url = process.env.CRM_INTAKE_URL!;
    const apiKey = process.env.CRM_INTAKE_API_KEY!;
    const body = JSON.stringify(buildCrmPayload(input));
    const startedAt = Date.now();
    const maxAttempts = RETRY_DELAYS_MS.length + 1;
    let lastReason = 'unknown';

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      const remaining = CRM_TOTAL_BUDGET_MS - (Date.now() - startedAt);
      if (remaining <= 0) {
        lastReason = 'budget_exhausted';
        break;
      }
      const timeout = Math.min(
        attempt === 1 ? FIRST_ATTEMPT_TIMEOUT_MS : RETRY_TIMEOUT_MS,
        remaining,
      );

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
            // Same key on every attempt: a retry can never create a second lead.
            'Idempotency-Key': input.submissionId,
          },
          body,
          signal: AbortSignal.timeout(timeout),
          cache: 'no-store',
        });

        if (response.ok) {
          log.info('crm_intake.sent', { id: input.submissionId, attempt, status: response.status });
          return;
        }
        if (response.status < 500) {
          // 4xx: the CRM rejected it; retrying the same request cannot help.
          log.warn('crm_intake.rejected', { id: input.submissionId, status: response.status });
          return;
        }
        lastReason = `http_${response.status}`;
      } catch (e) {
        lastReason =
          e instanceof Error && (e.name === 'TimeoutError' || e.name === 'AbortError')
            ? 'timeout'
            : 'network_error';
      }

      const delay = RETRY_DELAYS_MS[attempt - 1];
      if (delay === undefined) break;
      if (Date.now() - startedAt + delay >= CRM_TOTAL_BUDGET_MS) break;
      await sleep(delay);
    }

    log.error('crm_intake.failed', { id: input.submissionId, reason: lastReason });
  } catch {
    // Absolute backstop: nothing in this add-on may ever surface.
    log.error('crm_intake.failed', { id: input.submissionId, reason: 'unexpected' });
  }
}
