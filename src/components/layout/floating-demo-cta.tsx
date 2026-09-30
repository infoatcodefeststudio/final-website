import { useSyncExternalStore } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUp, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { cn } from "@/lib/utils.ts";

const HIDDEN_ON = ["/book-a-demo", "/contact"];

function subscribeToScroll(onStoreChange: () => void) {
  window.addEventListener("scroll", onStoreChange, { passive: true });
  return () => window.removeEventListener("scroll", onStoreChange);
}

export default function FloatingDemoCta() {
  const showBackToTop = useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > 480,
    () => false,
  );
  const { pathname } = useLocation();
  const hideDemo = HIDDEN_ON.includes(pathname);

  return (
    <div className="fixed right-5 bottom-5 z-40 flex flex-col items-end gap-3">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={cn(
          "flex size-10 cursor-pointer items-center justify-center rounded-full border border-border bg-card text-foreground shadow-md transition-all duration-300 hover:border-primary/30 hover:bg-accent/10",
          showBackToTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        <ArrowUp className="size-4" />
      </button>
      {!hideDemo && (
        <Button
          asChild
          size="lg"
          className="rounded-full shadow-lg shadow-primary/25"
        >
          <Link to="/book-a-demo">
            <CalendarCheck className="size-4" />
            <span className="hidden sm:inline">Book a Demo</span>
          </Link>
        </Button>
      )}
    </div>
  );
}
