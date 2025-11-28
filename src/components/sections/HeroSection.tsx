import { ArrowRight, Wrench, Zap, Users } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full">
              Student-Run • Morrissette Partnership
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl">
                Build Your Ideas at Western's Premier Makerspace
              </h1>
              <p className="text-xl text-muted-foreground">
                From concept to creation. Access professional-grade tools, training, and support 
                to bring your projects to life at our digital and woodworking makerspaces.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/login">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight size={20} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Wrench size={20} className="text-purple-600" />
                </div>
                <div>
                  <p className="text-muted-foreground">Professional Tools</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap size={20} className="text-purple-600" />
                </div>
                <div>
                  <p className="text-muted-foreground">Free Workshops</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users size={20} className="text-purple-600" />
                </div>
                <div>
                  <p className="text-muted-foreground">Expert Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576344671421-374280113976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtlcnNwYWNlJTIwd29ya3Nob3AlMjB0b29sc3xlbnwxfHx8fDE3NjMzNDUxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Makerspace workshop"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <p className="text-sm text-muted-foreground mb-1">Now Offering</p>
              <p>3D Printing • Laser Cutting • Woodworking • CNC Machining</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
