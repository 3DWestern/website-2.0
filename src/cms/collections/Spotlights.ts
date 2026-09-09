import type { CollectionConfig } from "payload";
import { generalAccess } from "../access/collectionAccess";

export const SPOTLIGHTS_SLUG = "spotlights";

export const Spotlights: CollectionConfig = {
  slug: SPOTLIGHTS_SLUG,
  access: generalAccess(SPOTLIGHTS_SLUG),
  admin: {
    useAsTitle: "name",
    group: "Written Content",
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "projectName", type: "text", required: true },
    {
      name: "description",
      label: "Short Description",
      type: "text",
      required: true,
    },
    { name: "tags", type: "text", hasMany: true, minRows: 1 },
    {
      name: "image",
      type: "relationship",
      relationTo: "spotlight-images",
      required: true,
    },
    { name: "program", type: "text", required: true },
    { name: "year", type: "number", required: true },
    { name: "quote", type: "text", required: true },
  ],
};
