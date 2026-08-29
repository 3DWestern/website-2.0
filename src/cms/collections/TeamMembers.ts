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
    group: "People",
  },
  fields: [
    {
      name: "image",
      type: "relationship",
      relationTo: "avatars",
      required: true,
      label: "Avatar",
    },
    { name: "name", type: "text", required: true },
    { name: "role", type: "text", required: true },
    { name: "team", type: "relationship", relationTo: "teams", required: true },
    { name: "bio", type: "richText", required: true },
    { name: "emoji", type: "text" },
    { name: "linkedin", type: "text" },
    { name: "github", type: "text" },
    { name: "website", type: "text" },
  ],
};
