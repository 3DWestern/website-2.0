import { http, HttpResponse } from "msw";
import { sampleTags } from "@/cms/static-data/tags";
import { sampleAuthors } from "@/cms/static-data/authors";
import { sampleBlogs } from "@/cms/static-data/blogs";
import { Author } from "@/types/content";
import { Author as PayloadAuthor } from "../../payload-types";

export const handlers = [
  http.get("http://localhost:3000/api/tags", ({ request }) => {
    const url = new URL(request.url);
    const idParam = url.searchParams.get("where[id][in]");

    let tags = sampleTags;

    // Filter by IDs if provided
    if (idParam) {
      const ids = idParam.split(",").map(Number);
      tags = sampleTags.filter((tag) => ids.includes(tag.id));
    }

    return HttpResponse.json({
      docs: tags,
      totalDocs: tags.length,
      limit: 10,
      page: 1,
      totalPages: 1,
    });
  }),

  // Get authors by IDs
  http.get("http://localhost:3000/api/authors", ({ request }) => {
    const url = new URL(request.url);
    const idParam = url.searchParams.get("where[id][in]");

    let authors = sampleAuthors;

    // Filter by IDs if provided
    if (idParam) {
      const ids = idParam.split(",").map(Number);
      authors = sampleAuthors.filter((author) => ids.includes(author.id));
    }

    return HttpResponse.json({
      docs: authors,
      totalDocs: authors.length,
      limit: 10,
      page: 1,
      totalPages: 1,
    });
  }),
  http.get("http://localhost:3000/api/blogs", ({ request }) => {
    const url = new URL(request.url);
    const slugParam = url.searchParams.get("where[slug][equals]");
    const idsParam = url.searchParams.get("where[id][in]");

    let blogs = sampleBlogs;

    console.log("ran");
    // Filter by slug
    if (slugParam) {
      blogs = sampleBlogs.filter((blog) => blog.slug === slugParam);
    }

    // Filter by IDs
    if (idsParam) {
      const ids = idsParam.split(",").map(Number);
      blogs = sampleBlogs.filter((blog) => ids.includes(Number(blog.id)));
    }

    let deepBlogs = blogs.map((blog) => ({
      ...blog,
      tags: (blog.tags as unknown as number[])
        ?.map((tagID) => sampleTags.find((sTag) => sTag.id === tagID))
        .filter((tag) => tag !== undefined),
    }));

    deepBlogs = deepBlogs.map((blog) => ({
      ...blog,
      author: sampleAuthors.find(
        (author) => author.id === (blog.author as unknown as number),
      ) as PayloadAuthor,
    }));

    return HttpResponse.json({
      docs: deepBlogs,
      totalDocs: blogs.length,
      limit: 10,
      page: 1,
      totalPages: Math.ceil(blogs.length / 10),
    });
  }),
];
