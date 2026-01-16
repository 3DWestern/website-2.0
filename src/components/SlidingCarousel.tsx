'use client';
'use no memo';

import { useState } from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import type { MenuItem } from '@/components/data/teamdata';
import { koulen } from '@/lib/fonts';
import { OrganizerModal, type OrganizerData } from '@/components/OrganizerModal';
import {
	Tooltip,
	TooltipTrigger,
	TooltipContent,
} from '@/components/ui/tooltip';

export function SlidingCarousel({ items }: { items: MenuItem[] }) {
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedOrganizer, setSelectedOrganizer] = useState<OrganizerData | null>(null);

	const handleOrganizerClick = (exec: MenuItem) => {
		setSelectedOrganizer({
			name: exec.name,
			role: exec.role,
			description: exec.description,
			image: exec.image,
			emoji: exec.emoji,
			website: exec.website,
			linkedin: exec.linkedin,
			github: exec.github,
		});
		setModalOpen(true);
	};

	return (
		<>
			<div className="w-full flex flex-col items-center justify-center gap-y-6">
				<h2
					className={`text-5xl sm:text-6xl lg:text-7xl font-bold ${koulen.className} text-center bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent`}
				>
					OUR EXECS
				</h2>

				<Marquee
					play={!modalOpen}
					autoFill
					direction="right"
					speed={40}
					pauseOnHover
					className="py-4"
					style={{
						maskImage:
							'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
						WebkitMaskImage:
							'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
					}}
				>
					{items.map((exec) => (
						<Tooltip key={exec.name}>
							<TooltipTrigger asChild>
								<button
									onClick={() => handleOrganizerClick(exec)}
									className="mx-4 sm:mx-5 lg:mx-6 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-full transition-transform hover:scale-110"
									aria-label={`View ${exec.name}'s profile`}
								>
									<div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-3 border-purple-200 hover:border-purple-500 transition-colors shadow-md">
										{exec.image ? (
											<Image
												src={exec.image}
												alt={exec.name}
												fill
												className="object-cover"
												sizes="(max-width: 640px) 80px, (max-width: 1024px) 112px, 128px"
											/>
										) : (
											<div className="w-full h-full bg-purple-200 flex items-center justify-center">
												<span className="text-purple-600 font-semibold text-xl">
													{exec.name.charAt(0)}
												</span>
											</div>
										)}
									</div>
								</button>
							</TooltipTrigger>
							<TooltipContent className="bg-zinc-900 border-purple-500/30 px-4 py-2">
								<p className="font-semibold text-white">{exec.name}</p>
								<p className="text-xs text-purple-400">{exec.role}</p>
							</TooltipContent>
						</Tooltip>
					))}
				</Marquee>
			</div>

			<OrganizerModal
				open={modalOpen}
				onOpenChange={setModalOpen}
				organizer={selectedOrganizer}
			/>
		</>
	);
}
