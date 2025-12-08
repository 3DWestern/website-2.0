// Login page will be covered by the frontend team so we
// Shouldn't worry about this page
// import { useState } from 'react';
// import { Badge } from '../ui/badge';
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
// import { Button } from '../ui/button';
// import { Input } from '../ui/input';
// import { Label } from '../ui/label';
// import { Separator } from '../ui/separator';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

export function LoginPage() {
  // const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 flex items-center justify-center py-12 px-4">
      {/* <div className="w-full max-w-md">
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
                <TabsTrigger value="signin" onClick={() => setIsSignUp(false)}>
                  Sign In
                </TabsTrigger>
                <TabsTrigger value="signup" onClick={() => setIsSignUp(true)}>
                  Sign Up
                </TabsTrigger>
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
      </div> */}
    </div>
  );
}
