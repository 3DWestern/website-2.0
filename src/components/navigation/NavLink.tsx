import Link from "next/link";
import { NavLink as NavLinkType } from "../NavBar";
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
  return (
    <a
      href={link.path}
      target={link.external ? "_blank" : "_self"}
      rel={link.external ? "noopener noreferrer" : ""}
      className={cn(
        "text-sm transition-colors",
        active ? "text-pruple-light" : "header-link",
        mobile && "text-2xl font-medium",
      )}
    >
      {link.label}
    </a>
  );
}
