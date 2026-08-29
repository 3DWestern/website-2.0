import { Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { koulen } from "@/lib/fonts";
import { Button } from "./ui/button";
import Logo from "./Logo";
import FooterLinks from "./navigation/FooterLinks";
import ContactInfo from "./ContactInfo";

export default function Footer() {
  return (
    <footer className="relative bg-footer text-footer-text font-medium p-8">
      <div className="z-1 absolute w-[400px] h-[350px] p-8 blur-xs opacity-20 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-24">
        <Image src="/logo-2.png" alt="3DW Logo" fill className="object-cover" />
      </div>
      <div className="relative z-10">
        <div className="flex flex-col gap-8">
          <div
            className="
    grid gap-8
    grid-cols-[3fr_1fr]
    [grid-template-areas:'brand_links'_'contact_links']
    sm:grid-cols-[2fr_1fr_1fr]
    sm:[grid-template-areas:'brand_links_contact']
  "
          >
            {/* Branding */}
            <div className="[grid-area:brand] flex flex-col gap-2">
              <div className="-ml-5">
                <Logo />
              </div>
              <span className="text-small">
                Empowering Students to Build &amp; Create.
              </span>
            </div>

            {/* Footer Link List */}
            <div className="[grid-area:links]">
              <FooterLinks />
            </div>

            {/* Contact Information */}
            <div className="[grid-area:contact]">
              <ContactInfo />
            </div>
          </div>
          {/* Splitter Horizontal Line */}
          <hr className="h-px text-[#8B949E33]" />

          {/* Copyright statement + Go To Top button */}
          <div className="flex justify-between items-center">
            <span className="text-secondary-text text-small">
              Copyright © 2026, 3dwestern.ca, All Rights Reserved.
            </span>
            <Button variant="outlined" size="pill" asChild>
              <Link href="#top">Back to top</Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
