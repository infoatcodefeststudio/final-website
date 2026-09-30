export const SITE_EMAIL = "info@codefeststudio.com";
export const SITE_WEBSITE = "codefeststudio.com";
export const SITE_WEBSITE_URL = `https://${SITE_WEBSITE}`;
export const SITE_NAME = "Codefest Studio";

export const SITE_DEFAULT_TITLE =
  "Codefest Studio | Technology Solutions & Enterprise Software Products";

export const SITE_DEFAULT_DESCRIPTION =
  "Codefest Studio provides customised technology solutions and ready-to-deploy enterprise products including Warehouse Management, Transport Management, Gate & Yard Management, Vendor Management, Hotel ERP and Inventory Management.";

export const SITE_OG_IMAGE_PATH = "/og-image.jpg";
export const SITE_OG_IMAGE_ALT =
  "Codefest Studio — Technology That Simplifies Business.";

export function siteUrl(path = "/"): string {
  if (!path || path === "/") {
    return `${SITE_WEBSITE_URL}/`;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_WEBSITE_URL}${normalized}`;
}
