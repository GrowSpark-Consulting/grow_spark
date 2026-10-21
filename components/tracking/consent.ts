import { CONSENT_COOKIE, CONSENT_MAX_AGE, parseConsent, type Consent } from '@/lib/meta/shared';

/**
 * The visitor's cookie choice, browser side.
 *
 * Kept in a first-party cookie rather than localStorage so the server can read
 * it as well: the API routes check it before sending anything to Meta's
 * Conversions API. Host-only (no Domain attribute), so a choice made here
 * never applies to the Growth Audit subdomains.
 */

export function getConsent(): Consent | null {
  return parseConsent(document.cookie);
}

export function saveConsent(value: Consent): void {
  // Secure is dropped only on plain-http localhost, where some browsers would
  // otherwise refuse to store the cookie at all.
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${CONSENT_COOKIE}=${value}; Path=/; Max-Age=${CONSENT_MAX_AGE}; SameSite=Lax${secure}`;
}

const META_COOKIES = ['_fbp', '_fbc'] as const;

/**
 * Delete Meta's first-party cookies.
 *
 * fbevents.js sets them on the registrable domain (.growsparkconsulting.com)
 * rather than the host, and a cookie is only removed by a write with the same
 * Domain it was set with — so the host-only form and every parent domain of
 * the current host are all cleared, stopping short of the bare TLD.
 */
export function clearMetaCookies(): void {
  const labels = window.location.hostname.split('.');
  const domains: Array<string | null> = [null];
  for (let i = 0; i < labels.length - 1; i += 1) domains.push(labels.slice(i).join('.'));

  for (const name of META_COOKIES) {
    for (const domain of domains) {
      document.cookie = `${name}=; Path=/; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT${
        domain ? `; Domain=${domain}` : ''
      }`;
    }
  }
}
