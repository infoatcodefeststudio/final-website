import type { IncomingMessage, ServerResponse } from "node:http";
import { processLeadSubmission, type LeadEnv } from "./process-lead.ts";

export type { LeadEnv };

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
  let json: unknown;
  if (req.method === "POST") {
    try {
      json = await readJsonBody(req);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to send notification";
      console.error("[api/leads]", message);
      sendJson(res, 500, {
        ok: false,
        message: "Failed to send your message. Please try again.",
      });
      return;
    }
  }

  const result = await processLeadSubmission(req.method, json, env);
  sendJson(res, result.status, result.body);
}
