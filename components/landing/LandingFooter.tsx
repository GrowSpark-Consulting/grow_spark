/**
 * Minimal landing-page footer: logo, one line of positioning, a handful of
 * onward links and the copyright. The global footer's Privacy / Terms /
 * Cookie Policy links point at routes that do not exist yet, so they are
 * left out here rather than repeated.
 */
export default function LandingFooter() {
  return (
    <footer className="lp-footer">
      <div className="lp-container lp-footer__inner">
        <a href="/" className="lp-footer__logo" aria-label="Grow Spark Consulting — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/gsc-white.png"
            alt="Grow Spark Consulting"
            width={1920}
            height={663}
            loading="lazy"
            decoding="async"
          />
        </a>
        <p className="lp-footer__tagline">
          Business Transformation Consulting for ambitious founders and leadership teams.
        </p>
        <nav aria-label="Footer" className="lp-footer__links">
          <a href="/framework/">Our Framework</a>
          <a href="/case-studies/">Case Studies</a>
          <a href="/contact/">Contact</a>
          <a href="mailto:info@growsparkconsulting.com">info@growsparkconsulting.com</a>
        </nav>
        <p className="lp-footer__copy">&copy; 2026 Grow Spark Consulting. All rights reserved.</p>
      </div>
    </footer>
  );
}
