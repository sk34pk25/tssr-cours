/* Calendar state is derived at viewing time, never stored as content. */
(function (root) {
  "use strict";
  function parisDay(now = new Date()) {
    const parts = new Intl.DateTimeFormat("en", { timeZone: "Europe/Paris", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(now);
    const get = (key) => parts.find((part) => part.type === key).value;
    return `${get("year")}-${get("month")}-${get("day")}`;
  }
  function status(start, end, today) {
    return today < start ? "a_venir" : today > end ? "passe" : "en_cours";
  }
  const labels = { a_venir: "À venir", en_cours: "En cours", passe: "Passé" };
  root.TSSRParcours = Object.freeze({ parisDay, status });
  if (!root.document) return;
  function refresh() {
    const today = parisDay();
    root.document.querySelectorAll("[data-period-start][data-period-end]").forEach((element) => {
      element.textContent = labels[status(element.dataset.periodStart, element.dataset.periodEnd, today)];
    });
  }
  root.document.addEventListener("DOMContentLoaded", refresh);
  root.document.addEventListener("visibilitychange", refresh);
  root.addEventListener("pageshow", refresh);
  if (root.document$?.subscribe) root.document$.subscribe(refresh);
  root.setInterval(refresh, 30_000);
  refresh();
})(typeof window === "undefined" ? globalThis : window);
