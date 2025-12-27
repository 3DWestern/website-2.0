import type { Metadata } from "next";
import "./globals.css";
import { LoadingWrapper } from "@/components/LoadingWrapper";
import { HomeButton } from "@/components/HomeButton";

export const metadata: Metadata = {
  title: "3DW Makerspace",
  description: "A student-run organization partnering with Morrissette Entrepreneurship to manage Western's makerspaces. From idea validation to product creation.",
  icons: {
    icon: "/logo.png",
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
        <LoadingWrapper>
          {children}
        </LoadingWrapper>
      </body>
    </html>
  );
}

// HomeButton is now a client component in components/HomeButton.tsx
