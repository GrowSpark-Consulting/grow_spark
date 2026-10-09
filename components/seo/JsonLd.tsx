import { SITE_URL } from '@/lib/site';

/**
 * Renders a schema.org JSON-LD block. Server Component.
 *
 * `<` is escaped so a value that happens to contain `</script>` (a blog title
 * from the CMS, say) cannot close the tag early.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}

/** One visible breadcrumb step: its label and its site-relative path. */
export type Crumb = readonly [name: string, path: string];

/**
 * BreadcrumbList mirroring a page's visible breadcrumb trail. Pass the same
 * steps the page's `<ol className="breadcrumb">` shows, current page last;
 * `__tests__/breadcrumbs.test.ts` fails if the two drift apart.
 */
export function BreadcrumbJsonLd({ items }: { items: readonly Crumb[] }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map(([name, path], i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name,
          item: new URL(path, SITE_URL).href,
        })),
      }}
    />
  );
}
