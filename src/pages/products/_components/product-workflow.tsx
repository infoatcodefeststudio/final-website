import { motion } from "motion/react";
import SectionHeading from "@/components/site/section-heading.tsx";
import type { Product } from "@/lib/products.ts";

export default function ProductWorkflow({ product }: { product: Product }) {
  return (
    <section className="bg-secondary/30 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="The Complete Workflow, End to End"
        />

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {product.workflow.map((step, index) => (
            <motion.li
              key={step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="site-card flex items-start gap-3 p-4"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-bold text-primary-foreground">
                {index + 1}
              </span>
              <span className="pt-1 text-sm font-semibold leading-snug text-foreground">
                {step}
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
