import type { Metadata } from 'next';
import CaseStudiesCta from '@/components/sections/CaseStudiesCta';
import CaseStudiesHero from '@/components/sections/CaseStudiesHero';
import CaseStudiesStandard from '@/components/sections/CaseStudiesStandard';
import CaseStudy from '@/components/sections/CaseStudy';

/**
 * Transcribed from pages/case-studies/index.html by scripts/html-to-tsx.py.
 * Element tree, classes, content and metadata are unchanged; only the
 * JSX-required attribute spellings differ from the source markup.
 */
export const metadata: Metadata = {
  title: "Our Work — How We Document Transformation | Grow Spark Consulting",
  description: "How Grow Spark documents every engagement — the real starting point, the specific decisions made, the team who executed, and a verifiable result. Our work published as engagements complete.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/case-studies/" },
  openGraph: {
    type: "website",
    siteName: "Grow Spark Consulting",
    title: "Our Work — How We Document Transformation | Grow Spark Consulting",
    description: "How Grow Spark documents every engagement, and what it takes for a result to get published here.",
    url: "https://www.growsparkconsulting.com/case-studies/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work — How We Document Transformation | Grow Spark Consulting",
    description: "How Grow Spark documents every engagement, and what it takes for a result to get published here.",
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
              Our Work
            </span>
          </li>
          {' '}
        </ol>
        {' '}
      </nav>
      {' '}
      <CaseStudiesHero />
      {' '}
      <CaseStudy />
      {' '}
      <CaseStudiesStandard />
      {' '}
      <CaseStudiesCta />
      {' '}
    </main>
  );
}
