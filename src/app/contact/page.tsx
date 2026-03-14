import type { Metadata } from "next";
import { ContactHero } from "@/components/sections/contact/contact-hero";
import { ContactForm } from "@/components/sections/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us about your organization and we'll show you how Aleria fits.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}
