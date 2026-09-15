import { defineQuery } from 'next-sanity';

/**
 * "Published" has no dedicated status field on blogPost — the convention is
 * a post is live once it has a publishedAt in the past. This also means a
 * future-dated publishedAt schedules a post rather than publishing it early.
 */
const PUBLISHED_FILTER = `_type == "blogPost" && defined(slug.current) && defined(publishedAt) && publishedAt <= now()`;

const COVER_IMAGE_PROJECTION = `
  coverImage {
    asset->{
      _id,
      url,
      metadata { dimensions, lqip }
    },
    alt,
    hotspot
  }
`;

export const BLOG_LISTING_QUERY = defineQuery(`
  *[${PUBLISHED_FILTER}] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    ${COVER_IMAGE_PROJECTION},
    author,
    category,
    publishedAt
  }
`);

export const BLOG_POST_BY_SLUG_QUERY = defineQuery(`
  *[${PUBLISHED_FILTER} && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    content,
    ${COVER_IMAGE_PROJECTION},
    author,
    category,
    tags,
    publishedAt,
    seoTitle,
    seoDescription
  }
`);

export const BLOG_SLUGS_QUERY = defineQuery(`
  *[${PUBLISHED_FILTER}].slug.current
`);
