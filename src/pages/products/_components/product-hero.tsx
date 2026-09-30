import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowUpRight, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import ProductBreadcrumbs from "@/pages/products/_components/product-breadcrumbs.tsx";
import type { Product } from "@/lib/products.ts";

export default function ProductHero({ product }: { product: Product }) {
  const Icon = product.icon;

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid-fade absolute inset-0" />
        <div className="absolute -top-32 -left-32 size-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-10 right-0 size-[26rem] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-4 pt-10 pb-16 sm:px-6 sm:pt-14 sm:pb-20 lg:px-8">
        <ProductBreadcrumbs name={product.shortName} />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary"
        >
          <Icon className="size-7" />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-5 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-primary"
        >
          {product.shortName}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-4 max-w-3xl text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
        >
          {product.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" }}
          className="mt-5 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground"
        >
          {product.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.26, ease: "easeOut" }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <Button asChild size="lg">
            <Link to={`/book-a-demo?product=${product.slug}`}>
              <CalendarCheck className="size-4" />
              Book a {product.shortName} Demo
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link to="/solutions">
              Explore Solutions
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
