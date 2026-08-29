import { getPayload } from "payload";
import config from "@payload-config";
import type { AssignableCollection } from "../access/collectionAccess";
const payload = await getPayload({ config });

const collectionsToBackfill: AssignableCollection[] = [
  // "project-categories",
  // "event-categories",
  // "tags",
  // "team-members",
  // "sponsors",
  // "authors",
  // "avatars",
  // "cover-images",
  // "media",
];

for (const slug of collectionsToBackfill) {
  const { docs } = await payload.find({
    collection: slug,
    limit: 1000,
    depth: 0,
  });
  for (const doc of docs) {
    await payload.update({
      collection: slug,
      id: doc.id,
      data: {}, // no actual changes, just forces a version write
    });
    console.log(`Backfilled ${slug}/${doc.id}`);
  }
}
