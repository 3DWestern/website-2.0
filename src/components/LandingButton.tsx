"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export function LandingButton() {
	const pathname = usePathname();
	if (pathname !== "/") return null; // render for only the home page

	return (
		<Link
			href="/"
			className="hidden sm:block fixed top-10 left-12 z-50 bg-white border border-gray-200 shadow-md rounded-full p-2 hover:bg-purple-50 transition-colors flex items-center justify-center transition-transform duration-200 transform hover:scale-110"
			style={{ textDecoration: 'none', width: 48, height: 48 }}
			aria-label="Home"
		>
			<Image
				src="/logo.png"
				alt="Home"
				fill
				style={{ objectFit: 'cover' }}
				priority
			/>
		</Link>
	);
}
