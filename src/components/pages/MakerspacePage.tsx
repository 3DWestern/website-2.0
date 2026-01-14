'use client';

// import { TrainingSection } from '@/components/sections/TrainingSection';

import { koulen } from '@/lib/fonts';
import { CalendarSection } from '@/components/sections/CalendarSection';
import { motion } from 'framer-motion';


export function MakerspacePage() {
	return (
		<div className="min-h-screen pt-[88px]">
			{/* Header */}
			<section className="bg-white py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
						className={`font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 ${koulen.className}`}
					>
						Accessing the Makerspaces
					</motion.h1>
					<motion.ul
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
						className="space-y-1"
					>
						<li>
							For Western students: Accessing the makerspace requires training on OWL, which you can access{' '}
							<a href="https://westernu.brightspace.com/d2l/le/discovery/view/course/151344" target="_blank" rel="noopener noreferrer" className="underline font-semibold">here</a>.
						</li>
						<li>
							Are you an organization looking to use the makerspace?{' '}
							<a href="mailto:contact@3dwestern.ca" className="underline font-semibold">Contact us</a>.
						</li>
					</motion.ul>

				</div>
			</section>


			{/*			<section className="w-full bg-purple-700 text-white py-4 px-2 text-center text-base font-medium">
				<div className="max-w-5xl mx-auto">
					<h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">Accessing the Makerspace</h2>
				</div>
			</section> */}

			{/* Header NOTE: commented out chatted header 
			<section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<Badge className="mb-4">Facilities</Badge>
					<h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4">About Our Makerspaces</h1>

					<p className="text-xl text-muted-foreground max-w-2xl">
						Explore our state-of-the-art facilities, available equipment, training programs, and booking options
					</p>
				</div>
			</section> */ }

			{/* <MakerspacesSection /> */}
			<CalendarSection />
			{/* <TrainingSection /> */}

		</div>
	);
}
