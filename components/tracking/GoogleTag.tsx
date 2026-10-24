import { GA_MEASUREMENT_ID } from '@/lib/site';
import { CONSENT_COOKIE, CONSENT_EVENT } from '@/lib/meta/shared';

/**
 * Google tag (gtag.js), with Consent Mode v2.
 *
 * Server Component rendering plain inline <script>s, not next/script: in the
 * App Router even strategy="beforeInteractive" only queues the code for Next's
 * runtime, whereas this has to sit in the raw server HTML so Search Console can
 * verify it and the consent default runs before gtag.js does anything.
 *
 * Every consent type starts denied. The stored gs_consent choice upgrades it on
 * load, and the event saveConsent() dispatches carries a change made on the
 * page — Accept, Decline or "Cookie preferences" — without a reload.
 *
 * `ref` on /payment/success/ is a booking id used as a lookup key, so it is
 * removed from page_location and page_referrer; every other parameter (UTMs
 * included) still reaches Google.
 */
const SNIPPET = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied' });
(function () {
  function update(value) {
    gtag('consent', 'update', { ad_storage: value, ad_user_data: value, ad_personalization: value, analytics_storage: value });
  }
  if (document.cookie.split('; ').indexOf(${JSON.stringify(`${CONSENT_COOKIE}=granted`)}) !== -1) update('granted');
  window.addEventListener(${JSON.stringify(CONSENT_EVENT)}, function (event) {
    if (event.detail === 'granted' || event.detail === 'denied') update(event.detail);
  });
  function strip(url) {
    try { var u = new URL(url); u.searchParams.delete('ref'); return u.toString(); } catch (e) { return url; }
  }
  var params = {};
  var pageLocation = strip(window.location.href);
  var referrer = strip(document.referrer);
  if (pageLocation !== window.location.href) params.page_location = pageLocation;
  if (referrer !== document.referrer) params.page_referrer = referrer;
  gtag('config', ${JSON.stringify(GA_MEASUREMENT_ID)}, params);
})();`;

export default function GoogleTag() {
  return (
    <>
      <script id="gtag-init" dangerouslySetInnerHTML={{ __html: SNIPPET }} />
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
    </>
  );
}
