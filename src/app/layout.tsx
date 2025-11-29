import type { Metadata } from "next";
import { Koulen, Krub } from "next/font/google";
import "./globals.css";

export const koulen = Koulen({
  subsets: ["latin"],
  weight: "400",
});

export const krub = Krub({
  subsets: ["latin"],
  weight: "400",
});

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
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
