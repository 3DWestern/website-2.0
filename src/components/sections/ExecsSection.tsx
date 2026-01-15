import { SlidingCarousel } from '@/components/SlidingCarousel';
import { items } from '@/components/data/teamdata';

export function ExecsSection() {
	return (
		<section className="w-screen py-20 bg-gradient-to-b from-white to-purple-50">
			<SlidingCarousel items={items} />
		</section>
	);
}