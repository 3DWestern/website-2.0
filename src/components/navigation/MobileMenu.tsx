"use client";

import { useMenu } from "@/context/MenuContext";
import DashButton from "./DashButton";
import NavLink from "./NavLink";
import { Button } from "../ui/button";
import { cn } from "../ui/utils";

interface MobileMenuProps {
  isActive: (path: string) => boolean;
  navLinks: {
    path: string;
    label: string;
    external?: boolean;
  }[];
}

export default function MobileMenu({ isActive, navLinks }: MobileMenuProps) {
  const { isMenuOpen } = useMenu();

  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-40 flex flex-col items-center justify-center gap-6 lg:hidden",
        "bg-header/40 backdrop-blur-xl",
        "transition-opacity duration-300",
        isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0",
      )}
      aria-hidden={!isMenuOpen}
    >
      {navLinks.map((link) => (
        <NavLink
          key={link.path}
          link={link}
          active={isActive(link.path)}
          mobile={true}
        />
      ))}
      <div className="flex flex-col sm:hidden gap-2">
        <Button variant="outlined" size="pill" asChild>
          <a
            href="https://westernu.brightspace.com/d2l/le/discovery/view/course/151344"
            target="_blank"
            rel="noreferrer noopener"
          >
            Training
          </a>
        </Button>
        <DashButton />
      </div>
    </div>
  );
}
