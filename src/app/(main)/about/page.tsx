import { AboutPage } from "@/components/pages/AboutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | 3D Western",
};

export default function About() {
  return <AboutPage />;
}
