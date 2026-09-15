import type { Metadata } from 'next';
import { client } from '@/lib/sanity/client';
import { BLOG_LISTING_QUERY } from '@/lib/sanity/queries';
import type { BlogPostListItem } from '@/lib/sanity/types';
import BlogPostCard from '@/components/blog/BlogPostCard';

/** Revalidated on a timer for now; Sanity webhooks can replace this later. */
export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Blog | Grow Spark Consulting',
  description: 'Research, frameworks and perspectives on AI and digital transformation from Grow Spark Consulting.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/blog/' },
  openGraph: {
    type: 'website',
    siteName: 'Grow Spark Consulting',
    title: 'Blog | Grow Spark Consulting',
    description: 'Research, frameworks and perspectives on AI and digital transformation from Grow Spark Consulting.',
    url: 'https://www.growsparkconsulting.com/blog/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Grow Spark Consulting',
    description: 'Research, frameworks and perspectives on AI and digital transformation from Grow Spark Consulting.',
  },
};

export default async function Page() {
  const posts = await client.fetch<BlogPostListItem[]>(BLOG_LISTING_QUERY);

  return (
    <main id="main" className="pt-24">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 pt-10 pb-1">
        <ol className="breadcrumb">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <span aria-current="page">Blog</span>
          </li>
        </ol>
      </nav>

      <section className="relative overflow-hidden border-b border-hairline pt-16 pb-20 lg:pt-20 lg:pb-24">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-accent-tint opacity-60 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          <div className="max-w-[760px] mx-auto text-center">
            <span className="eyebrow block mb-5">Insights</span>
            <h1 className="page-hero-heading mb-6 text-balance">
              Research and thinking for leadership teams
            </h1>
            <p className="text-[17px] text-ink-soft leading-relaxed max-w-[640px] mx-auto">
              Frameworks, research and perspectives from Grow Spark on AI and digital transformation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {posts.length === 0 ? (
            <p className="text-center text-ink-soft text-[16px] max-w-[520px] mx-auto">
              No posts are published yet — check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
              {posts.map((post) => (
                <BlogPostCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
