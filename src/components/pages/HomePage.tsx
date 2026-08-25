import { Hero } from "@/components/sections/Hero";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { LatestSection } from "@/components/sections/LatestSection";
import { MakerspacesSection } from "@/components/sections/MakerspacesSection";
import { JoinUsSection } from "@/components/sections/JoinUsSection";
import { api } from "@/lib/cms/api.server";

export default async function HomePage() {
  const [latestPosts, latestProjects] = await Promise.all([
    api.for("blogs").getMany({ limit: 1 }),
    api.for("projects").getMany({ limit: 4 }),
  ]);

  const latestPost = latestPosts[0] ?? null;

  return (
    <main>
      <Hero />
      <AboutUsSection />
      {latestPost && (
        <LatestSection post={latestPost} projects={latestProjects} />
      )}
      <MakerspacesSection />
      <JoinUsSection />
    </main>
  );
}
