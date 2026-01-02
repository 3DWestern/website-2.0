import type { Metadata } from "next";
import "./globals.css";
import { LoadingWrapper } from "@/components/LoadingWrapper";
import { HomeButton } from "@/components/HomeButton";
import { Navigation } from "@/components/Navigation";

// global metadata for SEO, can be overridden by specific individual pages
export const metadata: Metadata = {
	title: "3DW Makerspace",
	description: "A student-run organization partnering with Morrissette Entrepreneurship to manage Western's makerspaces. From idea validation to product creation.",
	keywords: ["3D Printing", "Western University", "3D Western", "Engineering", "Western Printing Club"],
	publisher: "3D Western",
	openGraph: {
		title: "3D Western",
		description: "Western University's Official 3D Printing Club",
		url: "https://3dwestern.ca",
		siteName: "3D Western",
		images: [
			{
				url: "https://3dwestern.ca/banner.png",
				width: 1200,
				height: 630,
				alt: "3D Western: Western University's Official 3D Printing Club",
			},
		],
		locale: "en_US",
		type: "website",
	},
	icons: {
		icon: '/logo.png',
		shortcut: '/favicon.ico', // TODO: replace with new logo.png if needed; otherwise stick to favicon
		apple: '/favicon.ico',
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
		},
	},
	twitter: {
		card: "summary_large_image",
		title: "3D Western",
		description: "Western University's Official 3D Printing Club",
		images: [
			{
				url: "https://3dwestern.ca/banner.png",
				width: 1200,
				height: 630,
				alt: "3D Western: Western University's Official 3D Printing Club",
			},
		],
		//	creator: "@yourTwitterHandle", // optional
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// Use a client component to access the router
	return (
		<html lang="en" className="scroll-smooth">
			<body className={`antialiased`}>
				<HomeButton />
				<Navigation />
				<LoadingWrapper>
					{children}
				</LoadingWrapper>
			</body>
		</html>
	);
}

// HomeButton is now a client component in components/HomeButton.tsx

