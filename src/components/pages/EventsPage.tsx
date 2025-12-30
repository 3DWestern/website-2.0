'use client';

import { Calendar, Clock, MapPin, Users, Lightbulb, Rocket, GraduationCap, Trophy, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import { allEvents } from '../data/events';

const categoryColors: Record<string, string> = {
	"Competition": "bg-purple-100 text-purple-700",
	"Workshop": "bg-blue-100 text-blue-700",
	"Networking": "bg-green-100 text-green-700",
	"Training": "bg-orange-100 text-orange-700",
	"Showcase": "bg-pink-100 text-pink-700"
};

export function EventsPage() {
	const [selectedCategory, setSelectedCategory] = useState('all');

	const filteredEvents = selectedCategory === 'all'
		? allEvents
		: allEvents.filter(e => e.category.toLowerCase() === selectedCategory);

	return (
		<div className="min-h-screen">
			{/* Header */}
			<section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<Badge className="mb-4">Events & Programs</Badge>
					<h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4">Morrissette Events</h1>
					<p className="text-xl text-muted-foreground max-w-2xl">
						Workshops, competitions, training sessions, and networking opportunities to fuel your entrepreneurial journey
					</p>
				</div>
			</section>

			{/* All Events */}
			<section className="py-16 bg-slate-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl mb-8">All Events</h2>

					<Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
						<TabsList>
							<TabsTrigger value="all">All Events</TabsTrigger>
							<TabsTrigger value="competition">Competitions</TabsTrigger>
							<TabsTrigger value="workshop">Workshops</TabsTrigger>
							<TabsTrigger value="training">Training</TabsTrigger>
							<TabsTrigger value="networking">Networking</TabsTrigger>
							<TabsTrigger value="showcase">Showcase</TabsTrigger>
						</TabsList>
					</Tabs>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{filteredEvents.map((event) => {
							const Icon = event.icon;
							return (
								<Card key={event.id} className="hover:shadow-lg transition-shadow">
									<CardHeader>
										<div className="flex items-start justify-between mb-3">
											<div className={`w-12 h-12 rounded-lg flex items-center justify-center ${categoryColors[event.category] || 'bg-slate-100'}`}>
												<Icon size={24} />
											</div>
											<Badge variant="secondary">{event.category}</Badge>
										</div>
										<CardTitle>{event.title}</CardTitle>
										<CardDescription>{event.description}</CardDescription>
									</CardHeader>
									<CardContent className="space-y-3">
										<div className="flex items-center gap-2 text-sm text-muted-foreground">
											<Calendar size={16} />
											<span>{event.date}</span>
										</div>
										<div className="flex items-center gap-2 text-sm text-muted-foreground">
											<Clock size={16} />
											<span>{event.time}</span>
										</div>
										<div className="flex items-center gap-2 text-sm text-muted-foreground">
											<MapPin size={16} />
											<span>{event.location}</span>
										</div>
										<div className="pt-2">
											<span className="text-sm text-purple-600">{event.spots}</span>
										</div>
										<Button className="w-full mt-4" variant="outline">
											Register
										</Button>
									</CardContent>
								</Card>
							);
						})}
					</div>

					{filteredEvents.length === 0 && (
						<div className="text-center py-12">
							<p className="text-muted-foreground">No events found in this category.</p>
						</div>
					)}
				</div>
			</section>

			{/* CTA */}
			<section className="py-16 bg-white">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl mb-4">Stay Updated</h2>
					<p className="text-lg text-muted-foreground mb-8">
						Want to receive notifications about new events? Sign up for our newsletter or check the calendar regularly.
					</p>
					<div className="flex flex-wrap gap-4 justify-center">
						<Button size="lg">Subscribe to Updates</Button>
						<Button size="lg" variant="outline">View Calendar</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
