'use client';

import { useEffect } from 'react';
import { initSmoothScroll } from './smoothScroll';
import { initAnchorLinks, initServiceTabs, initBookingTabs } from './interactions';
import {
  initScrollReveal,
  initCounters,
  initFrameworkLine,
  initHeroParallax,
} from './animations';

/**
 * Client-side entry point, equivalent to assets/js/main.js.
 *
 * It renders nothing. All the behaviour it starts is DOM-driven, exactly as in
 * the original — the modules query for their own targets and no-op when those
 * targets are absent — which is what lets every page and section component
 * stay a Server Component. Nav owns its own behaviour, so it is not started
 * here; the rest run in main.js's order, and that order matters: Lenis is
 * created first because initAnchorLinks needs the instance to scroll through.
 *
 * Everything is torn down in reverse on unmount. React Strict Mode mounts,
 * unmounts and remounts effects in development, so anything left running would
 * immediately become a duplicate: two Lenis instances fighting over the scroll
 * position, or two ScrollTriggers per element firing the same tween twice.
 */
export default function SiteEffects() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    const { lenis, cleanup: cleanupScroll } = initSmoothScroll();
    cleanups.push(cleanupScroll);

    // Swiper is a full library only the homepage needs. Guarding on the DOM
    // before importing keeps it out of the other 26 routes' network path,
    // exactly as main.js did — the dynamic import is a separate chunk that is
    // never requested unless a hero carousel is actually present.
    let cancelled = false;
    let cleanupHero: (() => void) | null = null;
    if (document.querySelector('[data-hero-swiper]')) {
      import('./heroCarousel').then(({ initHeroCarousel }) => {
        // The component can unmount before this resolves; starting Swiper then
        // would leave an instance nothing ever destroys.
        if (cancelled) return;
        cleanupHero = initHeroCarousel();
      });
    }

    cleanups.push(initAnchorLinks(lenis));
    cleanups.push(initServiceTabs());
    cleanups.push(initBookingTabs());
    cleanups.push(initScrollReveal());
    cleanups.push(initCounters());
    cleanups.push(initFrameworkLine());
    cleanups.push(initHeroParallax());

    return () => {
      cancelled = true;
      cleanupHero?.();
      cleanups.reverse().forEach((fn) => fn());
    };
  }, []);

  return null;
}
