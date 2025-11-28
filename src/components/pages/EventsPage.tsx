'use client';

import { Calendar, Clock, MapPin, Users, Lightbulb, Rocket, GraduationCap, Trophy, Briefcase } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { useState } from 'react';

const allEvents = [
  {
    id: 1,
    title: "Pitch Competition Finals",
    date: "Dec 5, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Morrissette Auditorium",
    category: "Competition",
    icon: Rocket,
    description: "Watch students pitch their startup ideas to a panel of investors and entrepreneurs. Winners receive funding and mentorship.",
    spots: "Open to all",
    featured: true
  },
  {
    id: 2,
    title: "Innovation Workshop Series",
    date: "Dec 10, 2025",
    time: "5:00 PM - 7:00 PM",
    location: "Morrissette Building",
    category: "Workshop",
    icon: Lightbulb,
    description: "Learn design thinking methodologies and rapid prototyping techniques from industry experts.",
    spots: "20 spots available",
    featured: false
  },
  {
    id: 3,
    title: "Entrepreneur Networking Night",
    date: "Dec 15, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "Morrissette Lounge",
    category: "Networking",
    icon: Users,
    description: "Connect with fellow student entrepreneurs, alumni founders, and local business leaders.",
    spots: "Open to all",
    featured: false
  },
  {
    id: 4,
    title: "3D Printing Certification",
    date: "Dec 18, 2025",
    time: "4:00 PM - 6:00 PM",
    location: "Digital Makerspace",
    category: "Training",
    icon: GraduationCap,
    description: "Get certified to use our 3D printers independently for your projects. Hands-on training included.",
    spots: "12 spots left",
    featured: true
  },
  {
    id: 5,
    title: "Product Design Sprint",
    date: "Jan 8, 2026",
    time: "All Day",
    location: "Both Makerspaces",
    category: "Workshop",
    icon: Lightbulb,
    description: "Intensive one-day design sprint to take an idea from concept to prototype using our equipment.",
    spots: "15 spots available",
    featured: false
  },
  {
    id: 6,
    title: "Startup Showcase",
    date: "Jan 15, 2026",
    time: "6:00 PM - 10:00 PM",
    location: "Morrissette Building",
    category: "Showcase",
    icon: Trophy,
    description: "Annual exhibition of student-led ventures and innovative projects. Public demo and voting.",
    spots: "Open to all",
    featured: true
  },
  {
    id: 7,
    title: "Laser Cutting Workshop",
    date: "Jan 20, 2026",
    time: "5:00 PM - 7:00 PM",
    location: "Digital Makerspace",
    category: "Training",
    icon: GraduationCap,
    description: "Learn to operate our laser cutters safely and effectively. Required for laser cutter access.",
    spots: "10 spots left",
    featured: false
  },
  {
    id: 8,
    title: "Industry Speaker Series",
    date: "Jan 25, 2026",
    time: "6:00 PM - 8:00 PM",
    location: "Morrissette Auditorium",
    category: "Networking",
    icon: Briefcase,
    description: "Hear from successful entrepreneurs about their journey from idea to successful business.",
    spots: "Open to all",
    featured: false
  },
  {
    id: 9,
    title: "Woodworking Fundamentals",
    date: "Feb 1, 2026",
    time: "1:00 PM - 4:00 PM",
    location: "Sabourin Makerspace",
    category: "Training",
    icon: GraduationCap,
    description: "Comprehensive safety and operation training for woodworking equipment and power tools.",
    spots: "8 spots available",
    featured: false
  }
];

const categoryColors: Record<string, string> = {
  "Competition": "bg-purple-100 text-purple-700",
  "Workshop": "bg-blue-100 text-blue-700",
  "Networking": "bg-green-100 text-green-700",
  "Training": "bg-orange-100 text-orange-700",
  "Showcase": "bg-pink-100 text-pink-700"
};

export function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredEvents = selectedCategory === 'all' 
    ? allEvents 
    : allEvents.filter(e => e.category.toLowerCase() === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4">Events & Programs</Badge>
          <h1 className="text-5xl mb-4">Morrissette Events</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Workshops, competitions, training sessions, and networking opportunities to fuel your entrepreneurial journey
          </p>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-8">Featured Events</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {allEvents.filter(e => e.featured).map((event) => {
              const Icon = event.icon;
              return (
                <Card key={event.id} className="hover:shadow-lg transition-shadow border-2 border-purple-100">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${categoryColors[event.category] || 'bg-slate-100'}`}>
                        <Icon size={24} />
                      </div>
                      <Badge>{event.category}</Badge>
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
                    <Button className="w-full mt-4">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Events */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-8">All Events</h2>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
            <TabsList>
              <TabsTrigger value="all">All Events</TabsTrigger>
              <TabsTrigger value="competition">Competitions</TabsTrigger>
              <TabsTrigger value="workshop">Workshops</TabsTrigger>
              <TabsTrigger value="training">Training</TabsTrigger>
              <TabsTrigger value="networking">Networking</TabsTrigger>
              <TabsTrigger value="showcase">Showcase</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => {
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

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No events found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">Stay Updated</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Want to receive notifications about new events? Sign up for our newsletter or check the calendar regularly.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg">Subscribe to Updates</Button>
            <Button size="lg" variant="outline">View Calendar</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
