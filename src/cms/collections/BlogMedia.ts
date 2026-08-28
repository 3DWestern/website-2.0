import { CollectionConfig } from "payload";

export const Avatars: CollectionConfig = {
  slug: "avatars",
  access: {
    read: () => true,
  },
  admin: {
    group: "Blog Content",
    useAsTitle: "author-name",
  },

  upload: {
    disableLocalStorage: true,
    imageSizes: [
      {
        name: "avatar",
        width: 300,
        height: 300,
        position: "center",
        fit: "cover",
      },
    ],
  },
  fields: [
    { name: "author-name", type: "text", required: true },
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
};

export const CoverImages: CollectionConfig = {
  slug: "cover-images",
  access: {
    read: () => true,
  },
  admin: {
    group: "Blog Content",
    useAsTitle: "blog-title",
  },
  upload: {
    disableLocalStorage: true,
    imageSizes: [
      {
        name: "cover-image",
        width: 500,
        height: 500,
        position: "center",
        fit: "cover",
      },
    ],
  },
  fields: [
    { name: "blog-title", type: "text", required: true },
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
};
