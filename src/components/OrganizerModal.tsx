'use client';

import { X, Globe, Github, Linkedin } from 'lucide-react';
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
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
					<div
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
							className="absolute right-4 top-4 z-10 rounded-full p-1.5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
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
														className="rounded-full p-2 text-zinc-400 transition-all hover:bg-purple-500/20 hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
														className="rounded-full p-2 text-zinc-400 transition-all hover:bg-purple-500/20 hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
														aria-label={`Visit ${name}'s GitHub`}
													>
														<Github className="h-5 w-5" />
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
														className="rounded-full p-2 text-zinc-400 transition-all hover:bg-purple-500/20 hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
														aria-label={`Visit ${name}'s LinkedIn`}
													>
														<Linkedin className="h-5 w-5" />
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
