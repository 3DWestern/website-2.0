import { useMenu } from "@/context/MenuContext";
import DashButton from "./DashButton";
import NavLink from "./NavLink";

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
      style={{
        position: "absolute",
        display: "grid",
        gridTemplateRows: isMenuOpen ? "1fr" : "0fr",
        transition: "grid-template-rows .5s ease",
      }}
      className={`top-16 left-0 w-full h-[calc(100dvh-64px)] lg:h-0 ${
        isMenuOpen ? "" : "pointer-events-none"
      }`}
      aria-hidden={!isMenuOpen}
    >
      <div className="flex lg:hidden flex-col z-40 bg-header w-full h-full items-center justify-center gap-6 overflow-hidden">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            link={link}
            active={isActive(link.path)}
            mobile={true}
          />
        ))}

        <DashButton />
      </div>
    </div>
  );
}
