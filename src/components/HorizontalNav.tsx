'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useEffect } from 'react';
import { useMenu } from '@/context/MenuContext';

// Prevent scrolling via wheel, touch, and keyboard events
const preventDefault = (e: Event) => {
	e.preventDefault();
};

const preventKeyScroll = (e: KeyboardEvent) => {
	const scrollKeys = [32, 33, 34, 35, 36, 37, 38, 39, 40]; // space, page up/down, home, end, arrows
	if (scrollKeys.includes(e.keyCode)) {
		e.preventDefault();
	}
};

export function HorizontalNav({
	isHeroOnly = false,
	variant = 'dark'
}: {
	isHeroOnly?: boolean;
	variant?: 'light' | 'dark';
}) {
	const { isMenuOpen, setIsMenuOpen } = useMenu();
	const pathname = usePathname();

	// Prevent scrolling when menu is open
	useEffect(() => {
		if (isMenuOpen) {
			// Store current scroll position
			const scrollY = window.scrollY;

			// CSS-based scroll prevention
			document.documentElement.style.overflow = 'hidden';
			document.body.style.overflow = 'hidden';
			document.body.style.position = 'fixed';
			document.body.style.top = `-${scrollY}px`;
			document.body.style.width = '100%';

			// Event-based scroll prevention
			window.addEventListener('wheel', preventDefault, { passive: false });
			window.addEventListener('touchmove', preventDefault, { passive: false });
			window.addEventListener('keydown', preventKeyScroll, { passive: false });

			// Cleanup function
			return () => {
				// Restore CSS
				document.documentElement.style.overflow = '';
				document.body.style.overflow = '';
				document.body.style.position = '';
				document.body.style.top = '';
				document.body.style.width = '';

				// Remove event listeners
				window.removeEventListener('wheel', preventDefault);
				window.removeEventListener('touchmove', preventDefault);
				window.removeEventListener('keydown', preventKeyScroll);

				// Restore scroll position
				window.scrollTo(0, scrollY);
			};
		}
	}, [isMenuOpen]);

	const navLinks = [
		{ path: '/contact', label: 'Contact Us' },
		{ path: '/makerspace', label: 'Availability' },
		{ path: 'https://westernu.brightspace.com/d2l/le/discovery/view/course/151344', label: 'Training', external: true },
		{ path: '/events', label: 'Events' },
	];

	const isActive = (path: string) => pathname === path;

	const navStyles = variant === 'light'
		? {
				bg: 'bg-purple-900/20',
				backdrop: 'backdrop-blur-xl',
				border: 'border-purple-400/25',
				text: 'text-white/90 hover:text-white',
				textActive: 'text-white',
				shadow: 'shadow-[0_8px_32px_rgba(154,39,238,0.25)]'
			}
		: {
				bg: 'bg-white/95',
				backdrop: 'backdrop-blur-sm',
				border: 'border-gray-200',
				text: 'text-gray-700 hover:text-gray-900',
				textActive: 'text-purple-600',
				shadow: 'shadow-lg'
			};

	return (
		<>
			{/* Desktop Navigation */}
			<nav
				className={`hidden lg:block ${isHeroOnly ? 'absolute' : 'fixed'} top-6 left-1/2 -translate-x-1/2 z-50 ${isHeroOnly ? 'w-[80%]' : 'w-[85%]'} max-w-5xl`}
			>
				<div className={`${navStyles.bg} ${navStyles.backdrop} border ${navStyles.border} rounded-full ${navStyles.shadow} ${isHeroOnly ? 'px-6 lg:px-10' : 'px-12'} py-5`}>
					<div className="flex items-center justify-between">
						{/* Left - Navigation Links */}
						<div className="flex items-center gap-12">
							{navLinks.slice(0, 2).map((link) => (
								link.external ? (
									<a
										key={link.path}
										href={link.path}
										target="_blank"
										rel="noopener noreferrer"
										className={`${navStyles.text} font-medium transition-all text-base tracking-wide`}
									>
										{link.label}
									</a>
								) : (
									<Link
										key={link.path}
										href={link.path}
										className={`font-medium transition-all text-base tracking-wide ${
											isActive(link.path)
												? navStyles.textActive
												: navStyles.text
										}`}
									>
										{link.label}
									</Link>
								)
							))}
						</div>

						{/* Center - Logo */}
						<Link href="/" className="absolute left-1/2 -translate-x-1/2">
							<div className="w-14 h-14 relative hover:scale-110 transition-transform bg-white rounded-full p-2 shadow-lg">
								<Image
									src="/logo.png"
									alt="3D Western Logo"
									fill
									sizes="(max-width: 1024px) 40px, 56px"
									style={{ objectFit: 'contain' }}
									priority
								/>
							</div>
						</Link>

						{/* Right - Navigation Links */}
						<div className="flex items-center gap-12">
							{navLinks.slice(2).map((link) => (
								link.external ? (
									<a
										key={link.path}
										href={link.path}
										target="_blank"
										rel="noopener noreferrer"
										className={`${navStyles.text} font-medium transition-all text-base tracking-wide`}
									>
										{link.label}
									</a>
								) : (
									<Link
										key={link.path}
										href={link.path}
										className={`font-medium transition-all text-base tracking-wide ${
											isActive(link.path)
												? navStyles.textActive
												: navStyles.text
										}`}
									>
										{link.label}
									</Link>
								)
							))}
						</div>
					</div>
				</div>
			</nav>

			{/* Mobile Navigation */}
			<div className="lg:hidden">
				{/* Mobile Header with Logo and Menu Button */}
				<div className={`${isHeroOnly ? 'absolute' : 'fixed'} top-4 ${isHeroOnly ? 'left-2 right-2 max-w-[calc(100%-1rem)] mx-auto' : 'left-4 right-4'} z-50 ${navStyles.bg} ${navStyles.backdrop} border ${navStyles.border} rounded-full ${navStyles.shadow}`}>
					<div className="flex items-center justify-between px-4 py-3">
						<Link href="/" className="w-10 h-10 relative bg-white rounded-full p-1.5">
							<Image
								src="/logo.png"
								alt="3D Western Logo"
								fill
								sizes="(max-width: 1024px) 40px, 56px"
								style={{ objectFit: 'contain' }}
								priority
							/>
						</Link>
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							aria-label="Toggle menu"
							className={`p-2 ${navStyles.text}`}
						>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>

				{/* Mobile Menu Overlay */}
				{isMenuOpen && (
					<div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center">
						<div className="flex flex-col items-center gap-6">
							{navLinks.map((link) => (
								link.external ? (
									<a
										key={link.path}
										href={link.path}
										target="_blank"
										rel="noopener noreferrer"
										className="text-4xl font-medium text-gray-700 hover:text-purple-600 transition-colors"
										onClick={() => setIsMenuOpen(false)}
									>
										{link.label}
									</a>
								) : (
									<Link
										key={link.path}
										href={link.path}
										className={`text-4xl font-medium transition-colors ${
											isActive(link.path)
												? 'text-purple-600'
												: 'text-gray-700 hover:text-purple-600'
										}`}
										onClick={() => setIsMenuOpen(false)}
									>
										{link.label}
									</Link>
								)
							))}
						</div>
					</div>
				)}
			</div>
		</>
	);
}
