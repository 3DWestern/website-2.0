import { buildConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import sharp from "sharp";
import { postgresAdapter } from "@payloadcms/db-postgres";
import {
  Blogs,
  Sponsors,
  Events,
  TeamMembers,
  Projects,
  Authors,
  Users,
  ProjectCategories,
  EventCategories,
  Media,
} from "@/cms/collections";
import { Tags } from "@/cms/collections/Tags";

export default buildConfig({
  editor: lexicalEditor({}),
  collections: [
    Media,
    Blogs,
    Users,
    Tags,
    Projects,
    TeamMembers,
    Events,
    Sponsors,
    Authors,
    ProjectCategories,
    EventCategories,
  ],
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
