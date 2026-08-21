(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.TSSRCourseCreatorUtils = api;
})(typeof window !== "undefined" ? window : globalThis, function () {
  function slugify(value, fallback = "nouveau-cours") {
    const slug = String(value || "")
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/['’]/g, "-")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .replace(/-{2,}/g, "-")
      .slice(0, 64)
      .replace(/-+$/g, "");
    return slug || fallback;
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character];
    });
  }

  function uid(prefix) {
    if (typeof crypto !== "undefined" && crypto.randomUUID) return `${prefix}-${crypto.randomUUID()}`;
    return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  function newPage(overrides = {}) {
    return { clientId: uid("page"), title: "", type: "cours", description: "", content: "", ...overrides };
  }

  function newModule(overrides = {}) {
    return { clientId: uid("module"), title: "", subtitle: "", description: "", content: "", pages: [], ...overrides };
  }

  function newExercise(overrides = {}) {
    return { clientId: uid("exercise"), title: "", instructions: "", difficulty: "", duration: "", type: "", solution: "", hint: "", moduleIndex: -1, tags: [], ...overrides };
  }

  function newLab(overrides = {}) {
    return { clientId: uid("lab"), title: "", objective: "", prerequisites: [], environment: "", duration: "", steps: "", resources: "", correction: "", moduleIndex: -1, ...overrides };
  }

  function newQuiz(overrides = {}) {
    return { clientId: uid("quiz"), title: "", kind: "kahoot", description: "", url: "", difficulty: "", category: "", moduleIndex: -1, questions: [], content: "", ...overrides };
  }

  function newQuestion(overrides = {}) {
    return { question: "", answers: [], correctAnswer: "", explanation: "", ...overrides };
  }

  function newGlossaryEntry(overrides = {}) {
    return { clientId: uid("glossary"), term: "", fullName: "", definition: "", aliases: [], keywords: [], moduleIndex: -1, ...overrides };
  }

  function newResource(overrides = {}) {
    return { clientId: uid("resource"), title: "", description: "", url: "", type: "web", moduleIndex: -1, ...overrides };
  }

  function defaultDraft() {
    return {
      schemaVersion: 1,
      general: {
        title: "Nouveau cours", shortTitle: "", subtitle: "", shortDescription: "", description: "",
        category: "", domain: "", level: "", order: "", duration: "", trainer: "", startDate: "",
        endDate: "", prerequisites: [], objectives: [], skills: [], keywords: [], tags: [], style: "",
        icon: "book-open-page-variant", status: "Proposé", source: "", notes: "", includeInPath: false,
        coverAttachmentId: ""
      },
      modules: [], exercises: [], labs: [], quizzes: [], glossaryEntries: [], existingGlossary: [],
      resources: [], attachments: []
    };
  }

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function hydrateDraft(raw) {
    const base = defaultDraft();
    const source = raw && typeof raw === "object" ? raw : {};
    return {
      ...base,
      ...source,
      general: { ...base.general, ...(source.general || {}) },
      modules: Array.isArray(source.modules) ? source.modules.map((module) => ({ ...newModule(), ...module, pages: Array.isArray(module.pages) ? module.pages.map((page) => ({ ...newPage(), ...page })) : [] })) : [],
      exercises: Array.isArray(source.exercises) ? source.exercises.map((item) => ({ ...newExercise(), ...item })) : [],
      labs: Array.isArray(source.labs) ? source.labs.map((item) => ({ ...newLab(), ...item })) : [],
      quizzes: Array.isArray(source.quizzes) ? source.quizzes.map((item) => ({ ...newQuiz(), ...item, questions: Array.isArray(item.questions) ? item.questions.map((question) => ({ ...newQuestion(), ...question })) : [] })) : [],
      glossaryEntries: Array.isArray(source.glossaryEntries) ? source.glossaryEntries.map((item) => ({ ...newGlossaryEntry(), ...item })) : [],
      existingGlossary: Array.isArray(source.existingGlossary) ? source.existingGlossary : [],
      resources: Array.isArray(source.resources) ? source.resources.map((item) => ({ ...newResource(), ...item })) : [],
      attachments: []
    };
  }

  function serializableDraft(draft) {
    const value = clone(draft);
    value.attachments = [];
    value.general.coverAttachmentId = "";
    return value;
  }

  function splitList(value) {
    if (Array.isArray(value)) return value.map(String).map((item) => item.trim()).filter(Boolean);
    return String(value || "").split(/[\n,;]/).map((item) => item.trim()).filter(Boolean);
  }

  function summarize(draft) {
    return {
      title: String(draft?.general?.title || "Nouveau cours").trim() || "Nouveau cours",
      modules: draft?.modules?.length || 0,
      pages: (draft?.modules || []).reduce((total, module) => total + (module.pages?.length || 0), 0),
      exercises: draft?.exercises?.length || 0,
      labs: draft?.labs?.length || 0,
      quizzes: draft?.quizzes?.length || 0,
      kahoots: (draft?.quizzes || []).filter((quiz) => quiz.kind === "kahoot").length,
      glossary: (draft?.glossaryEntries?.length || 0) + (draft?.existingGlossary?.length || 0),
      resources: draft?.resources?.length || 0,
      files: draft?.attachments?.length || 0,
      pdfs: (draft?.attachments || []).filter((file) => file.mediaType === "application/pdf").length
    };
  }

  function allowedFile(name, mediaType) {
    const extension = String(name || "").toLowerCase().match(/\.([a-z0-9]+)$/)?.[1] || "";
    const extensions = new Set(["png", "jpg", "jpeg", "webp", "gif", "pdf", "txt", "cfg", "conf", "ini", "csv", "json", "yaml", "yml", "xml", "zip", "xlsx", "pptx", "pka", "bat", "cmd", "ps1", "sh"]);
    if (!extensions.has(extension)) return false;
    if (/^(text\/html|image\/svg\+xml|application\/javascript|text\/javascript)$/i.test(mediaType || "")) return false;
    return true;
  }

  function signatureMatches(bytes, name, mediaType) {
    const extension = String(name || "").toLowerCase().match(/\.([a-z0-9]+)$/)?.[1] || "";
    const starts = (...signature) => signature.every((value, index) => bytes[index] === value);
    if (mediaType === "application/pdf" || extension === "pdf") return starts(0x25, 0x50, 0x44, 0x46, 0x2d);
    if (extension === "png") return starts(0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a);
    if (["jpg", "jpeg"].includes(extension)) return starts(0xff, 0xd8, 0xff);
    if (extension === "gif") return starts(0x47, 0x49, 0x46, 0x38);
    if (extension === "webp") return starts(0x52, 0x49, 0x46, 0x46) && String.fromCharCode(...bytes.slice(8, 12)) === "WEBP";
    if (["zip", "xlsx", "pptx"].includes(extension)) return starts(0x50, 0x4b);
    return true;
  }

  function codeSpan(value) {
    const source = String(value ?? "");
    const runs = source.match(/`+/g) || [];
    const delimiter = "`".repeat(Math.max(0, ...runs.map((run) => run.length)) + 1);
    const padding = /^(?:`| )|(?:`| )$/.test(source) ? " " : "";
    return `${delimiter}${padding}${source}${padding}${delimiter}`;
  }

  function escapeMarkdownText(value) {
    return String(value ?? "")
      .replaceAll("\\", "\\\\")
      .replace(/([`*_[\]{}<>|~^&])/g, "\\$1")
      .replace(/(^|\n)( {0,3})([#>+\-:])(?=\s|$)/g, "$1$2\\$3")
      .replace(/(^|\n)( {0,3})(\d+)([.)])(?=\s)/g, "$1$2$3\\$4")
      .replace(/==/g, "\\=\\=")
      .replace(/:([a-z0-9_+\-]+):/gi, "\\:$1\\:");
  }

  function escapeMarkdownLabel(value) {
    return escapeMarkdownText(value);
  }

  function stableEditorIdentity(session, path, draft) {
    const prefix = String(session || "editor-session");
    const parts = String(path || "").split(".");
    if (parts[0] === "modules" && /^\d+$/.test(parts[1] || "")) {
      const module = draft?.modules?.[Number(parts[1])];
      if (parts[2] === "pages" && /^\d+$/.test(parts[3] || "")) {
        const page = module?.pages?.[Number(parts[3])];
        return `${prefix}:page:${page?.clientId || page?.id || parts[3]}:${parts.slice(4).join(".")}`;
      }
      return `${prefix}:module:${module?.clientId || module?.id || parts[1]}:${parts.slice(2).join(".")}`;
    }
    if (["exercises", "labs", "quizzes"].includes(parts[0]) && /^\d+$/.test(parts[1] || "")) {
      const item = draft?.[parts[0]]?.[Number(parts[1])];
      return `${prefix}:${parts[0]}:${item?.clientId || item?.id || parts[1]}:${parts.slice(2).join(".")}`;
    }
    return `${prefix}:${path}`;
  }

  function nodeToMarkdown(node, depth = 0, options = {}) {
    if (!node) return "";
    if (node.nodeType === 3) {
      if (options.literalText) return node.nodeValue || "";
      if (options.htmlText) return escapeHtml(node.nodeValue || "");
      return escapeMarkdownText(node.nodeValue || "");
    }
    if (node.nodeType !== 1) return "";
    if (node.hasAttribute("data-tssr-raw-block")) {
      return node.querySelector("[data-tssr-raw-source]")?.textContent || "";
    }
    const tag = node.tagName.toLowerCase();
    const childOptions = tag === "code"
      ? { ...options, linkLabel: false, literalText: true, htmlText: false }
      : ["u", "mark", "sup", "sub", "span"].includes(tag)
        ? { ...options, htmlText: true, literalText: false }
        : options;
    const content = Array.from(node.childNodes).map((child) => nodeToMarkdown(child, depth + 1, childOptions)).join("");
    if (/^h[1-6]$/.test(tag)) return `${"#".repeat(Number(tag.slice(1)))} ${content.trim()}\n\n`;
    if (tag === "p" || tag === "div") return `${content.trim()}\n\n`;
    if (tag === "br") return "  \n";
    if (tag === "strong" || tag === "b") return `**${content}**`;
    if (tag === "em" || tag === "i") return `*${content}*`;
    if (tag === "del" || tag === "s" || tag === "strike") return `~~${content}~~`;
    if (["u", "mark", "sup", "sub"].includes(tag)) return `<${tag}>${content}</${tag}>`;
    if (tag === "code" && node.parentElement?.tagName.toLowerCase() !== "pre") return codeSpan(content);
    if (tag === "pre") return `\n\`\`\`\n${node.textContent || ""}\n\`\`\`\n\n`;
    if (tag === "blockquote") return `${content.trim().split("\n").map((line) => `> ${line}`).join("\n")}\n\n`;
    if (tag === "hr") return "\n---\n\n";
    if (tag === "a") {
      const href = options.safeUrl ? options.safeUrl(node.getAttribute("href") || "") : node.getAttribute("href") || "";
      const title = node.getAttribute("title");
      const attributes = node.getAttribute("target") === "_blank" ? '{ target="_blank" rel="noopener noreferrer" }' : "";
      const label = Array.from(node.childNodes).map((child) => nodeToMarkdown(child, depth + 1, { ...options, linkLabel: true, htmlText: false, literalText: false })).join("");
      return `[${label || escapeMarkdownLabel(href) || "lien"}](${href}${title ? ` "${title.replaceAll('"', "&quot;")}"` : ""})${attributes}`;
    }
    if (tag === "img") {
      const title = node.getAttribute("title");
      const source = options.safeUrl ? options.safeUrl(node.getAttribute("src") || "") : node.getAttribute("src") || "";
      return `![${escapeMarkdownLabel(node.getAttribute("alt") || "")}](${source}${title ? ` "${title.replaceAll('"', "&quot;")}"` : ""})`;
    }
    if (tag === "ul" || tag === "ol") {
      return `${Array.from(node.children).map((child, index) => `${tag === "ol" ? `${index + 1}.` : "-"} ${nodeToMarkdown(child, depth + 1, options).trim()}`).join("\n")}\n\n`;
    }
    if (tag === "li") return content;
    if (tag === "table") {
      const rows = Array.from(node.querySelectorAll(":scope > thead > tr, :scope > tbody > tr, :scope > tr"));
      if (!rows.length) return "";
      const cells = rows.map((row) => Array.from(row.children).map((cell) => escapeMarkdownText((cell.textContent || "").trim())));
      const width = Math.max(...cells.map((row) => row.length));
      const header = cells[0].concat(Array(Math.max(0, width - cells[0].length)).fill(""));
      return `| ${header.join(" | ")} |\n| ${header.map(() => "---").join(" | ")} |\n${cells.slice(1).map((row) => `| ${row.concat(Array(Math.max(0, width - row.length)).fill("")).join(" | ")} |`).join("\n")}\n\n`;
    }
    if (tag === "span") {
      const classes = Array.from(node.classList || []).filter((name) => /^tssr-content-(?:text|color|background|badge)--[a-z0-9-]+$/.test(name) || name === "tssr-content-badge");
      if (classes.length) return `<span class="${classes.join(" ")}">${content}</span>`;
    }
    return content;
  }

  function htmlToMarkdown(element, options = {}) {
    const markdown = Array.from(element?.childNodes || []).map((node) => nodeToMarkdown(node, 0, options)).join("");
    return options.trim === false ? markdown : markdown.trim();
  }

  function insertIntoTextarea(textarea, before, after = "", placeholder = "texte") {
    const start = textarea.selectionStart ?? textarea.value.length;
    const end = textarea.selectionEnd ?? start;
    const selected = textarea.value.slice(start, end) || placeholder;
    const insertion = `${before}${selected}${after}`;
    textarea.setRangeText(insertion, start, end, "end");
    textarea.dispatchEvent(new Event("input", { bubbles: true }));
    textarea.focus();
  }

  function editorDiff(original, current, originalAttachments = [], currentAttachments = []) {
    const changes = [];
    const clean = (value) => JSON.stringify(value, function (key, child) {
      if (["objectUrl", "file"].includes(key)) return undefined;
      return child;
    });
    const compareFamily = (section, beforeValues, afterValues, label) => {
      const before = new Map((beforeValues || []).map((item, index) => [String(item.clientId || item.id || `${section}-${index}`), item]));
      const after = new Map((afterValues || []).map((item, index) => [String(item.clientId || item.id || `${section}-${index}`), item]));
      before.forEach((item, id) => {
        if (!after.has(id)) changes.push({ section, type: "removed", label: label(item) });
        else if (clean(item) !== clean(after.get(id))) changes.push({ section, type: "modified", label: label(after.get(id)) });
      });
      after.forEach((item, id) => { if (!before.has(id)) changes.push({ section, type: "added", label: label(item) }); });
    };
    if (clean(original?.general || {}) !== clean(current?.general || {})) {
      changes.push({ section: "general", type: "modified", label: current?.general?.title || "Informations générales" });
    }
    compareFamily("modules", original?.modules, current?.modules, (item) => item.title || "Module sans titre");
    const originalPages = (original?.modules || []).flatMap((module) => module.pages || []);
    const currentPages = (current?.modules || []).flatMap((module) => module.pages || []);
    compareFamily("pages", originalPages, currentPages, (item) => item.title || "Page sans titre");
    compareFamily("exercises", original?.exercises, current?.exercises, (item) => item.title || "Exercice sans titre");
    compareFamily("labs", original?.labs, current?.labs, (item) => item.title || "TP sans titre");
    compareFamily("quizzes", original?.quizzes, current?.quizzes, (item) => item.title || "Quiz sans titre");
    compareFamily("glossary", original?.glossaryEntries, current?.glossaryEntries, (item) => item.term || "Terme sans nom");
    compareFamily("resources", original?.resources, current?.resources, (item) => item.title || item.url || "Ressource");
    compareFamily("files", originalAttachments, currentAttachments, (item) => item.name || item.path || "Fichier");
    return {
      changes,
      added: changes.filter((item) => item.type === "added").length,
      modified: changes.filter((item) => item.type === "modified").length,
      removed: changes.filter((item) => item.type === "removed").length,
      total: changes.length
    };
  }

  return {
    slugify, escapeHtml, uid, clone, splitList, defaultDraft, hydrateDraft, serializableDraft, summarize,
    newPage, newModule, newExercise, newLab, newQuiz, newQuestion, newGlossaryEntry, newResource,
    allowedFile, signatureMatches, codeSpan, escapeMarkdownText, escapeMarkdownLabel, stableEditorIdentity, nodeToMarkdown, htmlToMarkdown, insertIntoTextarea, editorDiff
  };
});
