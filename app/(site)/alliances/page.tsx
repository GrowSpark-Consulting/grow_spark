import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import FooterCta from '@/components/layout/FooterCta';

/**
 * Transcribed from pages/alliances/index.html by scripts/html-to-tsx.py.
 * Element tree, classes, content and metadata are unchanged; only the
 * JSX-required attribute spellings differ from the source markup.
 */
export const metadata: Metadata = {
  title: "Alliances — Strategy Should Not End At The Slide | Grow Spark Consulting",
  description: "Grow Spark leads the diagnosis, strategic direction and transformation roadmap. Through strategic alliances across AI, automation, technology and digital growth, we connect that strategy to the capabilities required to build it.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/alliances/" },
  openGraph: {
    type: "website",
    siteName: "Grow Spark Consulting",
    title: "Alliances — Strategy Should Not End At The Slide | Grow Spark Consulting",
    description: "One strategic partner. A broader technology ecosystem.",
    url: "https://www.growsparkconsulting.com/alliances/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alliances — Strategy Should Not End At The Slide | Grow Spark Consulting",
    description: "One strategic partner. A broader technology ecosystem.",
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
              Alliances
            </span>
          </li>
          {' '}
        </ol>
        {' '}
      </nav>
      {' '}
      {/* HERO */}
      {' '}
      <section className="relative overflow-hidden border-b border-hairline pt-16 pb-20 lg:pt-24 lg:pb-24">
        {' '}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-accent-tint opacity-60 blur-3xl pointer-events-none" aria-hidden="true" />
        {' '}
        <div className="relative mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="max-w-[820px] mx-auto text-center" data-reveal="">
            {' '}
            <span className="eyebrow block mb-5">
              Alliances
            </span>
            {' '}
            <h1 className="page-hero-heading mb-8 text-balance">
              Strategy Should Not End At The Slide.
            </h1>
            {' '}
            <p className="text-[17px] text-ink-soft leading-relaxed max-w-[660px] mx-auto mb-4">
              When a business needs transformation, strategy and implementation have to work together.
            </p>
            {' '}
            <p className="text-[17px] text-ink-soft leading-relaxed max-w-[660px] mx-auto mb-4">
              Grow Spark leads the diagnosis, strategic direction and transformation roadmap.
            </p>
            {' '}
            <p className="text-[17px] text-ink-soft leading-relaxed max-w-[660px] mx-auto mb-9">
              Through our strategic alliances with specialist businesses across AI, automation, technology and digital growth, we can connect that strategy to the capabilities required to build it.
            </p>
            {' '}
            <div className="lede-statement">
              {' '}
              <p className="text-muted">
                One Strategic Partner.
              </p>
              {' '}
              <p className="text-ink">
                A Broader Technology Ecosystem.
              </p>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* WHY THE ALLIANCE MODEL EXISTS */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Why Our Alliance Model Exists
            </span>
            {' '}
            <h2>
              A consulting firm should know when to advise — and when to bring in specialist builders.
            </h2>
            {' '}
            <p>
              A business may discover that its biggest constraint requires:
            </p>
            {' '}
          </div>
          {' '}
          <div className="flex flex-wrap justify-center gap-2.5 max-w-[860px] mx-auto" data-reveal="">
            {' '}
            <span className="chip">
              An AI system
            </span>
            {' '}
            <span className="chip">
              A workflow automation
            </span>
            {' '}
            <span className="chip">
              A custom application
            </span>
            {' '}
            <span className="chip">
              A new digital platform
            </span>
            {' '}
            <span className="chip">
              A CRM architecture
            </span>
            {' '}
            <span className="chip">
              A website or digital experience
            </span>
            {' '}
            <span className="chip">
              Marketing technology
            </span>
            {' '}
            <span className="chip">
              Data infrastructure
            </span>
            {' '}
            <span className="chip">
              Analytics
            </span>
            {' '}
            <span className="chip">
              Technology integration
            </span>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[17px] text-ink-soft max-w-[720px] mx-auto mt-10 mb-4" data-reveal="">
            {' '} Instead of forcing every problem into a consulting deliverable, Grow Spark can connect the strategy to specialist implementation capabilities within our alliance ecosystem. {' '}
          </p>
          {' '}
          <p className="text-center text-[17px] text-ink-soft mb-8" data-reveal="">
            The result:
          </p>
          {' '}
          <div className="flex flex-wrap items-center justify-center gap-2.5" data-reveal="">
            {' '}
            <span className="chip">
              Diagnose
            </span>
            {' '}
            <ArrowRight className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
            {' '}
            <span className="chip">
              Design
            </span>
            {' '}
            <ArrowRight className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
            {' '}
            <span className="chip">
              Build
            </span>
            {' '}
            <ArrowRight className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
            {' '}
            <span className="chip">
              Integrate
            </span>
            {' '}
            <ArrowRight className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
            {' '}
            <span className="chip">
              Improve
            </span>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* MCCARTHY AI */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 lg:gap-12 items-start" data-reveal="">
            {' '}
            <div className="alliance-visual">
              {' '}
              <span className="av-mark">
                AI
              </span>
              {' '}
              <h2 className="av-name">
                McCarthy AI
              </h2>
              {' '}
              <p className="av-tagline">
                AI strategy. Automation. Intelligent workflows.
              </p>
              {' '}
            </div>
            {' '}
            <div>
              {' '}
              <p className="text-[16.5px] text-ink-soft leading-relaxed mb-8">
                When the opportunity is AI or automation, Grow Spark can work alongside McCarthy AI to move from business problem to implemented system.
              </p>
              {' '}
              <span className="eyebrow block mb-4">
                Capabilities May Include
              </span>
              {' '}
              <div className="flex flex-wrap gap-2.5 mb-9">
                {' '}
                <span className="chip">
                  AI opportunity assessment
                </span>
                {' '}
                <span className="chip">
                  AI strategy & roadmap
                </span>
                {' '}
                <span className="chip">
                  Workflow audits
                </span>
                {' '}
                <span className="chip">
                  Process automation
                </span>
                {' '}
                <span className="chip">
                  AI-assisted lead intake
                </span>
                {' '}
                <span className="chip">
                  Knowledge-assistant workflows
                </span>
                {' '}
                <span className="chip">
                  API & workflow integrations
                </span>
                {' '}
                <span className="chip">
                  Dashboards & decision systems
                </span>
                {' '}
                <span className="chip">
                  AI-enabled customer workflows
                </span>
                {' '}
                <span className="chip">
                  Ongoing AI advisory & optimisation
                </span>
                {' '}
              </div>
              {' '}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {' '}
                <div className="role-box is-grow">
                  {' '}
                  <span>
                    Role Of Grow Spark
                  </span>
                  {' '}
                  <p>
                    Identify the business problem, economic opportunity and strategic priority.
                  </p>
                  {' '}
                </div>
                {' '}
                <div className="role-box">
                  {' '}
                  <span>
                    Role Of McCarthy AI
                  </span>
                  {' '}
                  <p>
                    Design and implement the appropriate AI / automation solution within the agreed scope.
                  </p>
                  {' '}
                </div>
                {' '}
              </div>
              {' '}
              <p className="text-[13px] text-muted">
                [McCarthy AI website URL to be added]
              </p>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* MCCARTHY DIGITAL */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 lg:gap-12 items-start" data-reveal="">
            {' '}
            <div className="alliance-visual">
              {' '}
              <span className="av-mark">
                MD
              </span>
              {' '}
              <h2 className="av-name">
                McCarthy Digital
              </h2>
              {' '}
              <p className="av-tagline">
                Technology. Digital products. Marketing. Digital growth.
              </p>
              {' '}
            </div>
            {' '}
            <div>
              {' '}
              <p className="text-[16.5px] text-ink-soft leading-relaxed mb-8">
                When a strategic recommendation requires technology, digital execution or marketing infrastructure, Grow Spark can connect the client with McCarthy Digital.
              </p>
              {' '}
              <span className="eyebrow block mb-4">
                Capabilities May Include
              </span>
              {' '}
              <div className="flex flex-wrap gap-2.5 mb-9">
                {' '}
                <span className="chip">
                  Website design & development
                </span>
                {' '}
                <span className="chip">
                  Web applications
                </span>
                {' '}
                <span className="chip">
                  Digital product development
                </span>
                {' '}
                <span className="chip">
                  Technology implementation
                </span>
                {' '}
                <span className="chip">
                  CRM & marketing technology
                </span>
                {' '}
                <span className="chip">
                  Digital marketing
                </span>
                {' '}
                <span className="chip">
                  Performance marketing
                </span>
                {' '}
                <span className="chip">
                  SEO / organic growth
                </span>
                {' '}
                <span className="chip">
                  Analytics & dashboards
                </span>
                {' '}
                <span className="chip">
                  Technology integrations
                </span>
                {' '}
                <span className="chip">
                  Digital customer experience
                </span>
                {' '}
                <span className="chip">
                  Ongoing technology support
                </span>
                {' '}
              </div>
              {' '}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {' '}
                <div className="role-box is-grow">
                  {' '}
                  <span>
                    Role Of Grow Spark
                  </span>
                  {' '}
                  <p>
                    Determine what the business actually needs, why it matters and how the capability fits into the broader growth strategy.
                  </p>
                  {' '}
                </div>
                {' '}
                <div className="role-box">
                  {' '}
                  <span>
                    Role Of McCarthy Digital
                  </span>
                  {' '}
                  <p>
                    Provide the relevant technical, digital and marketing implementation capability within the agreed scope.
                  </p>
                  {' '}
                </div>
                {' '}
              </div>
              {' '}
              <p className="text-[13px] text-muted">
                [McCarthy Digital website URL to be added]
              </p>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* HOW THE ECOSYSTEM WORKS */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              How The Ecosystem Works
            </span>
            {' '}
            <h2>
              A business problem does not arrive labelled “marketing,” “AI” or “technology.”
            </h2>
            {' '}
            <p>
              It arrives as:
            </p>
            {' '}
          </div>
          {' '}
          <div className="flex flex-wrap justify-center gap-2.5 max-w-[760px] mx-auto" data-reveal="">
            {' '}
            <span className="chip">
              “We're losing customers.”
            </span>
            {' '}
            <span className="chip">
              “Our team is spending too much time on manual work.”
            </span>
            {' '}
            <span className="chip">
              “We can't see what's happening across the business.”
            </span>
            {' '}
            <span className="chip">
              “Our website isn't converting.”
            </span>
            {' '}
            <span className="chip">
              “We need to scale without adding another 20 employees.”
            </span>
            {' '}
            <span className="chip">
              “We need better systems.”
            </span>
            {' '}
            <span className="chip">
              “We want to use AI but don't know where to start.”
            </span>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[17px] text-ink-soft max-w-[680px] mx-auto mt-10 mb-8" data-reveal="">
            {' '} Grow Spark starts by understanding the underlying business problem. Then we determine whether the solution requires: {' '}
          </p>
          {' '}
          <div className="grid-hairline grid-cols-1 max-w-[760px] mx-auto" data-reveal="">
            {' '}
            <div className="route-row">
              {' '}
              <span className="rr-said">
                Strategy
              </span>
              {' '}
              <ArrowRight className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
              {' '}
              <span className="rr-dest">
                Grow Spark
              </span>
              {' '}
            </div>
            {' '}
            <div className="route-row">
              {' '}
              <span className="rr-said">
                AI / Automation
              </span>
              {' '}
              <ArrowRight className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
              {' '}
              <span className="rr-dest">
                McCarthy AI
              </span>
              {' '}
            </div>
            {' '}
            <div className="route-row">
              {' '}
              <span className="rr-said">
                Technology / Digital
              </span>
              {' '}
              <ArrowRight className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
              {' '}
              <span className="rr-dest">
                McCarthy Digital
              </span>
              {' '}
            </div>
            {' '}
            <div className="route-row">
              {' '}
              <span className="rr-said">
                Or a combination
              </span>
              {' '}
              <ArrowRight className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
              {' '}
              <span className="rr-dest">
                All Three, Aligned
              </span>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* ONE CLIENT. ONE STRATEGIC DIRECTION. */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-ink">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head on-dark" data-reveal="">
            {' '}
            <span className="eyebrow !text-accent-bright block mb-3.5">
              One Client. One Strategic Direction.
            </span>
            {' '}
            <h2>
              Designed to prevent a common transformation problem
            </h2>
            {' '}
          </div>
          {' '}
          <div className="max-w-[680px] mx-auto text-center" data-reveal="">
            {' '}
            <div className="flex flex-wrap justify-center gap-2.5 mb-10">
              {' '}
              <span className="chip chip-on-dark">
                The strategy says one thing.
              </span>
              {' '}
              <span className="chip chip-on-dark">
                The technology team builds another.
              </span>
              {' '}
              <span className="chip chip-on-dark">
                The marketing team does something else.
              </span>
              {' '}
              <span className="chip chip-on-dark">
                The business ends up with more tools — but no better system.
              </span>
              {' '}
            </div>
            {' '}
            <p className="text-[#9BA1A7] text-[16.5px] leading-relaxed mb-6">
              Grow Spark acts as the strategic layer. Where appropriate, our alliance companies provide specialist implementation capabilities.
            </p>
            {' '}
            <p className="statement-line text-white">
              This creates a connected path from business diagnosis to implementation.
            </p>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* EXAMPLE */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Example
            </span>
            {' '}
            <h2>
              “We want to use AI to reduce our team's workload.”
            </h2>
            {' '}
            <p>
              We don't immediately sell an AI chatbot. We first examine:
            </p>
            {' '}
          </div>
          {' '}
          <div className="flex flex-wrap justify-center gap-2.5 max-w-[820px] mx-auto mb-12" data-reveal="">
            {' '}
            <span className="chip">
              Which workflows consume the most time?
            </span>
            {' '}
            <span className="chip">
              How often do they occur?
            </span>
            {' '}
            <span className="chip">
              What is the cost of the current process?
            </span>
            {' '}
            <span className="chip">
              What data is involved?
            </span>
            {' '}
            <span className="chip">
              What risk exists if automation makes a mistake?
            </span>
            {' '}
            <span className="chip">
              What should remain human?
            </span>
            {' '}
            <span className="chip">
              What would measurable improvement look like?
            </span>
            {' '}
          </div>
          {' '}
          <div className="max-w-[620px] mx-auto flex flex-col items-center gap-3" data-reveal="">
            {' '}
            <div className="flow-step">
              {' '}
              <p className="ft">
                Grow Spark
              </p>
              {' '}
              <p className="fd">
                Business diagnosis + AI opportunity + roadmap
              </p>
              {' '}
            </div>
            {' '}
            <ArrowRight className="w-5 h-5 text-accent rotate-90 shrink-0" aria-hidden="true" />
            {' '}
            <div className="flow-step">
              {' '}
              <p className="ft">
                McCarthy AI
              </p>
              {' '}
              <p className="fd">
                Workflow design + automation + integration
              </p>
              {' '}
            </div>
            {' '}
            <ArrowRight className="w-5 h-5 text-accent rotate-90 shrink-0" aria-hidden="true" />
            {' '}
            <div className="flow-step is-outcome">
              {' '}
              <p className="ft">
                Grow Spark
              </p>
              {' '}
              <p className="fd">
                Business measurement + optimisation
              </p>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
          <div className="text-center max-w-[640px] mx-auto mt-12" data-reveal="">
            {' '}
            <p className="text-[17px] text-ink-soft mb-2">
              The technology serves the business.
            </p>
            {' '}
            <p className="statement-line text-accent">
              Not the other way around.
            </p>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* WHY THIS MATTERS */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Why This Matters
            </span>
            {' '}
            <h2>
              Founders should not have to manage five different vendors to transform one business.
            </h2>
            {' '}
            <p>
              Our alliance ecosystem can help reduce fragmentation.
            </p>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2" data-reveal="">
            {' '}
            <div className="tile-card">
              One strategic direction
            </div>
            {' '}
            <div className="tile-card">
              Specialist capabilities when required
            </div>
            {' '}
            <div className="tile-card">
              Clearer accountability
            </div>
            {' '}
            <div className="tile-card">
              Better alignment between business objectives and implementation
            </div>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* WHAT WE DON'T DO */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              What We Don't Do
            </span>
            {' '}
            <h2>
              Technology follows the business, not the other way around
            </h2>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" data-reveal="">
            {' '}
            <div className="tile-card">
              We don't recommend technology because it is fashionable.
            </div>
            {' '}
            <div className="tile-card">
              We don't automate a process simply because it can be automated.
            </div>
            {' '}
            <div className="tile-card">
              We don't build software before understanding the business requirement.
            </div>
            {' '}
            <div className="tile-card">
              We don't add marketing activity to compensate for a broken business model.
            </div>
            {' '}
            <div className="tile-card sm:col-span-2 lg:col-span-2">
              We don't believe every client needs every capability.
            </div>
            {' '}
          </div>
          {' '}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-12" data-reveal="">
            {' '}
            <span className="chip">
              First — Understand the business
            </span>
            {' '}
            <ArrowRight className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
            {' '}
            <span className="chip">
              Then — Choose the right intervention
            </span>
            {' '}
            <ArrowRight className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
            {' '}
            <span className="chip">
              Then — Bring in the right capability
            </span>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* ALLIANCE DISCLOSURE */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Alliance Disclosure
            </span>
            {' '}
            <h2>
              How we describe this relationship
            </h2>
            {' '}
          </div>
          {' '}
          <div className="bg-paper-raised border border-hairline rounded-card px-7 py-8 sm:px-10 sm:py-10 max-w-[820px] mx-auto" data-reveal="">
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-6">
              Grow Spark Consulting works with specialist businesses within its broader operating ecosystem to extend the capabilities available to clients. Depending on the engagement, Grow Spark may provide strategy and advisory directly while specialist implementation is delivered by an affiliated or alliance business under a separate scope or agreement.
            </p>
            {' '}
            <p className="text-[13.5px] text-muted leading-relaxed border-t border-hairline pt-6">
              This is placeholder disclosure language. It should be replaced with the final, legally approved wording once the ownership, contracting and invoicing structure of Grow Spark, McCarthy AI and McCarthy Digital is confirmed.
            </p>
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
