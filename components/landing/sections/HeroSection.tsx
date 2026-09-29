import { Play } from 'lucide-react';
import Cta from '../Cta';
import { hero } from '../content';

/**
 * Reference §A-1 / §B: everything centred on navy — eyebrow, two-line
 * uppercase headline, subheading, a 16:9 media block capped at 604px, a
 * full-width (680px) CTA and a proof row.
 */
export default function HeroSection() {
  return (
    <section className="lp-hero" aria-labelledby="lp-hero-heading">
      <div className="lp-container lp-hero__inner">
        <p className="lp-hero__eyebrow">{hero.eyebrow}</p>
        <h1 id="lp-hero-heading" className="lp-hero__heading">
          {hero.headline}
        </h1>
        <p className="lp-hero__sub">{hero.subheading}</p>

        {/*
          Media placeholder. Replace the .lp-media__frame contents with the
          approved <video> (captions, controls, never autoplaying with sound)
          or <img>; the wrapper keeps the 16:9 frame and 604px cap.
        */}
        <figure className="lp-media" data-media-placeholder="">
          <div className="lp-media__frame" role="img" aria-label={hero.media.label}>
            <span className="lp-media__play" aria-hidden="true">
              <Play />
            </span>
            <span className="lp-media__label">{hero.media.label}</span>
            <span className="lp-media__note">{hero.media.note}</span>
          </div>
        </figure>

        <Cta wide className="lp-hero__cta" />

        <ul className="lp-hero__proof" aria-label="Key facts">
          {hero.proof.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
