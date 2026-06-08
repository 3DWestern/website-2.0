import { BlogsPage } from '@/components/pages/BlogsPage';
import { HorizontalNav } from '@/components/HorizontalNav';
import { Footer } from '@/components/Footer';

export default function Blogs() {
  return (
    <main className="min-h-screen flex flex-col">
      <HorizontalNav variant="dark" />
      <BlogsPage />
      <Footer />
    </main>
  );
}