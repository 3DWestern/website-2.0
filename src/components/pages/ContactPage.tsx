import { Mail, Building2, Users, HelpCircle, Heart } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4">Get In Touch</Badge>
          <h1 className="text-5xl mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Have questions? Want to collaborate? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Inquiry Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">How Can We Help?</h2>
            <p className="text-xl text-muted-foreground">
              Choose the type of inquiry that best matches your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Building2 size={24} className="text-purple-600" />
                </div>
                <CardTitle className="text-lg">Organization Booking</CardTitle>
                <CardDescription>
                  Reserve the makerspace for your club, organization, or faculty event
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a href="mailto:booking@uwo.ca">
                  <Button variant="outline" className="w-full gap-2">
                    <Mail size={16} />
                    booking@uwo.ca
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users size={24} className="text-purple-600" />
                </div>
                <CardTitle className="text-lg">Student Inquiry</CardTitle>
                <CardDescription>
                  Get feedback on designs, project advice, or specialized assistance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a href="mailto:student@uwo.ca">
                  <Button variant="outline" className="w-full gap-2">
                    <Mail size={16} />
                    student@uwo.ca
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart size={24} className="text-purple-600" />
                </div>
                <CardTitle className="text-lg">Sponsor Inquiry</CardTitle>
                <CardDescription>
                  Partner with us to support student innovation and creativity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a href="mailto:sponsor@uwo.ca">
                  <Button variant="outline" className="w-full gap-2">
                    <Mail size={16} />
                    sponsor@uwo.ca
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <HelpCircle size={24} className="text-purple-600" />
                </div>
                <CardTitle className="text-lg">General Inquiry</CardTitle>
                <CardDescription>
                  Questions about memberships, workshops, or anything else
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a href="mailto:contact@uwo.ca">
                  <Button variant="outline" className="w-full gap-2">
                    <Mail size={16} />
                    contact@uwo.ca
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@uwo.ca" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type</Label>
                    <Select>
                      <SelectTrigger id="inquiryType">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="organization">Organization Booking</SelectItem>
                        <SelectItem value="student">Student Inquiry</SelectItem>
                        <SelectItem value="sponsor">Sponsor Inquiry</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Brief description of your inquiry" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl mb-6">Visit Us</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    Morrissette Entrepreneurship Building<br />
                    Western University<br />
                    London, Ontario, Canada
                  </p>
                </div>

                <div>
                  <h3 className="mb-2">Office Hours</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Monday - Thursday: 9:00 AM - 5:00 PM</p>
                    <p>Friday: 9:00 AM - 4:00 PM</p>
                    <p>Saturday - Sunday: By appointment only</p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:contact@uwo.ca" className="text-purple-600 hover:underline">
                      contact@uwo.ca
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-200 rounded-2xl flex items-center justify-center aspect-square lg:aspect-auto">
              <p className="text-muted-foreground">Map Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">Have a Quick Question?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Check out our FAQ section - you might find the answer you're looking for!
          </p>
          <a href="/#faq">
            <Button size="lg" variant="outline">
              View FAQs
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
