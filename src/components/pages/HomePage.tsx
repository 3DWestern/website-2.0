import { EventsSection } from '@/components/sections/EventsSection';
import { MakerspacesSection } from '@/components/sections/MakerspacesSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { AboutUsSection } from '@/components/sections/AboutUsSection';
import { PhoneHeroSection } from '@/components/sections/PhoneHeroSection';
import { ExecsSection } from '@/components/sections/ExecsSection';

export function HomePage() {
	return (
		<div>
			<PhoneHeroSection />
			<AboutUsSection />
			<EventsSection />
			<MakerspacesSection />
			<ExecsSection />
			<FAQSection />
		</div>
	);
}
