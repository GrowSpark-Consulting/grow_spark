/**
 * Meta Pixel / Conversions API — values shared by the browser and the server.
 *
 * Client Components import this file, so nothing secret may ever live here.
 * The Pixel ID is public by design (it ships in every page that loads the
 * Pixel); the Conversions API access token is read only in lib/meta/capi.ts,
 * behind `server-only`.
 */

/**
 * The Pixel (dataset) ID, or '' when unset — and an unset ID switches the
 * whole feature off: no banner, no Pixel, no server events.
 *
 * Read through NEXT_PUBLIC_*, so Next inlines the value into client bundles at
 * build time; changing it needs a redeploy, not a restart. Anything that is not
 * purely digits is treated as unset, because the ID is also interpolated into
 * the Graph API URL on the server.
 */
export function metaPixelId(): string {
  const id = (process.env.NEXT_PUBLIC_META_PIXEL_ID ?? '').trim();
  return /^\d+$/.test(id) ? id : '';
}

/**
 * Attached to every event this site sends. The same Pixel also serves the two
 * Growth Audit subdomains ("paid" and "free"); this is what separates this
 * site's activity from theirs in Events Manager.
 */
export const CONTENT_CATEGORY = 'website';

/** First-party cookie holding the visitor's choice, readable by the server too. */
export const CONSENT_COOKIE = 'gs_consent';

/** Window event saveConsent() dispatches, detail = the new Consent; the Google tag listens. */
export const CONSENT_EVENT = 'gs:consent';

/** 180 days, in seconds. */
export const CONSENT_MAX_AGE = 180 * 24 * 60 * 60;

export type Consent = 'granted' | 'denied';

/**
 * content_name for each form that produces a Lead, used identically by the
 * browser event and the server event so the pair reads the same in Events
 * Manager. The careers application is deliberately absent: a job applicant is
 * not a sales lead, the same reason it never reaches HubSpot.
 */
export const LEAD_FORMS = {
  contact: 'Contact Form',
  frameworkAssessment: 'Transformation Framework Assessment',
  engagement: 'Engagement Application',
  strategySession: 'Founder Strategy Session',
  growthIntensive: 'Founder Growth Intensive',
} as const;

/** One cookie's value from a Cookie header or document.cookie, or null. */
export function readCookie(cookieHeader: string | null | undefined, name: string): string | null {
  if (!cookieHeader) return null;
  for (const part of cookieHeader.split(';')) {
    const eq = part.indexOf('=');
    if (eq === -1 || part.slice(0, eq).trim() !== name) continue;
    const raw = part.slice(eq + 1).trim();
    try {
      return decodeURIComponent(raw);
    } catch {
      return raw;
    }
  }
  return null;
}

/**
 * The stored choice. Anything other than an explicit "granted" or "denied" —
 * no cookie, an old value, a tampered one — counts as no choice yet, which
 * means no tracking.
 */
export function parseConsent(cookieHeader: string | null | undefined): Consent | null {
  const value = readCookie(cookieHeader, CONSENT_COOKIE);
  return value === 'granted' || value === 'denied' ? value : null;
}
