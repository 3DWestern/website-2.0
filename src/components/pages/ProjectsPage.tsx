'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: "Custom Drone Frame",
    category: "3d-printing",
    description: "Student-designed carbon fiber reinforced drone frame for engineering competition",
    image: "https://images.unsplash.com/photo-1752614672115-adcf3e2596af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByaW50ZXIlMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc2MzM0NTEyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: true
  },
  {
    id: 2,
    title: "Laser-Cut Signage",
    category: "laser-cutting",
    description: "Acrylic and wood signage for campus event with intricate design details",
    image: "https://images.unsplash.com/photo-1615378809998-afc205e73bad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNlciUyMGN1dHRpbmclMjBtYWNoaW5lfGVufDF8fHx8MTc2MzM0NTEyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false
  },
  {
    id: 3,
    title: "Prototype Housing",
    category: "3d-printing",
    description: "Functional prototype housing for IoT device with custom mounting system",
    image: "https://images.unsplash.com/photo-1600428610161-e98636332e98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90b3R5cGUlMjBwcm9kdWN0JTIwZGVzaWdufGVufDF8fHx8MTc2MzM0NTEyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false
  },
  {
    id: 4,
    title: "Custom Furniture Piece",
    category: "woodworking",
    description: "Hand-crafted modern desk with integrated cable management",
    image: "https://images.unsplash.com/photo-1678184098161-7ab2c5e8592a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kd29ya2luZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc2MzM0NTEyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: true
  },
  {
    id: 5,
    title: "CNC Machined Parts",
    category: "cnc",
    description: "Precision aluminum parts for robotics project with tight tolerances",
    image: "https://images.unsplash.com/photo-1576344671421-374280113976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtlcnNwYWNlJTIwd29ya3Nob3AlMjB0b29sc3xlbnwxfHx8fDE3NjMzNDUxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false
  },
  {
    id: 6,
    title: "Product Mockup",
    category: "3d-printing",
    description: "Full-scale product mockup for user testing and investor presentations",
    image: "https://images.unsplash.com/photo-1653539465770-2d7120d830bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnRzJTIwd29ya2luZ3xlbnwxfHx8fDE3NjMzMTAwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false
  }
];

const featuredProject = {
  title: "Smart Garden System",
  maker: "Sarah Chen",
  program: "Mechatronics Engineering",
  description: "An automated indoor garden system that monitors soil moisture, light levels, and nutrient content. The project combines 3D printed components, laser-cut acrylic panels, and custom PCB design. This prototype was developed as part of a capstone project and won first place at the Engineering Design Fair.",
  process: [
    "Designed CAD models for 3D printable planters with integrated sensor housing",
    "Laser cut acrylic panels for the frame and water reservoir",
    "Developed custom PCB with Arduino-based controller",
    "Programmed automated watering and lighting schedules",
    "Integrated mobile app for remote monitoring"
  ],
  tools: ["3D Printing", "Laser Cutting", "Electronics", "CAD Design"],
  image: "https://images.unsplash.com/photo-1760493828288-d2dbb70d18c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwbGFiJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjMzNDUxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  makerImage: "https://images.unsplash.com/photo-1653539465770-2d7120d830bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnRzJTIwd29ya2luZ3xlbnwxfHx8fDE3NjMzMTAwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
};

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4">Showcase</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4">Student Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore amazing projects created by students in our makerspaces
          </p>
        </div>
      </section>

      {/* Featured Project Blog */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">Featured Project</Badge>
            <h2 className="text-3xl mb-2">Maker Spotlight</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src={featuredProject.makerImage}
                    alt={featuredProject.maker}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p>{featuredProject.maker}</p>
                  <p className="text-sm text-muted-foreground">{featuredProject.program}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-3xl mb-4">{featuredProject.title}</h3>
                <p className="text-muted-foreground text-lg">{featuredProject.description}</p>
              </div>

              <div>
                <h4 className="mb-3">Build Process</h4>
                <ul className="space-y-2">
                  {featuredProject.process.map((step, index) => (
                    <li key={index} className="flex gap-3 text-muted-foreground">
                      <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-3">Tools Used</h4>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.tools.map((tool) => (
                    <Badge key={tool} variant="secondary">{tool}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl mb-6">All Projects</h2>
            
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="3d-printing">3D Printing</TabsTrigger>
                <TabsTrigger value="laser-cutting">Laser Cutting</TabsTrigger>
                <TabsTrigger value="woodworking">Woodworking</TabsTrigger>
                <TabsTrigger value="cnc">CNC</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-square overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="capitalize">
                      {project.category.replace('-', ' ')}
                    </Badge>
                    {project.featured && <Badge>Featured</Badge>}
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">Want to See Your Project Here?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Share your makerspace creations with us! We love showcasing the incredible work 
            our community produces.
          </p>
          <Button size="lg" className="gap-2">
            Submit Your Project <ExternalLink size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
}
