import { AnnouncementsSection } from "@/components/sections/AnnouncementsSection";
import { StudentSection } from "../sections/StudentSection";
import ProjectsSection from "../sections/ProjectsSection";
import { SocialsSection } from "../sections/SocialsSection";
import { SponsorSection } from "../sections/SponsorSection";
import TeamSection from "../sections/TeamSection";
import { ExploreHeader } from "../sections/ExploreHeader";

export function ExplorePage() {
  return (
    <main className="min-h-screen pt-[88px]">
      <ExploreHeader />
      <AnnouncementsSection />
      <ProjectsSection />
      <StudentSection />
      <TeamSection />
      <SocialsSection />
      <SponsorSection />
    </main>
  );
}
