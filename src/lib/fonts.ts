import { Inter, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { Chakra_Petch, Work_Sans } from "next/font/google";

// Body font - Inter (clean, modern, highly readable)
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

// Brand body font - Space Grotesk (paragraphs, UI copy). Weights 400-600.
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

// Brand "instrument" voice - IBM Plex Mono (eyebrows, data, captions). Weight 500.
export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
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


export const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-chakra-petch",
  display: "swap",
});

export const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
  display: "swap",
});