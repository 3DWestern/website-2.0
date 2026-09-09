import {
  CollectionSlug,
  getPayload,
  RequiredDataFromCollectionSlug,
} from "payload";
import config from "../../../payload.config";
import { sampleTeamMembers } from "../static-data/teamMembers";
import {
  sampleAuthors,
  sampleBlogs,
  sampleEventCategories,
  sampleEvents,
  sampleProjectCategories,
  sampleProjects,
  sampleSponsors,
  sampleTags,
  sampleAnnouncements,
  sampleSpotlights,
} from "../static-data";
import { sampleTeams } from "../static-data/teams";

const payload = await getPayload({ config });

const createData = async <S extends CollectionSlug>(
  slug: S,
  data: RequiredDataFromCollectionSlug<S>[],
) => {
  // Only seed if collection is empty
  const existing = await payload.count({ collection: slug });

  if (existing.totalDocs > 0) {
    console.log(
      `Skipped seeding ${slug} — already has ${existing.totalDocs} entries`,
    );
    return;
  }

  // Seed sample data
  let count = 0;
  for (const entry of data) {
    const created = await payload.create({
      collection: slug,
      data: entry,
    });
    if (created != null) count++;
  }
  console.log(`Seeded collection ${slug} with ${count} entries ✓`);
};

const seed = async () => {
  // -- TEAM MEMBERS SEED DATA --
  console.log("\n----- TEAMS -----");
  await createData("teams", sampleTeams);

  console.log("\n----- TEAM MEMBERS -----");
  await createData("team-members", sampleTeamMembers);

  // -- EVENTS SEED DATA --
  console.log("\n----- EVENT CATEGORIES -----");
  await createData("event-categories", sampleEventCategories);

  console.log("\n----- EVENTS -----");
  await createData("events", sampleEvents);

  // -- SPONSORS SEED DATA
  console.log("\n----- SPONSORS -----");
  await createData("sponsors", sampleSponsors);

  // -- BLOGS SEED DATA --
  console.log("\n----- AUTHORS -----");
  await createData("authors", sampleAuthors);

  console.log("\n----- TAGS -----");
  await createData("tags", sampleTags);

  console.log("\n----- BLOGS -----");
  await createData("blogs", sampleBlogs);

  // -- PROJECTS SEED DATA --
  console.log("\n----- PROJECT CATEGORIES -----");
  await createData("project-categories", sampleProjectCategories);

  console.log("\n----- PROJECTS -----");
  await createData("projects", sampleProjects);

  console.log("\n----- SPOTLIGHTS -----");
  await createData("spotlights", sampleSpotlights);

  console.log("\n----- ANNOUNCEMENTS -----");
  await createData("announcements", sampleAnnouncements);

  // exit process
  process.exit(0);
};

seed();
