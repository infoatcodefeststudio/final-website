import { motion } from "motion/react";
import { Compass, Telescope } from "lucide-react";

const STATEMENTS = [
  {
    icon: Compass,
    label: "Our Mission",
    text: "To simplify business operations by delivering technology products and custom solutions that are built around the way businesses actually work.",
  },
  {
    icon: Telescope,
    label: "Our Vision",
    text: "To be the most trusted technology partner for businesses seeking operational transformation through smart, scalable and reliable digital products.",
  },
];

export default function AboutMissionVision() {
  return (
    <section className="bg-secondary/30 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {STATEMENTS.map((statement, index) => (
            <motion.div
              key={statement.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary">
                <statement.icon className="size-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-foreground">
                {statement.label}
              </h3>
              <p className="mt-3 text-balance leading-relaxed text-muted-foreground">
                {statement.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
