import { Badge } from '../ui/badge';
import { MakerspacesSection } from '../sections/MakerspacesSection';
import { TrainingSection } from '../sections/TrainingSection';
import { CalendarSection } from '../sections/CalendarSection';
import { BookingSection } from '../sections/BookingSection';

export function MakerspacePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4">Facilities</Badge>
          <h1 className="text-5xl mb-4">About Our Makerspaces</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore our state-of-the-art facilities, available equipment, training programs, and booking options
          </p>
        </div>
      </section>

      <MakerspacesSection />
      <TrainingSection />
      <CalendarSection />
      <BookingSection />
    </div>
  );
}
