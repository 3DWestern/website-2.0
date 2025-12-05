import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, CheckCircle2, Clock, FileText, Calendar, Award } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

// This would be a protected route in a real app
export function DashboardPage() {
  const [isLoggedIn] = useState(false); // Set to true to see dashboard

  // Login/Signup view
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">3DW</span>
              </div>
            </div>
            <h1 className="text-3xl mb-2">Welcome to 3DW</h1>
            <p className="text-muted-foreground">Access your makerspace dashboard</p>
          </div>

          <Card>
            <CardHeader>
              <Tabs defaultValue="signin" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="signin">Sign In</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>

                <TabsContent value="signin" className="mt-6">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signin-email">Email</Label>
                      <Input 
                        id="signin-email" 
                        type="email" 
                        placeholder="your.email@uwo.ca"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="signin-password">Password</Label>
                        <a href="#" className="text-sm text-purple-600 hover:underline">
                          Forgot password?
                        </a>
                      </div>
                      <Input 
                        id="signin-password" 
                        type="password" 
                        placeholder="••••••••"
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Sign In
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="signup" className="mt-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="signup-firstname">First Name</Label>
                        <Input 
                          id="signup-firstname" 
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-lastname">Last Name</Label>
                        <Input 
                          id="signup-lastname" 
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input 
                        id="signup-email" 
                        type="email" 
                        placeholder="your.email@uwo.ca"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-student-id">Student ID</Label>
                      <Input 
                        id="signup-student-id" 
                        placeholder="250123456"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <Input 
                        id="signup-password" 
                        type="password" 
                        placeholder="••••••••"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-confirm-password">Confirm Password</Label>
                      <Input 
                        id="signup-confirm-password" 
                        type="password" 
                        placeholder="••••••••"
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Create Account
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardHeader>
          </Card>

          <div className="mt-8 space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-gradient-to-br from-purple-50 to-indigo-50 px-2 text-muted-foreground">
                  After login
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 space-y-3">
              <h3 className="text-center mb-4">Access Your Dashboard</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                  <span>Submit 3D printing and laser cutting jobs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                  <span>Track your training certifications</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                  <span>Register for workshops and events</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                  <span>Reserve equipment and spaces</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard view (shown when logged in)
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl mb-2">Welcome back, Alex!</h1>
          <p className="text-lg text-muted-foreground">Manage your projects, training, and reservations</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FileText size={24} className="text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl">3</p>
                  <p className="text-sm text-muted-foreground">Active Jobs</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Award size={24} className="text-green-600" />
                </div>
                <div>
                  <p className="text-2xl">4</p>
                  <p className="text-sm text-muted-foreground">Certifications</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Calendar size={24} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl">2</p>
                  <p className="text-sm text-muted-foreground">Upcoming Events</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Clock size={24} className="text-orange-600" />
                </div>
                <div>
                  <p className="text-2xl">12h</p>
                  <p className="text-sm text-muted-foreground">Space Hours</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="jobs" className="space-y-6">
          <TabsList>
            <TabsTrigger value="jobs">My Jobs</TabsTrigger>
            <TabsTrigger value="training">Training</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="submit">Submit Job</TabsTrigger>
          </TabsList>

          <TabsContent value="jobs" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Active Print Jobs</CardTitle>
                <CardDescription>Track your 3D printing and laser cutting requests</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <p>Prototype Housing v3</p>
                    <p className="text-sm text-muted-foreground">3D Print - PLA White</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <Badge className="gap-1">
                        <Clock size={12} />
                        In Progress
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-1">Est. 4h remaining</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <p>Acrylic Panel Cut</p>
                    <p className="text-sm text-muted-foreground">Laser Cutting - Clear Acrylic</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <Badge variant="secondary" className="gap-1">
                        <Clock size={12} />
                        Queued
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-1">Position #2</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg bg-green-50">
                  <div className="flex-1">
                    <p>Custom Bracket</p>
                    <p className="text-sm text-muted-foreground">3D Print - PETG Black</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <Badge variant="outline" className="gap-1 bg-white">
                        <CheckCircle2 size={12} className="text-green-600" />
                        Ready for Pickup
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-1">Bin #A7</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="training" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>My Certifications</CardTitle>
                <CardDescription>Your completed and in-progress training</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border rounded-lg bg-green-50">
                  <div className="flex items-center justify-between mb-2">
                    <p>Level 1: Makerspace Access</p>
                    <CheckCircle2 size={20} className="text-green-600" />
                  </div>
                  <p className="text-sm text-muted-foreground">Completed Nov 10, 2025</p>
                </div>

                <div className="p-4 border rounded-lg bg-green-50">
                  <div className="flex items-center justify-between mb-2">
                    <p>3D Printing Certification</p>
                    <CheckCircle2 size={20} className="text-green-600" />
                  </div>
                  <p className="text-sm text-muted-foreground">Completed Nov 15, 2025</p>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p>Laser Cutting Certification</p>
                    <Badge variant="secondary">In Progress</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Workshop scheduled: Dec 18, 2025</p>
                  <Progress value={60} />
                  <p className="text-xs text-muted-foreground mt-2">2/3 modules complete</p>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p>Woodworking Tools Training</p>
                    <Badge variant="outline">Not Started</Badge>
                  </div>
                  <Button variant="outline" size="sm" className="mt-2">
                    Register for Training
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>My Registered Events</CardTitle>
                <CardDescription>Workshops and events you're attending</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p>Laser Cutting Workshop</p>
                    <Badge>Upcoming</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Dec 18, 2025 • 4:00 PM - 6:00 PM</p>
                  <p className="text-sm text-muted-foreground">Digital Makerspace</p>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p>Product Design Sprint</p>
                    <Badge>Upcoming</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Jan 8, 2026 • All Day</p>
                  <p className="text-sm text-muted-foreground">Both Makerspaces</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="submit" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Submit New Job</CardTitle>
                <CardDescription>Upload your files for 3D printing or laser cutting</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label>Job Type</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <Button type="button" variant="outline" className="h-20">
                        3D Printing
                      </Button>
                      <Button type="button" variant="outline" className="h-20">
                        Laser Cutting
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project-name">Project Name</Label>
                    <Input id="project-name" placeholder="My Project" />
                  </div>

                  <div className="space-y-2">
                    <Label>Upload Files</Label>
                    <div className="border-2 border-dashed rounded-lg p-12 text-center">
                      <Upload size={48} className="mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground mb-2">Drag and drop files here</p>
                      <p className="text-sm text-muted-foreground mb-4">Supported: STL, OBJ, SVG, DXF</p>
                      <Button type="button" variant="outline">
                        Browse Files
                      </Button>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Job Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
