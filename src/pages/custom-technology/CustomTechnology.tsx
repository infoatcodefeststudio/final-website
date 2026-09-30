import CustomTechHero from "@/pages/custom-technology/_components/custom-tech-hero.tsx";
import CustomTechServices from "@/pages/custom-technology/_components/custom-tech-services.tsx";
import CustomTechProcess from "@/pages/custom-technology/_components/custom-tech-process.tsx";
import GlobalCta from "@/components/site/global-cta.tsx";
import { usePageSeo } from "@/hooks/use-page-seo.ts";

export default function CustomTechnology() {
  usePageSeo({
    title: "Custom Technology Solutions | Codefest Studio",
    description:
      "When a ready-to-deploy product isn't the right fit, Codefest Studio designs and builds custom technology around your exact business workflows.",
  });

  return (
    <>
      <CustomTechHero />
      <CustomTechServices />
      <CustomTechProcess />
      <GlobalCta
        headline="Ready to Discuss Your Requirement?"
        text="Tell us about your business challenge and our team will design a technology solution around it."
      />
    </>
  );
}
