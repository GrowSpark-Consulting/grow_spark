import type { Metadata } from 'next';
import FooterCta from '@/components/layout/FooterCta';

/**
 * Transcribed from pages/rnd/margin-architecture/index.html by scripts/html-to-tsx.py.
 * Element tree, classes, content and metadata are unchanged; only the
 * JSX-required attribute spellings differ from the source markup.
 */
export const metadata: Metadata = {
  title: "The Margin Architecture of Manufacturing | Grow Spark Research",
  description: "How revenue growth can hide economic weakness. The unit economics of a manufacturer matter more than output volume.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/rnd/margin-architecture/" },
  openGraph: {
    type: "article",
    siteName: "Grow Spark Consulting",
    title: "The Margin Architecture of Manufacturing | Grow Spark Research",
    description: "How revenue growth can hide economic weakness in manufacturing businesses.",
    url: "https://www.growsparkconsulting.com/rnd/margin-architecture/",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Margin Architecture of Manufacturing | Grow Spark Research",
    description: "How revenue growth can hide economic weakness in manufacturing businesses.",
  },
};

export default function Page() {
  return (
    <main id="main" className="pt-24">
      {' '}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 pt-10 pb-1">
        {' '}
        <ol className="breadcrumb">
          {' '}
          <li>
            <a href="/">
              Home
            </a>
          </li>
          {' '}
          <li>
            <a href="/rnd/">
              R&D
            </a>
          </li>
          {' '}
          <li>
            <span aria-current="page">
              The Margin Architecture of Manufacturing
            </span>
          </li>
          {' '}
        </ol>
        {' '}
      </nav>
      {' '}
      <article>
        {' '}
        {/* PUBLICATION HEADER */}
        {' '}
        <header className="relative overflow-hidden border-b border-hairline pt-14 pb-16 lg:pt-20 lg:pb-20">
          {' '}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-accent-tint opacity-60 blur-3xl pointer-events-none" aria-hidden="true" />
          {' '}
          <div className="relative mx-auto max-w-[760px] px-5 sm:px-8 text-center" data-reveal="">
            {' '}
            <span className="eyebrow block mb-5">
              White Paper 02 · Profitability & Margins
            </span>
            {' '}
            <h1 className="page-hero-heading mb-5 text-balance">
              The Margin Architecture of Manufacturing
            </h1>
            {' '}
            <p className="lede-statement text-muted mb-8">
              How Revenue Growth Can Hide Economic Weakness
            </p>
            {' '}
            <div className="paper-meta">
              {' '}
              <span>
                Grow Spark Research
              </span>
              <span className="dot">
                ·
              </span>
              {' '}
              <span>
                Version 1.0
              </span>
              <span className="dot">
                ·
              </span>
              {' '}
              <span>
                August 2026
              </span>
              <span className="dot">
                ·
              </span>
              {' '}
              <span>
                7 min read
              </span>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
        </header>
        {' '}
        {/* EXECUTIVE SUMMARY */}
        {' '}
        <section className="py-16 sm:py-20">
          {' '}
          <div className="mx-auto max-w-[760px] px-5 sm:px-8" data-reveal="">
            {' '}
            <span className="eyebrow block mb-5">
              Executive Summary
            </span>
            {' '}
            <div className="callout is-summary">
              {' '}
              <p>
                A manufacturer can run at high utilisation, employ a large workforce and ship significant volume while the founder remains dissatisfied with margins and cash generation.
              </p>
              {' '}
              <p>
                Grow Spark hypothesis: the unit economics of a manufacturer matter more than output volume.
              </p>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
        </section>
        {' '}
        {/* KEY INSIGHT */}
        {' '}
        <section className="py-16 sm:py-20 bg-paper-sunken">
          {' '}
          <div className="mx-auto max-w-[760px] px-5 sm:px-8" data-reveal="">
            {' '}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              {' '}
              <span className="eyebrow">
                Key Insight
              </span>
              {' '}
              <span className="tag-badge">
                Grow Spark Framework
              </span>
              {' '}
            </div>
            {' '}
            <div className="callout is-bordered">
              {' '}
              <span className="eyebrow block mb-3">
                Margin Architecture
              </span>
              {' '}
              <p className="chain-line">
                Volume tells you how much a factory produced. It doesn't tell you how much value the business actually kept.
              </p>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
        </section>
        {' '}
        {/* FRAMEWORK */}
        {' '}
        <section className="py-16 sm:py-20">
          {' '}
          <div className="mx-auto max-w-[760px] px-5 sm:px-8" data-reveal="">
            {' '}
            <span className="eyebrow block mb-5">
              Framework
            </span>
            {' '}
            <h2 className="subsection-heading mb-4">
              Five Layers Of Margin Architecture
            </h2>
            {' '}
            <p className="text-[16px] text-ink-soft leading-relaxed mb-8">
              Every manufacturing business can be broken into five layers that determine what it actually keeps.
            </p>
            {' '}
            <div className="grid-hairline grid-cols-1">
              {' '}
              <div className="chain-item">
                <span className="cnum">
                  1
                </span>
                <div>
                  <h3>
                    Price
                  </h3>
                  <p>
                    Does pricing reflect value and cost structure?
                  </p>
                </div>
              </div>
              {' '}
              <div className="chain-item">
                <span className="cnum">
                  2
                </span>
                <div>
                  <h3>
                    Product Cost
                  </h3>
                  <p>
                    True manufacturing, packaging and handling cost.
                  </p>
                </div>
              </div>
              {' '}
              <div className="chain-item">
                <span className="cnum">
                  3
                </span>
                <div>
                  <h3>
                    Distribution
                  </h3>
                  <p>
                    Economic value retained by intermediaries.
                  </p>
                </div>
              </div>
              {' '}
              <div className="chain-item">
                <span className="cnum">
                  4
                </span>
                <div>
                  <h3>
                    Operating Load
                  </h3>
                  <p>
                    Fixed cost required to support revenue.
                  </p>
                </div>
              </div>
              {' '}
              <div className="chain-item">
                <span className="cnum">
                  5
                </span>
                <div>
                  <h3>
                    Cash Conversion
                  </h3>
                  <p>
                    How quickly profit becomes usable cash.
                  </p>
                </div>
              </div>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
        </section>
        {' '}
        {/* THE REVENUE TRAP */}
        {' '}
        <section className="py-16 sm:py-20 bg-paper-sunken">
          {' '}
          <div className="mx-auto max-w-[760px] px-5 sm:px-8" data-reveal="">
            {' '}
            <span className="eyebrow block mb-5">
              The Revenue Trap
            </span>
            {' '}
            <h2 className="subsection-heading mb-4">
              More Volume Does Not Automatically Mean More Profit
            </h2>
            {' '}
            <p className="text-[16px] text-ink-soft leading-relaxed">
              Model incremental contribution after additional costs and capital requirements — not just incremental revenue.
            </p>
            {' '}
          </div>
          {' '}
        </section>
        {' '}
        {/* DISTRIBUTION AS STRATEGY */}
        {' '}
        <section className="py-16 sm:py-20">
          {' '}
          <div className="mx-auto max-w-[760px] px-5 sm:px-8" data-reveal="">
            {' '}
            <span className="eyebrow block mb-5">
              Distribution As Strategy
            </span>
            {' '}
            <h2 className="subsection-heading mb-4">
              The Channel You Choose Is A Strategic Decision, Not An Afterthought
            </h2>
            {' '}
            <p className="text-[16px] text-ink-soft leading-relaxed mb-6">
              Distribution can determine customer ownership, pricing control, cash timing and retained margin.
            </p>
            {' '}
            <p className="statement-line">
              Model each major channel separately instead of relying on one blended margin.
            </p>
            {' '}
          </div>
          {' '}
        </section>
        {' '}
        {/* PRACTICAL APPLICATION */}
        {' '}
        <section className="py-16 sm:py-20 bg-paper-sunken">
          {' '}
          <div className="mx-auto max-w-[760px] px-5 sm:px-8" data-reveal="">
            {' '}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              {' '}
              <span className="eyebrow">
                Practical Application
              </span>
              {' '}
              <span className="tag-badge">
                Grow Spark Framework
              </span>
              {' '}
            </div>
            {' '}
            <h2 className="subsection-heading mb-4">
              The Margin Leak Map
            </h2>
            {' '}
            <p className="text-[16px] text-ink-soft leading-relaxed mb-7">
              A simple contribution calculation that surfaces where margin is actually leaking:
            </p>
            {' '}
            <div className="callout is-bordered mb-7">
              {' '}
              <p className="chain-line">
                {' '} Selling price {' '}
                <span className="text-accent">
                  −
                </span>
                {' '} discounts {' '}
                <span className="text-accent">
                  −
                </span>
                {' '} channel fees {' '}
                <span className="text-accent">
                  −
                </span>
                {' '} commissions {' '}
                <span className="text-accent">
                  −
                </span>
                {' '} freight {' '}
                <span className="text-accent">
                  −
                </span>
                {' '} packaging {' '}
                <span className="text-accent">
                  −
                </span>
                {' '} returns/rejections {' '}
                <span className="text-accent">
                  −
                </span>
                {' '} variable production cost {' '}
                <span className="text-accent">
                  −
                </span>
                {' '} incremental labour {' '}
                <span className="text-accent">
                  =
                </span>
                {' '} Contribution {' '}
              </p>
              {' '}
            </div>
            {' '}
            <p className="text-[16px] text-ink-soft leading-relaxed">
              Compare contribution with fixed costs and capital requirements to see what the business truly keeps.
            </p>
            {' '}
          </div>
          {' '}
        </section>
        {' '}
        {/* IMPLICATIONS & CONCLUSION */}
        {' '}
        <section className="py-16 sm:py-20">
          {' '}
          <div className="mx-auto max-w-[760px] px-5 sm:px-8" data-reveal="">
            {' '}
            <span className="eyebrow block mb-5">
              Implications & Conclusion
            </span>
            {' '}
            <h2 className="subsection-heading mb-4">
              Design For Contribution, Not Throughput
            </h2>
            {' '}
            <p className="text-[16px] text-ink-soft leading-relaxed mb-6">
              Manufacturing growth should be designed around contribution, not throughput.
            </p>
            {' '}
            <p className="statement-line text-accent">
              The objective is a manufacturing system that converts capability into durable economic value.
            </p>
            {' '}
          </div>
          {' '}
        </section>
        {' '}
        {/* ABOUT GROW SPARK RESEARCH */}
        {' '}
        <section className="py-16 sm:py-20 bg-paper-sunken">
          {' '}
          <div className="mx-auto max-w-[760px] px-5 sm:px-8" data-reveal="">
            {' '}
            <span className="eyebrow block mb-5">
              About Grow Spark Research
            </span>
            {' '}
            <div className="callout is-bordered">
              {' '}
              <p>
                Grow Spark Research explores the economics, systems and strategic decisions behind business growth. The Margin Architecture framework referenced in this paper is Grow Spark's own perspective, developed through client work and field observation.
              </p>
              {' '}
              <p>
                It is not independently validated academic research, and Grow Spark is not a university or peer-reviewed research institution.
              </p>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
        </section>
        {' '}
        {/* SOURCES & EVIDENCE */}
        {' '}
        <section className="py-16 sm:py-20">
          {' '}
          <div className="mx-auto max-w-[760px] px-5 sm:px-8" data-reveal="">
            {' '}
            <span className="eyebrow block mb-5">
              Sources & Evidence
            </span>
            {' '}
            <div className="callout is-neutral">
              {' '}
              <p>
                This paper is based on Grow Spark's proprietary Margin Architecture framework and general field observation from client engagements. No external studies, surveys or third-party datasets are cited in this paper.
              </p>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
        </section>
        {' '}
      </article>
      {' '}
      {/* FINAL CTA */}
      {' '}
      <section className="py-24 sm:py-28 lg:py-32 text-center bg-ink">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8" data-reveal="">
          {' '}
          <span className="eyebrow !text-accent-bright block mb-5">
            Research Into Action
          </span>
          {' '}
          <h2 className="text-white cta-heading mb-10">
            Find Out Where Your Margin Is Actually Leaking.
          </h2>
          {' '}
          <div className="flex gap-4 justify-center flex-wrap">
            {' '}
            <a href="/contact/" className="btn btn-accent">
              Book A Growth Diagnostic
            </a>
            {' '}
            <a href="/rnd/" className="btn btn-secondary btn-on-dark">
              More Research
            </a>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      <FooterCta />
      {' '}
    </main>
  );
}
