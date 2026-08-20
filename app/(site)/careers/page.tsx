import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

/**
 * Transcribed from pages/careers/index.html by scripts/html-to-tsx.py.
 * Element tree, classes, content and metadata are unchanged; only the
 * JSX-required attribute spellings differ from the source markup.
 */
export const metadata: Metadata = {
  title: "Careers — Build Businesses. Build Yourself. | Grow Spark Consulting",
  description: "Grow Spark is looking for people who want to work on problems that actually matter. If you want a role where you're expected to think — not simply execute instructions — you may belong here.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/careers/" },
  openGraph: {
    type: "website",
    siteName: "Grow Spark Consulting",
    title: "Careers — Build Businesses. Build Yourself. | Grow Spark Consulting",
    description: "Skills get you in. Judgement makes you valuable. Join a high-ownership environment built around difficult business problems.",
    url: "https://www.growsparkconsulting.com/careers/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers — Build Businesses. Build Yourself. | Grow Spark Consulting",
    description: "Skills get you in. Judgement makes you valuable. Join a high-ownership environment built around difficult business problems.",
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
              Careers
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
              Careers
            </span>
            {' '}
            <h1 className="page-hero-heading mb-8 text-balance">
              Build Businesses. Build Yourself.
            </h1>
            {' '}
            <p className="text-[17px] text-ink-soft leading-relaxed max-w-[660px] mx-auto mb-4">
              Grow Spark is looking for people who want to work on problems that actually matter.
            </p>
            {' '}
            <p className="text-[17px] text-ink-soft leading-relaxed max-w-[660px] mx-auto mb-8">
              We work with founders and businesses facing growth, profitability, technology and scaling challenges.
            </p>
            {' '}
            <p className="statement-line mb-10">
              If you want a role where you're expected to think — not simply execute instructions — you may belong here.
            </p>
            {' '}
            <div className="flex gap-4 justify-center flex-wrap">
              {' '}
              <a href="#openings" className="btn btn-primary">
                View Open Roles
              </a>
              {' '}
              <a href="#apply" className="btn btn-secondary">
                Send A General Application
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
      {/* THIS IS NOT A NORMAL JOB */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[760px] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              This Is Not A Normal Job
            </span>
            {' '}
            <h2>
              We're not looking for people who just want a job.
            </h2>
            {' '}
          </div>
          {' '}
          <div data-reveal="">
            {' '}
            <p className="text-[17px] text-ink-soft leading-relaxed mb-5">
              We're building a company. That means the people who join Grow Spark will have the opportunity to influence how we work, how we serve clients and what the firm becomes.
            </p>
            {' '}
            <p className="text-[17px] text-ink-soft leading-relaxed mb-7">
              You may be asked to:
            </p>
            {' '}
            <div className="flex flex-wrap gap-2.5 mb-10">
              {' '}
              <span className="chip">
                Question an assumption.
              </span>
              {' '}
              <span className="chip">
                Analyse a business.
              </span>
              {' '}
              <span className="chip">
                Build a framework.
              </span>
              {' '}
              <span className="chip">
                Speak with a founder.
              </span>
              {' '}
              <span className="chip">
                Research a market.
              </span>
              {' '}
              <span className="chip">
                Solve an operational problem.
              </span>
              {' '}
              <span className="chip">
                Work with technology.
              </span>
              {' '}
              <span className="chip">
                Create something from scratch.
              </span>
              {' '}
              <span className="chip">
                Take responsibility when the answer isn't obvious.
              </span>
              {' '}
            </div>
            {' '}
            <div className="text-center">
              {' '}
              <p className="text-[16.5px] text-ink-soft mb-1">
                The expectation is simple:
              </p>
              {' '}
              <p className="text-[16.5px] text-muted mb-3">
                Don't just complete the task.
              </p>
              {' '}
              <p className="statement-line text-accent">
                Understand the problem.
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
      {/* WHO THRIVES HERE */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Who Thrives Here
            </span>
            {' '}
            <h2>
              You'll probably thrive at Grow Spark if you:
            </h2>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2" data-reveal="">
            {' '}
            <div className="check-item">
              <span className="check" aria-hidden="true">
                ✓
              </span>
              Are naturally curious
            </div>
            {' '}
            <div className="check-item">
              <span className="check" aria-hidden="true">
                ✓
              </span>
              Take ownership without being chased
            </div>
            {' '}
            <div className="check-item">
              <span className="check" aria-hidden="true">
                ✓
              </span>
              Think commercially
            </div>
            {' '}
            <div className="check-item">
              <span className="check" aria-hidden="true">
                ✓
              </span>
              Enjoy solving ambiguous problems
            </div>
            {' '}
            <div className="check-item">
              <span className="check" aria-hidden="true">
                ✓
              </span>
              Can communicate clearly
            </div>
            {' '}
            <div className="check-item">
              <span className="check" aria-hidden="true">
                ✓
              </span>
              Learn quickly
            </div>
            {' '}
            <div className="check-item">
              <span className="check" aria-hidden="true">
                ✓
              </span>
              Care about quality
            </div>
            {' '}
            <div className="check-item">
              <span className="check" aria-hidden="true">
                ✓
              </span>
              Are comfortable being challenged
            </div>
            {' '}
            <div className="check-item">
              <span className="check" aria-hidden="true">
                ✓
              </span>
              Prefer responsibility over hand-holding
            </div>
            {' '}
            <div className="check-item">
              <span className="check" aria-hidden="true">
                ✓
              </span>
              Want to understand how businesses actually work
            </div>
            {' '}
          </div>
          {' '}
          <div className="text-center max-w-[640px] mx-auto mt-12" data-reveal="">
            {' '}
            <p className="text-[16.5px] text-ink-soft mb-2">
              You don't need to know everything.
            </p>
            {' '}
            <p className="statement-line text-accent">
              But you do need to be willing to learn.
            </p>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* HOW WE THINK ABOUT TALENT */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              How We Think About Talent
            </span>
            {' '}
            <h2>
              Skills get you in. Judgement makes you valuable.
            </h2>
            {' '}
            <p>
              We care about technical and functional capability. But we also care about how you think.
            </p>
            {' '}
          </div>
          {' '}
          <div className="q-list" data-reveal="">
            {' '}
            <p>
              Can you break a problem down?
            </p>
            {' '}
            <p>
              Can you identify what matters?
            </p>
            {' '}
            <p>
              Can you separate signal from noise?
            </p>
            {' '}
            <p>
              Can you explain your reasoning?
            </p>
            {' '}
            <p>
              Can you change your mind when the evidence changes?
            </p>
            {' '}
            <p>
              Can you take ownership of an outcome?
            </p>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[16.5px] text-ink-soft max-w-[660px] mx-auto mt-12" data-reveal="">
            {' '} These qualities become increasingly important as Grow Spark grows. {' '}
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* WHAT YOU CAN WORK ON */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              What You Can Work On
            </span>
            {' '}
            <h2>
              A Grow Spark career can cross disciplines.
            </h2>
            {' '}
            <p>
              Depending on the role, you may work across:
            </p>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" data-reveal="">
            {' '}
            <div className="detail-card">
              <h3>
                Strategy
              </h3>
              <p>
                Business analysis, research, market analysis and growth strategy.
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <h3>
                Revenue
              </h3>
              <p>
                Offers, positioning, acquisition, conversion and customer economics.
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <h3>
                Operations
              </h3>
              <p>
                Processes, systems, workflows and scaling.
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <h3>
                Technology
              </h3>
              <p>
                Web, software, integrations, data and digital systems.
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <h3>
                AI & Automation
              </h3>
              <p>
                AI opportunity mapping, workflow automation and intelligent systems.
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <h3>
                Data
              </h3>
              <p>
                Dashboards, analytics and decision systems.
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <h3>
                Client Transformation
              </h3>
              <p>
                Helping turn strategy into measurable business improvement.
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <h3>
                Research & Development
              </h3>
              <p>
                Studying markets, business models, technology and emerging opportunities.
              </p>
            </div>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* WORKING PRINCIPLES */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Our Working Principles
            </span>
            {' '}
            <h2>
              How we expect people to operate
            </h2>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 max-w-[860px] mx-auto" data-reveal="">
            {' '}
            <div className="chain-item">
              <span className="cnum">
                1
              </span>
              <div>
                <h3>
                  Own The Outcome
                </h3>
                <p>
                  Don't wait for someone else to solve the problem.
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
                  Ask Why
                </h3>
                <p>
                  Understand the reason behind the task.
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
                  Tell The Truth
                </h3>
                <p>
                  Good work depends on honest analysis.
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
                  Move With Urgency
                </h3>
                <p>
                  Speed matters when it is paired with quality.
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
                  Build, Don't Just Discuss
                </h3>
                <p>
                  Ideas become valuable when they become useful.
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
                  Keep Learning
                </h3>
                <p>
                  Markets, technology and business models change constantly.
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
                  Make The Client Better
                </h3>
                <p>
                  Everything we do should ultimately create value for the client.
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
      {/* LIFE AT GROW SPARK */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-ink">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head on-dark" data-reveal="">
            {' '}
            <span className="eyebrow !text-accent-bright block mb-3.5">
              Life At Grow Spark
            </span>
            {' '}
            <h2>
              We are building a high-ownership environment.
            </h2>
            {' '}
          </div>
          {' '}
          <div className="flex flex-wrap justify-center gap-2.5 max-w-[820px] mx-auto mb-12" data-reveal="">
            {' '}
            <span className="chip chip-on-dark">
              Small teams
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Direct communication
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Real responsibility
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Fast learning
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Close exposure to founders
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Cross-functional work
            </span>
            {' '}
            <span className="chip chip-on-dark">
              High standards
            </span>
            {' '}
          </div>
          {' '}
          <div className="text-center max-w-[680px] mx-auto" data-reveal="">
            {' '}
            <p className="text-[#9BA1A7] text-[16.5px] leading-relaxed mb-2">
              There may not always be a perfect process. Sometimes you'll help build the process.
            </p>
            {' '}
            <p className="text-[#9BA1A7] text-[16.5px] leading-relaxed">
              There may not always be a clear answer. Sometimes you'll help find it.
            </p>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* CURRENT OPENINGS */}
      {' '}
      <section id="openings" className="py-20 sm:py-24 lg:py-28 scroll-mt-24">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Current Openings
            </span>
            {' '}
            <h2>
              Open roles
            </h2>
            {' '}
          </div>
          {' '}
          <div className="max-w-[680px] mx-auto bg-paper-raised border border-hairline rounded-card px-7 py-12 sm:px-12 sm:py-14 text-center" data-reveal="">
            {' '}
            <h3 className="subsection-heading mb-4">
              No current openings.
            </h3>
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed max-w-[520px] mx-auto mb-9">
              We're not actively hiring for every function. However, we're always interested in meeting exceptional people.
            </p>
            {' '}
            <a href="#apply" className="btn btn-primary">
              Make A General Application
            </a>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* GENERAL APPLICATION */}
      {' '}
      <section id="apply" className="py-20 sm:py-24 lg:py-28 bg-paper-sunken scroll-mt-24">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              General Application
            </span>
            {' '}
            <h2>
              Don't see your role? That doesn't mean we shouldn't talk.
            </h2>
            {' '}
            <p>
              If you believe you can make Grow Spark better, send us a short introduction.
            </p>
            {' '}
          </div>
          {' '}
          <div className="max-w-[820px] mx-auto bg-paper-raised border border-hairline rounded-card shadow-[var(--shadow-card-md)] p-6 sm:p-10" data-reveal="">
            {' '}
            <div className="callout is-neutral mb-9">
              {' '}
              <p>
                <strong className="text-ink font-semibold">
                  Tell us:
                </strong>
                {' '} What you do · What you're unusually good at · What kind of problems you enjoy solving · Why Grow Spark · What you want to build or learn.
              </p>
              {' '}
              <p>
                Don't send a generic cover letter. Show us how you think.
              </p>
              {' '}
            </div>
            {' '}
            {/* Front-end only: this project has no backend (see CLAUDE.md). Wire `action` to a form service before this goes live. */}
            {' '}
            <form action="/api/careers-application" method="post" className="grid sm:grid-cols-2 gap-x-6 gap-y-6">
              {' '}
              <div>
                <label className="form-label" htmlFor="c-name">
                  Name
                </label>
                <input className="form-input" type="text" id="c-name" name="name" autoComplete="name" placeholder="Your full name" />
              </div>
              {' '}
              <div>
                <label className="form-label" htmlFor="c-email">
                  Email
                </label>
                <input className="form-input" type="email" id="c-email" name="email" autoComplete="email" placeholder="you@email.com" />
              </div>
              {' '}
              <div className="sm:col-span-2">
                <label className="form-label" htmlFor="c-what">
                  What You Do
                </label>
                <input className="form-input" type="text" id="c-what" name="what_you_do" placeholder="Your current role / focus" />
              </div>
              {' '}
              <div className="sm:col-span-2">
                <label className="form-label" htmlFor="c-good">
                  What You're Unusually Good At
                </label>
                <textarea className="form-input" id="c-good" name="strengths" />
              </div>
              {' '}
              <div className="sm:col-span-2">
                <label className="form-label" htmlFor="c-enjoy">
                  What Kind Of Problems You Enjoy Solving
                </label>
                <textarea className="form-input" id="c-enjoy" name="problems" />
              </div>
              {' '}
              <div className="sm:col-span-2">
                <label className="form-label" htmlFor="c-why">
                  Why Grow Spark
                </label>
                <textarea className="form-input" id="c-why" name="why_grow_spark" />
              </div>
              {' '}
              <div className="sm:col-span-2">
                <label className="form-label" htmlFor="c-build">
                  What You Want To Build Or Learn
                </label>
                <textarea className="form-input" id="c-build" name="build_or_learn" />
              </div>
              {' '}
              <div className="sm:col-span-2">
                <label className="form-label" htmlFor="c-link">
                  Portfolio / LinkedIn / Resume Link
                </label>
                <input className="form-input" type="text" id="c-link" name="link" placeholder="https://" />
              </div>
              {' '}
              <div className="sm:col-span-2">
                {' '}
                <button type="submit" className="btn btn-primary btn-block">
                  Submit General Application
                </button>
                {' '}
                <p className="text-[13px] text-muted mt-4 text-center">
                  [Application submission integration to be connected.]
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
      {/* INTERVIEW APPROACH */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Interview Approach
            </span>
            {' '}
            <h2>
              We want to understand how you think — not just what's on your CV.
            </h2>
            {' '}
            <p>
              A typical process may include:
            </p>
            {' '}
          </div>
          {' '}
          <div className="max-w-[620px] mx-auto flex flex-col items-center gap-3" data-reveal="">
            {' '}
            <div className="flow-step">
              {' '}
              <span className="eyebrow block mb-2">
                01
              </span>
              {' '}
              <p className="ft">
                Application
              </p>
              {' '}
              <p className="fd">
                We review your experience and what you're interested in.
              </p>
              {' '}
            </div>
            {' '}
            <ArrowRight className="w-5 h-5 text-accent rotate-90 shrink-0" aria-hidden="true" />
            {' '}
            <div className="flow-step">
              {' '}
              <span className="eyebrow block mb-2">
                02
              </span>
              {' '}
              <p className="ft">
                Conversation
              </p>
              {' '}
              <p className="fd">
                A discussion about your experience, ambitions and how you think.
              </p>
              {' '}
            </div>
            {' '}
            <ArrowRight className="w-5 h-5 text-accent rotate-90 shrink-0" aria-hidden="true" />
            {' '}
            <div className="flow-step">
              {' '}
              <span className="eyebrow block mb-2">
                03
              </span>
              {' '}
              <p className="ft">
                Practical / Case Exercise
              </p>
              {' '}
              <p className="fd">
                Depending on the role, we may ask you to solve a real-world business problem.
              </p>
              {' '}
            </div>
            {' '}
            <ArrowRight className="w-5 h-5 text-accent rotate-90 shrink-0" aria-hidden="true" />
            {' '}
            <div className="flow-step">
              {' '}
              <span className="eyebrow block mb-2">
                04
              </span>
              {' '}
              <p className="ft">
                Team / Leadership Discussion
              </p>
              {' '}
              <p className="fd">
                We explore fit, expectations and the kind of work you'll be doing.
              </p>
              {' '}
            </div>
            {' '}
            <ArrowRight className="w-5 h-5 text-accent rotate-90 shrink-0" aria-hidden="true" />
            {' '}
            <div className="flow-step is-outcome">
              {' '}
              <span className="eyebrow !text-accent-deep block mb-2">
                05
              </span>
              {' '}
              <p className="ft">
                Offer
              </p>
              {' '}
              <p className="fd">
                If there's a strong mutual fit, we make an offer.
              </p>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[13.5px] text-muted mt-10" data-reveal="">
            The exact process may differ by role.
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* A NOTE FROM PRAGADEESH */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-accent-deep">
        {' '}
        <div className="mx-auto max-w-[760px] px-5 sm:px-8" data-reveal="">
          {' '}
          <span className="eyebrow !text-accent-bright block mb-6">
            A Note From Pragadeesh
          </span>
          {' '}
          <p className="text-[#BFE0D2] text-[17px] leading-relaxed mb-5">
            I don't want to build a company where people simply come in, complete tasks and go home.
          </p>
          {' '}
          <p className="statement-line text-white mb-5">
            I want to build a company where people become significantly better because they worked here.
          </p>
          {' '}
          <p className="text-[#BFE0D2] text-[17px] leading-relaxed mb-5">
            Grow Spark is being built around difficult business problems. That means you'll encounter things you don't know how to solve yet.
          </p>
          {' '}
          <p className="text-[#BFE0D2] text-[17px] leading-relaxed mb-5">
            That's okay.
          </p>
          {' '}
          <p className="text-[#BFE0D2] text-[17px] leading-relaxed mb-5">
            If you're curious, take ownership and keep learning, you'll have room to grow here.
          </p>
          {' '}
          <p className="text-[#BFE0D2] text-[17px] leading-relaxed mb-5">
            We're building the firm as we build our clients' businesses.
          </p>
          {' '}
          <p className="text-[#BFE0D2] text-[17px] leading-relaxed mb-10">
            If that excites you, I'd like to hear from you.
          </p>
          {' '}
          <div className="signature pt-8 border-t border-white/10">
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
      {/* FINAL CTA */}
      {' '}
      <section className="py-24 sm:py-28 lg:py-32 text-center bg-ink">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8" data-reveal="">
          {' '}
          <span className="eyebrow !text-accent-bright block mb-5">
            Ready To Build?
          </span>
          {' '}
          <h2 className="text-white cta-heading mb-5">
            You Don't Have To Have Every Answer.
          </h2>
          {' '}
          <p className="text-[#9BA1A7] text-[17px] mb-10 max-w-[520px] mx-auto">
            You just need the curiosity to find better ones.
          </p>
          {' '}
          <div className="flex gap-4 justify-center flex-wrap">
            {' '}
            <a href="#openings" className="btn btn-accent">
              View Open Roles
            </a>
            {' '}
            <a href="#apply" className="btn btn-secondary btn-on-dark">
              Make A General Application
            </a>
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
