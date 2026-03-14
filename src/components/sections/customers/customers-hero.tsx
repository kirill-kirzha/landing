import { PageHero } from "@/components/sections/shared/page-hero";

export function CustomersHero() {
  return (
    <PageHero
      badge="Customers"
      title={
        <>
          Producing <span className="font-normal">intelligence</span> in
          production today.
        </>
      }
      subtitle="See how leading organizations deploy Aleria to transform their operations."
    />
  );
}
