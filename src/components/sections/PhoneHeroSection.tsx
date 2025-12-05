
import { koulen } from '@/app/layout';

export function PhoneHeroSection() {
  return (
    <section className="h-[98vh] bg-white overflow-hidden px-4 pt-8 relative">
      {/* Content container with rounded corners - 98% height */}
      <div className="relative w-full h-[98%] rounded-[1.25rem] overflow-hidden">
        {/* Content area */}
        <div className="relative w-full h-full bg-gradient-to-b from-purple-800 via-indigo-900 to-black">
          
          {/* Logo in top left */}
          <div className="absolute top-6 left-6">
            <div className="w-14 h-14 rounded-full border-2 border-purple-400/60 flex items-center justify-center">
              <span className={`text-purple-400 text-lg ${koulen.className}`}>3DW</span>
            </div>
          </div>

          {/* Main content area - for 3D graphics, images, etc. */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Placeholder - replace with your content */}
          </div>

        </div>
      </div>

      {/* Bottom left info - blends with white background, only top-right corner rounded */}
      <div className="absolute bottom-0 left-0 bg-white rounded-tr-2xl pl-8 pr-5 py-3">
        <p className="text-gray-900 font-semibold">
          3D Western{' '}
          <span className="text-gray-500 font-normal">
            / Student Makerspace
          </span>
        </p>
        <p className="text-gray-400 text-sm">
          Western University / London, ON
        </p>
      </div>
    </section>
  );
}
