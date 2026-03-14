"use client";

import { Btn } from "@/components/marketing/button";
import {
  CONTACT_COUNTRIES,
  CONTACT_ORG_TYPES,
} from "@/config/contact-form";
import type { ContactFormState } from "@/config/contact-form";
import { FORM_INPUT_CLASS, FORM_LABEL_CLASS } from "@/config/contact-form";
import { ContactFormExtras } from "@/components/sections/contact/contact-form-extras";

interface ContactFormFieldsProps {
  form: ContactFormState;
  setForm: React.Dispatch<React.SetStateAction<ContactFormState>>;
  onSubmit: (e: React.FormEvent) => void;
}

export function ContactFormFields({
  form,
  setForm,
  onSubmit,
}: ContactFormFieldsProps) {
  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-2xl">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={FORM_LABEL_CLASS}>
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            value={form.firstName}
            onChange={(e) => setForm((p) => ({ ...p, firstName: e.target.value }))}
            className={FORM_INPUT_CLASS}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className={FORM_LABEL_CLASS}>
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            value={form.lastName}
            onChange={(e) => setForm((p) => ({ ...p, lastName: e.target.value }))}
            className={FORM_INPUT_CLASS}
            required
          />
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="email" className={FORM_LABEL_CLASS}>
            Work Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            className={FORM_INPUT_CLASS}
            required
          />
        </div>
        <div>
          <label htmlFor="organisation" className={FORM_LABEL_CLASS}>
            Organisation
          </label>
          <input
            id="organisation"
            type="text"
            value={form.organisation}
            onChange={(e) =>
              setForm((p) => ({ ...p, organisation: e.target.value }))
            }
            className={FORM_INPUT_CLASS}
            required
          />
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="country" className={FORM_LABEL_CLASS}>
            Country
          </label>
          <select
            id="country"
            value={form.country}
            onChange={(e) => setForm((p) => ({ ...p, country: e.target.value }))}
            className={FORM_INPUT_CLASS}
            required
          >
            <option value="">Select country</option>
            {CONTACT_COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="orgType" className={FORM_LABEL_CLASS}>
            Organisation Type
          </label>
          <select
            id="orgType"
            value={form.orgType}
            onChange={(e) => setForm((p) => ({ ...p, orgType: e.target.value }))}
            className={FORM_INPUT_CLASS}
            required
          >
            <option value="">Select type</option>
            {CONTACT_ORG_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <ContactFormExtras form={form} setForm={setForm} />

      <div className="mt-10">
        <Btn type="submit" variant="primary" size="lg">
          Submit
        </Btn>
      </div>
    </form>
  );
}
