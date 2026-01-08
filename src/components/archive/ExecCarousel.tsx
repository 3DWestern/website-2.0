'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { items } from '@/components/data/teamdata';

export function ExecCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % items.length);
		}, 3000); // Rotate every 3 seconds

		return () => clearInterval(interval);
	}, []);

	const handleLinkClick = (link: string) => {
		if (!link) return;
		const url = link.startsWith('http') ? link : `https://${link}`;
		window.open(url, '_blank', 'noopener,noreferrer');
	};

	return (
		<section className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
						Meet Our Executive Team
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Get to know the leaders driving innovation at 3DW Makerspace
					</p>
				</div>

				<div className="relative flex items-center justify-center min-h-[400px]">
					{/* Previous items (for smooth transition) */}
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="flex items-center justify-center gap-8 w-full">
							{items.map((exec, index) => {
								const position = (index - currentIndex + items.length) % items.length;
								const isActive = position === 0;
								const isVisible = position < 3; // Show 3 items at a time

								if (!isVisible) return null;

								return (
									<div
										key={index}
										className={`transition-all duration-500 ease-in-out ${
											isActive
												? 'scale-110 z-10 opacity-100'
												: position === 1
													? 'scale-90 z-0 opacity-70 -translate-x-20'
													: 'scale-90 z-0 opacity-70 translate-x-20'
										}`}
									>
										<button
											onClick={() => handleLinkClick(exec.link)}
											className="group relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-purple-200 hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300"
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
													<span className="text-purple-600 font-semibold text-lg">
														{exec.title.charAt(0)}
													</span>
												</div>
											)}
											{/* Overlay on hover */}
											<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-full" />
										</button>
										{/* Name and title below image */}
										{isActive && (
											<div className="mt-4 text-center transition-opacity duration-500 opacity-100">
												<h3 className="text-lg sm:text-xl font-semibold text-gray-900">
													{exec.title}
												</h3>
												<p className="text-sm sm:text-base text-purple-600 mt-1">
													{exec.description}
												</p>
											</div>
										)}
									</div>
								);
							})}
						</div>
					</div>

					{/* Navigation dots */}
					<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 mt-8">
						{items.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentIndex(index)}
								className={`w-2 h-2 rounded-full transition-all duration-300 ${
									index === currentIndex
										? 'bg-purple-600 w-8'
										: 'bg-purple-200 hover:bg-purple-400'
								}`}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

