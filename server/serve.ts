/**
 * Production server: static files from dist/ + POST /api/leads (ZeptoMail).
 * Usage: npm run build && npm run start
 */
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadEnv } from "vite";
import { handleLeadRequest } from "./lead-handler.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const env = loadEnv("production", root, "");
const port = Number(process.env.PORT) || 4173;

const MIME: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

async function serveStatic(pathname: string, res: import("node:http").ServerResponse) {
  const safe = pathname.replace(/^\/+/, "");
  const filePath = path.join(dist, safe || "index.html");
  const resolved = path.resolve(filePath);
  if (!resolved.startsWith(dist)) {
    res.statusCode = 403;
    res.end("Forbidden");
    return;
  }
  try {
    const data = await readFile(resolved);
    const ext = path.extname(resolved);
    res.setHeader("Content-Type", MIME[ext] ?? "application/octet-stream");
    res.end(data);
  } catch {
    try {
      const index = await readFile(path.join(dist, "index.html"));
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end(index);
    } catch {
      res.statusCode = 404;
      res.end("Not found");
    }
  }
}

createServer((req, res) => {
  const url = req.url?.split("?")[0] ?? "/";
  if (url === "/api/leads") {
    void handleLeadRequest(req, res, env);
    return;
  }
  void serveStatic(url === "/" ? "/index.html" : url, res);
}).listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
