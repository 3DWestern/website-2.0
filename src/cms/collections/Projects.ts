import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  access: {
    read: () => true,
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true },
    { name: "creator", type: "text", required: true },
    {
      name: "contributors",
      type: "text",
      hasMany: true,
      label: "All Contributors (Including Creator)",
    },
    { name: "description", type: "text", required: true },
    {
      name: "image",
      type: "group",
      fields: [
        { name: "src", type: "text", required: true },
        { name: "alt", type: "text", required: true },
      ],
      required: true,
    },
    {
      name: "galleryImages",
      type: "array",
      label: "Image Gallery Items",
      fields: [
        { name: "src", type: "text", required: true },
        { name: "alt", type: "text", required: true },
      ],
    },
    {
      name: "categories",
      type: "relationship",
      relationTo: "project-category",
      required: true,
      hasMany: true,
      maxRows: 3,
    },
    {
      name: "featured",
      type: "checkbox",
      label: "Featured",
      defaultValue: false,
    },
    { name: "github", type: "text" },
    { name: "blogUrl", type: "text" },
  ],
};
