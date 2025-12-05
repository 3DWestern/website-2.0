import { HeroSection } from '@/components/sections/HeroSection';
import { EventsSection } from '@/components/sections/EventsSection';
import { MakerspacesSection } from '@/components/sections/MakerspacesSection';
import { ProjectsHighlightSection } from '@/components/sections/ProjectsHighlightSection';
import { FAQSection } from '@/components/sections/FAQSection';

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <EventsSection />
      <MakerspacesSection />
      <ProjectsHighlightSection />
      <FAQSection />
    </div>
  );
}