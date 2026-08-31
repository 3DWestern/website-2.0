import type { TeamMember } from "../../../payload-types";

type SampleTeamMembers = Omit<TeamMember, "updatedAt" | "createdAt">;

export const sampleTeamMembers: SampleTeamMembers[] = [
  {
    id: 1,
    image: 1,
    name: "Thompson Lam",
    role: "leadership",
    team: 1,
    bio: {
      root: {
        type: "root",
        direction: "ltr",
        format: "",
        indent: 0,
        version: 1,
        children: [
          {
            children: [
              {
                detail: 0,
                format: 0,
                mode: "normal",
                style: "",
                text: "This is Thompson",
                type: "text",
                version: 1,
              },
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            type: "paragraph",
            textFormat: 0,
            version: 1,
          },
        ],
      },
    },
  },
];
