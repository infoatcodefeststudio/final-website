import { Link } from "react-router-dom";
import { Mail, Globe, Sparkles } from "lucide-react";
import { products } from "@/lib/products.ts";
import { SITE_EMAIL, SITE_WEBSITE, SITE_WEBSITE_URL } from "@/lib/site.ts";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products/wms" },
  { label: "Solutions", to: "/solutions" },
  { label: "Custom Technology", to: "/custom-technology" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Book a Demo", to: "/book-a-demo" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2 rounded-lg">
              <span className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-sm shadow-primary/20">
                <Sparkles className="size-4.5" />
              </span>
              <span className="text-lg font-extrabold tracking-tight text-foreground">
                Codefest <span className="text-primary">Studio</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Technology Solutions. Product Management. Business
              Transformation.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-foreground">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-foreground">
              Products
            </h3>
            <ul className="mt-4 space-y-2.5">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    to={`/products/${product.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {product.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-foreground">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="size-4" />
                  {SITE_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={SITE_WEBSITE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Globe className="size-4" />
                  {SITE_WEBSITE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {year} Codefest Studio. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
