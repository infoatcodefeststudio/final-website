import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import SectionHeading from "@/components/site/section-heading.tsx";
import type { Product } from "@/lib/products.ts";

export default function ProductWhyThis({ product }: { product: Product }) {
  return (
    <section className="bg-secondary/30 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={`Why ${product.shortName}`}
          title={`What Makes ${product.shortName} Different`}
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {product.whyThis.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary">
                <Sparkles className="size-5" />
              </div>
              <h3 className="mt-4 font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
