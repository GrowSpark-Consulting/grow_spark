import type { ReactNode } from 'react';
import { FONT_HREF_DEFAULT } from '@/lib/site';
import '@/app/globals.css';

/**
 * Shared <html>/<body> shell.
 *
 * The App Router renders <body> in a root layout, but the existing site puts
 * `data-hero-theme="dark"` on <body> for the homepage only — an attribute 12
 * rules in base.css key off to switch the entire header between its dark
 * (over-video) and light treatments. Rather than set that attribute from client
 * JS (which would flash the light header on first paint) the app uses two root
 * layouts via route groups, (home) and (site), and both delegate here so the
 * markup stays identical apart from that one attribute.
 */
export default function HtmlShell({
  children,
  fontHref = FONT_HREF_DEFAULT,
  heroTheme = false,
}: {
  children: ReactNode;
  fontHref?: string;
  heroTheme?: boolean;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/*
          Per-page font URL. The homepage requests Manrope 300 alongside Open
          Sans because --font-hero uses Manrope and only the homepage has a
          hero; the other 26 pages request Open Sans alone. Serving one shared
          URL would push an unused font onto those 26 pages.
        */}
        <link rel="stylesheet" href={fontHref} precedence="default" />
      </head>
      <body
        className="bg-paper text-ink"
        {...(heroTheme ? { 'data-hero-theme': 'dark' } : {})}
      >
        {children}
      </body>
    </html>
  );
}
