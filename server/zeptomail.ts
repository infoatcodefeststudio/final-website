type ZeptoEnv = {
  ZEPTOMAIL_API_KEY?: string;
  ZEPTOMAIL_API_URL?: string;
  ZEPTOMAIL_FROM_EMAIL?: string;
  ZEPTOMAIL_FROM_NAME?: string;
  LEAD_NOTIFY_EMAIL?: string;
};

function requireEnv(env: ZeptoEnv, key: keyof ZeptoEnv): string {
  const value = env[key]?.trim();
  if (!value) {
    throw new Error(`Missing server environment variable: ${key}`);
  }
  return value;
}

function zeptoAuthorization(apiKey: string): string {
  const trimmed = apiKey.trim();
  if (/^Zoho-enczapikey\s+/i.test(trimmed)) {
    return trimmed;
  }
  return `Zoho-enczapikey ${trimmed}`;
}

function escapeHtml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function row(label: string, value: string | undefined): string {
  if (!value?.trim()) return "";
  return `<tr><td style="padding:6px 12px 6px 0;font-weight:600;vertical-align:top">${escapeHtml(label)}</td><td style="padding:6px 0">${escapeHtml(value)}</td></tr>`;
}

export async function sendLeadEmail(
  env: ZeptoEnv,
  lead: {
    source: "contact" | "demo";
    fullName: string;
    companyName?: string;
    email: string;
    phone?: string;
    designation?: string;
    productSlug?: string;
    businessType?: string;
    numberOfLocations?: string;
    message: string;
  },
): Promise<void> {
  const apiKey = requireEnv(env, "ZEPTOMAIL_API_KEY");
  const fromEmail = requireEnv(env, "ZEPTOMAIL_FROM_EMAIL");
  const notifyEmail = requireEnv(env, "LEAD_NOTIFY_EMAIL");
  const fromName = env.ZEPTOMAIL_FROM_NAME?.trim() || "Codefest Studio";
  const apiUrl =
    env.ZEPTOMAIL_API_URL?.trim() || "https://api.zeptomail.com/v1.1/email";

  const sourceLabel = lead.source === "demo" ? "Book a Demo" : "Contact";
  const subject = `[${sourceLabel}] ${lead.fullName}${lead.companyName ? ` — ${lead.companyName}` : ""}`;

  const htmlbody = `
    <div style="font-family:system-ui,sans-serif;line-height:1.5;color:#111">
      <h2 style="margin:0 0 12px">New ${escapeHtml(sourceLabel)} inquiry</h2>
      <table style="border-collapse:collapse">${row("Name", lead.fullName)}${row("Company", lead.companyName)}${row("Email", lead.email)}${row("Phone", lead.phone)}${row("Designation", lead.designation)}${row("Product", lead.productSlug)}${row("Business type", lead.businessType)}${row("Locations", lead.numberOfLocations)}</table>
      <p style="margin:16px 0 6px;font-weight:600">Message</p>
      <p style="margin:0;white-space:pre-wrap">${escapeHtml(lead.message)}</p>
    </div>
  `.trim();

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: zeptoAuthorization(apiKey),
    },
    body: JSON.stringify({
      from: { address: fromEmail, name: fromName },
      to: [
        {
          email_address: {
            address: notifyEmail,
            name: "Codefest Studio",
          },
        },
      ],
      reply_to: [
        {
          address: lead.email,
          name: lead.fullName,
        },
      ],
      subject,
      htmlbody,
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(
      `ZeptoMail request failed (${response.status})${detail ? `: ${detail.slice(0, 200)}` : ""}`,
    );
  }
}
