import Cta from '../Cta';
import { options } from '../content';

/**
 * Reference §A-6: navy, centred heading and sub, a row of four bordered cards
 * (each with a status pill and an optional badge overlapping the top edge),
 * then the CTA. The reference used this slot for dated events; here it is a
 * neutral, content-pending layout role.
 */
export default function OptionsSection() {
  return (
    <section className="lp-section lp-section--navy lp-section--flush-top" aria-labelledby="lp-options-heading">
      <div className="lp-container">
        <div className="lp-center-head">
          <h2 id="lp-options-heading" className="lp-display lp-display--md">
            {options.heading}
          </h2>
          <p className="lp-lead">{options.body}</p>
        </div>
        <ul className="lp-options">
          {options.cards.map((card, index) => (
            <li key={index} className={`lp-option${card.muted ? ' lp-option--muted' : ''}`}>
              {card.badge && <span className="lp-option__badge">{card.badge}</span>}
              <p className="lp-option__title">{card.title}</p>
              <span className="lp-option__status">{card.status}</span>
            </li>
          ))}
        </ul>
        <div className="lp-center lp-options__cta">
          <Cta />
        </div>
      </div>
    </section>
  );
}
