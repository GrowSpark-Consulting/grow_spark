import type { Metadata } from 'next';
import LandingHeader from '@/components/landing/LandingHeader';
import LandingFooter from '@/components/landing/LandingFooter';
import HeroSection from '@/components/landing/sections/HeroSection';
import CoversSection from '@/components/landing/sections/CoversSection';
import ConstraintsSection from '@/components/landing/sections/ConstraintsSection';
import BandSection from '@/components/landing/sections/BandSection';
import BookingSection from '@/components/landing/sections/BookingSection';
import OptionsSection from '@/components/landing/sections/OptionsSection';
import ProofSection from '@/components/landing/sections/ProofSection';
import FaqSection from '@/components/landing/sections/FaqSection';

/**
 * /growspark-transformation-framework/ — direct-response landing page.
 *
 * Layout, section order and interaction follow the reference audited in
 * docs/acquisition-workshop4b-ui-audit.md (§A, §B, §D). The reference's
 * founders slot is kept as a neutral gradient band (BandSection) with no
 * founder content. All copy is placeholder content held in
 * components/landing/content.ts; replace it there without touching layout.
 * /framework/ is untouched and stays the canonical methodology page.
 *
 * Server Component. The only client code is the lead form; the mobile
 * "Show all" on the proof grid is components/effects/showMore.ts.
 */

export const metadata: Metadata = {
  title: 'Grow Spark Transformation Framework | Grow Spark Consulting',
  description: 'Grow Spark Consulting — Transformation Framework.',
  // noindex while the page carries placeholder content. When the approved
  // copy lands: set index: true, and add the route to app/sitemap.ts (its
  // route→file lookup and app/__tests__/sitemap.test.ts assume (site), so both
  // need the (landing) group added — the sitemap test will fail until then).
  robots: { index: false, follow: true },
  alternates: { canonical: '/growspark-transformation-framework/' },
};

export default function Page() {
  return (
    <div className="lp">
      <LandingHeader />
      <main id="main">
        <HeroSection />
        <CoversSection />
        <ConstraintsSection />
        <BandSection />
        <BookingSection />
        <OptionsSection />
        <ProofSection />
        <FaqSection />
      </main>
      <LandingFooter />
    </div>
  );
}
