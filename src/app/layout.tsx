import type { Metadata } from "next";
import "./globals.css";
import { LoadingWrapper } from "@/components/LoadingWrapper";

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
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`antialiased`}
      >
        {/* <LoadingWrapper> */}
          {children}
        {/* </LoadingWrapper> */}
      </body>
    </html>
  );
}
