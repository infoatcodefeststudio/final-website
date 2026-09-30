import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import type { Solution } from "@/lib/solutions.ts";
import { getProductBySlug } from "@/lib/products.ts";

export default function SolutionCard({
  solution,
  index,
}: {
  solution: Solution;
  index: number;
}) {
  const Icon = solution.icon;
  const relatedProducts = solution.relatedProductSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((product) => product !== undefined);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary">
        <Icon className="size-6" />
      </div>
      <h3 className="mt-5 text-lg font-bold text-foreground">
        {solution.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {solution.description}
      </p>

      <div className="mt-4 flex flex-1 flex-wrap items-end gap-2">
        {relatedProducts.map((product) => (
          <Link
            key={product.slug}
            to={`/products/${product.slug}`}
            className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium text-foreground/80 transition-colors hover:border-primary/30 hover:text-primary"
          >
            {product.shortName}
          </Link>
        ))}
      </div>

      <div className="mt-5 flex gap-2">
        <Button asChild variant="secondary" className="flex-1">
          <Link to="/book-a-demo">
            <CalendarCheck className="size-4" />
            Book a Demo
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}
