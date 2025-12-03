import { Badge } from '@/components/ui/badge';
import { Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const team = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "President",
    program: "Mechanical Engineering",
    image: "https://images.unsplash.com/photo-1621274790572-7c32596bc67f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYzMzA2NTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    name: "Emma Rodriguez",
    role: "Vice President",
    program: "Industrial Design",
    image: "https://images.unsplash.com/photo-1653539465770-2d7120d830bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnRzJTIwd29ya2luZ3xlbnwxfHx8fDE3NjMzMTAwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    name: "James Park",
    role: "Technical Lead",
    program: "Electrical Engineering",
    image: "https://images.unsplash.com/photo-1621274790572-7c32596bc67f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYzMzA2NTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    name: "Sophie Chen",
    role: "Operations Manager",
    program: "Business & Engineering",
    image: "https://images.unsplash.com/photo-1653539465770-2d7120d830bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnRzJTIwd29ya2luZ3xlbnwxfHx8fDE3NjMzMTAwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 5,
    name: "Marcus Johnson",
    role: "Workshop Coordinator",
    program: "Computer Science",
    image: "https://images.unsplash.com/photo-1621274790572-7c32596bc67f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYzMzA2NTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 6,
    name: "Priya Patel",
    role: "Events Lead",
    program: "Mechatronics Engineering",
    image: "https://images.unsplash.com/photo-1653539465770-2d7120d830bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnRzJTIwd29ya2luZ3xlbnwxfHx8fDE3NjMzMTAwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

const companies = [
  "Tesla", "SpaceX", "Apple", "Google", "Meta", "Amazon", 
  "Microsoft", "NVIDIA", "OpenAI", "Shopify", "Stripe", "Uber"
];

export function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4">About Us</Badge>
          <h1 className="text-5xl mb-4">Building the Future of Making at Western</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Student-led innovation in partnership with Morrissette Entrepreneurship
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">Our Mission</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  3DW is a student-run organization partnering with Morrissette Entrepreneurship 
                  to manage and operate Western University's premier makerspaces. We've evolved 
                  from a 3D printing club into the central hub for product design and creation 
                  on campus.
                </p>
                <p>
                  Our mission is to democratize access to professional-grade fabrication tools, 
                  provide comprehensive training, and foster a community of makers, innovators, 
                  and entrepreneurs. We support students from initial concept through to final 
                  prototype, offering both the physical resources and expertise needed to bring 
                  ideas to life.
                </p>
                <p>
                  Through our partnership with Morrissette Entrepreneurship, we operate two 
                  state-of-the-art facilities: the Digital Makerspace for digital fabrication 
                  and the Sabourin Makerspace for woodworking and physical construction.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1758876203342-fc14c0bba67c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjMyODcxNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              Passionate students leading Western's makerspace community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-1">{member.name}</h3>
                  <p className="text-purple-600 mb-1">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.program}</p>
                  <button className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors">
                    <Linkedin size={16} className="text-slate-600" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Companies Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Where Our Alumni Work</h2>
            <p className="text-xl text-muted-foreground">
              Our members have gone on to innovate at leading companies worldwide
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex gap-12 animate-scroll">
              {[...companies, ...companies].map((company, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center px-8 py-4 bg-slate-50 rounded-lg whitespace-nowrap flex-shrink-0"
                >
                  <span className="text-xl text-muted-foreground">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4">Partnership</Badge>
          <h2 className="text-4xl mb-6">Morrissette Entrepreneurship</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Through our collaboration with Morrissette Entrepreneurship, 3DW has evolved into 
            the student organization responsible for managing Western's makerspaces. This 
            partnership enables us to provide comprehensive support for student innovation, 
            from initial ideation through prototype development and beyond.
          </p>
          <p className="text-lg text-muted-foreground">
            Together, we're creating an ecosystem where students can develop entrepreneurial 
            skills, validate their ideas, and build real products that make an impact.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We empower students to push boundaries and bring bold ideas to life
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl mb-3">Community</h3>
                <p className="text-muted-foreground">
                  Building a supportive network of makers and creators at Western
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl mb-3">Learning</h3>
                <p className="text-muted-foreground">
                  Providing hands-on education and skill development opportunities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
