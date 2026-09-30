import AboutHero from "@/pages/about/_components/about-hero.tsx";
import AboutStory from "@/pages/about/_components/about-story.tsx";
import AboutStats from "@/pages/about/_components/about-stats.tsx";
import AboutMissionVision from "@/pages/about/_components/about-mission-vision.tsx";
import GlobalCta from "@/components/site/global-cta.tsx";
import { usePageSeo } from "@/hooks/use-page-seo.ts";

export default function About() {
  usePageSeo(
    "About Us | Codefest Studio",
    "Codefest Studio is a technology solutions and product management company building enterprise products and custom technology around the way businesses work.",
  );

  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutStats />
      <AboutMissionVision />
      <GlobalCta
        headline="Ready to Work With Codefest Studio?"
        text="Explore our products or talk to our team about your business requirement."
      />
    </>
  );
}
