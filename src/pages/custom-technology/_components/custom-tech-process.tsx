import { motion } from "motion/react";
import SectionHeading from "@/components/site/section-heading.tsx";

const STEPS = [
  {
    number: "01",
    title: "Discover",
    description:
      "We study your current workflows, pain points and business goals to understand what needs to be solved.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We design the product architecture, user experience and technical approach around your requirements.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Our team builds the solution iteratively, with regular checkpoints to keep it aligned with your business.",
  },
  {
    number: "04",
    title: "Deploy & Scale",
    description:
      "We launch the solution and continue to support and scale it as your business grows.",
  },
];

export default function CustomTechProcess() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Process"
          title="How We Build Your Custom Solution"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="text-4xl font-extrabold text-primary/15">
                {step.number}
              </span>
              <h3 className="mt-3 text-lg font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
