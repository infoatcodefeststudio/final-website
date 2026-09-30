import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowUpRight, CalendarCheck, Check } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import type { Product } from "@/lib/products.ts";

export default function ProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  const Icon = product.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary">
        <Icon className="size-6" />
      </div>
      <h3 className="mt-5 text-lg font-bold text-foreground">
        {product.name}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        {product.cardDescription}
      </p>
      <ul className="mt-4 space-y-1.5">
        {product.benefits.slice(0, 3).map((benefit) => (
          <li
            key={benefit}
            className="flex items-start gap-2 text-sm text-foreground/80"
          >
            <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
            {benefit}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-1 items-end gap-2">
        <Button asChild variant="secondary" className="flex-1">
          <Link to={`/products/${product.slug}`}>
            Explore Product
            <ArrowUpRight className="size-4" />
          </Link>
        </Button>
        <Button asChild className="flex-1">
          <Link to="/book-a-demo">
            <CalendarCheck className="size-4" />
            Book Demo
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}
