export type event = {
	id: number;
	title: string;
	date: string;
	time: string;
	image: string;
	alt: string;
	location: string;
	category: string;
	description: string;
}

export const highlightEvents: event[] = [
	{
		id: 1,
		title: "Pitch Competition Finals",
		date: "Dec 5, 2025",
		time: "6:00 PM - 9:00 PM",
		image: "/images/workshop1.webp",
		alt: "People working in a workshop",
		location: "Morrissette Auditorium",
		category: "Competition",
		description: "Watch students pitch their startup ideas to a panel of investors and entrepreneurs. Winners receive funding and mentorship.",
	},
	{
		id: 2,
		title: "Innovation Workshop Series",
		date: "Dec 10, 2025",
		time: "5:00 PM - 7:00 PM",
		image: "/images/workshop2.webp",
		alt: "People working in a workshop",
		location: "Morrissette Building",
		category: "Workshop",
		description: "Learn design thinking methodologies and rapid prototyping techniques from industry experts.",
	},
	{
		id: 3,
		title: "Entrepreneur Networking Night",
		date: "Dec 15, 2025",
		time: "7:00 PM - 9:00 PM",
		image: "/images/workshop3.webp",
		alt: "People working in a workshop",
		location: "Morrissette Lounge",
		category: "Networking",
		description: "Connect with fellow student entrepreneurs, alumni founders, and local business leaders.",
	},
	{
		id: 4,
		title: "3D Printing Certification",
		date: "Dec 18, 2025",
		time: "4:00 PM - 6:00 PM",
		image: "/images/workshop4.webp",
		alt: "People working in a workshop",
		location: "Digital Makerspace",
		category: "Training",
		description: "Get certified to use our 3D printers independently for your projects. Hands-on training included.",
	},
	{
		id: 5,
		title: "Product Design Sprint",
		date: "Jan 8, 2026",
		time: "All Day",
		image: "/images/workshop1.webp",
		alt: "People working in a workshop",
		location: "Both Makerspaces",
		category: "Workshop",
		description: "Intensive one-day design sprint to take an idea from concept to prototype using our equipment.",
	},
];

export const pastEvents: event[] = [

	{
		id: 6,
		title: "Startup Showcase",
		date: "Jan 15, 2026",
		time: "6:00 PM - 10:00 PM",
		image: "/images/workshop2.webp",
		alt: "People working in a workshop",
		location: "Sabourin Makerspace",
		category: "workshop",
		description: "Annual exhibition of student-led ventures and innovative projects. Public demo and voting.",
	},
	{
		id: 7,
		title: "Laser Cutting Workshop",
		date: "Jan 20, 2026",
		time: "5:00 PM - 7:00 PM",
		image: "/images/workshop3.webp",
		alt: "People working in a workshop",
		location: "Sabourin Makerspace",
		category: "workshop",
		description: "Learn to operate our laser cutters safely and effectively. Required for laser cutter access.",
	},
	{
		id: 8,
		title: "Industry Speaker Series",
		date: "Jan 25, 2026",
		time: "6:00 PM - 8:00 PM",
		image: "/images/workshop4.webp",
		alt: "People working in a workshop",
		location: "Sabourin Makerspace",
		category: "workshop",
		description: "Hear from successful entrepreneurs about their journey from idea to successful business.",
	},
	{
		id: 9,
		title: "Woodworking Fundamentals",
		date: "Feb 1, 2026",
		time: "1:00 PM - 4:00 PM",
		image: "/images/workshop1.webp",
		alt: "People working in a workshop",
		location: "Sabourin Makerspace",
		category: "workshop",
		description: "Comprehensive safety and operation training for woodworking equipment and power tools.",
	}
];


