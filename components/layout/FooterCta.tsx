/**
 * The generic "Ready to Transform Your Business?" CTA that used to be baked
 * into every page via Footer.tsx. Pulled out so individual pages can opt in
 * — several pages (Solutions, Our Framework, R&D, Industries, Strategy
 * Sessions and the Who We Are subpages) already end with their own
 * page-specific final CTA, and stacking this generic one directly beneath
 * theirs was redundant. Pages that have no CTA of their own render this
 * immediately above <Footer />, preserving the original position and markup.
 */
export default function FooterCta() {
  return (
    <div className="bg-ink text-white border-b border-white/10 py-20 sm:py-24 lg:py-28 text-center" data-reveal>
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
        <h2 className="text-white cta-heading mb-5">Ready to Transform Your Business?</h2>
        <p className="text-[#9BA1A7] text-[17px] mb-10 max-w-[520px] mx-auto">
          Speak with a transformation advisor and find out where to start.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="/strategy/" className="btn btn-accent">
            Book Executive Strategy Session
          </a>
          <a href="/contact/" className="btn btn-secondary btn-on-dark">
            Request Business Assessment
          </a>
        </div>
      </div>
    </div>
  );
}
