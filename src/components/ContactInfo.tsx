import { Mail, MapPin } from "lucide-react";
import FooterSecton from "./footer/FooterSection";

export default function ContactInfo() {
  return (
    <FooterSecton title="CONTACT">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <Mail size={24} className="text-purple-light"></Mail>
          <span className="text-footer-text flex-1 self-center">
            contact@3dwestern.ca
          </span>
        </div>
        <div className="flex gap-2">
          <MapPin size={24} className="text-purple-light"></MapPin>

          <span className="text-footer-text text-pretty flex-1 self-end">
            Ronald D. Schmeichel Building for Entrepreneurship and Innovation,
            Western University
          </span>
        </div>
      </div>
    </FooterSecton>
  );
}
