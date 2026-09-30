export type LeadSource = "contact" | "demo";

export type SubmitLeadInput = {
  source: LeadSource;
  fullName: string;
  companyName?: string;
  email: string;
  phone?: string;
  designation?: string;
  productSlug?: string;
  businessType?: string;
  numberOfLocations?: string;
  message: string;
};

export async function submitLead(input: SubmitLeadInput): Promise<void> {
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });

  const data = (await response.json().catch(() => ({}))) as {
    ok?: boolean;
    message?: string;
  };

  if (!response.ok || !data.ok) {
    throw new Error(data.message ?? "Failed to submit");
  }
}
