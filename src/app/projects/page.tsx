import { ProjectsPage } from '@/components/pages/ProjectsPage';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <ProjectsPage />
      <Footer />
    </div>
  );
}

