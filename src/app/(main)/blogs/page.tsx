import { BlogsPage } from "@/components/pages/BlogsPage";
import { blogIndexMeta } from "@/lib/blogMeta";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return blogIndexMeta();
}

export default function Blogs() {
  return <BlogsPage />;
}
