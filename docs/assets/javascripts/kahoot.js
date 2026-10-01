/* Link-only integration. This UI gate grants no authority on Kahoot. */
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (!root.document) return;
  const sync = () => api.sync(root.document, root.TSSRCollaboration);
  root.document.addEventListener("DOMContentLoaded", sync);
  root.document.addEventListener("tssr:auth-changed", sync);
  root.addEventListener("pageshow", sync);
  if (typeof document$ !== "undefined") document$.subscribe(sync);
  sync();
})(typeof window === "undefined" ? globalThis : window, function () {
  function canHost(profile) { return !!profile?.id && profile.status === "active"; }
  function officialHostUrl(value) {
    try {
      const url = new URL(value);
      const officialShare = /^(?:create\.)?kahoot\.(it|com)$/.test(url.hostname) && /^\/(?:share|details)\/[a-zA-Z0-9_/-]+$/.test(url.pathname);
      const officialEditor = /^create\.kahoot\.(it|com)$/.test(url.hostname) && /^\/creator\/[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/.test(url.pathname);
      return url.protocol === "https:" && !url.username && !url.password && !url.port && !url.search && !url.hash &&
        (officialShare || officialEditor) ? url.href : null;
    } catch { return null; }
  }
  function sync(document, bridge) {
    const allowed = canHost(bridge?.getProfile?.());
    document.querySelectorAll("[data-kahoot-host]").forEach((button) => {
      const url = officialHostUrl(button.dataset.kahootHost);
      button.hidden = !allowed || !url;
      button.disabled = !allowed || !url;
      button.onclick = () => {
        if (!canHost(bridge?.getProfile?.())) { sync(document, bridge); return; }
        if (url) window.open(url, "_blank", "noopener,noreferrer");
      };
    });
  }
  return { canHost, officialHostUrl, sync };
});
