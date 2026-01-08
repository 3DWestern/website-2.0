'use client';
import { Check } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { motion } from 'motion/react';
import { koulen } from '@/lib/fonts';
import Image from "next/image";
import { spaces } from "@/components/data/spaces";

export function MakerspacesSection() {
	return (
		<section className="py-12 lg:py-20 bg-slate-50">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12"
				>
					<h2 className={`text-3xl lg:text-5xl xl:text-6xl mb-4 ${koulen.className}`}>THE MAKERSPACES</h2>
				</motion.div>

				<div className="space-y-12">
					{spaces.map((space, index) => (
						<motion.div
							key={space.id}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.7, delay: 0.2 }}
						>
							<Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
								<div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
									{/* Responsive image fills its container fully */}
									<div className={`relative aspect-video w-full h-full ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
										<Image
											src={space.image}
											alt={space.alt}
											fill
											className="object-cover w-full h-full"
											sizes="(min-width: 1024px) 50vw, 100vw"
											priority={index === 0}
										/>
									</div>

									{/* Content */}
									<div className="p-8 flex flex-col justify-center">

										<h3 className="text-2xl sm:text-3xl mb-3 font-bold">{space.name}</h3>
										<p className="text-lg text-muted-foreground mb-4">{space.description}</p>


										<div className="grid md:grid-cols-2 gap-6">
											<div>
												<h4 className="mb-3 font-semibold">Available Equipment:</h4>
												<ul className="space-y-2">
													{space.tools.map((tool) => (
														<li key={tool} className="flex items-start gap-2 text-sm text-muted-foreground">
															<Check size={16} className="text-purple-600 flex-shrink-0 mt-0.5" />
															<span>{tool}</span>
														</li>
													))}
												</ul>
											</div>

											<div>
												<h4 className="mb-3 font-semibold">Project Examples:</h4>
												<ul className="space-y-2">
													{space.projects.map((project) => (
														<li key={project} className="flex items-start gap-2 text-sm text-muted-foreground">
															<Check size={16} className="text-purple-600 flex-shrink-0 mt-0.5" />
															<span>{project}</span>
														</li>
													))}
												</ul>
											</div>
										</div>
									</div>
								</div>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
