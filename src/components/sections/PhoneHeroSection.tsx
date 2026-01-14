'use client';

import { useLoading } from '@/context/LoadingContext';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import dynamic from 'next/dynamic';
import { LandingButton } from "@/components/LandingButton";

const AssemblyViewer = dynamic(() => import('@/components/AssemblyViewer'), {
	ssr: false
});

export function PhoneHeroSection() {
	console.log('[PhoneHeroSection] Component render');

	const { loadingComplete } = useLoading();
	const isLoaded = loadingComplete;
	const [disclaimerVisible, setDisclaimerVisible] = useState(true);

	useEffect(() => {
		console.log('[PhoneHeroSection] Component mounted');
		console.log('[PhoneHeroSection] loadingComplete:', loadingComplete);
		return () => console.log('[PhoneHeroSection] Component unmounted');
	}, [loadingComplete]);

	useEffect(() => {
		console.log('[PhoneHeroSection] loadingComplete changed to:', loadingComplete);
	}, [loadingComplete]);

	return (
		<section className="h-[98vh] bg-white overflow-hidden relative">
			<div className="absolute inset-0 px-4 md:px-8 lg:px-16 xl:px-8 pt-8">
				{disclaimerVisible && (
					<div className="absolute top-24 left-1/2 -translate-x-1/2 w-[95%] lg:w-max max-w-5xl bg-purple-700 text-white py-3 px-12 rounded-lg text-center text-base font-medium z-10">
						<div className="relative">
							Accessing the makerspace: Level 1 training required (<a href="https://westernu.brightspace.com/d2l/le/discovery/view/course/151344" target="_blank" rel="noopener noreferrer" className="underline font-semibold">access here</a>).
							<button
								onClick={() => setDisclaimerVisible(false)}
								className="absolute right-[-2.5rem] top-1/2 -translate-y-1/2 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-700 transition-colors"
								aria-label="Dismiss notification"
							>
								<X className="w-6 h-6" />
							</button>
						</div>
					</div>
				)}
				{/* Content container with rounded corners - 98% height */}
				<div className="relative w-full h-[98%]">
					<LandingButton isMobile={false} />
					<div className="relative w-full h-full rounded-[1.25rem] lg:rounded-[1rem] overflow-hidden">
						{/* Content area */}
						<div className="absolute inset-0 bg-gradient-to-b from-purple-800 via-indigo-900 to-black">

							{/* Main content area - for 3D graphics, images, etc. */}
							<div className="absolute inset-0">
								{isLoaded && <AssemblyViewer />}
							</div>
						</div>
					</div>
				</div>
				{/* Bottom left info - blends with white background, only top-right corner rounded */}
				<div className={`absolute bottom-2 left-0 bg-white rounded-tr-2xl lg:rounded-tl-2xl pl-10 pr-8 py-6 lg:px-12 lg:py-8 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
					<p className="text-gray-900 font-semibold text-lg lg:text-2xl">
						3D Western{' '}
						<span className="text-gray-500 font-normal">
							/ Student Makerspace
						</span>
						<span className="hidden lg:inline text-gray-500 font-normal"> / </span>
						<span className="block lg:inline text-gray-400 text-base lg:text-lg">
							Western University / London, ON
						</span>
					</p>
				</div>
			</div>
		</section>
	);
}
