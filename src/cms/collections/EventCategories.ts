import type { CollectionConfig } from "payload";
import { generalAccess } from "../access/collectionAccess";

export const EVENTCATEGORY_SLUG = "event-categories";

export const EventCategories: CollectionConfig = {
  slug: EVENTCATEGORY_SLUG,

  access: generalAccess(EVENTCATEGORY_SLUG),
  versions: {
    drafts: true,
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
