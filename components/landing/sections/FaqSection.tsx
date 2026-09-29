import Cta from '../Cta';
import { faq } from '../content';

/**
 * Reference §A-8: white, two columns — eyebrow, large heading and a
 * full-width CTA on the left; native <details> rows divided by hairlines on
 * the right. Several can be open at once, as in the reference; keyboard and
 * screen-reader behaviour come from <details>/<summary> with no JS.
 */
export default function FaqSection() {
  return (
    <section className="lp-section lp-section--white" aria-labelledby="lp-faq-heading">
      <div className="lp-container lp-faq-layout">
        <div className="lp-faq-layout__intro">
          <p className="lp-eyebrow">{faq.eyebrow}</p>
          <h2 id="lp-faq-heading" className="lp-display lp-display--lg">
            {faq.heading}
          </h2>
          <Cta wide className="lp-faq-layout__cta" />
        </div>
        <div className="lp-faq">
          {faq.items.map(({ question, answer }) => (
            <details key={question} className="lp-faq__item">
              <summary>
                <span>{question}</span>
                <span className="lp-faq__icon" aria-hidden="true" />
              </summary>
              <p className="lp-faq__answer">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
