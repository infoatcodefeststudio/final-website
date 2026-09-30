import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { CalendarCheck } from "lucide-react";
import SectionHeading from "@/components/site/section-heading.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.tsx";
import { products } from "@/lib/products.ts";

export default function ProductComparisonTable() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Compare Products"
          title="Find the Right Product for Your Business"
          description="No public pricing — every implementation is scoped to your requirements. Book a demo to get a tailored quote."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-foreground">Product</TableHead>
                <TableHead className="text-foreground">Primary Use</TableHead>
                <TableHead className="text-foreground">Key Modules</TableHead>
                <TableHead className="text-foreground">Best For</TableHead>
                <TableHead className="text-right text-foreground">
                  Demo
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.slug}>
                  <TableCell className="whitespace-nowrap font-semibold text-foreground">
                    <Link
                      to={`/products/${product.slug}`}
                      className="hover:text-primary"
                    >
                      {product.shortName}
                    </Link>
                  </TableCell>
                  <TableCell className="min-w-44 whitespace-normal text-muted-foreground">
                    {product.primaryUse}
                  </TableCell>
                  <TableCell className="min-w-64 whitespace-normal text-muted-foreground">
                    {product.keyModules.join(", ")}
                  </TableCell>
                  <TableCell className="min-w-44 whitespace-normal text-muted-foreground">
                    {product.bestFor}
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-right">
                    <Button asChild size="sm" variant="secondary">
                      <Link to={`/book-a-demo?product=${product.slug}`}>
                        <CalendarCheck className="size-3.5" />
                        Book Demo
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>
  );
}
