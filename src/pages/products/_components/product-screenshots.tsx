import { motion } from "motion/react";
import SectionHeading from "@/components/site/section-heading.tsx";
import type { Product } from "@/lib/products.ts";

export default function ProductScreenshots({ product }: { product: Product }) {
  if (!product.screenshots || product.screenshots.length === 0) return null;

  return (
    <section className="bg-secondary/30 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Product Screenshots"
          title={`See ${product.shortName} in Action`}
          description="A closer look at real modules and screens inside the platform."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {product.screenshots.map((screenshot, index) => (
            <motion.figure
              key={screenshot.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className="group overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm"
            >
              <img
                src={screenshot.url}
                alt={screenshot.caption}
                loading="lazy"
                className="w-full border-b border-border object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <figcaption className="px-4 py-3 text-sm text-muted-foreground">
                {screenshot.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
