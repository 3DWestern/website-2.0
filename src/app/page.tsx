import { HomePage } from '@/components/pages/HomePage';
import { Footer } from '@/components/Footer';

export default function Home() {
	return (
		<div className="min-h-screen w-full flex flex-col">
			<HomePage />
			<Footer />
		</div>
	);
}
