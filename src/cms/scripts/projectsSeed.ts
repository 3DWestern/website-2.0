import payload from "payload";
import config from "../../../payload.config";
import { sampleProjects } from "../static-data/projects";

export const projectsSeed = async () => {
  await payload.init({ config });

  for (const project of sampleProjects) {
    await payload.create({
      collection: "projects",
      data: {
        title: project.title,
        creator: project.creator,
        image: project.image,
        alt: project.alt,
      },
    });
  }
};
