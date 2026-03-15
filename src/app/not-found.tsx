import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { Btn } from "@/components/marketing/button";

export default function NotFound() {
  return (
    <Section spacing="lg" className="min-h-[60vh] flex items-center">
      <Container size="narrow" className="text-center">
        <p className="type-label text-quaternary">404</p>
        <h1 className="type-display mt-4">
          Page not <span className="font-normal">found</span>
        </h1>
        <p className="type-body mx-auto mt-6 max-w-md text-muted-foreground">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <div className="mt-10">
          <Btn href="/">Back to home</Btn>
        </div>
      </Container>
    </Section>
  );
}
