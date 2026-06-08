import payload from "payload";
import config from "../../../payload.config";
import { items } from "../../components/data/teamdata";

export const teamSeed = async () => {
  await payload.init({ config });

  for (const member of items) {
    await payload.create({
      collection: "team-members",
      data: {
        image: member.image,
        name: member.name,
        role: member.role,
        description: member.description,
        emoji: member.emoji,
        linkedin: member.linkedin,
        github: member.github,
        website: member.website,
      },
    });
  }
};
