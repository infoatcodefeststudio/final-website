import { CalendarClock } from "lucide-react";
import { usePageSeo } from "@/hooks/use-page-seo.ts";

export default function ComingSoon({ title }: { title: string }) {
  usePageSeo({
    title: `${title} | Codefest Studio`,
    description: `The ${title} page for Codefest Studio will be published soon.`,
    robots: "noindex, follow",
  });

  return (
    <div className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid-fade absolute inset-0" />
      </div>
      <div className="site-card max-w-md px-8 py-12">
        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary">
          <CalendarClock className="size-7" />
        </div>
        <h1 className="mt-6 text-2xl font-bold text-foreground">{title}</h1>
        <p className="mt-2 text-muted-foreground">
          This page is coming soon in a future milestone.
        </p>
      </div>
    </div>
  );
}
