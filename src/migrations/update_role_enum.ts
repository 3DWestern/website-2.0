import { sql } from "@payloadcms/db-postgres";
import type { MigrateUpArgs } from "@payloadcms/db-postgres";

export async function up({ db }: MigrateUpArgs): Promise<void> {
  // Fix up legacy data before the enum type change
  await db.execute(sql`
    UPDATE "team_members"
    SET "role" = 'leadership'
    WHERE "role" = 'Head of VP';
  `);
  await db.execute(sql`
    UPDATE "_team_members_v"
    SET "version_role" = 'leadership'
    WHERE "version_role" = 'Head of VP';
  `);

  // Actual auto-generated statements (restore these — don't leave "...")
  await db.execute(sql`
   ALTER TABLE "team_members" ALTER COLUMN "role" SET DATA TYPE "public"."enum_team_members_role" USING "role"::"public"."enum_team_members_role";
  `);
  await db.execute(sql`
   ALTER TABLE "_team_members_v" ALTER COLUMN "version_role" SET DATA TYPE "public"."enum__team_members_v_version_role" USING "version_role"::"public"."enum__team_members_v_version_role";
  `);
}
