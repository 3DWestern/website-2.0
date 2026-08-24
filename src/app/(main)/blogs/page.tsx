import { BlogsPage } from "@/components/pages/BlogsPage";
import { blogIndexMeta } from "@/lib/blogMeta";

export function generateMetadata(): Metadata {
  return blogIndexMeta();
}
import { Metadata } from "next";

export default function Blogs() {
  return <BlogsPage />;
}
