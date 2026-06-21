import { cmsClient } from "./cmsClient";
import { transformTeamMembers } from "./transform";
import { items } from "@/components/data/teamdata";
import { CMSEnabled } from "./utils";

export const getTeamMembers = async () => {
  if (!CMSEnabled()) return items;
  const result = await cmsClient.get("/api/team-members");
  return transformTeamMembers(result.docs);
};
