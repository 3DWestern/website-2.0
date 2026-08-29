import type { CollectionConfig } from "payload";
import { generalAccess } from "../access/collectionAccess";

export const Teams: CollectionConfig = {
  slug: "teams",
  access: generalAccess("teams"),
  admin: {
    useAsTitle: "teamName",
    group: "People",
  },
  versions: {
    drafts: true,
  },
  fields: [{ name: "teamName", type: "text", required: true }],
};
