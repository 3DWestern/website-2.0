import { AboutPage } from '@/components/pages/AboutPage';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <AboutPage />
      <Footer />
    </div>
  );
}

