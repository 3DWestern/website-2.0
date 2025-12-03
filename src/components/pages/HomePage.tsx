import { HeroSection } from '@/components/sections/HeroSection';
import { EventsSection } from '@/components/sections/EventsSection';
import { MakerspacesSection } from '@/components/sections/MakerspacesSection';
import { ProjectsHighlightSection } from '@/components/sections/ProjectsHighlightSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { AboutUsSection } from '@/components/sections/AboutUsSection';

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <EventsSection />
      <MakerspacesSection />
      <ProjectsHighlightSection />
      <FAQSection />
    </div>
  );
}