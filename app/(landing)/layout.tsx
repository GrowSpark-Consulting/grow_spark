import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import HtmlShell from '@/components/layout/HtmlShell';
import { SITE_URL, FONT_HREF_LANDING } from '@/lib/site';
import '@/styles/landing.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: { icon: [{ url: '/icons/favicon.svg', type: 'image/svg+xml' }] },
};

export const viewport: Viewport = { themeColor: '#121524' };

/**
 * Root layout for standalone campaign landing pages.
 *
 * Same <html>/<body> shell as the other two groups, minus the global Nav and
 * Footer: a landing page carries its own minimal header and footer so the
 * only way forward is its own call to action. landing.css is imported here
 * rather than from app/globals.css so it ships with these routes only.
 */
export default function LandingRootLayout({ children }: { children: ReactNode }) {
  return (
    <HtmlShell fontHref={FONT_HREF_LANDING} siteChrome={false}>
      {children}
    </HtmlShell>
  );
}
