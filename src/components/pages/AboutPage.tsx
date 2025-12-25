import { Badge } from '@/components/ui/badge';
import { Linkedin } from 'lucide-react'; // TODO: replace this
import Execs from "@/components/Execs";

export function AboutPage() {
	return (
		<div className="min-h-screen">
			{/* Header */}
			<section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<Badge className="mb-4">About Us</Badge>
					<h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4">Building the Future of Making at Western</h1>
					<p className="text-xl text-muted-foreground max-w-2xl">
						Student-led innovation in partnership with Morrissette Entrepreneurship
					</p>
				</div>
			</section>

			{/* TODO: better mission section */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6">Our Mission</h2>
							<div className="space-y-4 text-lg text-muted-foreground">
								<p>
									3DW is a student-run organization partnering with Morrissette Entrepreneurship
									to manage and operate Western University's premier makerspaces. We've evolved
									from a 3D printing club into the central hub for product design and creation
									on campus.
								</p>
								<p>
									Our mission is to democratize access to professional-grade fabrication tools,
									provide comprehensive training, and foster a community of makers, innovators,
									and entrepreneurs. We support students from initial concept through to final
									prototype, offering both the physical resources and expertise needed to bring
									ideas to life.
								</p>
								<p>
									Through our partnership with Morrissette Entrepreneurship, we operate two
									state-of-the-art facilities: the Digital Makerspace for digital fabrication
									and the Sabourin Makerspace for woodworking and physical construction.
								</p>
							</div>
						</div>
						<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
							<img
								src="https://images.unsplash.com/photo-1758876203342-fc14c0bba67c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjMyODcxNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
								alt="Team collaboration"
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* NOTE: this exec section will be replaced with team pics; execs will be moved to landing page! */}
			<section className="py-20 bg-slate-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold">Meet Our Team</h1>
						<p className="text-xl text-muted-foreground">
							Passionate students leading Western's makerspace community
						</p>
					</div>
				</div>
			</section>

			{/* Partnership Section */}
			<section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<Badge className="mb-4">Partnership</Badge>
					<h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6">Morrissette Entrepreneurship</h2>
					<p className="text-lg text-muted-foreground mb-8">
						Through our collaboration with Morrissette Entrepreneurship, 3DW has evolved into
						the student organization responsible for managing Western's makerspaces. This
						partnership enables us to provide comprehensive support for student innovation,
						from initial ideation through prototype development and beyond.
					</p>
					<p className="text-lg text-muted-foreground">
						Together, we're creating an ecosystem where students can develop entrepreneurial
						skills, validate their ideas, and build real products that make an impact.
					</p>
				</div>
			</section>

		</div>
	);
}
