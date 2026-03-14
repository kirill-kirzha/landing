import { PageHero } from "@/components/sections/shared/page-hero";

export function ContactHero() {
  return (
    <PageHero
      badge="Let's Talk"
      title={
        <>
          Let&apos;s build your <span className="font-normal">AI</span> Factory.
        </>
      }
      subtitle="Tell us about your organization and we&apos;ll show you how Aleria fits."
    />
  );
}
