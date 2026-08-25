'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { announcements } from '@/components/data/announcements';
import { AnnouncementCard } from '@/components/content/AnnouncementCard';
import { Button } from '../ui/button';

const INITIAL_COUNT = 3;
const LOAD_MORE_COUNT = 3;

export function AnnouncementsSection() {
	const ref = useRef(null);
	const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	});

	const y = useTransform(scrollYProgress, [0, 1], ['-30%', '30%']);

	const visibleAnnouncements = announcements.slice(0, visibleCount);
	const hasMore = visibleCount < announcements.length;

	return (
		<section ref={ref} className="relative overflow-hidden py-16">
			{/* Parallax background image */}
			<motion.div
				className="absolute inset-0 w-full h-[160%] -top-[30%]"
				style={{
					y,
					backgroundImage: "url('/images/smaker.jpg')",
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			/>

			{/* Dark overlay */}
			<div className="absolute inset-0 bg-black/60" />

			{/* Content on top */}
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section title */}
				<h2 className={`text-4xl font-bold mb-10`}>
					Announcements
				</h2>

				{/* Card grid */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{visibleAnnouncements.map((announcement, index) => (
						<motion.div
							key={announcement.id}
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.5,
								delay: index < INITIAL_COUNT ? index * 0.1 : 0,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="flex"
						>
							<AnnouncementCard announcement={announcement} />
						</motion.div>
					))}
				</div>

				{/* Show more / show less */}
				{hasMore && (
					<div className="flex justify-center mt-10">
						<Button size="pill" variant="outlined"
							onClick={() => setVisibleCount((c) => c + LOAD_MORE_COUNT)}
						>
							Show older announcements
						</Button>
					</div>
				)}

				{!hasMore && announcements.length > INITIAL_COUNT && (
					<div className="flex justify-center mt-10">
						<Button size="pill" variant="outlined"
							onClick={() => setVisibleCount(INITIAL_COUNT)}
						>
							Show less
						</Button>
					</div>
				)}
			</div>
		</section>
	);
}