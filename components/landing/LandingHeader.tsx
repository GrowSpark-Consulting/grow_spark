import { ArrowRight } from 'lucide-react';
import { announcement, header, FORM_ANCHOR } from './content';

/**
 * Minimal standalone header: the reference's announcement strip (static, it
 * scrolls away) followed by a slim sticky bar carrying only the Grow Spark
 * logo and the page's primary action. No site menu — the page has one job.
 *
 * Server Component. Stickiness is CSS only; the bar is 64px, inside the 96px
 * offset initAnchorLinks already applies when it scrolls to an anchor.
 */
export default function LandingHeader() {
  return (
    <>
      <a href="#main" className="lp-skip">
        Skip to main content
      </a>

      <div className="lp-topbar">
        <p className="lp-topbar__lead">
          <span className="lp-topbar__dot" aria-hidden="true" />
          {announcement.lead}
        </p>
        <p className="lp-topbar__detail">{announcement.detail}</p>
      </div>

      <header className="lp-header">
        <div className="lp-container lp-header__inner">
          <a href="/" className="lp-header__logo" aria-label="Grow Spark Consulting — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/gsc-white.png"
              alt="Grow Spark Consulting"
              width={1920}
              height={663}
              decoding="async"
            />
          </a>
          <a href={FORM_ANCHOR} className="lp-btn lp-btn--sm">
            {header.cta}
            <ArrowRight className="lp-btn__arrow" aria-hidden="true" />
          </a>
        </div>
      </header>
    </>
  );
}
