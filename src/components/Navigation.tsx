'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLoading } from '@/context/LoadingContext';
import { LandingButton } from '@/components/LandingButton';

export function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();
	const { loadingComplete } = useLoading();
	const isLoaded = loadingComplete;

	// Prevent scrolling when menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		// Cleanup on unmount
		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);

	const navLinks = [
		// { path: '/about', label: 'About Us' },
		{ path: '/contact', label: 'Contact Us' },
		{ path: '/makerspace', label: 'Availability' },
		{ path: 'https://westernu.brightspace.com/d2l/le/discovery/view/course/151344', label: 'Training', external: true },
		{ path: '/events', label: 'Events' },
		// { path: 'https://your-new-dashboard-link.com', label: 'Dashboard', external: true }, // NOTE: removed this for now until the dashboard is up.
	];

	const isActive = (path: string) => pathname === path;

	return (
		<>
			{/* Mobile menu button - fixed position */}
			<button
				className={`sm:hidden fixed top-0 right-0 z-100 p-3 pr-4 bg-white rounded-bl-xl transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
				onClick={() => setIsOpen(!isOpen)}
				aria-label="Toggle menu"
			>
				{isOpen ? <X size={24} /> : <Menu size={24} />}
			</button>

			{/* Desktop Navigation */}
			<div className="fixed top-0 right-0 z-100 p-3 pr-4 bg-white rounded-bl-xl hidden md:block">
				<div className="flex items-center gap-8">
					{navLinks.map((link) => (
						link.external ? (
							<a
								key={link.path}
								href={link.path}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block transition-colors transition-transform text-muted-foreground hover:text-foreground hover:scale-110 hover:font-semibold duration-300"
							>
								{link.label}
							</a>
						) : (
							<Link
								key={link.path}
								href={link.path}
								className={`transition-colors ${isActive(link.path)
									? 'text-purple-600'
									: 'text-muted-foreground hover:text-foreground hover:scale-110 hover:font-semibold transition-transform inline-block duration-300'
									}`}
							>
								{link.label}
							</Link>
						)
					))}
					{/* <Link href="/login">
            <Button>Login</Button>
          </Link>  */}
				</div>
			</div>

			{/* Mobile Navigation - Full Screen Overlay */}
			{isOpen && (
				<div className="md:hidden fixed inset-0 z-40 bg-white flex flex-col items-start justify-center">
					<div className="z-50 absolute top-4 left-4">
						<LandingButton isMobile={true} />
					</div>
					<div className="flex flex-col items-start gap-6 pl-4 p-3">
						{navLinks.map((link) => (
							link.external ? (
								<a
									key={link.path}
									href={link.path}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block text-5xl font-medium transition-colors transition-transform text-gray-700 hover:text-purple-600 hover:scale-110 hover:font-semibold duration-300"
									onClick={() => setIsOpen(false)}
								>
									{link.label}
								</a>
							) : (
								<Link
									key={link.path}
									href={link.path}
									className={`text-5xl font-medium transition-colors ${isActive(link.path)
										? 'text-purple-600'
										: 'text-gray-700 hover:text-purple-600 hover:scale-110 hover:font-semibold transition-transform inline-block duration-300'
										}`}
									onClick={() => setIsOpen(false)}
								>
									{link.label}
								</Link>
							)
						))}
					</div>
				</div>
			)}
		</>
	);
}
