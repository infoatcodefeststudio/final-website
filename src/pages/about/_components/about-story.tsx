import { motion } from "motion/react";

export default function AboutStory() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          <p>
            Codefest Studio was built on a simple belief: technology should
            adapt to the way a business actually works, not the other way
            around. Too many businesses are forced to bend their operations
            to fit rigid, generic software. We do the opposite.
          </p>
          <p>
            We combine two complementary strengths — a suite of
            ready-to-deploy, enterprise-grade products for warehousing,
            transportation, gate and yard operations, vendor management,
            hospitality and inventory control, and a dedicated custom
            technology practice for businesses whose workflows need something
            purpose-built.
          </p>
          <p>
            Whether a business needs to go live quickly with a proven
            product, or needs a completely custom platform engineered around
            a unique process, Codefest Studio brings the same
            product-thinking, engineering discipline and long-term support to
            every engagement.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
