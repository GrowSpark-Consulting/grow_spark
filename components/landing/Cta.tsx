import { ArrowRight } from 'lucide-react';
import { cta, FORM_ANCHOR } from './content';

/**
 * The page's single primary action (the reference repeats one CTA three
 * times). `wide` stretches it to its container, as in the hero and FAQ.
 */
export default function Cta({ wide = false, className = '' }: { wide?: boolean; className?: string }) {
  return (
    <a href={FORM_ANCHOR} className={`lp-btn lp-btn--lg${wide ? ' lp-btn--wide' : ''} ${className}`.trim()}>
      {cta.label}
      <ArrowRight className="lp-btn__arrow" aria-hidden="true" />
    </a>
  );
}
