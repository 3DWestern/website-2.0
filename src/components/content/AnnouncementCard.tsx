'use client';

import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from '@/components/ui/card';
import { Announcement } from '@/components/data/announcements';
import { UserCircle } from 'lucide-react';

interface AnnouncementCardProps {
	announcement: Announcement;
}

export function AnnouncementCard({ announcement }: AnnouncementCardProps) {
	// Split body on newlines so multi-paragraph text renders correctly
	const paragraphs = announcement.body.split('\n\n').filter(Boolean);

	return (
		<Card className="bg-grey-bg border-[#29323b] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
			<CardHeader>
				<CardTitle className="text-lg font-bold">
					{announcement.title}
				</CardTitle>
			</CardHeader>

			<CardContent className="flex-1">
				<div className="flex flex-col gap-3">
					{paragraphs.map((para, i) => (
						<p key={i} className="text-sm text-secondary-text leading-relaxed">
							{para}
						</p>
					))}
				</div>
			</CardContent>

			<CardFooter className="border-t border-[#29323b] mt-auto flex items-center justify-between text-secondary-text text-sm">
				<span className="flex items-center gap-1.5">
					<UserCircle className="w-5 h-5 text-secondary-text" />
					By {announcement.author}
				</span>
				<span>{announcement.timestamp}</span>
			</CardFooter>
		</Card>
	);
}