import type { CollectionConfig } from "payload";
import { generalAccess } from "../access/collectionAccess";

export const MEDIA_SLUG = "media";

export const Media: CollectionConfig = {
  slug: MEDIA_SLUG,

  access: generalAccess(MEDIA_SLUG),
  versions: {
    drafts: true,
  },
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
