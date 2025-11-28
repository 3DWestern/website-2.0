import { GalleryPage } from '@/components/pages/GalleryPage';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function Gallery() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <GalleryPage />
      <Footer />
    </div>
  );
}

