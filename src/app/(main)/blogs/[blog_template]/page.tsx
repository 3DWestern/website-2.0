// app/blog/[blog_template]/page.tsx
// Server component — no 'use client'

import { getPostBySlug } from "@/lib/cms/fetchBlogs";
import { BlogPostPage } from "./BlogPostPage";

const Blog = async ({
  params,
}: {
  params: Promise<{ blog_template: string }>;
}) => {
  const { blog_template } = await params;

  const post = await getPostBySlug(blog_template); // ← swap for real post above when ready

  return <BlogPostPage post={post} slug={blog_template} />;
};

export default Blog;
