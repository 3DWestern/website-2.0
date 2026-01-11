'use client';

import { useState } from 'react';
import { Calendar, AlertCircle, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

function CalendarEmbed({
	src,
	title,
	calendarUrl
}: {
	src: string;
	title: string;
	calendarUrl: string;
}) {
	const [showCalendar, setShowCalendar] = useState(false);

	return (
		<div className="h-[400px] sm:h-[500px] w-full bg-slate-100 rounded-lg flex items-center justify-center sm:border-2 sm:border-dashed relative overflow-hidden">
			{!showCalendar ? (
				<div className="flex flex-col items-center justify-center text-center p-6">
					<AlertCircle className="w-12 h-12 text-amber-500 mb-4" />
					<h4 className="text-lg font-semibold mb-2">Calendar May Require Sign-in</h4>
					<p className="text-muted-foreground max-w-md mb-4">
						The embedded calendar may require a Google account to view. Check the typical hours below or try loading the calendar.
					</p>
					<div className="flex flex-col sm:flex-row gap-3">
						<button
							onClick={() => setShowCalendar(true)}
							className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
						>
							Try Loading Calendar
						</button>
						<a
							href={calendarUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors inline-flex items-center gap-2"
						>
							Open in Google Calendar
							<ExternalLink size={16} />
						</a>
					</div>
				</div>
			) : (
				<iframe
					src={src}
					style={{ borderWidth: 'solid 1px #777', width: '100%', height: '100%' }}
					width="1000"
					height="600"
					title={title}
					allowFullScreen
				/>
			)}
		</div>
	);
}

export function CalendarSection() {
	return (
		<section className="py-20 bg-slate-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-4">
						<Calendar size={16} />
						<span>Hours & Availability</span>
					</div>
					<h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">Makerspace Schedules</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Check real-time availability and open hours for both makerspaces
					</p>
				</div>

				<Tabs defaultValue="digital" className="w-full">
					<TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
						<TabsTrigger value="digital" className="mr-5 sm:mr-0 text-sm sm:text-lg">Digital Makerspace</TabsTrigger>
						<TabsTrigger value="sabourin" className="text-sm sm:text-lg">Sabourin Makerspace</TabsTrigger>
					</TabsList>

					<TabsContent value="digital">
						<Card>
							<CardContent className="p-5 h-full w-full">


								{/* digital makerspace calendar  */}
								<CalendarEmbed
									src="https://calendar.google.com/calendar/embed?src=195d4999e6906278ce183970e2cf265b0a470d9a35e20e80ac2bd15d5f6f783a%40group.calendar.google.com&ctz=America%2FToronto&mode=WEEK"
									title="Digital Makerspace Google Calendar"
									calendarUrl="https://calendar.google.com/calendar/u/0?cid=MTk1ZDQ5OTllNjkwNjI3OGNlMTgzOTcwZTJjZjI2NWIwYTQ3MGQ5YTM1ZTIwZTgwYWMyYmQxNWQ1ZjZmNzgzYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
								/>

								<div className="my-4 p-4 bg-purple-50 rounded-lg">
									<h4 className="mb-2">Typical Open Hours</h4>
									<div className="space-y-1 text-sm text-muted-foreground">
										<p>Monday - Thursday: 9:00 AM - 9:00 PM</p>
										<p>Friday: 9:00 AM - 5:00 PM</p>
										<p>Saturday - Sunday: Closed (Special events only)</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="sabourin">
						<Card>
							<CardContent className="p-5">

								{/* sabourin calendar */}
								<CalendarEmbed
									src="https://calendar.google.com/calendar/embed?src=6975d8476dd6da2953a2d7544ffbe7f08758862eef0fb7bea801de5eee887f4f%40group.calendar.google.com&ctz=America%2FToronto"
									title="Sabourin Makerspace Google Calendar"
									calendarUrl="https://calendar.google.com/calendar/u/0?cid=Njk3NWQ4NDc2ZGQ2ZGEyOTUzYTJkNzU0NGZmYmU3ZjA4NzU4ODYyZWVmMGZiN2JlYTgwMWRlNWVlZTg4N2Y0ZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
								/>

								<div className="mt-6 p-4 bg-purple-50 rounded-lg">
									<h4 className="mb-2">Typical Open Hours</h4>
									<div className="space-y-1 text-sm text-muted-foreground">
										<p>Monday - Thursday: 10:00 AM - 8:00 PM</p>
										<p>Friday: 10:00 AM - 4:00 PM</p>
										<p>Saturday - Sunday: Closed (Special events only)</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</section>
	);
}
