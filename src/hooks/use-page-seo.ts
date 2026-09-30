import { useEffect } from "react";

/**
 * Sets the document title and meta description for the current page.
 * Restores the previous values on unmount so navigating away doesn't leak SEO tags.
 */
export function usePageSeo(title: string, description?: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    const previousDescription = descriptionTag?.getAttribute("content") ?? "";

    if (description && descriptionTag) {
      descriptionTag.setAttribute("content", description);
    }

    return () => {
      document.title = previousTitle;
      if (descriptionTag) {
        descriptionTag.setAttribute("content", previousDescription);
      }
    };
  }, [title, description]);
}
