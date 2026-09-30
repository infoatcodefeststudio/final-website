import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  SITE_DEFAULT_DESCRIPTION,
  SITE_DEFAULT_TITLE,
  SITE_NAME,
  SITE_OG_IMAGE_ALT,
  SITE_OG_IMAGE_PATH,
  SITE_WEBSITE_URL,
  siteUrl,
} from "@/lib/site.ts";

export type PageSeo = {
  title: string;
  description: string;
  path?: string;
  robots?: string;
  ogType?: string;
  image?: string;
  imageAlt?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const JSON_LD_ID = "page-jsonld";

function setNamedMeta(name: string, content: string) {
  let element = document.head.querySelector(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setPropertyMeta(property: string, content: string) {
  let element = document.head.querySelector(`meta[property="${property}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setCanonical(href: string) {
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

function setJsonLd(data?: PageSeo["jsonLd"]) {
  const existing = document.getElementById(JSON_LD_ID);
  if (!data) {
    existing?.remove();
    return;
  }

  let element = existing as HTMLScriptElement | null;
  if (!element) {
    element = document.createElement("script");
    element.type = "application/ld+json";
    element.id = JSON_LD_ID;
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(data);
}

/**
 * Keeps title, description, canonical, Open Graph and Twitter tags in sync
 * with the current route. The next page overwrites these values — tags are
 * not restored on unmount, which would leak the previous route in an SPA.
 */
export function usePageSeo({
  title,
  description,
  path,
  robots = "index, follow",
  ogType = "website",
  image = SITE_OG_IMAGE_PATH,
  imageAlt = SITE_OG_IMAGE_ALT,
  jsonLd,
}: PageSeo) {
  const location = useLocation();
  const canonicalPath = path ?? location.pathname;
  const canonical = siteUrl(canonicalPath);
  const imageUrl = image.startsWith("http") ? image : siteUrl(image);

  const jsonLdSerialized = jsonLd ? JSON.stringify(jsonLd) : undefined;

  useEffect(() => {
    document.title = title;

    setNamedMeta("description", description);
    setNamedMeta("robots", robots);
    setNamedMeta("twitter:card", "summary_large_image");
    setNamedMeta("twitter:title", title);
    setNamedMeta("twitter:description", description);
    setNamedMeta("twitter:image", imageUrl);
    setNamedMeta("twitter:image:alt", imageAlt);

    setPropertyMeta("og:site_name", SITE_NAME);
    setPropertyMeta("og:locale", "en_IN");
    setPropertyMeta("og:type", ogType);
    setPropertyMeta("og:title", title);
    setPropertyMeta("og:description", description);
    setPropertyMeta("og:url", canonical);
    setPropertyMeta("og:image", imageUrl);
    setPropertyMeta("og:image:alt", imageAlt);
    setPropertyMeta("og:image:type", "image/jpeg");

    setCanonical(canonical);
    setJsonLd(jsonLdSerialized ? JSON.parse(jsonLdSerialized) : undefined);

    return () => {
      setJsonLd(undefined);
    };
  }, [
    title,
    description,
    canonical,
    robots,
    ogType,
    imageUrl,
    imageAlt,
    jsonLdSerialized,
  ]);
}

export const homePageSeo: PageSeo = {
  title: SITE_DEFAULT_TITLE,
  description: SITE_DEFAULT_DESCRIPTION,
  path: "/",
};
