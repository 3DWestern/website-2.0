

import { getPostBySlug } from "@/lib/cms/fetchBlogs";
import { BlogPostPage } from "./BlogPostPage";
import { blogPostMeta } from "@/lib/blogMeta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return blogPostMeta(post);
}

const Blog = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return <BlogPostPage post={post} slug={slug} />;
};

export default Blog;