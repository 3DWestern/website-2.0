'use client';

import Image from "next/image";
import { motion } from "motion/react";

export function MorrissetteSection() {
	return (
		<section className="py-14 border-t border-b-grey">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 15 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="flex flex-col md:flex-row items-center justify-between gap-8"
				>
					<Image
						src="/images/morrissette-partnership-for-dark.svg"
						alt="In partnership with Western Morrissette Institute for Entrepreneurship, powered by Ivey"
						width={364}
						height={129}
						className="h-26 w-auto object-contain opacity-90 shrink-0"
					/>
					<p className="text-secondary-text text-center md:text-right max-w-xl">
						Built in partnership with{" "}
						<span className="text-primary-text">Morrissette Entrepreneurship</span>,
						supporting student innovation from first idea to finished prototype.
					</p>
				</motion.div>
			</div>
		</section>
	);
}