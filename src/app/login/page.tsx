import { LoginPage } from '@/components/pages/LoginPage';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <LoginPage />
      <Footer />
    </div>
  );
}

