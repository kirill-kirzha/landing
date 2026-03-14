"use client";

import { cn } from "@/lib/utils";
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
        <div className="mt-3 flex flex-wrap gap-2.5">
          {CONTACT_CHALLENGES.map((ch) => {
            const isSelected = form.challenges.includes(ch);
            return (
              <button
                key={ch}
                type="button"
                onClick={() => toggleChallenge(ch)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-sm transition-colors duration-150 focus-ring",
                  isSelected
                    ? "border-brand-mint/40 bg-brand-mint/10 text-foreground"
                    : "border-border text-tertiary hover:border-border/80 hover:text-muted-foreground",
                )}
              >
                {ch}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
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
