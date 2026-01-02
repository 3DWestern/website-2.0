'use client';

import { Calendar, Clock, MapPin, Users, Lightbulb, Rocket, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { koulen, krub } from '@/lib/fonts';
import { motion } from 'motion/react';
import { recentEvents } from '@/components/data/events';


const categoryColors: Record<string, string> = {
	"Competition": "bg-purple-100 text-purple-700",
	"Workshop": "bg-blue-100 text-blue-700",
	"Networking": "bg-green-100 text-green-700",
	"Training": "bg-orange-100 text-orange-700",
	"Showcase": "bg-pink-100 text-pink-700"
};

export function EventsSection() {
	return (
		<section className="py-12 lg:py-20 bg-white">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6 }}
					className="text-center flex flex-col gap-2 mb-12"
				>
					<div className={`text-3xl lg:text-5xl xl:text-6xl font-bold py-4 ${koulen.className}`}>
						EVENTS HIGHLIGHTS
					</div>
				</motion.div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8 mt-10">
					{recentEvents.map((event, index) => {
						const Icon = event.icon;
						return (
							<motion.div
								key={event.id}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-50px" }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<Card className="hover:shadow-lg transition-all hover:-translate-y-2 duration-300 h-full">
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
							</motion.div>
						);
					})}
				</div>

				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="text-center mt-12"
				>
					<Link
						href="/events"
						className="inline-block text-lg lg:text-xl underline-offset-4 transition-transform duration-300 hover:underline hover:scale-110"
					>
						View All Events
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
