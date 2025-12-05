import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';

const workshops = [
  {
    id: 1,
    title: "3D Printing Fundamentals",
    date: "Nov 25, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "Digital Makerspace",
    spots: "12 spots left",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1752614672115-adcf3e2596af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByaW50ZXIlMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc2MzM0NTEyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    title: "Laser Cutting Workshop",
    date: "Dec 2, 2025",
    time: "5:00 PM - 7:00 PM",
    location: "Digital Makerspace",
    spots: "8 spots left",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1615378809998-afc205e73bad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNlciUyMGN1dHRpbmclMjBtYWNoaW5lfGVufDF8fHx8MTc2MzM0NTEyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    title: "Woodworking Basics",
    date: "Dec 9, 2025",
    time: "4:00 PM - 7:00 PM",
    location: "Sabourin Makerspace",
    spots: "10 spots left",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1678184098161-7ab2c5e8592a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kd29ya2luZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc2MzM0NTEyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function WorkshopsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4">Upcoming Events</Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">Free Workshops & Training</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our hands-on workshops to learn new skills and get certified to use our equipment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {workshops.map((workshop) => (
            <Card key={workshop.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden bg-slate-100">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{workshop.level}</Badge>
                  <span className="text-sm text-purple-600">{workshop.spots}</span>
                </div>
                <CardTitle>{workshop.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={16} />
                  <span>{workshop.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock size={16} />
                  <span>{workshop.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} />
                  <span>{workshop.location}</span>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  Register on OWL <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            View All Workshops
          </Button>
        </div>
      </div>
    </section>
  );
}
