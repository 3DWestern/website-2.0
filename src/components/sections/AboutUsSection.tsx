'use client';

import { koulen } from '@/lib/fonts'
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from 'react'
import Image from 'next/image'

// TOOD: adjust sizing of images over md screens 
const content = [
	{
		title: "Who We Are",
		description: "Western University's student-run organization for design, prototyping, and creative technology.",
		detail: "We manage the university's two Makerspaces—Digital and Sabourin—on behalf of Morrissette.",
		image: '/images/digital.jpg'
	},
	{
		title: "What We Do",
		description: "Across both facilities, we support every step of the creation process: from concept sketching and rapid prototyping to fabrication, testing, and idea validation.",
		detail: "Whether you're building your first project or developing a polished prototype, our team provides guidance, training, and a place to experiment.",
		image: '/images/sabourin.jpg'
	},
	{
		title: "Our Equipment",
		description: "Our equipment includes:",
		detail: "3D printers, laser cutters, water cutters, Cricut machines, sewing machines, soldering stations, and Raspberry Pis—along with a growing inventory of digital fabrication and woodworking tools.",
		image: undefined
	},
	{
		title: "Our Vision",
		description: "As 3DW expands, our website and dashboard will become the central portal for accessing services, workshops, equipment bookings, and club activities.",
		detail: "We're building a community where anyone can create, learn, and innovate—no experience required.",
		image: undefined
	}
];

export function AboutUsSection() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"]
	});

	return (
		<section ref={containerRef} className="relative bg-white">
			{/* Header */}
			<div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm py-4 lg:py-10">
				<motion.div
					initial={{ opacity: 0, scale: 1.5, y: 20 }}
					whileInView={{ opacity: 1, scale: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, type: "spring" }}
					className={`text-3xl lg:text-5xl xl:text-6xl font-bold ${koulen.className} text-center`}
				>
					ABOUT US
				</motion.div>
			</div>

			{/* Sticky Cards Container */}
			<div className="relative">
				{content.map((item, index) => {
					const targetScale = 1 - ((content.length - index) * 0.05);
					return (
						<Card
							key={index}
							index={index}
							title={item.title}
							description={item.description}
							detail={item.detail}
							image={item.image}
							progress={scrollYProgress}
							range={[index * 0.25, 1]}
							targetScale={targetScale}
						/>
					);
				})}
			</div>

			{/* Spacer for scroll effect */}
			<div className="h-[40vh]" />
		</section>
	);
}

interface CardProps {
	index: number;
	title: string;
	description: string;
	detail: string;
	image?: string;
	progress: any;
	range: [number, number];
	targetScale: number;
}

function Card({ index, title, description, detail, image, progress, range, targetScale }: CardProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const scale = useTransform(progress, range, [1, targetScale]);

	return (
		<div className="h-[80vh] w-screen lg:h-screen flex items-start justify-center sticky top-20 px-4 sm:px-6 lg:px-8">
			<motion.div
				ref={containerRef}
				style={{
					scale,
					top: `calc(5% + ${index * 15}px)`
				}}
				className="relative w-full sm:w-4/5 origin-top"
			>
				<div className="bg-linear-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 lg:p-12 shadow-xl border border-purple-100 h-1/2 sm:h-screen flex items-start overflow-hidden">
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
							<div className="order-1 md:order-2 relative w-full h-48 shrink-0 rounded-2xl overflow-hidden">
								<Image
									src={image}
									alt={title}
									fill
									className="object-cover"
								/>
							</div>
						)}
					</div>
				</div>
			</motion.div>
		</div>
	);
}
