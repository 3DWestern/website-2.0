
'use client';

import { Card } from '@/components/ui/card';
import { event } from '@/components/data/events';
import Image from 'next/image';

interface EventCardProps {
	event: event;
	onCardClick: (event: event) => void;
}

export function EventCard({ event, onCardClick }: EventCardProps) {
	return (
		<Card
			key={event.id}
			role="button"
			tabIndex={0}
			className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-2xl focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 ease-in-out cursor-pointer min-h-[300px]"
			onClick={() => onCardClick(event)}
			onKeyDown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					onCardClick(event);
				}
			}}
			aria-label={`View details for ${event.title} on ${event.date}`}
		>
			<Image
				src={event.image}
				alt={event.alt}
				fill
				sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
				className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 group-focus:scale-105"
			/>
			<div className="absolute inset-0 bg-black opacity-50 z-10" />
			<div className="relative p-6 flex flex-col justify-end h-full text-white z-20">
				<h3 className="text-2xl font-bold">{event.title}</h3>
				<p className="text-sm">{event.date}</p>
			</div>
		</Card>
	);
}
