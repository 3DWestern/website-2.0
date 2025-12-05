import { ArrowRight, Wrench, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { koulen, krub } from '@/lib/fonts';

export function AboutUsSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
          <div className={`my-6 text-3xl lg:text-4xl font-bold ${koulen.className}`}>
            About Us
          </div>

          <div className="flex flex-col gap-4">

            <div>
              <div className="font-bold">3D Western (3DW) is Western University&apos;s student-run organization for design, prototyping, and creative technology.</div>
              <div>We manage the university&apos;s two Makerspaces—Digital and Sabourin—on behalf of Morrissette.</div>
            </div>
            
            <div>
              <div className="font-bold">Across both facilities, we support every step of the creation process: from concept sketching and rapid prototyping to fabrication, testing, and idea validation.</div>
              <div>Whether you&apos;re building your first project or developing a polished prototype, our team provides guidance, training, and a place to experiment.</div>
            </div>
            
            <div>
              <div className="font-bold">Our equipment includes:</div>
              <div>3D printers, laser cutters, water cutters, Cricut machines, sewing machines, soldering stations, and Raspberry Pis—along with a growing inventory of digital fabrication and woodworking tools.</div>
            </div>
            
            <div>
              <div className="font-bold">As 3DW expands, our website and dashboard will become the central portal for accessing services, workshops, equipment bookings, and club activities.</div>
              <div>We&apos;re building a community where anyone can create, learn, and innovate—no experience required.</div>
            </div>
          </div>

      </div>
    </section>
  );
}
