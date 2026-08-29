import { CollectionConfig } from "payload";
import { generalAccess } from "../access/collectionAccess";

export const AVATAR_SLUG = "avatars";

export const Avatars: CollectionConfig = {
  slug: AVATAR_SLUG,
  access: generalAccess(AVATAR_SLUG),
  versions: {
    drafts: true,
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

export const COVERIMAGE_SLUG = "cover-images";

export const CoverImages: CollectionConfig = {
  slug: COVERIMAGE_SLUG,
  access: generalAccess(COVERIMAGE_SLUG),
  versions: {
    drafts: true,
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
