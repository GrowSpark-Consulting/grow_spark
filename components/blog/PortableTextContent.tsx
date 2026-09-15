import { PortableText, type PortableTextComponents } from 'next-sanity';
import type { PortableTextBlock } from '@/lib/sanity/types';

/**
 * Renders blogPost.content. Styled with the same utility classes and design
 * tokens the rest of the site uses (see rnd/revenue-without-profit for the
 * long-form article vocabulary this borrows from) rather than a generic
 * "prose" stylesheet, so it reads as part of the existing visual system.
 */
const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-ink-soft text-[16px] sm:text-[17px] leading-relaxed mb-5">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="subsection-heading mt-12 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-[20px] font-display font-semibold mt-10 mb-3">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-[17px] font-display font-semibold mt-8 mb-2.5">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="callout is-bordered my-8 text-ink-soft text-[16.5px] leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-5 text-ink-soft text-[16px] sm:text-[17px] leading-relaxed mb-5 space-y-2">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-5 text-ink-soft text-[16px] sm:text-[17px] leading-relaxed mb-5 space-y-2">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => {
      const href = typeof value?.href === 'string' ? value.href : '#';
      const isExternal = /^https?:\/\//.test(href);
      return (
        <a
          href={href}
          className="text-accent underline underline-offset-2 hover:no-underline"
          {...(isExternal ? { target: '_blank', rel: 'noopener' } : {})}
        >
          {children}
        </a>
      );
    },
  },
};

export default function PortableTextContent({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}
