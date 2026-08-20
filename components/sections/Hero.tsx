import { ArrowRight, ChevronDown, Pause, Play } from 'lucide-react';

/**
 * Transcribed from sections/hero.html by scripts/html-to-tsx.py.
 * Server Component: the source partial carries no behaviour of its own,
 * so nothing here needs the browser. Markup, classes, ids, data
 * attributes and content are unchanged from the source.
 */
export default function Hero() {
  return (
    <>
      {/* Media integration point (documentation only — no wiring below has changed). Production replacement videos for the 4 slides in this section are spec'd and tracked in public/grow-assets/hero-videos.json (status: pending for all). Source of truth: audit/home-asset-prompts.md, audit/video-treatment-spec.md, audit/video-qa-checklist.md, audit/color-grade-spec.md. Do not swap the `src`/`data-video-src` values below until the corresponding manifest item's status is "ready" and it has passed audit/video-qa-checklist.md. */}
      {' '}
      <section id="hero" className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-ink" aria-label="Introduction">
        {' '}
        <div className="swiper hero-swiper h-full" data-hero-swiper="" role="region" aria-roledescription="carousel" aria-label="Grow Spark Consulting highlights">
          {' '}
          <div className="swiper-wrapper h-full">
            {' '}
            <div className="swiper-slide relative" role="group" aria-roledescription="slide" aria-label="1 of 4" data-video-src="/videos/hero-01.mp4">
              {' '}
              {/* Integration point: manifest id HOME-V01 (public/grow-assets/hero-videos.json), poster id HOME-P01 (public/grow-assets/hero-posters.json) */}
              {' '}
              <video className="absolute inset-0 w-full h-full object-cover" data-hero-video="" src="/videos/hero-01.mp4" preload="auto" muted loop playsInline aria-hidden="true" />
              {' '}
              <div className="hero-scrim absolute inset-0" aria-hidden="true" />
              {' '}
              <div className="relative z-10 h-full flex items-center justify-center">
                {' '}
                <div className="mx-auto px-6 sm:px-10 text-center hero-text">
                  {' '}
                  <span className="hero-eyebrow">
                    Business Transformation Consulting
                  </span>
                  {' '}
                  <h1 className="hero-headline">
                    Building companies that outperform their competition.
                  </h1>
                  {' '}
                  <a href="/contact/" className="btn btn-hero">
                    {' '} Book Executive Strategy Session {' '}
                    <ArrowRight className="w-4 h-4 btn-arrow" />
                    {' '}
                  </a>
                  {' '}
                </div>
                {' '}
              </div>
              {' '}
            </div>
            {' '}
            <div className="swiper-slide relative" role="group" aria-roledescription="slide" aria-label="2 of 4" data-video-src="/videos/hero-02.mp4">
              {' '}
              {/* Integration point: manifest id HOME-V02 (public/grow-assets/hero-videos.json), poster id HOME-P02 (public/grow-assets/hero-posters.json) */}
              {' '}
              <video className="absolute inset-0 w-full h-full object-cover" data-hero-video="" preload="none" muted loop playsInline aria-hidden="true" />
              {' '}
              <div className="hero-scrim absolute inset-0" aria-hidden="true" />
              {' '}
              <div className="relative z-10 h-full flex items-center justify-center">
                {' '}
                <div className="mx-auto px-6 sm:px-10 text-center hero-text">
                  {' '}
                  <span className="hero-eyebrow">
                    What We Do
                  </span>
                  {' '}
                  <h1 className="hero-headline">
                    AI automation, custom software, and full-stack digital delivery.
                  </h1>
                  {' '}
                  <a href="/solutions/" className="btn btn-hero">
                    {' '} View All Services {' '}
                    <ArrowRight className="w-4 h-4 btn-arrow" />
                    {' '}
                  </a>
                  {' '}
                </div>
                {' '}
              </div>
              {' '}
            </div>
            {' '}
            <div className="swiper-slide relative" role="group" aria-roledescription="slide" aria-label="3 of 4" data-video-src="/videos/hero-03.mp4">
              {' '}
              {/* Integration point: manifest id HOME-V03 (public/grow-assets/hero-videos.json), poster id HOME-P03 (public/grow-assets/hero-posters.json) */}
              {' '}
              <video className="absolute inset-0 w-full h-full object-cover" data-hero-video="" preload="none" muted loop playsInline aria-hidden="true" />
              {' '}
              <div className="hero-scrim absolute inset-0" aria-hidden="true" />
              {' '}
              <div className="relative z-10 h-full flex items-center justify-center">
                {' '}
                <div className="mx-auto px-6 sm:px-10 text-center hero-text">
                  {' '}
                  <span className="hero-eyebrow">
                    Our Methodology
                  </span>
                  {' '}
                  <h1 className="hero-headline">
                    The Grow Spark Business Transformation Framework™
                  </h1>
                  {' '}
                  <a href="#framework" className="btn btn-hero">
                    {' '} Explore Our Framework {' '}
                    <ArrowRight className="w-4 h-4 btn-arrow" />
                    {' '}
                  </a>
                  {' '}
                </div>
                {' '}
              </div>
              {' '}
            </div>
            {' '}
            <div className="swiper-slide relative" role="group" aria-roledescription="slide" aria-label="4 of 4" data-video-src="/videos/hero-04.mp4">
              {' '}
              {/* Integration point: manifest id HOME-V04 (public/grow-assets/hero-videos.json), poster id HOME-P04 (public/grow-assets/hero-posters.json) */}
              {' '}
              <video className="absolute inset-0 w-full h-full object-cover" data-hero-video="" preload="none" muted loop playsInline aria-hidden="true" />
              {' '}
              <div className="hero-scrim absolute inset-0" aria-hidden="true" />
              {' '}
              <div className="relative z-10 h-full flex items-center justify-center">
                {' '}
                <div className="mx-auto px-6 sm:px-10 text-center hero-text">
                  {' '}
                  <span className="hero-eyebrow">
                    Case Study
                  </span>
                  {' '}
                  <h1 className="hero-headline">
                    Reducing production downtime through a redesigned operating model.
                  </h1>
                  {' '}
                  <a href="/rnd/" className="btn btn-hero">
                    {' '} R & D {' '}
                    <ArrowRight className="w-4 h-4 btn-arrow" />
                    {' '}
                  </a>
                  {' '}
                </div>
                {' '}
              </div>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
          <div className="absolute bottom-9 inset-x-0 z-20 flex items-center justify-center gap-6">
            {' '}
            <button type="button" className="hero-play-toggle" data-hero-play-toggle="" aria-label="Pause background video slideshow" aria-pressed="false">
              {' '}
              <Pause className="w-4 h-4" data-icon-pause="" />
              {' '}
              <Play className="w-4 h-4 hidden" data-icon-play="" />
              {' '}
            </button>
            {' '}
            <div className="swiper-pagination hero-pagination !relative !w-auto" data-hero-pagination="" />
            {' '}
          </div>
          {' '}
        </div>
        {' '}
        <a href="#exec-summary" className="hero-scroll-cue" aria-label="Scroll to content">
          {' '}
          <ChevronDown className="w-5 h-5" />
          {' '}
        </a>
        {' '}
      </section>
      {' '}
    </>
  );
}
