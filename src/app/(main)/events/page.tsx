import type { Metadata } from "next";
import { HorizontalNav } from "@/components/HorizontalNav";
import { Footer } from "@/components/Footer";
import { EventsPage } from "@/components/pages/EventsPage";

export const metadata: Metadata = {
  title: "Events | 3D Western",
  description:
    "See what's happening at 3D Western — workshops, socials, meetings, and more, all in one calendar.",
};

export default function Page() {
  return (
      <main className="min-h-screen flex flex-col">
        <HorizontalNav variant="dark" />
        <EventsPage/>
        <Footer />
      </main>
    );
}