import type { CollectionConfig } from "payload";
import { generalAccess } from "../access/collectionAccess";

export const AUTHOR_SLUG = "authors";

export const Authors: CollectionConfig = {
  slug: AUTHOR_SLUG,
  versions: {
    drafts: true,
  },
  access: generalAccess(AUTHOR_SLUG),
  admin: {
    group: "People",
    useAsTitle: "name",
  },
  fields: [
    { name: "name", type: "text", required: true },
    {
      name: "avatar",
      type: "relationship",
      relationTo: "avatars",
      required: true,
    },
  ],
};
