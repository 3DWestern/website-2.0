'use client';

import { useState, useEffect } from 'react';
import { koulen } from '@/lib/fonts';

export function PhoneHeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoadingComplete = () => setIsLoaded(true);
    window.addEventListener('loadingComplete', handleLoadingComplete);
    return () => window.removeEventListener('loadingComplete', handleLoadingComplete);
  }, []);

  return (
    <section className="h-[98vh] bg-white overflow-hidden px-4 md:px-8 lg:px-16 xl:px-24 pt-8 relative">
      {/* Content container with rounded corners - 98% height */}
      <div className="relative w-full h-[98%] rounded-[1.25rem] lg:rounded-[2rem] overflow-hidden">
        {/* Content area */}
        <div className="relative w-full h-full bg-gradient-to-b from-purple-800 via-indigo-900 to-black">
          
          {/* Logo in top left */}
          <div className="absolute top-6 left-6 lg:top-12 lg:left-12">
            <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full border-2 lg:border-3 border-purple-400/60 flex items-center justify-center">
              <span className={`text-purple-400 text-lg lg:text-2xl ${koulen.className}`}>3DW</span>
            </div>
          </div>

          {/* Main content area - for 3D graphics, images, etc. */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Placeholder - replace with your content */}
          </div>

        </div>
      </div>

      {/* Bottom left info - blends with white background, only top-right corner rounded */}
      <div className={`absolute bottom-0 left-0 bg-white rounded-tr-2xl pl-8 pr-5 py-3 lg:pl-16 lg:pr-10 lg:py-6 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
        <p className="text-gray-900 font-semibold text-base lg:text-xl">
          3D Western{' '}
          <span className="text-gray-500 font-normal">
            / Student Makerspace
          </span>
        </p>
        <p className="text-gray-400 text-sm lg:text-base">
          Western University / London, ON
        </p>
      </div>
    </section>
  );
}
