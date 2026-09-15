import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { client } from '@/lib/sanity/client';
import { BLOG_POST_BY_SLUG_QUERY, BLOG_SLUGS_QUERY } from '@/lib/sanity/queries';
import type { BlogPost } from '@/lib/sanity/types';
import { urlForImage } from '@/lib/sanity/image';
import PortableTextContent from '@/components/blog/PortableTextContent';

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(BLOG_SLUGS_QUERY);
  return slugs.map((slug) => ({ slug }));
}

async function getPost(slug: string) {
  return client.fetch<BlogPost | null>(BLOG_POST_BY_SLUG_QUERY, { slug });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  const title = post.seoTitle || `${post.title} | Grow Spark Consulting`;
  const description = post.seoDescription || post.excerpt || undefined;
  const ogImage = post.coverImage ? urlForImage(post.coverImage).width(1200).height(630).fit('crop').url() : undefined;

  return {
    title,
    description,
    robots: { index: true, follow: true },
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      type: 'article',
      siteName: 'Grow Spark Consulting',
      title,
      description,
      url: `https://www.growsparkconsulting.com/blog/${post.slug}/`,
      ...(ogImage ? { images: [{ url: ogImage, width: 1200, height: 630 }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(
    new Date(iso),
  );
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const coverImageUrl = post.coverImage
    ? urlForImage(post.coverImage).width(1200).height(675).fit('crop').url()
    : null;

  return (
    <main id="main" className="pt-24">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 pt-10 pb-1">
        <ol className="breadcrumb">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/blog/">Blog</a>
          </li>
          <li>
            <span aria-current="page">{post.title}</span>
          </li>
        </ol>
      </nav>

      <article>
        <header className="relative overflow-hidden border-b border-hairline pt-14 pb-16 lg:pt-16 lg:pb-20">
          <div
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-accent-tint opacity-60 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-[760px] px-5 sm:px-8 text-center">
            {post.category && <span className="eyebrow block mb-5">{post.category}</span>}
            <h1 className="page-hero-heading mb-5 text-balance">{post.title}</h1>
            {post.excerpt && <p className="lede-statement text-muted mb-8">{post.excerpt}</p>}
            <div className="paper-meta">
              {post.author && <span>{post.author}</span>}
              {post.author && post.publishedAt && <span className="dot">·</span>}
              {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
            </div>
          </div>
        </header>

        {coverImageUrl && (
          <div className="mx-auto max-w-[960px] px-5 sm:px-8 -mt-px pt-10 sm:pt-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={coverImageUrl}
              alt={post.coverImage?.alt ?? ''}
              width={1200}
              height={675}
              className="w-full rounded-card object-cover"
            />
          </div>
        )}

        <div className="mx-auto max-w-[760px] px-5 sm:px-8 py-12 sm:py-16">
          {post.content && post.content.length > 0 ? (
            <PortableTextContent value={post.content} />
          ) : (
            <p className="text-ink-soft text-[16px]">This post has no content yet.</p>
          )}

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-hairline">
              {post.tags.map((tag) => (
                <span key={tag} className="tag-badge is-external">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-12">
            <a href="/blog/" className="inline-link">
              ← Back to all posts
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
