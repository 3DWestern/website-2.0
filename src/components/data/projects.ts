export type ProjectCategory =
  | "All"
  | "3D Printing"
  | "CNC"
  | "Laser Cutting"
  | "Water Jet"
  | "Woodworking"
  | "Electronics";

export type Project = {
  id: number;
  title: string;
  creator: string;
  contributors?: string[];
  description: string;
  image: string;
  images?: string[];
  category: Exclude<ProjectCategory, "All">;
  dateAdded: string; // ISO date, e.g. "2025-11-15"
  featured?: boolean;
  githubUrl?: string;
  blogUrl?: string;
};

export const categories: ProjectCategory[] = [
  "All",
  "3D Printing",
  "CNC",
  "Laser Cutting",
  "Water Jet",
  "Woodworking",
  "Electronics",
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Autonomous Greenhouse Monitor",
    creator: "Emily Chen",
    contributors: ["Emily Chen", "Raj Malhotra"],
    description:
      "A smart greenhouse system that monitors temperature, humidity, and soil moisture using custom-designed enclosures and sensors. The team iterated through four enclosure revisions to get IP-rated seals right, then built a small dashboard so club members could check on the plants remotely between shifts in the makerspace.",
    image: "/images/dmaker.jpg",
    images: ["/images/dmaker.jpg", "/images/workshop3.webp"],
    category: "Electronics",
    dateAdded: "2025-11-02",
    featured: true,
    githubUrl: "https://github.com/3dwestern/greenhouse-monitor",
  },
  {
    id: 2,
    title: "Custom Mechanical Keyboard",
    creator: "James Patel",
    description:
      "A fully custom keyboard featuring a laser-cut acrylic case, CNC-machined aluminum plate, and hand-soldered switches.",
    image: "/images/dmaker.jpg",
    category: "Laser Cutting",
    dateAdded: "2025-04-15",
    githubUrl: "https://github.com/3dwestern/custom-keyboard",
  },
  {
    id: 3,
    title: "Formula Student Steering Wheel",
    creator: "Sophia Nguyen",
    contributors: ["Sophia Nguyen", "Derek Osei", "Priya Anand"],
    description:
      "An ergonomic steering wheel designed for a student racing team, combining 3D-printed prototypes with CNC-machined components. The final version went through six rapid-prototyped iterations before the team settled on a grip profile, paddle placement, and button layout that held up through a full race weekend.",
    image: "/images/smaker.jpg",
    category: "CNC",
    dateAdded: "2025-10-20",
    featured: true,
    blogUrl: "/blog/formula-student-steering-wheel",
  },
  {
    id: 4,
    title: "Architectural Scale Model",
    creator: "Noah Wilson",
    description:
      "A detailed building model produced using laser-cut wood, acrylic panels, and precision assembly techniques.",
    image: "/images/smaker.jpg",
    category: "Laser Cutting",
    dateAdded: "2025-02-10",
  },
  {
    id: 5,
    title: "Adaptive Gaming Controller",
    creator: "Maya Thompson",
    contributors: ["Maya Thompson", "Leo Fischer"],
    description:
      "An accessible gaming controller featuring custom 3D-printed housings and modular input mechanisms designed with input from campus disability services, so buttons, triggers, and grips can be rearranged for different hand mobility needs without any soldering.",
    image: "/images/dmaker.jpg",
    category: "3D Printing",
    dateAdded: "2025-11-15",
    githubUrl: "https://github.com/3dwestern/adaptive-controller",
    blogUrl: "/blog/adaptive-gaming-controller",
  },
  {
    id: 6,
    title: "Live-Edge Coffee Table",
    creator: "Lucas Martin",
    description:
      "A handcrafted walnut coffee table built using woodworking machinery and finished with custom metal accents.",
    image: "/images/smaker.jpg",
    category: "Woodworking",
    dateAdded: "2025-04-01",
  },
  {
    id: 7,
    title: "Competition Robot Chassis",
    creator: "Olivia Garcia",
    contributors: ["Olivia Garcia", "Sam Whitfield"],
    description:
      "A lightweight robot frame fabricated using water jet cut aluminum and precision-machined structural components.",
    image: "/images/image10.webp",
    category: "Water Jet",
    dateAdded: "2024-11-05",
  },
  {
    id: 8,
    title: "Portable Drone Dock",
    creator: "Ethan Brown",
    description:
      "A compact docking station for autonomous drones featuring CNC-cut panels and 3D-printed mounting systems that fold flat for storage between competitions.",
    image: "/images/workshop3.webp",
    category: "CNC",
    dateAdded: "2025-02-20",
  },
  {
    id: 9,
    title: "Modular Desk Organizer",
    creator: "Ava Kim",
    description:
      "A snap-fit desk organizer system, printed in interchangeable modules so club members can mix and match trays, pen holders, and phone stands.",
    image: "/images/dmaker.jpg",
    category: "3D Printing",
    dateAdded: "2025-04-25",
  },
  {
    id: 10,
    title: "Solar Charging Station",
    creator: "Daniel Osei",
    contributors: ["Daniel Osei", "Grace Lin", "Marcus Reid"],
    description:
      "A campus solar charging kiosk with a laser-cut panel housing and custom PCB. The team worked with facilities to get the mounting approved, then ran it through a full winter to test panel efficiency before installing three more units around the quad.",
    image: "/images/image10.webp",
    category: "Electronics",
    dateAdded: "2024-10-10",
    featured: true,
    githubUrl: "https://github.com/3dwestern/solar-charging-station",
  },
  {
    id: 11,
    title: "Engraved Trophy Set",
    creator: "Isabella Rossi",
    description:
      "A run of laser-engraved acrylic trophies for the club's internal build competition.",
    image: "/images/smaker.jpg",
    category: "Laser Cutting",
    dateAdded: "2025-11-20",
  },
  {
    id: 12,
    title: "Cornhole Board Set",
    creator: "Tyler Brooks",
    description:
      "A regulation cornhole set built from scratch, from milling the boards flat to routing the edges and finishing with a hand-rubbed oil.",
    image: "/images/workshop3.webp",
    category: "Woodworking",
    dateAdded: "2025-02-05",
  },
];