'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { PRIMARY_LINKS, WHO_WE_ARE_LINKS, normalizePath } from './navLinks';

/** nav.js SCROLL_THRESHOLD — the scrollY past which the header goes solid. */
const SCROLL_THRESHOLD = 48;
/** nav.js closeTimer delay before a hovered-away mega panel hides. */
const MEGA_HIDE_DELAY = 150;
/** Matches duration-[450ms] on the drawer panel; the drawer is hidden after it. */
const DRAWER_TRANSITION_MS = 450;

const cx = (...parts: Array<string | false | undefined>) => parts.filter(Boolean).join(' ');

/**
 * Header, mega menu and mobile drawer.
 *
 * Replaces the four independent initialisers in assets/js/nav.js
 * (initStickyHeader / initMegaMenu / initMobileDrawer / markCurrentPage) and
 * their 14 listeners with four pieces of state. The rendered classes are the
 * same ones nav.js added and removed imperatively, so base.css needs no change.
 *
 * Links are plain <a>, not next/link, on purpose: the existing site does a full
 * document load on every navigation. Switching to client-side routing would
 * change scroll restoration, re-init of Lenis/GSAP, and animation replay — a
 * behavioural change, not a migration. Revisit after validation.
 */
export default function Nav() {
  const pathname = usePathname();
  const currentPath = normalizePath(pathname ?? '/');

  // --- sticky header -------------------------------------------------------
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
    // nav.js calls update() once before binding, so a page restored mid-scroll
    // renders the solid header immediately rather than on first scroll event.
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // --- mega menu -----------------------------------------------------------
  const [megaOpen, setMegaOpen] = useState(false);
  const megaGroupRef = useRef<HTMLDivElement | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearHideTimer = useCallback(() => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
  }, []);

  const showMega = useCallback(() => {
    clearHideTimer();
    setMegaOpen(true);
  }, [clearHideTimer]);

  const scheduleHideMega = useCallback(() => {
    clearHideTimer();
    hideTimer.current = setTimeout(() => setMegaOpen(false), MEGA_HIDE_DELAY);
  }, [clearHideTimer]);

  useEffect(() => clearHideTimer, [clearHideTimer]);

  // Escape anywhere closes the panel; a click outside the group closes it too.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMegaOpen(false);
    };
    const onDocClick = (event: MouseEvent) => {
      const group = megaGroupRef.current;
      if (group && !group.contains(event.target as Node)) setMegaOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('click', onDocClick);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('click', onDocClick);
    };
  }, []);

  // --- mobile drawer -------------------------------------------------------
  // Two flags, mirroring nav.js: `drawerMounted` drives the `invisible` class
  // (removed before the transition starts, re-added 450ms after it ends), while
  // `drawerOpen` drives the transitioned properties.
  const [drawerMounted, setDrawerMounted] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const drawerPanelRef = useRef<HTMLDivElement | null>(null);
  const hideDrawerTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDrawer = useCallback(() => {
    if (hideDrawerTimer.current) clearTimeout(hideDrawerTimer.current);
    setDrawerMounted(true);
    // nav.js wraps the class swap in requestAnimationFrame so the element is
    // painted in its closed state first and the transition actually runs.
    requestAnimationFrame(() => setDrawerOpen(true));
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
    hideDrawerTimer.current = setTimeout(
      () => setDrawerMounted(false),
      DRAWER_TRANSITION_MS,
    );
  }, []);

  // document.documentElement.classList — scroll lock while the drawer is open.
  useEffect(() => {
    const root = document.documentElement;
    if (drawerOpen) root.classList.add('overflow-hidden');
    else root.classList.remove('overflow-hidden');
    return () => root.classList.remove('overflow-hidden');
  }, [drawerOpen]);

  // Focus moves into the drawer on open and back to the toggle on close,
  // matching closeBtn?.focus() / toggle.focus() in nav.js.
  const wasOpen = useRef(false);
  useEffect(() => {
    if (drawerOpen) closeBtnRef.current?.focus();
    else if (wasOpen.current) toggleRef.current?.focus();
    wasOpen.current = drawerOpen;
  }, [drawerOpen]);

  useEffect(
    () => () => {
      if (hideDrawerTimer.current) clearTimeout(hideDrawerTimer.current);
    },
    [],
  );

  // Escape closes; Tab is trapped inside the panel so focus cannot reach the
  // page content the drawer is covering.
  useEffect(() => {
    if (!drawerMounted) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeDrawer();
        return;
      }
      if (event.key !== 'Tab') return;
      const panel = drawerPanelRef.current;
      if (!panel) return;
      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [drawerMounted, closeDrawer]);

  const isCurrent = (href: string) => normalizePath(href) === currentPath;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:bg-ink focus:text-paper focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <header
        id="site-header"
        className={cx(
          'fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,box-shadow] duration-[400ms] ease-[var(--ease-standard)]',
          scrolled && 'is-scrolled',
        )}
      >
        {/* Mobile is logo left, hamburger hard right — the CTA is hidden here and
            lives at the bottom of the drawer instead, so the bar stays uncluttered.
            At lg the children become a 3-column grid (logo / nav / CTA) and the
            hamburger drops out. */}
        <div
          id="nav-inner"
          className="mx-auto max-w-[var(--container-wide)] px-6 sm:px-10 flex lg:grid lg:grid-cols-[1fr_auto_1fr] items-center justify-between transition-[padding] duration-300 ease-[var(--ease-standard)] py-8"
        >
          <a
            href="/"
            className="site-nav__logo logo-lockup shrink-0 lg:justify-self-start"
            aria-label="Grow Spark Consulting — home"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/gsc-white.png"
              alt="Grow Spark Consulting"
              className="logo-img logo-img--light"
              width={1920}
              height={663}
              decoding="async"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/gsc-black.png"
              alt=""
              aria-hidden="true"
              className="logo-img logo-img--dark"
              width={1920}
              height={663}
              decoding="async"
            />
          </a>

          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-5 xl:gap-8 font-body justify-self-center"
          >
            {PRIMARY_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cx('site-nav__link font-medium', isCurrent(link.href) && 'is-current')}
              >
                {link.label}
              </a>
            ))}

            <div
              className="relative"
              data-mega-group
              ref={megaGroupRef}
              onMouseEnter={showMega}
              onMouseLeave={scheduleHideMega}
            >
              <button
                type="button"
                className="site-nav__trigger flex items-center gap-1.5 font-medium"
                data-mega-trigger="who-we-are"
                aria-expanded={megaOpen}
                aria-controls="mega-who-we-are"
                onClick={(event) => {
                  // nav.js only acts on the closed state: the first activation
                  // opens the panel (this is how keyboard users reach it).
                  // Activating it while open is intentionally a no-op.
                  if (!megaOpen) {
                    event.preventDefault();
                    showMega();
                  }
                }}
              >
                Who We Are{' '}
                <ChevronDown
                  className={cx(
                    'w-3.5 h-3.5 transition-transform duration-300',
                    megaOpen && 'rotate-180',
                  )}
                  data-mega-chevron
                />
              </button>

              {/* Compact dropdown rather than a full-bleed panel — a short link list
                  don't need the width the old mega menus took. */}
              <div
                id="mega-who-we-are"
                data-mega-panel="who-we-are"
                onMouseEnter={clearHideTimer}
                onMouseLeave={scheduleHideMega}
                className={cx(
                  'mega-panel absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-paper-raised border border-hairline rounded-card shadow-[var(--shadow-card-lg)] p-2.5 transition-all duration-300 ease-[var(--ease-out-expo)]',
                  megaOpen
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2',
                )}
              >
                {WHO_WE_ARE_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="mega-link !py-2.5 !px-3 rounded-tag hover:bg-paper-sunken"
                    onClick={() => setMegaOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          <div className="hidden lg:flex lg:justify-end lg:col-start-3 lg:justify-self-end">
            <a href="/contact/" className="btn site-nav__cta inline-flex shrink-0">
              Book Strategy Session
            </a>
          </div>

          <button
            id="nav-toggle"
            ref={toggleRef}
            className="site-nav__toggle lg:hidden shrink-0 p-2 -mr-2"
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            aria-controls="mobile-drawer"
            onClick={openDrawer}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-drawer"
        data-drawer
        className={cx('fixed inset-0 z-[60] lg:hidden', !drawerMounted && 'invisible')}
      >
        <div
          data-drawer-backdrop
          onClick={closeDrawer}
          className={cx(
            'absolute inset-0 bg-ink/50 transition-opacity duration-300',
            drawerOpen ? 'opacity-100' : 'opacity-0',
          )}
        />
        <div
          data-drawer-panel
          ref={drawerPanelRef}
          className={cx(
            'absolute top-0 right-0 h-full w-[86%] max-w-sm bg-paper-raised transition-transform duration-[450ms] ease-[var(--ease-in-out-strong)] overflow-y-auto',
            drawerOpen ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          <div className="flex items-center justify-between px-6 py-6 border-b border-hairline">
            <span className="font-display font-extrabold text-[18px]">Menu</span>
            <button
              id="drawer-close"
              ref={closeBtnRef}
              className="p-2 -mr-2"
              aria-label="Close menu"
              onClick={closeDrawer}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="px-6 py-6 flex flex-col gap-1 font-body" aria-label="Mobile">
            {PRIMARY_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeDrawer}
                className={cx('drawer-link', isCurrent(link.href) && 'is-current')}
              >
                {link.label}
              </a>
            ))}

            <details className="drawer-accordion">
              <summary>Who We Are</summary>
              <div className="drawer-accordion-body">
                {WHO_WE_ARE_LINKS.map((link) => (
                  <a key={link.href} href={link.href} onClick={closeDrawer}>
                    {link.label}
                  </a>
                ))}
              </div>
            </details>

            <a
              href="/contact/"
              onClick={closeDrawer}
              className="btn btn-primary justify-center mt-6"
            >
              Book Strategy Session
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
