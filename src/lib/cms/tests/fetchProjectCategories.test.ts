import { describe, it, expect } from "vitest";
import { getProjectCategories } from "@/lib/cms/fetchProjectCategories";

describe("project categories", () => {
  it("fetches all project categories", async () => {
    const allProjectCategories = await getProjectCategories();
    console.log("Output: ", allProjectCategories.toString().substring(0, 300));
    console.log("Length: ", allProjectCategories.length);
    expect(Array.isArray(allProjectCategories)).toBe(true);
  });
});
