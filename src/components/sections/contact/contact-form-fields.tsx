"use client";

import { ArrowRight } from "lucide-react";
import { Btn } from "@/components/marketing/button";
import { CONTACT_COUNTRIES, CONTACT_ORG_TYPES, FORM_INPUT_CLASS, FORM_LABEL_CLASS } from "@/config/contact-form";
import type { ContactFormState } from "@/config/contact-form";
import { ContactFormExtras } from "@/components/sections/contact/contact-form-extras";

interface ContactFormFieldsProps {
  form: ContactFormState;
  setForm: React.Dispatch<React.SetStateAction<ContactFormState>>;
  onSubmit: (e: React.FormEvent) => void;
}

export function ContactFormFields({ form, setForm, onSubmit }: ContactFormFieldsProps) {
  const set = <K extends keyof ContactFormState>(key: K, val: ContactFormState[K]) =>
    setForm((p) => ({ ...p, [key]: val }));

  return (
    <form onSubmit={onSubmit}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={FORM_LABEL_CLASS}>First Name</label>
          <input id="firstName" type="text" value={form.firstName}
            onChange={(e) => set("firstName", e.target.value)} className={FORM_INPUT_CLASS} required />
        </div>
        <div>
          <label htmlFor="lastName" className={FORM_LABEL_CLASS}>Last Name</label>
          <input id="lastName" type="text" value={form.lastName}
            onChange={(e) => set("lastName", e.target.value)} className={FORM_INPUT_CLASS} required />
        </div>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={FORM_LABEL_CLASS}>Work Email</label>
          <input id="email" type="email" value={form.email}
            onChange={(e) => set("email", e.target.value)} className={FORM_INPUT_CLASS} required />
        </div>
        <div>
          <label htmlFor="organisation" className={FORM_LABEL_CLASS}>Organisation</label>
          <input id="organisation" type="text" value={form.organisation}
            onChange={(e) => set("organisation", e.target.value)} className={FORM_INPUT_CLASS} required />
        </div>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="country" className={FORM_LABEL_CLASS}>Country</label>
          <select id="country" value={form.country}
            onChange={(e) => set("country", e.target.value)} className={FORM_INPUT_CLASS} required>
            <option value="">Select country</option>
            {CONTACT_COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="orgType" className={FORM_LABEL_CLASS}>Organisation Type</label>
          <select id="orgType" value={form.orgType}
            onChange={(e) => set("orgType", e.target.value)} className={FORM_INPUT_CLASS} required>
            <option value="">Select type</option>
            {CONTACT_ORG_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <ContactFormExtras form={form} setForm={setForm} />

      <div className="mt-10">
        <Btn type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
          Submit
          <ArrowRight className="size-4" aria-hidden="true" />
        </Btn>
      </div>
    </form>
  );
}
