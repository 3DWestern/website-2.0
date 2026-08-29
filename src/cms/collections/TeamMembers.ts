import type { CollectionConfig } from "payload";
import { generalAccess } from "../access/collectionAccess";

export const TEAMMEMBER_SLUG = "team-members";

export const TeamMembers: CollectionConfig = {
  slug: TEAMMEMBER_SLUG,
  access: generalAccess(TEAMMEMBER_SLUG),
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: "name",
    group: "Team Content",
  },
  fields: [
    { name: "image", type: "text", required: true },
    { name: "name", type: "text", required: true },
    { name: "role", type: "text", required: true },
    { name: "description", type: "textarea" },
    { name: "emoji", type: "text" },
    { name: "linkedin", type: "text" },
    { name: "github", type: "text" },
    { name: "website", type: "text" },
  ],
};
