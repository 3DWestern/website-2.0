import type { Spotlight } from "../../../payload-types";

export type SampleSpotlight = Omit<Spotlight, "updatedAt" | "createdAt">;

export const sampleSpotlights: SampleSpotlight[] = [
  {
    id: 1,
    name: "Maria Chen",
    projectName: "Urban Greenhouse Initiative",
    description:
      "A community-driven project turning vacant city lots into sustainable greenhouses, providing fresh produce to underserved neighborhoods.",
    tags: ["Sustainability", "Community", "Agriculture"],
    image: 1,
    program: "Community Innovation Fellowship",
    year: 2024,
    quote:
      "This project taught me that real change starts with the people closest to the problem.",
  },
  {
    id: 2,
    name: "James Okafor",
    projectName: "CodeBridge",
    description:
      "A free coding bootcamp for first-generation college students, pairing participants with mentors in the tech industry.",
    tags: ["Education", "Technology", "Mentorship"],
    image: 1,
    program: "Tech Equity Program",
    year: 2023,
    quote:
      "Access to mentorship changed the entire trajectory of my career, and now I get to pay that forward.",
  },
  {
    id: 3,
    name: "Priya Nair",
    projectName: "Voices Unheard",
    description:
      "A documentary series amplifying stories from rural communities affected by climate migration.",
    tags: ["Film", "Climate", "Storytelling"],
    image: 1,
    program: "Media for Change Grant",
    year: 2022,
    quote:
      "Every story we filmed reminded me why representation matters so much in this work.",
  },
];
