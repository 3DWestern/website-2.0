import { getPayload, type CollectionSlug, type Where } from "payload";
import config from "@payload-config";
import { cmsClient } from "./cmsClient";
import { collections, CollectionKey } from "./collections";
import { buildApi } from "./api";
import { makeProjectsOverrides, ProjectsFetcher } from "./projects.overrides";
import { makeTeamMemberOverrides } from "./teamMembers.overrides";
import { CMSEnabled } from "./utils";

function coerceValue(value: string) {
  if (value === "true") return true;
  if (value === "false") return false;
  if (/^-?\d+$/.test(value)) return Number(value);
  return value;
}

function whereFromSearchParams(params: URLSearchParams): Where | undefined {
  const where: Where = {};
  for (const [key, value] of params.entries()) {
    const match = /^where\[(.+)\]\[(.+)\]$/.exec(key);
    if (!match) continue;
    const [, field, operator] = match;
    where[field] = {
      [operator]:
        operator === "in"
          ? value.split(",").map(coerceValue)
          : coerceValue(value),
    };
  }
  return Object.keys(where).length > 0 ? where : undefined;
}

async function findDocs(slug: string, qs: string) {
  if (!CMSEnabled()) {
    return cmsClient.get(`/api/${slug}?${qs}`);
  }

  const params = new URLSearchParams(qs);
  const payload = await getPayload({ config });
  return payload.find({
    collection: slug as CollectionSlug,
    where: whereFromSearchParams(params),
    limit: params.has("limit") ? Number(params.get("limit")) : undefined,
    page: params.has("page") ? Number(params.get("page")) : undefined,
    depth: params.has("depth") ? Number(params.get("depth")) : undefined,
    sort: params.get("sort") ?? undefined,
    draft: params.get("draft") === "true",
    overrideAccess: false,
  });
}

export const api = {
  for<K extends CollectionKey>(key: K) {
    return buildApi(collections[key], (slug, qs) => findDocs(slug, qs));
  },
};

export const projectsApi = {
  ...api.for("projects"),
  ...makeProjectsOverrides(
    (slug, qs) => findDocs(slug, qs) as ReturnType<ProjectsFetcher>,
  ),
};

export const teamMembersApi = {
  ...api.for("team-members"),
  ...makeTeamMemberOverrides((slug, qs) => findDocs(slug, qs)),
};
