// Run via: browse eval --session hercules-copy "$(Get-Content ... -Raw)"
// Captures last dev API request/response samples on window.__herculesCapture

(function () {
  if (window.__herculesHooked) return "already hooked";
  window.__herculesCapture = { requests: [] };
  const orig = window.fetch;
  window.fetch = async function (input, init) {
    const url = typeof input === "string" ? input : input.url;
    const res = await orig.apply(this, arguments);
    if (url.includes("/api/v1/website/dev/")) {
      let body = init?.body;
      if (typeof body !== "string") body = body ? "[non-string body]" : null;
      let text = "";
      try {
        text = await res.clone().text();
      } catch (_) {}
      window.__herculesCapture.requests.push({
        url,
        body,
        status: res.status,
        response: text.slice(0, 50000),
      });
    }
    return res;
  };
  window.__herculesHooked = true;
  return "hooked";
})();
