import payload from "payload";
import config from "../../../payload.config";
import { sampleSponsors } from "../static-data/sponsors";

export const sponsorsSeed = async () => {
  await payload.init({ config });

  for (const sponsor of sampleSponsors) {
    await payload.create({
      collection: "sponsors",
      data: {
        name: sponsor.name,
        logo: sponsor.logo,
        alt: sponsor.alt,
        website: sponsor.website || "",
      },
    });
  }
};
