import { CircleCheck } from 'lucide-react';
import { covers } from '../content';

/**
 * Reference §A-2: white, two columns — a very large uppercase heading over a
 * short check list, beside a five-tile image collage (two tiles over three).
 * Stacks below 992px with the collage centred.
 */
export default function CoversSection() {
  const [a, b, c, d, e] = covers.images;
  return (
    <section className="lp-section lp-section--white" aria-labelledby="lp-covers-heading">
      <div className="lp-container lp-covers">
        <div className="lp-covers__text">
          <h2 id="lp-covers-heading" className="lp-display lp-display--xl lp-display--tight">
            {covers.heading}
          </h2>
          <ul className="lp-checklist">
            {covers.items.map((item) => (
              <li key={item}>
                <CircleCheck className="lp-checklist__icon" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Image placeholders: swap each span for an <img> with object-fit: cover. */}
        <div className="lp-collage" aria-hidden="true">
          <div className="lp-collage__row lp-collage__row--top">
            <span className="lp-placeholder">{a}</span>
            <span className="lp-placeholder">{b}</span>
          </div>
          <div className="lp-collage__row lp-collage__row--bottom">
            <span className="lp-placeholder">{c}</span>
            <span className="lp-placeholder">{d}</span>
            <span className="lp-placeholder">{e}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
