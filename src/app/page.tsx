import { HomePage } from '@/components/pages/HomePage';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function Home() {
	return (
		<div className="min-h-screen w-full flex flex-col">
			<div className="max-w-6xl mx-auto w-full">
				<Navigation />
			</div>
			<HomePage />
			<Footer />
		</div>
	);
}
