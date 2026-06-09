import { buildConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import sharp from "sharp";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { Blogs } from "./src/cms/collections/Blogs";
import { Projects } from "./src/cms/collections/Projects";
import { TeamMembers } from "./src/cms/collections/TeamMembers";
import { Events } from "./src/cms/collections/Events";
import { Sponsors } from "./src/cms/collections/Sponsors";

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Blogs, Projects, TeamMembers, Events, Sponsors],
  secret: process.env.PAYLOAD_SECRET || "",
  db: postgresAdapter({
    pool: {
      connectionString: process.env.CMS_DATABASE_URI,
    },
  }),
  routes: {
    admin: "/admin",
  },
  sharp,
});
