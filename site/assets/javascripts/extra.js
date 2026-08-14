/* Minimal progressive enhancement for page context and code labels. */
(function () {
  const sectionNames = [
    "modules", "parcours", "tutoriels", "tp", "exercices", "revision",
    "memo", "commandes", "troubleshooting", "glossaire", "ressources"
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

  if (typeof document$ !== "undefined") {
    document$.subscribe(classifyPage);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", classifyPage, { once: true });
  } else {
    classifyPage();
  }
})();
