import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet.tsx";
import { cn } from "@/lib/utils.ts";
import { products } from "@/lib/products.ts";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Solutions", to: "/solutions" },
  { label: "Custom Technology", to: "/custom-technology" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function subscribeToScroll(onStoreChange: () => void) {
  window.addEventListener("scroll", onStoreChange, { passive: true });
  return () => window.removeEventListener("scroll", onStoreChange);
}

function getScrollSnapshot() {
  return window.scrollY > 8;
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    getScrollSnapshot,
    () => false,
  );
  const closeTimer = useRef<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setProductsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  const openProducts = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setProductsOpen(true);
  };

  const closeProducts = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setProductsOpen(false), 120);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border/80 bg-background/85 shadow-sm shadow-foreground/5 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70"
          : "border-border/40 bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-background/55",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2 rounded-lg outline-offset-4 transition-opacity hover:opacity-90"
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-sm shadow-primary/20">
            <Sparkles className="size-4.5" />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-foreground">
            Codefest<span className="text-primary"> Studio</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {NAV_LINKS.slice(0, 1).map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              active={location.pathname === link.to}
            >
              {link.label}
            </NavLink>
          ))}

          <div
            className="relative"
            onMouseEnter={openProducts}
            onMouseLeave={closeProducts}
          >
            <button
              type="button"
              aria-expanded={productsOpen}
              aria-haspopup="menu"
              onClick={() => {
                if (closeTimer.current) window.clearTimeout(closeTimer.current);
                setProductsOpen((open) => !open);
              }}
              className={cn(
                "flex cursor-pointer items-center gap-1 rounded-lg px-2.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent/10 hover:text-foreground",
                location.pathname.startsWith("/products") &&
                  "bg-primary/10 text-primary",
              )}
            >
              Products
              <ChevronDown
                className={cn(
                  "size-3.5 transition-transform duration-200",
                  productsOpen && "rotate-180",
                )}
              />
            </button>
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  role="menu"
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.16, ease: "easeOut" }}
                  className="absolute left-0 top-full z-50 w-80 pt-2"
                >
                  <div className="rounded-2xl border border-border/80 bg-popover/95 p-2 shadow-xl shadow-foreground/5 backdrop-blur-md">
                    {products.map((product) => (
                      <Link
                        key={product.slug}
                        to={`/products/${product.slug}`}
                        role="menuitem"
                        onClick={() => setProductsOpen(false)}
                        className={cn(
                          "flex items-start gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors hover:bg-accent/10",
                          location.pathname === `/products/${product.slug}` &&
                            "bg-primary/10",
                        )}
                      >
                        <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <product.icon className="size-4" />
                        </span>
                        <span>
                          <span className="block font-semibold text-foreground">
                            {product.name}
                          </span>
                          <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                            {product.primaryUse}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {NAV_LINKS.slice(1).map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              active={location.pathname === link.to}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild className="rounded-lg shadow-sm shadow-primary/20">
            <Link to="/book-a-demo">Book a Demo</Link>
          </Button>
        </div>

        <button
          type="button"
          className="cursor-pointer rounded-lg p-2 text-foreground transition-colors hover:bg-accent/10 lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="size-6" />
        </button>
      </div>

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="right" className="w-[85%] sm:max-w-sm">
          <SheetHeader>
            <SheetTitle className="text-left">
              Codefest <span className="text-primary">Studio</span>
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-1 px-4" aria-label="Mobile">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className={cn(
                "rounded-lg px-2 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent/10",
                location.pathname === "/" && "bg-primary/10 text-primary",
              )}
            >
              Home
            </Link>
            <div className="px-2 pt-3 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Products
            </div>
            {products.map((product) => (
              <Link
                key={product.slug}
                to={`/products/${product.slug}`}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-foreground/90 transition-colors hover:bg-accent/10",
                  location.pathname === `/products/${product.slug}` &&
                    "bg-primary/10 text-primary",
                )}
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <product.icon className="size-4" />
                </span>
                {product.name}
              </Link>
            ))}
            <div className="my-2 h-px bg-border" />
            {NAV_LINKS.slice(1).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-lg px-2 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent/10",
                  location.pathname === link.to && "bg-primary/10 text-primary",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto px-4 pb-4">
            <Button
              asChild
              className="w-full rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              <Link to="/book-a-demo">Book a Demo</Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

function NavLink({
  to,
  active,
  children,
}: {
  to: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      aria-current={active ? "page" : undefined}
      className={cn(
        "rounded-lg px-2.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent/10 hover:text-foreground",
        active && "bg-primary/10 text-primary",
      )}
    >
      {children}
    </Link>
  );
}
