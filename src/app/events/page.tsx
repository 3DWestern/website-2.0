import { EventsPage } from '@/components/pages/EventsPage';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function Events() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <EventsPage />
      <Footer />
    </div>
  );
}

