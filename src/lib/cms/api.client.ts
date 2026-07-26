// api.client.ts
import { cmsClient } from "./cmsClient";
import { collections, CollectionKey } from "./collections";
import { buildApi } from "./api";

export const apiClient = {
  for: <K extends CollectionKey>(key: K) =>
    buildApi(collections[key], (slug, qs) =>
      cmsClient.clientGet(`/${slug}?${qs}`),
    ),
};
