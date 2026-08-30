import { ContactPage } from "@/components/pages/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | 3D Western",
};

export default function Contact() {
  return <ContactPage />;
}
