import type { Metadata } from 'next';
import FooterCta from '@/components/layout/FooterCta';

/**
 * Transcribed from pages/rnd/before-the-restaurant/index.html by scripts/html-to-tsx.py.
 * Element tree, classes, content and metadata are unchanged; only the
 * JSX-required attribute spellings differ from the source markup.
 */
export const metadata: Metadata = {
  title: "Before You Build the Restaurant | Grow Spark Research",
  description: "A business-model framework for food & beverage founders. The most important restaurant decision may happen before the location, interiors, menu or staff are purchased.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/rnd/before-the-restaurant/" },
  openGraph: {
    type: "article",
    siteName: "Grow Spark Consulting",
    title: "Before You Build the Restaurant | Grow Spark Research",
    description: "A business-model framework for food & beverage founders.",
    url: "https://www.growsparkconsulting.com/rnd/before-the-restaurant/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Before You Build the Restaurant | Grow Spark Research",
    description: "A business-model framework for food & beverage founders.",
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
              Before You Build the Restaurant
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
              White Paper 03 · Business Model Engineering
            </span>
            {' '}
            <h1 className="page-hero-heading mb-5 text-balance">
              Before You Build the Restaurant
            </h1>
            {' '}
            <p className="lede-statement text-muted mb-8">
              A Business-Model Framework for Food & Beverage Founders
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
                6 min read
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
                The most important restaurant decision may happen before the location, interiors, menu or staff are purchased.
              </p>
              {' '}
              <p>
                Grow Spark hypothesis: what operating model should the business use?
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
                Business Model Fit
              </span>
              {' '}
              <p className="chain-line">
                The first version of a food business doesn't need to be the most expensive version. It needs to teach the founder the most while protecting capital.
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
              Seven Decision Variables
            </h2>
            {' '}
            <p className="text-[16px] text-ink-soft leading-relaxed mb-8">
              Before committing capital, seven variables determine whether an operating model fits the founder, the market and the moment.
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
                    Capital Intensity
                  </h3>
                  <p>
                    How much capital the model requires upfront.
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
                    Fixed-Cost Load
                  </h3>
                  <p>
                    How much the business must carry every month regardless of demand.
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
                    Demand Validation
                  </h3>
                  <p>
                    How quickly the model can test real customer demand.
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
                    Unit Economics
                  </h3>
                  <p>
                    Whether the underlying numbers work at a single-unit level.
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
                    Operating Complexity
                  </h3>
                  <p>
                    How much operational overhead the model demands.
                  </p>
                </div>
              </div>
              {' '}
              <div className="chain-item">
                <span className="cnum">
                  6
                </span>
                <div>
                  <h3>
                    Channel Access
                  </h3>
                  <p>
                    How the model reaches and acquires customers.
                  </p>
                </div>
              </div>
              {' '}
              <div className="chain-item">
                <span className="cnum">
                  7
                </span>
                <div>
                  <h3>
                    Replication Potential
                  </h3>
                  <p>
                    Whether the model can be repeated across locations.
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
        {/* RESTAURANT VS ASSET-LIGHT */}
        {' '}
        <section className="py-16 sm:py-20 bg-paper-sunken">
          {' '}
          <div className="mx-auto max-w-[760px] px-5 sm:px-8" data-reveal="">
            {' '}
            <span className="eyebrow block mb-5">
              Restaurant vs. Asset-Light Models
            </span>
            {' '}
            <h2 className="subsection-heading mb-4">
              Neither Model Is Universally Superior
            </h2>
            {' '}
            <p className="text-[16px] text-ink-soft leading-relaxed mb-6">
              A traditional restaurant can provide experience, visibility and dine-in economics. A cloud-kitchen or asset-light model can reduce certain physical overheads and allow faster experimentation.
            </p>
            {' '}
            <p className="statement-line">
              Fit depends on concept, market, demand, unit economics, capital and strategy.
            </p>
            {' '}
          </div>
          {' '}
        </section>
        {' '}
        {/* PRE-COMMITMENT RULE */}
        {' '}
        <section className="py-16 sm:py-20">
          {' '}
          <div className="mx-auto max-w-[760px] px-5 sm:px-8" data-reveal="">
            {' '}
            <span className="eyebrow block mb-5">
              Pre-Commitment Rule
            </span>
            {' '}
            <h2 className="subsection-heading mb-7">
              Model Three Cases Before You Sign A Lease
            </h2>
            {' '}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {' '}
              <span className="chip">
                Base Case
              </span>
              {' '}
              <span className="chip">
                Downside Case
              </span>
              {' '}
              <span className="chip">
                Upside Case
              </span>
              {' '}
            </div>
            {' '}
            <p className="text-[16px] text-ink-soft leading-relaxed mb-6">
              Model at least three cases before a major lease or fit-out.
            </p>
            {' '}
            <p className="statement-line text-accent">
              A model that works only in the upside case deserves scrutiny.
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
              The Grow Spark Decision Framework
            </h2>
            {' '}
            <p className="text-[16px] text-ink-soft leading-relaxed mb-7">
              Score each model 1–5 on:
            </p>
            {' '}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {' '}
              <span className="chip">
                Capital risk
              </span>
              {' '}
              <span className="chip">
                Fixed-cost risk
              </span>
              {' '}
              <span className="chip">
                Validation speed
              </span>
              {' '}
              <span className="chip">
                Contribution potential
              </span>
              {' '}
              <span className="chip">
                Operational complexity
              </span>
              {' '}
              <span className="chip">
                Customer acquisition
              </span>
              {' '}
              <span className="chip">
                Replication potential
              </span>
              {' '}
              <span className="chip">
                Founder dependency
              </span>
              {' '}
            </div>
            {' '}
            <p className="text-[16px] text-ink-soft leading-relaxed">
              Use the result directionally, not as a scientific benchmark.
            </p>
            {' '}
          </div>
          {' '}
        </section>
        {' '}
        {/* CONCLUSION */}
        {' '}
        <section className="py-16 sm:py-20">
          {' '}
          <div className="mx-auto max-w-[760px] px-5 sm:px-8" data-reveal="">
            {' '}
            <span className="eyebrow block mb-5">
              Conclusion
            </span>
            {' '}
            <h2 className="subsection-heading mb-4">
              Protect Capital. Preserve Adaptability.
            </h2>
            {' '}
            <p className="text-[16px] text-ink-soft leading-relaxed mb-6">
              The first version of a business does not need to be the most expensive version.
            </p>
            {' '}
            <p className="statement-line text-accent">
              It needs to teach the founder the most while protecting capital and preserving adaptability.
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
                Grow Spark Research explores the economics, systems and strategic decisions behind business growth. The Business Model Fit framework and Grow Spark Decision Framework referenced in this paper are Grow Spark's own perspectives, developed through client work and field observation.
              </p>
              {' '}
              <p>
                They are not independently validated academic research, and Grow Spark is not a university or peer-reviewed research institution.
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
                This paper is based on Grow Spark's proprietary frameworks and general field observation from client engagements. No external studies, surveys or third-party datasets are cited in this paper.
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
            Before You Commit The Capital, Model The Decision.
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
