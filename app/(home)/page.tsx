import type { Metadata } from 'next';
import { DEFAULT_OG_IMAGE, ORG_ID, SITE_NAME, SITE_URL, WEBSITE_ID } from '@/lib/site';
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
import FooterCta from '@/components/layout/FooterCta';
import JsonLd from '@/components/seo/JsonLd';

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
    images: [DEFAULT_OG_IMAGE],
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

/**
 * The Organization block is the source page's, verbatim, plus an `@id` and the
 * logo; every value matches what the footer shows. WebSite names the site for
 * search results. No SearchAction: the site has no search.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      "name": "Grow Spark Consulting",
      "logo": `${SITE_URL}/logo/gsc-black.png`,
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
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      "name": SITE_NAME,
      "url": `${SITE_URL}/`,
      "inLanguage": "en",
      "publisher": { "@id": ORG_ID },
    },
  ],
} as const;

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
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
      <Leadership />
      {' '}
      <FooterCta />
      {' '}
    </main>
    </>
  );
}
