import { Inter, Space_Grotesk } from "next/font/google";

// Body font - Inter (clean, modern, highly readable)
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

// Heading font - Space Grotesk (geometric, distinctive)
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

// Legacy fonts (keeping for backward compatibility)
import { Koulen, Krub } from "next/font/google";

export const koulen = Koulen({
  subsets: ["latin"],
  weight: "400",
});

export const krub = Krub({
  subsets: ["latin"],
  weight: "400",
});
