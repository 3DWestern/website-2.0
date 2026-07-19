import { Payload } from "payload";
import { sampleProjects } from "../static-data/projects";

export const projectsSeed = async (payload: Payload) => {
  for (const project of sampleProjects) {
    // Resolve each category name to its corresponding category document ID,
    // since Payload relationship fields expect IDs, not full objects
    const categoryIds = await Promise.all(
      project.categories.map(async (category) => {
        const result = await payload.find({
          collection: "project-category",
          where: {
            name: { equals: category.name },
          },
          limit: 1,
        });
        return result.docs[0]?.id;
      }),
    );

    await payload.create({
      collection: "projects",
      data: {
        title: project.title,
        slug: project.slug,
        creator: project.creator,
        contributors: project.contributors,
        description: project.description,
        image: {
          src: project.image.src,
          alt: project.image.alt,
        },
        galleryImages: project.galleryImages?.map((img) => ({
          src: img.src,
          alt: img.alt,
        })),
        categories: categoryIds.filter(Boolean),
        featured: project.featured,
        github: project.github,
        blogUrl: project.blogUrl,
      },
    });
  }
};
