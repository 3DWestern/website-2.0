import { Building2, Mail, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export function BookingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">Book Our Spaces</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reserve our makerspaces for private workshops, team projects, or organizational events
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Organizations */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Building2 size={24} className="text-purple-600" />
              </div>
              <CardTitle>Organizations & Clubs</CardTitle>
              <CardDescription>
                Host your club meetings, workshops, or team building events in our spaces
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1.5" />
                  Private access to equipment
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1.5" />
                  Dedicated time slots
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1.5" />
                  Support staff available
                </li>
              </ul>
              <Button className="w-full gap-2" variant="outline">
                <Mail size={16} />
                Email booking@uwo.ca
              </Button>
            </CardContent>
          </Card>

          {/* Professors */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users size={24} className="text-purple-600" />
              </div>
              <CardTitle>Faculty & Professors</CardTitle>
              <CardDescription>
                Bring your class to the makerspace for hands-on learning experiences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1.5" />
                  Guided tours available
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1.5" />
                  Equipment demonstrations
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1.5" />
                  Custom workshop planning
                </li>
              </ul>
              <Button className="w-full gap-2" variant="outline">
                <Mail size={16} />
                Email booking@uwo.ca
              </Button>
            </CardContent>
          </Card>

          {/* External Organizations */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Building2 size={24} className="text-purple-600" />
              </div>
              <CardTitle>External Organizations</CardTitle>
              <CardDescription>
                Partner with us for innovation workshops and product development sessions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1.5" />
                  Full facility access
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1.5" />
                  Flexible scheduling
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1.5" />
                  Professional support
                </li>
              </ul>
              <Button className="w-full gap-2" variant="outline">
                <Mail size={16} />
                Email booking@uwo.ca
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl mb-4">Ready to Book?</h3>
            <p className="text-muted-foreground mb-6">
              Contact us at <a href="mailto:booking@uwo.ca" className="text-purple-600 hover:underline">booking@uwo.ca</a> with 
              your preferred dates, number of attendees, and specific requirements. We'll work with you to create the perfect experience.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Mail size={20} />
                Send Booking Request
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
