import { EventsSection } from '@/components/sections/EventsSection';
import { MakerspacesSection } from '@/components/sections/MakerspacesSection';
import { ProjectsHighlightSection } from '@/components/sections/ProjectsHighlightSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { AboutUsSection } from '@/components/sections/AboutUsSection';
import { PhoneHeroSection } from '@/components/sections/PhoneHeroSection';
import { ExecSphere } from '@/components/ExecsSphere';

export function HomePage() {
	return (
		<div>
			<PhoneHeroSection />
			<AboutUsSection />
			<EventsSection />
			<MakerspacesSection />
			<ExecSphere />
			<ProjectsHighlightSection />
			<FAQSection />
		</div>
	);
}
