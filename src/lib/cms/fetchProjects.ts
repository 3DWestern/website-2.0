import { cmsClient } from "./cmsClient";
import { transformProject, transformProjects } from "./transform";
import { sampleProjects } from "@/cms/static-data/projects";
import { CMSEnabled } from "./utils";
import { ProjectCategory } from "@/types/content";
import { BaseParams } from "./fetch";
import { URLSearchParams } from "url";
import { draftMode } from "next/headers";

export const getProjects = async ({
  limit,
  page,
  categories,
}: BaseParams & { categories?: string[] }) => {
  if (!CMSEnabled()) return sampleProjects;

  // build search params
  const params = new URLSearchParams();
  // nase filtering
  if (limit) params.set("limit", String(limit));
  if (page) params.set("page", String(page));
  params.set("depth", "1");

  // filter response by categories
  if (categories?.length)
    params.set("where[categories.name][in]", categories.join(","));

  // fetch result
  const result = await cmsClient.get("/api/projects");
  return transformProjects(result.docs);
};

export const getProjectBySlug = async (slug: string) => {
  const dm = await draftMode();

  // build search params to match by slug
  const params = new URLSearchParams();
  params.set("where[slug][equals]", slug);
  params.set("depth", "2");

  if (dm.isEnabled) {
    params.set("draft", "true");
  }

  const result = await cmsClient.get(`/api/projects?${params.toString()}`);

  return result.docs[0] ? transformProject(result.docs[0]) : null;
};

export const getFeaturedProjects = async () => {
  const params = new URLSearchParams({
    "where[featured][equals]": "true",
    depth: "2",
  });

  const result = await cmsClient.get(`/api/projects?${params.toString()}`);
  return transformProjects(result.docs);
};
