import { motion } from "motion/react";
import { cn } from "@/lib/utils.ts";

export default function PageHero({
  eyebrow,
  title,
  description,
  className,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className={cn("relative overflow-hidden bg-background", className)}>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 size-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-10 right-0 size-[26rem] rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
          className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
          className="mx-auto mt-5 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground"
        >
          {description}
        </motion.p>
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
