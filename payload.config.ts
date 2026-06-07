import { buildConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import sharp from "sharp";
import { postgresAdapter } from "@payloadcms/db-postgres";

export default buildConfig({
  editor: lexicalEditor(),
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
