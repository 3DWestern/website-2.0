import { BlogsPage } from "@/components/pages/BlogsPage";
import { HorizontalNav } from "@/components/HorizontalNav";
import { Footer } from "@/components/Footer";
import { getBlogPosts } from "@/lib/cms/fetchBlogs";
import { BlogPost } from "@/types/content";

export default async function Blogs() {
  const posts: BlogPost[] = await getBlogPosts({
    page: 1,
    limit: 10000,
  });

  return (
    <main className="min-h-screen flex flex-col">
      <HorizontalNav variant="dark" />
      <BlogsPage posts={posts} />
      <Footer />
    </main>
  );
}

