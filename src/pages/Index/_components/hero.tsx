import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowUpRight, CalendarCheck, Boxes, Cpu, Lock, Shield, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import HeroDashboardVisual from "@/components/site/hero-dashboard-visual.tsx";

const TRUST_POINTS = [
  { label: "Ready-to-Deploy Products", icon: Boxes },
  { label: "Custom Technology Solutions", icon: Cpu },
  { label: "Enterprise-Ready Architecture", icon: Shield },
  { label: "Scalable & Secure", icon: Lock },
  { label: "Business-Focused Product Design", icon: Workflow },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid-fade absolute inset-0" />
        <div className="absolute -top-40 -left-40 size-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-20 right-0 size-[30rem] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pt-16 pb-16 sm:px-6 sm:pt-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pt-24 lg:pb-24">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-primary"
          >
            Technology Solutions & Product Management
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
            className="mt-5 text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
          >
            Technology That{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Simplifies Business.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            Codefest Studio builds powerful technology products and
            customised digital solutions that help businesses automate
            operations, improve visibility and scale efficiently.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg" className="rounded-lg">
              <Link to="/#products">
                Explore Products
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-lg">
              <Link to="/book-a-demo">
                <CalendarCheck className="size-4" />
                Book a Demo
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-2"
          >
            {TRUST_POINTS.map((point) => (
              <span
                key={point.label}
                className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/70 px-3 py-1.5 text-xs font-medium text-foreground/75 backdrop-blur-sm sm:text-sm"
              >
                <point.icon className="size-3.5 text-primary" />
                {point.label}
              </span>
            ))}
          </motion.div>
        </div>

        <HeroDashboardVisual />
      </div>
    </section>
  );
}
