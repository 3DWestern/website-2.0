import { getPayload } from "payload";
import config from "@payload-config";
import {
  transformBlogs,
  transformEvents,
  transformProjects,
  transformSponsors,
  transformTeamMembers,
} from "./transform";
import { highlightEvents, pastEvents } from "@/components/data/events";
import { sampleSponsors } from "@/cms/static-data/sponsors";
import { items } from "@/components/data/teamdata";
import { sampleProjects } from "@/cms/static-data/projects";
import { sampleBlogs } from "@/cms/static-data/blogs";

const CMSEnabled = (): boolean => {
  if (process.env.CMS_ENABLED === "false") {
    return false;
  }
  return true;
};

export const getEvents = async () => {
  if (!CMSEnabled()) return [...highlightEvents, ...pastEvents];
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: "events",
  });
  console.log("RAN");
  return transformEvents(result.docs);
};

export const getSponsors = async () => {
  if (!CMSEnabled()) return sampleSponsors;
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: "sponsors",
  });
  console.log(transformSponsors(result.docs));

  return transformSponsors(result.docs);
};

export const getTeamMembers = async () => {
  if (!CMSEnabled()) return items;
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: "team-members",
  });

  console.log(transformTeamMembers(result.docs));
  return transformTeamMembers(result.docs);
};

export const getProjects = async () => {
  if (!CMSEnabled()) return sampleProjects;
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: "projects",
  });

  console.log(transformProjects(result.docs));
  return transformProjects(result.docs);
};

export const getBlogs = async () => {
  if (!CMSEnabled()) return sampleBlogs;
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: "blogs",
  });

  console.log(transformBlogs(result.docs));
  return transformBlogs(result.docs);
};
