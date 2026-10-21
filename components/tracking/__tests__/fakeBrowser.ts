/**
 * Just enough of `window` and `document` for the consent and Pixel modules,
 * so they can be tested in Vitest's node environment without a DOM library.
 *
 * The cookie jar follows the one rule that matters here: a cookie is keyed by
 * name *and* domain, so a deletion only removes it when it names the same
 * Domain the cookie was set with — exactly the case clearMetaCookies exists
 * for, since fbevents.js sets _fbp/_fbc on the registrable domain.
 *
 * Nothing here ever downloads fbevents.js: an appended <script> is only
 * recorded, so every fbq() call stays on the stub's queue, where tests read it.
 */

type CookieRecord = { name: string; value: string; domain: string | null };
type Listener = (event: { target: unknown }) => void;

export type FakeScript = { tagName: string; src: string; async: boolean };

export function installFakeBrowser({
  protocol = 'https:',
  hostname = 'www.growsparkconsulting.com',
}: { protocol?: string; hostname?: string } = {}) {
  const cookies: CookieRecord[] = [];
  const cookieWrites: string[] = [];
  const scripts: FakeScript[] = [];
  const listeners = new Map<string, Set<Listener>>();

  const fakeDocument = {
    get cookie() {
      return cookies.map((c) => `${c.name}=${c.value}`).join('; ');
    },
    set cookie(raw: string) {
      cookieWrites.push(raw);
      const [pair = '', ...attributes] = raw.split(';').map((part) => part.trim());
      const eq = pair.indexOf('=');
      const name = pair.slice(0, eq);
      const value = pair.slice(eq + 1);
      const attribute = (key: string) =>
        attributes
          .find((a) => a.toLowerCase().startsWith(`${key.toLowerCase()}=`))
          ?.slice(key.length + 1) ?? null;
      const domain = attribute('Domain')?.replace(/^\./, '') ?? null;
      const index = cookies.findIndex((c) => c.name === name && c.domain === domain);
      if (index !== -1) cookies.splice(index, 1);
      if (attribute('Max-Age') !== '0') cookies.push({ name, value, domain });
    },
    createElement: (tag: string): FakeScript => ({ tagName: tag.toUpperCase(), src: '', async: false }),
    head: {
      appendChild: (element: FakeScript) => {
        scripts.push(element);
        return element;
      },
    },
    addEventListener: (type: string, listener: Listener) => {
      if (!listeners.has(type)) listeners.set(type, new Set());
      listeners.get(type)!.add(listener);
    },
    removeEventListener: (type: string, listener: Listener) => {
      listeners.get(type)?.delete(listener);
    },
  };

  const fakeWindow: Record<string, unknown> = {
    location: { protocol, hostname, pathname: '/' },
  };

  Object.assign(globalThis, { window: fakeWindow, document: fakeDocument });

  return {
    cookieWrites,
    scripts,
    /** A cookie as some other script (fbevents.js) would have set it. */
    seedCookie(name: string, value: string, domain: string | null = null) {
      cookies.push({ name, value, domain });
    },
    cookieNames: () => cookies.map((c) => c.name),
    /** Every fbq(...) call so far, in order, as queued on Meta's stub. */
    fbqCalls: (): unknown[][] => (fakeWindow.fbq as { queue?: unknown[][] } | undefined)?.queue ?? [],
    click(target: unknown) {
      for (const listener of listeners.get('click') ?? []) listener({ target });
    },
    listenerCount: (type: string) => listeners.get(type)?.size ?? 0,
    uninstall() {
      delete (globalThis as Record<string, unknown>).window;
      delete (globalThis as Record<string, unknown>).document;
    },
  };
}

/** An <a href> as `closest('a[href]')` would find it. */
export function fakeLink(href: string) {
  const link = {
    getAttribute: (name: string) => (name === 'href' ? href : null),
    closest: (selector: string) => (selector === 'a[href]' ? link : null),
  };
  return link;
}
