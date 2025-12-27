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
			{/* Disclaimer Section */}
			<section className="w-full bg-purple-700 text-white py-3 px-2 text-center text-base font-medium">
				<div className="max-w-5xl mx-auto">
					Accessing the makerspace: Western students require training on OWL (<a href="https://owl.uwo.ca/" target="_blank" rel="noopener noreferrer" className="underline font-semibold">access here</a>). Organizations: <a href="mailto:contact@3dwestern.ca" className="underline font-semibold">Contact us</a>.
				</div>
			</section>
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
