const MOBILE_QUERY = '(max-width: 991px)';

/**
 * Collapses long card lists on small screens behind a "Show all" button.
 *
 * Opt in with `data-show-more` on a list, `data-show-more-limit` (items kept
 * visible) and optionally `data-show-more-label` (button text). The server
 * renders every item visible — this only hides the overflow once JS runs, so
 * with JS off nothing is lost. Desktop is left alone, and a list no longer
 * than its limit gets no button.
 *
 * Expanding moves focus to the first newly revealed item so keyboard and
 * screen-reader users land on the new content, then removes the button.
 * The cleanup restores the markup exactly, so a Strict Mode remount starts
 * from the same state.
 */
export function initShowMore(): () => void {
  if (!window.matchMedia(MOBILE_QUERY).matches) return () => {};

  const cleanups: Array<() => void> = [];

  document.querySelectorAll<HTMLElement>('[data-show-more]').forEach((list) => {
    const limit = Number(list.dataset.showMoreLimit);
    const items = Array.from(list.children) as HTMLElement[];
    if (!Number.isFinite(limit) || items.length <= limit) return;

    const overflow = items.slice(limit);
    overflow.forEach((item) => {
      item.hidden = true;
    });

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'lp-show-more';
    button.textContent = list.dataset.showMoreLabel || 'Show all';
    button.setAttribute('aria-expanded', 'false');
    if (list.id) button.setAttribute('aria-controls', list.id);

    const onClick = () => {
      overflow.forEach((item) => {
        item.hidden = false;
      });
      const first = overflow[0];
      first.tabIndex = -1;
      first.focus({ preventScroll: false });
      button.remove();
    };
    button.addEventListener('click', onClick);
    list.after(button);

    cleanups.push(() => {
      button.removeEventListener('click', onClick);
      button.remove();
      overflow.forEach((item) => {
        item.hidden = false;
        item.removeAttribute('tabindex');
      });
    });
  });

  return () => cleanups.forEach((fn) => fn());
}
