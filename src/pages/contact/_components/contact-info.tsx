import { motion } from "motion/react";
import { Globe, Mail } from "lucide-react";
import { SITE_EMAIL, SITE_WEBSITE, SITE_WEBSITE_URL } from "@/lib/site.ts";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
    >
      <h3 className="text-lg font-bold text-foreground">Get in Touch</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        Prefer to reach out directly? Email our team or find us online — we
        respond to every inquiry.
      </p>

      <div className="mt-2 flex flex-col gap-3">
        <a
          href={`mailto:${SITE_EMAIL}`}
          className="flex items-center gap-3 rounded-xl border border-border bg-secondary/40 p-3 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary/15 to-accent/15 text-primary">
            <Mail className="size-4" />
          </span>
          {SITE_EMAIL}
        </a>
        <a
          href={SITE_WEBSITE_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-xl border border-border bg-secondary/40 p-3 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary/15 to-accent/15 text-primary">
            <Globe className="size-4" />
          </span>
          {SITE_WEBSITE}
        </a>
      </div>
    </motion.div>
  );
}
