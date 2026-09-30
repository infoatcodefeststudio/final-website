import ProductCard from "@/components/site/product-card.tsx";
import SectionHeading from "@/components/site/section-heading.tsx";
import { products } from "@/lib/products.ts";

export default function ProductShowcase() {
  return (
    <section id="products" className="bg-secondary/30 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Products"
          title="Technology Products Built for Real Business Operations"
          description="Ready-to-deploy technology products designed to simplify complex operational workflows, improve visibility and enable data-driven decision making."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
