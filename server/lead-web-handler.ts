import {
  processLeadSubmission,
  type LeadEnv,
  type SendLeadEmail,
} from "./process-lead.ts";

export async function handleLeadWebRequest(
  request: Request,
  env: LeadEnv,
  sendEmail?: SendLeadEmail,
): Promise<Response> {
  let json: unknown;
  if (request.method === "POST") {
    try {
      json = await request.json();
    } catch {
      return Response.json(
        { ok: false, message: "Invalid JSON" },
        { status: 400 },
      );
    }
  }

  const result = await processLeadSubmission(
    request.method,
    json,
    env,
    sendEmail,
  );
  return Response.json(result.body, { status: result.status });
}
