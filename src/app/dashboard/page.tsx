import { DashboardPage } from '@/components/pages/DashboardPage';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <DashboardPage />
      <Footer />
    </div>
  );
}

