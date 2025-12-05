import { Calendar, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

export function CalendarSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-4">
            <Calendar size={16} />
            <span>Hours & Availability</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">Makerspace Schedules</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Check real-time availability and open hours for both makerspaces
          </p>
        </div>

        <Tabs defaultValue="digital" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="digital">Digital Makerspace</TabsTrigger>
            <TabsTrigger value="sabourin">Sabourin Makerspace</TabsTrigger>
          </TabsList>

          <TabsContent value="digital">
            <Card>
              <CardHeader>
                <CardTitle>Digital Makerspace Calendar</CardTitle>
                <CardDescription>
                  View open hours, workshops, and reserved times for the digital makerspace
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center border-2 border-dashed">
                  <div className="text-center">
                    <Clock size={48} className="text-slate-400 mx-auto mb-4" />
                    <p className="text-muted-foreground mb-2">Google Calendar Integration</p>
                    <p className="text-sm text-muted-foreground">
                      Embed your Digital Makerspace Google Calendar here
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <h4 className="mb-2">Typical Open Hours</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Monday - Thursday: 9:00 AM - 9:00 PM</p>
                    <p>Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday - Sunday: Closed (Special events only)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sabourin">
            <Card>
              <CardHeader>
                <CardTitle>Sabourin Makerspace Calendar</CardTitle>
                <CardDescription>
                  View open hours, workshops, and reserved times for the woodworking makerspace
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center border-2 border-dashed">
                  <div className="text-center">
                    <Clock size={48} className="text-slate-400 mx-auto mb-4" />
                    <p className="text-muted-foreground mb-2">Google Calendar Integration</p>
                    <p className="text-sm text-muted-foreground">
                      Embed your Sabourin Makerspace Google Calendar here
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <h4 className="mb-2">Typical Open Hours</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Monday - Thursday: 10:00 AM - 8:00 PM</p>
                    <p>Friday: 10:00 AM - 4:00 PM</p>
                    <p>Saturday - Sunday: Closed (Special events only)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
