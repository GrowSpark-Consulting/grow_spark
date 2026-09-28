import { ArrowRight } from 'lucide-react';

const CASE_STUDIES = [
  {
    href: '/case-studies/cloud-kitchen/',
    category: 'Cloud Kitchen',
    title: 'Food & Beverage',
    summary:
      'He was about to build a restaurant. We helped him build a scalable food business instead — before the capital was committed.',
    figure: '3 locations in 8 months',
    figureNote: 'Reported cloud-kitchen footprint after the strategy shift',
    image: '/images/case-studies/cloud-kitchen.webp',
  },
  {
    href: '/case-studies/founder-dependency/',
    category: 'Founder Dependency',
    title: 'Organisational Scalability',
    summary:
      'The business was growing. The founder was drowning. How a founder-dependent operation became a scalable, system-led organisation.',
    figure: 'Founder-led → system-led',
    figureNote: 'Illustrative case study',
    image: '/images/case-studies/founder-dependency.webp',
  },
  {
    href: '/case-studies/water-manufacturer/',
    category: 'Water Manufacturer',
    title: 'Manufacturing & Distribution',
    summary:
      "Rebuilding a water manufacturer's route to market — from intermediary-led distribution to a direct-to-consumer model.",
    figure: '3–5% → 20% margin',
    figureNote: 'Approximately six months after implementation',
    image: '/images/case-studies/water-manufacturer.webp',
  },
] as const;

/**
 * The three published case studies, each card linking to its full page
 * under /case-studies/<slug>/. Replaces the six industry blocks that used to
 * sit here.
 *
 * Each card is one full-width row — content left, image right from lg up,
 * image-over-content when stacked. The image is decorative (alt=""): the
 * card's own text already names the destination.
 *
 * Server Component: no behaviour of its own. Hover lift comes from the
 * shared .card-elevate class; the arrow nudge from the global
 * `a:hover .btn-arrow` rule.
 */
export default function CaseStudyCards() {
  return (
    <section id="case-studies" className="py-20 sm:py-24 lg:py-28 bg-paper-sunken scroll-mt-24">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <div className="section-head" data-reveal="">
          <span className="eyebrow block mb-3.5">Case Studies</span>
          <h2>Selected engagements</h2>
          <p>The starting point, the decisions made and the result — documented end to end.</p>
        </div>
        <div className="case-grid grid grid-cols-1 gap-6" data-reveal="">
          {CASE_STUDIES.map((study) => (
            <a key={study.href} href={study.href} className="case-card card-elevate">
              <div className="case-body">
                <span className="cat">{study.category}</span>
                <h3>{study.title}</h3>
                <p className="summary">{study.summary}</p>
                <div className="figure">
                  <strong>{study.figure}</strong>
                  <span>{study.figureNote}</span>
                </div>
                <span className="read">
                  Read the case study
                  <ArrowRight className="btn-arrow w-4 h-4" aria-hidden="true" />
                </span>
              </div>
              <div className="case-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={study.image} alt="" width={1672} height={941} loading="lazy" decoding="async" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
