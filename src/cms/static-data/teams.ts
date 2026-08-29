import type { Team } from "../../../payload-types";

export const sampleTeams: Omit<Team, "updatedAt" | "createdAt">[] = [
  { id: 1, teamName: "Vice President" },
];
