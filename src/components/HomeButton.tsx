'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export function HomeButton() {
	const pathname = usePathname();
	if (pathname !== "/") return null;
	return (
		<Link
			href="/"
			className="fixed top-4 left-4 z-50 bg-white border border-gray-200 shadow-md rounded-full p-2 hover:bg-purple-50 transition-colors flex items-center justify-center transition-transform duration-200 transform hover:scale-110 w-12 h-12 no-underline"
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
	);
}
