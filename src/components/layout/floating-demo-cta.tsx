import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUp, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { cn } from "@/lib/utils.ts";

export default function FloatingDemoCta() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 480);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={cn(
          "flex size-10 cursor-pointer items-center justify-center rounded-full border border-border bg-card text-foreground shadow-md transition-all hover:bg-accent/10",
          showBackToTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        <ArrowUp className="size-4" />
      </button>
      <Button
        asChild
        size="lg"
        className="rounded-full shadow-lg shadow-primary/20"
      >
        <Link to="/book-a-demo">
          <CalendarCheck className="size-4" />
          <span className="hidden sm:inline">Book a Demo</span>
        </Link>
      </Button>
    </div>
  );
}
