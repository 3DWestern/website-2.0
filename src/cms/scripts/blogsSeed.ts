import payload from "payload";
import config from "../../../payload.config";
import { sampleBlogs } from "../static-data/blogs";
import { parseDate } from "./utils";

export const blogsSeed = async () => {
  await payload.init({ config });

  for (const blog of sampleBlogs) {
    await payload.create({
      collection: "blogs",
      data: {
        title: blog.title,
        author: blog.author,
        image: blog.image,
        alt: blog.alt,
        date: parseDate(blog.date),
        tags: blog.tags.map((tag) => ({ tag })),
      },
    });
  }
};
