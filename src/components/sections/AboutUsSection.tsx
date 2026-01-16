'use client';

import { koulen } from '@/lib/fonts';
import { content } from '@/components/data/landing';
import Image from 'next/image';

export function AboutUsSection() {
	return (
		<section className="relative bg-white">
			{/* Header */}
			<div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm py-4 lg:py-10">
				<div
					className={`text-3xl lg:text-5xl xl:text-6xl font-bold ${koulen.className} text-center`}
				>
					ABOUT US
				</div>
			</div>

			{/* Simple Stacking Cards */}
			<div className="relative">
				{content.map((item, index) => (
					<Card
						key={index}
						index={index}
						title={item.title}
						description={item.description}
						detail={item.detail}
						image={item.image}
					/>
				))}
			</div>

			{/* Spacer for scroll effect */}
			<div className="h-[50vh] sm:h-[60vh]" />
		</section>
	);
}

interface CardProps {
	index: number;
	title: string;
	description: string;
	detail: string;
	image?: string;
}

function Card({ index, title, description, detail, image }: CardProps) {
	return (
		<div
			className="min-h-[80vh] lg:h-screen w-full flex items-start justify-center sticky px-4 sm:px-6 lg:px-8"
			style={{
				zIndex: 10 + index,
				top: `calc(6rem + ${index * 1.5}rem)`
			}}
		>
			<div className="relative w-full sm:w-4/5 origin-top">
				<div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 lg:p-12 shadow-xl border border-purple-100 flex items-start overflow-hidden">
					<div className="flex flex-col items-start gap-6 w-full">
						{/* Text Content (first on md+, below image on mobile) */}
						<div className="order-2 md:order-1 flex-1 space-y-4 w-full">
							<h3 className={`text-3xl lg:text-4xl font-bold text-gray-900 ${koulen.className}`}>
								{title}
							</h3>
							<p className="text-lg lg:text-xl font-semibold text-gray-800">
								{description}
							</p>
							<p className="text-base lg:text-lg text-gray-600 leading-relaxed">
								{detail}
							</p>
						</div>

						{/* Optional Image (first on mobile, below text on md+) */}
						{image && (
							<div className="order-1 md:order-2 relative w-full h-48 md:h-110 md:mt-10 shrink-0 rounded-2xl overflow-hidden">
								<Image
									src={image}
									alt={title}
									fill
									sizes="(max-width: 768px) 100vw, 40vw"
									className="object-cover"
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
