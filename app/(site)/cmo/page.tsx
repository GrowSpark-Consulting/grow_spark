import type { Metadata } from 'next';

/**
 * The Chief Marketing Officer profile, built on the same section vocabulary as
 * /founder/ — hero with portrait frame, alternating paper and sunken bands, two
 * ink sections carrying the philosophy and the closing word, and the signature
 * block closing the page.
 *
 * No <FooterCta />: the Connect section is already a full-width ink band with
 * its own call to action, and stacking the shared one under it gave the page
 * two dark CTAs back to back. The other 19 pages still carry it.
 *
 * Server Component: no behaviour of its own.
 */
export const metadata: Metadata = {
  title: "Meet Susshinder S.A. — Chief Marketing Officer | Grow Spark Consulting",
  description: "Susshinder S.A. is Chief Marketing Officer at Grow Spark Consulting, working at the intersection of people, marketing, technology and growth — helping businesses understand their customers and communicate real value.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/cmo/" },
  openGraph: {
    type: "profile",
    siteName: "Grow Spark Consulting",
    title: "Meet Susshinder S.A. — Chief Marketing Officer | Grow Spark Consulting",
    description: "“Turning meaningful products into meaningful connections.” Marketing strategy, brand building and human-centred growth.",
    url: "https://www.growsparkconsulting.com/cmo/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Susshinder S.A. — Chief Marketing Officer | Grow Spark Consulting",
    description: "“Turning meaningful products into meaningful connections.” Marketing strategy, brand building and human-centred growth.",
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
              Chief Marketing Officer
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
                Chief Marketing Officer — Grow Spark Consulting
              </span>
              {' '}
              <h1 className="page-hero-heading mb-4">
                Susshinder S.A.
              </h1>
              {' '}
              <p className="lede-statement text-ink mb-7">
                “Turning meaningful products into meaningful connections.”
              </p>
              {' '}
              <p className="text-[16.5px] text-ink-soft leading-relaxed mb-6">
                I work at the intersection of people, marketing, technology and growth — helping businesses understand their customers, build stronger brands and communicate the real value of what they offer.
              </p>
              {' '}
              <div className="flex gap-4 flex-wrap">
                {' '}
                <a href="/contact/" className="btn btn-primary">
                  Connect With Susshinder
                </a>
                {' '}
                <a href="#philosophy" className="btn btn-secondary">
                  My Marketing Philosophy
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
                  Chief Marketing Officer
                </span>
                {' '}
                <span className="initial">
                  S
                </span>
                {' '}
                <div className="caption">
                  {' '}
                  <div className="name">
                    Susshinder S.A.
                  </div>
                  {' '}
                  <div className="role2">
                    Chief Marketing Officer, Grow Spark Consulting
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
      {/* INTRO / ABOUT ME */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[760px] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Intro / About Me
            </span>
            {' '}
            <h2>
              Marketing begins with understanding people.
            </h2>
            {' '}
          </div>
          {' '}
          <div data-reveal="">
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-4">
              I'm Susshinder S.A., Chief Marketing Officer at Grow Spark Consulting.
            </p>
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-8">
              With a background in Information Technology and business, my journey has evolved toward marketing, strategy and understanding how businesses can create genuine value for people.
            </p>
            {' '}
            <div className="bg-paper rounded-card px-7 py-8">
              {' '}
              <p className="statement-line mb-2">
                First understand the people.
              </p>
              {' '}
              <p className="statement-line mb-2">
                Then understand the problem.
              </p>
              {' '}
              <p className="statement-line text-accent">
                Then communicate the solution clearly.
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
      {/* MY ROLE */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              My Role
            </span>
            {' '}
            <h2>
              What I Do
            </h2>
            {' '}
            <p>
              My work focuses on building the connection between a business and the people it wants to serve.
            </p>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" data-reveal="">
            {' '}
            <div className="detail-card">
              {' '}
              <h3>
                Marketing Strategy
              </h3>
              {' '}
              <p>
                Developing strategies based on market opportunities, customer needs and the real strengths of a product or service.
              </p>
              {' '}
            </div>
            {' '}
            <div className="detail-card">
              {' '}
              <h3>
                Brand Building
              </h3>
              {' '}
              <p>
                Creating clear positioning, identity and messaging that people can understand, remember and trust.
              </p>
              {' '}
            </div>
            {' '}
            <div className="detail-card">
              {' '}
              <h3>
                Customer Acquisition
              </h3>
              {' '}
              <p>
                Finding the right audiences and creating meaningful ways to turn attention into genuine customer relationships.
              </p>
              {' '}
            </div>
            {' '}
            <div className="detail-card">
              {' '}
              <h3>
                Market Research
              </h3>
              {' '}
              <p>
                Understanding customers, competitors, market behaviour and opportunities before making important marketing decisions.
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
      {/* MY APPROACH */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head max-w-[980px]" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              My Approach
            </span>
            {' '}
            <h2 className="whitespace-normal lg:whitespace-nowrap">
              People → Problem → Product → Communication → Growth
            </h2>
            {' '}
          </div>
          {' '}
          <div className="max-w-[760px] mx-auto" data-reveal="">
            {' '}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-10">
              {' '}
              <div className="bg-paper rounded-card px-7 py-8">
                {' '}
                <span className="eyebrow !text-muted block mb-3">
                  Marketing Shouldn't Begin With
                </span>
                {' '}
                <p className="font-display font-semibold text-[16.5px] text-muted line-through decoration-hairline-strong">
                  “How do we make people buy?”
                </p>
                {' '}
              </div>
              {' '}
              <div className="bg-accent-tint rounded-card px-7 py-8">
                {' '}
                <span className="eyebrow !text-accent-deep block mb-3">
                  It Should Begin With
                </span>
                {' '}
                <p className="font-display font-semibold text-[16.5px] text-accent-deep">
                  “Who are we helping, and how are we making their lives better?”
                </p>
                {' '}
              </div>
              {' '}
            </div>
            {' '}
            <ol className="flex flex-col gap-4">
              {' '}
              <li className="flex items-start gap-5 border-b border-hairline pb-4">
                {' '}
                <span className="font-display font-extrabold text-[16px] text-accent tabular-nums pt-1 shrink-0">
                  01
                </span>
                {' '}
                <div>
                  {' '}
                  <h3 className="font-display font-semibold text-[17px] text-ink mb-1">
                    Understand
                  </h3>
                  {' '}
                  <p className="text-[16px] text-ink-soft leading-relaxed">
                    Who are the people we are serving?
                  </p>
                  {' '}
                </div>
                {' '}
              </li>
              {' '}
              <li className="flex items-start gap-5 border-b border-hairline pb-4">
                {' '}
                <span className="font-display font-extrabold text-[16px] text-accent tabular-nums pt-1 shrink-0">
                  02
                </span>
                {' '}
                <div>
                  {' '}
                  <h3 className="font-display font-semibold text-[17px] text-ink mb-1">
                    Discover
                  </h3>
                  {' '}
                  <p className="text-[16px] text-ink-soft leading-relaxed">
                    What problem are they actually facing?
                  </p>
                  {' '}
                </div>
                {' '}
              </li>
              {' '}
              <li className="flex items-start gap-5 border-b border-hairline pb-4">
                {' '}
                <span className="font-display font-extrabold text-[16px] text-accent tabular-nums pt-1 shrink-0">
                  03
                </span>
                {' '}
                <div>
                  {' '}
                  <h3 className="font-display font-semibold text-[17px] text-ink mb-1">
                    Position
                  </h3>
                  {' '}
                  <p className="text-[16px] text-ink-soft leading-relaxed">
                    What makes the solution meaningful?
                  </p>
                  {' '}
                </div>
                {' '}
              </li>
              {' '}
              <li className="flex items-start gap-5 border-b border-hairline pb-4">
                {' '}
                <span className="font-display font-extrabold text-[16px] text-accent tabular-nums pt-1 shrink-0">
                  04
                </span>
                {' '}
                <div>
                  {' '}
                  <h3 className="font-display font-semibold text-[17px] text-ink mb-1">
                    Communicate
                  </h3>
                  {' '}
                  <p className="text-[16px] text-ink-soft leading-relaxed">
                    How can we explain its value clearly?
                  </p>
                  {' '}
                </div>
                {' '}
              </li>
              {' '}
              <li className="flex items-start gap-5 pb-4">
                {' '}
                <span className="font-display font-extrabold text-[16px] text-accent tabular-nums pt-1 shrink-0">
                  05
                </span>
                {' '}
                <div>
                  {' '}
                  <h3 className="font-display font-semibold text-[17px] text-ink mb-1">
                    Grow
                  </h3>
                  {' '}
                  <p className="text-[16px] text-ink-soft leading-relaxed">
                    How can we build sustainable relationships?
                  </p>
                  {' '}
                </div>
                {' '}
              </li>
              {' '}
            </ol>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* MARKETING PHILOSOPHY */}
      {' '}
      <section id="philosophy" className="py-24 lg:py-32 bg-ink scroll-mt-24">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head on-dark" data-reveal="">
            {' '}
            <span className="eyebrow !text-accent-bright block mb-3.5">
              Marketing Philosophy
            </span>
            {' '}
            <h2>
              Marketing should create clarity, not manipulation.
            </h2>
            {' '}
          </div>
          {' '}
          <div className="max-w-[720px] mx-auto text-center" data-reveal="">
            {' '}
            <p className="text-[#9BA1A7] text-[16.5px] leading-relaxed mb-4">
              Marketing isn't about showcasing unnecessary things and convincing people to buy.
            </p>
            {' '}
            <p className="text-[#9BA1A7] text-[16.5px] leading-relaxed mb-10">
              It's about clearly communicating the real value of something that can genuinely help someone.
            </p>
            {' '}
            <p className="font-display font-semibold text-[clamp(1.0625rem,0.95rem+0.4vw,1.25rem)] text-accent-bright leading-snug pb-10 mb-10 border-b border-white/10">
              Understanding → Trust → Relationship → Growth
            </p>
            {' '}
            <p className="text-[#9BA1A7] text-[16.5px] leading-relaxed mb-2">
              Good marketing doesn't just create customers.
            </p>
            {' '}
            <p className="font-display font-semibold text-[clamp(1.0625rem,0.95rem+0.4vw,1.25rem)] text-white leading-snug">
              It creates understanding and trust.
            </p>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* PEOPLE FIRST */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              People First
            </span>
            {' '}
            <h2>
              People First. Growth Always.
            </h2>
            {' '}
            <p>
              Behind every click, purchase, enquiry or decision is a person with a need, expectation or problem.
            </p>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[16px] text-ink-soft max-w-[640px] mx-auto mb-10" data-reveal="">
            That's why I constantly ask:
          </p>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" data-reveal="">
            {' '}
            <div className="tile-card is-centered">
              Who are we serving?
            </div>
            {' '}
            <div className="tile-card is-centered">
              What problem are we solving?
            </div>
            {' '}
            <div className="tile-card is-centered">
              Why should they care?
            </div>
            {' '}
            <div className="tile-card is-centered">
              Are we genuinely making their lives better?
            </div>
            {' '}
          </div>
          {' '}
          <div className="text-center max-w-[640px] mx-auto mt-12" data-reveal="">
            {' '}
            <p className="statement-line text-accent">
              For me, meaningful growth happens when the business grows and the people it serves benefit from that growth.
            </p>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* TECHNOLOGY */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[760px] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Technology
            </span>
            {' '}
            <h2>
              Technology With Purpose
            </h2>
            {' '}
          </div>
          {' '}
          <div data-reveal="">
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-4">
              Technology is changing how we live, work and communicate.
            </p>
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-4">
              I'm particularly interested in AI, emerging technologies and the future of digital business.
            </p>
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-8">
              But technology itself isn't the destination.
            </p>
            {' '}
            <div className="bg-accent-tint rounded-card px-7 py-8 mb-8">
              {' '}
              <span className="eyebrow !text-accent-deep block mb-3">
                The Real Question
              </span>
              {' '}
              <p className="font-display font-semibold text-[16.5px] text-accent-deep">
                “What can technology do for people?”
              </p>
              {' '}
            </div>
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed">
              I believe technology should be used to create better experiences, solve real problems, improve businesses and contribute to a better future.
            </p>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* MY JOURNEY */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[760px] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              My Journey
            </span>
            {' '}
            <h2>
              From Technology to Business & Marketing
            </h2>
            {' '}
          </div>
          {' '}
          <div data-reveal="">
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-4">
              My journey started with a foundation in Information Technology, which developed my interest in technology and problem-solving.
            </p>
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-4">
              My experience as a business owner gave me another perspective — understanding customers, business challenges, decisions and what it takes to build something in the real world.
            </p>
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-8">
              Today, as Chief Marketing Officer at Grow Spark Consulting, I bring these perspectives together.
            </p>
            {' '}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {' '}
              <span className="chip">
                Technology
              </span>
              {' '}
              <span className="chip">
                Business
              </span>
              {' '}
              <span className="chip">
                Marketing
              </span>
              {' '}
              <span className="chip">
                People
              </span>
              {' '}
            </div>
            {' '}
            <p className="statement-line text-accent">
              My journey is still evolving — and continuous learning remains a major part of it.
            </p>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* WHAT DRIVES ME */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              What Drives Me
            </span>
            {' '}
            <h2>
              Beyond Marketing
            </h2>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" data-reveal="">
            {' '}
            <div className="detail-card">
              {' '}
              <h3>
                People
              </h3>
              {' '}
              <p>
                Understanding human behaviour, needs and aspirations.
              </p>
              {' '}
            </div>
            {' '}
            <div className="detail-card">
              {' '}
              <h3>
                Growth
              </h3>
              {' '}
              <p>
                Continuously learning, improving and becoming better.
              </p>
              {' '}
            </div>
            {' '}
            <div className="detail-card">
              {' '}
              <h3>
                Technology
              </h3>
              {' '}
              <p>
                Exploring how emerging technology can create positive change.
              </p>
              {' '}
            </div>
            {' '}
            <div className="detail-card">
              {' '}
              <h3>
                Creativity
              </h3>
              {' '}
              <p>
                Finding new ways to communicate ideas and solve problems.
              </p>
              {' '}
            </div>
            {' '}
            <div className="detail-card sm:col-span-2">
              {' '}
              <h3>
                Spirituality
              </h3>
              {' '}
              <p>
                Developing inner awareness, peace and a deeper understanding of life.
              </p>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
          <div className="text-center max-w-[640px] mx-auto mt-12" data-reveal="">
            {' '}
            <p className="statement-line text-accent">
              I believe professional growth and personal growth should move together.
            </p>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* MY BELIEF */}
      {' '}
      <section className="py-24 lg:py-32 bg-ink">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8" data-reveal="">
          {' '}
          <span className="eyebrow !text-accent-bright block mb-5 text-center">
            My Belief
          </span>
          {' '}
          <blockquote className="max-w-[720px] mx-auto text-center">
            {' '}
            <p className="font-display font-semibold text-[clamp(1.25rem,1.05rem+0.9vw,1.75rem)] text-white leading-snug mb-3">
              “Technology should make life better.
            </p>
            {' '}
            <p className="font-display font-semibold text-[clamp(1.25rem,1.05rem+0.9vw,1.75rem)] text-white leading-snug mb-3">
              Marketing should make value clearer.
            </p>
            {' '}
            <p className="font-display font-semibold text-[clamp(1.25rem,1.05rem+0.9vw,1.75rem)] text-white leading-snug mb-8">
              Business should create something useful for people.”
            </p>
            {' '}
            <footer className="text-accent-bright font-display font-semibold text-[15px]">
              — Susshinder S.A.
            </footer>
            {' '}
          </blockquote>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* LOOKING AHEAD */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[760px] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Looking Ahead
            </span>
            {' '}
            <h2>
              Building a Better Future, One Useful Idea at a Time.
            </h2>
            {' '}
          </div>
          {' '}
          <div data-reveal="">
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-4">
              My goal is to contribute to businesses and technologies that create real value for people.
            </p>
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-8">
              I want to keep learning, keep building and keep exploring how technology, business and human understanding can come together to create a better future.
            </p>
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed mb-6">
              And wherever possible, I hope that journey contributes to:
            </p>
            {' '}
            <div className="bg-paper-sunken rounded-card px-7 py-8">
              {' '}
              <p className="statement-line mb-2">
                More usefulness.
              </p>
              {' '}
              <p className="statement-line mb-2">
                More connection.
              </p>
              {' '}
              <p className="statement-line text-accent">
                More peace.
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
      {/* CONNECT */}
      {' '}
      <section className="py-24 sm:py-28 lg:py-32 text-center bg-ink">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8" data-reveal="">
          {' '}
          <span className="eyebrow !text-accent-bright block mb-5">
            Connect
          </span>
          {' '}
          <h2 className="text-white cta-heading mb-5">
            Let's Connect
          </h2>
          {' '}
          <p className="text-[#9BA1A7] text-[17px] mb-8 max-w-[560px] mx-auto">
            I'm always interested in connecting with people who are passionate about:
          </p>
          {' '}
          <div className="flex flex-wrap gap-2.5 justify-center mb-10 max-w-[640px] mx-auto">
            {' '}
            <span className="chip chip-on-dark">
              Business
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Marketing
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Technology
            </span>
            {' '}
            <span className="chip chip-on-dark">
              AI
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Entrepreneurship
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Human-Centred Growth
            </span>
            {' '}
          </div>
          {' '}
          <p className="text-[#9BA1A7] text-[17px] mb-10 max-w-[560px] mx-auto">
            Have an idea, business challenge or simply want to exchange perspectives? Let's connect.
          </p>
          {' '}
          <div className="flex gap-4 justify-center flex-wrap mb-14">
            {' '}
            <a href="/contact/" className="btn btn-accent">
              Connect With Susshinder
            </a>
            {' '}
          </div>
          {' '}
          <div className="signature pt-10 border-t border-white/10 max-w-[520px] mx-auto">
            {' '}
            <div className="sig-name">
              Susshinder S.A.
            </div>
            {' '}
            <div className="sig-role">
              Chief Marketing Officer · Grow Spark Consulting
            </div>
            {' '}
            <div className="sig-line">
              People First. Growth Always.
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
