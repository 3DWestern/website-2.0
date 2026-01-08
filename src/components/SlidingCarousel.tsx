'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import type { MenuItem } from '@/components/data/teamdata';
import { koulen } from '@/lib/fonts';
import { motion } from 'motion/react';


export function SlidingCarousel({ items }: { items: MenuItem[] }) {
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const carouselRef = useRef<HTMLDivElement>(null);
	const animationRef = useRef<number | null>(null);

	useEffect(() => {
		const autoScroll = () => {
			if (isPaused || isDragging || !carouselRef.current) return;
	
			const carousel = carouselRef.current;
			const scrollAmount = 1; // Pixels to scroll per frame
			const maxScroll = carousel.scrollWidth - carousel.clientWidth;
	
			if (carousel.scrollLeft >= maxScroll - 1) {
				// Reset to start for infinite loop
				carousel.scrollLeft = 0;
			} else {
				carousel.scrollLeft += scrollAmount;
			}
	
			animationRef.current = requestAnimationFrame(autoScroll);
		};

		if (!isPaused && !isDragging) {
			animationRef.current = requestAnimationFrame(autoScroll);
		}

		return () => {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
		};
	}, [isPaused, isDragging]);

	// Mouse drag handlers
	const handleMouseDown = (e: React.MouseEvent) => {
		if (!carouselRef.current) return;
		setIsDragging(true);
		setIsPaused(true);
		setStartX(e.pageX - carouselRef.current.offsetLeft);
		setScrollLeft(carouselRef.current.scrollLeft);
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!isDragging || !carouselRef.current) return;
		e.preventDefault();
		const x = e.pageX - carouselRef.current.offsetLeft;
		const walk = (x - startX) * 2; // Scroll speed multiplier
		carouselRef.current.scrollLeft = scrollLeft - walk;
	};

	const handleMouseUp = () => {
		setIsDragging(false);
		// Resume auto-scroll after a short delay
		setTimeout(() => setIsPaused(false), 2000);
	};

	const handleMouseLeave = () => {
		setIsDragging(false);
		setTimeout(() => setIsPaused(false), 2000);
	};

	// Touch drag handlers for mobile
	const handleTouchStart = (e: React.TouchEvent) => {
		if (!carouselRef.current) return;
		setIsDragging(true);
		setIsPaused(true);
		setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
		setScrollLeft(carouselRef.current.scrollLeft);
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		if (!isDragging || !carouselRef.current) return;
		const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
		const walk = (x - startX) * 2;
		carouselRef.current.scrollLeft = scrollLeft - walk;
	};

	const handleTouchEnd = () => {
		setIsDragging(false);
		setTimeout(() => setIsPaused(false), 2000);
	};

	// Handle click on image
	const handleImageClick = (link: string) => {
		if (isDragging) return; // Prevent click if user was dragging
		if (!link) return;
		const url = link.startsWith('http') ? link : `https://${link}`;
		window.open(url, '_blank', 'noopener,noreferrer');
	};

	// Duplicate items for infinite scroll effect
	const duplicatedItems = [...items, ...items, ...items];

	return (
        <>
			<div className="w-full flex flex-col items-center justify-center gap-y-10">
                <motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6 }}
					className={`text-7xl lg:text-5xl xl:text-6xl font-bold ${koulen.className} text-center`}
				>
					OUR EXECS
				</motion.div>
        
				<div
					ref={carouselRef}
					onMouseDown={handleMouseDown}
					onMouseMove={handleMouseMove}
					onMouseUp={handleMouseUp}
					onMouseLeave={handleMouseLeave}
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}
					className="w-full flex gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none px-4 sm:px-6 lg:px-8"
					style={{
						scrollbarWidth: 'none',
						msOverflowStyle: 'none',
						WebkitOverflowScrolling: 'touch',
					}}
				>
					{duplicatedItems.map((exec, index) => {
						// Use original index for animation direction
						const originalIndex = index % items.length;
						return (
							<motion.div
								key={`${exec.title}-${index}`}
								initial={{ opacity: 0, x: originalIndex % 2 === 0 ? -50 : 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, margin: "-100px" }}
								transition={{ duration: 0.7, delay: 0.2 }}
								className="flex-shrink-0 flex flex-col items-center group"
							>
							<button
								onClick={() => handleImageClick(exec.link)}
								className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-purple-200 hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300 transform hover:scale-105"
								aria-label={`View ${exec.title}'s profile`}
							>
								{exec.image ? (
									<Image
										src={exec.image}
										alt={`${exec.title} - ${exec.description}`}
										fill
										className="object-cover group-hover:scale-110 transition-transform duration-300"
										sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 192px"
									/>
								) : (
									<div className="w-full h-full bg-purple-200 flex items-center justify-center">
										<span className="text-purple-600 font-semibold text-2xl">
											{exec.title.charAt(0)}
										</span>
									</div>
								)}

								{/* Overlay on hover */}
								<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-full" />
							</button>
							{/* Name and title below image */}
							<div className="mt-4 text-center max-w-[192px]">
								<h3 className="text-base sm:text-lg font-semibold text-gray-900 truncate">
									{exec.title}
								</h3>
								<p className="text-sm sm:text-base text-purple-600 mt-1 truncate">
									{exec.description}
								</p>
							</div>
						</motion.div>
					);
					})}
				</div>
			</div>

		</>
	);
}

