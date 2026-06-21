import { cmsClient } from "./cmsClient";
import { transformAuthors } from "./transform";
import { sampleAuthors } from "@/cms/static-data/authors";
import { CMSEnabled } from "./utils";
import { Author } from "@/types/content";
import { URLSearchParams } from "url";

export const getAuthorsByIds = async (ids: string[]): Promise<Author[]> => {
  if (!CMSEnabled)
    return sampleAuthors.filter((author) => ids.includes(author.id));

  const params = new URLSearchParams();
  params.set("where[id][in]", ids.join(","));
  const res = await cmsClient.get(`/api/authors?${params.toString()}`);
  return transformAuthors(res.docs);
};
