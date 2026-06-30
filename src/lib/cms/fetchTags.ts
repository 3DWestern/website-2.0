import { cmsClient } from "./cmsClient";
import { transformTags } from "./transform";
import { sampleTags } from "@/cms/static-data/tags";
import { CMSEnabled } from "./utils";
import { Tag } from "@/types/content";
import { URLSearchParams } from "url";

export const getTags = async (): Promise<Tag[]> => {
  if (!CMSEnabled) return sampleTags;

  const res = await cmsClient.get("/api/tags");
  return transformTags(res.docs);
};

export const getTagsByIds = async (ids: number[]): Promise<Tag[]> => {
  if (!CMSEnabled) return sampleTags.filter((tag) => ids.includes(tag.id));

  const params = new URLSearchParams();
  params.set("where[id][in]", ids.join(","));
  const res = await cmsClient.get(`/api/tags?${params}`);
  return transformTags(res.docs);
};
