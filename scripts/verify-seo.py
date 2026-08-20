"""
Phase 9 validation: SEO metadata, forms and URL behaviour, checked against the
HTML that is actually shipped.

This deliberately uses no browser and runs no JavaScript. It fetches the raw
bytes each production server returns and parses them, because that is what a
crawler consumes — a correct Next.js Metadata object in the source proves
nothing if it does not survive into the response body. Both sides are
production artifacts: the original is `vite preview` serving dist/, the
migration is `next start`.

  python scripts/verify-seo.py <originalBase> <nextBase>
"""

from __future__ import annotations

import json
import re
import sys
import urllib.request
from html.parser import HTMLParser
from urllib.error import HTTPError

ORIGINAL = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:4173'
NEXT = sys.argv[2] if len(sys.argv) > 2 else 'http://localhost:3000'

ROUTES = [
    '/', '/about/', '/contact/', '/solutions/', '/case-studies/',
    '/alliances/', '/careers/', '/founder/', '/framework/', '/industries/',
    '/leadership/', '/strategy/',
    '/rnd/', '/rnd/ai-value-gap/', '/rnd/before-the-restaurant/',
    '/rnd/founder-dependency-index/', '/rnd/margin-architecture/',
    '/rnd/revenue-without-profit/',
    '/solutions/customer-experience/', '/solutions/growth-has-stalled/',
    '/solutions/launch-new-business/', '/solutions/leadership-alignment/',
    '/solutions/modernise-your-business/', '/solutions/operations-are-inefficient/',
    '/solutions/premium-brand/', '/solutions/profitability/',
    '/solutions/scalable-systems/',
]

CANONICAL_HOST = 'https://www.growsparkconsulting.com'

failures: list[str] = []
notes: list[str] = []
documented: list[tuple] = []


def viewport_directives(value):
    """'width=device-width, initial-scale=1.0' -> {'width': 'device-width', 'initial-scale': 1.0}"""
    out = {}
    for part in (value or '').split(','):
        part = part.strip()
        if not part or '=' not in part:
            continue
        k, v = part.split('=', 1)
        v = v.strip()
        try:
            out[k.strip()] = float(v)
        except ValueError:
            out[k.strip()] = v
    return out


def fail(route: str, msg: str):
    failures.append(f'{route}: {msg}')


class PageParser(HTMLParser):
    """Collects only what Phase 9 asserts on, straight from the response body."""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.title = None
        self._in_title = False
        self.metas: dict[str, str] = {}
        self.links: list[tuple[str, str, str]] = []   # (rel, href, type)
        self.jsonld: list[str] = []
        self._in_ld = False
        self._ld_buf: list[str] = []
        self.headings: list[tuple[str, str]] = []
        self._heading_tag = None
        self._heading_buf: list[str] = []
        self.images: list[tuple[str, str | None]] = []
        self.forms: list[dict] = []
        self._form = None
        self.labels: list[tuple[str, str]] = []
        self._label_for = None
        self._label_buf: list[str] = []
        self.body_scripts_src: list[str] = []
        self.inline_scripts: list[str] = []
        self._in_script = False
        self._script_buf: list[str] = []

    # -- tags -------------------------------------------------------------
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'title':
            self._in_title = True
        elif tag == 'meta':
            key = a.get('name') or a.get('property') or a.get('http-equiv')
            if key:
                self.metas[key] = a.get('content', '')
            if 'charset' in a:
                self.metas['charset'] = a['charset']
        elif tag == 'link':
            self.links.append((a.get('rel', ''), a.get('href', ''), a.get('type', '')))
        elif tag == 'script':
            self._in_script = True
            self._script_buf = []
            if a.get('type') == 'application/ld+json':
                self._in_ld = True
                self._ld_buf = []
            if a.get('src'):
                self.body_scripts_src.append(a['src'])
        elif tag in ('h1', 'h2', 'h3', 'h4', 'h5', 'h6'):
            self._heading_tag = tag
            self._heading_buf = []
        elif tag == 'img':
            self.images.append((a.get('src', ''), a.get('alt')))
        elif tag == 'form':
            self._form = {
                'action': a.get('action'),
                'method': (a.get('method') or '').lower(),
                'fields': [],
            }
        elif tag in ('input', 'textarea', 'select') and self._form is not None:
            self._form['fields'].append(
                '|'.join([
                    tag,
                    a.get('type', ''),
                    a.get('name', ''),
                    a.get('id', ''),
                    'required' if 'required' in a else '',
                    a.get('placeholder', ''),
                    a.get('autocomplete', ''),
                    a.get('rows', ''),
                ])
            )
        elif tag == 'label':
            self._label_for = a.get('for', '')
            self._label_buf = []

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)

    def handle_endtag(self, tag):
        if tag == 'title':
            self._in_title = False
        elif tag == 'script':
            if self._in_ld:
                self.jsonld.append(''.join(self._ld_buf).strip())
                self._in_ld = False
            if self._script_buf:
                self.inline_scripts.append(''.join(self._script_buf))
            self._in_script = False
        elif tag in ('h1', 'h2', 'h3', 'h4', 'h5', 'h6') and self._heading_tag == tag:
            text = re.sub(r'\s+', ' ', ''.join(self._heading_buf)).strip()
            self.headings.append((tag, text))
            self._heading_tag = None
        elif tag == 'form' and self._form is not None:
            self.forms.append(self._form)
            self._form = None
        elif tag == 'label' and self._label_for is not None:
            text = re.sub(r'\s+', ' ', ''.join(self._label_buf)).strip()
            self.labels.append((self._label_for, text))
            self._label_for = None

    def handle_data(self, data):
        if self._in_title:
            self.title = (self.title or '') + data
        if self._in_ld:
            self._ld_buf.append(data)
        if self._in_script:
            self._script_buf.append(data)
        if self._heading_tag:
            self._heading_buf.append(data)
        if self._label_for is not None:
            self._label_buf.append(data)


def fetch(url: str) -> tuple[int, str, dict]:
    req = urllib.request.Request(url, headers={'User-Agent': 'phase9-validator'})
    try:
        with urllib.request.urlopen(req) as r:
            return r.status, r.read().decode('utf-8', 'replace'), dict(r.headers)
    except HTTPError as e:
        return e.code, e.read().decode('utf-8', 'replace'), dict(e.headers)


def parse(html: str) -> PageParser:
    p = PageParser()
    p.feed(html)
    p.close()
    return p


def rel_of(links, want, type_hint=None):
    for rel, href, typ in links:
        if want in rel.split() and (type_hint is None or typ == type_hint):
            return href
    return None


print('=' * 78)
print('1. METADATA IN SHIPPED HTML  (no browser, no JS — raw response bodies)')
print('=' * 78)

META_KEYS = [
    'description', 'robots', 'og:type', 'og:site_name', 'og:title',
    'og:description', 'og:url', 'twitter:card', 'twitter:title',
    'twitter:description', 'theme-color', 'viewport',
]

pass_count = 0
for route in ROUTES:
    _, ohtml, _ = fetch(ORIGINAL + route)
    _, nhtml, _ = fetch(NEXT + route)
    o, n = parse(ohtml), parse(nhtml)
    issues = []

    if (o.title or '').strip() != (n.title or '').strip():
        issues.append(f'title\n        orig: {o.title!r}\n        next: {n.title!r}')

    for k in META_KEYS:
        ov, nv = o.metas.get(k), n.metas.get(k)
        if ov == nv:
            continue
        if k == 'viewport' and viewport_directives(ov) == viewport_directives(nv):
            # Compared as directives, not as a string. The source writes
            # initial-scale=1.0; Next's Metadata API types initialScale as a
            # number, so it can only ever serialise as 1. Identical per spec
            # and in every browser. Recorded as a documented difference below
            # rather than silently normalised away.
            documented.append((route, 'viewport', ov, nv))
            continue
        issues.append(f'meta[{k}]\n        orig: {ov!r}\n        next: {nv!r}')

    if o.metas.get('charset', '').lower() != n.metas.get('charset', '').lower():
        issues.append(f"charset {o.metas.get('charset')!r} -> {n.metas.get('charset')!r}")

    ocanon, ncanon = rel_of(o.links, 'canonical'), rel_of(n.links, 'canonical')
    if ocanon != ncanon:
        issues.append(f'canonical\n        orig: {ocanon}\n        next: {ncanon}')
    if ncanon != f'{CANONICAL_HOST}{route}':
        issues.append(f'canonical is not {CANONICAL_HOST}{route} (got {ncanon})')

    oicon, nicon = rel_of(o.links, 'icon'), rel_of(n.links, 'icon')
    if not nicon:
        issues.append('no favicon link in shipped HTML')
    elif (oicon or '').split('/')[-1].split('-')[0] != (nicon or '').split('/')[-1].split('-')[0]:
        notes.append(f'{route}: favicon href {oicon} -> {nicon} (hashed vs public path)')

    if [h for h in o.headings] != [h for h in n.headings]:
        omap = o.headings
        nmap = n.headings
        first = next((i for i in range(max(len(omap), len(nmap)))
                      if (omap[i] if i < len(omap) else None) != (nmap[i] if i < len(nmap) else None)), 0)
        issues.append(
            f'heading structure differs at #{first}\n'
            f'        orig: {omap[first] if first < len(omap) else None}\n'
            f'        next: {nmap[first] if first < len(nmap) else None}\n'
            f'        counts {len(omap)} -> {len(nmap)}'
        )

    oalt = [alt for _, alt in o.images]
    nalt = [alt for _, alt in n.images]
    if oalt != nalt:
        issues.append(f'img alt attributes differ\n        orig: {oalt}\n        next: {nalt}')

    old = [json.dumps(json.loads(b), sort_keys=True) for b in o.jsonld]
    nld = [json.dumps(json.loads(b), sort_keys=True) for b in n.jsonld]
    if old != nld:
        issues.append(f'JSON-LD differs\n        orig: {old}\n        next: {nld}')

    if issues:
        print(f'  FAIL  {route}')
        for i in issues:
            print(f'      - {i}')
            fail(route, i.split(chr(10))[0])
    else:
        pass_count += 1
        print(f'  PASS  {route}  (title, desc, robots, canonical, 5 OG, 3 TW, favicon, '
              f'{len(n.headings)} headings, {len(n.images)} imgs, {len(n.jsonld)} JSON-LD)')

print(f'\n  {pass_count}/{len(ROUTES)} routes match on shipped metadata.')


print()
print('=' * 78)
print('2. FORMS  (markup equivalence + preserved 404 endpoint behaviour)')
print('=' * 78)

FORM_ROUTES = ['/contact/', '/careers/', '/strategy/']
EXPECTED_ENDPOINTS = {
    '/api/contact', '/api/careers-application', '/api/strategy-session',
    '/api/growth-intensive', '/api/engagement-application',
}
seen_endpoints = set()

for route in FORM_ROUTES:
    _, ohtml, _ = fetch(ORIGINAL + route)
    _, nhtml, _ = fetch(NEXT + route)
    o, n = parse(ohtml), parse(nhtml)
    issues = []

    if len(o.forms) != len(n.forms):
        issues.append(f'form count {len(o.forms)} -> {len(n.forms)}')
    for i, (of, nf) in enumerate(zip(o.forms, n.forms)):
        if of['action'] != nf['action']:
            issues.append(f'form[{i}] action {of["action"]} -> {nf["action"]}')
        if of['method'] != nf['method']:
            issues.append(f'form[{i}] method {of["method"]} -> {nf["method"]}')
        if of['fields'] != nf['fields']:
            for a, b in zip(of['fields'], nf['fields']):
                if a != b:
                    issues.append(f'form[{i}] field\n        orig: {a}\n        next: {b}')
            if len(of['fields']) != len(nf['fields']):
                issues.append(f'form[{i}] field count {len(of["fields"])} -> {len(nf["fields"])}')
        seen_endpoints.add(nf['action'])

    if o.labels != n.labels:
        issues.append(f'label/for associations differ ({len(o.labels)} -> {len(n.labels)})')

    if issues:
        for i in issues:
            print(f'  FAIL  {route} - {i}')
            fail(route, i.split(chr(10))[0])
    else:
        total_fields = sum(len(f['fields']) for f in n.forms)
        print(f'  PASS  {route}  ({len(n.forms)} form(s), {total_fields} fields, '
              f'{len(n.labels)} labels — action/method/name/id/required/placeholder/autocomplete all equal)')

missing = EXPECTED_ENDPOINTS - seen_endpoints
extra = seen_endpoints - EXPECTED_ENDPOINTS
if missing:
    print(f'  FAIL  expected endpoints not found in migrated markup: {sorted(missing)}')
    fail('forms', f'missing endpoints {sorted(missing)}')
if extra:
    print(f'  FAIL  unexpected form endpoints introduced: {sorted(extra)}')
    fail('forms', f'unexpected endpoints {sorted(extra)}')
if not missing and not extra:
    print(f'  PASS  exactly the 5 original endpoints present, none added')

print('\n  Endpoint behaviour (must remain 404 — no route handlers created):')
print('  NOTE  `vite preview` answers unknown paths with the SPA fallback, so the')
print('        original returns 200 + homepage HTML locally. That is a preview-server')
print('        artifact, not deployed behaviour: dist/ contains no api/ directory and')
print('        vercel.json declares no rewrites or functions, so /api/* 404s in')
print('        production. 404 from Next is therefore the faithful result.')
for ep in sorted(EXPECTED_ENDPOINTS):
    ostatus, obody, _ = fetch(ORIGINAL + ep)
    nstatus, _, _ = fetch(NEXT + ep)
    ok = nstatus == 404
    if not ok:
        fail('forms', f'{ep} returned {nstatus}, expected 404')
    fallback = ' (preview SPA fallback)' if ostatus == 200 and '<!doctype html>' in obody[:40].lower() else ''
    print(f'  {"PASS" if ok else "FAIL"}  {ep:<34} next {nstatus}   [orig local {ostatus}{fallback}]')


print()
print('=' * 78)
print('3. URL BEHAVIOUR  (/route/ = 200, /route = 308 -> /route/)')
print('=' * 78)


def raw_status(url):
    """No redirect following — the redirect itself is what is under test."""
    class NoRedirect(urllib.request.HTTPRedirectHandler):
        def redirect_request(self, *a, **k):
            return None
    opener = urllib.request.build_opener(NoRedirect)
    try:
        with opener.open(urllib.request.Request(url, headers={'User-Agent': 'phase9'})) as r:
            return r.status, r.headers.get('Location')
    except HTTPError as e:
        return e.code, e.headers.get('Location')


bad = 0
for route in ROUTES:
    s_slash, _ = raw_status(NEXT + route)
    if route == '/':
        ok = s_slash == 200
        if not ok:
            bad += 1
            fail(route, f'root returned {s_slash}')
        continue
    noslash = route.rstrip('/')
    s_no, loc = raw_status(NEXT + noslash)
    ok = s_slash == 200 and s_no == 308 and (loc or '').endswith(route)
    if not ok:
        bad += 1
        fail(route, f'{route}={s_slash}, {noslash}={s_no} -> {loc}')
        print(f'  FAIL  {route}: /route/={s_slash}  /route={s_no} -> {loc}')
print(f'  {len(ROUTES) - bad}/{len(ROUTES)} routes: /route/ = 200 and /route = 308 -> /route/')


print()
print('=' * 78)
print('4. SECRETS EXPOSURE  (shipped HTML + every client JS chunk)')
print('=' * 78)

SECRET_PATTERNS = [
    (r'NEXT_PUBLIC_[A-Z0-9_]+', 'NEXT_PUBLIC_* variable'),
    (r'rzp_(live|test)_[A-Za-z0-9]+', 'Razorpay key id'),
    (r'\bkey_secret\b', 'Razorpay key_secret'),
    (r'sk_(live|test)_[A-Za-z0-9]{8,}', 'secret key'),
    (r'AIza[0-9A-Za-z_\-]{20,}', 'Google API key'),
    (r'AKIA[0-9A-Z]{16}', 'AWS access key id'),
    (r'ghp_[A-Za-z0-9]{20,}', 'GitHub token'),
    (r'-----BEGIN [A-Z ]*PRIVATE KEY-----', 'private key'),
    (r'["\']?(api[_-]?secret|client[_-]?secret|auth[_-]?token|password)["\']?\s*[:=]\s*["\'][^"\']{6,}["\']',
     'inline credential'),
]

chunk_urls = set()
for route in ROUTES:
    _, html, _ = fetch(NEXT + route)
    for pat, label in SECRET_PATTERNS:
        for m in re.finditer(pat, html, re.I):
            print(f'  FAIL  {route} HTML contains {label}: {m.group(0)[:60]}')
            fail(route, f'secret in HTML: {label}')
    for src in parse(html).body_scripts_src:
        if src.startswith('/'):
            chunk_urls.add(NEXT + src)

print(f'  Scanned {len(ROUTES)} HTML documents and {len(chunk_urls)} client JS chunks.')
hits = 0
for url in sorted(chunk_urls):
    _, body, _ = fetch(url)
    for pat, label in SECRET_PATTERNS:
        for m in re.finditer(pat, body, re.I):
            hits += 1
            print(f'  FAIL  {url.rsplit("/", 1)[-1]} contains {label}: {m.group(0)[:60]}')
            fail('bundle', f'secret in chunk: {label}')
if hits == 0:
    print('  PASS  no NEXT_PUBLIC_* variables, API keys, tokens or inline credentials found')

# razorpay is a dependency but must never reach the browser.
razor = [u for u in sorted(chunk_urls) if re.search(r'razorpay', fetch(u)[1], re.I)]
if razor:
    print(f'  FAIL  razorpay code shipped to the browser in: {razor}')
    fail('bundle', 'razorpay in client bundle')
else:
    print('  PASS  razorpay (server-side SDK, still an unused dependency) is not in any client chunk')


print()
print('=' * 78)
print('SUMMARY')
print('=' * 78)
if documented:
    print(f'  Documented intentional differences ({len(documented)}):')
    kinds = {}
    for route, key, ov, nv in documented:
        kinds.setdefault((key, ov, nv), []).append(route)
    for (key, ov, nv), routes in kinds.items():
        print(f'    - meta[{key}] on {len(routes)}/{len(ROUTES)} routes: {ov!r} -> {nv!r}')
        print(f'      Semantically identical; Next types initialScale as a number so 1.0 cannot round-trip.')
for n_ in notes:
    print(f'  note: {n_}')
print(f'\n  FAILURES: {len(failures)}')
for f_ in failures[:25]:
    print(f'    - {f_}')
sys.exit(1 if failures else 0)
