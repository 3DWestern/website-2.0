import Footer from "@/components/Footer";
import { HomePage } from "@/components/pages/HomePage";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <HomePage />
        <Footer />
    </main>
  );
}
