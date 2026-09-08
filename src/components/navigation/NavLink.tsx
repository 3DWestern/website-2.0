"use client";

import Link from "next/link";
import { NavLink as NavLinkType } from "../data/navLinks";
import { cn } from "../ui/utils";

interface NavLinkProps {
  link: NavLinkType;
  active?: boolean;
  mobile?: boolean;
}

export default function NavLink({
  link,
  active = false,
  mobile = false,
}: NavLinkProps) {
  const className = cn(
    "text-sm transition-colors",
    active ? "text-purple-light" : "header-link",
    mobile && "text-2xl font-medium",
  );

  if (link.external) {
    return (
      <a
        href={link.path}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.path} className={className}>
      {link.label}
    </Link>
  );
}
