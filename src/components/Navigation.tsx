'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLoading } from '@/context/LoadingContext';

export function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();
	const { loadingComplete } = useLoading();
	const isLoaded = loadingComplete;
	const isHomePage = pathname === '/';

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
		{ path: '/events', label: 'Events' },
		{ path: '/makerspace', label: 'Makerspace' },
		{ path: '/contact', label: 'Contact' },
		{ path: 'https://your-new-dashboard-link.com', label: 'Dashboard', external: true },
	];

	const isActive = (path: string) => pathname === path;

	return (
		<>
			{/* Mobile menu button - fixed position */}
			<button
				className={`lg:hidden fixed top-0 right-0 z-50 p-3 pr-4 bg-white rounded-bl-xl transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
				onClick={() => setIsOpen(!isOpen)}
				aria-label="Toggle menu"
			>
				{isOpen ? <X size={24} /> : <Menu size={24} />}
			</button>

			{/* Desktop Navigation */}
			<div className={`hidden lg:block absolute top-0 z-50 bg-white shadow-lg transition-all duration-1000 ${
				isHomePage 
					? `right-0 lg:right-8 xl:right-16 rounded-bl-2xl rounded-br-2xl px-8 py-4 mt-0 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}` 
					: 'right-0 p-3 pr-4 rounded-bl-xl'
			}`}>
				<nav className={`flex items-center ${isHomePage ? 'gap-6' : 'gap-8'}`}>
					{navLinks.map((link) => (
						link.external ? (
							<a
								key={link.path}
								href={link.path}
								target="_blank"
								rel="noopener noreferrer"
								className={isHomePage ? "text-gray-700 hover:text-purple-600 transition-colors font-medium" : "transition-colors text-muted-foreground hover:text-foreground"}
							>
								{link.label}
							</a>
						) : (
							<Link
								key={link.path}
								href={link.path}
								className={isHomePage 
									? "text-gray-700 hover:text-purple-600 transition-colors font-medium"
									: `transition-colors ${isActive(link.path) ? 'text-purple-600' : 'text-muted-foreground hover:text-foreground'}`
								}
							>
								{link.label}
							</Link>
						)
					))}
				</nav>
			</div>

			{/* Mobile Navigation - Full Screen Overlay */}
			{isOpen && (
				<div className="lg:hidden fixed inset-0 z-40 bg-white flex flex-col items-start justify-center">
					<div className="flex flex-col items-start gap-6 pl-4 p-3">
						{navLinks.map((link) => (
							link.external ? (
								<a
									key={link.path}
									href={link.path}
									target="_blank"
									rel="noopener noreferrer"
									className="text-5xl font-medium transition-colors text-gray-700 hover:text-purple-600"
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
										: 'text-gray-700 hover:text-purple-600'
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
