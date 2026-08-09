import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-spy for the sticky service-category tab bar: highlights whichever
 * category section currently sits under the tab bar as you scroll.
 */
export function initServiceTabs() {
  const categories = document.querySelectorAll('[data-service-category]');
  const tabs = document.querySelectorAll('[data-tab-for]');
  if (!categories.length || !tabs.length) return;

  const tabsById = new Map(
    Array.from(tabs).map((tab) => [tab.dataset.tabFor, tab])
  );

  const setActive = (id) => {
    tabs.forEach((tab) => tab.classList.toggle('is-active', tab.dataset.tabFor === id));
  };

  // 190px = fixed header (115px at lg) + the sticky tab bar's own height (75px),
  // so a category counts as "current" from the moment its top clears the chrome
  // rather than 50px before it becomes visible.
  const SPY_OFFSET = '190px';

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

  setActive(categories[0].id);
}
