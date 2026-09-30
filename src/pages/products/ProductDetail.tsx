import { useParams } from "react-router-dom";
import { getProductBySlug } from "@/lib/products.ts";
import { usePageSeo } from "@/hooks/use-page-seo.ts";
import NotFound from "@/pages/NotFound.tsx";
import GlobalCta from "@/components/site/global-cta.tsx";
import ProductHero from "@/pages/products/_components/product-hero.tsx";
import ProductBenefits from "@/pages/products/_components/product-benefits.tsx";
import ProductFeatureGrid from "@/pages/products/_components/product-feature-grid.tsx";
import ProductWorkflow from "@/pages/products/_components/product-workflow.tsx";
import ProductDashboardPreview from "@/pages/products/_components/product-dashboard-preview.tsx";
import ProductScreenshots from "@/pages/products/_components/product-screenshots.tsx";
import ProductUseCases from "@/pages/products/_components/product-use-cases.tsx";
import ProductWhyThis from "@/pages/products/_components/product-why-this.tsx";
import ProductFaq from "@/pages/products/_components/product-faq.tsx";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return <NotFound />;
  }

  return <ProductDetailContent product={product} />;
}

function ProductDetailContent({
  product,
}: {
  product: NonNullable<ReturnType<typeof getProductBySlug>>;
}) {
  usePageSeo(product.seoTitle, product.seoDescription);

  return (
    <>
      <ProductHero product={product} />
      <ProductBenefits product={product} />
      <ProductFeatureGrid product={product} />
      <ProductWorkflow product={product} />
      <ProductDashboardPreview product={product} />
      <ProductScreenshots product={product} />
      <ProductUseCases product={product} />
      <ProductWhyThis product={product} />
      <ProductFaq product={product} />
      <GlobalCta
        headline={`Ready to See ${product.shortName} in Action?`}
        text={`Book a personalized demo and see how ${product.name} can simplify your operations.`}
      />
    </>
  );
}
