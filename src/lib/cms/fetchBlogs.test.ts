import { describe, it, expect } from "vitest";
import { getBlogPosts, getPostBySlug } from "./fetchBlogs";

describe("getBlogPosts", () => {
  it("returns transformed blog posts", async () => {
    const posts = await getBlogPosts({
      page: 1,
      limit: 10,
      category: "",
    });
    expect(posts.length).toBeGreaterThan(0);
    expect(posts[0]).toHaveProperty("slug");
  });
});

describe("getPostBySlug", () => {
  it("returns post matching slug", async () => {
    const post = await getPostBySlug("club-hackathon-recap");

    expect(post).toBeDefined();
    expect(post).toHaveProperty("id", 10);
  });
});
