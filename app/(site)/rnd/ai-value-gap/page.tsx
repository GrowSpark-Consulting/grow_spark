import type { Metadata } from 'next';
import FooterCta from '@/components/layout/FooterCta';

/**
 * Transcribed from pages/rnd/ai-value-gap/index.html by scripts/html-to-tsx.py.
 * Element tree, classes, content and metadata are unchanged; only the
 * JSX-required attribute spellings differ from the source markup.
 */
export const metadata: Metadata = {
  title: "The AI Value Gap | Grow Spark Research",
  description: "Why companies struggle to turn AI adoption into measurable business value. AI adoption is not the same as AI transformation — value comes from the workflow, not the tool.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/rnd/ai-value-gap/" },
  openGraph: {
    type: "article",
    siteName: "Grow Spark Consulting",
    title: "The AI Value Gap | Grow Spark Research",
    description: "Why companies struggle to turn AI adoption into measurable business value.",
    url: "https://www.growsparkconsulting.com/rnd/ai-value-gap/",
  },
  twitter: {
    card: "summary_large_image",
    title: "The AI Value Gap | Grow Spark Research",
    description: "Why companies struggle to turn AI adoption into measurable business value.",
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
              The AI Value Gap
            </span>
          </li>
          {' '}
        </ol>
        {' '}
      </nav>
      {' '}
      {/* PUBLICATION HEADER */}
      {' '}
      <article>
        {' '}
        <header className="relative overflow-hidden border-b border-hairline pt-14 pb-16 lg:pt-20 lg:pb-20">
          {' '}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-accent-tint opacity-60 blur-3xl pointer-events-none" aria-hidden="true" />
          {' '}
          <div className="relative mx-auto max-w-[760px] px-5 sm:px-8 text-center" data-reveal="">
            {' '}
            <span className="eyebrow block mb-5">
              White Paper 04 · AI & Technology
            </span>
            {' '}
            <h1 className="page-hero-heading mb-5 text-balance">
              The AI Value Gap
            </h1>
            {' '}
            <p className="lede-statement text-muted mb-8">
              Why Companies Struggle to Turn AI Adoption Into Measurable Business Value
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
                8 min read
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
                AI adoption is not the same as AI transformation. Buying tools creates capability; measurable value requires workflow redesign, data readiness, governance, adoption and outcome measurement.
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
                The Grow Spark AI Value Chain
              </span>
              {' '}
              <p className="chain-line">
                Opportunity → Workflow → Data → AI System → Human Adoption → Measurement → Governance
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
              Where The Gap Appears
            </h2>
            {' '}
            <p className="text-[16px] text-ink-soft leading-relaxed mb-7">
              The gap between AI adoption and AI value tends to appear at predictable points:
            </p>
            {' '}
            <div className="flex flex-wrap gap-2.5">
              {' '}
              <span className="chip">
                Problem isn't economically important
              </span>
              {' '}
              <span className="chip">
                Workflow is poorly defined
              </span>
              {' '}
              <span className="chip">
                Data is inaccessible
              </span>
              {' '}
              <span className="chip">
                People don't adopt the system
              </span>
              {' '}
              <span className="chip">
                Outputs aren't integrated into decisions
              </span>
              {' '}
              <span className="chip">
                No baseline exists
              </span>
              {' '}
              <span className="chip">
                Risk is unmanaged
              </span>
              {' '}
            </div>
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
              The AI Opportunity Matrix
            </h2>
            {' '}
            <p className="text-[16px] text-ink-soft leading-relaxed mb-8">
              Rank candidate use cases across seven dimensions before committing budget:
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
                    Business Impact
                  </h3>
                  <p>
                    How much value the use case could create if it works.
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
                    Frequency
                  </h3>
                  <p>
                    How often the workflow occurs.
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
                    Data Readiness
                  </h3>
                  <p>
                    Whether the data required actually exists and is accessible.
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
                    Implementation Complexity
                  </h3>
                  <p>
                    How difficult the use case is to build and integrate.
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
                    Risk
                  </h3>
                  <p>
                    The consequence of errors or misuse.
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
                    Adoption
                  </h3>
                  <p>
                    How likely people are to actually use the system.
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
                    Measurability
                  </h3>
                  <p>
                    Whether the outcome can actually be measured.
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
        {/* GOVERNANCE */}
        {' '}
        <section className="py-16 sm:py-20">
          {' '}
          <div className="mx-auto max-w-[760px] px-5 sm:px-8" data-reveal="">
            {' '}
            <span className="eyebrow block mb-5">
              Governance
            </span>
            {' '}
            <h2 className="subsection-heading mb-6">
              AI Value Requires Managed Risk
            </h2>
            {' '}
            <span className="tag-badge is-external mb-4 inline-flex">
              External Source
            </span>
            {' '}
            <div className="callout is-neutral mb-6">
              {' '}
              <p>
                NIST's AI Risk Management Framework is a voluntary framework for managing AI risks and improving trustworthiness. Its playbook organises suggested actions around four functions: Govern, Map, Measure and Manage.
              </p>
              {' '}
              <a className="inline-link mt-4" href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noopener">
                Source: NIST — AI Risk Management Framework {' '}
                <span aria-hidden="true">
                  ↗
                </span>
              </a>
              {' '}
            </div>
            {' '}
            <p className="text-[16px] text-ink-soft leading-relaxed">
              We treat the NIST AI RMF as an external reference for governance — not as a Grow Spark-owned framework.
            </p>
            {' '}
          </div>
          {' '}
        </section>
        {' '}
        {/* FROM PILOT TO OPERATING SYSTEM */}
        {' '}
        <section className="py-16 sm:py-20 bg-paper-sunken">
          {' '}
          <div className="mx-auto max-w-[760px] px-5 sm:px-8" data-reveal="">
            {' '}
            <span className="eyebrow block mb-5">
              From Pilot To Operating System
            </span>
            {' '}
            <h2 className="subsection-heading mb-7">
              The Path From Experiment To Leverage
            </h2>
            {' '}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {' '}
              <span className="chip">
                Use Case
              </span>
              {' '}
              <span className="chip">
                Baseline
              </span>
              {' '}
              <span className="chip">
                Pilot
              </span>
              {' '}
              <span className="chip">
                Measure
              </span>
              {' '}
              <span className="chip">
                Integrate
              </span>
              {' '}
              <span className="chip">
                Govern
              </span>
              {' '}
              <span className="chip">
                Scale
              </span>
              {' '}
            </div>
            {' '}
            <p className="statement-line text-accent">
              The objective is measurable leverage, not the number of AI tools.
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
              Value Comes From The Workflow, Not The Tool
            </h2>
            {' '}
            <p className="text-[16px] text-ink-soft leading-relaxed">
              The companies that create the most value from AI may be those best at identifying economically important workflows and redesigning them around technology, people and data.
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
                Grow Spark Research explores the economics, systems and strategic decisions behind business growth, including AI adoption. The AI Value Chain and AI Opportunity Matrix referenced in this paper are Grow Spark's own frameworks, developed through client work and field observation.
              </p>
              {' '}
              <p>
                They are not independently validated academic research. Where we reference external standards, such as the NIST AI Risk Management Framework, they are clearly attributed and are not Grow Spark-owned.
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
                    NIST
                  </strong>
                  AI Risk Management Framework (AI RMF 1.0)
                </span>
                {' '}
                <a className="si-link" href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noopener">
                  View Source {' '}
                  <span aria-hidden="true">
                    ↗
                  </span>
                </a>
                {' '}
              </div>
              {' '}
              <div className="source-item">
                {' '}
                <span className="si-text">
                  <strong>
                    NIST
                  </strong>
                  AI RMF Playbook
                </span>
                {' '}
                <a className="si-link" href="https://www.nist.gov/itl/ai-risk-management-framework/nist-ai-rmf-playbook" target="_blank" rel="noopener">
                  View Source {' '}
                  <span aria-hidden="true">
                    ↗
                  </span>
                </a>
                {' '}
              </div>
              {' '}
              <div className="source-item">
                {' '}
                <span className="si-text">
                  <strong>
                    NIST
                  </strong>
                  Generative AI Profile
                </span>
                {' '}
                <a className="si-link" href="https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence" target="_blank" rel="noopener">
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
            Find Out Where AI Could Actually Move Your Numbers.
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
