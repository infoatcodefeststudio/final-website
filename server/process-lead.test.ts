import { describe, expect, it, vi } from "vitest";
import { processLeadSubmission } from "./process-lead.ts";

const validLead = {
  source: "contact" as const,
  fullName: "Website Form Test",
  companyName: "Codefest Studio QA",
  email: "info@codefeststudio.com",
  phone: "+91 9876543210",
  productSlug: "wms",
  message: "Please send product details.",
};

describe("processLeadSubmission", () => {
  it("rejects non-POST methods", async () => {
    const sendEmail = vi.fn();
    const result = await processLeadSubmission("GET", validLead, {}, sendEmail);

    expect(result).toEqual({
      status: 405,
      body: { ok: false, message: "Method not allowed" },
    });
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it("rejects invalid form data without sending email", async () => {
    const sendEmail = vi.fn();
    const result = await processLeadSubmission(
      "POST",
      { source: "contact", fullName: "A" },
      {},
      sendEmail,
    );

    expect(result.status).toBe(400);
    expect(result.body.ok).toBe(false);
    expect(result.body.message).toBe("Invalid form data");
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it("sends email and returns ok for a valid payload", async () => {
    const sendEmail = vi.fn().mockResolvedValue(undefined);
    const env = { ZEPTOMAIL_API_KEY: "test-key" };

    const result = await processLeadSubmission("POST", validLead, env, sendEmail);

    expect(result).toEqual({ status: 200, body: { ok: true } });
    expect(sendEmail).toHaveBeenCalledWith(env, expect.objectContaining(validLead));
  });

  it("hides provider errors behind a generic 500", async () => {
    const sendEmail = vi.fn().mockRejectedValue(new Error("ZeptoMail request failed (401)"));

    const result = await processLeadSubmission("POST", validLead, {}, sendEmail);

    expect(result).toEqual({
      status: 500,
      body: { ok: false, message: "Failed to send your message. Please try again." },
    });
  });
});
