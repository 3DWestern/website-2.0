import { ResolvedTeamMember, transformTeamMembers } from "./transform";

export type TeamMemberFetcher = (
  slug: string,
  qs: string,
) => Promise<{ docs: ResolvedTeamMember[] }>;

export const makeTeamMemberOverrides = (fetch: TeamMemberFetcher) => ({
  getLeadership: async (options: { limit?: number; page?: number }) => {
    const params = new URLSearchParams();
    params.set("where[role][equals]", "leadership");
    if (options.limit) params.set("limit", String(options.limit));
    if (options.page) params.set("page", String(options.page));
    const result = await fetch("team-members", params.toString());
    return transformTeamMembers(result.docs);
  },
  getVPs: async (options: { limit?: number; page?: number }) => {
    const params = new URLSearchParams();
    params.set("where[role][equals]", "vice-president");
    if (options.limit) params.set("limit", String(options.limit));
    if (options.page) params.set("page", String(options.page));
    const result = await fetch("team-members", params.toString());
    return transformTeamMembers(result.docs);
  },
});
