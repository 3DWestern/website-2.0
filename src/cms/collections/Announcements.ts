import type { CollectionConfig } from "payload";

export const ANNOUNCEMENTS_SLUG = "announcements";
export const Announcements: CollectionConfig = {
  slug: ANNOUNCEMENTS_SLUG,
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
    group: "Written Content",
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "announcement", type: "richText", required: true },
  ],
};
