import type { IncomingMessage, ServerResponse } from "node:http";
import { leadPayloadSchema } from "./lead-schema.ts";
import { sendLeadEmail } from "./zeptomail.ts";

export type LeadEnv = Record<string, string | undefined>;

async function readJsonBody(req: IncomingMessage): Promise<unknown> {
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  const raw = Buffer.concat(chunks).toString("utf8");
  if (!raw.trim()) {
    throw new Error("Empty request body");
  }
  return JSON.parse(raw) as unknown;
}

function sendJson(res: ServerResponse, status: number, body: object) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(body));
}

export async function handleLeadRequest(
  req: IncomingMessage,
  res: ServerResponse,
  env: LeadEnv,
): Promise<void> {
  if (req.method !== "POST") {
    sendJson(res, 405, { ok: false, message: "Method not allowed" });
    return;
  }

  try {
    const json = await readJsonBody(req);
    const parsed = leadPayloadSchema.safeParse(json);
    if (!parsed.success) {
      sendJson(res, 400, {
        ok: false,
        message: "Invalid form data",
        issues: parsed.error.flatten().fieldErrors,
      });
      return;
    }

    await sendLeadEmail(env, parsed.data);
    sendJson(res, 200, { ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to send notification";
    console.error("[api/leads]", message);
    sendJson(res, 500, { ok: false, message: "Failed to send your message. Please try again." });
  }
}
