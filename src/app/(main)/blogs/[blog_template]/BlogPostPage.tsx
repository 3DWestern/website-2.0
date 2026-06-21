"use client";

// app/blog/[blog_template]/BlogPostPage.tsx

import { koulen } from "@/lib/fonts";
import { motion } from "framer-motion";
import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import type { BlogPost } from "@/types/content";
import { notFound } from "next/navigation";

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
  post: BlogPost | null;
  slug: string;
}

export function BlogPostPage({ post }: BlogPostPageProps) {
  if (!post) notFound();
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
                    src={post.author.avatar.url}
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
              <time>{post.date}</time>
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
          <div className="relative w-full aspect-21/9 max-h-[400px] overflow-hidden">
            <Image
              src={post.coverImage.url}
              alt={post.coverImage.alt ?? post.title}
              fill
              className="object-cover"
              priority
            />
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
              <RichText data={post.content} />
            </article>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
