import { HeroSection } from '../sections/HeroSection';
import { EventsSection } from '../sections/EventsSection';
import { MakerspacesSection } from '../sections/MakerspacesSection';
import { ProjectsHighlightSection } from '../sections/ProjectsHighlightSection';
import { FAQSection } from '../sections/FAQSection';

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