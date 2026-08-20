import type { Metadata } from 'next';

/**
 * Metadata transcribed verbatim from pages/index.html. Titles/descriptions were
 * extracted programmatically from the source HTML rather than retyped, so the
 * em dashes and wording match the live site exactly.
 */
export const metadata: Metadata = {
  title: "Grow Spark Consulting — Building Companies That Outperform",
  description: "Grow Spark Consulting partners with founders and leadership teams on AI automation, digital transformation and business strategy — turning growth ambition into measurable enterprise value.",
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: "Grow Spark Consulting",
    title: "Grow Spark Consulting — Building Companies That Outperform",
    description: "AI automation, digital transformation and business strategy for founders and leadership teams who refuse to settle for average.",
    url: "https://www.growsparkconsulting.com/",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Grow Spark Consulting — Building Companies That Outperform",
    description: "AI automation, digital transformation and business strategy for founders and leadership teams who refuse to settle for average.",
  },
};

/** Organization JSON-LD, preserved byte-for-byte from the existing homepage. */
const organizationLd = {
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

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      {/* PHASE 6 — section partials from sections/*.html are migrated here. */}
      <main id="main" />
    </>
  );
}
