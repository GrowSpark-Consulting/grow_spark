import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

/**
 * The wider team, as distinct from /leadership/: four people, one of whom
 * (Raja) is also a leader and appears on both pages with identical content —
 * same photo, bio and "Leads" line — so he isn't described two different
 * ways depending on which page a visitor lands on.
 *
 * The other three — Dhatri, Nithisha and Shaaz — have real photos, framed
 * and flattened to the same 1200x1200 headshot treatment as everyone else
 * on this page, but no confirmed title or bio yet, so those two fields
 * stay bracketed pending text rather than invented. Same convention
 * /leadership/ used for Raja before his profile was filled in. Fill in
 * each card's title and bio in place once they're supplied, and swap
 * `is-pending` for a real `<a>` if/when each person gets their own
 * profile page — nothing else needs to change.
 *
 * Server Component: no behaviour of its own.
 */
export const metadata: Metadata = {
  title: "Our Team | Grow Spark Consulting",
  description: "The people behind Grow Spark Consulting — the team responsible for how we understand, build and deliver for the businesses we work with.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/our-team/" },
  openGraph: {
    type: "website",
    siteName: "Grow Spark Consulting",
    title: "Our Team | Grow Spark Consulting",
    description: "The people behind Grow Spark Consulting.",
    url: "https://www.growsparkconsulting.com/our-team/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | Grow Spark Consulting",
    description: "The people behind Grow Spark Consulting.",
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
              Our Team
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
              Our Team
            </span>
            {' '}
            <h1 className="page-hero-heading mb-8 text-balance">
              The People Behind Grow Spark.
            </h1>
            {' '}
            <p className="text-[17px] text-ink-soft leading-relaxed max-w-[660px] mx-auto mb-4">
              Grow Spark exists because too many good businesses are held back by fragmented advice, disconnected systems and strategy that never gets implemented.
            </p>
            {' '}
            <p className="statement-line">
              We combine strategic clarity with the technology and execution to make transformation real.
            </p>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* TEAM GRID */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" data-reveal="">
            {' '}
            <div className="detail-card">
              {' '}
              <div className="lead-avatar overflow-hidden">
                <img
                  src="/raja.png"
                  alt="Raja V., Co-Founder of Grow Spark Consulting"
                  width={1200}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
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
            <div className="detail-card">
              {' '}
              <div className="lead-avatar overflow-hidden">
                <img
                  src="/dhatri.jpg"
                  alt="Dhatri, part of the Grow Spark Consulting team"
                  width={1200}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {' '}
              <h3>
                Dhatri
              </h3>
              {' '}
              <p className="!text-muted !font-medium mb-3">
                [Team Member Title]
              </p>
              {' '}
              <p className="mb-5">
                [Bio to be added — verified details pending.]
              </p>
              {' '}
              <span className="inline-link is-pending">
                View Profile {' '}
                <ArrowRight className="w-4 h-4" />
              </span>
              {' '}
            </div>
            {' '}
            <div className="detail-card">
              {' '}
              <div className="lead-avatar overflow-hidden">
                <img
                  src="/nithisha.jpg"
                  alt="Nithisha, part of the Grow Spark Consulting team"
                  width={1200}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {' '}
              <h3>
                Nithisha
              </h3>
              {' '}
              <p className="!text-muted !font-medium mb-3">
                [Team Member Title]
              </p>
              {' '}
              <p className="mb-5">
                [Bio to be added — verified details pending.]
              </p>
              {' '}
              <span className="inline-link is-pending">
                View Profile {' '}
                <ArrowRight className="w-4 h-4" />
              </span>
              {' '}
            </div>
            {' '}
            <div className="detail-card">
              {' '}
              <div className="lead-avatar overflow-hidden">
                <img
                  src="/shaaz.jpg"
                  alt="Shaaz, part of the Grow Spark Consulting team"
                  width={1200}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {' '}
              <h3>
                Shaaz
              </h3>
              {' '}
              <p className="!text-muted !font-medium mb-3">
                [Team Member Title]
              </p>
              {' '}
              <p className="mb-5">
                [Bio to be added — verified details pending.]
              </p>
              {' '}
              <span className="inline-link is-pending">
                View Profile {' '}
                <ArrowRight className="w-4 h-4" />
              </span>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[16px] text-muted max-w-[640px] mx-auto mt-10" data-reveal="">
            Additional team profiles will be published once names, titles and responsibilities are confirmed.
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
    </main>
  );
}
