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
    return { title: "", instructions: "", difficulty: "", duration: "", type: "", solution: "", hint: "", moduleIndex: -1, tags: [], ...overrides };
  }

  function newLab(overrides = {}) {
    return { title: "", objective: "", prerequisites: [], environment: "", duration: "", steps: "", resources: "", correction: "", moduleIndex: -1, ...overrides };
  }

  function newQuiz(overrides = {}) {
    return { title: "", kind: "kahoot", description: "", url: "", difficulty: "", category: "", moduleIndex: -1, questions: [], ...overrides };
  }

  function newQuestion(overrides = {}) {
    return { question: "", answers: [], correctAnswer: "", explanation: "", ...overrides };
  }

  function newGlossaryEntry(overrides = {}) {
    return { term: "", fullName: "", definition: "", aliases: [], keywords: [], moduleIndex: -1, ...overrides };
  }

  function newResource(overrides = {}) {
    return { title: "", description: "", url: "", type: "web", moduleIndex: -1, ...overrides };
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

  function nodeToMarkdown(node, depth = 0) {
    if (!node) return "";
    if (node.nodeType === 3) return node.nodeValue || "";
    if (node.nodeType !== 1) return "";
    const tag = node.tagName.toLowerCase();
    const content = Array.from(node.childNodes).map((child) => nodeToMarkdown(child, depth + 1)).join("");
    if (/^h[1-6]$/.test(tag)) return `${"#".repeat(Number(tag.slice(1)))} ${content.trim()}\n\n`;
    if (tag === "p" || tag === "div") return `${content.trim()}\n\n`;
    if (tag === "br") return "  \n";
    if (tag === "strong" || tag === "b") return `**${content}**`;
    if (tag === "em" || tag === "i") return `*${content}*`;
    if (tag === "del" || tag === "s" || tag === "strike") return `~~${content}~~`;
    if (tag === "code" && node.parentElement?.tagName.toLowerCase() !== "pre") return `\`${content.replaceAll("`", "\\`")}\``;
    if (tag === "pre") return `\n\`\`\`\n${node.textContent || ""}\n\`\`\`\n\n`;
    if (tag === "blockquote") return `${content.trim().split("\n").map((line) => `> ${line}`).join("\n")}\n\n`;
    if (tag === "hr") return "\n---\n\n";
    if (tag === "a") return `[${content || node.getAttribute("href") || "lien"}](${node.getAttribute("href") || ""})`;
    if (tag === "img") return `![${node.getAttribute("alt") || ""}](${node.getAttribute("src") || ""})`;
    if (tag === "ul" || tag === "ol") {
      return `${Array.from(node.children).map((child, index) => `${tag === "ol" ? `${index + 1}.` : "-"} ${nodeToMarkdown(child, depth + 1).trim()}`).join("\n")}\n\n`;
    }
    if (tag === "li") return content;
    if (tag === "table") {
      const rows = Array.from(node.querySelectorAll(":scope > thead > tr, :scope > tbody > tr, :scope > tr"));
      if (!rows.length) return "";
      const cells = rows.map((row) => Array.from(row.children).map((cell) => (cell.textContent || "").trim().replaceAll("|", "\\|")));
      const width = Math.max(...cells.map((row) => row.length));
      const header = cells[0].concat(Array(Math.max(0, width - cells[0].length)).fill(""));
      return `| ${header.join(" | ")} |\n| ${header.map(() => "---").join(" | ")} |\n${cells.slice(1).map((row) => `| ${row.concat(Array(Math.max(0, width - row.length)).fill("")).join(" | ")} |`).join("\n")}\n\n`;
    }
    return content;
  }

  function htmlToMarkdown(element) {
    return Array.from(element?.childNodes || []).map((node) => nodeToMarkdown(node)).join("").replace(/\n{3,}/g, "\n\n").trim();
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

  return {
    slugify, escapeHtml, uid, clone, splitList, defaultDraft, hydrateDraft, serializableDraft, summarize,
    newPage, newModule, newExercise, newLab, newQuiz, newQuestion, newGlossaryEntry, newResource,
    allowedFile, signatureMatches, htmlToMarkdown, insertIntoTextarea
  };
});
