import { HomePage } from "@/components/pages/HomePage";
import { Footer } from "@/components/Footer";
import { getEvents } from "@/lib/cms/fetch";

export default function Home() {
  getEvents();
  return (
    <main className="min-h-screen w-full flex flex-col">
      <HomePage />
      <Footer />
    </main>
  );
}
