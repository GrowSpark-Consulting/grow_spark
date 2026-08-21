import type { Metadata } from 'next';
import FooterCta from '@/components/layout/FooterCta';

/**
 * Transcribed from pages/founder/index.html by scripts/html-to-tsx.py.
 * Element tree, classes, content and metadata are unchanged; only the
 * JSX-required attribute spellings differ from the source markup.
 */
export const metadata: Metadata = {
  title: "Meet Pragadeesh — Founder | Grow Spark Consulting",
  description: "Pragadeesh is an entrepreneur and growth strategist helping business owners build stronger businesses, solve growth constraints and create companies that can scale beyond the founder.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/founder/" },
  openGraph: {
    type: "profile",
    siteName: "Grow Spark Consulting",
    title: "Meet Pragadeesh — Founder | Grow Spark Consulting",
    description: "“I believe business owners shouldn't have to figure out growth alone.” Founder. Growth Strategist. Business Builder.",
    url: "https://www.growsparkconsulting.com/founder/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Pragadeesh — Founder | Grow Spark Consulting",
    description: "“I believe business owners shouldn't have to figure out growth alone.” Founder. Growth Strategist. Business Builder.",
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
            <a href="/about/">
              About
            </a>
          </li>
          {' '}
          <li>
            <span aria-current="page">
              Founder
            </span>
          </li>
          {' '}
        </ol>
        {' '}
      </nav>
      {' '}
      {/* HERO */}
      {' '}
      <section className="relative overflow-hidden border-b border-hairline pt-14 pb-20 lg:pt-20 lg:pb-28">
        {' '}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-accent-tint opacity-60 blur-3xl pointer-events-none" aria-hidden="true" />
        {' '}
        <div className="relative mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center" data-reveal="">
            {' '}
            <div>
              {' '}
              <span className="eyebrow block mb-5">
                Founder — Grow Spark Consulting
              </span>
              {' '}
              <h1 className="page-hero-heading mb-4">
                Meet Pragadeesh
              </h1>
              {' '}
              <p className="font-display font-semibold text-[17px] text-accent mb-7">
                Founder. Growth Strategist. Business Builder.
              </p>
              {' '}
              <p className="lede-statement text-ink mb-7">
                “I believe business owners shouldn't have to figure out growth alone.”
              </p>
              {' '}
              <p className="text-[16.5px] text-ink-soft leading-relaxed mb-4">
                I'm Pragadeesh, an entrepreneur and growth strategist focused on helping business owners build stronger businesses, solve growth constraints and create companies that can scale beyond the founder.
              </p>
              {' '}
              <p className="text-[16.5px] text-ink-soft leading-relaxed mb-6">
                Through Grow Spark Consulting and the businesses I've built across technology, marketing, consulting and digital ventures, I've spent my time studying one question:
              </p>
              {' '}
              <p className="statement-line mb-5">
                What actually makes a business grow?
              </p>
              {' '}
              <div className="mb-5">
                {' '}
                <p className="text-[17px] text-muted">
                  Not just revenue.
                </p>
                {' '}
                <p className="text-[17px] text-muted">
                  Not vanity metrics.
                </p>
                {' '}
                <p className="text-[17px] text-muted">
                  Not more ads.
                </p>
                {' '}
              </div>
              {' '}
              <p className="statement-line mb-9">
                A better business.
              </p>
              {' '}
              <div className="flex gap-4 flex-wrap">
                {' '}
                <a href="/strategy/" className="btn btn-primary">
                  Book A 1:1 Strategy Session
                </a>
                {' '}
                <a href="#philosophy" className="btn btn-secondary">
                  My Philosophy
                </a>
                {' '}
              </div>
              {' '}
            </div>
            {' '}
            <div className="flex justify-center lg:justify-end">
              {' '}
              <div className="portrait-frame">
                {' '}
                <span className="corner">
                  Founder
                </span>
                {' '}
                <span className="initial">
                  P
                </span>
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
      {/* MY MISSION */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[760px] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              My Mission
            </span>
            {' '}
            <h2>
              Empower business owners to build and scale successful businesses.
            </h2>
            {' '}
          </div>
          {' '}
          <div data-reveal="">
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-5">
              I believe entrepreneurship should give founders more freedom, more wealth and more control — not create a business that constantly depends on them.
            </p>
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-7">
              Too many founders become trapped inside the businesses they built. They are responsible for:
            </p>
            {' '}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {' '}
              <span className="chip">
                Sales
              </span>
              {' '}
              <span className="chip">
                Marketing
              </span>
              {' '}
              <span className="chip">
                Employees
              </span>
              {' '}
              <span className="chip">
                Customers
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
                Finance
              </span>
              {' '}
              <span className="chip">
                Every important decision
              </span>
              {' '}
            </div>
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-2">
              Revenue may be growing.
            </p>
            {' '}
            <p className="statement-line text-accent mb-7">
              But the founder isn't.
            </p>
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed">
              I want to change that. My work is focused on helping founders understand what's actually holding their business back and then building a clearer path toward their next stage of growth.
            </p>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* MY APPROACH */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[760px] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              My Approach
            </span>
            {' '}
            <h2>
              I don't believe in growth for growth's sake
            </h2>
            {' '}
          </div>
          {' '}
          <div data-reveal="">
            {' '}
            <div className="mb-7">
              {' '}
              <p className="text-[16.5px] text-ink-soft leading-relaxed">
                A business can have millions in revenue and still be poorly built.
              </p>
              {' '}
              <p className="text-[16.5px] text-ink-soft leading-relaxed">
                It can have thousands of customers and weak retention.
              </p>
              {' '}
              <p className="text-[16.5px] text-ink-soft leading-relaxed">
                It can have a great product and terrible margins.
              </p>
              {' '}
              <p className="text-[16.5px] text-ink-soft leading-relaxed">
                It can be growing while the founder is working 14 hours a day.
              </p>
              {' '}
              <p className="text-[16.5px] text-ink-soft leading-relaxed">
                It can look successful from the outside while quietly breaking underneath.
              </p>
              {' '}
            </div>
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-8">
              That's why I don't start with one question — I start with another.
            </p>
            {' '}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8">
              {' '}
              <div className="bg-paper-sunken rounded-card px-7 py-8">
                {' '}
                <span className="eyebrow !text-muted block mb-3">
                  I Don't Start With
                </span>
                {' '}
                <p className="font-display font-semibold text-[16.5px] text-muted line-through decoration-hairline-strong">
                  “How can we get you more customers?”
                </p>
                {' '}
              </div>
              {' '}
              <div className="bg-accent-tint rounded-card px-7 py-8">
                {' '}
                <span className="eyebrow !text-accent-deep block mb-3">
                  I Start With
                </span>
                {' '}
                <p className="font-display font-semibold text-[16.5px] text-accent-deep">
                  “What is actually stopping this business from becoming better?”
                </p>
                {' '}
              </div>
              {' '}
            </div>
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-6">
              Sometimes it's positioning. Sometimes it's the offer. Sometimes it's acquisition. Sometimes it's conversion.
            </p>
            {' '}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {' '}
              <span className="chip">
                Positioning
              </span>
              {' '}
              <span className="chip">
                Offer
              </span>
              {' '}
              <span className="chip">
                Acquisition
              </span>
              {' '}
              <span className="chip">
                Conversion
              </span>
              {' '}
              <span className="chip">
                LTV
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
                Technology
              </span>
              {' '}
            </div>
            {' '}
            <p className="statement-line text-accent">
              And sometimes, the business model itself needs to change.
            </p>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* WHAT BUILDING HAS TAUGHT ME */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[760px] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              What Building Has Taught Me
            </span>
            {' '}
            <h2>
              Theory is easy. Building is different.
            </h2>
            {' '}
          </div>
          {' '}
          <div data-reveal="">
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-7">
              I've been involved in building businesses across technology, marketing, consulting and digital ventures — experiencing the realities that founders deal with every day:
            </p>
            {' '}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {' '}
              <span className="chip">
                Hiring
              </span>
              {' '}
              <span className="chip">
                Cash flow
              </span>
              {' '}
              <span className="chip">
                Clients
              </span>
              {' '}
              <span className="chip">
                Technology
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
                Growth
              </span>
              {' '}
              <span className="chip">
                Failure
              </span>
              {' '}
              <span className="chip">
                Starting again
              </span>
              {' '}
            </div>
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-4">
              Those experiences shaped the way I think about consulting.
            </p>
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-6">
              I don't want to sit outside a business and simply tell a founder what they should do.
            </p>
            {' '}
            <p className="statement-line">
              I want to understand the business from the inside. Then find the highest-leverage opportunities.
            </p>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* PHILOSOPHY */}
      {' '}
      <section id="philosophy" className="py-24 lg:py-32 bg-ink scroll-mt-24">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head on-dark" data-reveal="">
            {' '}
            <span className="eyebrow !text-accent-bright block mb-3.5">
              My Philosophy
            </span>
            {' '}
            <h2>
              Six principles I build by
            </h2>
            {' '}
          </div>
          {' '}
          <ol className="max-w-[720px] mx-auto flex flex-col gap-4" data-reveal="">
            {' '}
            <li className="flex items-start gap-5 border-b border-white/10 pb-4">
              {' '}
              <span className="font-display font-extrabold text-[16px] text-accent-bright tabular-nums pt-1 shrink-0">
                01
              </span>
              {' '}
              <p className="font-display font-semibold text-[clamp(1.0625rem,0.95rem+0.4vw,1.25rem)] text-white leading-snug">
                Build before you scale.
              </p>
              {' '}
            </li>
            {' '}
            <li className="flex items-start gap-5 border-b border-white/10 pb-4">
              {' '}
              <span className="font-display font-extrabold text-[16px] text-accent-bright tabular-nums pt-1 shrink-0">
                02
              </span>
              {' '}
              <p className="font-display font-semibold text-[clamp(1.0625rem,0.95rem+0.4vw,1.25rem)] text-white leading-snug">
                Understand before you invest.
              </p>
              {' '}
            </li>
            {' '}
            <li className="flex items-start gap-5 border-b border-white/10 pb-4">
              {' '}
              <span className="font-display font-extrabold text-[16px] text-accent-bright tabular-nums pt-1 shrink-0">
                03
              </span>
              {' '}
              <p className="font-display font-semibold text-[clamp(1.0625rem,0.95rem+0.4vw,1.25rem)] text-white leading-snug">
                Fix the constraint before adding more fuel.
              </p>
              {' '}
            </li>
            {' '}
            <li className="flex items-start gap-5 border-b border-white/10 pb-4">
              {' '}
              <span className="font-display font-extrabold text-[16px] text-accent-bright tabular-nums pt-1 shrink-0">
                04
              </span>
              {' '}
              <p className="font-display font-semibold text-[clamp(1.0625rem,0.95rem+0.4vw,1.25rem)] text-white leading-snug">
                Build systems before adding complexity.
              </p>
              {' '}
            </li>
            {' '}
            <li className="flex items-start gap-5 border-b border-white/10 pb-4">
              {' '}
              <span className="font-display font-extrabold text-[16px] text-accent-bright tabular-nums pt-1 shrink-0">
                05
              </span>
              {' '}
              <p className="font-display font-semibold text-[clamp(1.0625rem,0.95rem+0.4vw,1.25rem)] text-white leading-snug">
                Profit matters as much as revenue.
              </p>
              {' '}
            </li>
            {' '}
            <li className="flex items-start gap-5">
              {' '}
              <span className="font-display font-extrabold text-[16px] text-accent-bright tabular-nums pt-1 shrink-0">
                06
              </span>
              {' '}
              <p className="font-display font-semibold text-[clamp(1.0625rem,0.95rem+0.4vw,1.25rem)] text-white leading-snug">
                The founder should eventually become less necessary to the business.
              </p>
              {' '}
            </li>
            {' '}
          </ol>
          {' '}
          <p className="text-center text-[#9BA1A7] text-[16px] max-w-[600px] mx-auto mt-12 mb-10" data-reveal="">
            That's the kind of company I want to help founders build.
          </p>
          {' '}
          <div className="flex gap-4 justify-center flex-wrap" data-reveal="">
            {' '}
            <a href="/strategy/" className="btn btn-accent">
              Book A 1:1 Strategy Session
            </a>
            {' '}
            <a href="#diagnostic" className="btn btn-secondary btn-on-dark">
              Apply For A Growth Diagnostic
            </a>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* WHY I STARTED GROW SPARK */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[760px] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Why I Started Grow Spark
            </span>
            {' '}
            <h2>
              More marketing was never the whole answer
            </h2>
            {' '}
          </div>
          {' '}
          <div data-reveal="">
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-3">
              I saw too many businesses trying to solve every problem with the same answer:
            </p>
            {' '}
            <p className="statement-line mb-6">
              More marketing.
            </p>
            {' '}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {' '}
              <span className="chip">
                More ads
              </span>
              {' '}
              <span className="chip">
                More content
              </span>
              {' '}
              <span className="chip">
                More salespeople
              </span>
              {' '}
              <span className="chip">
                More technology
              </span>
              {' '}
              <span className="chip">
                More employees
              </span>
              {' '}
            </div>
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-4">
              But growth doesn't work that way. If the underlying constraint isn't solved, adding more fuel can actually make the problem worse.
            </p>
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed">
              So I built Grow Spark Consulting around a different philosophy:
            </p>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
        <div className="mt-12 border-y border-hairline bg-paper-sunken py-7">
          {' '}
          <ol className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 flex flex-wrap items-center justify-center gap-2.5" data-reveal="">
            {' '}
            <li className="framework-mini-step">
              <span>
                01
              </span>
              Diagnose
            </li>
            {' '}
            <li className="framework-mini-step">
              <span>
                02
              </span>
              Strategise
            </li>
            {' '}
            <li className="framework-mini-step">
              <span>
                03
              </span>
              Transform
            </li>
            {' '}
            <li className="framework-mini-step">
              <span>
                04
              </span>
              Scale
            </li>
            {' '}
          </ol>
          {' '}
        </div>
        {' '}
        <div className="mx-auto max-w-[760px] px-5 sm:px-8 mt-12">
          {' '}
          <p className="text-center text-[16.5px] text-ink-soft leading-relaxed max-w-[600px] mx-auto" data-reveal="">
            We look at the business as a system. Then we determine where the biggest opportunities and constraints are.
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* WHAT I DO WITH FOUNDERS */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              What I Do With Founders
            </span>
            {' '}
            <h2>
              I work with founders who are serious about building their next stage of growth
            </h2>
            {' '}
            <p>
              Depending on the business, that can involve:
            </p>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" data-reveal="">
            {' '}
            <div className="tile-card is-centered">
              Business Model
            </div>
            {' '}
            <div className="tile-card is-centered">
              Revenue
            </div>
            {' '}
            <div className="tile-card is-centered">
              Positioning
            </div>
            {' '}
            <div className="tile-card is-centered">
              Offers
            </div>
            {' '}
            <div className="tile-card is-centered">
              Customer Acquisition
            </div>
            {' '}
            <div className="tile-card is-centered">
              Conversion
            </div>
            {' '}
            <div className="tile-card is-centered">
              Retention & LTV
            </div>
            {' '}
            <div className="tile-card is-centered">
              Margins
            </div>
            {' '}
            <div className="tile-card is-centered">
              Operations
            </div>
            {' '}
            <div className="tile-card is-centered">
              Technology
            </div>
            {' '}
            <div className="tile-card is-centered">
              AI & Automation
            </div>
            {' '}
            <div className="tile-card is-centered">
              Customer Experience
            </div>
            {' '}
            <div className="tile-card is-centered col-span-2 sm:col-span-3 lg:col-span-4">
              Scaling Systems
            </div>
            {' '}
          </div>
          {' '}
          <div className="text-center max-w-[640px] mx-auto mt-12" data-reveal="">
            {' '}
            <p className="text-[16px] text-ink-soft mb-2">
              The objective isn't to make a business look bigger.
            </p>
            {' '}
            <p className="statement-line text-accent">
              It's to make the business fundamentally stronger.
            </p>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* BUILT BY PRAGADEESH */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Built By Pragadeesh
            </span>
            {' '}
            <h2>
              Consulting is different when you've experienced the realities of building businesses yourself
            </h2>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-3" data-reveal="">
            {' '}
            <div className="detail-card">
              {' '}
              <span className="font-display font-extrabold text-[20px] text-accent block mb-3" aria-hidden="true">
                +
              </span>
              {' '}
              <h3>
                Company / Venture
              </h3>
              {' '}
              <p>
                Name, focus and role to be added — verified details pending.
              </p>
              {' '}
            </div>
            {' '}
            <div className="detail-card">
              {' '}
              <span className="font-display font-extrabold text-[20px] text-accent block mb-3" aria-hidden="true">
                +
              </span>
              {' '}
              <h3>
                Company / Venture
              </h3>
              {' '}
              <p>
                Name, focus and role to be added — verified details pending.
              </p>
              {' '}
            </div>
            {' '}
            <div className="detail-card">
              {' '}
              <span className="font-display font-extrabold text-[20px] text-accent block mb-3" aria-hidden="true">
                +
              </span>
              {' '}
              <h3>
                Company / Venture
              </h3>
              {' '}
              <p>
                Name, focus and role to be added — verified details pending.
              </p>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[16px] text-muted max-w-[640px] mx-auto mt-10" data-reveal="">
            This section will list the companies and ventures Pragadeesh has founded or materially worked on, once the final names, roles and any verified proof points are confirmed.
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* WORK WITH ME */}
      {' '}
      <section id="session" className="py-20 sm:py-24 lg:py-28 bg-paper-sunken scroll-mt-24">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Work With Me Personally
            </span>
            {' '}
            <h2>
              Work directly with Pragadeesh
            </h2>
            {' '}
          </div>
          {' '}
          <div className="max-w-[760px] mx-auto" data-reveal="">
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-4">
              Some business problems don't need another generic consultation. They need someone to sit down, understand the business and challenge the assumptions.
            </p>
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-8">
              That's why I've opened a limited number of 1:1 Founder Strategy Sessions.
            </p>
            {' '}
            <p className="statement-line text-center mb-2">
              Bring me your business problem.
            </p>
            {' '}
            <p className="text-center text-[17px] text-ink-soft mb-8">
              We can discuss:
            </p>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[980px] mx-auto" data-reveal="">
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                What's holding your growth back
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Where you're losing revenue or margin
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Whether your current business model makes sense
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Your next growth opportunity
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Your positioning and offer
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Scaling challenges
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Team and operational bottlenecks
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Technology and AI opportunities
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                What I would prioritise if I were running the business
              </p>
            </div>
            {' '}
          </div>
          {' '}
          <div className="text-center max-w-[640px] mx-auto mt-12 mb-12" data-reveal="">
            {' '}
            <p className="text-[17px] text-muted line-through decoration-hairline-strong">
              This is not a motivational call.
            </p>
            {' '}
            <p className="statement-line mt-2">
              It's a working session.
            </p>
            {' '}
          </div>
          {' '}
          <div className="pricing-card max-w-[560px] mx-auto" data-reveal="">
            {' '}
            <div className="pc-name">
              1:1 Founder Strategy Session
            </div>
            {' '}
            <div className="pc-price">
              <span className="ph">
                ₹
              </span>
              X / session
            </div>
            {' '}
            <div className="pc-meta">
              60 minutes · Private · Direct access to Pragadeesh
            </div>
            {' '}
            <p className="pc-desc">
              A focused working session for founders who want an experienced outside perspective on a specific business challenge.
            </p>
            {' '}
            <a href="/strategy/" className="btn btn-primary btn-block">
              Book A 1:1 Strategy Session
            </a>
            {' '}
            <p className="pc-note">
              Limited sessions available each month. Final price to be confirmed.
            </p>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* GROWTH DIAGNOSTIC */}
      {' '}
      <section id="diagnostic" className="py-20 sm:py-24 lg:py-28 scroll-mt-24">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="bg-accent-tint rounded-feature px-7 py-12 sm:px-12 sm:py-14 text-center max-w-[820px] mx-auto" data-reveal="">
            {' '}
            <span className="eyebrow !text-accent-deep block mb-4">
              For Deeper Business Problems
            </span>
            {' '}
            <h2 className="subsection-heading mb-4">
              Not sure if you need a 1:1?
            </h2>
            {' '}
            <p className="text-[17px] text-ink-soft leading-relaxed max-w-[620px] mx-auto mb-9">
              If you're looking for a deeper engagement where Grow Spark examines the business more comprehensively, apply for a Grow Spark Growth Diagnostic — a structured assessment designed to identify the constraints, opportunities and priorities that matter most.
            </p>
            {' '}
            <a href="/contact/" className="btn btn-primary">
              Apply For A Growth Diagnostic
            </a>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* FINAL FOUNDER MESSAGE */}
      {' '}
      <section className="py-24 sm:py-28 lg:py-32 text-center bg-ink">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8" data-reveal="">
          {' '}
          <span className="eyebrow !text-accent-bright block mb-5">
            A Final Word
          </span>
          {' '}
          <h2 className="text-white cta-heading mb-5">
            Your Business Shouldn't Depend On You Forever.
          </h2>
          {' '}
          <p className="text-[#9BA1A7] text-[17px] mb-10 max-w-[560px] mx-auto">
            You built the business. Now let's build the business beyond you.
          </p>
          {' '}
          <div className="flex gap-4 justify-center flex-wrap mb-14">
            {' '}
            <a href="/strategy/" className="btn btn-accent">
              Book A 1:1 With Pragadeesh
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
            <div className="sig-line">
              Empowering business owners to build, scale and create businesses that work.
            </div>
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
