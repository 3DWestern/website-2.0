import { Cpu, Hammer } from 'lucide-react';

export const spaces = [
	{
		id: 1,
		name: "Digital Makerspace",
		icon: Cpu,
		description: "High-tech equipment for digital fabrication and prototyping",
		primaryUse: "Digital manufacturing, rapid prototyping, and electronic projects",
		image: "/images/dmaker.jpg",
		alt: "Morrissette Digital Makerspace",
		tools: [
			"3D Printers (FDM & Resin)",
			"Laser Cutters",
			"Water Jet Cutter",
			"Electronics Workbench",
			"Soldering Stations",
			"CAD Workstations"
		],
		projects: [
			"Product prototypes",
			"Custom enclosures",
			"PCB design and assembly",
			"Architectural models",
			"Art installations"
		]
	},
	{
		id: 2,
		name: "Sabourin Makerspace",
		icon: Hammer,
		description: "Traditional and modern woodworking equipment for building physical projects",
		primaryUse: "Woodworking, furniture building, and physical construction",
		image: "/images/smaker.jpg",
		alt: "Morrissette Sabourin Makerspace",
		tools: [
			"Table Saw",
			"Band Saw",
			"CNC Router",
			"Drill Press",
			"Sanders & Planers",
			"Hand Tools"
		],
		projects: [
			"Custom furniture",
			"Wooden prototypes",
			"Display pieces",
			"Storage solutions",
			"Product mockups"
		]
	}
];


