import { transformProjects } from "./transform";

export type Fetcher = (slug: string, qs: string) => Promise<{ docs: any[] }>;

// Bespoke — only projects needs this, so it isn't generalized into `api.ts`.
export const makeProjectsOverrides = (fetch: Fetcher) => ({
  getFeatured: async (options?: { limit?: number }) => {
    const params = new URLSearchParams();
    params.set("where[featured][equals]", "true");
    if (options?.limit) params.set("limit", String(options.limit));
    const result = await fetch("projects", params.toString());
    return transformProjects(result.docs);
  },
});
