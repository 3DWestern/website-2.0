'use client';
'use no memo';

import { X, Globe} from 'lucide-react';
import {
	Dialog,
	DialogPortal,
	DialogOverlay,
} from '@/components/ui/dialog';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
	Tooltip,
	TooltipTrigger,
	TooltipContent,
} from '@/components/ui/tooltip';

export type OrganizerData = {
	name: string;
	role?: string;
	description?: string;
	image?: string;
	emoji?: string;
	website?: string;
	linkedin?: string;
	github?: string;
};

interface OrganizerModalProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	organizer: OrganizerData | null;
}

export function OrganizerModal({
	open,
	onOpenChange,
	organizer,
}: OrganizerModalProps) {
	if (!organizer) return null;

	const { name, role, description, image, emoji, website, linkedin, github } =
		organizer;
	const hasSocialLinks = website || linkedin || github;

	// Ensure URLs have proper protocol
	const formatUrl = (url: string) => {
		if (url.startsWith('http://') || url.startsWith('https://')) {
			return url;
		}
		return `https://${url}`;
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogPortal>
				<DialogOverlay className="bg-black/60 backdrop-blur-sm" />
				<div
					className="fixed inset-0 z-50 flex items-center justify-center p-4"
					onClick={() => onOpenChange(false)}
				>
					<div
						onClick={(e) => e.stopPropagation()}
						className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
						style={{
							backgroundImage: `
								radial-gradient(circle closest-corner at 25% 60%, rgba(147, 51, 234, 0.25), transparent),
								radial-gradient(circle farthest-side at 71% 16%, rgba(168, 85, 247, 0.2), transparent 35%),
								radial-gradient(circle closest-corner at 32% 38%, rgba(192, 132, 252, 0.15), transparent 76%),
								radial-gradient(circle farthest-side at 69% 81%, rgba(139, 92, 246, 0.15), transparent 76%),
								linear-gradient(#18181b, #18181b)
							`,
						}}
					>
						{/* Close Button */}
						<button
							onClick={() => onOpenChange(false)}
							className="absolute right-4 top-4 z-10 cursor-pointer rounded-full p-1.5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
							aria-label="Close modal"
						>
							<X className="h-5 w-5" />
						</button>

						{/* Content */}
						<div className="flex flex-col items-center gap-6 p-8 sm:flex-row sm:items-start sm:gap-8">
							{/* Avatar Section */}
							<div className="flex flex-col items-center gap-4">
								{/* Avatar with Emoji Badge */}
								<div className="relative">
									<Avatar className="h-28 w-28 border-4 border-zinc-700 ring-2 ring-purple-500/30 sm:h-32 sm:w-32">
										{image ? (
											<AvatarImage
												src={image}
												alt={name}
												className="object-cover"
											/>
										) : (
											<AvatarFallback className="bg-purple-900 text-2xl font-semibold text-purple-200">
												{name.charAt(0)}
											</AvatarFallback>
										)}
									</Avatar>
									{emoji && (
										<div className="absolute -bottom-1 -right-1 flex h-10 w-10 items-center justify-center rounded-full border-2 border-zinc-800 bg-zinc-900 text-xl shadow-lg">
											{emoji}
										</div>
									)}
								</div>

								{/* Social Links */}
								{hasSocialLinks && (
									<div className="flex items-center gap-3">
										{website && (
											<Tooltip>
												<TooltipTrigger asChild>
													<a
														href={formatUrl(website)}
														target="_blank"
														rel="noopener noreferrer"
														className="cursor-pointer rounded-full p-2 text-zinc-400 transition-all hover:bg-purple-500/20 hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
														aria-label={`Visit ${name}'s website`}
													>
														<Globe className="h-5 w-5" />
													</a>
												</TooltipTrigger>
												<TooltipContent className="bg-zinc-900 border-purple-500/30 text-white">Website</TooltipContent>
											</Tooltip>
										)}
										{github && (
											<Tooltip>
												<TooltipTrigger asChild>
													<a
														href={formatUrl(github)}
														target="_blank"
														rel="noopener noreferrer"
														className="cursor-pointer rounded-full p-2 text-zinc-400 transition-all hover:bg-purple-500/20 hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
														aria-label={`Visit ${name}'s GitHub`}
													>
														<svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
													</a>
												</TooltipTrigger>
												<TooltipContent className="bg-zinc-900 border-purple-500/30 text-white">GitHub</TooltipContent>
											</Tooltip>
										)}
										{linkedin && (
											<Tooltip>
												<TooltipTrigger asChild>
													<a
														href={formatUrl(linkedin)}
														target="_blank"
														rel="noopener noreferrer"
														className="cursor-pointer rounded-full p-2 text-zinc-400 transition-all hover:bg-purple-500/20 hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
														aria-label={`Visit ${name}'s LinkedIn`}
													>
														<svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
													</a>
												</TooltipTrigger>
												<TooltipContent className="bg-zinc-900 border-purple-500/30 text-white">LinkedIn</TooltipContent>
											</Tooltip>
										)}
									</div>
								)}
							</div>

							{/* Text Content */}
							<div className="flex flex-1 flex-col gap-2 text-center sm:text-left">
								<h2 className="text-2xl font-bold text-white sm:text-3xl">
									{name}
								</h2>
								{role && (
									<p className="text-base font-medium text-purple-400">
										{role}
									</p>
								)}
								{description && (
									<p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
										{description}
									</p>
								)}
							</div>
						</div>
					</div>
				</div>
			</DialogPortal>
		</Dialog>
	);
}
