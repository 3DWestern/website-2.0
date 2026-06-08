import { teamSeed } from "./teamSeed";
import { eventSeed } from "./eventsSeed";

const seed = async () => {
  await teamSeed();
  await eventSeed();
  process.exit(0);
};

seed();
