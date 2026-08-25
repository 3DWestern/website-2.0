import { Hero } from "@/components/sections/Hero";
import { MorissetteModel } from "@/components/sections/MorissetteModel";
import { BigTextSection } from "@/components/sections/BigTextSection";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { LatestSection } from "@/components/sections/LatestSection";
import { MakerspacesSection } from "@/components/sections/MakerspacesSection";
import { ExecsSection } from "@/components/sections/ExecsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { JoinUsSection } from "@/components/sections/JoinUsSection";
import { api } from "@/lib/cms/api.server";

export async function HomePage() {
  const [latestPosts, latestProjects] = await Promise.all([
    api.for("blogs").getMany({ limit: 1 }),
    api.for("projects").getMany({ limit: 4 }),
  ]);

  const latestPost = latestPosts[0] ?? null;

  return (
    <main>
      <Hero />
      <MorissetteModel />
      <BigTextSection />
      <AboutUsSection />
      {latestPost && (
        <LatestSection post={latestPost} projects={latestProjects} />
      )}
      <MakerspacesSection />
      <ExecsSection />
      <FAQSection />
      <JoinUsSection />
    </main>
  );
}