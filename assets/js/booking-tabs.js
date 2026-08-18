/**
 * Booking tabs on /strategy/ — three engagement panels behind one tab bar.
 *
 * Panels are all present in the markup and only one is shown at a time, so a
 * deep link like /strategy/#book?tier=intensive isn't needed: any control on
 * the page can open a specific panel by pointing at #book and carrying a
 * `data-open-tab` value. No-ops if the tab bar isn't on the page.
 */
export function initBookingTabs() {
  const tablist = document.querySelector('[data-booking-tabs]');
  if (!tablist) return;

  const tabs = Array.from(tablist.querySelectorAll('[data-tab]'));
  const panels = Array.from(document.querySelectorAll('[data-panel]'));
  if (!tabs.length || !panels.length) return;

  const select = (name) => {
    tabs.forEach((tab) => {
      const isActive = tab.dataset.tab === name;
      tab.setAttribute('aria-selected', String(isActive));
      tab.setAttribute('tabindex', isActive ? '0' : '-1');
    });
    panels.forEach((panel) => {
      panel.hidden = panel.dataset.panel !== name;
    });
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => select(tab.dataset.tab));
  });

  // Left/right arrows move between tabs, per the tablist keyboard pattern.
  tablist.addEventListener('keydown', (event) => {
    const current = tabs.findIndex((t) => t.getAttribute('aria-selected') === 'true');
    if (current < 0) return;
    let next = null;
    if (event.key === 'ArrowRight') next = (current + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (current - 1 + tabs.length) % tabs.length;
    if (next === null) return;
    event.preventDefault();
    select(tabs[next].dataset.tab);
    tabs[next].focus();
  });

  // Tier cards deep-link into the matching panel before scrolling to it.
  document.querySelectorAll('[data-open-tab]').forEach((trigger) => {
    trigger.addEventListener('click', () => select(trigger.dataset.openTab));
  });

  select(tabs[0].dataset.tab);
}
