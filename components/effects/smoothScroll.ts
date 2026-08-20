import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Port of assets/js/smooth-scroll.js.
 *
 * Same Lenis options and the same gsap.ticker integration; the only addition
 * is teardown. The original assumed a document that only ever went away on
 * navigation, so it never unsubscribed. Here the ticker callback and the
 * scroll listener are both removed and the instance destroyed, otherwise a
 * remount (React Strict Mode does exactly this in development) would leave a
 * second Lenis driving the same scroll position against the first.
 */
export function initSmoothScroll(): { lenis: Lenis | null; cleanup: () => void } {
  gsap.registerPlugin(ScrollTrigger);

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) return { lenis: null, cleanup: () => {} };

  const lenis = new Lenis({
    duration: 1.1,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  lenis.on('scroll', ScrollTrigger.update);

  const tick = (time: number) => {
    lenis.raf(time * 1000);
  };
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  return {
    lenis,
    cleanup: () => {
      gsap.ticker.remove(tick);
      lenis.off('scroll', ScrollTrigger.update);
      lenis.destroy();
    },
  };
}
