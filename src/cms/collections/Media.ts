import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  admin: {
    group: "General Collections",
  },
  upload: {
    disableLocalStorage: true,
    imageSizes: [
      {
        name: "blog-thumbnail",
        width: 300,
        height: 300,
        position: "center",
        fit: "cover",
      },
    ],
  },
  fields: [
    {
      name: "alt",
      type: "text",
    },
  ],
};
