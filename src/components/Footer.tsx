import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#F9FAFC] text-black mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left column */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white">
                <img src="/logo.png" alt="3DWestern Logo" className="w-8 h-8 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight">3DWestern</span>
              </div>
            </div>
            <p className="text-black text-lg font-semibold max-w-md mt-2">
              Empowering Students to Build & Create
            </p>
          </div>
          {/* Right column */}
          <div className="flex flex-col gap-8 justify-center md:items-end">
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-black">
                <Mail size={20} className="mt-0.5 flex-shrink-0 text-black" />
                <span>contact@3dwestern.ca</span>
              </li>
              <li className="flex items-start gap-2 text-black">
                <MapPin size={20} className="mt-0.5 flex-shrink-0 text-black" />
                <span>Morrissette Entrepreneurship Building, Western University</span>
              </li>
            </ul>
            <div className=" border-black/20  text-center text-black w-full">
              <p>&copy; {new Date().getFullYear()} <span className="font-bold">3DWestern</span>. All rights reserved.</p>
              <div className="mt-2 text-sm flex flex-wrap justify-center items-center gap-2">
                ✨ by&nbsp;
                <a
                  href="https://www.linkedin.com/in/tony-wang1604/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline hover:text-purple-600"
                  title="Frontend"
                >
                  Tony Wang
                </a>
                &nbsp;&nbsp;&&nbsp;&nbsp;
                <a
                  href="https://github.com/lucianlavric"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline hover:text-purple-600"
                  title="Frontend"
                >
                  Lucian Lavric
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
