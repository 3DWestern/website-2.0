'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { spotlights } from '@/components/data/spotlights';
import { SpotlightCard } from '@/components/content/SpotlightCard';
import { Button } from '../ui/button';

export function StudentSection() {
	const [current, setCurrent] = useState(0);
	const [direction, setDirection] = useState(1);

	const go = (index: number) => {
		setDirection(index > current ? 1 : -1);
		setCurrent(index);
	};

	const prev = () => { if (current > 0) go(current - 1); };
	const next = () => { if (current < spotlights.length - 1) go(current + 1); };

	const variants = {
		enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
		center: { x: 0, opacity: 1 },
		exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
	};

	return (
		<section className="py-16 bg-grey-bg">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header row */}
				<div className="flex items-end justify-between mb-10">
					<div>
						<p className="text-xs font-medium tracking-widest uppercase text-secondary-text mb-1">
							Made by our members
						</p>
						<h2 className={`text-3xl sm:text-4xl `}>
							Student Spotlight
						</h2>
					</div>

					{/* Arrow buttons */}
					<div className="flex gap-2">
						<Button
							size="icon"
							variant="outlined"
							onClick={prev}
							disabled={current === 0}
							aria-label="Previous spotlight"
							className="w-9 h-9 rounded-full  flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
						>
							<ChevronLeft className="w-4 h-4" />
						</Button>
						<Button
							size="icon"
							variant="outlined"
							onClick={next}
							disabled={current === spotlights.length - 1}
							aria-label="Next spotlight"
							className="w-9 h-9 rounded-full flex items-center justify-center  disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
						>
							<ChevronRight className="w-4 h-4" />
						</Button>
					</div>
				</div>

				{/* Slider */}
				<div className="relative overflow-hidden">
					<AnimatePresence mode="wait" custom={direction}>
						<motion.div
							key={current}
							custom={direction}
							variants={variants}
							initial="enter"
							animate="center"
							exit="exit"
							transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
						>
							<SpotlightCard spotlight={spotlights[current]} />
						</motion.div>
					</AnimatePresence>
				</div>

				{/* Dot indicators */}
				<div className="flex justify-center gap-2 mt-6">
					{spotlights.map((_, i) => (
						<button
							key={i}
							onClick={() => go(i)}
							aria-label={`Go to spotlight ${i + 1}`}
							className={`rounded-full transition-all duration-300 ${
								i === current
									? 'w-5 h-2 bg-purple-light'
									: 'w-2 h-2 bg-primary-text/25 hover:bg-primary-text/40'
							}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}