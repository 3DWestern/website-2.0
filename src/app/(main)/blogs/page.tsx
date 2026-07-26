import { BlogsPage } from "@/components/pages/BlogsPage";
import { HorizontalNav } from "@/components/HorizontalNav";
import { Footer } from "@/components/Footer";
import { blogIndexMeta } from "@/lib/blogMeta";

export function generateMetadata(): Metadata {
  return blogIndexMeta();
}
import { api } from "@/lib/cms/api.server";
import { Metadata } from "next";

export default async function Blogs() {
  const [posts, tags] = await Promise.all([
    api.for("blogs").getMany(),
    api.for("tags").getMany(),
  ]);

  return (
    <main className="min-h-screen flex flex-col">
      <HorizontalNav variant="dark" />
      <BlogsPage posts={posts} tags={tags} />
      <Footer />
    </main>
  );
}
