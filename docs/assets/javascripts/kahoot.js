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
  function sync(document, bridge) {
    const allowed = canHost(bridge?.getProfile?.());
    document.querySelectorAll("[data-kahoot-login]").forEach((node) => { node.hidden = allowed; });
    document.querySelectorAll("[data-kahoot-live]").forEach((button) => {
      button.hidden = !allowed;
      button.disabled = !allowed;
      button.onclick = () => {
        if (!canHost(bridge?.getProfile?.())) { sync(document, bridge); return; }
        const url = new URL(button.dataset.kahootLive);
        if (url.protocol !== "https:" || !/^(?:create\.)?kahoot\.(it|com)$/.test(url.hostname) || url.port || url.username || url.password || url.search || url.hash || !/^\/(share|details)\/[a-zA-Z0-9_/-]+$/.test(url.pathname)) return;
        // No API call, permanent PIN, credentials or automatically started session.
        window.open(url.href, "_blank", "noopener,noreferrer");
      };
    });
  }
  return { canHost, sync };
});
