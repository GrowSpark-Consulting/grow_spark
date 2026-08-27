import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

/**
 * Transcribed from pages/leadership/index.html by scripts/html-to-tsx.py.
 * Element tree, classes, content and metadata are unchanged; only the
 * JSX-required attribute spellings differ from the source markup.
 */
export const metadata: Metadata = {
  title: "Leadership — The People Behind The Thinking | Grow Spark Consulting",
  description: "Grow Spark's leadership brings together entrepreneurial experience, strategic thinking, technology, commercial understanding and an operator's mindset.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/leadership/" },
  openGraph: {
    type: "website",
    siteName: "Grow Spark Consulting",
    title: "Leadership — The People Behind The Thinking | Grow Spark Consulting",
    description: "Great consulting requires more than good ideas. It requires people who can understand a business deeply and turn strategy into action.",
    url: "https://www.growsparkconsulting.com/leadership/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leadership — The People Behind The Thinking | Grow Spark Consulting",
    description: "Great consulting requires more than good ideas. It requires people who can understand a business deeply and turn strategy into action.",
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
              Leadership
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
              Leadership
            </span>
            {' '}
            <h1 className="page-hero-heading mb-8 text-balance">
              The People Behind The Thinking.
            </h1>
            {' '}
            <p className="text-[17px] text-ink-soft leading-relaxed max-w-[660px] mx-auto mb-4">
              Grow Spark is built around a simple belief: great consulting requires more than good ideas.
            </p>
            {' '}
            <p className="text-[17px] text-ink-soft leading-relaxed max-w-[660px] mx-auto mb-7">
              It requires people who can understand a business deeply, challenge assumptions, make difficult decisions and turn strategy into action.
            </p>
            {' '}
            <p className="statement-line">
              Our leadership brings together entrepreneurial experience, strategic thinking, technology, commercial understanding and an operator's mindset.
            </p>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* LEADERSHIP PHILOSOPHY */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Leadership Philosophy
            </span>
            {' '}
            <h2>
              We don't want to build a firm of advisors who only give advice.
            </h2>
            {' '}
          </div>
          {' '}
          <div className="max-w-[720px] mx-auto" data-reveal="">
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-5">
              We want to build a firm of people who understand what happens after the strategy meeting.
            </p>
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-6">
              A strategy has to survive:
            </p>
            {' '}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {' '}
              <span className="chip">
                The market
              </span>
              {' '}
              <span className="chip">
                The customer
              </span>
              {' '}
              <span className="chip">
                The numbers
              </span>
              {' '}
              <span className="chip">
                The team
              </span>
              {' '}
              <span className="chip">
                The technology
              </span>
              {' '}
              <span className="chip">
                The operations
              </span>
              {' '}
              <span className="chip">
                The founder
              </span>
              {' '}
            </div>
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-10">
              That's why our leadership philosophy is built around three principles:
            </p>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-3" data-reveal="">
            {' '}
            <div className="detail-card">
              <span className="font-display font-extrabold text-[12px] text-accent block mb-3 tabular-nums">
                01
              </span>
              <h3>
                Think Deeply
              </h3>
              <p>
                Understand the real problem before prescribing a solution.
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <span className="font-display font-extrabold text-[12px] text-accent block mb-3 tabular-nums">
                02
              </span>
              <h3>
                Challenge Honestly
              </h3>
              <p>
                Tell the client what they need to hear, not simply what they want to hear.
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <span className="font-display font-extrabold text-[12px] text-accent block mb-3 tabular-nums">
                03
              </span>
              <h3>
                Execute With Accountability
              </h3>
              <p>
                Stay close enough to implementation to understand whether the strategy actually works.
              </p>
            </div>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* FOUNDER PROFILE */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-start max-w-[980px] mx-auto" data-reveal="">
            {' '}
            <div className="flex justify-center lg:block">
              {' '}
              <a
                href="/founder/"
                className="portrait-frame lg:w-[320px] group"
                aria-label="Read Pragadeesh's founder profile"
              >
                {' '}
                <img
                  src="/pragadeesh.jpg"
                  alt="Pragadeesh, Founder of Grow Spark Consulting"
                  width={1254}
                  height={1254}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                />
                {' '}
                <div className="caption">
                  {' '}
                  <div className="name">
                    Pragadeesh
                  </div>
                  {' '}
                  <div className="role2">
                    Founder, Grow Spark Consulting
                  </div>
                  {' '}
                </div>
                {' '}
              </a>
              {' '}
            </div>
            {' '}
            <div>
              {' '}
              <span className="eyebrow block mb-3">
                Founder & Growth Strategist
              </span>
              {' '}
              <h3 className="subsection-heading mb-2">
                <a href="/founder/" className="transition-colors hover:text-accent">
                  Pragadeesh
                </a>
              </h3>
              {' '}
              <p className="font-display font-semibold text-[17px] text-muted mb-6">
                Founder & Growth Strategist
              </p>
              {' '}
              <p className="text-[16px] text-ink-soft leading-relaxed mb-6">
                Pragadeesh is the founder of Grow Spark Consulting and an entrepreneur focused on helping business owners build, improve and scale successful businesses.
              </p>
              {' '}
              <p className="statement-line mb-6">
                What is actually holding this business back?
              </p>
              {' '}
              <p className="text-[16px] text-ink-soft leading-relaxed mb-8">
                Rather than approaching growth as a collection of marketing activities, Pragadeesh looks at the business as a connected system — business model, revenue, customer economics, margins, operations, people and technology.
              </p>
              {' '}
              <div className="bg-paper-sunken rounded-card px-7 py-6 mb-8">
                {' '}
                <p className="text-[16.5px] text-ink-soft leading-relaxed">
                  Build before you scale.
                </p>
                {' '}
                <p className="text-[16.5px] text-ink-soft leading-relaxed">
                  Understand before you invest.
                </p>
                {' '}
                <p className="text-[16.5px] text-ink-soft leading-relaxed">
                  Fix the constraint before adding more fuel.
                </p>
                {' '}
                <p className="text-[16.5px] text-ink-soft leading-relaxed">
                  Build systems before adding complexity.
                </p>
                {' '}
                <p className="text-[16.5px] text-ink-soft leading-relaxed">
                  Profit matters as much as revenue.
                </p>
                {' '}
              </div>
              {' '}
              <div className="flex gap-4 flex-wrap">
                {' '}
                <a href="/founder/" className="btn btn-secondary">
                  View Pragadeesh's Founder Profile
                </a>
                {' '}
                <a href="/strategy/" className="btn btn-primary">
                  Book A 1:1 With Pragadeesh
                </a>
                {' '}
              </div>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* LEADERSHIP TEAM */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Leadership Team
            </span>
            {' '}
            <h2>
              A multi-disciplinary leadership team.
            </h2>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-3" data-reveal="">
            {' '}
            <div className="detail-card">
              {' '}
              <div className="lead-avatar overflow-hidden">
                <img
                  src="/pragadeesh.jpg"
                  alt="Pragadeesh, Founder of Grow Spark Consulting"
                  width={1254}
                  height={1254}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {' '}
              <h3>
                Pragadeesh
              </h3>
              {' '}
              <p className="!text-accent !font-medium mb-3">
                Founder & Growth Strategist
              </p>
              {' '}
              <p className="mb-4">
                Leads Grow Spark's overall growth methodology and founder-facing strategy work.
              </p>
              {' '}
              <span className="eyebrow block mb-2">
                Leads
              </span>
              {' '}
              <p className="mb-5">
                Strategy · Growth · Founder Engagements
              </p>
              {' '}
              <a href="/founder/" className="inline-link">
                View Profile {' '}
                <ArrowRight className="w-4 h-4" />
              </a>
              {' '}
            </div>
            {' '}
            <div className="detail-card">
              {' '}
              <div className="lead-avatar overflow-hidden">
                <img
                  src="/susshinder.png"
                  alt="Susshinder S.A., Chief Marketing Officer of Grow Spark Consulting"
                  width={1254}
                  height={1254}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {' '}
              <h3>
                Susshinder S.A.
              </h3>
              {' '}
              <p className="!text-accent !font-medium mb-3">
                Chief Marketing Officer
              </p>
              {' '}
              <p className="mb-4">
                Works at the intersection of people, marketing, technology and growth — helping businesses understand their customers and communicate the real value of what they offer.
              </p>
              {' '}
              <span className="eyebrow block mb-2">
                Leads
              </span>
              {' '}
              <p className="mb-5">
                Marketing Strategy · Brand · Customer Acquisition · Market Research
              </p>
              {' '}
              <a href="/cmo/" className="inline-link">
                View Profile {' '}
                <ArrowRight className="w-4 h-4" />
              </a>
              {' '}
            </div>
            {' '}
            <div className="detail-card">
              {' '}
              <div className="lead-avatar">
                R
              </div>
              {' '}
              <h3>
                Raja V.
              </h3>
              {' '}
              <p className="!text-accent !font-medium mb-3">
                Co-Founder, Technology & Operations
              </p>
              {' '}
              <p className="mb-4">
                I sit at the point where a business decision has to become something real — a website, an automation, a system, a launch — and I make sure it actually gets built, without the founder having to become a technologist to make that happen.
              </p>
              {' '}
              <span className="eyebrow block mb-2">
                Leads
              </span>
              {' '}
              <p className="mb-5">
                Positioning · Systems · Websites · Automation · AI Tools · Delivery · Operations
              </p>
              {' '}
              <a href="/co-founder/" className="inline-link">
                View Profile {' '}
                <ArrowRight className="w-4 h-4" />
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
      {/* HOW LEADERSHIP WORKS TOGETHER */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              How Leadership Works Together
            </span>
            {' '}
            <h2>
              One business. Multiple perspectives.
            </h2>
            {' '}
            <p>
              Grow Spark's leadership model is designed around complementary perspectives.
            </p>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" data-reveal="">
            {' '}
            <div className="detail-card">
              <h3>
                Strategy
              </h3>
              <p>
                Where should the business go?
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <h3>
                Economics
              </h3>
              <p>
                Where is value created or lost?
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <h3>
                Operations
              </h3>
              <p>
                Can the business actually deliver the strategy?
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <h3>
                Technology
              </h3>
              <p>
                Where can systems and technology create leverage?
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <h3>
                People
              </h3>
              <p>
                Can the organisation support the next stage?
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <h3>
                Growth
              </h3>
              <p>
                Can the model acquire, convert and retain customers profitably?
              </p>
            </div>
            {' '}
          </div>
          {' '}
          <p className="statement-line text-accent text-center max-w-[640px] mx-auto mt-12" data-reveal="">
            {' '} The objective is not to create six separate opinions. It is to create one coherent business strategy. {' '}
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* CLIENT-FIRST PRINCIPLE */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              The Client-First Principle
            </span>
            {' '}
            <h2>
              The leadership team exists to make the client's business better.
            </h2>
            {' '}
            <p>
              Every engagement should ultimately answer:
            </p>
            {' '}
          </div>
          {' '}
          <div className="q-list" data-reveal="">
            {' '}
            <p>
              What changed?
            </p>
            {' '}
            <p>
              Did the business become more profitable?
            </p>
            {' '}
            <p>
              Did the customer economics improve?
            </p>
            {' '}
            <p>
              Did the company become more scalable?
            </p>
            {' '}
            <p>
              Did the founder gain clarity?
            </p>
            {' '}
            <p>
              Did the organisation become less dependent on individual heroics?
            </p>
            {' '}
            <p>
              Did the business become more valuable?
            </p>
            {' '}
          </div>
          {' '}
          <p className="statement-line text-accent text-center mt-12" data-reveal="">
            If the answer is no, activity alone is not enough.
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* LEADERSHIP STANDARD */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Our Leadership Standard
            </span>
            {' '}
            <h2>
              We hold ourselves to a higher standard.
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
                Truth Over Comfort
              </h3>
              <p>
                We say what the analysis indicates, even when it challenges the original plan.
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <span className="font-display font-extrabold text-[12px] text-accent block mb-3 tabular-nums">
                02
              </span>
              <h3>
                Economics Over Ego
              </h3>
              <p>
                We prioritise what improves the business, not what makes the project look impressive.
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <span className="font-display font-extrabold text-[12px] text-accent block mb-3 tabular-nums">
                03
              </span>
              <h3>
                Clarity Over Complexity
              </h3>
              <p>
                The best strategy should become easier to understand, not harder.
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <span className="font-display font-extrabold text-[12px] text-accent block mb-3 tabular-nums">
                04
              </span>
              <h3>
                Outcomes Over Activity
              </h3>
              <p>
                Meetings, reports and deliverables are not the goal. Business improvement is.
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <span className="font-display font-extrabold text-[12px] text-accent block mb-3 tabular-nums">
                05
              </span>
              <h3>
                Long-Term Value Over Short-Term Wins
              </h3>
              <p>
                We want to build businesses that become stronger over time.
              </p>
            </div>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* OPERATOR MINDSET */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-ink">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head on-dark" data-reveal="">
            {' '}
            <span className="eyebrow !text-accent-bright block mb-3.5">
              Operator Mindset
            </span>
            {' '}
            <h2>
              We think like owners.
            </h2>
            {' '}
          </div>
          {' '}
          <div className="max-w-[720px] mx-auto text-center" data-reveal="">
            {' '}
            <p className="text-[#9BA1A7] text-[16.5px] leading-relaxed mb-7">
              Grow Spark was built by entrepreneurs and operators, not only career advisors. That matters because founders live with the consequences of decisions.
            </p>
            {' '}
            <div className="flex flex-wrap justify-center gap-2.5 mb-8">
              {' '}
              <span className="chip chip-on-dark">
                A bad hiring decision costs money.
              </span>
              {' '}
              <span className="chip chip-on-dark">
                A bad pricing decision destroys margin.
              </span>
              {' '}
              <span className="chip chip-on-dark">
                A bad technology decision creates complexity.
              </span>
              {' '}
              <span className="chip chip-on-dark">
                A bad business model can consume years.
              </span>
              {' '}
            </div>
            {' '}
            <p className="text-[#9BA1A7] text-[16.5px] leading-relaxed mb-8">
              Our leadership team approaches consulting with that reality in mind. Before we recommend an action, we ask:
            </p>
            {' '}
            <p className="statement-line text-white">
              Would we make the same decision if it were our own capital?
            </p>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* LEADERSHIP NETWORK */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              The Leadership Network
            </span>
            {' '}
            <h2>
              The core team doesn't have to do everything.
            </h2>
            {' '}
            <p>
              As Grow Spark grows, leadership can bring in specialist expertise across:
            </p>
            {' '}
          </div>
          {' '}
          <div className="flex flex-wrap justify-center gap-2.5 max-w-[860px] mx-auto" data-reveal="">
            {' '}
            <span className="chip">
              AI
            </span>
            {' '}
            <span className="chip">
              Technology
            </span>
            {' '}
            <span className="chip">
              Finance
            </span>
            {' '}
            <span className="chip">
              Marketing
            </span>
            {' '}
            <span className="chip">
              Sales
            </span>
            {' '}
            <span className="chip">
              Operations
            </span>
            {' '}
            <span className="chip">
              Data
            </span>
            {' '}
            <span className="chip">
              Cybersecurity
            </span>
            {' '}
            <span className="chip">
              Product
            </span>
            {' '}
            <span className="chip">
              Research
            </span>
            {' '}
            <span className="chip">
              Legal & Compliance
            </span>
            {' '}
          </div>
          {' '}
          <div className="text-center max-w-[660px] mx-auto mt-12" data-reveal="">
            {' '}
            <p className="text-[17px] text-ink-soft mb-4">
              The leadership team's responsibility is to ensure that specialists are deployed against the right business problem.
            </p>
            {' '}
            <p className="statement-line text-accent">
              Strategy first. Capability second.
            </p>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* THE FIRM WE ARE BUILDING */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              The Firm We Are Building
            </span>
            {' '}
            <h2>
              We are building a leadership team that can think across the entire business.
            </h2>
            {' '}
            <p>
              The long-term ambition is to create a consulting platform where founders can access:
            </p>
            {' '}
          </div>
          {' '}
          <div className="flex flex-wrap justify-center gap-2.5 max-w-[760px] mx-auto" data-reveal="">
            {' '}
            <span className="chip">
              Strategic thinking
            </span>
            {' '}
            <span className="chip">
              Business research
            </span>
            {' '}
            <span className="chip">
              Technology
            </span>
            {' '}
            <span className="chip">
              AI
            </span>
            {' '}
            <span className="chip">
              Data
            </span>
            {' '}
            <span className="chip">
              Implementation
            </span>
            {' '}
            <span className="chip">
              Operating expertise
            </span>
            {' '}
          </div>
          {' '}
          <div className="text-center max-w-[660px] mx-auto mt-12" data-reveal="">
            {' '}
            <p className="text-[17px] text-ink-soft mb-4">
              The goal is not to become a large firm for the sake of being large.
            </p>
            {' '}
            <p className="statement-line text-accent">
              The goal is to build a firm capable of solving increasingly complex business problems.
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
            Work With Our Leadership Team
          </span>
          {' '}
          <h2 className="text-white cta-heading mb-5">
            Your Business Deserves More Than A Generic Playbook.
          </h2>
          {' '}
          <p className="text-[#9BA1A7] text-[17px] mb-10 max-w-[520px] mx-auto">
            If you are facing a growth, profitability, business-model or scaling challenge, start with a conversation.
          </p>
          {' '}
          <div className="flex gap-4 justify-center flex-wrap">
            {' '}
            <a href="/contact/" className="btn btn-accent">
              Book A Grow Spark Growth Diagnostic
            </a>
            {' '}
            <a href="/strategy/" className="btn btn-secondary btn-on-dark">
              Book A 1:1 With Pragadeesh
            </a>
            {' '}
          </div>
          {' '}
          <p className="text-[#9BA1A7] text-[16px] mt-8">
            Or work directly with Pragadeesh.
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
    </main>
  );
}
