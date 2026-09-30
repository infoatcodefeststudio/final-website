import { CalendarClock } from "lucide-react";

export default function ComingSoon({ title }: { title: string }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
      <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary">
        <CalendarClock className="size-7" />
      </div>
      <h1 className="mt-6 text-2xl font-bold text-foreground">{title}</h1>
      <p className="mt-2 max-w-md text-muted-foreground">
        This page is coming soon in a future milestone.
      </p>
    </div>
  );
}
