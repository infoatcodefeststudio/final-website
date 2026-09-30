import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowUpRight, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

export default function GlobalCta({
  headline = "Ready to Transform Your Business Operations?",
  text = "Explore our products or talk to our technology team about building a customised solution for your business.",
}: {
  headline?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.14_0.03_264)] py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-grid-fade absolute inset-0 opacity-40" />
        <div className="absolute -top-24 left-1/4 size-96 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 size-96 rounded-full bg-accent/25 blur-3xl" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8"
      >
        <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {headline}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
          {text}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="w-full rounded-lg sm:w-auto"
          >
            <Link to="/#products">
              Explore Products
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
          <Button asChild size="lg" className="w-full rounded-lg sm:w-auto">
            <Link to="/book-a-demo">
              <CalendarCheck className="size-4" />
              Book a Demo
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
