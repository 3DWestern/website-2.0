import { Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { koulen } from '@/lib/fonts';

export function Footer() {
	return (
		<footer className="bg-slate-50 text-slate-700 mt-auto">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-16">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
					{/* About */}
					<div className="col-span-1 md:col-span-2">
						<div className="flex items-center gap-3 mb-4">
							<Image src="/logo.png" alt="3DW" width={40} height={40} />
							<div className="flex flex-col">
								<span className={`tracking-tight font-bold ${koulen.className}`}>3D Western</span>
							</div>
						</div>
						<p className="text-slate-600 max-w-md">
							Empowering Students to Build &amp; Create.
						</p>
						<a href="/documents/3DW_ToS.pdf" className="underline text-slate-600 max-w-md">Terms of Service</a>
					</div>

					{/* Quick Links */}
					<div>
						<ul className="space-y-2">
							<li>
								<Link href="/" className="text-slate-600 hover:text-slate-900 hover:translate-x-1 transition-all">
									Home
								</Link>
							</li>
							<li>
								<Link href="/contact" className="text-slate-600 hover:text-slate-900 hover:translate-x-1 transition-all">
									Contact Us
								</Link>
							</li>
							<li>
								<Link href="/makerspace" className="text-slate-600 hover:text-slate-900 hover:translate-x-1 transition-all">
									Availability
								</Link>
							</li>
							<li>
								<Link href="https://westernu.brightspace.com/d2l/le/discovery/view/course/151344" className="text-slate-600 hover:text-slate-900 hover:translate-x-1 transition-all">
									Training
								</Link>
							</li>
							<li>
								<Link href="/events" className="text-slate-600 hover:text-slate-900 hover:translate-x-1 transition-all">
									Events
								</Link>
							</li>
							{/*<li>
								<Link href="/dashboard" className="text-slate-600 hover:text-slate-900 hover:translate-x-1 transition-all">
									Dashboard
								</Link>
							</li>*/}
						</ul>
					</div>

					{/* right columns */}
					<div className="lg:border-l lg:border-slate-200 lg:pl-8 flex flex-col sm:flex-row items-center gap-8">
						<ul className="space-y-3">
							<li className="flex items-start gap-2 text-slate-600">
								<Mail size={20} className="mt-0.5 flex-shrink-0" />
								<a href="mailto:contact@3dwestern.ca" className="hover:text-slate-900 transition-colors">contact@3dwestern.ca</a>
							</li>
							<li className="flex items-start gap-2 text-slate-600">
								<MapPin size={20} className="mt-0.5 flex-shrink-0" />
								<span>Ronald D. Schmeichel Building for Entrepreneurship and Innovation, Western University</span>
							</li>
						</ul>
						{/*  links for instagram and linkedin */}
						<ul className="flex flex-row sm:flex-col sm:ml-10 gap-4 sm:gap-10">
							<li>
								<a
									href="https://www.instagram.com/3dwestern/"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center justify-center p-2 text-slate-600 hover:text-slate-900 transition-colors"
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
									className="flex items-center justify-center p-2 text-slate-600 hover:text-slate-900 transition-colors"
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

				<div className="border-t border-slate-200 mt-12 pt-8 text-center text-slate-600">
					<p>
						Made by{' '}
						<a
							href="https://linkedin.com/in/lucianlavric"
							target="_blank"
							rel="noopener noreferrer"
							className="text-purple-400 hover:text-purple-300 transition-colors underline font-medium"
						>
							Luka :3
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
