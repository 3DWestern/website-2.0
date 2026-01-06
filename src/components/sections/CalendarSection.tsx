import { Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
              <CardContent className="p-5">
                  
                  
                  {/* digital makerspace calendar  */}
          <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center border-2 border-dashed">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=195d4999e6906278ce183970e2cf265b0a470d9a35e20e80ac2bd15d5f6f783a%40group.calendar.google.com&ctz=America%2FToronto&mode=WEEK"
              style={{ borderWidth: 'solid 1px #777', width: '100%', height: '100%' }}
              width="1000"
              height="600"
              title="Makerspace Google Calendar"
              allowFullScreen
            ></iframe>
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
              <CardContent className="p-5">

                {/* saboruin calendar */ }
                <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center border-2 border-dashed">
                  <iframe
                    src="https://calendar.google.com/calendar/embed?src=6975d8476dd6da2953a2d7544ffbe7f08758862eef0fb7bea801de5eee887f4f%40group.calendar.google.com&ctz=America%2FToronto"
                    style={{ border: 'solid 1px #777', width: '100%', height: '100%' }}
                    width="1000"
                    height="600"
                    title="Sabourin Makerspace Google Calendar"
                    allowFullScreen
                  />
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
