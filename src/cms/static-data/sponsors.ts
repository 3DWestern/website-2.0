import { Sponsor } from "../../../payload-types";

export const sampleSponsors: Omit<Sponsor, "updatedAt" | "createdAt">[] = [
  {
    id: 1,
    name: "Sample Sponsor",
    logo: 1,
    website: "/",
  },
];
