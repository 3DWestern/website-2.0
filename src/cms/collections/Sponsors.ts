import type { CollectionConfig } from "payload";

export const Sponsors: CollectionConfig = {
  slug: "sponsors",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "name",
    group: "Sponsor Content",
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "logo", type: "text", required: true },
    { name: "alt", type: "text", required: true },
    { name: "website", type: "text" },
  ],
};
