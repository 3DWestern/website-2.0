import { Hero } from "@/components/sections/Hero";
import { MorissetteModel } from "@/components/sections/MorissetteModel";
import { BigTextSection } from "@/components/sections/BigTextSection";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { MakerspacesSection } from "@/components/sections/MakerspacesSection";
import { ExecsSection } from "@/components/sections/ExecsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { JoinUsSection } from "@/components/sections/JoinUsSection";

export function HomePage() {
  return (
    <main>
      <Hero />
      <MorissetteModel />
      <AboutUsSection />
      <MakerspacesSection />
      {/* <ExecsSection />
      <FAQSection /> */}
      <JoinUsSection />
    </main>
  );
}