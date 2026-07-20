import { getPayload } from "payload";
import config from "../../../payload.config";
import { teamSeed } from "./teamSeed";
import { eventSeed } from "./eventsSeed";
import { sponsorsSeed } from "./sponsorsSeed";
import { blogsSeed } from "./blogsSeed";
import { projectsSeed } from "./projectsSeed";
import { authorsSeed } from "./authorsSeed";
import { tagsSeed } from "./tagsSeed";
import { projectCategorySeed } from "./projectCategorySeed";

const seed = async () => {
  // initialize payload
  const payload = await getPayload({ config });

  // run seed scripts
  // await teamSeed(payload);
  // await eventSeed(payload);
  // await sponsorsSeed(payload);
  // await authorsSeed(payload); // MUST RUN BEFORE BLOGS
  // await tagsSeed(payload);
  // await blogsSeed(payload);

  await projectCategorySeed(payload); // MUST RUN BEFORE PROJECTS
  await projectsSeed(payload);
  process.exit(0);
};

seed();
