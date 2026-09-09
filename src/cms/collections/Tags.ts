import type { CollectionConfig } from "payload";
import { generalAccess } from "../access/collectionAccess";

export const TAG_SLUG = "tags";

export const Tags: CollectionConfig = {
  slug: TAG_SLUG,
  access: generalAccess(TAG_SLUG),
  versions: {
    drafts: true,
  },
  admin: {
    group: "Categorization",
    useAsTitle: "title",
  },
  labels: {
    singular: "Blog Category",
    plural: "Blog Categories",
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "description", type: "text" },
  ],
};
