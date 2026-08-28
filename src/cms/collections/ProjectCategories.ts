import type { CollectionConfig } from "payload";

export const ProjectCategories: CollectionConfig = {
  slug: "project-categories",
  admin: {
    group: "Project Content",
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "description", type: "text", required: true },
  ],
};
