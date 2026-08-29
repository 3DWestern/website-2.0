import type { CollectionConfig } from "payload";
import { URLSearchParams } from "url";
import { generalAccess } from "../access/collectionAccess";

export const PROJECTS_SLUG = "projects";

export const Projects: CollectionConfig = {
  slug: PROJECTS_SLUG,
  versions: {
    drafts: {
      autosave: {
        interval: 5000,
      },
    },
  },
  admin: {
    group: "Project Content",
    useAsTitle: "title",

    preview: ({ slug }) => {
      const encodedParams = new URLSearchParams({
        slug: `${slug as string}`,
        collection: "projects",
        path: `/projects/${slug}`,
        previewSecret: process.env.PREVIEW_SECRET || "",
      });

      return `/preview?${encodedParams.toString()}`;
    },
  },

  access: generalAccess(PROJECTS_SLUG),

  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true },
    { name: "creator", type: "text", required: true },
    {
      name: "contributors",
      type: "text",
      hasMany: true,
      label: "All Contributors (Including Creator)",
    },
    { name: "description", type: "text", required: true },
    {
      name: "image",
      type: "group",
      fields: [
        { name: "src", type: "text", required: true },
        { name: "alt", type: "text", required: true },
      ],
      required: true,
    },
    {
      name: "galleryImages",
      type: "array",
      label: "Image Gallery Items",
      fields: [
        { name: "src", type: "text", required: true },
        { name: "alt", type: "text", required: true },
      ],
    },
    {
      name: "categories",
      type: "relationship",
      relationTo: "project-categories",
      required: true,
      hasMany: true,
      maxRows: 3,
    },
    {
      name: "featured",
      type: "checkbox",
      label: "Featured",
      defaultValue: false,
    },
    { name: "github", type: "text" },
    { name: "blogUrl", type: "text" },
  ],
};
