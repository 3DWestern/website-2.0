import { GraduationCap, Shield, Wrench, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const trainings = [
  {
    id: 1,
    title: "Level 1: Makerspace Access",
    description: "General safety training required for all students to access the makerspaces",
    duration: "30 minutes",
    type: "Required",
    icon: Shield,
    features: [
      "General safety protocols",
      "Space rules and guidelines",
      "Emergency procedures",
      "Basic tool awareness"
    ]
  },
  {
    id: 2,
    title: "3D Printing Certification",
    description: "Learn to operate FDM and resin 3D printers independently",
    duration: "2 hours",
    type: "Specialized",
    icon: GraduationCap,
    features: [
      "Printer operation",
      "Slicing software",
      "Material selection",
      "Troubleshooting"
    ]
  },
  {
    id: 3,
    title: "Laser Cutting Certification",
    description: "Get certified to use our laser cutting equipment for your projects",
    duration: "1.5 hours",
    type: "Specialized",
    icon: Wrench,
    features: [
      "Machine operation",
      "Material compatibility",
      "Design preparation",
      "Safety procedures"
    ]
  },
  {
    id: 4,
    title: "Woodworking Tools Training",
    description: "Comprehensive training on table saws, band saws, and other power tools",
    duration: "3 hours",
    type: "Specialized",
    icon: Wrench,
    features: [
      "Power tool operation",
      "Safety equipment",
      "Measurement techniques",
      "Project planning"
    ]
  }
];

export function TrainingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4">Get Certified</Badge>
          <h2 className="text-4xl mb-4">Training & Certification</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete required training to unlock access to our equipment and facilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {trainings.map((training) => (
            <Card key={training.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <training.icon size={24} className="text-purple-600" />
                  </div>
                  <Badge variant={training.type === "Required" ? "default" : "secondary"}>
                    {training.type}
                  </Badge>
                </div>
                <CardTitle>{training.title}</CardTitle>
                <CardDescription>{training.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-sm text-muted-foreground">Duration: </span>
                  <span className="text-sm">{training.duration}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {training.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full gap-2">
                  Register on OWL <ExternalLink size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-purple-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            All trainings are available on OWL. Complete Level 1 training first to gain access to the makerspaces, 
            then pursue specialized certifications for the equipment you want to use.
          </p>
          <Button size="lg" className="gap-2">
            View Training Schedule <ExternalLink size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
}
