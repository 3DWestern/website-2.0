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
import { eventCategoriesSeed } from "./eventCategoriesSeed";

const seed = async () => {
  // initialize payload
  const payload = await getPayload({ config });

  // run seed scripts

  // -- TEAM MEMBERS SEED DATA --
  await teamSeed(payload);

  // -- EVENTS SEED DATA --

  console.log("\n----- EVENT CATEGORIES -----");
  await eventCategoriesSeed(payload); // MUST RUN BEFORE EVENTS

  console.log("\n----- EVENTS -----");
  await eventSeed(payload);

  // -- SPONSORS SEED DATA

  console.log("\n----- SPONSORS -----");
  await sponsorsSeed(payload);

  // -- BLOGS SEED DATA --

  console.log("\n----- AUTHORS -----");
  await authorsSeed(payload); // MUST RUN BEFORE BLOGS

  console.log("\n----- TAGS -----");
  await tagsSeed(payload); // MUST RUN BEFORE BLOGS

  console.log("\n----- BLOGS -----");
  await blogsSeed(payload);

  // -- PROJECTS SEED DATA --
  //
  console.log("\n----- PROJECT CATEGORIES -----");
  await projectCategorySeed(payload); // MUST RUN BEFORE PROJECTS

  console.log("\n----- PROJECTS -----");
  await projectsSeed(payload);
  process.exit(0);
};

seed();
