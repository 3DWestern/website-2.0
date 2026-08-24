import Link from "next/link";
import { navLinks } from "../data/navLinks";
import FooterSecton from "../footer/FooterSection";

export default function FooterLinks() {
  return (
    <FooterSecton title="SITE">
      <div className="flex flex-col gap-2">
        {navLinks.map((link) => (
          <Link key={link.path} className="text-footer-text" href={link.path}>
            {link.label}
          </Link>
        ))}
      </div>
    </FooterSecton>
  );
}
