import { MakerspacePage } from '@/components/pages/MakerspacePage';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function Makerspace() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <MakerspacePage />
      <Footer />
    </div>
  );
}

