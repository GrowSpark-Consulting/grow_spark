import { urlForImage } from '@/lib/sanity/image';
import type { BlogPostListItem } from '@/lib/sanity/types';

function formatDate(iso: string) {
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(
    new Date(iso),
  );
}

/**
 * Same title/excerpt/category typography as the homepage's .insight-card
 * (components/sections/Insights.tsx), composed with Tailwind utilities
 * instead of the .insight-card shorthand so the cover image can bleed to
 * the card's edge — .insight-card's own 34px padding applies to all of its
 * children uniformly, which an edge-to-edge image can't share.
 */
export default function BlogPostCard({ post }: { post: BlogPostListItem }) {
  const imageUrl = post.coverImage
    ? urlForImage(post.coverImage).width(640).height(400).fit('crop').url()
    : null;

  return (
    <a
      href={`/blog/${post.slug}/`}
      className="group block rounded-card border border-hairline bg-paper-raised overflow-hidden card-elevate"
    >
      {imageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl}
          alt={post.coverImage?.alt ?? ''}
          width={640}
          height={400}
          className="w-full aspect-[16/10] object-cover"
          loading="lazy"
        />
      )}
      <div className="p-[34px]">
        {post.category && <span className="cat">{post.category}</span>}
        <h3 className="text-[18.5px] leading-snug mb-3 font-display font-semibold">{post.title}</h3>
        {post.excerpt && <p className="text-ink-soft text-[16px]">{post.excerpt}</p>}
        <div className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[13.5px] text-muted">
          {post.author && <span>{post.author}</span>}
          {post.author && post.publishedAt && <span aria-hidden="true">·</span>}
          {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
        </div>
      </div>
    </a>
  );
}
