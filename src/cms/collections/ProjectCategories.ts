import type { CollectionConfig } from "payload";
import { generalAccess } from "../access/collectionAccess";

export const PROJECTCATEGORY_SLUG = "project-categories";

export const ProjectCategories: CollectionConfig = {
  slug: PROJECTCATEGORY_SLUG,

  access: generalAccess(PROJECTCATEGORY_SLUG),
  versions: {
    drafts: true,
  },
  admin: {
    group: "Project Content",
    useAsTitle: "name",
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "description", type: "text", required: true },
  ],
};
