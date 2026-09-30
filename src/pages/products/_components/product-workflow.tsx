import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
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

        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {product.workflow.map((step, index) => (
            <div key={step} className="flex items-center gap-2">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="flex min-w-36 flex-col items-center gap-2 rounded-2xl border border-border bg-card px-4 py-4 text-center shadow-sm"
              >
                <span className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-bold text-primary-foreground">
                  {index + 1}
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {step}
                </span>
              </motion.div>
              {index < product.workflow.length - 1 && (
                <ArrowRight className="hidden size-4 shrink-0 text-muted-foreground sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
