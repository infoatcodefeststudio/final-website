import { motion } from "motion/react";

export default function BrandStatement() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-balance text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl"
        >
          "Codefest Studio doesn't just provide software.{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            We build technology around the way your business works.
          </span>
          "
        </motion.p>
      </div>
    </section>
  );
}
