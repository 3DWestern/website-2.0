// app/blog/[blog_template]/page.tsx
// Server component — no 'use client'

import { BlogPostPage } from "./BlogPostPage";
import type { BlogPost } from "./BlogPostPage";

// ---------------------------------------------------------------------------
// Mock data — swap this out for your Payload fetch later:
//   const post = await payload.find({ collection: 'posts', where: { slug: { equals: blog_template } } })
// ---------------------------------------------------------------------------
const MOCK_POST: BlogPost = {
  id: "1",
  slug: "getting-started-with-nextjs",
  title: "Getting Started with Next.js 15",
  excerpt:
    "A practical walkthrough of the new features in Next.js 15 and how to migrate your existing projects.",
  publishedAt: "2025-03-12T10:00:00Z",
  readingTime: 6,
  coverImage: {
    url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    alt: "Code on a screen",
  },
  author: {
    name: "Jane Doe",
    avatar: {
      url: "https://i.pravatar.cc/56?img=47",
      alt: "Jane Doe",
    },
  },
  tags: ["Next.js", "React", "Web Dev"],
  // Each block represents one chunk of CMS content.
  // When you wire up Payload, these will come from the `content` richText field.
  content: [
    {
      type: "paragraph",
      text: "Next.js 15 ships with a number of developer-experience improvements, most notably around the App Router and server actions. In this post we walk through the highlights and show you what to update.",
    },
    {
      type: "heading",
      level: 2,
      text: "What changed in the App Router",
    },
    {
      type: "paragraph",
      text: "The biggest shift is how nested layouts handle data fetching. Previously you might have seen waterfall requests across layouts; 15 parallelises these automatically when the layouts do not have data dependencies on each other.",
    },
    {
      type: "heading",
      level: 2,
      text: "Server Actions are now stable",
    },
    {
      type: "paragraph",
      text: "Server Actions graduated from experimental in this release. You can now use them without the `experimental` flag in your config, and the error handling story has been substantially improved.",
    },
    {
      type: "heading",
      level: 3,
      text: "A quick example",
    },
    {
      type: "code",
      text: `async function savePost(formData: FormData) {
  'use server';
  const title = formData.get('title');
  await db.posts.create({ title });
}`,
    },
    {
      type: "paragraph",
      text: "That is all you need — no API route, no client-side fetch. The action runs on the server and React re-renders only the affected subtree.",
    },
  ],
};

// ---------------------------------------------------------------------------

const Blog = async ({
  params,
}: {
  params: Promise<{ blog_template: string }>;
}) => {
  const { blog_template } = await params;

  // TODO: replace mock with real Payload fetch:
  // const { docs } = await payload.find({
  //   collection: 'posts',
  //   where: { slug: { equals: blog_template } },
  //   limit: 1,
  // });
  // const post = docs[0];
  // if (!post) notFound();

  const post = MOCK_POST; // ← swap for real post above when ready

  return <BlogPostPage post={post} slug={blog_template} />;
};

export default Blog;
