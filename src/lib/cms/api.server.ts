// api.server.ts
import { cmsClient } from "./cmsClient";
import { collections, CollectionKey } from "./collections";
import { buildApi } from "./api";
import { makeProjectsOverrides } from "./projects.overrides";

export const api = {
  for: <K extends CollectionKey>(key: K) =>
    buildApi(collections[key], (slug, qs) =>
      cmsClient.get(`/api/${slug}?${qs}`),
    ),
};

export const projectsApi = {
  ...api.for("projects"),
  ...makeProjectsOverrides((slug, qs) => cmsClient.get(`/api/${slug}?${qs}`)),
};
