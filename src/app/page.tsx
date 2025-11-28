import { HeroSection } from '../components/sections/HeroSection';
import { EventsSection } from '../components/sections/EventsSection';
import { MakerspacesSection } from '../components/sections/MakerspacesSection';
import { ProjectsHighlightSection } from '../components/sections/ProjectsHighlightSection';
import { FAQSection } from '../components/sections/FAQSection';
import { Navigation } from '@/components/Navigation';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div>
        <HeroSection />
        <EventsSection />
        <MakerspacesSection />
        <ProjectsHighlightSection />
        <FAQSection />
      </div>
    </div>
  );
}