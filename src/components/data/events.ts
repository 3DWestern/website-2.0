import { Rocket, Lightbulb, Users, Trophy, GraduationCap, Briefcase, LucideIcon } from "lucide-react";

export type event = {
	id: number;
	title: string;
	date: string;
	time: string;
	location: string;
	category: string;
	icon: LucideIcon;
	description: string;
	spots: string;
	featured: boolean;
}

export const recentEvents: event [] = [
	{
		id: 1,
		title: "Pitch Competition Finals",
		date: "Dec 5, 2025",
		time: "6:00 PM - 9:00 PM",
		location: "Morrissette Auditorium",
		category: "Competition",
		icon: Rocket,
		description: "Watch students pitch their startup ideas to a panel of investors and entrepreneurs. Winners receive funding and mentorship.",
		spots: "Open to all",
		featured: true
	},
	{
		id: 2,
		title: "Innovation Workshop Series",
		date: "Dec 10, 2025",
		time: "5:00 PM - 7:00 PM",
		location: "Morrissette Building",
		category: "Workshop",
		icon: Lightbulb,
		description: "Learn design thinking methodologies and rapid prototyping techniques from industry experts.",
		spots: "20 spots available",
		featured: false
	},
	{
		id: 3,
		title: "Entrepreneur Networking Night",
		date: "Dec 15, 2025",
		time: "7:00 PM - 9:00 PM",
		location: "Morrissette Lounge",
		category: "Networking",
		icon: Users,
		description: "Connect with fellow student entrepreneurs, alumni founders, and local business leaders.",
		spots: "Open to all",
		featured: false
	},
	{
		id: 4,
		title: "3D Printing Certification",
		date: "Dec 18, 2025",
		time: "4:00 PM - 6:00 PM",
		location: "Digital Makerspace",
		category: "Training",
		icon: GraduationCap,
		description: "Get certified to use our 3D printers independently for your projects. Hands-on training included.",
		spots: "12 spots left",
		featured: true
	},
	{
		id: 5,
		title: "Product Design Sprint",
		date: "Jan 8, 2026",
		time: "All Day",
		location: "Both Makerspaces",
		category: "Workshop",
		icon: Lightbulb,
		description: "Intensive one-day design sprint to take an idea from concept to prototype using our equipment.",
		spots: "15 spots available",
		featured: false
	},
];

export const allEvents: event[] = [

	{
		id: 6,
		title: "Startup Showcase",
		date: "Jan 15, 2026",
		time: "6:00 PM - 10:00 PM",
		location: "Morrissette Building",
		category: "Showcase",
		icon: Trophy,
		description: "Annual exhibition of student-led ventures and innovative projects. Public demo and voting.",
		spots: "Open to all",
		featured: true
	},
	{
		id: 7,
		title: "Laser Cutting Workshop",
		date: "Jan 20, 2026",
		time: "5:00 PM - 7:00 PM",
		location: "Digital Makerspace",
		category: "Training",
		icon: GraduationCap,
		description: "Learn to operate our laser cutters safely and effectively. Required for laser cutter access.",
		spots: "10 spots left",
		featured: false
	},
	{
		id: 8,
		title: "Industry Speaker Series",
		date: "Jan 25, 2026",
		time: "6:00 PM - 8:00 PM",
		location: "Morrissette Auditorium",
		category: "Networking",
		icon: Briefcase,
		description: "Hear from successful entrepreneurs about their journey from idea to successful business.",
		spots: "Open to all",
		featured: false
	},
	{
		id: 9,
		title: "Woodworking Fundamentals",
		date: "Feb 1, 2026",
		time: "1:00 PM - 4:00 PM",
		location: "Sabourin Makerspace",
		category: "Training",
		icon: GraduationCap,
		description: "Comprehensive safety and operation training for woodworking equipment and power tools.",
		spots: "8 spots available",
		featured: false
	}
];


