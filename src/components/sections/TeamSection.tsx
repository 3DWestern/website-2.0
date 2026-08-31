import { teamMembersApi } from "@/lib/cms/api.server";
import TeamMembers from "../content/TeamMembers";

export default async function TeamSection() {
  const [leadership, vicePresidents] = await Promise.all([
    teamMembersApi.getLeadership({}),
    teamMembersApi.getVPs({}),
  ]);

  return (
    <TeamMembers leadership={leadership} vicePresidents={vicePresidents} />
  );
}
