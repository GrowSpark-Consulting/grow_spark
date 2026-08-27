import type { Metadata } from 'next';

/**
 * The Co-Founder, Technology & Operations profile — Raja V., Leader 3.
 * Built on the same section vocabulary as /founder/ and /cmo/: hero with
 * portrait frame, alternating paper and sunken bands, an ink Philosophy
 * section, and a closing ink section carrying the CTA and signature block.
 *
 * Only sections backed by supplied content are included. Two sections in the
 * source brief ("My Approach" and "My Approach — Detailed") carried identical
 * body text; they're rendered once. "Work With Me" and "Final Identity" are
 * merged into the single closing section, since together they are exactly
 * the heading + body + CTA + signature shape the closing section already has
 * on /founder/ and /cmo/ — not a new pattern.
 *
 * "Built By Raja" lists only the one verified entry (Grow Spark Consulting,
 * Co-Founder — Technology & Operations) in a single centered card, rather
 * than the three-card grid /founder/ uses for its own (also-pending)
 * ventures — there is no second or third venture to list, verified or
 * pending, so the layout isn't stretched to imply there is.
 *
 * No <FooterCta />, matching /cmo/: the closing section is already a
 * full-width ink band with its own call to action.
 *
 * Server Component: no behaviour of its own.
 */
export const metadata: Metadata = {
  title: "Meet Raja V. — Co-Founder, Technology & Operations | Grow Spark Consulting",
  description: "Raja V. is Co-Founder, Technology & Operations at Grow Spark Consulting — closing the gap between a business decision and the working product it becomes.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/co-founder/" },
  openGraph: {
    type: "profile",
    siteName: "Grow Spark Consulting",
    title: "Meet Raja V. — Co-Founder, Technology & Operations | Grow Spark Consulting",
    description: "“The gap between a good business idea and a working product is where most founders lose momentum — my job is to close that gap.”",
    url: "https://www.growsparkconsulting.com/co-founder/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Raja V. — Co-Founder, Technology & Operations | Grow Spark Consulting",
    description: "“The gap between a good business idea and a working product is where most founders lose momentum — my job is to close that gap.”",
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
            <a href="/leadership/">
              Leadership
            </a>
          </li>
          {' '}
          <li>
            <span aria-current="page">
              Co-Founder, Technology & Operations
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
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-start" data-reveal="">
            {' '}
            <div>
              {' '}
              <span className="eyebrow block mb-5">
                Co-Founder, Technology & Operations — Grow Spark Consulting
              </span>
              {' '}
              <h1 className="page-hero-heading mb-4">
                Raja V.
              </h1>
              {' '}
              <p className="font-display font-semibold text-[17px] text-accent mb-7">
                Business Translator. Technology Builder.
              </p>
              {' '}
              <p className="lede-statement text-ink mb-9">
                “I believe the gap between a good business idea and a working product is where most founders lose momentum — my job is to close that gap.”
              </p>
              {' '}
              <div className="flex gap-4 flex-wrap">
                {' '}
                <a href="/contact/" className="btn btn-primary">
                  Work With Raja
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
                  Co-Founder, Technology & Operations
                </span>
                {' '}
                <span className="initial">
                  R
                </span>
                {' '}
                <div className="caption">
                  {' '}
                  <div className="name">
                    Raja V.
                  </div>
                  {' '}
                  <div className="role2">
                    Co-Founder, Grow Spark Consulting
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
      {/* ABOUT */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[760px] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              About
            </span>
            {' '}
            <h2>
              I'm Raja, Co-Founder of Grow Spark Consulting
            </h2>
            {' '}
          </div>
          {' '}
          <div data-reveal="">
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-4">
              I sit at the point where a business decision has to become something real — a website, an automation, a system, a launch — and I make sure it actually gets built, without the founder having to become a technologist to make that happen.
            </p>
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed">
              I'm not the person writing production-grade code all day. I'm the person who understands both sides of the table well enough to make sure nothing gets lost in translation between them.
            </p>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* WHAT ACTUALLY BREAKS GROWING BUSINESSES */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[760px] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <h2>
              What Actually Breaks Growing Businesses?
            </h2>
            {' '}
          </div>
          {' '}
          <div className="bg-paper-sunken rounded-card px-7 py-8" data-reveal="">
            {' '}
            <p className="statement-line mb-2">
              Not a lack of ideas.
            </p>
            {' '}
            <p className="statement-line mb-2">
              Not a lack of ambition.
            </p>
            {' '}
            <p className="statement-line text-accent">
              A gap between “what we want” and “what gets built.”
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
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[760px] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <h2>
              My Approach
            </h2>
            {' '}
          </div>
          {' '}
          <div data-reveal="">
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-4">
              I don't start with the tech stack. I start with the business problem.
            </p>
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-4">
              A website can be technically perfect and still not generate a single lead. An automation can save time and still solve the wrong problem. A “modern” tech choice can look impressive and still be the wrong fit for a small team.
            </p>
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-8">
              That's why before any build starts, I ask a different question.
            </p>
            {' '}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8">
              {' '}
              <div className="bg-paper rounded-card px-7 py-8">
                {' '}
                <span className="eyebrow !text-muted block mb-3">
                  I Don't Start With
                </span>
                {' '}
                <p className="font-display font-semibold text-[16.5px] text-muted line-through decoration-hairline-strong">
                  “Which platform should we build this on?”
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
                  “What does this business actually need to work — and what's the simplest way to get there?”
                </p>
                {' '}
              </div>
              {' '}
            </div>
            {' '}
            <div className="mb-8">
              {' '}
              <p className="text-[16px] text-ink-soft">
                Sometimes that's a website.
              </p>
              {' '}
              <p className="text-[16px] text-ink-soft">
                Sometimes it's a lead system.
              </p>
              {' '}
              <p className="text-[16px] text-ink-soft">
                Sometimes it's just fixing a broken process before adding any technology at all.
              </p>
              {' '}
            </div>
            {' '}
            <div className="flex flex-wrap gap-2.5">
              {' '}
              <span className="chip">
                Positioning
              </span>
              {' '}
              <span className="chip">
                Systems
              </span>
              {' '}
              <span className="chip">
                Websites
              </span>
              {' '}
              <span className="chip">
                Automation
              </span>
              {' '}
              <span className="chip">
                AI Tools
              </span>
              {' '}
              <span className="chip">
                Delivery
              </span>
              {' '}
              <span className="chip">
                Operations
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
      {/* PROFILE / MISSION */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[760px] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Profile
            </span>
            {' '}
            <h2>
              My Mission
            </h2>
            {' '}
          </div>
          {' '}
          <div data-reveal="">
            {' '}
            <p className="statement-line text-accent mb-7">
              “Make sure good business ideas don't die in translation.”
            </p>
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-4">
              Most founders don't fail because their idea was weak. They fail because somewhere between the whiteboard and the website, the idea got lost — a developer misunderstood the brief, a tool got chosen for the wrong reasons, or nobody owned the follow-through.
            </p>
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed">
              At Grow Spark, I own that gap. I make sure a founder can say “this is what I need” in plain business language — and trust that it gets scoped, built, and delivered right.
            </p>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* WHAT I BRING TO GROW SPARK */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              What I Bring to Grow Spark
            </span>
            {' '}
            <h2>
              Business fluency and technical fluency, in one person
            </h2>
            {' '}
            <p>
              Most agencies split “the business side” and “the tech side” across different people, and clients half the project translating between them.
            </p>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[16.5px] text-ink-soft max-w-[720px] mx-auto mb-10" data-reveal="">
            At Grow Spark, I close that loop directly — working across websites, platforms, automation, and delivery, while staying grounded in the commercial realities of the business behind them.
          </p>
          {' '}
          <div className="grid-hairline grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" data-reveal="">
            {' '}
            <div className="tile-card is-centered">
              Websites & Platforms
            </div>
            {' '}
            <div className="tile-card is-centered">
              Automation & AI Tools
            </div>
            {' '}
            <div className="tile-card is-centered">
              Delivery Management
            </div>
            {' '}
            <div className="tile-card is-centered">
              Business Operations
            </div>
            {' '}
            <div className="tile-card is-centered">
              Client-Facing Strategy
            </div>
            {' '}
          </div>
          {' '}
          <div className="text-center max-w-[640px] mx-auto mt-12" data-reveal="">
            {' '}
            <p className="statement-line text-accent">
              I don't just ask “what do you want built” — I ask what's actually going on in the business first, then make sure the build matches it.
            </p>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* MY PHILOSOPHY */}
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
              Principles I build by
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
                Understand the business before touching a tool.
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
                Simple and working beats impressive and fragile.
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
                Someone has to own the follow-through — that's my job.
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
                Systems should reduce the founder's workload, not add to it.
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
                If it can't be explained in plain language, it's not ready to build.
              </p>
              {' '}
            </li>
            {' '}
            <li className="flex items-start gap-5 pb-4">
              {' '}
              <span className="font-display font-extrabold text-[16px] text-accent-bright tabular-nums pt-1 shrink-0">
                06
              </span>
              {' '}
              <p className="font-display font-semibold text-[clamp(1.0625rem,0.95rem+0.4vw,1.25rem)] text-white leading-snug">
                Clarity before complexity, every time.
              </p>
              {' '}
            </li>
            {' '}
          </ol>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* BUILT BY RAJA */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Built By Raja
            </span>
            {' '}
            <h2>
              What I've built and run at Grow Spark
            </h2>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 max-w-[420px] mx-auto" data-reveal="">
            {' '}
            <div className="detail-card">
              {' '}
              <span className="font-display font-extrabold text-[20px] text-accent block mb-3" aria-hidden="true">
                +
              </span>
              {' '}
              <h3>
                Grow Spark Consulting
              </h3>
              {' '}
              <p>
                Co-Founder, Technology & Operations
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
      {/* WORK WITH ME */}
      {' '}
      <section className="py-24 sm:py-28 lg:py-32 bg-ink">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8" data-reveal="">
          {' '}
          <div className="text-center max-w-[720px] mx-auto mb-12">
            {' '}
            <span className="eyebrow !text-accent-bright block mb-5">
              Work With Me
            </span>
            {' '}
            <h2 className="text-white cta-heading mb-5">
              Bring me the problem, not the platform
            </h2>
            {' '}
            <p className="text-[#9BA1A7] text-[17px]">
              If you already know you need “a website” or “an app,” we can talk about that. But if what you actually have is a business problem that might need technology — a broken process, a lead you can't track, a launch you don't know how to structure — that's the conversation I'm best in.
            </p>
            {' '}
          </div>
          {' '}
          <div className="max-w-[640px] mx-auto mb-12">
            {' '}
            <p className="font-display font-semibold text-[16px] text-accent-bright mb-4 text-center">
              We can discuss:
            </p>
            {' '}
            <ul className="flex flex-col">
              {' '}
              <li className="text-[16px] text-[#9BA1A7] border-b border-white/10 py-3.5">
                What's slowing your team down operationally
              </li>
              {' '}
              <li className="text-[16px] text-[#9BA1A7] border-b border-white/10 py-3.5">
                Whether you need a build, a fix, or a process change
              </li>
              {' '}
              <li className="text-[16px] text-[#9BA1A7] border-b border-white/10 py-3.5">
                How to brief a developer or agency so you get what you actually meant
              </li>
              {' '}
              <li className="text-[16px] text-[#9BA1A7] border-b border-white/10 py-3.5">
                Where automation or AI could realistically save you time
              </li>
              {' '}
              <li className="text-[16px] text-[#9BA1A7] py-3.5">
                How to move from idea to a working first version
              </li>
              {' '}
            </ul>
            {' '}
          </div>
          {' '}
          <p className="statement-line text-accent-bright text-center max-w-[600px] mx-auto mb-10">
            This isn't a sales pitch for a tech stack. It's a working session on what your business actually needs next.
          </p>
          {' '}
          <div className="flex gap-4 justify-center flex-wrap mb-14">
            {' '}
            <a href="/contact/" className="btn btn-accent">
              Work With Raja
            </a>
            {' '}
          </div>
          {' '}
          <div className="signature pt-10 border-t border-white/10 max-w-[520px] mx-auto">
            {' '}
            <div className="sig-name">
              Raja V.
            </div>
            {' '}
            <div className="sig-role">
              Co-Founder, Grow Spark Consulting
            </div>
            {' '}
            <div className="sig-line">
              Turning business goals into things that actually get built.
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
