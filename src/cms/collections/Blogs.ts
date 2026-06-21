// Blogs collection
import type { CollectionConfig } from "payload";
export const Blogs: CollectionConfig = {
  slug: "blogs",
  versions: {
    drafts: true,
  },
  access: {
    read: ({ req }) => {
      if (req.user) return true;
      return {
        _status: { equals: "published" },
      };
    },
    create: ({ req }) => Boolean(req.user), // any logged-in user (editor or admin) can create
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => req.user?.role === "admin", // only admins can delete
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "excerpt", type: "textarea" },
    {
      name: "author",
      type: "relationship",
      relationTo: "authors",
      required: true,
    },
    { name: "date", type: "date", required: true },
    { name: "readingTime", type: "number" },
    {
      name: "coverImage",
      type: "group",
      fields: [
        { name: "url", type: "text", required: true },
        { name: "alt", type: "text" },
      ],
    },
    { name: "tags", type: "array", fields: [{ name: "tag", type: "text" }] },
    { name: "content", type: "richText", required: true },
  ],
};
