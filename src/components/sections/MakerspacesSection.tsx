'use client';

import { Cpu, Hammer, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'motion/react';

const spaces = [
  {
    id: 1,
    name: "Digital Makerspace",
    icon: Cpu,
    description: "High-tech equipment for digital fabrication and prototyping",
    primaryUse: "Digital manufacturing, rapid prototyping, and electronic projects",
    image: "https://images.unsplash.com/photo-1752614672115-adcf3e2596af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByaW50ZXIlMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc2MzM0NTEyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tools: [
      "3D Printers (FDM & Resin)",
      "Laser Cutters",
      "Water Jet Cutter",
      "Electronics Workbench",
      "Soldering Stations",
      "CAD Workstations"
    ],
    projects: [
      "Product prototypes",
      "Custom enclosures",
      "PCB design and assembly",
      "Architectural models",
      "Art installations"
    ]
  },
  {
    id: 2,
    name: "Sabourin Makerspace",
    icon: Hammer,
    description: "Traditional and modern woodworking equipment for building physical projects",
    primaryUse: "Woodworking, furniture building, and physical construction",
    image: "https://images.unsplash.com/photo-1678184098161-7ab2c5e8592a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kd29ya2luZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc2MzM0NTEyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tools: [
      "Table Saw",
      "Band Saw",
      "CNC Router",
      "Drill Press",
      "Sanders & Planers",
      "Hand Tools"
    ],
    projects: [
      "Custom furniture",
      "Wooden prototypes",
      "Display pieces",
      "Storage solutions",
      "Product mockups"
    ]
  }
];

export function MakerspacesSection() {
  return (
    <section className="py-12 lg:py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-5xl xl:text-6xl mb-4">Our Makerspaces</h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Two fully-equipped facilities to support every stage of your creative journey
          </p>
        </motion.div>

        <div className="space-y-12">
          {spaces.map((space, index) => (
            <motion.div
              key={space.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <space.icon size={24} className="text-purple-600" />
                  </div>
                  
                  <h3 className="text-3xl mb-3">{space.name}</h3>
                  <p className="text-lg text-muted-foreground mb-4">{space.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="mb-2">Primary Use</h4>
                    <p className="text-muted-foreground">{space.primaryUse}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="mb-3">Available Equipment</h4>
                      <ul className="space-y-2">
                        {space.tools.map((tool) => (
                          <li key={tool} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check size={16} className="text-purple-600 flex-shrink-0 mt-0.5" />
                            <span>{tool}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3">Project Examples</h4>
                      <ul className="space-y-2">
                        {space.projects.map((project) => (
                          <li key={project} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check size={16} className="text-purple-600 flex-shrink-0 mt-0.5" />
                            <span>{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
