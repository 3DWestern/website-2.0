import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white">3DW</span>
              </div>
              <div className="flex flex-col">
                <span className="tracking-tight">3DW Makerspace</span>
                <span className="text-xs text-slate-400">Western University</span>
              </div>
            </div>
            <p className="text-slate-400 max-w-md">
              A student-run organization partnering with Morrissette Entrepreneurship to manage 
              Western's makerspaces. From idea validation to product creation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-slate-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-slate-400">
                <Mail size={20} className="mt-0.5 flex-shrink-0" />
                <span>contact@uwo.ca</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin size={20} className="mt-0.5 flex-shrink-0" />
                <span>Morrissette Entrepreneurship Building, Western University</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} 3DW Makerspace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
