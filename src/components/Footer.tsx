import { Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
	return (
		<footer className="bg-slate-950 text-slate-200 mt-auto">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-16">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
					{/* About */}
					<div className="col-span-1 md:col-span-2">
						<div className="flex items-center gap-3 mb-4">
							<Image src="/logo.png" alt="3DW" width={40} height={40} />
							<div className="flex flex-col">
								<span className="tracking-tight font-bold">3D Western</span>
							</div>
						</div>
						<p className="text-slate-400 max-w-md">
							Empowering Students to Build &amp; Create.
						</p>
						<a href="/documents/3DW_ToS.pdf" className="underline text-slate-400 max-w-md">Terms of Service</a>
					</div>

					{/* Quick Links */}
					<div>
						<ul className="space-y-2">
							<li>
								<Link href="/" className="text-slate-400 hover:text-white transition-colors hover:scale-110 hover:font-bold">
									Home
								</Link>
							</li>
							<li>
								<Link href="/contact" className="text-slate-400 hover:text-white transition-colors hover:scale-110 hover:font-bold">
									Contact Us
								</Link>
							</li>
							<li>
								<Link href="/makerspace" className="text-slate-400 hover:text-white transition-colors hover:scale-110 hover:font-bold">
									Availability
								</Link>
							</li>
							<li>
								<Link href="https://westernu.brightspace.com/d2l/le/discovery/view/course/151344" className="text-slate-400 hover:text-white transition-colors hover:scale-110 hover:font-bold">
									Training
								</Link>
							</li>
							<li>
								<Link href="/events" className="text-slate-400 hover:text-white transition-colors hover:scale-110 hover:font-bold">
									Events
								</Link>
							</li>
							{/*<li>
								<Link href="/dashboard" className="text-slate-400 hover:text-white transition-colors hover:scale-110 hover:font-bold">
									Dashboard
								</Link>
							</li>*/}
						</ul>
					</div>

					{/* right columns */}
					<div className="lg:border-l lg:border-slate-700 lg:pl-8 flex flex-col sm:flex-row items-center gap-8">
						<ul className="space-y-3">
							<li className="flex items-start gap-2 text-slate-400">
								<Mail size={20} className="mt-0.5 flex-shrink-0" />
								<a href="mailto:contact@3dwestern.ca" className="hover:text-white transition-colors">contact@3dwestern.ca</a>
							</li>
							<li className="flex items-start gap-2 text-slate-400">
								<MapPin size={20} className="mt-0.5 flex-shrink-0" />
								<span>Ronald D. Schmeichel Building for Entrepreneurship and Innovation, Western University</span>
							</li>
						</ul>
						{/*  links for instagram and linkedin */}
						<ul className="flex flex-row sm:flex-col sm:ml-10 gap-10">
							<li>
								<a
									href="https://www.instagram.com/3dwestern/"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors hover:scale-110 hover:font-bold"
									aria-label="Instagram"
								>
									<Image
										src="/images/Instagram.svg"
										alt="Instagram"
										width={30}
										height={30}
										className="flex-shrink-0"
									/>
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/company/3d-western/"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors hover:scale-110 hover:font-bold"
									aria-label="LinkedIn"
								>
									<Image
										src="/images/Linkedin.svg"
										alt="LinkedIn"
										width={30}
										height={30}
										className="flex-shrink-0"
									/>
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/*				<div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
					<p>&copy; {new Date().getFullYear()} 3DW Makerspace. All rights reserved.</p>
				</div> */}
			</div>
		</footer>
	);
}
