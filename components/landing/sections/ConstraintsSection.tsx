import { constraints } from '../content';

/**
 * Reference §A-3: white, two equal columns — eyebrow, uppercase heading whose
 * last line is in the accent colour, and body copy on the left; numbered,
 * lavender-bordered cards stacked on the right. Stacks below 768px.
 */
export default function ConstraintsSection() {
  return (
    <section className="lp-section lp-section--white lp-section--flush-top" aria-labelledby="lp-constraints-heading">
      <div className="lp-container lp-constraints">
        <div>
          <p className="lp-eyebrow">{constraints.eyebrow}</p>
          <h2 id="lp-constraints-heading" className="lp-display lp-display--lg">
            {constraints.heading} <span className="lp-accent">{constraints.headingAccent}</span>
          </h2>
          <p className="lp-lead lp-lead--dark">{constraints.body}</p>
        </div>
        <ol className="lp-cards">
          {constraints.cards.map((card, index) => (
            <li key={index} className="lp-card">
              <p className="lp-card__num" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="lp-card__title">{card.title}</h3>
              <p className="lp-card__body">{card.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
