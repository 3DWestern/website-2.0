import { cmsClient } from "./cmsClient";
import { transformBlog, transformBlogs } from "./transform";
import { sampleBlogs } from "@/cms/static-data/blogs";
import { CMSEnabled } from "./utils";

/**
 * Fetches a paginated, filterable list of blog posts.
 *
 * Pulls from Payload's REST API when CMS_ENABLED=true, otherwise falls
 * back to local static sample data (no network/database calls made).
 *
 * Note: pagination is page-based (matching Payload's REST API).
 * Tag filtering happens client-side after the fetch
 *
 * @param limit    - Max number of posts to return per page. Omit for Payload's default (10).
 * @param page     - Which page of results to fetch (1-indexed, i.e. 1 = first page).
 * @param category - Filter posts by category. NOT YET IMPLEMENTED — accepted but unused.
 * @param tags     - Filter posts to only those containing at least one of the given tags.
 *
 * @returns Array of transformed Blog objects (typed, not raw Payload docs).
 */
export const getBlogPosts = async ({
  limit,
  page,
  category,
  tags,
}: {
  limit?: number;
  page: number;
  category?: string;
  tags?: string[];
}) => {
  // Static fallback — skips Payload/network entirely when CMS is disabled
  if (!CMSEnabled()) return sampleBlogs;

  // Build query string for Payload's REST API
  const params = new URLSearchParams();
  if (limit) params.set("limit", String(limit));
  if (page) params.set("page", String(page));
  params.set("depth", "1"); // populates author

  const result = await cmsClient.get(`/api/blogs?${params.toString()}`);

  // Convert raw Payload docs into Blog shape
  let filteredResult = transformBlogs(result.docs);

  // Client-side tag filter: keep posts that share at least one tag
  // with the requested list. Done here (not via Payload query) for simplicity.
  if (tags) {
    filteredResult = filteredResult.filter((post) =>
      post.tags?.some((t) => tags.includes(t)),
    );
  }

  return filteredResult;
};

/**
 * Fetches a single blog post by its slug.
 *
 * Pulls from Payload's REST API when CMS_ENABLED=true, otherwise looks up
 * the slug in local static sample data.
 *
 * @param slug - The unique slug identifying the blog post (used in the URL, e.g. /blog/my-post).
 *
 * @returns The transformed Blog object if found, otherwise null.
 *          Callers should treat `null` as "not found" and trigger a 404.
 */
export const getPostBySlug = async (slug: string) => {
  if (!CMSEnabled())
    return sampleBlogs.find((post) => post.slug === slug) ?? null;
  const result = await cmsClient.get(`/api/blogs?where[slug][equals]=${slug}`);
  return result.docs[0] ? transformBlog(result.docs[0]) : null;
};
