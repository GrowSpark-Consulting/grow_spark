import type { Metadata } from 'next';
import CaseStudy from '@/components/sections/CaseStudy';
import Challenges from '@/components/sections/Challenges';
import ExecSummary from '@/components/sections/ExecSummary';
import Framework from '@/components/sections/Framework';
import Hero from '@/components/sections/Hero';
import Industries from '@/components/sections/Industries';
import Insights from '@/components/sections/Insights';
import Leadership from '@/components/sections/Leadership';
import Outcomes from '@/components/sections/Outcomes';
import Pillars from '@/components/sections/Pillars';
import TrustStats from '@/components/sections/TrustStats';
import ValueStrip from '@/components/sections/ValueStrip';
import WhyUs from '@/components/sections/WhyUs';

/**
 * Transcribed from pages/index.html by scripts/html-to-tsx.py.
 * Element tree, classes, content and metadata are unchanged; only the
 * JSX-required attribute spellings differ from the source markup.
 */
export const metadata: Metadata = {
  title: "Grow Spark Consulting — Building Companies That Outperform",
  description: "Grow Spark Consulting partners with founders and leadership teams on AI automation, digital transformation and business strategy — turning growth ambition into measurable enterprise value.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Grow Spark Consulting",
    title: "Grow Spark Consulting — Building Companies That Outperform",
    description: "AI automation, digital transformation and business strategy for founders and leadership teams who refuse to settle for average.",
    url: "https://www.growsparkconsulting.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow Spark Consulting — Building Companies That Outperform",
    description: "AI automation, digital transformation and business strategy for founders and leadership teams who refuse to settle for average.",
  },
};

/** JSON-LD preserved verbatim from the source page. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Grow Spark Consulting",
  "url": "https://www.growsparkconsulting.com/",
  "email": "info@growsparkconsulting.com",
  "telephone": "+91-63814-61106",
  "description": "AI & digital transformation consultancy helping founders and leadership teams build companies that outperform their competition.",
  "areaServed": "Global",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Urapakkam",
    "addressRegion": "Chennai",
    "postalCode": "603211",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.linkedin.com/company/growsparkconsulting",
    "https://www.instagram.com/growsparkconsulting/"
  ]
} as const;

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <main id="main">
      {' '}
      <Hero />
      {' '}
      <ExecSummary />
      {' '}
      <TrustStats />
      {' '}
      <Challenges />
      {' '}
      <Outcomes />
      {' '}
      <Pillars />
      {' '}
      <Framework />
      {' '}
      <ValueStrip />
      {' '}
      <WhyUs />
      {' '}
      <Industries />
      {' '}
      <Insights />
      {' '}
      <CaseStudy />
      {' '}
      <Leadership />
      {' '}
    </main>
    </>
  );
}
