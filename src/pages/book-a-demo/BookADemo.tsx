import PageHero from "@/components/site/page-hero.tsx";
import DemoRequestForm from "@/pages/book-a-demo/_components/demo-request-form.tsx";
import { usePageSeo } from "@/hooks/use-page-seo.ts";

export default function BookADemo() {
  usePageSeo({
    title: "Book a Demo | Codefest Studio",
    description:
      "Book a personalized demo of Codefest Studio's technology products, or discuss a custom technology requirement with our team.",
  });

  return (
    <>
      <PageHero
        eyebrow="Book a Demo"
        title="See Codefest Studio in Action"
        description="Tell us about your business and the product you're interested in. Our team will set up a personalized demo tailored to your requirements."
      />

      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <DemoRequestForm />
        </div>
      </section>
    </>
  );
}
