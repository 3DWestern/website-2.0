import { ContactPage } from '@/components/pages/ContactPage';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <ContactPage />
      <Footer />
    </div>
  );
}

