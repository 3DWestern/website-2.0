import { teamSeed } from "./teamSeed";
import { eventSeed } from "./eventsSeed";
import { sponsorsSeed } from "./sponsorsSeed";
import { blogsSeed } from "./blogsSeed";
import { projectsSeed } from "./projectsSeed";

const seed = async () => {
  await teamSeed();
  await eventSeed();
  await sponsorsSeed();
  await blogsSeed();
  await projectsSeed();
  process.exit(0);
};

seed();
