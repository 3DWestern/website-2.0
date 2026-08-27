import { Hero } from "@/components/sections/Hero";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { LatestSection } from "@/components/sections/LatestSection";
import { MakerspacesSection } from "@/components/sections/MakerspacesSection";
import { JoinUsSection } from "@/components/sections/JoinUsSection";
import { api } from "@/lib/cms/api.server";
import { EquipmentSection } from "../sections/EquipmentSection";
import Image from "next/image";

export default async function HomePage() {
  const [latestPosts, latestProjects] = await Promise.all([
    api.for("blogs").getMany({ limit: 1 }),
    api.for("projects").getMany({ limit: 4 }),
  ]);

  const latestPost = latestPosts[0] ?? null;

  return (
    <main>
      <div className="relative size-100">{/* <Image /> */}</div>
      <Hero />
      <AboutUsSection />
      <EquipmentSection />
      <MakerspacesSection />
      {latestPost && (
        <LatestSection post={latestPost} projects={latestProjects} />
      )}
      <JoinUsSection />
    </main>
  );
}
