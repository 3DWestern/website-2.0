import { ArrowRight, Wrench, Zap, Users } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { koulen, krub } from '@/app/layout';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="">
            
            <div className="text-center">
              <h1 className={`text-4xl sm:text-5xl lg:text-7xl font-bold ${koulen.className}`}>
                3D Western
              </h1>
            </div>

            <div className="mt-4 flex flex-wrap gap-4 justify-center">
              <Link href="" className="underline">
                  Book the Space
              </Link>
              |
              <Link href="" className="underline">
                  View Makerspace Availability
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
