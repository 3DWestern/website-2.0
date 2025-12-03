import { HomePage } from '@/components/pages/HomePage';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center">
      <Navigation />
      <HomePage />
      <Footer />
    </div>
  );
}