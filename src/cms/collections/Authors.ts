import type { CollectionConfig } from "payload";

export const Authors: CollectionConfig = {
  slug: "authors",

  admin: {
    group: "Blog Content",
    useAsTitle: "name",
  },
  fields: [
    { name: "name", type: "text", required: true },
    {
      name: "avatar",
      type: "relationship",
      relationTo: "avatars",
    },
  ],
};
