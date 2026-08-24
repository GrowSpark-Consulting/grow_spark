import Swiper from 'swiper';
import { EffectFade, Autoplay, Pagination, A11y, Keyboard } from 'swiper/modules';
import gsap from 'gsap';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const AUTOPLAY_DELAY = 7000;
const CROSSFADE_SPEED = 800;
const KEN_BURNS_SCALE = 1.06;

/**
 * Port of assets/js/hero-carousel.js.
 *
 * Swiper configuration, autoplay timing, crossfade speed, Ken Burns scale,
 * video buffering strategy, pagination fill and the play/pause toggle are all
 * unchanged.
 *
 * Two things had to change for React. The original held kenBurnsTween and
 * kenBurnsTarget at module scope, which is fine for a script that runs once
 * per document but leaks across instances here — a remount would find the
 * previous mount's tween still recorded and animate an element belonging to a
 * destroyed carousel. They are now per-instance. And every listener, plus the
 * Swiper instance itself, is torn down on cleanup so Strict Mode's
 * mount/unmount/mount cannot leave two carousels driving the same DOM.
 */
export function initHeroCarousel(): () => void {
  const container = document.querySelector<HTMLElement>('[data-hero-swiper]');
  if (!container) return () => {};

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Per-instance, not module-level — see the note above.
  let kenBurnsTween: gsap.core.Tween | null = null;
  let kenBurnsTarget: HTMLElement | null = null;

  function getMedia(slideEl: HTMLElement | undefined): HTMLElement | null {
    if (!slideEl) return null;
    return (
      slideEl.querySelector<HTMLElement>('[data-hero-img]') ??
      slideEl.querySelector<HTMLElement>('[data-hero-video]')
    );
  }

  function loadVideo(slideEl: HTMLElement | undefined): HTMLVideoElement | null {
    if (!slideEl) return null;
    const video = slideEl.querySelector<HTMLVideoElement>('[data-hero-video]');
    const src = slideEl.dataset.videoSrc;
    if (!video || !src || video.dataset.loaded === 'true') return video;
    video.src = src;
    video.dataset.loaded = 'true';
    video.load();
    return video;
  }

  function startKenBurns(element: HTMLElement | null) {
    if (!element) return;
    if (kenBurnsTarget === element && kenBurnsTween) {
      kenBurnsTween.resume();
      return;
    }
    kenBurnsTween?.kill();
    if (kenBurnsTarget && kenBurnsTarget !== element) gsap.set(kenBurnsTarget, { scale: 1 });
    kenBurnsTarget = element;
    gsap.set(element, { scale: 1, transformOrigin: '50% 50%' });
    kenBurnsTween = gsap.to(element, {
      scale: KEN_BURNS_SCALE,
      duration: AUTOPLAY_DELAY / 1000,
      ease: 'none',
    });
  }

  function playMedia(slideEl: HTMLElement | undefined) {
    if (!slideEl) return;
    const video = loadVideo(slideEl);
    if (video) {
      const playPromise = video.play();
      if (playPromise?.catch) playPromise.catch(() => {});
    }
    const media = getMedia(slideEl);
    startKenBurns(media);
  }

  function pauseMedia(slideEl: HTMLElement | undefined) {
    if (!slideEl) return;
    const video = slideEl.querySelector<HTMLVideoElement>('[data-hero-video]');
    video?.pause();
    const media = getMedia(slideEl);
    if (media && media === kenBurnsTarget) kenBurnsTween?.pause();
  }

  function animateSlideText(slideEl: HTMLElement | undefined) {
    const text = slideEl?.querySelector('.hero-text');
    if (!text) return;
    const targets = text.children; // eyebrow, headline, CTA
    gsap.fromTo(
      targets,
      { opacity: 0, y: 26 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out', stagger: 0.12, overwrite: true },
    );
  }

  const swiper = new Swiper(container, {
    // Touch/swipe navigation is on by default (allowTouchMove is not
    // disabled) — Keyboard adds left/right arrow support to match.
    modules: [EffectFade, Autoplay, Pagination, A11y, Keyboard],
    effect: 'fade',
    fadeEffect: { crossFade: true },
    speed: CROSSFADE_SPEED,
    rewind: true,
    autoplay: reducedMotion
      ? false
      : { delay: AUTOPLAY_DELAY, disableOnInteraction: false, pauseOnMouseEnter: false },
    pagination: {
      el: '[data-hero-pagination]',
      clickable: true,
      renderBullet: (_index: number, className: string) =>
        `<span class="${className}"><span class="hero-pagination-fill"></span></span>`,
    },
    keyboard: { enabled: true, onlyInViewport: true },
    a11y: { enabled: true },
  });

  if (!reducedMotion) {
    playMedia(swiper.slides[0]);
    animateSlideText(swiper.slides[0]);
  }
  if (swiper.slides[1]) loadVideo(swiper.slides[1]);

  const resetFills = () => {
    swiper.pagination.bullets.forEach((bullet) => {
      const fill = bullet.querySelector<HTMLElement>('.hero-pagination-fill');
      if (fill) fill.style.width = '0%';
    });
  };

  swiper.on('slideChangeTransitionStart', () => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    playMedia(activeSlide);
    animateSlideText(activeSlide);
    resetFills();

    swiper.slides.forEach((slide, index) => {
      if (index !== swiper.activeIndex) {
        pauseMedia(slide);
      }
    });

    // Keep one slide ahead buffered so the next crossfade never shows a blank frame.
    const nextSlide = swiper.slides[(swiper.activeIndex + 1) % swiper.slides.length];
    if (nextSlide) loadVideo(nextSlide);
  });

  // Drives the per-bullet progress fill directly off Swiper's own autoplay
  // countdown, so it's always in sync — including after manual interaction.
  swiper.on('autoplayTimeLeft', (_s, _timeLeft, progress) => {
    const activeBullet = swiper.pagination.bullets[swiper.realIndex];
    const fill = activeBullet?.querySelector<HTMLElement>('.hero-pagination-fill');
    if (fill) fill.style.width = `${(1 - progress) * 100}%`;
  });

  const onVisibilityChange = () => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    if (document.hidden) {
      pauseMedia(activeSlide);
      swiper.autoplay?.stop();
    } else {
      playMedia(activeSlide);
      if (!reducedMotion) swiper.autoplay?.start();
    }
  };
  document.addEventListener('visibilitychange', onVisibilityChange);

  const toggle = document.querySelector<HTMLElement>('[data-hero-play-toggle]');
  const iconPause = toggle?.querySelector('[data-icon-pause]');
  const iconPlay = toggle?.querySelector('[data-icon-play]');
  let isPaused = reducedMotion;

  const applyToggleState = () => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    if (isPaused) {
      pauseMedia(activeSlide);
      swiper.autoplay?.stop();
      iconPause?.classList.add('hidden');
      iconPlay?.classList.remove('hidden');
      toggle?.setAttribute('aria-pressed', 'true');
      toggle?.setAttribute('aria-label', 'Play background slideshow');
    } else {
      playMedia(activeSlide);
      swiper.autoplay?.start();
      iconPause?.classList.remove('hidden');
      iconPlay?.classList.add('hidden');
      toggle?.setAttribute('aria-pressed', 'false');
      toggle?.setAttribute('aria-label', 'Pause background slideshow');
    }
  };

  const onToggleClick = () => {
    isPaused = !isPaused;
    applyToggleState();
  };
  toggle?.addEventListener('click', onToggleClick);

  if (reducedMotion) {
    applyToggleState();
  }

  return () => {
    document.removeEventListener('visibilitychange', onVisibilityChange);
    toggle?.removeEventListener('click', onToggleClick);
    kenBurnsTween?.kill();
    if (kenBurnsTarget) {
      gsap.set(kenBurnsTarget, { clearProps: 'transform' });
    }
    kenBurnsTween = null;
    kenBurnsTarget = null;
    if (!swiper.destroyed) swiper.destroy(true, true);
  };
}
