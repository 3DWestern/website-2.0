import { MakerspacePage } from '@/components/pages/MakerspacePage';
import { HorizontalNav } from '@/components/HorizontalNav';
import { Footer } from '@/components/Footer';

export default function Makerspace() {
	return (
		// NOTE: include gallery of makerspace products here, along with student time
		<div className="min-h-screen flex flex-col">
			<HorizontalNav variant="dark" />
			<MakerspacePage />
			<Footer />
		</div>
	);
}

