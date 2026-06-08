import type { CollectionConfig } from "payload";

export const Blogs: CollectionConfig = {
  slug: "showcases",
  fields: [
    { name: "title", type: "text", required: true },
    { name: "author", type: "text", required: true },
    { name: "image", type: "text", required: true },
    { name: "alt", type: "text", required: true },
    { name: "date", type: "date", required: true },
    {
      name: "tags",
      type: "array",
      fields: [{ name: "tag", type: "text", required: true }],
    },
  ],
};
