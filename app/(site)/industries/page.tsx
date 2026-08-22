import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import Industries from '@/components/sections/Industries';

/**
 * Transcribed from pages/industries/index.html by scripts/html-to-tsx.py.
 * Element tree, classes, content and metadata are unchanged; only the
 * JSX-required attribute spellings differ from the source markup.
 */
export const metadata: Metadata = {
  title: "Industries We Serve | Grow Spark Consulting",
  description: "Different industries. Different constraints. One growth methodology. Grow Spark works across e-commerce, manufacturing, food & beverage, education, B2B and technology businesses.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/industries/" },
  openGraph: {
    type: "website",
    siteName: "Grow Spark Consulting",
    title: "Industries We Serve | Grow Spark Consulting",
    description: "Every business has economics, customers, systems and constraints. We apply one growth methodology to the unique architecture of each business.",
    url: "https://www.growsparkconsulting.com/industries/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Grow Spark Consulting",
    description: "Every business has economics, customers, systems and constraints. We apply one growth methodology to the unique architecture of each business.",
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
            <span aria-current="page">
              Industries
            </span>
          </li>
          {' '}
        </ol>
        {' '}
      </nav>
      {' '}
      {/* HERO */}
      {' '}
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-24">
        {' '}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-accent-tint opacity-60 blur-3xl pointer-events-none" aria-hidden="true" />
        {' '}
        <div className="relative mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="max-w-[820px] mx-auto text-center" data-reveal="">
            {' '}
            <span className="eyebrow block mb-5">
              Industries We Serve
            </span>
            {' '}
            <h1 className="page-hero-heading mb-8 text-balance">
              Different Industries. Different Constraints. One Growth Methodology.
            </h1>
            {' '}
            <p className="text-[17px] text-ink-soft leading-relaxed mb-7">
              Every business has a different growth equation.
            </p>
            {' '}
            <div className="lede-statement mb-7">
              {' '}
              <p className="text-muted">
                A fashion brand doesn't scale like a manufacturer.
              </p>
              {' '}
              <p className="text-muted">
                A restaurant doesn't operate like a SaaS company.
              </p>
              {' '}
              <p className="text-ink">
                An education business doesn't acquire customers like an industrial company.
              </p>
              {' '}
            </div>
            {' '}
            <p className="text-[17px] text-ink-soft leading-relaxed max-w-[680px] mx-auto">
              {' '} But every business has economics, customers, systems and constraints. Grow Spark applies our growth methodology to understand the unique architecture of each business — then identifies where the greatest opportunity for profitable growth exists. {' '}
            </p>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      <Industries />
      {' '}
      {/* OUR APPROACH */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Our Approach
            </span>
            {' '}
            <h2>
              We don't start with the industry. We start with the business.
            </h2>
            {' '}
            <p>
              Industry knowledge matters. But the most important questions are often universal.
            </p>
            {' '}
          </div>
          {' '}
          <div className="q-list" data-reveal="">
            {' '}
            <p>
              Where is revenue being created?
            </p>
            {' '}
            <p>
              Where is margin being lost?
            </p>
            {' '}
            <p>
              What is limiting growth?
            </p>
            {' '}
            <p>
              What is preventing customers from returning?
            </p>
            {' '}
            <p>
              Where is the founder becoming the bottleneck?
            </p>
            {' '}
            <p>
              Which parts of the business should be redesigned?
            </p>
            {' '}
            <p>
              Which technology or AI opportunities can create leverage?
            </p>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[17px] text-ink-soft max-w-[680px] mx-auto mt-12" data-reveal="">
            {' '} Our methodology gives us a common operating system for diagnosis while allowing the strategy to adapt to the economics of each industry. {' '}
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* ADJACENT CAPABILITY */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Adjacent Capability
            </span>
            {' '}
            <h2>
              Professional services & other founder-led businesses
            </h2>
            {' '}
          </div>
          {' '}
          <div className="industry-block max-w-[860px] mx-auto" data-reveal="">
            {' '}
            <p className="promise !mt-0">
              If the business depends on the founder, it has a scaling problem.
            </p>
            {' '}
            <p className="desc">
              For selected founder-led businesses, Grow Spark can help diagnose founder dependency, offer architecture, pricing, lead generation, sales, delivery systems, team structure, process, technology, recurring revenue, delegation and business value.
            </p>
            {' '}
            <a href="/rnd/founder-dependency-index/" className="inline-link mt-6">
              Related Research: The Founder Dependency Index {' '}
              <ArrowRight className="w-4 h-4" />
            </a>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[16px] text-muted max-w-[640px] mx-auto mt-8" data-reveal="">
            {' '} This is an adjacent category rather than a claim that every professional-services company is a Grow Spark fit. {' '}
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* WHAT WE LOOK FOR */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              What We Look For
            </span>
            {' '}
            <h2>
              We are not looking for a particular industry. We are looking for a particular kind of business.
            </h2>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" data-reveal="">
            {' '}
            <div className="check-item">
              <span className="check" aria-hidden="true">
                ✓
              </span>
              The founder is serious about growth
            </div>
            {' '}
            <div className="check-item">
              <span className="check" aria-hidden="true">
                ✓
              </span>
              Revenue already exists
            </div>
            {' '}
            <div className="check-item">
              <span className="check" aria-hidden="true">
                ✓
              </span>
              There is a meaningful business model to diagnose
            </div>
            {' '}
            <div className="check-item">
              <span className="check" aria-hidden="true">
                ✓
              </span>
              Growth has become more complicated
            </div>
            {' '}
            <div className="check-item">
              <span className="check" aria-hidden="true">
                ✓
              </span>
              Margins or profitability need improvement
            </div>
            {' '}
            <div className="check-item">
              <span className="check" aria-hidden="true">
                ✓
              </span>
              The founder feels the business has reached a constraint
            </div>
            {' '}
            <div className="check-item">
              <span className="check" aria-hidden="true">
                ✓
              </span>
              The company needs systems to scale
            </div>
            {' '}
            <div className="check-item">
              <span className="check" aria-hidden="true">
                ✓
              </span>
              Technology or AI could create leverage
            </div>
            {' '}
            <div className="check-item">
              <span className="check" aria-hidden="true">
                ✓
              </span>
              The founder wants strategic help, not just execution
            </div>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[17px] text-ink-soft max-w-[680px] mx-auto mt-12" data-reveal="">
            {' '} We are particularly interested in founder-led and mid-market businesses where better decisions can create meaningful economic impact. {' '}
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* INDUSTRY-AGNOSTIC METHOD */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Our Industry-Agnostic Method
            </span>
            {' '}
            <h2>
              The industry changes. The method doesn't.
            </h2>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-5" data-reveal="">
            {' '}
            <div className="detail-card">
              <span className="font-display font-extrabold text-[12px] text-accent block mb-3 tabular-nums">
                01
              </span>
              <h3>
                Diagnose
              </h3>
              <p>
                Understand the business, market and economics.
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <span className="font-display font-extrabold text-[12px] text-accent block mb-3 tabular-nums">
                02
              </span>
              <h3>
                Identify The Constraint
              </h3>
              <p>
                Find what is actually limiting growth or profitability.
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <span className="font-display font-extrabold text-[12px] text-accent block mb-3 tabular-nums">
                03
              </span>
              <h3>
                Design The Strategy
              </h3>
              <p>
                Determine the highest-leverage intervention.
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <span className="font-display font-extrabold text-[12px] text-accent block mb-3 tabular-nums">
                04
              </span>
              <h3>
                Transform
              </h3>
              <p>
                Implement the systems, offers, processes and technology required.
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <span className="font-display font-extrabold text-[12px] text-accent block mb-3 tabular-nums">
                05
              </span>
              <h3>
                Scale
              </h3>
              <p>
                Build repeatable systems and expansion paths.
              </p>
            </div>
            {' '}
          </div>
          {' '}
          <div className="text-center max-w-[640px] mx-auto mt-12" data-reveal="">
            {' '}
            <p className="text-[17px] text-ink-soft mb-2">
              The result is not an industry playbook.
            </p>
            {' '}
            <p className="statement-line">
              It is a business-specific growth architecture.
            </p>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* FINAL CTA */}
      {' '}
      <section className="py-24 sm:py-28 lg:py-32 text-center bg-ink">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8" data-reveal="">
          {' '}
          <span className="eyebrow !text-accent-bright block mb-5">
            Your Industry Is Unique
          </span>
          {' '}
          <h2 className="text-white cta-heading mb-10">
            Your Growth Problem Is Too. Let's Understand What Is Actually Holding Your Business Back.
          </h2>
          {' '}
          <div className="flex gap-4 justify-center flex-wrap">
            {' '}
            <a href="/contact/" className="btn btn-accent">
              Book A Grow Spark Growth Diagnostic
            </a>
            {' '}
            <a href="/strategy/" className="btn btn-secondary btn-on-dark">
              Book A 1:1 Founder Strategy Session
            </a>
            {' '}
          </div>
          {' '}
          <p className="text-[#9BA1A7] text-[16px] mt-8">
            Not ready for a full diagnostic? Start with the 1:1 session.
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
    </main>
  );
}
