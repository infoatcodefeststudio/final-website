import { handleLeadWebRequest } from "../server/lead-web-handler.ts";

export default {
  fetch(request: Request) {
    return handleLeadWebRequest(request, process.env);
  },
};

export function POST(request: Request) {
  return handleLeadWebRequest(request, process.env);
}
