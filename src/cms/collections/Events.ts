import { CollectionConfig } from "payload";

export const Events: CollectionConfig = {
  slug: "events",
  fields: [
    { name: "title", type: "text", required: true },
    { name: "date", type: "date", required: true },
    { name: "time", type: "text", required: true },
    { name: "image", type: "text", required: true },
    { name: "alt", type: "text", required: true },
    { name: "location", type: "text", required: true },
    { name: "category", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    { name: "url", type: "text" },
  ],
};
