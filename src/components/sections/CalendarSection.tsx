import { Calendar, Clock } from 'lucide-react';
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
              <CardHeader>
                <CardTitle>Digital Makerspace Calendar</CardTitle>
                <CardDescription>
                  View open hours, workshops, and reserved times for the digital makerspace
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center border-2 border-dashed">
                  {/* Google Calendar Embed */}
          <div className="flex justify-center mb-8 mt-8">
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FToronto&showPrint=0&mode=WEEK&src=NDY0NDkxYzcxOWU5MTUwNWRkOWUxNTVkZmJmYmUyZGVmYTM5N2QxMTI0OWFhYjI5MjFlN2JmNWQwNzdmMTZmMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NzRkNzk1ODgzZTRjODU0NjcwNGE2ZmM4ZDFlNzVhZWQ4ZWNhNGUyMDdjMjMyYzdkZjhlOWFkY2ZhZTE2ZWU2ZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=MmEzNmVlMzYwYWIwMjRjMWVjMTI1ZWM0ODQyNDY5NGQwODIwMWUzZTExNWRkYWI5MDFlMTliZDNlNjAzNDg1YUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZmZlYTA5NGU5YWU3MWE2NDdmODdjZGJjMjJkNTQ1NzcxOGVjMmFkYTFkYjE5ZDJjZmQ0MDZkY2YxYmVlOTNlYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZDMxODI5OTI1ZTRmYTM5M2E4YzUyOWU5YzFmZjg3YTdiMjkzNDAxOTdiNjI4MzEzZGJiZWMwZWRkOWIzZDliMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZDZlY2E5NmQ4YjNmODE5N2E4YjQ5YWFiM2RkNTFkOGVhZmY4MGRjYTg0ZDA4ZGRiMWEwNmNmMjVjM2MwMzk0NUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=MTE1NjM5MmRkNDE0MjY4YzI4MGY3Zjg4N2RkNTU1NDNiNDIyMTVmYmQ0NGU0M2QzNDM5ODg3NzFkOTJkYThiYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZmU1NzEyYjA1YTZlMzFhYjgzNWQ3ZjRkMGM4YTAwYTJhN2JkMTc0OGYyNzYwMmE0NTcwOWMxYzllMmM0ZjAwY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NTRhYTkwNmVhYjRiNWEyZGU2NGFhYWZkMGFiOWFhNWM4Mzg1ODRlMzFlYTAzOTJjNzRlOGZhNWFiZmNiZjQ5ZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NWY0NTA5YzdlNzdiN2NlN2M5NmFjY2E1ZDVhMjU2NzljNTBhM2EzNDJjMTRkZjc2NmQ0NWM1ZDA3OTNjYWQyY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YmIyMTYyNzI1YzlmZWIyNDEwMGI1OTg4ZTljYTg4NDc1YjM0Yjg4NWE4ZmNlOGIxNGRhYjUzNzkyM2Y5MjViMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=OGYzYWIwNDAwOTc3MWExYTI5YzMwMDkyNWRlOTBiOTk4MWUyNWQ0NWJkY2ZkMGQ0M2EwZWU3YjUzNWMwZjc1N0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=M2Y5YzlhMjA0NDY3MjkyZDk1OTdlZWQxNWI5ODExNDE2NGM3YjAyNDNiYWUyZTI0MDAxZGIxOGY5NWQ2YjRkNUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23009688&color=%23d50000&color=%23ef6c00&color=%23b39ddb&color=%23a2c5fd&color=%23e67c73&color=%23fda4b8&color=%234285f4&color=%238e24aa&color=%23f6bf26&color=%23f6bf26&color=%23f6bf26&color=%234285f4"
              style={{ borderWidth: 0 }}
              width="800"
              height="600"
              frameBorder="0"
              scrolling="no"
              title="Makerspace Google Calendar"
              allowFullScreen
            ></iframe>
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
<iframe
  src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FToronto&showPrint=0&showCalendars=0&src=NzRkNzk1ODgzZTRjODU0NjcwNGE2ZmM4ZDFlNzVhZWQ4ZWNhNGUyMDdjMjMyYzdkZjhlOWFkY2ZhZTE2ZWU2ZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23d50000"
  style={{ border: 'solid 1px #777' }}
  width="1000"
  height="600"
  frameBorder="0"
  scrolling="no"
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
