import { motion } from "motion/react";
import { LayoutGrid } from "lucide-react";
import SectionHeading from "@/components/site/section-heading.tsx";
import type { Product } from "@/lib/products.ts";

export default function ProductFeatureGrid({ product }: { product: Product }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Features"
          title={`Everything You Need in ${product.shortName}`}
          description="A complete set of modules covering the full operational workflow."
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {product.features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (index % 9) * 0.03 }}
              className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground/90 shadow-sm transition-colors hover:border-primary/30"
            >
              <LayoutGrid className="size-4 shrink-0 text-primary" />
              {feature}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
