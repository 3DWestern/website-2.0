import type { CollectionConfig } from "payload";

export const EventCategories: CollectionConfig = {
  slug: "event-categories",
  access: {
    read: () => true,
  },
  admin: {
    group: "Event Content",
    useAsTitle: "name",
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "description", type: "text", required: true },
  ],
};
