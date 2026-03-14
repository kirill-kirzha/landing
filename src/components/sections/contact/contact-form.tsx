"use client";

import { useState } from "react";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { ContactFormFields } from "@/components/sections/contact/contact-form-fields";
import type { ContactFormState } from "@/config/contact-form";

const INITIAL_STATE: ContactFormState = {
  firstName: "",
  lastName: "",
  email: "",
  organisation: "",
  country: "",
  orgType: "",
  challenges: [],
  deployment: "",
  budget: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(INITIAL_STATE);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Section>
      <Container>
        <ContactFormFields form={form} setForm={setForm} onSubmit={handleSubmit} />
      </Container>
    </Section>
  );
}
