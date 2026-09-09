'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const APPLY_URL = "#"; // TODO: swap in the real Microsoft Forms link

export function JoinTeamSection() {
	return (
		<section className="py-20">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="rounded-2xl border-2 border-purple-light/40 bg-gradient-to-br from-black-bg to-purple-dark/10 p-10 md:p-16 flex flex-col items-center text-center gap-6 max-w-2xl mx-auto"
				>
					<h2 className="text-4xl">Join Our Team</h2>
					<p className="text-xl text-primary-text/80">
						Help launch Western&apos;s new student-led makerspaces.
					</p>
					<p className="text-secondary-text max-w-lg">
						We&apos;re looking for the founding team of makerspace
						supervisors who teach and support other students on the
						equipment. Any faculty, any year, any experience level welcome.
					</p>
					<div className="flex flex-wrap items-center justify-center gap-4 mt-2">
						<Button asChild variant="gradient" size="pill" className="gap-2">
							<Link href={APPLY_URL} target="_blank" rel="noopener noreferrer">
								Apply Now <ArrowUpRight size={18} />
							</Link>
						</Button>
						<Badge className="text-primary-text">Applications close Sept 30</Badge>
					</div>
				</motion.div>
			</div>
		</section>
	);
}