"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect } from "react";
import { useMenu } from "@/context/MenuContext";
import MobileMenu from "./navigation/MobileMenu";
import DashButton from "./navigation/DashButton";
import NavLink from "./navigation/NavLink";

export interface NavLink {
  path: string;
  label: string;
  external?: boolean;
}

// Prevent scrolling via wheel, touch, and keyboard events
const preventDefault = (e: Event) => {
  e.preventDefault();
};

const preventKeyScroll = (e: KeyboardEvent) => {
  const scrollKeys = [32, 33, 34, 35, 36, 37, 38, 39, 40]; // space, page up/down, home, end, arrows
  if (scrollKeys.includes(e.keyCode)) {
    e.preventDefault();
  }
};

export function NavBar() {
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  const pathname = usePathname();

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;

      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      window.addEventListener("wheel", preventDefault, { passive: false });
      window.addEventListener("touchmove", preventDefault, { passive: false });
      window.addEventListener("keydown", preventKeyScroll, { passive: false });

      return () => {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";

        window.removeEventListener("wheel", preventDefault);
        window.removeEventListener("touchmove", preventDefault);
        window.removeEventListener("keydown", preventKeyScroll);

        window.scrollTo(0, scrollY);
      };
    }
  }, [isMenuOpen]);

  const navLinks: NavLink[] = [
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

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-header border-b border-border">
      <div className="flex items-center justify-between px-4 lg:px-8 h-16">
        <div className="flex gap-2 items-center">
          {/** Mobile Menu Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-lg font-semibold text-white">
              Maker<span className="text-purple-light">spaces</span>
              {/** TODO: CREATE LOGO */}
            </span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              link={link}
              active={isActive(link.label)}
              key={link.path}
            />
          ))}
        </div>

        {/* Dashboard Button */}
        <DashButton />
      </div>

      {/* Mobile Menu */}
      <MobileMenu isActive={isActive} navLinks={navLinks} />
    </nav>
  );
}
