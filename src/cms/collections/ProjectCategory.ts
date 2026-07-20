import type { CollectionConfig } from "payload";

export const ProjectCategory: CollectionConfig = {
  slug: "project-categories",
  access: {
    read: () => true,
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "description", type: "text", required: true },
  ],
};
