'use client';

import { koulen } from '@/lib/fonts';
import Link from 'next/link';
import { useLoading } from '@/context/LoadingContext';
import { useState } from 'react';
import { X } from 'lucide-react';


import dynamic from 'next/dynamic';

export function PhoneHeroSection() {
	const { loadingComplete } = useLoading();
	const isLoaded = loadingComplete;
	const [disclaimerVisible, setDisclaimerVisible] = useState(true);


	// Dynamically import AssemblyViewer to avoid SSR issues
	const AssemblyViewer = dynamic(() => import('@/components/AssemblyViewer'), { ssr: false });

	return (
		<section className="h-[98vh] bg-white overflow-hidden px-4 md:px-8 lg:px-16 xl:px-8 pt-8 relative">
			{disclaimerVisible && (
				<div className="absolute top-20 left-1/2 -translate-x-1/2 w-[95%] lg:w-max max-w-5xl bg-purple-700 text-white py-3 px-12 rounded-lg text-center text-base font-medium z-10">
					<div className="relative">
						Accessing the makerspace: Western students require training on OWL (<a href="https://owl.uwo.ca/" target="_blank" rel="noopener noreferrer" className="underline font-semibold">access here</a>). Organizations: <a href="mailto:contact@3dwestern.ca" className="underline font-semibold">Contact us</a>.
						<button
							onClick={() => setDisclaimerVisible(false)}
							className="absolute right-[-2.5rem] top-1/2 -translate-y-1/2"
							aria-label="Dismiss"
						>
							<X className="w-6 h-6" />
						</button>
					</div>
				</div>
			)}
			{/* Content container with rounded corners - 98% height */}
			<div className="relative w-full h-[98%] rounded-[1.25rem] lg:rounded-[1rem] overflow-hidden">
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
						<div className="w-full h-full">
							<AssemblyViewer />
						</div>
					</div>

				</div>
			</div>
			{/* Bottom left info - blends with white background, only top-right corner rounded */}
			<div className={`absolute bottom-2 left-0 lg:left-8 xl:left-16 bg-white rounded-tr-2xl lg:rounded-tl-2xl pl-10 pr-8 py-6 lg:px-12 lg:py-8 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
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
		</section>
	);
}
