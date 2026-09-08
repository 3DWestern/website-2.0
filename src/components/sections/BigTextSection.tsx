'use client';
import { bigstats } from "@/components/data/bigtext";
import { motion } from "motion/react";
import { Hammer, CalendarDays, Footprints } from "lucide-react";

const stats = [
	{ icon: Hammer, value: bigstats.projects, label: "Projects Made" },
	{ icon: CalendarDays, value: bigstats.events, label: "Events Held" },
	{ icon: Footprints, value: bigstats.visits, label: "Active Visits" },
];

export function BigTextSection() {
	return (
		<section className="flex w-full flex-col items-center text-center py-10">
			<div className="w-full flex flex-col sm:flex-row items-stretch justify-center divide-y sm:divide-y-0 sm:divide-x divide-dashed divide-purple-light/20">
				{stats.map((stat, i) => {
					const Icon = stat.icon;
					return (
						<motion.div
							key={stat.label}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: i * 0.15 }}
							className="w-full flex flex-col items-center gap-2 px-8 py-6 sm:py-0"
						>
							<Icon className="size-6 text-purple-light/70 mb-1" strokeWidth={1.75} />
							<h1>
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-dark to-purple-light">
									{stat.value}
								</span>
							</h1>
							<h3>
								<span className="font-bold text-xl sm:text-2xl md:text-3xl text-purple-dark">
									{stat.label}
								</span>
							</h3>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
}