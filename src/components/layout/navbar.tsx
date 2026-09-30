import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
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

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-sm">
            <Sparkles className="size-4.5" />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-foreground">
            Codefest<span className="text-primary"> Studio</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.slice(0, 1).map((link) => (
            <NavLink key={link.to} to={link.to} active={location.pathname === link.to}>
              {link.label}
            </NavLink>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              type="button"
              className={cn(
                "flex cursor-pointer items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent/10 hover:text-foreground",
                location.pathname.startsWith("/products") && "text-primary",
              )}
            >
              Products
              <ChevronDown
                className={cn(
                  "size-3.5 transition-transform",
                  productsOpen && "rotate-180",
                )}
              />
            </button>
            {productsOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute left-0 top-full w-72 rounded-xl border border-border bg-popover p-2 shadow-xl"
              >
                {products.map((product) => (
                  <Link
                    key={product.slug}
                    to={`/products/${product.slug}`}
                    className="flex items-start gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-accent/10"
                  >
                    <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <product.icon className="size-4" />
                    </span>
                    <span>
                      <span className="block font-medium text-foreground">
                        {product.name}
                      </span>
                      <span className="block text-xs text-muted-foreground">
                        {product.primaryUse}
                      </span>
                    </span>
                  </Link>
                ))}
              </motion.div>
            )}
          </div>

          {NAV_LINKS.slice(1).map((link) => (
            <NavLink key={link.to} to={link.to} active={location.pathname === link.to}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild className="shadow-sm">
            <Link to="/book-a-demo">Book a Demo</Link>
          </Button>
        </div>

        <button
          type="button"
          className="cursor-pointer rounded-md p-2 text-foreground lg:hidden"
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
          <nav className="flex flex-col gap-1 px-4">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-2 py-2.5 text-sm font-medium text-foreground hover:bg-accent/10"
            >
              Home
            </Link>
            <div className="px-2 pt-2 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Products
            </div>
            {products.map((product) => (
              <Link
                key={product.slug}
                to={`/products/${product.slug}`}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-2 py-2 pl-4 text-sm text-foreground/90 hover:bg-accent/10"
              >
                {product.name}
              </Link>
            ))}
            <div className="my-1 h-px bg-border" />
            {NAV_LINKS.slice(1).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-foreground hover:bg-accent/10"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto px-4 pb-4">
            <Button asChild className="w-full" onClick={() => setMobileOpen(false)}>
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
      className={cn(
        "rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent/10 hover:text-foreground",
        active && "text-primary",
      )}
    >
      {children}
    </Link>
  );
}
