import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { installFakeBrowser } from './fakeBrowser';

/**
 * The consent cookie is the single source of truth for both halves of the
 * integration — the Pixel in the browser and the Conversions API on the
 * server — so its exact attributes are pinned here.
 */

let browser: ReturnType<typeof installFakeBrowser>;

afterEach(() => browser.uninstall());

describe('saveConsent / getConsent', () => {
  beforeEach(() => {
    vi.resetModules();
    browser = installFakeBrowser();
  });

  it('starts with no choice', async () => {
    const { getConsent } = await import('../consent');
    expect(getConsent()).toBeNull();
  });

  it('writes a first-party, host-only cookie with the required attributes', async () => {
    const { saveConsent, getConsent } = await import('../consent');
    saveConsent('granted');
    expect(browser.cookieWrites).toEqual([
      'gs_consent=granted; Path=/; Max-Age=15552000; SameSite=Lax; Secure',
    ]);
    // Host-only: no Domain attribute, so the Growth Audit subdomains never inherit it.
    expect(browser.cookieWrites[0]).not.toMatch(/Domain=/i);
    expect(getConsent()).toBe('granted');
  });

  it('keeps 180 days as the lifetime', async () => {
    const { CONSENT_MAX_AGE } = await import('@/lib/meta/shared');
    expect(CONSENT_MAX_AGE).toBe(180 * 24 * 60 * 60);
  });

  it('replaces an earlier choice', async () => {
    const { saveConsent, getConsent } = await import('../consent');
    saveConsent('granted');
    saveConsent('denied');
    expect(getConsent()).toBe('denied');
  });

  it('treats an unrecognised value as no choice', async () => {
    browser.seedCookie('gs_consent', 'GRANTED');
    const { getConsent } = await import('../consent');
    expect(getConsent()).toBeNull();
  });
});

describe('Secure attribute', () => {
  it('is dropped on plain-http localhost so the cookie can still be stored', async () => {
    vi.resetModules();
    browser = installFakeBrowser({ protocol: 'http:', hostname: 'localhost' });
    const { saveConsent } = await import('../consent');
    saveConsent('denied');
    expect(browser.cookieWrites).toEqual(['gs_consent=denied; Path=/; Max-Age=15552000; SameSite=Lax']);
  });
});

describe('clearMetaCookies', () => {
  beforeEach(() => {
    vi.resetModules();
    browser = installFakeBrowser();
  });

  it('removes _fbp/_fbc set on the registrable domain, as fbevents.js sets them', async () => {
    browser.seedCookie('_fbp', 'fb.1.1700000000000.123', 'growsparkconsulting.com');
    browser.seedCookie('_fbc', 'fb.1.1700000000000.abc', 'growsparkconsulting.com');
    browser.seedCookie('gs_consent', 'denied');
    const { clearMetaCookies } = await import('../consent');

    clearMetaCookies();

    expect(browser.cookieNames()).toEqual(['gs_consent']);
  });

  it('also clears host-only and www copies, but never writes to the bare TLD', async () => {
    browser.seedCookie('_fbp', 'a');
    browser.seedCookie('_fbp', 'b', 'www.growsparkconsulting.com');
    const { clearMetaCookies } = await import('../consent');

    clearMetaCookies();

    expect(browser.cookieNames()).toEqual([]);
    expect(browser.cookieWrites.some((w) => /Domain=com\b/.test(w))).toBe(false);
  });
});
