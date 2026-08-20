import type { Metadata } from 'next';
import AboutBeliefs from '@/components/sections/AboutBeliefs';
import AboutCta from '@/components/sections/AboutCta';
import AboutExpertise from '@/components/sections/AboutExpertise';
import AboutHero from '@/components/sections/AboutHero';
import AboutMission from '@/components/sections/AboutMission';
import Framework from '@/components/sections/Framework';
import Leadership from '@/components/sections/Leadership';
import WhyUs from '@/components/sections/WhyUs';

/**
 * Transcribed from pages/about/index.html by scripts/html-to-tsx.py.
 * Element tree, classes, content and metadata are unchanged; only the
 * JSX-required attribute spellings differ from the source markup.
 */
export const metadata: Metadata = {
  title: "About — A Modern AI & Digital Transformation Consultancy | Grow Spark Consulting",
  description: "Grow Spark Consulting partners with founders and leadership teams on strategy, AI and software delivery — one accountable partner from decision to implementation.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/about/" },
  openGraph: {
    type: "website",
    siteName: "Grow Spark Consulting",
    title: "About — A Modern AI & Digital Transformation Consultancy | Grow Spark Consulting",
    description: "Grow Spark Consulting partners with founders and leadership teams on strategy, AI and software delivery — one accountable partner from decision to implementation.",
    url: "https://www.growsparkconsulting.com/about/",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — A Modern AI & Digital Transformation Consultancy | Grow Spark Consulting",
    description: "Grow Spark Consulting partners with founders and leadership teams on strategy, AI and software delivery — one accountable partner from decision to implementation.",
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
              About
            </span>
          </li>
          {' '}
        </ol>
        {' '}
      </nav>
      {' '}
      <AboutHero />
      {' '}
      <AboutMission />
      {' '}
      <AboutBeliefs />
      {' '}
      <Framework />
      {' '}
      <Leadership />
      {' '}
      <WhyUs />
      {' '}
      <AboutExpertise />
      {' '}
      <AboutCta />
      {' '}
    </main>
  );
}
