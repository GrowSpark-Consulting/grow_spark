import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import HtmlShell from '@/components/layout/HtmlShell';
import { SITE_URL, FONT_HREF_HOME } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: { icon: [{ url: '/icons/favicon.svg', type: 'image/svg+xml' }] },
};

export const viewport: Viewport = { themeColor: '#14171A' };

/** Root layout for "/" only — the one route whose <body> carries data-hero-theme. */
export default function HomeRootLayout({ children }: { children: ReactNode }) {
  return (
    <HtmlShell fontHref={FONT_HREF_HOME} heroTheme>
      {children}
    </HtmlShell>
  );
}
