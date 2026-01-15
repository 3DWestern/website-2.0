'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export function LandingButton({ isMobile }: { isMobile: boolean }) {
	const pathname = usePathname();
	if (pathname !== "/") return null; // render for only the home page

	return (
		isMobile ? (
			<Link
				href="/"
				className="relative block no-underline w-12 h-12"
				aria-label="Home"
			>
				<Image
					src="/logo.png"
					alt="Home"
					fill
					className="object-cover"
					priority
				/>
			</Link>
		) : (
			<Link
				href="/"
				className="hidden sm:flex fixed top-10 left-12 z-50 bg-white border border-gray-200 shadow-md rounded-full p-2 hover:bg-purple-50 transition-all items-center justify-center duration-200 hover:scale-110 no-underline w-12 h-12"
				aria-label="Home"
			>
				<Image
					src="/logo.png"
					alt="Home"
					fill
					className="object-cover"
					priority
				/>
			</Link>
		)
	);
}
