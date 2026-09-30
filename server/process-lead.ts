import { leadPayloadSchema, type LeadPayload } from "./lead-schema.ts";
import { sendLeadEmail } from "./zeptomail.ts";

export type LeadEnv = Record<string, string | undefined>;

export type LeadResponseBody = {
  ok: boolean;
  message?: string;
  issues?: Record<string, string[] | undefined>;
};

export type LeadProcessResult = {
  status: number;
  body: LeadResponseBody;
};

export type SendLeadEmail = (env: LeadEnv, lead: LeadPayload) => Promise<void>;

export async function processLeadSubmission(
  method: string | undefined,
  json: unknown,
  env: LeadEnv,
  sendEmail?: SendLeadEmail,
): Promise<LeadProcessResult> {
  if (method !== "POST") {
    return { status: 405, body: { ok: false, message: "Method not allowed" } };
  }

  const parsed = leadPayloadSchema.safeParse(json);
  if (!parsed.success) {
    return {
      status: 400,
      body: {
        ok: false,
        message: "Invalid form data",
        issues: parsed.error.flatten().fieldErrors,
      },
    };
  }

  try {
    await (sendEmail ?? sendLeadEmail)(env, parsed.data);
    return { status: 200, body: { ok: true } };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to send notification";
    console.error("[api/leads]", message);
    return {
      status: 500,
      body: { ok: false, message: "Failed to send your message. Please try again." },
    };
  }
}
