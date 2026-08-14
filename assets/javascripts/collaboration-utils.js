(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.TSSRCollaborationUtils = api;
})(typeof window !== "undefined" ? window : globalThis, function () {
  const statuses = {
    pending: ["En attente", "pending"],
    approved: ["Validée", "approved"],
    publishing: ["Publication…", "publishing"],
    published: ["Publiée", "published"],
    rejected: ["Refusée", "rejected"],
    conflict: ["Conflit", "conflict"],
    failed: ["Erreur", "failed"],
    cancelled: ["Annulée", "cancelled"]
  };

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character];
    });
  }

  function statusInfo(status) {
    const info = statuses[status] || [status || "Inconnu", "cancelled"];
    return { label: info[0], className: info[1] };
  }

  function collaborationConfigured(config) {
    return Boolean(config && /^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(config.supabaseUrl || "") &&
      /^(sb_publishable_|eyJ)/.test(config.supabasePublishableKey || ""));
  }

  function sourcePath(value) {
    const normalized = String(value || "").replaceAll("\\", "/").replace(/^\/+/, "");
    if (!normalized || normalized.includes("..") || !normalized.endsWith(".md")) return null;
    return `docs/${normalized}`;
  }

  function relativeAssetPath(pagePath, assetPath) {
    const pageParts = pagePath.split("/").slice(0, -1);
    const assetParts = assetPath.split("/");
    while (pageParts.length && assetParts.length && pageParts[0] === assetParts[0]) {
      pageParts.shift();
      assetParts.shift();
    }
    return `${"../".repeat(pageParts.length)}${assetParts.join("/")}`;
  }

  function lineDiff(oldText, newText, limit = 400) {
    const before = String(oldText || "").split("\n");
    const after = String(newText || "").split("\n");
    if (before.length > limit || after.length > limit) return null;
    const table = Array.from({ length: before.length + 1 }, () => new Uint16Array(after.length + 1));
    for (let left = before.length - 1; left >= 0; left -= 1) {
      for (let right = after.length - 1; right >= 0; right -= 1) {
        table[left][right] = before[left] === after[right]
          ? table[left + 1][right + 1] + 1
          : Math.max(table[left + 1][right], table[left][right + 1]);
      }
    }
    const output = [];
    let left = 0;
    let right = 0;
    while (left < before.length && right < after.length) {
      if (before[left] === after[right]) {
        output.push({ type: "same", line: before[left] }); left += 1; right += 1;
      } else if (table[left + 1][right] >= table[left][right + 1]) {
        output.push({ type: "remove", line: before[left] }); left += 1;
      } else {
        output.push({ type: "add", line: after[right] }); right += 1;
      }
    }
    while (left < before.length) output.push({ type: "remove", line: before[left++] });
    while (right < after.length) output.push({ type: "add", line: after[right++] });
    return output;
  }

  function navigationToModel(nav) {
    return (Array.isArray(nav) ? nav : []).map(function (entry) {
      const pair = Object.entries(entry || {})[0] || ["Nouvel élément", ""];
      return typeof pair[1] === "string"
        ? { label: pair[0], target: pair[1], children: [] }
        : { label: pair[0], target: "", children: navigationToModel(pair[1]) };
    });
  }

  function modelToNavigation(nodes) {
    return nodes.map(function (node) {
      return { [node.label.trim()]: node.children.length ? modelToNavigation(node.children) : node.target.trim() };
    });
  }

  return {
    escapeHtml,
    statusInfo,
    collaborationConfigured,
    sourcePath,
    relativeAssetPath,
    lineDiff,
    navigationToModel,
    modelToNavigation
  };
});
