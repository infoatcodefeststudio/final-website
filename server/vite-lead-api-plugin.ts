import type { Plugin } from "vite";
import { loadEnv } from "vite";
import { handleLeadRequest } from "./lead-handler.ts";

function attachLeadApi(
  middlewares: { use: (handler: (req: any, res: any, next: () => void) => void) => void },
  mode: string,
) {
  const env = loadEnv(mode, process.cwd(), "");
  middlewares.use((req, res, next) => {
    const url = req.url?.split("?")[0];
    if (url !== "/api/leads") {
      next();
      return;
    }
    void handleLeadRequest(req, res, env);
  });
}

export function leadApiPlugin(): Plugin {
  return {
    name: "lead-api",
    configureServer(server) {
      attachLeadApi(server.middlewares, server.config.mode);
    },
    configurePreviewServer(server) {
      attachLeadApi(server.middlewares, server.config.mode);
    },
  };
}
