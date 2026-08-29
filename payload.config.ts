import { buildConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import sharp from "sharp";
import { postgresAdapter } from "@payloadcms/db-postgres";

import { s3Storage } from "@payloadcms/storage-s3";
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
  Avatars,
  CoverImages,
  Teams,
  Logos,
  GalleryImages,
} from "@/cms/collections";
import { Tags } from "@/cms/collections/Tags";

export default buildConfig({
  editor: lexicalEditor({}),
  collections: [
    Users,
    Avatars,
    CoverImages,
    Logos,
    GalleryImages,
    Blogs,
    Tags,
    Projects,
    TeamMembers,
    Events,
    Sponsors,
    Authors,
    ProjectCategories,
    EventCategories,
    Teams,
  ],

  plugins: [
    s3Storage({
      collections: {
        logos: true,
        avatars: true,
        "cover-images": true,
        "gallery-images": true,
      },
      bucket: process.env.SUPABASE_BUCKET ?? "",
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID ?? "",
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY ?? "",
        },
        region: process.env.S3_REGION,
        endpoint: process.env.S3_ENDPOINT, // Supabase's S3-compatible endpoint
        forcePathStyle: true, // required for Supabase
      },
    }),
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
