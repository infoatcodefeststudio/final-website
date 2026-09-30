import { motion } from "motion/react";
import { Check } from "lucide-react";
import SectionHeading from "@/components/site/section-heading.tsx";
import type { Product } from "@/lib/products.ts";

export default function ProductBenefits({ product }: { product: Product }) {
  return (
    <section className="bg-secondary/30 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Key Benefits"
          title={`Why Teams Choose ${product.shortName}`}
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {product.benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-start gap-3 rounded-xl border border-border/80 bg-card p-4 shadow-sm transition-colors hover:border-primary/25"
            >
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="size-3.5" />
              </span>
              <span className="text-sm font-medium text-foreground">
                {benefit}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
