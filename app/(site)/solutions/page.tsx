import type { Metadata } from 'next';
import Challenges from '@/components/sections/Challenges';
import Industries from '@/components/sections/Industries';
import SolutionsCta from '@/components/sections/SolutionsCta';
import SolutionsHero from '@/components/sections/SolutionsHero';
import SolutionsProcess from '@/components/sections/SolutionsProcess';

/**
 * Transcribed from pages/solutions/index.html by scripts/html-to-tsx.py.
 * Element tree, classes, content and metadata are unchanged; only the
 * JSX-required attribute spellings differ from the source markup.
 */
export const metadata: Metadata = {
  title: "Solutions — By Industry & Business Challenge | Grow Spark Consulting",
  description: "Explore Grow Spark solutions by industry — manufacturing, healthcare, retail, education and more — or by the business challenge you're solving today, from stalled growth to leadership alignment.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/solutions/" },
  openGraph: {
    type: "website",
    siteName: "Grow Spark Consulting",
    title: "Solutions — By Industry & Business Challenge | Grow Spark Consulting",
    description: "Explore Grow Spark solutions by industry or by the business challenge you're solving today — one consultancy, mapped to your situation.",
    url: "https://www.growsparkconsulting.com/solutions/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions — By Industry & Business Challenge | Grow Spark Consulting",
    description: "Explore Grow Spark solutions by industry or by the business challenge you're solving today — one consultancy, mapped to your situation.",
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
              Solutions
            </span>
          </li>
          {' '}
        </ol>
        {' '}
      </nav>
      {' '}
      <SolutionsHero />
      {' '}
      <Industries />
      {' '}
      <Challenges />
      {' '}
      <SolutionsProcess />
      {' '}
      <SolutionsCta />
      {' '}
    </main>
  );
}
