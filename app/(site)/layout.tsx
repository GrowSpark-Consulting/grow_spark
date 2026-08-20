import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import HtmlShell from '@/components/layout/HtmlShell';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: { icon: [{ url: '/icons/favicon.svg', type: 'image/svg+xml' }] },
};

export const viewport: Viewport = { themeColor: '#14171A' };

/** Root layout for the other 26 routes — identical shell, no hero theme flag. */
export default function SiteRootLayout({ children }: { children: ReactNode }) {
  return <HtmlShell>{children}</HtmlShell>;
}
