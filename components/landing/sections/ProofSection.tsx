import { Quote } from 'lucide-react';
import { proof } from '../content';

/**
 * Reference §A-7: light-grey band, centred heading, then a three-column grid
 * of white testimonial cards (quote → hairline → name → meta). On screens
 * ≤991px, components/effects/showMore.ts collapses the list to
 * `proof.mobileLimit` cards behind a "Show all" button — the server renders
 * every card, so nothing is hidden without JavaScript.
 *
 * Placeholders only: no rating stars or review counts until approved proof
 * exists.
 */
export default function ProofSection() {
  return (
    <section id="proof" className="lp-section lp-section--grey lp-section--roomy" aria-labelledby="lp-proof-heading">
      <div className="lp-container">
        <div className="lp-center-head lp-center-head--narrow">
          <p className="lp-eyebrow">{proof.eyebrow}</p>
          <h2 id="lp-proof-heading" className="lp-display lp-display--md">
            {proof.heading}
          </h2>
          <p className="lp-lead lp-lead--dark">{proof.body}</p>
        </div>
        <ul
          id="lp-proof-list"
          className="lp-proof"
          data-show-more=""
          data-show-more-limit={proof.mobileLimit}
          data-show-more-label={`Show all ${proof.items.length}`}
        >
          {proof.items.map((item, index) => (
            <li key={index} className="lp-proof__card">
              <Quote className="lp-proof__mark" aria-hidden="true" />
              <p className="lp-proof__quote">{item.quote}</p>
              <p className="lp-proof__name">{item.name}</p>
              <p className="lp-proof__meta">{item.meta}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
