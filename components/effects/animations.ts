import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const STAGGER = 0.08;
const STAGGER_CAP = 6;
const DURATION_SINGLE = 0.7;
const DURATION_STAGGER = 0.6;
const DISTANCE = 24;

/**
 * Ports of assets/animations/*.js. Every value — duration, ease, distance,
 * stagger, trigger start, once/scrub — is carried over unchanged; the only
 * addition is that each module builds its tweens inside a gsap.context and
 * returns a cleanup that reverts it. That is what makes a remount safe:
 * reverting kills the tweens and their ScrollTriggers and removes the inline
 * styles GSAP wrote, so a second init starts from the same state the first did
 * rather than stacking a duplicate timeline on the same elements.
 */

/** assets/animations/reveal.js */
export function initScrollReveal(): () => void {
  gsap.registerPlugin(ScrollTrigger);

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-fw-step])');
  if (reducedMotion) return () => {};

  const ctx = gsap.context(() => {
    targets.forEach((el) => {
      const children = Array.from(el.children);
      const isStaggered = children.length > 1;
      const animTargets = isStaggered ? children : el;

      gsap.fromTo(
        animTargets,
        { opacity: 0, y: DISTANCE },
        {
          opacity: 1,
          y: 0,
          duration: isStaggered ? DURATION_STAGGER : DURATION_SINGLE,
          ease: 'expo.out',
          // Capped rather than a flat per-item stagger: past the 6th item the
          // remaining ones join at the 6th's delay, so long grids finish
          // revealing in a consistent window.
          stagger: isStaggered ? (index: number) => Math.min(index, STAGGER_CAP - 1) * STAGGER : 0,
          // Without this, GSAP leaves an inline transform/opacity on every
          // target once the tween finishes — which permanently outranks any
          // CSS :hover/:active transform on that same element, silently
          // killing their hover-lift after the reveal completes.
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
        },
      );
    });
  });

  return () => ctx.revert();
}

/** assets/animations/counters.js */
export function initCounters(): () => void {
  gsap.registerPlugin(ScrollTrigger);

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = document.querySelectorAll<HTMLElement>('[data-count-to]');

  const ctx = gsap.context(() => {
    targets.forEach((el) => {
      const endValue = Number(el.dataset.countTo);
      const suffix = el.dataset.countSuffix || '';

      if (reducedMotion || Number.isNaN(endValue)) {
        el.textContent = `${endValue}${suffix}`;
        return;
      }

      const counter = { value: 0 };
      gsap.to(counter, {
        value: endValue,
        duration: 1.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          once: true,
        },
        onUpdate: () => {
          el.textContent = `${Math.round(counter.value)}${suffix}`;
        },
      });
    });
  });

  return () => ctx.revert();
}

/** assets/animations/framework-line.js */
export function initFrameworkLine(): () => void {
  gsap.registerPlugin(ScrollTrigger);

  const diagram = document.querySelector<HTMLElement>('[data-fw-diagram]');
  if (!diagram) return () => {};

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) return () => {};

  const line = diagram.querySelector('[data-fw-line]');
  const steps = diagram.querySelectorAll('[data-fw-step]');
  const nodes = diagram.querySelectorAll('[data-fw-node]');

  const ctx = gsap.context(() => {
    gsap.set(line, { scaleX: 0, transformOrigin: 'left center' });
    gsap.set(steps, { opacity: 0, y: 16 });
    gsap.set(nodes, { scale: 0.55, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: diagram,
        start: 'top 75%',
        once: true,
      },
    });

    tl.to(line, { scaleX: 1, duration: 1, ease: 'power2.inOut' })
      .to(nodes, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(2)', stagger: 0.14 }, 0.1)
      .to(steps, { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out', stagger: 0.14 }, 0.1);
  }, diagram);

  return () => ctx.revert();
}

/** assets/animations/parallax.js */
export function initHeroParallax(): () => void {
  gsap.registerPlugin(ScrollTrigger);

  const hero = document.getElementById('hero');
  if (!hero) return () => {};
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};

  const ctx = gsap.context(() => {
    gsap.to('.hero-text', {
      yPercent: 18,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  return () => ctx.revert();
}
