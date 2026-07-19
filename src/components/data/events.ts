export type EventCategory = "workshop" | "social" | "meeting" | "holiday" | "other";

export type Event = {
  id: number;
  title: string;
  description: string;
  schedule: {
    date: string; // ISO date, "YYYY-MM-DD"
    startTime: string; // 24hr "HH:MM"
    endTime: string; // 24hr "HH:MM"
  };
  location: string;
  image: {
    src: string;
    alt: string;
  };
  url?: string;
  categories: EventCategory[];
  recurrence: {
    isRecurring: boolean;
    frequency?: "daily" | "weekly" | "monthly" | "yearly";
    interval?: number;
    endsOn?: string;
  };
  rsvp: {
    enabled: boolean;
    capacity?: number;
    rsvpCount: number;
  };
  status: "upcoming" | "ongoing" | "past" | "cancelled";
};

export const eventCategories: EventCategory[] = [
  "workshop",
  "social",
  "meeting",
  "holiday",
  "other",
];

export const events: Event[] = [
  {
    id: 1,
    title: "Intro to 3D Printing Workshop",
    description:
      "A hands-on beginner workshop covering slicer settings, bed leveling, and your first print. No experience necessary — all materials provided.",
    schedule: { date: "2026-07-22", startTime: "17:00", endTime: "19:00" },
    location: "Makerspace, Room 210",
    image: { src: "/images/dmaker.jpg", alt: "Students at 3D printers" },
    url: "https://forms.gle/example-workshop-signup",
    categories: ["workshop"],
    recurrence: { isRecurring: false },
    rsvp: { enabled: true, capacity: 20, rsvpCount: 14 },
    status: "upcoming",
  },
  {
    id: 2,
    title: "Club Social: End of Term Pizza Night",
    description:
      "Wrap up the term with pizza, games, and a highlight reel of everything the club built this semester.",
    schedule: { date: "2026-07-25", startTime: "18:30", endTime: "20:30" },
    location: "Student Union, Great Hall",
    image: { src: "/images/workshop3.webp", alt: "Club members socializing" },
    categories: ["social"],
    recurrence: { isRecurring: false },
    rsvp: { enabled: true, capacity: 60, rsvpCount: 41 },
    status: "upcoming",
  },
  {
    id: 3,
    title: "Weekly Officer Meeting",
    description:
      "Standing meeting for club officers to review budget, upcoming events, and sponsorship outreach.",
    schedule: { date: "2026-07-21", startTime: "18:00", endTime: "19:00" },
    location: "Makerspace, Conference Room",
    image: { src: "/images/smaker.jpg", alt: "Officers around a table" },
    categories: ["meeting"],
    recurrence: { isRecurring: true, frequency: "weekly", interval: 1, endsOn: "2026-12-01" },
    rsvp: { enabled: false, rsvpCount: 0 },
    status: "upcoming",
  },
  {
    id: 4,
    title: "CNC Router Safety Certification",
    description:
      "Required certification session before members can book solo time on the ShopBot CNC router. Covers safe operation, material clamping, and emergency stop procedures.",
    schedule: { date: "2026-07-18", startTime: "14:00", endTime: "16:00" },
    location: "Makerspace, Fabrication Bay",
    image: { src: "/images/image10.webp", alt: "CNC router in use" },
    categories: ["workshop"],
    recurrence: { isRecurring: false },
    rsvp: { enabled: true, capacity: 12, rsvpCount: 12 },
    status: "ongoing",
  },
  {
    id: 5,
    title: "Campus Closed — Reading Week",
    description: "The makerspace is closed for the university's reading week.",
    schedule: { date: "2026-08-03", startTime: "00:00", endTime: "23:59" },
    location: "Campus-wide",
    image: { src: "/images/workshop3.webp", alt: "Empty campus building" },
    categories: ["holiday"],
    recurrence: { isRecurring: false },
    rsvp: { enabled: false, rsvpCount: 0 },
    status: "upcoming",
  },
  {
    id: 6,
    title: "Laser Cutting Deep Dive",
    description:
      "Go beyond basic cuts: vector vs. raster settings, engraving on non-standard materials, and troubleshooting focus issues on the Glowforge.",
    schedule: { date: "2026-08-05", startTime: "17:00", endTime: "19:00" },
    location: "Makerspace, Room 210",
    image: { src: "/images/dmaker.jpg", alt: "Laser cutter engraving acrylic" },
    url: "https://forms.gle/example-laser-signup",
    categories: ["workshop"],
    recurrence: { isRecurring: false },
    rsvp: { enabled: true, capacity: 15, rsvpCount: 6 },
    status: "upcoming",
  },
  {
    id: 7,
    title: "Sponsor Info Session",
    description:
      "Open session for prospective sponsors to tour the makerspace and meet the officer team.",
    schedule: { date: "2026-07-30", startTime: "13:00", endTime: "14:30" },
    location: "Makerspace, Conference Room",
    image: { src: "/images/smaker.jpg", alt: "Tour of the makerspace" },
    categories: ["meeting", "other"],
    recurrence: { isRecurring: false },
    rsvp: { enabled: true, capacity: 10, rsvpCount: 3 },
    status: "upcoming",
  },
  {
    id: 8,
    title: "Summer Kickoff Mixer",
    description:
      "First social of the summer term — meet new members, grab free swag, and sign up for project teams.",
    schedule: { date: "2026-07-05", startTime: "17:00", endTime: "19:00" },
    location: "Student Union, Great Hall",
    image: { src: "/images/image10.webp", alt: "Members mingling at a mixer" },
    categories: ["social"],
    recurrence: { isRecurring: false },
    rsvp: { enabled: true, capacity: 80, rsvpCount: 80 },
    status: "past",
  },
  {
    id: 9,
    title: "Electronics Soldering Basics",
    description:
      "Learn safe soldering technique and assemble a simple throwaway PCB kit to practice on.",
    schedule: { date: "2026-06-28", startTime: "16:00", endTime: "18:00" },
    location: "Makerspace, Room 105",
    image: { src: "/images/workshop3.webp", alt: "Soldering iron and PCB" },
    categories: ["workshop"],
    recurrence: { isRecurring: false },
    rsvp: { enabled: true, capacity: 16, rsvpCount: 16 },
    status: "past",
  },
  {
    id: 10,
    title: "Water Jet Orientation",
    description: "Orientation session for the OMAX waterjet — postponed due to a maintenance issue.",
    schedule: { date: "2026-07-19", startTime: "15:00", endTime: "16:30" },
    location: "Makerspace, Fabrication Bay",
    image: { src: "/images/image10.webp", alt: "Water jet cutter" },
    categories: ["workshop"],
    recurrence: { isRecurring: false },
    rsvp: { enabled: true, capacity: 10, rsvpCount: 2 },
    status: "cancelled",
  },
  {
    id: 11,
    title: "Monthly Town Hall",
    description:
      "Open forum for all members to raise ideas, vote on budget items, and hear updates from each project team lead.",
    schedule: { date: "2026-08-12", startTime: "18:00", endTime: "19:30" },
    location: "Student Union, Room 220",
    image: { src: "/images/smaker.jpg", alt: "Members at a town hall meeting" },
    categories: ["meeting"],
    recurrence: { isRecurring: true, frequency: "monthly", interval: 1, endsOn: "2027-04-01" },
    rsvp: { enabled: false, rsvpCount: 0 },
    status: "upcoming",
  },
  {
    id: 12,
    title: "Woodworking 101",
    description:
      "Covers bandsaw, planer, and router basics before members are cleared to use the wood shop solo.",
    schedule: { date: "2026-08-08", startTime: "17:00", endTime: "19:00" },
    location: "Makerspace, Wood Shop",
    image: { src: "/images/dmaker.jpg", alt: "Wood shop tools" },
    url: "https://forms.gle/example-wood-signup",
    categories: ["workshop"],
    recurrence: { isRecurring: false },
    rsvp: { enabled: true, capacity: 10, rsvpCount: 4 },
    status: "upcoming",
  },
];