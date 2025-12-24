import { MakerspacePage } from '@/components/pages/MakerspacePage';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function Makerspace() {
	return (
		// NOTE: include gallery of makerspace products here, along with student time
		<div className="min-h-screen flex flex-col">
			<Navigation />
			<MakerspacePage />
			<Footer />
		</div>
	);
}

