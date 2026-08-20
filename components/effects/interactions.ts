import type Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const HEADER_OFFSET = 96;

/**
 * Port of assets/js/anchor-links.js.
 *
 * Same-page hash links go through Lenis rather than the browser's native
 * jump — otherwise Lenis's own RAF loop fights the native scroll position on
 * every frame. Cross-page links are left alone so the browser navigates
 * normally. Only teardown is new.
 */
export function initAnchorLinks(lenis: Lenis | null): () => void {
  const onClick = (event: MouseEvent) => {
    const link = (event.target as Element | null)?.closest?.('a[href*="#"]') as
      | HTMLAnchorElement
      | null;
    if (!link) return;

    const url = new URL(link.href, window.location.href);
    const samePage = url.pathname === window.location.pathname;
    if (!samePage || !url.hash) return;

    const target = document.querySelector(url.hash);
    if (!target) return;

    event.preventDefault();

    if (lenis) {
      lenis.scrollTo(target as HTMLElement, { offset: -HEADER_OFFSET, duration: 1.2 });
    } else {
      const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top, behavior: 'auto' });
    }

    history.pushState(null, '', url.hash);
  };

  document.addEventListener('click', onClick);
  return () => document.removeEventListener('click', onClick);
}

/**
 * Port of assets/js/service-tabs.js — scroll-spy for the sticky
 * service-category tab bar. The ScrollTriggers are created inside a
 * gsap.context so reverting the context kills exactly the ones this module
 * made, leaving triggers owned by the other modules alone.
 */
export function initServiceTabs(): () => void {
  gsap.registerPlugin(ScrollTrigger);

  const categories = document.querySelectorAll<HTMLElement>('[data-service-category]');
  const tabs = document.querySelectorAll<HTMLElement>('[data-tab-for]');
  if (!categories.length || !tabs.length) return () => {};

  const setActive = (id: string) => {
    tabs.forEach((tab) => tab.classList.toggle('is-active', tab.dataset.tabFor === id));
  };

  // 190px = fixed header (115px at lg) + the sticky tab bar's own height (75px),
  // so a category counts as "current" from the moment its top clears the chrome
  // rather than 50px before it becomes visible.
  const SPY_OFFSET = '190px';

  const ctx = gsap.context(() => {
    categories.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: `top ${SPY_OFFSET}`,
        end: `bottom ${SPY_OFFSET}`,
        onToggle: (self) => {
          if (self.isActive) setActive(section.id);
        },
      });
    });
  });

  setActive(categories[0].id);
  return () => ctx.revert();
}

/**
 * Port of assets/js/booking-tabs.js — the three engagement panels on
 * /strategy/. Behaviour is unchanged, including the roving tabindex, which is
 * still applied at runtime rather than baked into the markup.
 */
export function initBookingTabs(): () => void {
  const tablist = document.querySelector<HTMLElement>('[data-booking-tabs]');
  if (!tablist) return () => {};

  const tabs = Array.from(tablist.querySelectorAll<HTMLElement>('[data-tab]'));
  const panels = Array.from(document.querySelectorAll<HTMLElement>('[data-panel]'));
  if (!tabs.length || !panels.length) return () => {};

  const select = (name: string | undefined) => {
    tabs.forEach((tab) => {
      const isActive = tab.dataset.tab === name;
      tab.setAttribute('aria-selected', String(isActive));
      tab.setAttribute('tabindex', isActive ? '0' : '-1');
    });
    panels.forEach((panel) => {
      panel.hidden = panel.dataset.panel !== name;
    });
  };

  const tabHandlers = tabs.map((tab) => {
    const handler = () => select(tab.dataset.tab);
    tab.addEventListener('click', handler);
    return { tab, handler };
  });

  // Left/right arrows move between tabs, per the tablist keyboard pattern.
  const onKeyDown = (event: KeyboardEvent) => {
    const current = tabs.findIndex((t) => t.getAttribute('aria-selected') === 'true');
    if (current < 0) return;
    let next: number | null = null;
    if (event.key === 'ArrowRight') next = (current + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (current - 1 + tabs.length) % tabs.length;
    if (next === null) return;
    event.preventDefault();
    select(tabs[next].dataset.tab);
    tabs[next].focus();
  };
  tablist.addEventListener('keydown', onKeyDown);

  // Tier cards deep-link into the matching panel before scrolling to it.
  const openHandlers = Array.from(
    document.querySelectorAll<HTMLElement>('[data-open-tab]'),
  ).map((trigger) => {
    const handler = () => select(trigger.dataset.openTab);
    trigger.addEventListener('click', handler);
    return { trigger, handler };
  });

  select(tabs[0].dataset.tab);

  return () => {
    tabHandlers.forEach(({ tab, handler }) => tab.removeEventListener('click', handler));
    tablist.removeEventListener('keydown', onKeyDown);
    openHandlers.forEach(({ trigger, handler }) => trigger.removeEventListener('click', handler));
  };
}
