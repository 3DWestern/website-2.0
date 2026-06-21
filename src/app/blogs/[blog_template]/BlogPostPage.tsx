"use client";

// app/blog/[blog_template]/BlogPostPage.tsx

import { koulen } from "@/lib/fonts";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

// ---------------------------------------------------------------------------
// Content block types
//
// This is the shape your CMS content will become once you wire up Payload.
// Payload's Lexical editor stores rich text as a tree of nodes. When you
// fetch a post you'll convert (or auto-render) those nodes into blocks like
// these. For now the mock data uses this same shape so the template is
// already structured the way your real data will be.
//
// Supported block types:
//   paragraph  — a plain text paragraph
//   heading    — h2 or h3 (level: 2 | 3)
//   code       — a <pre><code> block
//   image      — an inline image with optional caption
// ---------------------------------------------------------------------------
export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "code"; text: string; language?: string }
  | { type: "image"; url: string; alt?: string; caption?: string };

// ---------------------------------------------------------------------------
// BlogPost type
// ---------------------------------------------------------------------------
export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  /** One-sentence summary shown below the title and used in meta tags */
  excerpt?: string;
  /** ISO 8601 date string — Payload stores this as a date field */
  publishedAt: string;
  /** Minutes to read — derive this in a Payload beforeChange hook */
  readingTime?: number;
  /** Hero image — Payload upload field */
  coverImage?: {
    url: string;
    alt?: string;
  };
  /** Relationship field pointing at an Authors collection */
  author?: {
    name: string;
    avatar?: { url: string; alt?: string };
  };
  /** Array of plain strings — Payload array or select field */
  tags?: string[];
  /**
   * The main article body.
   *
   * In Payload you'll define this as a `richText` field using the Lexical
   * editor. When you fetch the post you can either:
   *   a) render it server-side with Payload's JSX converter → pass HTML string
   *   b) keep it as Lexical JSON and render with <RichText data={content} />
   *
   * For now it's typed as ContentBlock[] so the mock renders without any
   * Payload dependency. Swap the type (and the renderer below) when you
   * connect the CMS.
   */
  content: ContentBlock[];
};

// ---------------------------------------------------------------------------
// Renders a single content block
// ---------------------------------------------------------------------------
function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-base sm:text-lg leading-relaxed text-slate-700 mb-6">
          {block.text}
        </p>
      );

    case "heading":
      if (block.level === 2) {
        return (
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mt-12 mb-4">
            {block.text}
          </h2>
        );
      }
      return (
        <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mt-8 mb-3">
          {block.text}
        </h3>
      );

    case "code":
      return (
        <pre className="bg-slate-900 text-slate-100 rounded-lg p-5 overflow-x-auto text-sm leading-relaxed mb-6">
          <code>{block.text}</code>
        </pre>
      );

    case "image":
      return (
        <figure className="my-8">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image
              src={block.url}
              alt={block.alt ?? ""}
              fill
              className="object-cover"
            />
          </div>
          {block.caption && (
            <figcaption className="text-sm text-center text-slate-500 mt-2">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
  }
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------
interface BlogPostPageProps {
  post: BlogPost;
  slug: string;
}

export function BlogPostPage({ post }: BlogPostPageProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen">
      {/* ── Header ── */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 uppercase tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight ${koulen.className}`}
          >
            {post.title}
          </motion.h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            {post.author && (
              <div className="flex items-center gap-2">
                {post.author.avatar && (
                  <Image
                    src="/images/execs/thomson.webp"
                    alt={post.author.avatar.alt ?? post.author.name}
                    width={28}
                    height={28}
                    className="rounded-full object-cover"
                  />
                )}
                <span className="font-medium text-foreground">
                  {post.author.name}
                </span>
              </div>
            )}

            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.publishedAt}>{formattedDate}</time>
            </div>

            {post.readingTime && (
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime} min read</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Cover image ── */}
      {post.coverImage && (
        <div className="bg-slate-100">
          <div className="max-w-5xl mx-auto">
            <div className="relative w-full aspect-[16/7] overflow-hidden">
              <Image
                src="/"
                alt={post.coverImage.alt ?? post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* ── Body ── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {post.excerpt && (
              <p className="text-xl text-muted-foreground leading-relaxed mb-10 pb-10 border-b border-slate-200">
                {post.excerpt}
              </p>
            )}

            <article>
              {post.content.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </article>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
