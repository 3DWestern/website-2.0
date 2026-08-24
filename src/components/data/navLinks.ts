export interface NavLink {
  path: string;
  label: string;
  external?: boolean;
}

export const navLinks: NavLink[] = [
  { path: "/about", label: "About Us" },
  { path: "/explore", label: "Explore" },
  { path: "/events", label: "Events" },
  { path: "/blogs", label: "Blog" },
  { path: "/makerspace", label: "Availability" },
  {
    path: "https://westernu.brightspace.com/d2l/le/discovery/view/course/151344",
    label: "Training",
    external: true,
  },
  { path: "/contact", label: "Contact Us" },
];
