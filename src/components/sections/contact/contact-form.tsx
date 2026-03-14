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
      <Container size="narrow">
        <div className="rounded-2xl border border-border/40 bg-card/30 p-6 sm:p-8 lg:p-10">
          <ContactFormFields
            form={form}
            setForm={setForm}
            onSubmit={handleSubmit}
          />
        </div>
      </Container>
    </Section>
  );
}
