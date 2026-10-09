/** Sanity's `image` field shape as returned by a GROQ projection with `asset->`. */
export interface SanityImage {
  asset: {
    _id: string;
    url: string;
    metadata?: {
      dimensions?: { width: number; height: number; aspectRatio: number };
      lqip?: string;
    };
  };
  alt?: string;
  hotspot?: { x: number; y: number; height: number; width: number };
}

export interface PortableTextBlock {
  _type: string;
  _key: string;
  [key: string]: unknown;
}

/** Card-sized projection used by the /blog listing grid. */
export interface BlogPostListItem {
  _id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  coverImage: SanityImage | null;
  author: string | null;
  category: string | null;
  publishedAt: string | null;
}

/** Full document projection used by /blog/[slug]. */
export interface BlogPost extends BlogPostListItem {
  content: PortableTextBlock[] | null;
  tags: string[] | null;
  /** Sanity's own last-edit timestamp; always present on a stored document. */
  _updatedAt: string;
  seoTitle: string | null;
  seoDescription: string | null;
}

/** Projection used by app/sitemap.ts. */
export interface BlogSitemapEntry {
  slug: string;
  _updatedAt: string;
}
