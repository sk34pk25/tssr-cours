/* Minimal progressive enhancement for page context and code labels. */
(function () {
  const sectionNames = [
    "modules", "parcours", "tutoriels", "tp", "exercices", "revision",
    "kahoot", "memo", "commandes", "troubleshooting", "glossaire", "ressources", "ajouter"
  ];

  const languageLabels = {
    bash: "Bash",
    shell: "Shell",
    sh: "Shell",
    powershell: "PowerShell",
    ps1: "PowerShell",
    cmd: "Invite de commandes",
    bat: "Batch",
    sql: "SQL",
    yaml: "YAML",
    yml: "YAML",
    python: "Python",
    text: "Console",
    console: "Console"
  };

  function classifyPage() {
    const parts = window.location.pathname.split("/").filter(Boolean);
    const section = sectionNames.find((name) => parts.includes(name)) || "accueil";
    const sectionIndex = parts.indexOf(section);
    const body = document.body;
    const main = document.querySelector(".md-content .md-typeset");

    body.dataset.tssrSection = section;
    body.dataset.tssrPage = section === "accueil"
      ? "home"
      : section === "modules" && parts.length === sectionIndex + 2
        ? "track-index"
        : section === "modules"
          ? "course"
          : "content";

    if (!main) return;

    const firstHeading = main.querySelector("h1");
    const metadata = firstHeading && firstHeading.nextElementSibling;
    if (body.dataset.tssrPage === "course" && metadata?.tagName === "P" && metadata.querySelector("strong")) {
      metadata.classList.add("tssr-course-meta");
    }

    if (body.dataset.tssrPage === "track-index") {
      const table = main.querySelector("table");
      if (table) table.classList.add("tssr-module-table");
    }

    main.querySelectorAll(".highlight[class*='language-'], pre[class*='language-'], pre > code[class*='language-']").forEach((element) => {
      const languageClass = Array.from(element.classList).find((name) => name.startsWith("language-"));
      const language = languageClass ? languageClass.replace("language-", "") : "";
      const pre = element.matches("pre")
        ? element
        : element.matches("code")
          ? element.parentElement
          : element.querySelector("pre");
      if (pre && language) pre.dataset.tssrLanguage = languageLabels[language] || language;
    });

    if (section === "tutoriels" || section === "tp") {
      main.querySelectorAll("h2").forEach((heading) => {
        if (!/(étapes|procédure|méthode|réalisation)/i.test(heading.textContent || "")) return;
        let sibling = heading.nextElementSibling;
        while (sibling && sibling.tagName !== "H2") {
          if (sibling.tagName === "OL") sibling.classList.add("tssr-steps");
          sibling = sibling.nextElementSibling;
        }
      });
    }
  }

  function setupTocToggle() {
    const sidebar = document.querySelector(".md-sidebar--secondary");
    const container = sidebar?.querySelector(".md-sidebar__inner");
    const toc = container?.querySelector(".md-nav--secondary");

    if (!container || !toc || !toc.querySelector("[data-md-component='toc']")) return;
    if (container.querySelector(".tssr-toc-toggle")) return;

    toc.id = "tssr-page-toc";
    toc.hidden = true;

    const button = document.createElement("button");
    button.type = "button";
    button.id = "tssr-toc-toggle";
    button.className = "tssr-toc-toggle";
    button.setAttribute("aria-controls", toc.id);
    button.setAttribute("aria-expanded", "false");
    button.innerHTML = '<span class="tssr-toc-toggle__icon" aria-hidden="true"></span><span>Sur cette page</span>';

    toc.setAttribute("aria-labelledby", button.id);
    button.addEventListener("click", function () {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      toc.hidden = expanded;
    });

    container.insertBefore(button, toc);
  }

  function enhancePdfViewers() {
    document.querySelectorAll(".tssr-pdf-embed[data-tssr-pdf-src]:not([data-tssr-pdf-ready])").forEach((container) => {
      try {
        const source = new URL(container.dataset.tssrPdfSrc, window.location.href);
        if (source.origin !== window.location.origin || !/\.pdf$/i.test(source.pathname)) return;
        const viewer = document.createElement("object");
        viewer.type = "application/pdf";
        viewer.data = source.href;
        viewer.setAttribute("aria-label", container.dataset.tssrPdfTitle || "Document PDF");
        viewer.innerHTML = "<p>Le PDF ne peut pas être affiché directement dans ce navigateur.</p>";
        const fallback = container.querySelector(".tssr-pdf-embed__fallback");
        container.insertBefore(viewer, fallback || null);
        container.dataset.tssrPdfReady = "true";
      } catch (_) {
        /* The static open/download links remain available. */
      }
    });
  }

  function enhancePage() {
    classifyPage();
    setupTocToggle();
    enhancePdfViewers();
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(enhancePage);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", enhancePage, { once: true });
  } else {
    enhancePage();
  }
})();
