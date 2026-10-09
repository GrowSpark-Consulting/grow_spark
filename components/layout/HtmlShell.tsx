import type { ReactNode } from 'react';
import { FONT_HREF_DEFAULT, GTM_ID } from '@/lib/site';
import Nav from './Nav';
import Footer from './Footer';
import SiteEffects from '@/components/effects/SiteEffects';
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
  siteChrome = true,
}: {
  children: ReactNode;
  fontHref?: string;
  heroTheme?: boolean;
  /**
   * Render the global <Nav /> and <Footer />. The standalone landing layout,
   * app/(landing)/, turns this off and supplies its own minimal header and
   * footer; every other route keeps the default.
   */
  siteChrome?: boolean;
}) {
  return (
    <html lang="en">
      <head>
        {/*
          Google Tag Manager. Lives here rather than in a route group because
          all three root layouts — (home), (site) and (landing) — render this
          shell, so it loads once on every route. A plain inline <script>, not
          next/script: in the App Router even strategy="beforeInteractive"
          only queues the code on self.__next_s for Next's runtime to run once
          its chunks load. Inline, it runs as the parser reaches it, the way
          Google's install instructions require; gtm.js itself loads async.
        */}
        <script
          id="gtm"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
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
        {/* Google Tag Manager (noscript) — must stay the first child of <body>. */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/*
          Every one of the 27 pages includes components/nav.html then its own
          <main>, then components/footer.html. <main> stays with the page rather
          than moving here: the homepage renders it unclassed for its full-bleed
          hero, while the other 26 add pt-24 to clear the fixed header.
        */}
        {siteChrome && <Nav />}
        {children}
        {siteChrome && <Footer />}
        {/*
          Renders nothing — it is the client entry point that starts Lenis,
          GSAP/ScrollTrigger, the scroll animations and the tab behaviour, the
          way assets/js/main.js did. Mounted last so the markup it queries has
          already been rendered.
        */}
        <SiteEffects />
      </body>
    </html>
  );
}
