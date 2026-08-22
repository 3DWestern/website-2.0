import { HomePage } from "@/components/pages/HomePage";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <NavBar />
      <HomePage />
      <Footer />
    </main>
  );
}
