'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { koulen } from '@/lib/fonts';
import { items, MenuItem } from '@/components/data/teamdata';
import { TeamMemberCard } from '@/components/content/TeamMemberCard';

const LEADERSHIP_PER_PAGE = 4;
const VP_PER_PAGE = 5;

const leadership = items.filter(m =>
	m.role === 'President' || m.role.startsWith('Chief')
);
const vicePresidents = items.filter(m =>
	!m.role.startsWith('Chief') && m.role !== 'President'
);

interface TierProps {
	label: string;
	members: MenuItem[];
	perPage: number;
	cols: number;
}

function Tier({ label, members, perPage, cols }: TierProps) {
	const [page, setPage] = useState(0);
	const [direction, setDirection] = useState(1);
	const totalPages = Math.ceil(members.length / perPage);
	const visible = members.slice(page * perPage, page * perPage + perPage);
	const showNav = members.length > perPage;

	const go = (next: number) => {
		setDirection(next > page ? 1 : -1);
		setPage(next);
	};

	return (
		<div>
			<div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
				<p className="text-xs font-medium tracking-widest uppercase text-slate-400">
					{label}
				</p>
				{showNav && (
					<div className="flex items-center gap-2">
						<span className="text-xs text-slate-400">{page + 1} / {totalPages}</span>
						<div className="flex gap-1">
							<button onClick={() => go(page - 1)} disabled={page === 0} aria-label="Previous"
								className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200">
								<ChevronLeft className="w-3 h-3" />
							</button>
							<button onClick={() => go(page + 1)} disabled={page === totalPages - 1} aria-label="Next"
								className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200">
								<ChevronRight className="w-3 h-3" />
							</button>
						</div>
					</div>
				)}
			</div>

			<div className="overflow-hidden">
				<AnimatePresence mode="wait" custom={direction}>
					<motion.div
						key={page}
						custom={direction}
						initial={{ opacity: 0, x: direction > 0 ? 30 : -30 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: direction > 0 ? -30 : 30 }}
						transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
						style={{
							display: 'grid',
							gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
							gap: '12px',
							justifyContent: 'start',
						}}
					>
						{visible.map((member) => (
							<TeamMemberCard key={member.name} member={member} />
						))}
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}

export function TeamSection() {
	return (
		<section className="py-16 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mb-10">
					<p className="text-xs font-medium tracking-widest uppercase text-slate-400 mb-1">
						Who we are
					</p>
					<h2 className={`text-3xl sm:text-4xl ${koulen.className}`}>
						Meet the team
					</h2>
				</div>

				<div className="flex flex-col gap-10">
					<Tier label="Leadership" members={leadership} perPage={LEADERSHIP_PER_PAGE} cols={4} />
					<Tier label="Vice Presidents" members={vicePresidents} perPage={VP_PER_PAGE} cols={5} />
				</div>
			</div>
		</section>
	);
}