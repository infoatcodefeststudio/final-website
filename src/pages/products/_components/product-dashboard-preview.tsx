import { motion } from "motion/react";
import { Activity, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/site/section-heading.tsx";
import type { Product } from "@/lib/products.ts";

export default function ProductDashboardPreview({
  product,
}: {
  product: Product;
}) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Dashboard Preview"
          title={product.dashboard.title}
          description="A real-time operational view built to give managers instant visibility and control."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-10 rounded-2xl border border-white/10 bg-[oklch(0.16_0.03_264)] p-5 shadow-2xl sm:p-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-red-400/80" />
              <span className="size-2.5 rounded-full bg-amber-400/80" />
              <span className="size-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <span className="flex items-center gap-1.5 text-xs font-medium text-white/50">
              <Activity className="size-3.5" />
              Live Operations Console
            </span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {product.dashboard.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <div className="text-xl font-bold text-white sm:text-2xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[11px] leading-tight text-white/50">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between text-xs text-white/60">
              <span className="flex items-center gap-1.5">
                <TrendingUp className="size-3.5 text-emerald-400" />
                Weekly Performance Trend
              </span>
              <span className="text-emerald-400">+8.6%</span>
            </div>
            <div className="mt-3 flex h-14 items-end gap-1.5">
              {[45, 52, 48, 60, 55, 68, 64, 74, 70, 82, 78, 90].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.03, duration: 0.4 }}
                  className="flex-1 rounded-sm bg-gradient-to-t from-primary to-accent"
                />
              ))}
            </div>
          </div>

          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-white/10 bg-white/5 text-white/50">
                  {product.dashboard.columns.map((column) => (
                    <th key={column} className="whitespace-nowrap px-4 py-2.5 font-medium">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[0, 1, 2].map((row) => (
                  <tr key={row} className="border-b border-white/5 last:border-b-0">
                    {product.dashboard.columns.map((column) => (
                      <td
                        key={column}
                        className="whitespace-nowrap px-4 py-2.5 text-white/70"
                      >
                        {mockCell(row)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function mockCell(row: number): string {
  const values = ["Active", "In Progress", "Completed", "1,204", "98.2%", "Zone A-3"];
  return values[row % values.length];
}
