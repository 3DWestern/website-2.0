import { Calendar, Clock, MapPin, Users, Lightbulb, Rocket, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { koulen, krub } from '@/app/layout';

const events = [
  {
    id: 1,
    title: "Pitch Competition Finals",
    date: "Dec 5, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Morrissette Auditorium",
    category: "Competition",
    icon: Rocket,
    description: "Watch students pitch their startup ideas to a panel of investors and entrepreneurs",
    spots: "Open to all"
  },
  {
    id: 2,
    title: "Innovation Workshop Series",
    date: "Dec 10, 2025",
    time: "5:00 PM - 7:00 PM",
    location: "Morrissette Building",
    category: "Workshop",
    icon: Lightbulb,
    description: "Learn design thinking methodologies and rapid prototyping techniques",
    spots: "20 spots available"
  },
  {
    id: 3,
    title: "Entrepreneur Networking Night",
    date: "Dec 15, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "Morrissette Lounge",
    category: "Networking",
    icon: Users,
    description: "Connect with fellow student entrepreneurs, alumni founders, and local business leaders",
    spots: "Open to all"
  },
  {
    id: 4,
    title: "3D Printing Certification",
    date: "Dec 18, 2025",
    time: "4:00 PM - 6:00 PM",
    location: "Digital Makerspace",
    category: "Training",
    icon: GraduationCap,
    description: "Get certified to use our 3D printers independently for your projects",
    spots: "12 spots left"
  },
  {
    id: 5,
    title: "Product Design Sprint",
    date: "Jan 8, 2026",
    time: "All Day",
    location: "Both Makerspaces",
    category: "Workshop",
    icon: Lightbulb,
    description: "Intensive one-day design sprint to take an idea from concept to prototype",
    spots: "15 spots available"
  },
  {
    id: 6,
    title: "Startup Showcase",
    date: "Jan 15, 2026",
    time: "6:00 PM - 10:00 PM",
    location: "Morrissette Building",
    category: "Showcase",
    icon: Rocket,
    description: "Annual exhibition of student-led ventures and innovative projects",
    spots: "Open to all"
  }
];

const categoryColors: Record<string, string> = {
  "Competition": "bg-purple-100 text-purple-700",
  "Workshop": "bg-blue-100 text-blue-700",
  "Networking": "bg-green-100 text-green-700",
  "Training": "bg-orange-100 text-orange-700",
  "Showcase": "bg-pink-100 text-pink-700"
};

export function EventsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center flex flex-col gap-2 mb-12">
          <div className={`text-3xl font-bold ${koulen.className}`}>
            OUR EVENTS
          </div>
          <div className={`text-lg ${krub.className}`}>
          We cultivate innovation through workshops & events. 
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => {
            const Icon = event.icon;
            return (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${categoryColors[event.category] || 'bg-slate-100'}`}>
                      <Icon size={24} />
                    </div>
                    <Badge variant="secondary">{event.category}</Badge>
                  </div>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={16} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock size={16} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-sm text-purple-600">{event.spots}</span>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Register
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
}
