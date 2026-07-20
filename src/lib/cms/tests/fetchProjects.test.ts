import { describe, it, expect, vi } from "vitest";
import {
  getProjects,
  getProjectBySlug,
  getFeaturedProjects,
} from "@/lib/cms/fetch";

vi.mock("next/headers", () => ({
  draftMode: async () => ({ isEnabled: false }),
}));

describe("projects", () => {
  it("fetches all projects", async () => {
    const allProjects = await getProjects({});
    console.log("Output: ", allProjects.toString().substring(0, 300));
    console.log("Length: ", allProjects.length);
    expect(Array.isArray(allProjects)).toBe(true);
  });

  it("fetches a project by slug", async () => {
    const bySlug = await getProjectBySlug("adaptive-gaming-controller");
    console.log("Output: ", bySlug);
    expect(bySlug).toBeDefined();
  });

  it("fetches featured projects", async () => {
    const featured = await getFeaturedProjects();
    console.log("Output: ", featured);
    console.log("Length: ", featured.length);
    expect(Array.isArray(featured)).toBe(true);
  });
});
