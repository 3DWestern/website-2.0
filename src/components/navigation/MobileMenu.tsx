import { useMenu } from "@/context/MenuContext";
import DashButton from "./DashButton";
import NavLink from "./NavLink";
import { Button } from "../ui/button";

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
      className={`top-16 left-0 w-full h-[calc(100dvh-64px)] lg:h-0   ${
        isMenuOpen ? "" : "pointer-events-none"
      }`}
      aria-hidden={!isMenuOpen}
    >
      <div className="flex lg:hidden flex-col z-40 bg-header backdrop-blur-sm w-full h-full items-center justify-center gap-6 overflow-hidden">
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
    </div>
  );
}
