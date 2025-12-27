import { Badge } from '@/components/ui/badge';
import { MakerspacesSection } from '@/components/sections/MakerspacesSection';
import { TrainingSection } from '@/components/sections/TrainingSection';
import { CalendarSection } from '@/components/sections/CalendarSection';


export function MakerspacePage() {
  return (
    <div className="min-h-screen">
      {/* Disclaimer Section */}
      <section className="w-full bg-purple-700 text-white py-4 px-2 text-center text-base font-medium">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-lg font-bold mb-1">Accessing the Makerspace</h2>
          <ul className="space-y-1">
            <li>
              For Western students: Accessing the makerspace requires training on OWL, which you can access{' '}
              <a href="https://owl.uwo.ca/" target="_blank" rel="noopener noreferrer" className="underline font-semibold">here</a>.
            </li>
            <li>
              Are you an organization looking to use the makerspace?{' '}
              <a href="mailto:contact@3dwestern.ca" className="underline font-semibold">Contact us</a>.
            </li>
          </ul>
        </div>
      </section>

      {/* Header */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4">Facilities</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4">About Our Makerspaces</h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore our state-of-the-art facilities, available equipment, training programs, and booking options
          </p>
        </div>
      </section>

      <MakerspacesSection />
      <TrainingSection />
      <CalendarSection />

    </div>
  );
}
