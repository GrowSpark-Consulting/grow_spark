"""
Mechanical HTML -> TSX converter for the Vite-to-Next migration.

This is a transcription tool, not a refactoring tool. It parses a page's
<main> with a real HTML parser and re-emits the identical element tree as JSX,
renaming only what JSX requires (class -> className, for -> htmlFor, inline
style strings -> objects, lucide <i> placeholders -> lucide-react elements).
No element is added, removed, reordered or restyled.

Whitespace is the subtle part. JSX deletes newlines that sit next to tags,
where HTML would render them as a single space, so naive pretty-printing
silently closes up gaps between inline elements. Every text node is therefore
collapsed the way HTML collapses it, and any leading/trailing space is re-
emitted as an explicit {' '} so the rendered result cannot drift.
"""

from __future__ import annotations

import html as htmllib
import io
import json
import os
import re
import sys
from html.parser import HTMLParser

VOID = {
    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link',
    'meta', 'param', 'source', 'track', 'wbr',
}

# Attributes JSX spells differently. Anything data-* / aria-* passes straight
# through; anything else unknown is reported so it can be checked by hand.
ATTR_MAP = {
    'class': 'className', 'for': 'htmlFor', 'autocomplete': 'autoComplete',
    'tabindex': 'tabIndex', 'readonly': 'readOnly', 'maxlength': 'maxLength',
    'minlength': 'minLength', 'colspan': 'colSpan', 'rowspan': 'rowSpan',
    'enctype': 'encType', 'novalidate': 'noValidate', 'autofocus': 'autoFocus',
    'crossorigin': 'crossOrigin', 'datetime': 'dateTime', 'playsinline': 'playsInline',
    'autoplay': 'autoPlay', 'frameborder': 'frameBorder', 'allowfullscreen': 'allowFullScreen',
    'contenteditable': 'contentEditable', 'spellcheck': 'spellCheck', 'srcset': 'srcSet',
    'usemap': 'useMap', 'accesskey': 'accessKey', 'inputmode': 'inputMode',
    'formaction': 'formAction', 'formmethod': 'formMethod', 'accept-charset': 'acceptCharset',
    'http-equiv': 'httpEquiv', 'marginwidth': 'marginWidth', 'marginheight': 'marginHeight',
}

# Present with no value in HTML; must be an explicit boolean in JSX.
BOOLEAN = {
    'disabled', 'required', 'checked', 'selected', 'multiple', 'muted', 'loop',
    'autoplay', 'playsinline', 'open', 'hidden', 'async', 'defer', 'novalidate',
    'readonly', 'autofocus', 'allowfullscreen', 'default', 'reversed', 'ismap',
    'controls', 'inert',
}

NUMERIC = {'width', 'height', 'rows', 'cols', 'size', 'span', 'start', 'maxlength', 'minlength'}



def pascal(name: str) -> str:
    return ''.join(p.capitalize() for p in name.split('-'))


def style_to_object(value: str) -> str:
    """`font-size:clamp(1.5rem,1.2rem+1.2vw,2rem)` -> `{{ fontSize: '...' }}`."""
    parts = []
    for decl in value.split(';'):
        decl = decl.strip()
        if not decl or ':' not in decl:
            continue
        prop, val = decl.split(':', 1)
        prop = prop.strip()
        val = val.strip()
        if prop.startswith('--'):
            key = json.dumps(prop)
        else:
            head, *rest = prop.split('-')
            key = head + ''.join(p.capitalize() for p in rest)
        parts.append(f'{key}: {json.dumps(val)}')
    return '{{ ' + ', '.join(parts) + ' }}'


class Node:
    __slots__ = ('kind', 'tag', 'attrs', 'children', 'text')

    def __init__(self, kind, tag=None, attrs=None, text=None):
        self.kind = kind          # 'el' | 'text' | 'comment'
        self.tag = tag
        self.attrs = attrs or []
        self.children = []
        self.text = text


class TreeBuilder(HTMLParser):
    def __init__(self):
        # convert_charrefs folds entities into the surrounding text run. With it
        # off, "Isn&rsquo;t" arrives as three sibling text nodes, which emit on
        # three lines, and JSX joins adjacent text lines with a space — the
        # rendered word silently becomes "Isn ’ t".
        super().__init__(convert_charrefs=True)
        self.root = Node('el', 'root')
        self.stack = [self.root]

    def _add_text(self, text: str):
        """Merge into the previous text node so no run is ever split across lines."""
        siblings = self.stack[-1].children
        if siblings and siblings[-1].kind == 'text':
            siblings[-1].text += text
        else:
            siblings.append(Node('text', text=text))

    def handle_starttag(self, tag, attrs):
        node = Node('el', tag, attrs)
        self.stack[-1].children.append(node)
        if tag not in VOID:
            self.stack.append(node)

    def handle_startendtag(self, tag, attrs):
        self.stack[-1].children.append(Node('el', tag, attrs))

    def handle_endtag(self, tag):
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == tag:
                del self.stack[i:]
                return

    def handle_data(self, data):
        self._add_text(data)

    def handle_entityref(self, name):
        self._add_text(htmllib.unescape(f'&{name};'))

    def handle_charref(self, name):
        self._add_text(htmllib.unescape(f'&#{name};'))

    def handle_comment(self, data):
        self.stack[-1].children.append(Node('comment', text=data))


class Emitter:
    def __init__(self):
        self.icons: set[str] = set()
        self.unknown_attrs: set[str] = set()

    def attr(self, name: str, value):
        if name == 'data-lucide':
            return None
        if name == 'style' and value:
            return f'style={style_to_object(value)}'
        jsx = ATTR_MAP.get(name, name)
        if name in BOOLEAN and (value is None or value == '' or value == name):
            return jsx
        if value is None:
            # A valueless HTML attribute (data-reveal) is an empty string in the
            # DOM. Emitting it bare in JSX would make React render it as
            # data-reveal="true", so spell the empty value out.
            return f'{jsx}=""'
        if name in NUMERIC and re.fullmatch(r'\d+', value or ''):
            return f'{jsx}={{{value}}}'
        if not re.fullmatch(r'[A-Za-z][A-Za-z0-9]*', jsx) and not name.startswith(('data-', 'aria-')):
            self.unknown_attrs.add(name)
        return f'{jsx}={json.dumps(htmllib.unescape(value))}'

    def text(self, raw: str) -> list[str]:
        """Collapse like HTML, then re-emit edge spaces JSX would eat as {' '}.

        Every whitespace run is preserved, including between block-level
        siblings where it paints nothing today. Whether a given gap renders
        depends on CSS this converter cannot see — `.breadcrumb` is display:flex
        so its inter-<li> whitespace is inert, but an inline-block list
        elsewhere would need it — so the safe default is to keep them all and
        let textContent stay identical to the original.
        """
        collapsed = re.sub(r'\s+', ' ', raw)
        if collapsed.strip() == '':
            return ["{' '}"] if collapsed else []
        lead = "{' '} " if collapsed.startswith(' ') else ''
        trail = " {' '}" if collapsed.endswith(' ') else ''
        body = collapsed.strip()
        body = body.replace('{', "{'{'}").replace('}', "{'}'}")
        body = body.replace('<', '&lt;').replace('>', '&gt;')
        return [f'{lead}{body}{trail}'.strip()]

    def emit(self, node: Node, depth: int) -> list[str]:
        pad = '  ' * depth
        if node.kind == 'text':
            return [pad + line for line in self.text(node.text)]
        if node.kind == 'comment':
            body = node.text.strip().replace('*/', '* /')
            body = re.sub(r'\s+', ' ', body)
            return [f'{pad}{{/* {body} */}}']

        attrs = dict(node.attrs)
        # <i data-lucide="arrow-right" class="..."> is a placeholder the old
        # runtime swapped for an SVG; lucide-react renders it directly.
        if node.tag == 'i' and 'data-lucide' in attrs:
            icon = pascal(attrs['data-lucide'])
            self.icons.add(icon)
            rendered = [self.attr(k, v) for k, v in node.attrs]
            rendered = [a for a in rendered if a]
            joined = (' ' + ' '.join(rendered)) if rendered else ''
            return [f'{pad}<{icon}{joined} />']

        rendered = [self.attr(k, v) for k, v in node.attrs]
        rendered = [a for a in rendered if a]
        joined = (' ' + ' '.join(rendered)) if rendered else ''

        if node.tag in VOID:
            return [f'{pad}<{node.tag}{joined} />']

        inner: list[str] = []
        for child in node.children:
            inner.extend(self.emit(child, depth + 1))
        if not inner:
            return [f'{pad}<{node.tag}{joined} />']
        return [f'{pad}<{node.tag}{joined}>'] + inner + [f'{pad}</{node.tag}>']


def extract_metadata(src: str) -> dict:
    def g(pat):
        m = re.search(pat, src, re.I | re.S)
        return htmllib.unescape(m.group(1).strip()) if m else None
    ld = re.findall(r'<script type="application/ld\+json">(.*?)</script>', src, re.S)
    return {
        'title': g(r'<title>(.*?)</title>'),
        'description': g(r'<meta\s+name="description"\s+content="(.*?)"'),
        'robots': g(r'<meta\s+name="robots"\s+content="(.*?)"'),
        'canonical': g(r'<link\s+rel="canonical"\s+href="(.*?)"'),
        'og:type': g(r'<meta\s+property="og:type"\s+content="(.*?)"'),
        'og:site_name': g(r'<meta\s+property="og:site_name"\s+content="(.*?)"'),
        'og:title': g(r'<meta\s+property="og:title"\s+content="(.*?)"'),
        'og:description': g(r'<meta\s+property="og:description"\s+content="(.*?)"'),
        'og:url': g(r'<meta\s+property="og:url"\s+content="(.*?)"'),
        'twitter:card': g(r'<meta\s+name="twitter:card"\s+content="(.*?)"'),
        'twitter:title': g(r'<meta\s+name="twitter:title"\s+content="(.*?)"'),
        'twitter:description': g(r'<meta\s+name="twitter:description"\s+content="(.*?)"'),
        'jsonld': [json.loads(b.strip()) for b in ld],
    }


def build_metadata_block(meta: dict, route: str) -> str:
    q = lambda v: json.dumps(v, ensure_ascii=False)
    lines = ['export const metadata: Metadata = {']
    if meta['title']:
        lines.append(f'  title: {q(meta["title"])},')
    if meta['description']:
        lines.append(f'  description: {q(meta["description"])},')
    if meta['robots']:
        idx = 'index' in meta['robots']
        fol = 'follow' in meta['robots']
        lines.append(f'  robots: {{ index: {str(idx).lower()}, follow: {str(fol).lower()} }},')
    if meta['canonical']:
        lines.append(f'  alternates: {{ canonical: {q(route)} }},')
    og = {k[3:]: v for k, v in meta.items() if k.startswith('og:') and v}
    if og:
        lines.append('  openGraph: {')
        for k in ('type', 'site_name', 'title', 'description', 'url'):
            if k in og:
                key = 'siteName' if k == 'site_name' else k
                lines.append(f'    {key}: {q(og[k])},')
        lines.append('  },')
    tw = {k[8:]: v for k, v in meta.items() if k.startswith('twitter:') and v}
    if tw:
        lines.append('  twitter: {')
        for k in ('card', 'title', 'description'):
            if k in tw:
                lines.append(f'    {k}: {q(tw[k])},')
        lines.append('  },')
    lines.append('};')
    return '\n'.join(lines)


def convert(src_path: str, route: str, out_path: str) -> dict:
    src = io.open(src_path, encoding='utf-8').read()
    m = re.search(r'<main\b([^>]*)>(.*?)</main>', src, re.S)
    if not m:
        raise SystemExit(f'no <main> in {src_path}')
    main_attrs_raw, body = m.group(1), m.group(2)

    builder = TreeBuilder()
    builder.feed(f'<main{main_attrs_raw}>{body}</main>')
    builder.close()
    main_node = next(c for c in builder.root.children if c.kind == 'el' and c.tag == 'main')

    em = Emitter()
    jsx = em.emit(main_node, 2)

    meta = extract_metadata(src)
    imports = ["import type { Metadata } from 'next';"]
    if em.icons:
        imports.append(f"import {{ {', '.join(sorted(em.icons))} }} from 'lucide-react';")

    ld_block = ''
    ld_render = ''
    if meta['jsonld']:
        ld_block = ('\n/** JSON-LD preserved verbatim from the source page. */\n'
                    'const jsonLd = ' + json.dumps(meta['jsonld'][0], ensure_ascii=False, indent=2) + ' as const;\n')
        ld_render = ('      <script\n        type="application/ld+json"\n'
                     '        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}\n      />\n')

    out = (
        '\n'.join(imports) + '\n\n'
        + '/**\n * Transcribed from ' + src_path.replace(os.sep, '/') + ' by scripts/html-to-tsx.py.\n'
        ' * Element tree, classes, content and metadata are unchanged; only the\n'
        " * JSX-required attribute spellings differ from the source markup.\n */\n"
        + build_metadata_block(meta, route) + '\n'
        + ld_block
        + '\nexport default function Page() {\n  return (\n'
        + ('    <>\n' if ld_render else '')
        + ld_render
        + '\n'.join(jsx) + '\n'
        + ('    </>\n' if ld_render else '')
        + '  );\n}\n'
    )

    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    io.open(out_path, 'w', encoding='utf-8', newline='\n').write(out)
    return {'route': route, 'icons': sorted(em.icons), 'unknown': sorted(em.unknown_attrs),
            'lines': out.count('\n')}


if __name__ == '__main__':
    print(json.dumps(convert(sys.argv[1], sys.argv[2], sys.argv[3]), indent=1))
