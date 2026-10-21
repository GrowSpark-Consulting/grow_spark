import 'server-only';
import {
  claimMetaCapiEvent,
  markMetaCapiFailed,
  markMetaCapiSent,
  type MetaCapiTable,
} from '@/lib/db';
import { env, metaCapiConfigured } from '@/lib/env';
import { log, redact } from '@/lib/logger';
import { SITE_URL } from '@/lib/site';
import {
  CONTENT_CATEGORY,
  LEAD_FORMS,
  metaPixelId,
  parseConsent,
  readCookie,
} from './shared';
import { buildUserData, type MetaPerson } from './userData';

/**
 * Meta Conversions API — the server-side half of the Lead event.
 *
 * The API routes call sendMetaLead through `after()`, once the submission row
 * is committed and the response is on its way, so Meta being slow, down or
 * misconfigured can never delay or fail a visitor's submission. It never
 * throws: every outcome comes back as data, the way the HubSpot sync does.
 *
 * Three gates, in order, and nothing is sent or stored unless all pass:
 *   1. configured — a Pixel ID and an access token are both set;
 *   2. consent    — the request that carried the form had gs_consent=granted;
 *   3. claim      — this row has never been claimed for Meta before, which is
 *                   what makes the event at-most-once across retries,
 *                   refreshes and duplicated invocations.
 *
 * The row id is the event_id. The browser fires its Lead with the same id as
 * eventID, which is how Meta recognises the two as one lead.
 */

const DEFAULT_GRAPH_API_VERSION = 'v24.0';
const REQUEST_TIMEOUT_MS = 8000;

/** Both the contact page and the landing page post to /api/contact/. */
const FRAMEWORK_LANDING_PATH = '/growspark-transformation-framework/';

/** Everything sendMetaLead needs from the request, read while it is in scope. */
export type MetaLeadContext = {
  cookieHeader: string | null;
  ip: string | null;
  userAgent: string | null;
  sourcePage: string | null;
};

export function metaLeadContext(request: Request, ip: string | null): MetaLeadContext {
  return {
    cookieHeader: request.headers.get('cookie'),
    ip,
    userAgent: request.headers.get('user-agent'),
    sourcePage: request.headers.get('referer'),
  };
}

/**
 * content_name for an /api/contact/ submission. The page it was sent from is
 * the only thing that tells the two forms apart; LeadForm.tsx and
 * ContactForm.tsx use the same names on the browser side.
 */
export function contactFormName(sourcePage: string | null): string {
  try {
    if (sourcePage && new URL(sourcePage).pathname.startsWith(FRAMEWORK_LANDING_PATH)) {
      return LEAD_FORMS.frameworkAssessment;
    }
  } catch {
    // Not a URL — fall through to the contact form.
  }
  return LEAD_FORMS.contact;
}

export type MetaLead = {
  table: MetaCapiTable;
  /** The committed row's id, used as event_id. */
  id: string;
  formName: string;
  person: MetaPerson;
  context: MetaLeadContext;
};

export type MetaLeadResult =
  | { ok: true }
  | { ok: false; skipped: 'not_configured' | 'no_consent' | 'already_claimed' }
  | { ok: false; error: string };

type GraphResponse = {
  events_received?: number;
  fbtrace_id?: string;
  error?: { type?: string; code?: number; error_subcode?: number; fbtrace_id?: string };
};

function graphApiVersion(): string {
  const version = process.env.META_GRAPH_API_VERSION?.trim();
  return version && /^v\d+\.\d+$/.test(version) ? version : DEFAULT_GRAPH_API_VERSION;
}

/** The page the form was on, without its query string or fragment. */
function eventSourceUrl(sourcePage: string | null): string {
  if (sourcePage) {
    try {
      const url = new URL(sourcePage);
      return `${url.origin}${url.pathname}`;
    } catch {
      // Not a URL — fall back to the site root.
    }
  }
  return `${SITE_URL}/`;
}

function errorText(e: unknown): string {
  return redact(e instanceof Error ? e.message : String(e));
}

/** A bookkeeping write that fails is logged, never allowed to change the outcome. */
async function record(write: () => Promise<void>, lead: MetaLead): Promise<void> {
  try {
    await write();
  } catch (e) {
    log.error('meta_capi.status_update_failed', { table: lead.table, id: lead.id, error: errorText(e) });
  }
}

export async function sendMetaLead(lead: MetaLead): Promise<MetaLeadResult> {
  const { table, id, context } = lead;
  try {
    const pixelId = metaPixelId();
    if (!pixelId || !metaCapiConfigured()) return { ok: false, skipped: 'not_configured' };

    if (parseConsent(context.cookieHeader) !== 'granted') {
      return { ok: false, skipped: 'no_consent' };
    }

    try {
      if (!(await claimMetaCapiEvent(table, id))) {
        log.info('meta_capi.already_claimed', { table, id });
        return { ok: false, skipped: 'already_claimed' };
      }
    } catch (e) {
      // Most likely db/migrations/0006_meta_capi.sql has not been applied.
      // Without the claim there is no at-most-once guarantee, so nothing is sent.
      log.error('meta_capi.claim_failed', { table, id, error: errorText(e) });
      return { ok: false, error: 'claim_failed' };
    }

    const testEventCode = process.env.META_TEST_EVENT_CODE?.trim();
    const body = {
      data: [
        {
          event_name: 'Lead',
          event_time: Math.floor(Date.now() / 1000),
          event_id: id,
          action_source: 'website',
          event_source_url: eventSourceUrl(context.sourcePage),
          user_data: buildUserData(lead.person, {
            ip: context.ip,
            userAgent: context.userAgent,
            fbp: readCookie(context.cookieHeader, '_fbp'),
            fbc: readCookie(context.cookieHeader, '_fbc'),
          }),
          custom_data: { content_name: lead.formName, content_category: CONTENT_CATEGORY },
        },
      ],
      ...(testEventCode ? { test_event_code: testEventCode } : {}),
      // In the body, never the URL: query strings end up in access logs,
      // proxies and error reports.
      access_token: env.metaCapiAccessToken,
    };

    let failure: string;
    try {
      const response = await fetch(
        `https://graph.facebook.com/${graphApiVersion()}/${pixelId}/events`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
          signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
        },
      );
      const result = (await response.json().catch(() => null)) as GraphResponse | null;

      if (response.ok) {
        log.info('meta_capi.sent', {
          table,
          id,
          events_received: result?.events_received,
          fbtrace_id: result?.fbtrace_id,
          test: Boolean(testEventCode),
        });
        await record(() => markMetaCapiSent(table, id), lead);
        return { ok: true };
      }

      // Codes only. Meta's error message is left out of the log on purpose:
      // it can quote back request parameters.
      const error = result?.error;
      failure = `http_${response.status}`
        + (error?.code ? ` code=${error.code}` : '')
        + (error?.error_subcode ? ` subcode=${error.error_subcode}` : '');
      log.warn('meta_capi.rejected', {
        table,
        id,
        status: response.status,
        code: error?.code,
        subcode: error?.error_subcode,
        type: error?.type,
        fbtrace_id: error?.fbtrace_id,
      });
    } catch (e) {
      failure = e instanceof Error && e.name === 'TimeoutError' ? 'timeout' : 'network_error';
      log.warn('meta_capi.request_failed', { table, id, reason: failure });
    }

    // The claim stays: a failed Lead is recorded, not resent.
    await record(() => markMetaCapiFailed(table, id, failure), lead);
    return { ok: false, error: failure };
  } catch (e) {
    log.error('meta_capi.unexpected_error', { table, id, error: errorText(e) });
    return { ok: false, error: 'unexpected_error' };
  }
}
