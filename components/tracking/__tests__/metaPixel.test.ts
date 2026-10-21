import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { fakeLink, installFakeBrowser } from './fakeBrowser';

/**
 * Consent gating for the browser Pixel.
 *
 * fbevents.js is never fetched — the fake document only records the <script>
 * — so every fbq() call stays on Meta's stub queue, which is what these tests
 * assert against. Modules are re-imported per test because the Pixel's state
 * deliberately lives for exactly one page load.
 */

const PIXEL_ID = '903539706058302';
const FBEVENTS = 'https://connect.facebook.net/en_US/fbevents.js';

let browser: ReturnType<typeof installFakeBrowser>;

async function load() {
  return {
    pixel: await import('../metaPixel'),
    consent: await import('../consent'),
  };
}

const tracked = () => browser.fbqCalls().filter((call) => call[0] === 'track');

beforeEach(() => {
  vi.resetModules();
  process.env.NEXT_PUBLIC_META_PIXEL_ID = PIXEL_ID;
  browser = installFakeBrowser();
});

afterEach(() => {
  browser.uninstall();
  delete process.env.NEXT_PUBLIC_META_PIXEL_ID;
});

describe('before Accept', () => {
  it('loads nothing and sends nothing while no choice has been made', async () => {
    const { pixel } = await load();
    pixel.loadMetaPixel();
    pixel.trackPageView('/');
    pixel.trackLead('Contact Form', 'row-1');
    pixel.trackContact('phone');

    expect(browser.scripts).toHaveLength(0);
    expect((globalThis as { window: { fbq?: unknown } }).window.fbq).toBeUndefined();
  });

  it('loads nothing after Decline', async () => {
    const { pixel, consent } = await load();
    consent.saveConsent('denied');
    pixel.loadMetaPixel();
    pixel.trackPageView('/');

    expect(browser.scripts).toHaveLength(0);
    expect(browser.fbqCalls()).toEqual([]);
  });

  it('does not count Contact clicks', async () => {
    const { pixel } = await load();
    pixel.initContactTracking();
    browser.click(fakeLink('tel:+916381461106'));
    expect(browser.fbqCalls()).toEqual([]);
  });
});

describe('after Accept', () => {
  it('injects fbevents.js once and initialises without an automatic PageView', async () => {
    const { pixel, consent } = await load();
    consent.saveConsent('granted');
    pixel.loadMetaPixel();
    pixel.loadMetaPixel();

    expect(browser.scripts).toEqual([{ tagName: 'SCRIPT', src: FBEVENTS, async: true }]);
    expect(browser.fbqCalls()).toEqual([
      ['consent', 'grant'],
      ['set', 'autoConfig', false, PIXEL_ID],
      ['init', PIXEL_ID],
      ['consent', 'grant'],
    ]);
    expect(tracked()).toEqual([]);
  });

  it('sends PageView once per path, tagged content_category website', async () => {
    const { pixel, consent } = await load();
    consent.saveConsent('granted');
    pixel.loadMetaPixel();

    pixel.trackPageView('/');
    pixel.trackPageView('/'); // Strict Mode re-run / repeated effect
    pixel.trackPageView('/contact/');

    expect(tracked()).toEqual([
      ['track', 'PageView', { content_category: 'website' }],
      ['track', 'PageView', { content_category: 'website' }],
    ]);
  });

  it('sends Lead only with the server-returned id, as eventID', async () => {
    const { pixel, consent } = await load();
    consent.saveConsent('granted');
    pixel.loadMetaPixel();

    pixel.trackLead('Contact Form', undefined); // failed request / honeypot success
    pixel.trackLead('Contact Form', '');
    pixel.trackLead('Contact Form', 42);
    pixel.trackLead('Contact Form', 'row-1');

    expect(tracked()).toEqual([
      [
        'track',
        'Lead',
        { content_name: 'Contact Form', content_category: 'website' },
        { eventID: 'row-1' },
      ],
    ]);
  });

  it('sends Contact for phone and email links only, and stops on cleanup', async () => {
    const { pixel, consent } = await load();
    consent.saveConsent('granted');
    pixel.loadMetaPixel();
    const cleanup = pixel.initContactTracking();

    browser.click(fakeLink('tel:+916381461106'));
    browser.click(fakeLink('mailto:info@growsparkconsulting.com'));
    browser.click(fakeLink('/contact/'));
    browser.click({ closest: () => null }); // a click that is not on a link
    cleanup();
    browser.click(fakeLink('tel:+916381461106'));

    expect(tracked()).toEqual([
      ['track', 'Contact', { content_name: 'phone', content_category: 'website' }],
      ['track', 'Contact', { content_name: 'email', content_category: 'website' }],
    ]);
    expect(browser.listenerCount('click')).toBe(0);
  });
});

describe('withdrawing consent', () => {
  it('revokes the loaded Pixel, deletes _fbp/_fbc and sends nothing further', async () => {
    const { pixel, consent } = await load();
    consent.saveConsent('granted');
    pixel.loadMetaPixel();
    pixel.trackPageView('/');
    browser.seedCookie('_fbp', 'fb.1.1700000000000.123', 'growsparkconsulting.com');
    browser.seedCookie('_fbc', 'fb.1.1700000000000.abc', 'growsparkconsulting.com');

    consent.saveConsent('denied');
    pixel.revokeMetaPixel();
    pixel.trackPageView('/about/');
    pixel.trackLead('Contact Form', 'row-2');
    pixel.trackContact('email');

    expect(browser.fbqCalls()).toContainEqual(['consent', 'revoke']);
    expect(tracked()).toHaveLength(1); // only the PageView sent before withdrawal
    expect(browser.cookieNames()).toEqual(['gs_consent']);
  });

  it('clears the cookies even when this page never loaded the Pixel', async () => {
    browser.seedCookie('_fbp', 'fb.1.1700000000000.123', 'growsparkconsulting.com');
    const { pixel, consent } = await load();
    consent.saveConsent('denied');

    expect(() => pixel.revokeMetaPixel()).not.toThrow();
    expect(browser.scripts).toHaveLength(0);
    expect(browser.cookieNames()).toEqual(['gs_consent']);
  });

  it('re-grants on the same page after Decline then Accept', async () => {
    const { pixel, consent } = await load();
    consent.saveConsent('granted');
    pixel.loadMetaPixel();
    consent.saveConsent('denied');
    pixel.revokeMetaPixel();
    consent.saveConsent('granted');
    pixel.loadMetaPixel();
    pixel.trackPageView('/');

    const calls = browser.fbqCalls();
    expect(calls.slice(-3)).toEqual([
      ['consent', 'revoke'],
      ['consent', 'grant'],
      ['track', 'PageView', { content_category: 'website' }],
    ]);
    expect(calls.filter((c) => c[0] === 'init')).toHaveLength(1);
    expect(browser.scripts).toHaveLength(1);
  });
});

describe('without a Pixel ID', () => {
  it('never loads, even after Accept', async () => {
    delete process.env.NEXT_PUBLIC_META_PIXEL_ID;
    const { pixel, consent } = await load();
    consent.saveConsent('granted');
    pixel.loadMetaPixel();
    pixel.trackPageView('/');

    expect(browser.scripts).toHaveLength(0);
    expect(browser.fbqCalls()).toEqual([]);
  });

  it('treats a non-numeric ID as unset', async () => {
    process.env.NEXT_PUBLIC_META_PIXEL_ID = '9035"/><script>';
    const { pixel, consent } = await load();
    consent.saveConsent('granted');
    pixel.loadMetaPixel();

    expect(browser.scripts).toHaveLength(0);
  });
});
