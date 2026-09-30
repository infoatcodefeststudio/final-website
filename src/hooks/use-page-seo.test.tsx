import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { usePageSeo } from "./use-page-seo.ts";

function SeoProbe(props: Parameters<typeof usePageSeo>[0]) {
  usePageSeo(props);
  return null;
}

function metaContent(selector: string): string | null {
  return document.head.querySelector(selector)?.getAttribute("content") ?? null;
}

describe("usePageSeo", () => {
  it("sets title, description, canonical and social tags for the current route", () => {
    render(
      <MemoryRouter initialEntries={["/solutions"]}>
        <SeoProbe
          title="Industry Solutions | Codefest Studio"
          description="Technology solutions built around your industry."
        />
      </MemoryRouter>,
    );

    expect(document.title).toBe("Industry Solutions | Codefest Studio");
    expect(metaContent('meta[name="description"]')).toBe(
      "Technology solutions built around your industry.",
    );
    expect(metaContent('meta[name="robots"]')).toBe("index, follow");
    expect(metaContent('meta[property="og:url"]')).toBe(
      "https://codefeststudio.com/solutions",
    );
    expect(
      document.head.querySelector('link[rel="canonical"]')?.getAttribute("href"),
    ).toBe("https://codefeststudio.com/solutions");
    expect(metaContent('meta[property="og:title"]')).toBe(
      "Industry Solutions | Codefest Studio",
    );
    expect(metaContent('meta[name="twitter:image"]')).toBe(
      "https://codefeststudio.com/og-image.jpg",
    );
  });

  it("marks placeholder pages as noindex", () => {
    render(
      <MemoryRouter initialEntries={["/privacy-policy"]}>
        <SeoProbe
          title="Privacy Policy | Codefest Studio"
          description="The Privacy Policy page for Codefest Studio will be published soon."
          robots="noindex, follow"
        />
      </MemoryRouter>,
    );

    expect(metaContent('meta[name="robots"]')).toBe("noindex, follow");
  });
});
