import type { Metadata } from 'next';
import ContactCta from '@/components/sections/ContactCta';
import ContactForm from '@/components/sections/ContactForm';
import ContactHero from '@/components/sections/ContactHero';
import ContactNextSteps from '@/components/sections/ContactNextSteps';
import ContactOptions from '@/components/sections/ContactOptions';
import Faq from '@/components/sections/Faq';

/**
 * Transcribed from pages/contact/index.html by scripts/html-to-tsx.py.
 * Element tree, classes, content and metadata are unchanged; only the
 * JSX-required attribute spellings differ from the source markup.
 */
export const metadata: Metadata = {
  title: "Contact — Book a Strategy Session | Grow Spark Consulting",
  description: "Talk to Grow Spark Consulting about your AI and digital transformation challenge. Request a strategy session or reach us directly — a founder or lead consultant reviews every message personally.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/contact/" },
  openGraph: {
    type: "website",
    siteName: "Grow Spark Consulting",
    title: "Contact — Book a Strategy Session | Grow Spark Consulting",
    description: "Talk to Grow Spark Consulting about your AI and digital transformation challenge. Request a strategy session or reach us directly.",
    url: "https://www.growsparkconsulting.com/contact/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Book a Strategy Session | Grow Spark Consulting",
    description: "Talk to Grow Spark Consulting about your AI and digital transformation challenge. Request a strategy session or reach us directly.",
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
              Contact
            </span>
          </li>
          {' '}
        </ol>
        {' '}
      </nav>
      {' '}
      <ContactHero />
      {' '}
      <ContactOptions />
      {' '}
      <ContactForm />
      {' '}
      <ContactNextSteps />
      {' '}
      <Faq />
      {' '}
      <ContactCta />
      {' '}
    </main>
  );
}
