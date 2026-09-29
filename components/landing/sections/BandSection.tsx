import { band } from '../content';

/**
 * Reference §A-4 layout role — the purple gradient band between the numbered
 * cards and the booking section: an image block beside a large heading and
 * body copy, then a centred white card. Neutral placeholders only; this is
 * not a founders section. Stacks (image first) below 992px.
 */
export default function BandSection() {
  const lastCard = band.card.length - 1;
  return (
    <section className="lp-band" aria-labelledby="lp-band-heading">
      <div className="lp-container">
        <div className="lp-band__row">
          {/* Image placeholder: swap the span for an <img> with object-fit: cover. */}
          <div className="lp-band__media" aria-hidden="true">
            <span className="lp-placeholder lp-placeholder--on-color">{band.image}</span>
          </div>
          <div className="lp-band__text">
            <h2 id="lp-band-heading" className="lp-band__heading">
              {band.heading}
            </h2>
            {band.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="lp-band__card">
          {band.card.map((paragraph, index) => (
            <p key={index} className={index === 0 || index === lastCard ? 'is-strong' : undefined}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
