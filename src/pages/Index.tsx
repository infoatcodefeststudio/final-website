import Hero from "@/pages/Index/_components/hero.tsx";
import ProductShowcase from "@/pages/Index/_components/product-showcase.tsx";
import BrandStatement from "@/pages/Index/_components/brand-statement.tsx";
import WhyCodefest from "@/pages/Index/_components/why-codefest.tsx";
import GlobalCta from "@/components/site/global-cta.tsx";

export default function Index() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <BrandStatement />
      <WhyCodefest />
      <GlobalCta />
    </>
  );
}
