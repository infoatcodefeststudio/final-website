import SolutionsHero from "@/pages/solutions/_components/solutions-hero.tsx";
import SolutionCard from "@/pages/solutions/_components/solution-card.tsx";
import SectionHeading from "@/components/site/section-heading.tsx";
import ProductComparisonTable from "@/pages/solutions/_components/product-comparison-table.tsx";
import GlobalCta from "@/components/site/global-cta.tsx";
import { usePageSeo } from "@/hooks/use-page-seo.ts";
import { solutions } from "@/lib/solutions.ts";

export default function Solutions() {
  usePageSeo(
    "Industry Solutions | Codefest Studio",
    "Technology solutions built around your industry — logistics, warehousing, supply chain, manufacturing, retail, hospitality, distribution and enterprise operations.",
  );

  return (
    <>
      <SolutionsHero />

      <section className="bg-secondary/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Solutions Tailored to Your Operations"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <SolutionCard
                key={solution.slug}
                solution={solution}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <ProductComparisonTable />
      <GlobalCta />
    </>
  );
}
