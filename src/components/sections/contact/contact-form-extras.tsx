"use client";

import {
  CONTACT_BUDGET_OPTIONS,
  CONTACT_CHALLENGES,
  CONTACT_DEPLOYMENT_MODELS,
  FORM_INPUT_CLASS,
  FORM_LABEL_CLASS,
} from "@/config/contact-form";
import type { ContactFormState } from "@/config/contact-form";

interface ContactFormExtrasProps {
  form: ContactFormState;
  setForm: React.Dispatch<React.SetStateAction<ContactFormState>>;
}

export function ContactFormExtras({ form, setForm }: ContactFormExtrasProps) {
  const toggleChallenge = (ch: string) => {
    setForm((prev) => ({
      ...prev,
      challenges: prev.challenges.includes(ch)
        ? prev.challenges.filter((c) => c !== ch)
        : [...prev.challenges, ch],
    }));
  };

  return (
    <>
      <div className="mt-6">
        <span className={FORM_LABEL_CLASS}>Primary Challenge</span>
        <div className="mt-3 flex flex-wrap gap-4">
          {CONTACT_CHALLENGES.map((ch) => (
            <label key={ch} className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={form.challenges.includes(ch)}
                onChange={() => toggleChallenge(ch)}
                className="focus-ring size-4 rounded border-border"
              />
              <span className="type-body-sm text-foreground">{ch}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="deployment" className={FORM_LABEL_CLASS}>
            Preferred Deployment Model
          </label>
          <select
            id="deployment"
            value={form.deployment}
            onChange={(e) =>
              setForm((p) => ({ ...p, deployment: e.target.value }))
            }
            className={FORM_INPUT_CLASS}
            required
          >
            <option value="">Select model</option>
            {CONTACT_DEPLOYMENT_MODELS.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={FORM_LABEL_CLASS}>
            Project Budget
          </label>
          <select
            id="budget"
            value={form.budget}
            onChange={(e) =>
              setForm((p) => ({ ...p, budget: e.target.value }))
            }
            className={FORM_INPUT_CLASS}
            required
          >
            <option value="">Select budget</option>
            {CONTACT_BUDGET_OPTIONS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
