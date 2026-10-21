'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import type { Consent } from '@/lib/meta/shared';
import { getConsent, saveConsent } from './consent';
import { initContactTracking, loadMetaPixel, revokeMetaPixel, trackPageView } from './metaPixel';

/**
 * Cookie banner, and the only place the Meta Pixel is ever started from.
 *
 * HtmlShell renders this only when NEXT_PUBLIC_META_PIXEL_ID is set, so a
 * deployment without a Pixel ships no banner and no tracking code at all.
 *
 * Nothing loads until the visitor presses Accept. Decline — or withdrawing
 * later through "Cookie preferences" in either footer — revokes the Pixel if
 * this page had loaded it and deletes Meta's _fbp/_fbc cookies.
 *
 * Both footers render a plain server-side <button data-cookie-preferences>;
 * one delegated listener here reopens the banner from it, so neither footer
 * has to become a Client Component.
 */
export default function CookieConsent() {
  const pathname = usePathname();
  // undefined until the cookie has been read: the server cannot know the
  // choice when it prerenders, so nothing renders before then and returning
  // visitors never see the banner flash.
  const [consent, setConsent] = useState<Consent | null | undefined>(undefined);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  // Set only when reopened from a footer button. A first-visit banner must not
  // steal focus from whatever the visitor was doing.
  const reopenedFrom = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const stored = getConsent();
    setConsent(stored);
    setOpen(stored === null);
  }, []);

  // PageView on every page once consent exists, and on every client-side
  // route change; trackPageView ignores a repeat of the same path.
  useEffect(() => {
    if (consent !== 'granted') return;
    loadMetaPixel();
    trackPageView(pathname ?? window.location.pathname);
  }, [consent, pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const trigger = (event.target as Element | null)?.closest?.('[data-cookie-preferences]');
      if (!trigger) return;
      reopenedFrom.current = trigger as HTMLElement;
      setOpen(true);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => initContactTracking(), []);

  useEffect(() => {
    if (open && reopenedFrom.current) panelRef.current?.focus();
  }, [open]);

  function choose(value: Consent) {
    saveConsent(value);
    if (value === 'denied') revokeMetaPixel();
    setConsent(value);
    setOpen(false);
    reopenedFrom.current?.focus();
    reopenedFrom.current = null;
  }

  if (!open) return null;

  // Accept and Decline share one class list on purpose: equal prominence, so
  // neither answer is the easier one to give.
  const choiceClass = 'btn btn-secondary btn-on-dark justify-center flex-1 sm:flex-none sm:min-w-[136px]';

  return (
    <div className="fixed inset-x-0 bottom-0 z-[var(--z-consent)] px-4 pb-4 sm:px-6 sm:pb-6 pointer-events-none">
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="false"
        aria-labelledby="cookie-consent-title"
        aria-describedby="cookie-consent-body"
        tabIndex={-1}
        className="pointer-events-auto mx-auto max-w-[var(--container-page)] rounded-[var(--radius-card)] bg-ink text-white shadow-[var(--shadow-card-xl)] p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10 focus:outline-none"
      >
        <div className="flex-1">
          <h2 id="cookie-consent-title" className="text-[15px] font-bold text-white mb-1.5">
            Cookies on this site
          </h2>
          <p id="cookie-consent-body" className="text-[14px] leading-relaxed text-white/70">
            We&rsquo;d like to use Meta (Facebook) cookies to measure visits and enquiries from our
            ads. Nothing is set unless you accept, and you can change your choice at any time from
            &ldquo;Cookie preferences&rdquo; at the bottom of the page.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button type="button" className={choiceClass} onClick={() => choose('denied')}>
            Decline
          </button>
          <button type="button" className={choiceClass} onClick={() => choose('granted')}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
