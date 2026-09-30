import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import SectionHeading from "@/components/site/section-heading.tsx";
import type { Product } from "@/lib/products.ts";

export default function ProductUseCases({ product }: { product: Product }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Use Cases"
          title="Built for Real Business Scenarios"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {product.useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="site-card p-6"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary">
                <Briefcase className="size-5" />
              </div>
              <h3 className="mt-4 font-bold text-foreground">
                {useCase.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
