import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { usePageSeo } from "@/hooks/use-page-seo.ts";

export default function NotFound() {
  const location = useLocation();

  usePageSeo({
    title: "Page Not Found | Codefest Studio",
    description: "This page does not exist.",
    robots: "noindex, follow",
  });

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid-fade absolute inset-0" />
        <div className="absolute top-1/4 left-1/3 size-72 rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="site-card max-w-md px-8 py-12 text-center">
        <p className="text-6xl font-extrabold tracking-tight text-primary/40">
          404
        </p>
        <h1 className="mt-4 text-2xl font-semibold text-foreground">
          Page Not Found
        </h1>
        <p className="mt-2 text-muted-foreground">
          This page does not exist.
        </p>
        <div className="mt-8">
          <Button asChild className="rounded-lg">
            <Link to="/">
              <Home className="size-4" />
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
