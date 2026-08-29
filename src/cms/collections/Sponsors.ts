import type { CollectionConfig } from "payload";
import { generalAccess } from "../access/collectionAccess";

export const SPONSORS_SLUG = "sponsors";

export const Sponsors: CollectionConfig = {
  slug: SPONSORS_SLUG,

  access: generalAccess(SPONSORS_SLUG),
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: "name",
    group: "Sponsor Content",
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "logo", type: "text", required: true },
    { name: "alt", type: "text", required: true },
    { name: "website", type: "text" },
  ],
};
