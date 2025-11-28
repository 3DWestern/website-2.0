import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Badge } from '../ui/badge';
import Link from 'next/link';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const featuredProjects = [
  {
    id: 1,
    title: "Smart Garden System",
    maker: "Sarah Chen",
    category: "IoT & Electronics",
    description: "Automated indoor garden with sensors, custom PCB, and mobile app control",
    image: "https://images.unsplash.com/photo-1760493828288-d2dbb70d18c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwbGFiJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjMzNDUxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tools: ["3D Printing", "Laser Cutting", "Electronics"]
  },
  {
    id: 2,
    title: "Custom Drone Frame",
    maker: "Engineering Team",
    category: "Robotics",
    description: "Lightweight carbon-reinforced frame designed for engineering competition",
    image: "https://images.unsplash.com/photo-1752614672115-adcf3e2596af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByaW50ZXIlMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc2MzM0NTEyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tools: ["3D Printing", "CAD Design"]
  },
  {
    id: 3,
    title: "Modern Desk Build",
    maker: "Marcus Johnson",
    category: "Furniture",
    description: "Hand-crafted desk with integrated cable management and wireless charging",
    image: "https://images.unsplash.com/photo-1678184098161-7ab2c5e8592a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kd29ya2luZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc2MzM0NTEyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tools: ["Woodworking", "CNC Router"]
  },
  {
    id: 4,
    title: "Product Prototype",
    maker: "Innovation Lab",
    category: "Product Design",
    description: "Full-scale mockup for user testing and investor presentations",
    image: "https://images.unsplash.com/photo-1600428610161-e98636332e98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90b3R5cGUlMjBwcm9kdWN0JTIwZGVzaWdufGVufDF8fHx8MTc2MzM0NTEyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tools: ["3D Printing", "Laser Cutting"]
  }
];

export function ProjectsHighlightSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <Badge className="mb-4">Student Work</Badge>
            <h2 className="text-4xl mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              See what students are building in our makerspaces
            </p>
          </div>
          <Link href="/gallery" className="hidden md:block">
            <Button variant="outline" className="gap-2">
              View Gallery <ArrowRight size={16} />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="aspect-square overflow-hidden bg-slate-100">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">
                  {project.category}
                </Badge>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="text-sm">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">By {project.maker}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tools.map((tool) => (
                      <span key={tool} className="text-xs px-2 py-1 bg-purple-50 text-purple-600 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link href="/gallery">
            <Button className="gap-2">
              View Gallery <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
