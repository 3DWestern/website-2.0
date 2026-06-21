import { cmsClient } from "./cmsClient";
import { transformEvents } from "./transform";
import { highlightEvents, pastEvents } from "@/components/data/events";
import { CMSEnabled } from "./utils";

export const getEvents = async () => {
  if (!CMSEnabled()) return [...highlightEvents, ...pastEvents];
  const result = await cmsClient.get("/api/events");
  return transformEvents(result.docs);
};
