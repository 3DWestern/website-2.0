import { Author } from "../../../payload-types";

type SampleAuthor = Omit<Author, "updatedAt" | "createdAt">;

export const sampleAuthors: SampleAuthor[] = [
  {
    id: 1,
    name: "Jane Doe",
    avatar: 1,
  },
  {
    id: 2,
    name: "Marcus Lee",
    avatar: 1,
  },
  {
    id: 3,
    name: "Priya Nair",
    avatar: 1,
  },
  {
    id: 4,
    name: "Sam Okafor",
    avatar: 1,
  },
];
