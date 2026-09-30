import { describe, expect, it, vi } from "vitest";
import { handleLeadWebRequest } from "./lead-web-handler.ts";

const validLead = {
  source: "demo" as const,
  fullName: "Demo Request Test",
  email: "info@codefeststudio.com",
  message: "Book a demo from production.",
};

describe("handleLeadWebRequest", () => {
  it("handles POST JSON like a Vercel function", async () => {
    const sendEmail = vi.fn().mockResolvedValue(undefined);
    const request = new Request("https://www.codefeststudio.com/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validLead),
    });

    const response = await handleLeadWebRequest(request, {}, sendEmail);

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ ok: true });
    expect(sendEmail).toHaveBeenCalledOnce();
  });

  it("returns 405 for GET so missing methods are not a 404", async () => {
    const sendEmail = vi.fn();
    const request = new Request("https://www.codefeststudio.com/api/leads", {
      method: "GET",
    });

    const response = await handleLeadWebRequest(request, {}, sendEmail);

    expect(response.status).toBe(405);
    await expect(response.json()).resolves.toEqual({
      ok: false,
      message: "Method not allowed",
    });
    expect(sendEmail).not.toHaveBeenCalled();
  });
});
