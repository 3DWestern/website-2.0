import { EventsSection } from '@/components/sections/EventsSection';
import BigTextSection from '@/components/sections/BigTextSection';
import { MakerspacesSection } from '@/components/sections/MakerspacesSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { AboutUsSection } from '@/components/sections/AboutUsSection';
import { MorissetteModel } from '@/components/sections/MorissetteModel';
import { ExecsSection } from '@/components/sections/ExecsSection';

export function HomePage() {
	return (
		<div>
			<MorissetteModel />
			<BigTextSection />
			<AboutUsSection />
			<EventsSection />
			<MakerspacesSection />
			<ExecsSection />
			<FAQSection />
		</div>
	);
}
