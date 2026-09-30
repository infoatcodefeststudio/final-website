import PageHero from "@/components/site/page-hero.tsx";
import ContactForm from "@/pages/contact/_components/contact-form.tsx";
import ContactInfo from "@/pages/contact/_components/contact-info.tsx";
import { usePageSeo } from "@/hooks/use-page-seo.ts";

export default function Contact() {
  usePageSeo({
    title: "Contact Us | Codefest Studio",
    description:
      "Get in touch with Codefest Studio to discuss a technology product or a custom technology solution for your business.",
  });

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Your Next Technology Solution"
        description="Tell us about your business and we'll get back to you with the right product or a custom approach."
      />

      <section className="pb-20 sm:pb-24">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
    </>
  );
}
