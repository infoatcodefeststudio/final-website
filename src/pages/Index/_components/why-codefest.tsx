import { motion } from "motion/react";
import {
  BarChart3 as Layers,
  Boxes,
  Handshake,
  Rocket,
  Shield,
  Target,
} from "lucide-react";
import SectionHeading from "@/components/site/section-heading.tsx";

const VALUES = [
  {
    icon: Target,
    title: "Business-First Technology",
    description: "Solutions designed around actual business workflows.",
  },
  {
    icon: Boxes,
    title: "Ready-to-Deploy Products",
    description:
      "Proven product modules that can be configured for business requirements.",
  },
  {
    icon: Rocket,
    title: "Custom Development",
    description: "Build technology exactly around your unique process.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Technology designed to grow with your business.",
  },
  {
    icon: Shield,
    title: "Real-Time Visibility",
    description: "Dashboards and analytics for better operational control.",
  },
  {
    icon: Handshake,
    title: "Continuous Innovation",
    description: "Continuous product improvement and technology upgrades.",
  },
];

export default function WhyCodefest() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Codefest Studio"
          title="Why Businesses Choose Codefest Studio"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="site-card-interactive group p-6"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary transition-transform duration-300 group-hover:scale-105">
                <value.icon className="size-5" />
              </div>
              <h3 className="mt-4 font-bold text-foreground">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
