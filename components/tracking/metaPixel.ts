import { CONTENT_CATEGORY, metaPixelId } from '@/lib/meta/shared';
import { clearMetaCookies, getConsent } from './consent';

/**
 * Meta Pixel, loaded only after the visitor accepts cookies.
 *
 * Meta's install snippet is deliberately not pasted into the page: it runs as
 * the HTML parses — before anyone has been asked — and fires PageView on its
 * own. loadMetaPixel() is the same loader logic, started from the consent
 * banner instead, with the automatic PageView removed (trackPageView sends it,
 * once per path) and without the <noscript> image pixel, which would track
 * visitors who never saw the banner.
 *
 * Every track function re-checks the consent cookie at the moment it fires, so
 * withdrawing takes effect immediately even though fbevents.js, once
 * downloaded, stays in memory until the next page load.
 */

const FBEVENTS_SRC = 'https://connect.facebook.net/en_US/fbevents.js';

type Fbq = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: Fbq;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

// Module state lives for one page load, which is what makes PageView fire
// once per path even when React Strict Mode runs the effects twice.
let initialised = false;
let lastPageViewPath: string | null = null;

function canTrack(): boolean {
  return initialised && getConsent() === 'granted' && typeof window.fbq === 'function';
}

/** Load fbevents.js and initialise the Pixel. Safe to call repeatedly. */
export function loadMetaPixel(): void {
  const pixelId = metaPixelId();
  if (!pixelId || getConsent() !== 'granted') return;

  if (!window.fbq) {
    // Meta's base code, unminified. Calls made before fbevents.js arrives are
    // queued on the stub and replayed by the library once it loads.
    const fbq = function (this: unknown, ...args: unknown[]) {
      if (fbq.callMethod) fbq.callMethod.apply(fbq, args);
      else fbq.queue.push(args);
    } as Fbq;
    window.fbq = fbq;
    if (!window._fbq) window._fbq = fbq;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = '2.0';
    fbq.queue = [];

    const script = document.createElement('script');
    script.async = true;
    script.src = FBEVENTS_SRC;
    document.head.appendChild(script);
  }

  // Undoes an earlier revoke when someone declines and then accepts on the
  // same page.
  window.fbq('consent', 'grant');

  if (!initialised) {
    // Must precede init. Turns off Meta's automatic events (button clicks,
    // page metadata), which would otherwise reach Events Manager without
    // content_category and blur this site's reporting.
    window.fbq('set', 'autoConfig', false, pixelId);
    window.fbq('init', pixelId);
    initialised = true;
  }
}

/** Withdraw: stop the Pixel if this page loaded it, and drop its cookies. */
export function revokeMetaPixel(): void {
  window.fbq?.('consent', 'revoke');
  clearMetaCookies();
}

export function trackPageView(path: string): void {
  if (!canTrack() || path === lastPageViewPath) return;
  lastPageViewPath = path;
  window.fbq!('track', 'PageView', { content_category: CONTENT_CATEGORY });
}

/**
 * Lead, called by a form only once the server has confirmed the submission was
 * saved. `eventId` is the saved row's id from the response: the server sends
 * its Conversions API Lead with the same id, so Meta counts the pair once. No
 * id — a failed request, or the honeypot's look-alike success — means no event.
 */
export function trackLead(formName: string, eventId: unknown): void {
  if (typeof eventId !== 'string' || eventId === '' || !canTrack()) return;
  window.fbq!(
    'track',
    'Lead',
    { content_name: formName, content_category: CONTENT_CATEGORY },
    { eventID: eventId },
  );
}

export function trackContact(channel: 'phone' | 'email'): void {
  if (!canTrack()) return;
  window.fbq!('track', 'Contact', { content_name: channel, content_category: CONTENT_CATEGORY });
}

/**
 * Contact on tel: and mailto: clicks. One delegated listener rather than a
 * handler per link, so the footers and section components stay Server
 * Components and links added later are covered without wiring.
 */
export function initContactTracking(): () => void {
  const onClick = (event: MouseEvent) => {
    const link = (event.target as Element | null)?.closest?.('a[href]');
    const href = link?.getAttribute('href')?.trim().toLowerCase() ?? '';
    if (href.startsWith('tel:')) trackContact('phone');
    else if (href.startsWith('mailto:')) trackContact('email');
  };
  document.addEventListener('click', onClick);
  return () => document.removeEventListener('click', onClick);
}
