import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import StrategySessionForm from '@/components/sections/StrategySessionForm';

/**
 * Transcribed from pages/strategy/index.html by scripts/html-to-tsx.py.
 * Element tree, classes, content and metadata are unchanged; only the
 * JSX-required attribute spellings differ from the source markup.
 */
export const metadata: Metadata = {
  title: "Strategy Sessions | Grow Spark Consulting",
  description: "Five levels of strategic access — from a 60-minute Founder Strategy Session to an Annual Founder Advisory. Choose the level of strategic access your business needs.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/strategy/" },
  openGraph: {
    type: "website",
    siteName: "Grow Spark Consulting",
    title: "Strategy Sessions | Grow Spark Consulting",
    description: "Your business doesn't need another generic consultation. Choose the level of strategic access your business needs.",
    url: "https://www.growsparkconsulting.com/strategy/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategy Sessions | Grow Spark Consulting",
    description: "Your business doesn't need another generic consultation. Choose the level of strategic access your business needs.",
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
              Strategy Sessions
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
              Strategy Sessions
            </span>
            {' '}
            <h1 className="page-hero-heading mb-8 text-balance">
              Your Business Doesn't Need Another Generic Consultation.
            </h1>
            {' '}
            <div className="lede-statement mb-7">
              {' '}
              <p className="text-muted">
                Sometimes you need a clear outside perspective.
              </p>
              {' '}
              <p className="text-muted">
                Sometimes you need someone to challenge the business model.
              </p>
              {' '}
              <p className="text-ink">
                Sometimes you need an entire business diagnosed.
              </p>
              {' '}
            </div>
            {' '}
            <p className="text-[17px] text-ink-soft leading-relaxed max-w-[640px] mx-auto mb-10">
              Choose the level of strategic access your business needs.
            </p>
            {' '}
            <div className="flex gap-4 justify-center flex-wrap">
              {' '}
              <a href="#book" className="btn btn-primary" data-open-tab="session">
                Book A 1:1 Session
              </a>
              {' '}
              <a href="#engagements" className="btn btn-secondary">
                See All Engagements
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
      {/* WHY THESE SESSIONS EXIST */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[760px] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Why These Sessions Exist
            </span>
            {' '}
            <h2>
              Founders don't always need a long consulting project.
            </h2>
            {' '}
          </div>
          {' '}
          <div data-reveal="">
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-7">
              Sometimes one focused conversation can expose the problem. You may already know something is wrong.
            </p>
            {' '}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {' '}
              <span className="chip">
                Revenue is growing but profit isn't.
              </span>
              {' '}
              <span className="chip">
                Customers are coming in but not returning.
              </span>
              {' '}
              <span className="chip">
                The team is busy but the business isn't moving.
              </span>
              {' '}
              <span className="chip">
                You want to scale but don't know what should come first.
              </span>
              {' '}
              <span className="chip">
                You are about to invest heavily and want to know whether the decision makes sense.
              </span>
              {' '}
            </div>
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-4">
              That's where a strategy session can help.
            </p>
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-6">
              We don't use the hour to impress you with frameworks.
            </p>
            {' '}
            <p className="statement-line text-accent">
              We use it to understand the problem, challenge assumptions and identify what deserves attention next.
            </p>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* FIVE LEVELS */}
      {' '}
      <section id="engagements" className="py-20 sm:py-24 lg:py-28 scroll-mt-24">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Choose Your Level
            </span>
            {' '}
            <h2>
              Five levels of strategic access
            </h2>
            {' '}
            <p>
              Positioning ranges, not fixed promises — exact scope and pricing for the deeper engagements are confirmed before work begins.
            </p>
            {' '}
          </div>
          {' '}
          <div className="flex flex-col gap-6 lg:gap-7">
            {' '}
            <article className="eng-card is-featured" data-reveal="">
              {' '}
              <div>
                {' '}
                <span className="eng-num">
                  01 · Founder Strategy Session
                </span>
                {' '}
                <h3 className="subsection-heading mb-3">
                  Founder Strategy Session
                </h3>
                {' '}
                <p className="eng-for">
                  <strong className="text-ink font-semibold">
                    For:
                  </strong>
                  {' '} Founders with a specific business problem who want a sharp outside perspective.
                </p>
                {' '}
                <span className="eyebrow block mb-4">
                  We Can Work On
                </span>
                {' '}
                <div className="flex flex-wrap gap-2.5 mb-8">
                  {' '}
                  <span className="chip">
                    Growth constraints
                  </span>
                  {' '}
                  <span className="chip">
                    Revenue & profitability
                  </span>
                  {' '}
                  <span className="chip">
                    Positioning & offers
                  </span>
                  {' '}
                  <span className="chip">
                    Customer acquisition
                  </span>
                  {' '}
                  <span className="chip">
                    LTV & retention
                  </span>
                  {' '}
                  <span className="chip">
                    Business-model questions
                  </span>
                  {' '}
                  <span className="chip">
                    Team & operational bottlenecks
                  </span>
                  {' '}
                  <span className="chip">
                    AI & technology opportunities
                  </span>
                  {' '}
                  <span className="chip">
                    Scaling decisions
                  </span>
                  {' '}
                </div>
                {' '}
                <span className="eyebrow block mb-3">
                  What You Leave With
                </span>
                {' '}
                <ul className="eng-leave">
                  {' '}
                  <li>
                    A clearer understanding of the problem
                  </li>
                  {' '}
                  <li>
                    Key strategic observations
                  </li>
                  {' '}
                  <li>
                    Prioritised next steps
                  </li>
                  {' '}
                  <li>
                    A decision on whether deeper work is warranted
                  </li>
                  {' '}
                </ul>
                {' '}
              </div>
              {' '}
              <div className="eng-side">
                {' '}
                <div className="eng-price">
                  ₹9,999
                </div>
                {' '}
                <p className="eng-meta">
                  60 minutes · Private · Direct access to Pragadeesh
                </p>
                {' '}
                <a href="#book" className="btn btn-primary btn-block" data-open-tab="session">
                  Book Your 1:1 Session
                </a>
                {' '}
              </div>
              {' '}
            </article>
            {' '}
            <article className="eng-card" data-reveal="">
              {' '}
              <div>
                {' '}
                <span className="eng-num">
                  02 · Founder Growth Intensive
                </span>
                {' '}
                <h3 className="subsection-heading mb-3">
                  Founder Growth Intensive
                </h3>
                {' '}
                <p className="eng-for">
                  <strong className="text-ink font-semibold">
                    For:
                  </strong>
                  {' '} Founders who need more than a conversation and want to unpack a complex business challenge.
                </p>
                {' '}
                <span className="eyebrow block mb-4">
                  What We Examine
                </span>
                {' '}
                <div className="flex flex-wrap gap-2.5 mb-8">
                  {' '}
                  <span className="chip">
                    Business model
                  </span>
                  {' '}
                  <span className="chip">
                    Revenue architecture
                  </span>
                  {' '}
                  <span className="chip">
                    Customer economics
                  </span>
                  {' '}
                  <span className="chip">
                    Offer & positioning
                  </span>
                  {' '}
                  <span className="chip">
                    Acquisition & conversion
                  </span>
                  {' '}
                  <span className="chip">
                    Margins
                  </span>
                  {' '}
                  <span className="chip">
                    Operations
                  </span>
                  {' '}
                  <span className="chip">
                    Technology / AI opportunities
                  </span>
                  {' '}
                  <span className="chip">
                    Immediate priorities
                  </span>
                  {' '}
                </div>
                {' '}
                <span className="eyebrow block mb-3">
                  What You Leave With
                </span>
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed">
                  A structured view of the problem, strategic options, priorities and a practical action direction.
                </p>
                {' '}
              </div>
              {' '}
              <div className="eng-side">
                {' '}
                <p className="eng-meta">
                  2 hours · Deep-dive working session · Direct access to Pragadeesh
                </p>
                {' '}
                <a href="#book" className="btn btn-primary btn-block" data-open-tab="intensive">
                  Book A Growth Intensive
                </a>
                {' '}
              </div>
              {' '}
            </article>
            {' '}
            <article className="eng-card" data-reveal="">
              {' '}
              <div>
                {' '}
                <span className="eng-num">
                  03 · Grow Spark Growth Diagnostic
                </span>
                {' '}
                <h3 className="subsection-heading mb-3">
                  Grow Spark Growth Diagnostic
                </h3>
                {' '}
                <p className="eng-for">
                  <strong className="text-ink font-semibold">
                    For:
                  </strong>
                  {' '} Founders who believe the problem is deeper than one issue and want Grow Spark to examine the business more comprehensively.
                </p>
                {' '}
                <span className="eyebrow block mb-4">
                  The Diagnostic Can Cover
                </span>
                {' '}
                <div className="flex flex-wrap gap-2.5 mb-8">
                  {' '}
                  <span className="chip">
                    Business model
                  </span>
                  {' '}
                  <span className="chip">
                    Market
                  </span>
                  {' '}
                  <span className="chip">
                    Revenue
                  </span>
                  {' '}
                  <span className="chip">
                    Profitability
                  </span>
                  {' '}
                  <span className="chip">
                    Customer economics
                  </span>
                  {' '}
                  <span className="chip">
                    Positioning
                  </span>
                  {' '}
                  <span className="chip">
                    Sales & marketing
                  </span>
                  {' '}
                  <span className="chip">
                    Operations
                  </span>
                  {' '}
                  <span className="chip">
                    Technology
                  </span>
                  {' '}
                  <span className="chip">
                    AI opportunities
                  </span>
                  {' '}
                  <span className="chip">
                    Data & decision systems
                  </span>
                  {' '}
                  <span className="chip">
                    Founder dependency
                  </span>
                  {' '}
                  <span className="chip">
                    Scaling constraints
                  </span>
                  {' '}
                </div>
                {' '}
                <span className="eyebrow block mb-3">
                  Deliverable
                </span>
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed">
                  A structured diagnostic identifying the major constraints, opportunities and priorities.
                </p>
                {' '}
              </div>
              {' '}
              <div className="eng-side">
                {' '}
                <p className="eng-meta">
                  Structured business assessment · Scope defined before engagement
                </p>
                {' '}
                <a href="#book" className="btn btn-primary btn-block" data-open-tab="application">
                  Apply For A Growth Diagnostic
                </a>
                {' '}
              </div>
              {' '}
            </article>
            {' '}
            <article className="eng-card is-selective" data-reveal="">
              {' '}
              <div>
                {' '}
                <span className="eng-num">
                  04 · 90-Day Growth Transformation
                </span>
                {' '}
                <h3 className="subsection-heading mb-3">
                  90-Day Growth Transformation
                </h3>
                {' '}
                <p className="eng-for">
                  <strong className="text-white font-semibold">
                    For:
                  </strong>
                  {' '} Businesses that don't simply need advice — they need the strategy turned into action.
                </p>
                {' '}
                <span className="eyebrow !text-accent-bright block mb-4">
                  Potential Workstreams
                </span>
                {' '}
                <div className="flex flex-wrap gap-2.5">
                  {' '}
                  <span className="chip chip-on-dark">
                    Revenue growth
                  </span>
                  {' '}
                  <span className="chip chip-on-dark">
                    Profitability
                  </span>
                  {' '}
                  <span className="chip chip-on-dark">
                    Positioning
                  </span>
                  {' '}
                  <span className="chip chip-on-dark">
                    Offer redesign
                  </span>
                  {' '}
                  <span className="chip chip-on-dark">
                    Customer economics
                  </span>
                  {' '}
                  <span className="chip chip-on-dark">
                    Sales systems
                  </span>
                  {' '}
                  <span className="chip chip-on-dark">
                    Marketing architecture
                  </span>
                  {' '}
                  <span className="chip chip-on-dark">
                    Operations
                  </span>
                  {' '}
                  <span className="chip chip-on-dark">
                    CRM
                  </span>
                  {' '}
                  <span className="chip chip-on-dark">
                    AI / automation
                  </span>
                  {' '}
                  <span className="chip chip-on-dark">
                    Dashboards
                  </span>
                  {' '}
                  <span className="chip chip-on-dark">
                    Management systems
                  </span>
                  {' '}
                </div>
                {' '}
                <p className="eng-note">
                  The exact scope is determined after the diagnostic.
                </p>
                {' '}
              </div>
              {' '}
              <div className="eng-side">
                {' '}
                <p className="eng-meta">
                  90-day consulting / transformation engagement · Custom scope
                </p>
                {' '}
                <a href="#book" className="btn btn-secondary btn-on-dark btn-block" data-open-tab="application">
                  Discuss A 90-Day Transformation
                </a>
                {' '}
              </div>
              {' '}
            </article>
            {' '}
            <article className="eng-card is-selective" data-reveal="">
              {' '}
              <div>
                {' '}
                <span className="eng-num">
                  05 · Annual Founder Advisory
                </span>
                {' '}
                <h3 className="subsection-heading mb-3">
                  Annual Founder Advisory
                </h3>
                {' '}
                <p className="eng-for">
                  <strong className="text-white font-semibold">
                    For:
                  </strong>
                  {' '} Founders who want an ongoing strategic partner as the business grows.
                </p>
                {' '}
                <span className="eyebrow !text-accent-bright block mb-4">
                  Advisory Can Include
                </span>
                {' '}
                <div className="flex flex-wrap gap-2.5">
                  {' '}
                  <span className="chip chip-on-dark">
                    Regular founder strategy sessions
                  </span>
                  {' '}
                  <span className="chip chip-on-dark">
                    Quarterly business reviews
                  </span>
                  {' '}
                  <span className="chip chip-on-dark">
                    Growth & profitability decisions
                  </span>
                  {' '}
                  <span className="chip chip-on-dark">
                    Major investment decisions
                  </span>
                  {' '}
                  <span className="chip chip-on-dark">
                    Business-model decisions
                  </span>
                  {' '}
                  <span className="chip chip-on-dark">
                    Leadership & scaling questions
                  </span>
                  {' '}
                  <span className="chip chip-on-dark">
                    AI / technology decisions
                  </span>
                  {' '}
                  <span className="chip chip-on-dark">
                    Strategic prioritisation
                  </span>
                  {' '}
                  <span className="chip chip-on-dark">
                    Access to Grow Spark expertise
                  </span>
                  {' '}
                </div>
                {' '}
                <p className="eng-note">
                  This is not unlimited consulting. It is an ongoing strategic relationship built around the founder's highest-value decisions.
                </p>
                {' '}
              </div>
              {' '}
              <div className="eng-side">
                {' '}
                <p className="eng-meta">
                  Strategic advisory retainer · By application · Per year
                </p>
                {' '}
                <a href="#book" className="btn btn-secondary btn-on-dark btn-block" data-open-tab="application">
                  Apply For Founder Advisory
                </a>
                {' '}
              </div>
              {' '}
            </article>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* WHICH ONE IS RIGHT FOR YOU */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Which One Is Right For You?
            </span>
            {' '}
            <h2>
              Start here
            </h2>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 max-w-[900px] mx-auto" data-reveal="">
            {' '}
            <div className="decide-row">
              {' '}
              <span className="d-said">
                “I have one important problem I want to discuss.”
              </span>
              {' '}
              <ArrowRight className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
              {' '}
              <span className="d-answer">
                Founder Strategy Session
                <span className="price">
                  ₹9,999
                </span>
              </span>
              {' '}
            </div>
            {' '}
            <div className="decide-row">
              {' '}
              <span className="d-said">
                “I have a complicated problem and want to spend serious time unpacking it.”
              </span>
              {' '}
              <ArrowRight className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
              {' '}
              <span className="d-answer">
                Founder Growth Intensive
              </span>
              {' '}
            </div>
            {' '}
            <div className="decide-row">
              {' '}
              <span className="d-said">
                “I don't know exactly what's wrong. I want Grow Spark to investigate.”
              </span>
              {' '}
              <ArrowRight className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
              {' '}
              <span className="d-answer">
                Growth Diagnostic
              </span>
              {' '}
            </div>
            {' '}
            <div className="decide-row">
              {' '}
              <span className="d-said">
                “I know the business needs significant change and want help executing the transformation.”
              </span>
              {' '}
              <ArrowRight className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
              {' '}
              <span className="d-answer">
                90-Day Transformation
              </span>
              {' '}
            </div>
            {' '}
            <div className="decide-row">
              {' '}
              <span className="d-said">
                “I want Grow Spark involved as a strategic partner throughout the year.”
              </span>
              {' '}
              <ArrowRight className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
              {' '}
              <span className="d-answer">
                Annual Founder Advisory
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
      {/* THE JOURNEY */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              The Journey
            </span>
            {' '}
            <h2>
              Five levels. One growth relationship.
            </h2>
            {' '}
          </div>
          {' '}
          <div className="max-w-[620px] mx-auto flex flex-col items-center gap-3" data-reveal="">
            {' '}
            <div className="flow-step">
              {' '}
              <p className="ft">
                Private Strategy Session
              </p>
              {' '}
              <p className="fd">
                ₹9,999
              </p>
              {' '}
            </div>
            {' '}
            <ArrowRight className="w-5 h-5 text-accent rotate-90 shrink-0" aria-hidden="true" />
            {' '}
            <div className="flow-step">
              {' '}
              <p className="ft">
                Growth Intensive
              </p>
              {' '}
            </div>
            {' '}
            <ArrowRight className="w-5 h-5 text-accent rotate-90 shrink-0" aria-hidden="true" />
            {' '}
            <div className="flow-step">
              {' '}
              <p className="ft">
                Growth Diagnostic
              </p>
              {' '}
            </div>
            {' '}
            <ArrowRight className="w-5 h-5 text-accent rotate-90 shrink-0" aria-hidden="true" />
            {' '}
            <div className="flow-step">
              {' '}
              <p className="ft">
                90-Day Transformation
              </p>
              {' '}
            </div>
            {' '}
            <ArrowRight className="w-5 h-5 text-accent rotate-90 shrink-0" aria-hidden="true" />
            {' '}
            <div className="flow-step is-outcome">
              {' '}
              <p className="ft">
                Annual Founder Advisory
              </p>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[16px] text-muted max-w-[680px] mx-auto mt-12" data-reveal="">
            {' '} This is not a mandatory funnel. A founder may enter at the level appropriate to the problem. The diagnostic or transformation can be recommended directly when appropriate. {' '}
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* WHAT HAPPENS AFTER YOU BOOK */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              What Happens After You Book?
            </span>
            {' '}
            <h2>
              A simple, low-pressure process
            </h2>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" data-reveal="">
            {' '}
            <div className="detail-card">
              <span className="font-display font-extrabold text-[12px] text-accent block mb-3 tabular-nums">
                01
              </span>
              <h3>
                Book
              </h3>
              <p>
                Choose the engagement and a suitable time.
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <span className="font-display font-extrabold text-[12px] text-accent block mb-3 tabular-nums">
                02
              </span>
              <h3>
                Prepare
              </h3>
              <p>
                Complete a short founder/business questionnaire before the session.
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <span className="font-display font-extrabold text-[12px] text-accent block mb-3 tabular-nums">
                03
              </span>
              <h3>
                Work
              </h3>
              <p>
                Meet privately with Pragadeesh / Grow Spark.
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <span className="font-display font-extrabold text-[12px] text-accent block mb-3 tabular-nums">
                04
              </span>
              <h3>
                Diagnose
              </h3>
              <p>
                Clarify the actual problem and the variables behind it.
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <span className="font-display font-extrabold text-[12px] text-accent block mb-3 tabular-nums">
                05
              </span>
              <h3>
                Prioritise
              </h3>
              <p>
                Identify the highest-leverage decisions and next actions.
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <span className="font-display font-extrabold text-[12px] text-accent block mb-3 tabular-nums">
                06
              </span>
              <h3>
                Next Step
              </h3>
              <p>
                If deeper support is warranted, we explain what it would look like. There is no pressure to buy a larger engagement.
              </p>
            </div>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* WHAT THESE SESSIONS ARE NOT */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              What These Sessions Are Not
            </span>
            {' '}
            <h2>
              Set correctly, so you know what you're getting
            </h2>
            {' '}
          </div>
          {' '}
          <div className="flex flex-wrap justify-center gap-2.5 max-w-[820px] mx-auto" data-reveal="">
            {' '}
            <span className="chip">
              A motivational call
            </span>
            {' '}
            <span className="chip">
              A generic business coaching session
            </span>
            {' '}
            <span className="chip">
              A sales pitch disguised as consulting
            </span>
            {' '}
            <span className="chip">
              A guarantee of revenue
            </span>
            {' '}
            <span className="chip">
              A one-size-fits-all playbook
            </span>
            {' '}
          </div>
          {' '}
          <div className="text-center max-w-[640px] mx-auto mt-12" data-reveal="">
            {' '}
            <p className="text-[17px] text-ink-soft mb-2">
              The purpose is simple.
            </p>
            {' '}
            <p className="statement-line">
              Better questions. Better diagnosis. Better decisions.
            </p>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* PROOF */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Credibility
            </span>
            {' '}
            <h2>
              See how we've helped businesses
            </h2>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-3" data-reveal="">
            {' '}
            <div className="detail-card">
              {' '}
              <span className="eyebrow block mb-4">
                E-Commerce / D2C
              </span>
              {' '}
              <h3>
                Escaping The Low-Margin Trap
              </h3>
              {' '}
              <p>
                High marketplace revenue, very little profit. We identified LTV and customer ownership as the constraint.
              </p>
              {' '}
            </div>
            {' '}
            <div className="detail-card">
              {' '}
              <span className="eyebrow block mb-4">
                Manufacturing / Distribution
              </span>
              {' '}
              <h3>
                Redesigning Distribution Economics
              </h3>
              {' '}
              <p>
                Audited a water manufacturer/distributor's margin and channel structure and helped design a direct ordering and delivery system.
              </p>
              {' '}
            </div>
            {' '}
            <div className="detail-card">
              {' '}
              <span className="eyebrow block mb-4">
                Food & Beverage
              </span>
              {' '}
              <h3>
                From Restaurant Plan To Scalable Model
              </h3>
              {' '}
              <p>
                A projected 6+ year payback on the original restaurant plan. Redesigned around a cloud-kitchen model — 3 locations in 8 months.
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
      {/* BOOKING */}
      {' '}
      <section id="book" className="py-20 sm:py-24 lg:py-28 scroll-mt-24">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Book Or Apply
            </span>
            {' '}
            <h2>
              Choose an engagement to get started
            </h2>
            {' '}
          </div>
          {' '}
          <div className="flex flex-wrap justify-center gap-3 mb-10" role="tablist" aria-label="Engagement type" data-booking-tabs="" data-reveal="">
            {' '}
            <button type="button" className="booking-tab" role="tab" data-tab="session" id="tab-session" aria-controls="panel-session" aria-selected="true">
              Founder Strategy Session
            </button>
            {' '}
            <button type="button" className="booking-tab" role="tab" data-tab="intensive" id="tab-intensive" aria-controls="panel-intensive" aria-selected="false">
              Growth Intensive
            </button>
            {' '}
            <button type="button" className="booking-tab" role="tab" data-tab="application" id="tab-application" aria-controls="panel-application" aria-selected="false">
              Diagnostic / Transformation / Advisory
            </button>
            {' '}
          </div>
          {' '}
          {/* SESSION PANEL */}
          {' '}
          <div className="max-w-[820px] mx-auto bg-paper-raised border border-hairline rounded-card shadow-[var(--shadow-card-md)] p-6 sm:p-10" role="tabpanel" id="panel-session" aria-labelledby="tab-session" data-panel="session">
            {' '}
            <h3 className="subsection-heading mb-2">
              Founder Strategy Session
            </h3>
            {' '}
            <p className="text-[16px] text-muted mb-8">
              ₹9,999 · 60 minutes · Private · Direct access to Pragadeesh
            </p>
            {' '}
            <StrategySessionForm />
            {' '}
          </div>
          {' '}
          {/* INTENSIVE PANEL */}
          {' '}
          <div className="max-w-[820px] mx-auto bg-paper-raised border border-hairline rounded-card shadow-[var(--shadow-card-md)] p-6 sm:p-10" role="tabpanel" id="panel-intensive" aria-labelledby="tab-intensive" data-panel="intensive" hidden>
            {' '}
            <h3 className="subsection-heading mb-2">
              Founder Growth Intensive
            </h3>
            {' '}
            <p className="text-[16px] text-muted mb-8">
              2 hours · Deep-dive working session · Direct access to Pragadeesh
            </p>
            {' '}
            <form action="/api/growth-intensive" method="post" className="grid sm:grid-cols-2 gap-x-6 gap-y-6">
              {' '}
              <div>
                <label className="form-label" htmlFor="i-date">
                  Preferred Date
                </label>
                <input className="form-input" type="date" id="i-date" name="date" />
              </div>
              {' '}
              <div>
                <label className="form-label" htmlFor="i-time">
                  Preferred Time
                </label>
                <input className="form-input" type="time" id="i-time" name="time" />
              </div>
              {' '}
              <div>
                <label className="form-label" htmlFor="i-name">
                  Founder Name
                </label>
                <input className="form-input" type="text" id="i-name" name="name" autoComplete="name" placeholder="Your full name" />
              </div>
              {' '}
              <div>
                <label className="form-label" htmlFor="i-email">
                  Email
                </label>
                <input className="form-input" type="email" id="i-email" name="email" autoComplete="email" placeholder="you@company.com" />
              </div>
              {' '}
              <div>
                <label className="form-label" htmlFor="i-phone">
                  Phone / WhatsApp
                </label>
                <input className="form-input" type="tel" id="i-phone" name="phone" autoComplete="tel" placeholder="+91" />
              </div>
              {' '}
              <div>
                <label className="form-label" htmlFor="i-company">
                  Company Name
                </label>
                <input className="form-input" type="text" id="i-company" name="company" autoComplete="organization" placeholder="Company" />
              </div>
              {' '}
              <div>
                <label className="form-label" htmlFor="i-website">
                  Company Website / LinkedIn
                </label>
                <input className="form-input" type="text" id="i-website" name="website" placeholder="https://" />
              </div>
              {' '}
              <div>
                {' '}
                <label className="form-label" htmlFor="i-revenue">
                  Approximate Annual Revenue Range
                </label>
                {' '}
                <select className="form-input" id="i-revenue" name="revenue">
                  {' '}
                  <option>
                    Under ₹50L
                  </option>
                  {' '}
                  <option>
                    ₹50L – ₹2Cr
                  </option>
                  {' '}
                  <option>
                    ₹2Cr – ₹10Cr
                  </option>
                  {' '}
                  <option>
                    ₹10Cr+
                  </option>
                  {' '}
                </select>
                {' '}
              </div>
              {' '}
              <div className="sm:col-span-2">
                <label className="form-label" htmlFor="i-challenge">
                  Primary Challenge
                </label>
                <textarea className="form-input" id="i-challenge" name="challenge" placeholder="What's the complex problem you want to unpack?" />
              </div>
              {' '}
              <div className="sm:col-span-2">
                {' '}
                <button type="submit" className="btn btn-primary btn-block">
                  Continue To Payment
                </button>
                {' '}
                <p className="text-[12.5px] text-muted mt-4 text-center">
                  Payment link will be provided at checkout. [Booking/payment integration to be connected.]
                </p>
                {' '}
              </div>
              {' '}
            </form>
            {' '}
          </div>
          {' '}
          {/* APPLICATION PANEL */}
          {' '}
          <div className="max-w-[820px] mx-auto bg-paper-raised border border-hairline rounded-card shadow-[var(--shadow-card-md)] p-6 sm:p-10" role="tabpanel" id="panel-application" aria-labelledby="tab-application" data-panel="application" hidden>
            {' '}
            <h3 className="subsection-heading mb-2">
              Growth Diagnostic / 90-Day Transformation / Annual Advisory
            </h3>
            {' '}
            <p className="text-[16px] text-muted mb-6">
              Application-based · Scope and pricing confirmed after review
            </p>
            {' '}
            <div className="callout is-neutral mb-8">
              {' '}
              <p>
                These engagements are scoped individually. Submitting this application does not guarantee acceptance — Grow Spark reviews every application and follows up with appropriate next steps.
              </p>
              {' '}
            </div>
            {' '}
            <form action="/api/engagement-application" method="post" className="grid sm:grid-cols-2 gap-x-6 gap-y-6">
              {' '}
              <div>
                <label className="form-label" htmlFor="a-name">
                  Founder Name
                </label>
                <input className="form-input" type="text" id="a-name" name="name" autoComplete="name" placeholder="Your full name" />
              </div>
              {' '}
              <div>
                <label className="form-label" htmlFor="a-company">
                  Company
                </label>
                <input className="form-input" type="text" id="a-company" name="company" autoComplete="organization" placeholder="Company" />
              </div>
              {' '}
              <div>
                <label className="form-label" htmlFor="a-website">
                  Website
                </label>
                <input className="form-input" type="text" id="a-website" name="website" placeholder="https://" />
              </div>
              {' '}
              <div>
                <label className="form-label" htmlFor="a-industry">
                  Industry
                </label>
                <input className="form-input" type="text" id="a-industry" name="industry" placeholder="e.g. E-commerce, Manufacturing" />
              </div>
              {' '}
              <div>
                {' '}
                <label className="form-label" htmlFor="a-revenue">
                  Revenue Range
                </label>
                {' '}
                <select className="form-input" id="a-revenue" name="revenue">
                  {' '}
                  <option>
                    Under ₹50L
                  </option>
                  {' '}
                  <option>
                    ₹50L – ₹2Cr
                  </option>
                  {' '}
                  <option>
                    ₹2Cr – ₹10Cr
                  </option>
                  {' '}
                  <option>
                    ₹10Cr – ₹50Cr
                  </option>
                  {' '}
                  <option>
                    ₹50Cr+
                  </option>
                  {' '}
                </select>
                {' '}
              </div>
              {' '}
              <div>
                <label className="form-label" htmlFor="a-team">
                  Team Size
                </label>
                <input className="form-input" type="text" id="a-team" name="team_size" placeholder="e.g. 12" />
              </div>
              {' '}
              <div className="sm:col-span-2">
                <label className="form-label" htmlFor="a-challenge">
                  Main Challenge
                </label>
                <textarea className="form-input" id="a-challenge" name="challenge" placeholder="What's the core problem?" />
              </div>
              {' '}
              <div className="sm:col-span-2">
                <label className="form-label" htmlFor="a-tried">
                  What Has Already Been Tried
                </label>
                <textarea className="form-input" id="a-tried" name="already_tried" placeholder="What have you already attempted?" />
              </div>
              {' '}
              <div className="sm:col-span-2">
                <label className="form-label" htmlFor="a-outcome">
                  Desired Outcome
                </label>
                <textarea className="form-input" id="a-outcome" name="desired_outcome" placeholder="What would a successful engagement look like?" />
              </div>
              {' '}
              <div>
                {' '}
                <label className="form-label" htmlFor="a-readiness">
                  Investment Readiness
                </label>
                {' '}
                <select className="form-input" id="a-readiness" name="investment_readiness">
                  {' '}
                  <option>
                    ₹50K – ₹1L
                  </option>
                  {' '}
                  <option>
                    ₹1L – ₹5L
                  </option>
                  {' '}
                  <option>
                    ₹5L – ₹15L
                  </option>
                  {' '}
                  <option>
                    ₹15L+
                  </option>
                  {' '}
                </select>
                {' '}
              </div>
              {' '}
              <div>
                {' '}
                <label className="form-label" htmlFor="a-preferred">
                  Preferred Engagement
                </label>
                {' '}
                <select className="form-input" id="a-preferred" name="preferred_engagement">
                  {' '}
                  <option>
                    Growth Diagnostic
                  </option>
                  {' '}
                  <option>
                    90-Day Growth Transformation
                  </option>
                  {' '}
                  <option>
                    Annual Founder Advisory
                  </option>
                  {' '}
                  <option>
                    Not sure — recommend one
                  </option>
                  {' '}
                </select>
                {' '}
              </div>
              {' '}
              <div className="sm:col-span-2">
                {' '}
                <button type="submit" className="btn btn-primary btn-block">
                  Submit Application
                </button>
                {' '}
                <p className="text-[12.5px] text-muted mt-4 text-center">
                  Thank you. Grow Spark will review your application and contact you regarding the appropriate next step.
                </p>
                {' '}
              </div>
              {' '}
            </form>
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
            Make The Decision
          </span>
          {' '}
          <h2 className="text-white cta-heading mb-5">
            The Right Decision Can Save You Months — Or Years.
          </h2>
          {' '}
          <p className="text-[#9BA1A7] text-[17px] mb-10 max-w-[560px] mx-auto">
            You don't need to know exactly what the answer is. You just need to be willing to look at the business honestly.
          </p>
          {' '}
          <div className="flex gap-4 justify-center flex-wrap mb-14">
            {' '}
            <a href="#book" className="btn btn-accent" data-open-tab="session">
              Book A 1:1 Strategy Session
            </a>
            {' '}
            <a href="#book" className="btn btn-secondary btn-on-dark" data-open-tab="application">
              Apply For A Growth Diagnostic
            </a>
            {' '}
          </div>
          {' '}
          <div className="signature pt-10 border-t border-white/10 max-w-[520px] mx-auto">
            {' '}
            <div className="sig-name">
              Pragadeesh
            </div>
            {' '}
            <div className="sig-role">
              Founder, Grow Spark Consulting
            </div>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
    </main>
  );
}
