import type { Metadata } from 'next';
import FooterCta from '@/components/layout/FooterCta';

/**
 * Transcribed from pages/rnd/revenue-without-profit/index.html by scripts/html-to-tsx.py.
 * Element tree, classes, content and metadata are unchanged; only the
 * JSX-required attribute spellings differ from the source markup.
 */
export const metadata: Metadata = {
  title: "Revenue Without Profit | Grow Spark Research",
  description: "Why high-growth e-commerce businesses can still struggle to create wealth. Revenue growth does not automatically equal economic growth.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/rnd/revenue-without-profit/" },
  openGraph: {
    type: "article",
    siteName: "Grow Spark Consulting",
    title: "Revenue Without Profit | Grow Spark Research",
    description: "Why high-growth e-commerce businesses can still struggle to create wealth.",
    url: "https://www.growsparkconsulting.com/rnd/revenue-without-profit/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revenue Without Profit | Grow Spark Research",
    description: "Why high-growth e-commerce businesses can still struggle to create wealth.",
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
              Revenue Without Profit
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
              White Paper 01 · Customer Economics
            </span>
            {' '}
            <h1 className="page-hero-heading mb-5 text-balance">
              Revenue Without Profit
            </h1>
            {' '}
            <p className="lede-statement text-muted mb-8">
              Why High-Growth E-Commerce Businesses Can Still Struggle to Create Wealth
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
                Revenue growth does not automatically equal economic growth. An e-commerce business can increase orders while acquisition costs, marketplace fees, discounts, fulfilment, returns and weak repeat purchasing absorb the additional revenue.
              </p>
              {' '}
              <p>
                Grow Spark hypothesis: revenue growth ≠ economic growth.
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
                The Revenue-to-Value Chain
              </span>
              {' '}
              <p className="chain-line">
                Acquisition → Conversion → Contribution → Retention → LTV → Cash Generation
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
              The Revenue-to-Value Chain
            </h2>
            {' '}
            <p className="text-[16px] text-ink-soft leading-relaxed mb-8">
              Six stages determine what a customer actually creates for the business — not just what they spend.
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
                    Acquisition
                  </h3>
                  <p>
                    Cost to create a customer.
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
                    Conversion
                  </h3>
                  <p>
                    Efficiency of turning demand into transactions.
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
                    Contribution
                  </h3>
                  <p>
                    What remains after variable fulfilment costs.
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
                    Retention
                  </h3>
                  <p>
                    How often customers return.
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
                    LTV
                  </h3>
                  <p>
                    Contribution created over the customer relationship.
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
                    Cash Generation
                  </h3>
                  <p>
                    Economic value reaching the business after operating requirements.
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
        {/* WHY LTV CHANGES THE EQUATION */}
        {' '}
        <section className="py-16 sm:py-20 bg-paper-sunken">
          {' '}
          <div className="mx-auto max-w-[760px] px-5 sm:px-8" data-reveal="">
            {' '}
            <span className="eyebrow block mb-5">
              Why LTV Changes The Equation
            </span>
            {' '}
            <h2 className="subsection-heading mb-4">
              LTV Sets The Ceiling On What A Business Can Afford To Spend
            </h2>
            {' '}
            <p className="text-[16px] text-ink-soft leading-relaxed mb-8">
              LTV affects how aggressively a company can acquire customers, how much it can invest in retention and how resilient the business becomes when acquisition costs rise.
            </p>
            {' '}
            <span className="tag-badge is-external mb-4 inline-flex">
              External Source
            </span>
            {' '}
            <div className="callout is-bordered">
              {' '}
              <p>
                Shopify's 2025 retention research reports that repeat customers represented 21% of the customer base but 44% of total revenue and 46% of orders in the dataset it cites. This is evidence from that dataset, not a universal benchmark.
              </p>
              {' '}
              <a className="inline-link mt-4" href="https://www.shopify.com/enterprise/blog/ecommerce-customer-retention" target="_blank" rel="noopener">
                Source: Shopify Enterprise — Ecommerce Customer Retention (2025) {' '}
                <span aria-hidden="true">
                  ↗
                </span>
              </a>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
        </section>
        {' '}
        {/* MARKETPLACE DEPENDENCY */}
        {' '}
        <section className="py-16 sm:py-20">
          {' '}
          <div className="mx-auto max-w-[760px] px-5 sm:px-8" data-reveal="">
            {' '}
            <span className="eyebrow block mb-5">
              Marketplace Dependency
            </span>
            {' '}
            <h2 className="subsection-heading mb-5">
              The Real Question Isn't “Marketplace Or D2C?”
            </h2>
            {' '}
            <p className="statement-line mb-6">
              It's: what role should each channel play in customer economics?
            </p>
            {' '}
            <p className="text-[16px] text-ink-soft leading-relaxed">
              A marketplace can provide acquisition and distribution, while a D2C channel can support retention and direct customer relationships — subject to platform policies and applicable laws.
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
                Grow Spark Diagnostic
              </span>
              {' '}
            </div>
            {' '}
            <h2 className="subsection-heading mb-4">
              Mapping The Constraint With The Highest Economic Leverage
            </h2>
            {' '}
            <p className="text-[16px] text-ink-soft leading-relaxed mb-7">
              We map:
            </p>
            {' '}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {' '}
              <span className="chip">
                Revenue
              </span>
              {' '}
              <span className="chip">
                Gross margin
              </span>
              {' '}
              <span className="chip">
                Contribution margin
              </span>
              {' '}
              <span className="chip">
                Marketplace fees
              </span>
              {' '}
              <span className="chip">
                CAC
              </span>
              {' '}
              <span className="chip">
                Conversion
              </span>
              {' '}
              <span className="chip">
                AOV
              </span>
              {' '}
              <span className="chip">
                Returns
              </span>
              {' '}
              <span className="chip">
                Repeat purchase rate
              </span>
              {' '}
              <span className="chip">
                LTV
              </span>
              {' '}
              <span className="chip">
                Discounts
              </span>
              {' '}
              <span className="chip">
                Channel concentration
              </span>
              {' '}
              <span className="chip">
                Customer ownership
              </span>
              {' '}
            </div>
            {' '}
            <p className="text-[16px] text-ink-soft leading-relaxed">
              Then we identify the constraint with the highest economic leverage.
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
              Growing Revenue Isn't The Same As Growing Value
            </h2>
            {' '}
            <p className="text-[16px] text-ink-soft leading-relaxed mb-6">
              The most dangerous e-commerce illusion is: “We are growing, therefore the business is getting healthier.”
            </p>
            {' '}
            <p className="statement-line text-accent">
              The better question is: what does each new customer actually create for the business — today and over time?
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
                Grow Spark Research explores the economics, systems and strategic decisions behind business growth. Our frameworks — including the Revenue-to-Value Chain referenced in this paper — are Grow Spark's own perspectives, developed through client work and field observation.
              </p>
              {' '}
              <p>
                They are not independently validated academic research, and Grow Spark is not a university or peer-reviewed research institution. Where we cite external evidence, it is clearly attributed to its original source.
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
            <div>
              {' '}
              <div className="source-item">
                {' '}
                <span className="si-text">
                  <strong>
                    Shopify Enterprise
                  </strong>
                  How to Improve Ecommerce Customer Retention (2025)
                </span>
                {' '}
                <a className="si-link" href="https://www.shopify.com/enterprise/blog/ecommerce-customer-retention" target="_blank" rel="noopener">
                  View Source {' '}
                  <span aria-hidden="true">
                    ↗
                  </span>
                </a>
                {' '}
              </div>
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
            See What Your Revenue-to-Value Chain Actually Looks Like.
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
