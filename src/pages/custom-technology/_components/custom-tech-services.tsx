import { motion } from "motion/react";
import {
  Code2,
  Cloud,
  Cpu,
  LayoutDashboard,
  Plug,
  Smartphone,
} from "lucide-react";
import SectionHeading from "@/components/site/section-heading.tsx";

const SERVICES = [
  {
    icon: LayoutDashboard,
    title: "Custom Business Platforms",
    description:
      "Purpose-built web platforms designed around your specific operational processes.",
  },
  {
    icon: Plug,
    title: "System Integrations",
    description:
      "Connect your existing ERP, accounting or business tools with new technology.",
  },
  {
    icon: Cpu,
    title: "Workflow Automation",
    description:
      "Automate manual, repetitive processes to reduce errors and save time.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Scalable, secure cloud architecture designed for reliability and growth.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Applications",
    description:
      "Responsive applications that work seamlessly across desktop and mobile devices.",
  },
  {
    icon: Code2,
    title: "Product Engineering",
    description:
      "End-to-end product design and engineering for new digital initiatives.",
  },
];

export default function CustomTechServices() {
  return (
    <section className="bg-secondary/30 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Build"
          title="Custom Technology Services"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="site-card-interactive group p-6"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary transition-transform duration-300 group-hover:scale-105">
                <service.icon className="size-5" />
              </div>
              <h3 className="mt-4 font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
