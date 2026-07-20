import type { Metadata } from "next";
import { ProjectsPage } from "@/components/pages/ProjectsPage";
import { HorizontalNav } from "@/components/HorizontalNav";
import { Footer } from "@/components/Footer";
import { getProjects } from "@/lib/cms/fetchProjects";
import { getProjectCategories } from "@/lib/cms/fetchProjectCategories";

export const metadata: Metadata = {
  title: "Projects Showcase | 3D Western",
  description:
    "Browse past and current makerspace projects from 3D Western — 3D printing, CNC, laser cutting, water jet, woodworking, and electronics builds.",
};

export default async function Page() {
  const allProjects = await getProjects({});
  const allCategories = await getProjectCategories();
  return (
    <main className="min-h-screen flex flex-col">
      <HorizontalNav variant="dark" />
      <ProjectsPage allProjects={allProjects} categories={allCategories} />
      <Footer />
    </main>
  );
}
