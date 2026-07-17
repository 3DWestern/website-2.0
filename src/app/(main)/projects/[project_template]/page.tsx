import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/components/data/projects";
import { ProjectDetailPage } from "@/components/pages/ProjectDetailPage";

type Props = {
  params: Promise<{ project_template: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ project_template: String(p.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { project_template } = await params;
  const project = projects.find((p) => p.id === Number(project_template));

  if (!project) {
    return { title: "Project Not Found | 3D Western" };
  }

  return {
    title: `${project.title} | 3D Western Projects`,
    description: project.description,
  };
}

export default async function Page({ params }: Props) {
  const { project_template } = await params;
  const project = projects.find((p) => p.id === Number(project_template)) ?? null;

  if (!project) notFound();

  return <ProjectDetailPage project={project} />;
}