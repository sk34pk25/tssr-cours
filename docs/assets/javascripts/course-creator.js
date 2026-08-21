/* Structured course creation. Authentication and mutations are delegated to the existing collaboration client. */
(function () {
  const utils = window.TSSRCourseCreatorUtils;
  const requested = new URLSearchParams(window.location.search);
  const requestedCourse = requested.get("course") || "";
  const requestedMode = requested.get("mode") === "edit" && requestedCourse ? "edit" : "create";
  const sectionLabels = {
    general: "Général", modules: "Modules", activities: "Exercices / TP", quizzes: "Quiz / Kahoot",
    glossary: "Glossaire", resources: "Ressources / PDF", preview: "Aperçu", submit: "Soumission"
  };
  const state = {
    draft: utils?.defaultDraft ? utils.defaultDraft() : null,
    attachments: [],
    context: null,
    activeSection: "general",
    dirty: false,
    saving: false,
    submitting: false,
    root: null,
    saveTimer: null,
    editorModes: new Map(),
    editorLayouts: new Map(),
    initializedFor: null,
    authProfile: null,
    previewMode: false,
    proposalDescription: "",
    mode: requestedMode,
    coursePath: requestedCourse,
    meta: null,
    originalDraft: null,
    originalAttachments: [],
    relations: null
  };

  function storageKey() {
    const suffix = state.mode === "edit" ? `${state.meta?.courseId || utils.slugify(state.coursePath)}-${state.context?.base_commit_sha || "loading"}` : "create";
    return `tssr-course-editor-draft-v2-${suffix}`;
  }

  function syncRequestedMode() {
    const params = new URLSearchParams(window.location.search);
    const coursePath = params.get("course") || "";
    const mode = params.get("mode") === "edit" && coursePath ? "edit" : "create";
    if (mode === state.mode && coursePath === state.coursePath) return;
    state.attachments.forEach((item) => { if (item.kind !== "existing" && item.objectUrl) URL.revokeObjectURL(item.objectUrl); });
    state.mode = mode;
    state.coursePath = coursePath;
    state.draft = utils.defaultDraft();
    state.attachments = [];
    state.context = null;
    state.meta = null;
    state.originalDraft = null;
    state.originalAttachments = [];
    state.initializedFor = null;
    state.dirty = false;
    state.proposalDescription = "";
  }

  function bridge() {
    return window.TSSRCollaboration;
  }

  function profile() {
    return state.authProfile || bridge()?.getProfile?.() || null;
  }

  function siteUrl(path) {
    return bridge()?.siteUrl?.(path) || new URL(path, window.location.href).href;
  }

  function syncPageModeLabels() {
    const editorRoot = document.getElementById("tssr-course-creator");
    if (!editorRoot) return;
    const label = state.mode === "edit" ? "Modifier le cours" : "Ajouter un cours";
    const heading = document.querySelector(".md-content__inner > h1");
    if (heading) {
      const textNode = Array.from(heading.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
      if (textNode) textNode.textContent = label;
      else heading.insertBefore(document.createTextNode(label), heading.firstChild);
    }
    const headerTopic = document.querySelector('.md-header__topic[data-md-component="header-topic"] .md-ellipsis');
    if (headerTopic) headerTopic.textContent = label;
    document.title = document.title.replace(/^(?:Ajouter un cours|Modifier le cours)(?=\s+-\s+|$)/, label);
  }

  function loadDraft() {
    try {
      const stored = JSON.parse(localStorage.getItem(storageKey()) || "null");
      if (state.mode === "edit") {
        if (!stored || stored.baseCommitSha !== state.context?.base_commit_sha) return;
        state.draft = utils.hydrateDraft(stored.draft);
        state.attachments = Array.isArray(stored.attachments) ? stored.attachments : state.attachments;
        state.proposalDescription = String(stored.proposalDescription || "");
      } else state.draft = utils.hydrateDraft(stored);
    } catch (_) {
      if (state.mode === "create") state.draft = utils.defaultDraft();
    }
  }

  function saveDraft(manual = false) {
    if (!state.draft) return;
    const serializable = utils.serializableDraft(state.draft);
    if (state.mode === "edit") {
      localStorage.setItem(storageKey(), JSON.stringify({
        baseCommitSha: state.context?.base_commit_sha,
        draft: serializable,
        attachments: state.attachments.filter((item) => item.kind === "existing"),
        proposalDescription: state.proposalDescription
      }));
    } else localStorage.setItem(storageKey(), JSON.stringify(serializable));
    state.dirty = false;
    const status = state.root?.querySelector("[data-draft-status]");
    if (status) status.textContent = `${manual ? "Brouillon enregistré" : "Enregistrement automatique"} · ${new Intl.DateTimeFormat("fr-FR", { hour: "2-digit", minute: "2-digit" }).format(new Date())}${state.attachments.length ? " · fichiers à joindre de nouveau après rechargement" : ""}`;
  }

  function scheduleSave() {
    state.dirty = true;
    window.clearTimeout(state.saveTimer);
    state.saveTimer = window.setTimeout(() => saveDraft(false), 700);
    const status = state.root?.querySelector("[data-draft-status]");
    if (status) status.textContent = "Modifications en cours…";
  }

  function moduleOptions(selected = -1) {
    return `<option value="-1" ${Number(selected) < 0 ? "selected" : ""}>Cours entier</option>${state.draft.modules.map((module, index) =>
      `<option value="${index}" ${Number(selected) === index ? "selected" : ""}>M${String(index + 1).padStart(2, "0")} · ${utils.escapeHtml(module.title || `Module ${index + 1}`)}</option>`
    ).join("")}`;
  }

  function attachmentTargetOptions(item) {
    const selected = Number(item.pageIndex) >= 0 ? `page:${item.moduleIndex}:${item.pageIndex}` : Number(item.moduleIndex) >= 0 ? `module:${item.moduleIndex}` : "course";
    const options = [{ value: "course", label: "Cours entier" }];
    state.draft.modules.forEach((module, moduleIndex) => {
      options.push({ value: `module:${moduleIndex}`, label: `M${moduleIndex + 1} · ${module.title || "Sans titre"}` });
      module.pages.forEach((page, pageIndex) => options.push({
        value: `page:${moduleIndex}:${pageIndex}`,
        label: `M${moduleIndex + 1} / P${pageIndex + 1} · ${page.title || "Sans titre"}`
      }));
    });
    return options.map((option) => `<option value="${option.value}" ${selected === option.value ? "selected" : ""}>${utils.escapeHtml(option.label)}</option>`).join("");
  }

  function field(label, path, value, options = {}) {
    const input = options.multiline
      ? `<textarea data-model-path="${path}" ${options.maxlength ? `maxlength="${options.maxlength}"` : ""} placeholder="${utils.escapeHtml(options.placeholder || "")}">${utils.escapeHtml(value || "")}</textarea>`
      : `<input data-model-path="${path}" type="${options.type || "text"}" value="${utils.escapeHtml(value || "")}" ${options.maxlength ? `maxlength="${options.maxlength}"` : ""} placeholder="${utils.escapeHtml(options.placeholder || "")}">`;
    return `<label class="tssr-field ${options.wide ? "tssr-field--wide" : ""}"><span>${label}</span>${input}${options.help ? `<small>${options.help}</small>` : ""}</label>`;
  }

  function selectField(label, path, value, options) {
    return `<label class="tssr-field"><span>${label}</span><select data-model-path="${path}">${options.map((option) =>
      `<option value="${utils.escapeHtml(option.value)}" ${String(value) === String(option.value) ? "selected" : ""}>${utils.escapeHtml(option.label)}</option>`
    ).join("")}</select></label>`;
  }

  function listField(label, path, value, placeholder) {
    return field(label, path, Array.isArray(value) ? value.join("\n") : value, { multiline: true, wide: true, maxlength: 4_000, placeholder, help: "Une valeur par ligne, ou séparée par une virgule.", list: true });
  }

  function editor(path, value, label = "Contenu") {
    const mode = state.editorModes.get(path) || "markdown";
    const layout = state.editorLayouts.get(path) || "split";
    return `<div class="tssr-rich-editor" data-rich-editor data-editor-path="${path}" data-mode="${mode}" data-layout="${layout}">
      <div class="tssr-rich-editor__header">
        <strong>${label}</strong>
        <div class="tssr-rich-editor__modes" role="group" aria-label="Mode d’édition">
          <button type="button" data-editor-mode="markdown" aria-pressed="${mode === "markdown"}">Markdown</button>
          <button type="button" data-editor-mode="visual" aria-pressed="${mode === "visual"}">Visuel</button>
        </div>
        <div class="tssr-rich-editor__layouts" role="group" aria-label="Disposition de l’éditeur">
          <button type="button" data-editor-layout="edit" aria-pressed="${layout === "edit"}">Édition</button>
          <button type="button" data-editor-layout="preview" aria-pressed="${layout === "preview"}">Aperçu</button>
          <button type="button" data-editor-layout="split" aria-pressed="${layout === "split"}">Côte à côte</button>
        </div>
      </div>
      <div class="tssr-rich-editor__toolbar" role="toolbar" aria-label="Mise en forme">
        <button type="button" data-editor-insert="heading" title="Titre">H</button>
        <button type="button" data-editor-insert="bold" title="Gras"><strong>B</strong></button>
        <button type="button" data-editor-insert="italic" title="Italique"><em>I</em></button>
        <button type="button" data-editor-insert="strike" title="Barré"><s>S</s></button>
        <button type="button" data-editor-insert="list" title="Liste à puces">• Liste</button>
        <button type="button" data-editor-insert="ordered" title="Liste numérotée">1. Liste</button>
        <button type="button" data-editor-insert="task" title="Liste de tâches">☐</button>
        <button type="button" data-editor-insert="quote" title="Citation">❝</button>
        <button type="button" data-editor-insert="link" title="Lien">Lien</button>
        <button type="button" data-editor-insert="table" title="Tableau">Tableau</button>
        <button type="button" data-editor-insert="code" title="Bloc de code">Code</button>
        <button type="button" data-editor-insert="admonition" title="Encadré MkDocs">Encadré</button>
        <button type="button" data-editor-insert="details" title="Détails repliables">Détails</button>
        <button type="button" data-editor-insert="tabs" title="Onglets MkDocs">Onglets</button>
        <button type="button" data-editor-insert="mermaid" title="Diagramme Mermaid">Diagramme</button>
        <button type="button" data-editor-insert="style" title="Style contrôlé">Style</button>
        <button type="button" data-editor-fullscreen title="Plein écran">⛶</button>
      </div>
      <div class="tssr-rich-editor__workspace">
        <div class="tssr-rich-editor__source">
          <textarea class="tssr-markdown-editor" data-editor-markdown spellcheck="true" aria-label="${utils.escapeHtml(label)} en Markdown">${utils.escapeHtml(value || "")}</textarea>
          <div class="tssr-visual-editor md-typeset" data-editor-visual contenteditable="true" role="textbox" aria-multiline="true" aria-label="${utils.escapeHtml(label)} en mode visuel"></div>
        </div>
        <div class="tssr-rich-editor__preview md-typeset" data-editor-preview aria-label="Aperçu sécurisé"></div>
      </div>
      <p class="tssr-help">Les fonctions avancées génèrent les syntaxes MkDocs déjà activées. Le Markdown reste toujours accessible en secours.</p>
    </div>`;
  }

  function generalPanel() {
    const g = state.draft.general;
    return `<section class="tssr-builder-panel" data-builder-panel="general">
      <div class="tssr-builder-section-heading"><div><span>01</span><h2>Informations générales</h2></div><p>Seul un identifiant technique sera généré automatiquement. Le titre vide devient « Nouveau cours ».</p></div>
      <div class="tssr-form-grid">
        ${field("Titre du cours", "general.title", g.title, { maxlength: 160, placeholder: "Nouveau cours" })}
        ${field("Titre court", "general.shortTitle", g.shortTitle, { maxlength: 80 })}
        ${field("Sous-titre", "general.subtitle", g.subtitle, { maxlength: 220, wide: true })}
        ${field("Description courte", "general.shortDescription", g.shortDescription, { maxlength: 500, wide: true, multiline: true })}
      </div>
      ${editor("general.description", g.description, "Description complète")}
      <details class="tssr-builder-advanced">
        <summary>Informations avancées</summary>
        <div class="tssr-form-grid">
          ${field("Catégorie", "general.category", g.category, { maxlength: 100 })}
          ${field("Domaine", "general.domain", g.domain, { maxlength: 100 })}
          ${field("Niveau", "general.level", g.level, { maxlength: 80 })}
          ${field("Position dans Cours", "general.order", g.order, { type: "number" })}
          ${field("Durée estimée", "general.duration", g.duration, { maxlength: 80, placeholder: "Ex. 5 jours" })}
          ${field("Formateur", "general.trainer", g.trainer, { maxlength: 120 })}
          ${field("Date de début", "general.startDate", g.startDate, { type: "date" })}
          ${field("Date de fin", "general.endDate", g.endDate, { type: "date" })}
          ${selectField("Style contrôlé", "general.style", g.style, [
            { value: "", label: "Texte normal" }, { value: "accent", label: "Accent" },
            { value: "information", label: "Information" }, { value: "success", label: "Succès" },
            { value: "warning", label: "Avertissement" }, { value: "danger", label: "Danger" }
          ])}
          ${field("Icône Material", "general.icon", g.icon, { maxlength: 80 })}
          ${field("Source officielle", "general.source", g.source, { type: "url", placeholder: "https://…" })}
          ${field("Notes pour les validateurs", "general.notes", g.notes, { multiline: true, wide: true, maxlength: 2000 })}
          ${listField("Prérequis", "general.prerequisites", g.prerequisites, "Un prérequis par ligne")}
          ${listField("Objectifs", "general.objectives", g.objectives, "Un objectif par ligne")}
          ${listField("Compétences visées", "general.skills", g.skills, "Une compétence par ligne")}
          ${listField("Mots-clés", "general.keywords", g.keywords, "réseau, sécurité…")}
          ${listField("Tags", "general.tags", g.tags, "tssr, windows…")}
          <label class="tssr-field tssr-field--check tssr-field--wide"><input type="checkbox" data-model-path="general.includeInPath" ${g.includeInPath ? "checked" : ""}> <span>Ajouter aussi une carte dans le parcours chronologique approuvé</span></label>
        </div>
      </details>
    </section>`;
  }

  function renderPageCard(page, moduleIndex, pageIndex) {
    const path = `modules.${moduleIndex}.pages.${pageIndex}`;
    return `<article class="tssr-subitem-card" data-page-card>
      <div class="tssr-item-card__header"><strong>Page ${pageIndex + 1}</strong><div class="tssr-item-actions">
        <button type="button" data-struct-action="page-up" data-module-index="${moduleIndex}" data-index="${pageIndex}" aria-label="Monter la page">↑</button>
        <button type="button" data-struct-action="page-down" data-module-index="${moduleIndex}" data-index="${pageIndex}" aria-label="Descendre la page">↓</button>
        <button type="button" data-struct-action="page-remove" data-module-index="${moduleIndex}" data-index="${pageIndex}" aria-label="Supprimer la page">×</button>
      </div></div>
      <div class="tssr-form-grid">
        ${field("Titre", `${path}.title`, page.title, { maxlength: 160 })}
        ${selectField("Type", `${path}.type`, page.type, ["cours", "chapitre", "fiche", "resume", "procedure", "tutoriel"].map((value) => ({ value, label: value.charAt(0).toUpperCase() + value.slice(1) })))}
        ${field("Description", `${path}.description`, page.description, { maxlength: 500, wide: true })}
      </div>
      ${editor(`${path}.content`, page.content, `Contenu de la page ${pageIndex + 1}`)}
    </article>`;
  }

  function renderModuleCard(module, index) {
    const path = `modules.${index}`;
    return `<article class="tssr-item-card" data-module-card="${utils.escapeHtml(module.clientId)}">
      <div class="tssr-item-card__header">
        <div><span class="tssr-item-number">M${String(index + 1).padStart(2, "0")}</span><h3>${utils.escapeHtml(module.title || `Module ${index + 1}`)}</h3></div>
        <div class="tssr-item-actions">
          <button type="button" data-struct-action="module-up" data-index="${index}" aria-label="Monter le module">↑</button>
          <button type="button" data-struct-action="module-down" data-index="${index}" aria-label="Descendre le module">↓</button>
          <button type="button" data-struct-action="module-duplicate" data-index="${index}">Dupliquer</button>
          <button type="button" class="tssr-action--danger" data-struct-action="module-remove" data-index="${index}">Supprimer</button>
        </div>
      </div>
      <div class="tssr-form-grid">
        ${field("Titre", `${path}.title`, module.title, { maxlength: 160 })}
        ${field("Sous-titre", `${path}.subtitle`, module.subtitle, { maxlength: 220 })}
        ${field("Description", `${path}.description`, module.description, { maxlength: 1000, wide: true, multiline: true })}
      </div>
      ${editor(`${path}.content`, module.content, `Contenu du module ${index + 1}`)}
      <div class="tssr-nested-list">
        <div class="tssr-nested-list__header"><h4>Pages complémentaires</h4><button type="button" class="tssr-action" data-struct-action="page-add" data-module-index="${index}">＋ Ajouter une page</button></div>
        ${module.pages.length ? module.pages.map((page, pageIndex) => renderPageCard(page, index, pageIndex)).join("") : '<div class="tssr-builder-empty">Aucune page complémentaire. Le contenu principal du module reste suffisant.</div>'}
      </div>
    </article>`;
  }

  function modulesPanel() {
    return `<section class="tssr-builder-panel" data-builder-panel="modules" hidden>
      <div class="tssr-builder-section-heading"><div><span>02</span><h2>Modules et pages</h2></div><button type="button" class="tssr-action tssr-action--primary" data-struct-action="module-add">＋ Ajouter un module</button></div>
      <div class="tssr-builder-list">${state.draft.modules.length ? state.draft.modules.map(renderModuleCard).join("") : '<div class="tssr-builder-empty"><strong>Aucun module ajouté.</strong><p>Un cours minimal peut être soumis ainsi, ou enrichi maintenant.</p><button type="button" class="tssr-action" data-struct-action="module-add">＋ Ajouter un module</button></div>'}</div>
    </section>`;
  }

  function exerciseCard(item, index) {
    const path = `exercises.${index}`;
    return `<article class="tssr-item-card"><div class="tssr-item-card__header"><h3>Exercice ${index + 1}</h3><button type="button" class="tssr-action tssr-action--danger" data-struct-action="exercise-remove" data-index="${index}">Supprimer</button></div>
      <div class="tssr-form-grid">
        ${field("Titre", `${path}.title`, item.title, { maxlength: 160 })}
        ${selectField("Module associé", `${path}.moduleIndex`, item.moduleIndex, [{ value: -1, label: "Cours entier" }, ...state.draft.modules.map((module, moduleIndex) => ({ value: moduleIndex, label: `M${moduleIndex + 1} · ${module.title || "Sans titre"}` }))])}
        ${selectField("Difficulté", `${path}.difficulty`, item.difficulty, [{ value: "", label: "Non précisée" }, { value: "debutant", label: "Débutant" }, { value: "intermediaire", label: "Intermédiaire" }, { value: "avance", label: "Avancé" }])}
        ${field("Durée", `${path}.duration`, item.duration, { maxlength: 80 })}
        ${field("Type", `${path}.type`, item.type, { maxlength: 80 })}
        ${listField("Tags", `${path}.tags`, item.tags, "pratique, réseau…")}
      </div>
      ${editor(`${path}.instructions`, item.instructions, "Consigne")}
      ${editor(`${path}.hint`, item.hint, "Indice")}
      ${editor(`${path}.solution`, item.solution, "Correction / solution")}
    </article>`;
  }

  function labCard(item, index) {
    const path = `labs.${index}`;
    return `<article class="tssr-item-card"><div class="tssr-item-card__header"><h3>TP ${index + 1}</h3><button type="button" class="tssr-action tssr-action--danger" data-struct-action="lab-remove" data-index="${index}">Supprimer</button></div>
      <div class="tssr-form-grid">
        ${field("Titre", `${path}.title`, item.title, { maxlength: 160 })}
        ${selectField("Module associé", `${path}.moduleIndex`, item.moduleIndex, [{ value: -1, label: "Cours entier" }, ...state.draft.modules.map((module, moduleIndex) => ({ value: moduleIndex, label: `M${moduleIndex + 1} · ${module.title || "Sans titre"}` }))])}
        ${field("Objectif", `${path}.objective`, item.objective, { maxlength: 1000, wide: true })}
        ${field("Environnement", `${path}.environment`, item.environment, { maxlength: 1000, wide: true, multiline: true })}
        ${field("Durée", `${path}.duration`, item.duration, { maxlength: 80 })}
        ${listField("Prérequis", `${path}.prerequisites`, item.prerequisites, "Un prérequis par ligne")}
      </div>
      ${editor(`${path}.steps`, item.steps, "Étapes")}
      ${editor(`${path}.resources`, item.resources, "Ressources du TP")}
      ${editor(`${path}.correction`, item.correction, "Correction / solution")}
    </article>`;
  }

  function activitiesPanel() {
    return `<section class="tssr-builder-panel" data-builder-panel="activities" hidden>
      <div class="tssr-builder-section-heading"><div><span>03</span><h2>Exercices et travaux pratiques</h2></div></div>
      <div class="tssr-builder-subsection"><div class="tssr-nested-list__header"><h3>Exercices</h3><button type="button" class="tssr-action" data-struct-action="exercise-add">＋ Ajouter un exercice</button></div>
        ${state.draft.exercises.length ? state.draft.exercises.map(exerciseCard).join("") : '<div class="tssr-builder-empty">Aucun exercice.</div>'}</div>
      <div class="tssr-builder-subsection"><div class="tssr-nested-list__header"><h3>Travaux pratiques</h3><button type="button" class="tssr-action" data-struct-action="lab-add">＋ Ajouter un TP</button></div>
        ${state.draft.labs.length ? state.draft.labs.map(labCard).join("") : '<div class="tssr-builder-empty">Aucun TP.</div>'}</div>
    </section>`;
  }

  function questionCard(question, quizIndex, questionIndex) {
    const path = `quizzes.${quizIndex}.questions.${questionIndex}`;
    return `<div class="tssr-subitem-card"><div class="tssr-item-card__header"><strong>Question ${questionIndex + 1}</strong><button type="button" data-struct-action="question-remove" data-quiz-index="${quizIndex}" data-index="${questionIndex}">×</button></div>
      <div class="tssr-form-grid">
        ${field("Question", `${path}.question`, question.question, { maxlength: 1000, wide: true })}
        ${listField("Réponses proposées", `${path}.answers`, question.answers, "Une réponse par ligne")}
        ${field("Bonne réponse", `${path}.correctAnswer`, question.correctAnswer, { maxlength: 500 })}
        ${field("Explication", `${path}.explanation`, question.explanation, { maxlength: 2000, multiline: true, wide: true })}
      </div></div>`;
  }

  function quizCard(item, index) {
    const path = `quizzes.${index}`;
    return `<article class="tssr-item-card"><div class="tssr-item-card__header"><h3>${item.kind === "kahoot" ? "Kahoot" : "Quiz"} ${index + 1}</h3><button type="button" class="tssr-action tssr-action--danger" data-struct-action="quiz-remove" data-index="${index}">Supprimer</button></div>
      <div class="tssr-form-grid">
        ${field("Titre", `${path}.title`, item.title, { maxlength: 160 })}
        ${selectField("Type", `${path}.kind`, item.kind, [{ value: "kahoot", label: "Kahoot (lien officiel)" }, { value: "quiz", label: "Quiz interne" }])}
        ${field("Description", `${path}.description`, item.description, { maxlength: 1000, multiline: true, wide: true })}
        ${field("Lien officiel", `${path}.url`, item.url, { type: "url", placeholder: "https://create.kahoot.it/share/…", wide: true })}
        ${field("Difficulté", `${path}.difficulty`, item.difficulty, { maxlength: 60 })}
        ${field("Catégorie", `${path}.category`, item.category, { maxlength: 100 })}
        ${selectField("Module associé", `${path}.moduleIndex`, item.moduleIndex, [{ value: -1, label: "Cours entier" }, ...state.draft.modules.map((module, moduleIndex) => ({ value: moduleIndex, label: `M${moduleIndex + 1} · ${module.title || "Sans titre"}` }))])}
      </div>
      ${state.mode === "edit" && item.storage?.path ? editor(`${path}.content`, item.content || "", "Contenu Markdown existant") : ""}
      <div class="tssr-nested-list"><div class="tssr-nested-list__header"><h4>Questions facultatives</h4><button type="button" class="tssr-action" data-struct-action="question-add" data-quiz-index="${index}">＋ Ajouter une question</button></div>
        ${item.questions.length ? item.questions.map((question, questionIndex) => questionCard(question, index, questionIndex)).join("") : '<div class="tssr-builder-empty">Aucune question interne. Le lien Kahoot suffit.</div>'}</div>
    </article>`;
  }

  function quizzesPanel() {
    return `<section class="tssr-builder-panel" data-builder-panel="quizzes" hidden>
      <div class="tssr-builder-section-heading"><div><span>04</span><h2>Quiz et Kahoots</h2></div><button type="button" class="tssr-action tssr-action--primary" data-struct-action="quiz-add">＋ Ajouter</button></div>
      ${state.draft.quizzes.length ? state.draft.quizzes.map(quizCard).join("") : '<div class="tssr-builder-empty">Aucun quiz. Aucun lien fictif ne sera généré.</div>'}
    </section>`;
  }

  function glossaryCard(item, index) {
    const path = `glossaryEntries.${index}`;
    const duplicate = state.context?.terms?.find((term) => utils.slugify(term.term) === utils.slugify(item.term, ""));
    return `<article class="tssr-item-card"><div class="tssr-item-card__header"><h3>${utils.escapeHtml(item.term || `Terme ${index + 1}`)}</h3><button type="button" class="tssr-action tssr-action--danger" data-struct-action="glossary-remove" data-index="${index}">Supprimer</button></div>
      ${duplicate ? `<div class="tssr-form-error">Ce terme existe déjà. Supprimez ce nouveau terme et associez « ${utils.escapeHtml(duplicate.term)} » ci-dessus.</div>` : ""}
      <div class="tssr-form-grid">
        ${field("Terme", `${path}.term`, item.term, { maxlength: 120 })}
        ${field("Développement de l’acronyme", `${path}.fullName`, item.fullName, { maxlength: 220 })}
        ${field("Définition", `${path}.definition`, item.definition, { maxlength: 420, multiline: true, wide: true })}
        ${listField("Alias", `${path}.aliases`, item.aliases, "Un alias par ligne")}
        ${listField("Mots-clés", `${path}.keywords`, item.keywords, "Un mot-clé par ligne")}
        ${selectField("Module associé", `${path}.moduleIndex`, item.moduleIndex, [{ value: -1, label: "Présentation du cours" }, ...state.draft.modules.map((module, moduleIndex) => ({ value: moduleIndex, label: `M${moduleIndex + 1} · ${module.title || "Sans titre"}` }))])}
      </div></article>`;
  }

  function glossaryPanel() {
    const linked = state.draft.existingGlossary.map((item) => state.context?.terms?.find((term) => term.id === item.id)).filter(Boolean);
    return `<section class="tssr-builder-panel" data-builder-panel="glossary" hidden>
      <div class="tssr-builder-section-heading"><div><span>05</span><h2>Termes de glossaire</h2></div><button type="button" class="tssr-action" data-struct-action="glossary-add">＋ Ajouter un terme</button></div>
      <div class="tssr-glossary-linker">
        <label class="tssr-field"><span>Associer un terme existant</span><input type="search" data-existing-term-input list="tssr-existing-terms" placeholder="DHCP, DNS, IPv4…"><datalist id="tssr-existing-terms">${(state.context?.terms || []).map((term) => `<option value="${utils.escapeHtml(term.term)}">${utils.escapeHtml(term.full_name || "")}</option>`).join("")}</datalist></label>
        <label class="tssr-field"><span>Module</span><select data-existing-term-module>${moduleOptions(-1)}</select></label>
        <button type="button" class="tssr-action" data-struct-action="glossary-link">Associer</button>
      </div>
      <div class="tssr-linked-terms">${linked.length ? linked.map((term, index) => `<span>${utils.escapeHtml(term.term)} <button type="button" data-struct-action="glossary-unlink" data-index="${index}" aria-label="Retirer ${utils.escapeHtml(term.term)}">×</button></span>`).join("") : '<span class="tssr-muted">Aucun terme existant associé.</span>'}</div>
      ${state.draft.glossaryEntries.length ? state.draft.glossaryEntries.map(glossaryCard).join("") : '<div class="tssr-builder-empty">Aucun nouveau terme. La source de vérité du glossaire ne sera pas modifiée.</div>'}
    </section>`;
  }

  function resourceCard(item, index) {
    const path = `resources.${index}`;
    return `<article class="tssr-subitem-card"><div class="tssr-item-card__header"><strong>Ressource ${index + 1}</strong><button type="button" data-struct-action="resource-remove" data-index="${index}">×</button></div>
      <div class="tssr-form-grid">
        ${field("Titre", `${path}.title`, item.title, { maxlength: 160 })}
        ${field("URL HTTPS", `${path}.url`, item.url, { type: "url", placeholder: "https://…" })}
        ${field("Description", `${path}.description`, item.description, { maxlength: 1000, multiline: true, wide: true })}
        ${selectField("Type", `${path}.type`, item.type, ["web", "video", "documentation", "outil", "autre"].map((value) => ({ value, label: value.charAt(0).toUpperCase() + value.slice(1) })))}
        ${selectField("Module associé", `${path}.moduleIndex`, item.moduleIndex, [{ value: -1, label: "Cours entier" }, ...state.draft.modules.map((module, moduleIndex) => ({ value: moduleIndex, label: `M${moduleIndex + 1} · ${module.title || "Sans titre"}` }))])}
      </div></article>`;
  }

  function attachmentCard(item, index) {
    const existing = item.kind === "existing";
    const name = item.file?.name || item.name || item.path || "Fichier";
    const byteSize = item.file?.size ?? item.size ?? 0;
    const size = byteSize ? new Intl.NumberFormat("fr-FR", { style: "unit", unit: "kilobyte", maximumFractionDigits: 0 }).format(byteSize / 1024) : "taille non fournie";
    const objectUrl = item.objectUrl || (item.publicPath ? siteUrl(item.publicPath) : "");
    const mediaType = String(item.mediaType || "application/octet-stream");
    const preview = mediaType.startsWith("image/")
      ? `<img src="${utils.escapeHtml(objectUrl)}" alt="${utils.escapeHtml(item.alt || name)}">`
      : mediaType === "application/pdf"
        ? `<object type="application/pdf" data="${utils.escapeHtml(objectUrl)}"><p>Aperçu PDF indisponible.</p></object>`
        : '<span class="tssr-file-icon" aria-hidden="true">📄</span>';
    const openLink = objectUrl && (existing || mediaType === "application/pdf")
      ? `<a class="tssr-action" href="${utils.escapeHtml(objectUrl)}" target="_blank" rel="noopener noreferrer">${existing ? "Ouvrir" : "Ouvrir l’aperçu PDF"}</a>`
      : "";
    return `<article class="tssr-file-card${existing ? " tssr-file-card--existing" : ""}" data-attachment-index="${index}">${preview}<div class="tssr-file-card__body"><strong>${utils.escapeHtml(name)}</strong><span>${existing ? "Fichier existant · " : "Nouveau fichier · "}${utils.escapeHtml(mediaType)} · ${size}</span>
      <div class="tssr-form-grid">
        <label class="tssr-field"><span>Titre</span><input data-attachment-field="title" value="${utils.escapeHtml(item.title || "")}"></label>
        <label class="tssr-field"><span>Emplacement publié</span><select data-attachment-field="target">${attachmentTargetOptions(item)}</select></label>
        ${mediaType.startsWith("image/") ? `<label class="tssr-field"><span>Texte alternatif</span><input data-attachment-field="alt" value="${utils.escapeHtml(item.alt || "")}"></label><label class="tssr-field"><span>Légende</span><input data-attachment-field="caption" value="${utils.escapeHtml(item.caption || "")}"></label><label class="tssr-field tssr-field--check tssr-field--wide"><input type="checkbox" data-cover-attachment="${utils.escapeHtml(item.id)}" ${state.draft.general.coverAttachmentId === item.id ? "checked" : ""}> <span>Utiliser comme image de couverture du cours</span></label>` : ""}
      </div>${openLink}<button type="button" class="tssr-action tssr-action--danger" data-struct-action="attachment-remove" data-index="${index}">${existing ? "Dissocier du cours" : "Retirer"}</button></div></article>`;
  }

  function resourcesPanel() {
    return `<section class="tssr-builder-panel" data-builder-panel="resources" hidden>
      <div class="tssr-builder-section-heading"><div><span>06</span><h2>Ressources, fichiers et PDF</h2></div><button type="button" class="tssr-action" data-struct-action="resource-add">＋ Ajouter un lien</button></div>
      <div class="tssr-builder-subsection"><h3>Liens externes</h3>${state.draft.resources.length ? state.draft.resources.map(resourceCard).join("") : '<div class="tssr-builder-empty">Aucun lien externe.</div>'}</div>
      <div class="tssr-builder-subsection"><div class="tssr-file-drop" data-file-drop><strong>Ajouter des fichiers</strong><p>Images, PDF, documents Office, archives et fichiers techniques autorisés. Maximum : 12 fichiers et 12 Mo au total.</p><label class="tssr-action tssr-action--primary">Choisir des fichiers<input type="file" data-file-input multiple accept=".png,.jpg,.jpeg,.webp,.gif,.pdf,.txt,.cfg,.conf,.ini,.csv,.json,.yaml,.yml,.xml,.zip,.xlsx,.pptx,.pka,.bat,.cmd,.ps1,.sh" hidden></label></div>
        <div class="tssr-file-list">${state.attachments.length ? state.attachments.map(attachmentCard).join("") : '<div class="tssr-builder-empty">Aucun fichier. Les fichiers ne sont jamais publiés avant le consensus.</div>'}</div>
      </div>
    </section>`;
  }

  function compilePreviewMarkdown() {
    const d = state.draft;
    if (state.mode === "edit") {
      const documents = [d.general.description];
      d.modules.forEach((module) => {
        if (module.content) documents.push(module.content);
        module.pages.forEach((page) => { if (page.content) documents.push(page.content); });
      });
      d.exercises.forEach((item) => { if (item.instructions) documents.push(item.instructions); });
      d.labs.forEach((item) => {
        if (item.resources) documents.push(item.resources);
        if (item.steps) documents.push(item.steps);
        if (item.correction) documents.push(item.correction);
      });
      d.quizzes.forEach((item) => { if (item.content) documents.push(item.content); });
      return documents.filter(Boolean).join("\n\n---\n\n");
    }
    const lines = [`# ${d.general.title || "Nouveau cours"}`, ""];
    if (d.general.subtitle) lines.push(`*${d.general.subtitle}*`, "");
    if (d.general.shortDescription) lines.push(d.general.shortDescription, "");
    if (d.general.description) lines.push(d.general.description, "");
    if (d.general.objectives.length) lines.push("## Objectifs", "", ...d.general.objectives.map((item) => `- ${item}`), "");
    if (d.modules.length) {
      lines.push("## Modules", "");
      d.modules.forEach((module, index) => {
        lines.push(`### Module ${String(index + 1).padStart(2, "0")} — ${module.title || `Module ${index + 1}`}`, "");
        if (module.description) lines.push(module.description, "");
        if (module.content) lines.push(module.content, "");
        module.pages.forEach((page) => lines.push(`#### ${page.title || "Nouvelle page"}`, "", page.content || "Contenu à compléter.", ""));
      });
    }
    if (d.exercises.length) lines.push("## Exercices", "", ...d.exercises.flatMap((item, index) => [`### ${index + 1}. ${item.title || "Exercice"}`, item.instructions || "Consigne à compléter.", ""]));
    if (d.labs.length) lines.push("## Travaux pratiques", "", ...d.labs.flatMap((item, index) => [`### TP ${index + 1} — ${item.title || "TP"}`, item.steps || "Étapes à compléter.", ""]));
    if (d.quizzes.length) lines.push("## Quiz et Kahoots", "", ...d.quizzes.flatMap((item) => [`### ${item.title || "Quiz"}`, item.description || "", item.url ? `[Jouer sur Kahoot](${item.url})` : "", ""]));
    if (d.glossaryEntries.length || d.existingGlossary.length) lines.push("## Glossaire lié", "", ...d.glossaryEntries.map((item) => `- **${item.term || "Terme"}** — ${item.definition || "Définition à compléter."}`), ...state.draft.existingGlossary.map((item) => `- Terme existant : **${state.context?.terms?.find((term) => term.id === item.id)?.term || item.id}**`), "");
    if (d.resources.length) lines.push("## Ressources", "", ...d.resources.map((item) => `- [${item.title || "Ressource"}](${item.url || "#"})`));
    return lines.join("\n");
  }

  function previewPanel() {
    return `<section class="tssr-builder-panel" data-builder-panel="preview" hidden>
      <div class="tssr-builder-section-heading"><div><span>07</span><h2>Prévisualisation globale</h2></div><div class="tssr-preview-widths" role="group" aria-label="Largeur de prévisualisation"><button type="button" data-preview-width="desktop" aria-pressed="true">Ordinateur</button><button type="button" data-preview-width="tablet">Tablette</button><button type="button" data-preview-width="mobile">Téléphone</button></div></div>
      <div class="tssr-course-global-preview md-typeset" data-global-preview></div>
      <div class="tssr-preview-files">${state.attachments.map(attachmentCard).join("")}</div>
      <p class="tssr-help">L’aperçu utilise le renderer sécurisé existant. Le build MkDocs strict reste la validation définitive du rendu Material.</p>
    </section>`;
  }

  function submitPanel() {
    const summary = utils.summarize({ ...state.draft, attachments: state.attachments });
    const diff = state.mode === "edit" ? utils.editorDiff(state.originalDraft, state.draft, state.originalAttachments, state.attachments) : null;
    const diffRows = diff?.changes.map((item) => `<li class="tssr-editor-diff__${item.type}"><span>${item.type === "added" ? "Ajouté" : item.type === "removed" ? "Supprimé" : "Modifié"}</span><strong>${utils.escapeHtml(item.label)}</strong><small>${utils.escapeHtml(sectionLabels[item.section] || item.section)}</small></li>`).join("") || "";
    return `<section class="tssr-builder-panel" data-builder-panel="submit" hidden>
      <div class="tssr-builder-section-heading"><div><span>08</span><h2>${state.mode === "edit" ? "Proposition de modification" : "Soumission communautaire"}</h2></div></div>
      <div class="tssr-submit-summary">
        <h3>${utils.escapeHtml(summary.title)}</h3>
        <dl><div><dt>Modules</dt><dd>${summary.modules}</dd></div><div><dt>Pages</dt><dd>${summary.pages}</dd></div><div><dt>Exercices</dt><dd>${summary.exercises}</dd></div><div><dt>TP</dt><dd>${summary.labs}</dd></div><div><dt>Quiz / Kahoot</dt><dd>${summary.quizzes}</dd></div><div><dt>Glossaire</dt><dd>${summary.glossary}</dd></div><div><dt>Fichiers</dt><dd>${summary.files} (${summary.pdfs} PDF)</dd></div></dl>
      </div>
      ${diff ? `<div class="tssr-editor-diff"><div class="tssr-editor-diff__summary"><span>${diff.added} ajout(s)</span><span>${diff.modified} modification(s)</span><span>${diff.removed} suppression(s)</span></div>${diff.total ? `<ul>${diffRows}</ul>` : '<div class="tssr-builder-empty"><strong>Aucune modification détectée.</strong><p>La soumission est désactivée tant que le cours reste identique à sa version chargée.</p></div>'}</div>` : ""}
      <div class="tssr-submit-flow" aria-label="Workflow de publication"><span>Vous</span><i>→</i><span>Proposition</span><i>→</i><span>Validation communautaire</span><i>→</i><span>GitHub + build strict</span><i>→</i><span>Site public</span></div>
      <p>La proposition sera enregistrée avec votre identité serveur. Elle ne sera pas visible publiquement avant le consensus défini par le projet.</p>
      <label class="tssr-field"><span>Description pour les validateurs</span><textarea data-proposal-description maxlength="1000" placeholder="Contexte facultatif de cette ${state.mode === "edit" ? "modification" : "création"}">${utils.escapeHtml(state.proposalDescription)}</textarea></label>
      <div class="tssr-form-message" data-submit-message hidden></div>
      ${state.previewMode ? '<div class="tssr-form-error">Mode aperçu local : la soumission est volontairement désactivée.</div>' : ""}
      <button type="button" class="tssr-action tssr-action--primary tssr-submit-course" data-submit-course ${state.submitting || state.previewMode || diff && !diff.total ? "disabled" : ""}>${state.mode === "edit" ? "Proposer les modifications" : "Soumettre le cours pour validation"}</button>
    </section>`;
  }

  function shell() {
    const summary = utils.summarize({ ...state.draft, attachments: state.attachments });
    return `<div class="tssr-builder-header">
      <div><span class="tssr-hero__badge">${state.previewMode ? "Aperçu local · soumission désactivée" : state.mode === "edit" ? "Mode modification · version publiée chargée" : "Contribution structurée"}</span><h2>${utils.escapeHtml(state.draft.general.title || "Nouveau cours")}</h2><p>${state.mode === "edit" ? `Chemin conservé : <code>${utils.escapeHtml(state.meta?.coursePath?.replace(/^docs\//, "") || state.coursePath)}</code>` : `Chemin prévu : <code>modules/…-${utils.slugify(state.draft.general.title)}/</code>`}</p></div>
      <div class="tssr-builder-header__actions"><span data-draft-status>Brouillon local prêt</span><button type="button" class="tssr-action" data-save-draft>Enregistrer le brouillon</button><button type="button" class="tssr-action tssr-action--danger" data-reset-draft>Réinitialiser</button></div>
    </div>
    <nav class="tssr-builder-nav" aria-label="Sections du formulaire">${Object.entries(sectionLabels).map(([id, label], index) => `<button type="button" data-builder-section="${id}" aria-current="${state.activeSection === id ? "step" : "false"}"><span>${String(index + 1).padStart(2, "0")}</span>${label}</button>`).join("")}</nav>
    <form class="tssr-course-form" novalidate>
      ${generalPanel()}${modulesPanel()}${activitiesPanel()}${quizzesPanel()}${glossaryPanel()}${resourcesPanel()}${previewPanel()}${submitPanel()}
    </form>
    <div class="tssr-builder-mobile-footer"><button type="button" class="tssr-action" data-previous-section>Précédent</button><span>${utils.escapeHtml(sectionLabels[state.activeSection])}</span><button type="button" class="tssr-action tssr-action--primary" data-next-section>Suivant</button></div>
    <span class="tssr-builder-sr-status" role="status">${summary.modules} modules, ${summary.pages} pages, ${summary.files} fichiers.</span>`;
  }

  function getAtPath(path) {
    return path.split(".").reduce((value, part) => value?.[Number.isNaN(Number(part)) ? part : Number(part)], state.draft);
  }

  function setAtPath(path, value) {
    const parts = path.split(".");
    const last = parts.pop();
    const target = parts.reduce((current, part) => current[Number.isNaN(Number(part)) ? part : Number(part)], state.draft);
    target[Number.isNaN(Number(last)) ? last : Number(last)] = value;
    scheduleSave();
  }

  function preprocessPreview(markdown) {
    return String(markdown || "").replace(/^!!!\s+(\w+)(?:\s+"([^"]+)")?\n((?: {4}.*(?:\n|$))+)/gm, function (_, type, title, body) {
      const clean = body.split("\n").map((line) => line.replace(/^ {4}/, "")).join("\n");
      return `<div class="admonition ${utils.escapeHtml(type)}"><p class="admonition-title">${utils.escapeHtml(title || type)}</p>\n\n${clean}\n\n</div>`;
    });
  }

  function renderSecurePreview(markdown, target) {
    bridge()?.renderPreview?.(preprocessPreview(markdown), target);
    target.querySelectorAll("pre > code.language-mermaid").forEach((code) => {
      const diagram = document.createElement("div");
      diagram.className = "mermaid";
      diagram.textContent = code.textContent;
      code.parentElement.replaceWith(diagram);
    });
    window.renderTssrMermaid?.();
  }

  function bindEditors() {
    state.root.querySelectorAll("[data-rich-editor]").forEach((wrapper) => {
      const path = wrapper.dataset.editorPath;
      const markdown = wrapper.querySelector("[data-editor-markdown]");
      const visual = wrapper.querySelector("[data-editor-visual]");
      const preview = wrapper.querySelector("[data-editor-preview]");
      const refreshPreview = () => renderSecurePreview(markdown.value, preview);
      const refreshVisual = () => {
        renderSecurePreview(markdown.value, visual);
        visual.querySelectorAll("a").forEach((link) => link.removeAttribute("target"));
      };
      refreshPreview();
      refreshVisual();
      markdown.addEventListener("input", () => {
        setAtPath(path, markdown.value);
        refreshPreview();
      });
      visual.addEventListener("input", () => {
        const converted = utils.htmlToMarkdown(visual);
        markdown.value = converted;
        setAtPath(path, converted);
        refreshPreview();
      });
      wrapper.querySelectorAll("[data-editor-mode]").forEach((button) => button.addEventListener("click", () => {
        const mode = button.dataset.editorMode;
        if (mode === "visual") refreshVisual();
        state.editorModes.set(path, mode);
        wrapper.dataset.mode = mode;
        wrapper.querySelectorAll("[data-editor-mode]").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      }));
      wrapper.querySelectorAll("[data-editor-layout]").forEach((button) => button.addEventListener("click", () => {
        const layout = button.dataset.editorLayout;
        state.editorLayouts.set(path, layout);
        wrapper.dataset.layout = layout;
        wrapper.querySelectorAll("[data-editor-layout]").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      }));
      wrapper.querySelectorAll("[data-editor-insert]").forEach((button) => button.addEventListener("click", () => {
        const snippets = {
          heading: ["## ", "", "Titre"], bold: ["**", "**", "texte en gras"], italic: ["*", "*", "texte en italique"],
          strike: ["~~", "~~", "texte barré"], list: ["- ", "", "élément"], ordered: ["1. ", "", "élément"],
          task: ["- [ ] ", "", "tâche"], quote: ["> ", "", "citation"], link: ["[", "](https://)", "libellé"],
          table: ["| Colonne 1 | Colonne 2 |\n| --- | --- |\n| Valeur 1 | Valeur 2 |\n", "", ""],
          code: ["```bash title=\"Exemple\" linenums=\"1\"\n", "\n```", "commande --option"],
          admonition: ["!!! info \"Information\"\n    ", "", "Contenu de l’encadré"],
          details: ["??? note \"Détails\"\n    ", "", "Contenu repliable"],
          tabs: ["=== \"Onglet 1\"\n\n    Contenu du premier onglet\n\n=== \"Onglet 2\"\n\n    ", "", "Contenu du second onglet"],
          mermaid: ["```mermaid\nflowchart LR\n    PC --> Switch\n    Switch --> Router\n", "\n```", ""],
          style: ["<span class=\"tssr-text-accent\">", "</span>", "texte accentué"]
        };
        const snippet = snippets[button.dataset.editorInsert];
        if (!snippet) return;
        if (wrapper.dataset.mode === "visual") {
          state.editorModes.set(path, "markdown");
          wrapper.dataset.mode = "markdown";
          wrapper.querySelectorAll("[data-editor-mode]").forEach((item) => item.setAttribute("aria-pressed", String(item.dataset.editorMode === "markdown")));
        }
        utils.insertIntoTextarea(markdown, ...snippet);
      }));
      wrapper.querySelector("[data-editor-fullscreen]").addEventListener("click", () => wrapper.classList.toggle("is-fullscreen"));
    });
  }

  function showSection(id) {
    if (!sectionLabels[id]) return;
    state.activeSection = id;
    state.root.querySelectorAll("[data-builder-section]").forEach((button) => button.setAttribute("aria-current", button.dataset.builderSection === id ? "step" : "false"));
    state.root.querySelectorAll("[data-builder-panel]").forEach((panel) => { panel.hidden = panel.dataset.builderPanel !== id; });
    state.root.querySelector(".tssr-builder-mobile-footer span").textContent = sectionLabels[id];
    if (id === "preview") renderGlobalPreview();
    if (id === "submit") rerender(false);
    state.root.querySelector(".tssr-builder-panel:not([hidden])")?.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  function renderGlobalPreview() {
    const target = state.root.querySelector("[data-global-preview]");
    if (target) renderSecurePreview(compilePreviewMarkdown(), target);
  }

  function rerender(scroll = true) {
    if (!state.root?.isConnected) return;
    state.root.innerHTML = shell();
    bindRootEvents();
    bindEditors();
    state.root.querySelectorAll("[data-builder-panel]").forEach((panel) => { panel.hidden = panel.dataset.builderPanel !== state.activeSection; });
    if (state.activeSection === "preview") renderGlobalPreview();
    if (scroll) state.root.querySelector(`[data-builder-panel="${state.activeSection}"]`)?.scrollIntoView({ block: "start" });
  }

  function move(array, index, delta) {
    const destination = index + delta;
    if (destination < 0 || destination >= array.length) return;
    [array[index], array[destination]] = [array[destination], array[index]];
    scheduleSave(); rerender(false);
  }

  function removeWithConfirmation(array, index, message) {
    if (!window.confirm(message)) return;
    array.splice(index, 1); scheduleSave(); rerender(false);
  }

  async function handleFiles(fileList) {
    const files = Array.from(fileList || []);
    const newAttachments = state.attachments.filter((item) => item.kind !== "existing");
    if (newAttachments.length + files.length > 12) return bridge()?.toast?.("Maximum 12 nouveaux fichiers par proposition.", "error");
    let total = newAttachments.reduce((sum, item) => sum + (item.file?.size || 0), 0);
    for (const file of files) {
      if (!utils.allowedFile(file.name, file.type)) {
        bridge()?.toast?.(`${file.name} : format interdit.`, "error"); continue;
      }
      const limit = file.type === "application/pdf" ? 7_000_000 : file.type.startsWith("image/") ? 5_000_000 : 5_000_000;
      if (file.size > limit || total + file.size > 12_000_000) {
        bridge()?.toast?.(`${file.name} dépasse la limite autorisée.`, "error"); continue;
      }
      const bytes = new Uint8Array(await file.slice(0, 16).arrayBuffer());
      if (!utils.signatureMatches(bytes, file.name, file.type)) {
        bridge()?.toast?.(`${file.name} : contenu incompatible avec son extension.`, "error"); continue;
      }
      total += file.size;
      state.attachments.push({ id: utils.uid("file"), kind: "new", name: file.name, file, mediaType: file.type || "application/octet-stream", title: "", alt: "", caption: "", moduleIndex: -1, pageIndex: -1, objectUrl: URL.createObjectURL(file) });
    }
    state.dirty = true;
    rerender(false);
  }

  function handleStructure(button) {
    const action = button.dataset.structAction;
    const index = Number(button.dataset.index);
    const moduleIndex = Number(button.dataset.moduleIndex);
    const quizIndex = Number(button.dataset.quizIndex);
    if (action === "module-add") state.draft.modules.push(utils.newModule({ title: `Module ${String(state.draft.modules.length + 1).padStart(2, "0")}` }));
    else if (action === "module-up") return move(state.draft.modules, index, -1);
    else if (action === "module-down") return move(state.draft.modules, index, 1);
    else if (action === "module-duplicate") {
      const duplicate = utils.clone(state.draft.modules[index]); duplicate.clientId = utils.uid("module"); duplicate.title = `${duplicate.title || "Module"} — copie`; state.draft.modules.splice(index + 1, 0, duplicate);
    } else if (action === "module-remove") return removeWithConfirmation(state.draft.modules, index, "Supprimer ce module et toutes ses pages ?");
    else if (action === "page-add") state.draft.modules[moduleIndex].pages.push(utils.newPage());
    else if (action === "page-up") return move(state.draft.modules[moduleIndex].pages, index, -1);
    else if (action === "page-down") return move(state.draft.modules[moduleIndex].pages, index, 1);
    else if (action === "page-remove") return removeWithConfirmation(state.draft.modules[moduleIndex].pages, index, "Supprimer cette page et son contenu ?");
    else if (action === "exercise-add") state.draft.exercises.push(utils.newExercise());
    else if (action === "exercise-remove") return removeWithConfirmation(state.draft.exercises, index, "Supprimer cet exercice ?");
    else if (action === "lab-add") state.draft.labs.push(utils.newLab());
    else if (action === "lab-remove") return removeWithConfirmation(state.draft.labs, index, "Supprimer ce TP et sa correction ?");
    else if (action === "quiz-add") state.draft.quizzes.push(utils.newQuiz());
    else if (action === "quiz-remove") return removeWithConfirmation(state.draft.quizzes, index, "Supprimer ce quiz ?");
    else if (action === "question-add") state.draft.quizzes[quizIndex].questions.push(utils.newQuestion());
    else if (action === "question-remove") state.draft.quizzes[quizIndex].questions.splice(index, 1);
    else if (action === "glossary-add") state.draft.glossaryEntries.push(utils.newGlossaryEntry());
    else if (action === "glossary-remove") state.draft.glossaryEntries.splice(index, 1);
    else if (action === "glossary-link") {
      const input = state.root.querySelector("[data-existing-term-input]");
      const term = state.context?.terms?.find((item) => item.term.toLocaleLowerCase("fr") === input.value.trim().toLocaleLowerCase("fr"));
      if (!term) return bridge()?.toast?.("Choisissez un terme existant dans les suggestions.", "error");
      if (!state.draft.existingGlossary.some((item) => item.id === term.id)) state.draft.existingGlossary.push({ id: term.id, moduleIndex: Number(state.root.querySelector("[data-existing-term-module]").value) });
    } else if (action === "glossary-unlink") state.draft.existingGlossary.splice(index, 1);
    else if (action === "resource-add") state.draft.resources.push(utils.newResource());
    else if (action === "resource-remove") state.draft.resources.splice(index, 1);
    else if (action === "attachment-remove") {
      if (state.draft.general.coverAttachmentId === state.attachments[index].id) state.draft.general.coverAttachmentId = "";
      if (state.attachments[index].kind !== "existing" && state.attachments[index].objectUrl) URL.revokeObjectURL(state.attachments[index].objectUrl);
      state.attachments.splice(index, 1);
    } else return;
    scheduleSave(); rerender(false);
  }

  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result).split(",")[1]);
      reader.onerror = () => reject(new Error(`Lecture impossible : ${file.name}`));
      reader.readAsDataURL(file);
    });
  }

  async function submissionPayload() {
    const payload = utils.clone(utils.serializableDraft(state.draft));
    payload.attachments = await Promise.all(state.attachments.map(async (attachment) => ({
      id: attachment.id,
      kind: attachment.kind || "new",
      path: attachment.path || null,
      name: attachment.file?.name || attachment.name,
      mediaType: attachment.mediaType,
      content: attachment.kind === "existing" ? undefined : await fileToBase64(attachment.file),
      title: attachment.title,
      alt: attachment.alt,
      caption: attachment.caption,
      moduleIndex: Number(attachment.moduleIndex),
      pageIndex: Number(attachment.pageIndex)
    })));
    return payload;
  }

  function confirmationDialog(summary) {
    return new Promise((resolve) => {
      const dialog = document.createElement("dialog");
      dialog.className = "tssr-collab-dialog tssr-collab-dialog--small";
      const diff = state.mode === "edit" ? utils.editorDiff(state.originalDraft, state.draft, state.originalAttachments, state.attachments) : null;
      dialog.innerHTML = `<div class="tssr-dialog__header"><h2>Confirmer la proposition</h2><button type="button" class="tssr-dialog__close" data-confirm="false" aria-label="Fermer">×</button></div><div class="tssr-dialog__body"><p><strong>${utils.escapeHtml(summary.title)}</strong></p><ul><li>${summary.modules} module(s), ${summary.pages} page(s)</li><li>${summary.exercises} exercice(s), ${summary.labs} TP</li><li>${summary.quizzes} quiz, ${summary.glossary} terme(s)</li><li>${summary.files} fichier(s), dont ${summary.pdfs} PDF</li>${diff ? `<li>${diff.added} ajout(s), ${diff.modified} modification(s), ${diff.removed} suppression(s)</li>` : ""}</ul><p>Soumettre cette ${state.mode === "edit" ? "modification" : "création"} au vote communautaire ?</p></div><div class="tssr-dialog__footer"><button type="button" class="tssr-action" data-confirm="false">Retour</button><button type="button" class="tssr-action tssr-action--primary" data-confirm="true">Soumettre</button></div>`;
      dialog.addEventListener("click", (event) => {
        const button = event.target.closest("[data-confirm]");
        if (!button) return;
        resolve(button.dataset.confirm === "true"); dialog.close();
      });
      dialog.addEventListener("cancel", () => resolve(false), { once: true });
      dialog.addEventListener("close", () => dialog.remove(), { once: true });
      document.body.appendChild(dialog); dialog.showModal();
    });
  }

  async function submitCourse() {
    if (state.previewMode) return bridge()?.toast?.("Le mode aperçu local ne peut pas soumettre de proposition.", "error");
    if (state.submitting) return;
    const summary = utils.summarize({ ...state.draft, attachments: state.attachments });
    if (state.mode === "edit" && !utils.editorDiff(state.originalDraft, state.draft, state.originalAttachments, state.attachments).total) {
      return bridge()?.toast?.("Aucune modification n’a été détectée.", "error");
    }
    if (!await confirmationDialog(summary)) return;
    state.submitting = true;
    const button = state.root.querySelector("[data-submit-course]");
    const message = state.root.querySelector("[data-submit-message]");
    button.disabled = true; button.textContent = "Préparation et validation…";
    message.hidden = false; message.className = "tssr-form-message tssr-form-success"; message.textContent = "Validation locale et encodage sécurisé des fichiers…";
    try {
      const course = await submissionPayload();
      button.textContent = "Soumission au serveur…";
      const description = state.proposalDescription;
      const request = state.mode === "edit" ? {
        action: "modify-course",
        title: `Modification du cours « ${summary.title} »`,
        description,
        base_commit_sha: state.context.base_commit_sha,
        course_path: state.meta.coursePath,
        course_editor: { meta: state.meta, baseCommitSha: state.context.base_commit_sha, draft: course, attachments: course.attachments }
      } : {
        action: "create-course",
        title: `Ajout du cours « ${summary.title} »`,
        description,
        base_commit_sha: state.context.base_commit_sha,
        course
      };
      const result = await bridge().invoke("change-requests", request);
      localStorage.removeItem(storageKey());
      state.dirty = false;
      message.className = "tssr-form-message tssr-form-success";
      message.innerHTML = `Votre proposition de ${state.mode === "edit" ? "modification" : "nouveau cours"} a été envoyée pour validation. <a href="${siteUrl("collaboration/")}">Voir la proposition</a>. Le site public n’a pas encore été modifié.`;
      button.textContent = result.change_request?.status === "published" ? "Cours transmis au build" : "Proposition envoyée";
      bridge()?.toast?.(state.mode === "edit" ? "Proposition de modification créée." : "Proposition de cours créée.");
    } catch (error) {
      message.className = "tssr-form-message tssr-form-error";
      message.textContent = `${error.message} Votre brouillon et vos fichiers restent dans cette page.`;
      button.disabled = false; button.textContent = "Réessayer la soumission";
    } finally {
      state.submitting = false;
    }
  }

  function bindRootEvents() {
    state.root.querySelectorAll("[data-builder-section]").forEach((button) => button.addEventListener("click", () => showSection(button.dataset.builderSection)));
    state.root.querySelector("[data-save-draft]")?.addEventListener("click", () => saveDraft(true));
    state.root.querySelector("[data-reset-draft]")?.addEventListener("click", () => {
      if (!window.confirm(state.mode === "edit" ? "Rétablir exactement la version du cours chargée depuis GitHub ?" : "Réinitialiser tout le brouillon ? Les fichiers sélectionnés seront retirés.")) return;
      state.attachments.forEach((item) => { if (item.kind !== "existing" && item.objectUrl) URL.revokeObjectURL(item.objectUrl); });
      if (state.mode === "edit") {
        state.draft = utils.hydrateDraft(utils.clone(state.originalDraft));
        state.attachments = utils.clone(state.originalAttachments);
      } else {
        state.attachments = [];
        state.draft = utils.defaultDraft();
      }
      localStorage.removeItem(storageKey()); state.dirty = false; rerender(false);
    });
    state.root.querySelector(".tssr-course-form")?.addEventListener("input", (event) => {
      const control = event.target.closest("[data-model-path]");
      if (!control || control.closest("[data-rich-editor]")) return;
      const path = control.dataset.modelPath;
      const current = getAtPath(path);
      const value = control.type === "checkbox" ? control.checked : Array.isArray(current) ? utils.splitList(control.value) : control.type === "number" || control.tagName === "SELECT" && /^-?\d+$/.test(control.value) ? Number(control.value) : control.value;
      setAtPath(path, value);
      if (path === "general.title") {
        state.root.querySelector(".tssr-builder-header h2").textContent = value || "Nouveau cours";
        state.root.querySelector(".tssr-builder-header code").textContent = `modules/…-${utils.slugify(value)}/`;
      }
    });
    state.root.querySelector(".tssr-course-form")?.addEventListener("change", (event) => {
      const control = event.target.closest("[data-model-path]");
      if (!control || control.closest("[data-rich-editor]")) return;
      const current = getAtPath(control.dataset.modelPath);
      setAtPath(control.dataset.modelPath, control.type === "checkbox" ? control.checked : Array.isArray(current) ? utils.splitList(control.value) : /^-?\d+$/.test(control.value) && control.tagName === "SELECT" ? Number(control.value) : control.value);
    });
    state.root.querySelector("[data-proposal-description]")?.addEventListener("input", (event) => {
      state.proposalDescription = event.currentTarget.value;
    });
    if (!state.root.dataset.courseRootBound) {
      state.root.dataset.courseRootBound = "true";
      state.root.addEventListener("click", (event) => {
        const structural = event.target.closest("[data-struct-action]");
        if (structural) handleStructure(structural);
        const width = event.target.closest("[data-preview-width]");
        if (width) {
          const preview = state.root.querySelector("[data-global-preview]"); preview.dataset.previewWidth = width.dataset.previewWidth;
          state.root.querySelectorAll("[data-preview-width]").forEach((item) => item.setAttribute("aria-pressed", String(item === width)));
        }
        if (event.target.closest("[data-submit-course]")) submitCourse();
        if (event.target.closest("[data-previous-section], [data-next-section]")) {
          const ids = Object.keys(sectionLabels); const current = ids.indexOf(state.activeSection); const delta = event.target.closest("[data-next-section]") ? 1 : -1; showSection(ids[Math.max(0, Math.min(ids.length - 1, current + delta))]);
        }
      });
    }
    const input = state.root.querySelector("[data-file-input]");
    input?.addEventListener("change", () => handleFiles(input.files));
    const drop = state.root.querySelector("[data-file-drop]");
    drop?.addEventListener("dragover", (event) => { event.preventDefault(); drop.classList.add("is-dragging"); });
    drop?.addEventListener("dragleave", () => drop.classList.remove("is-dragging"));
    drop?.addEventListener("drop", (event) => { event.preventDefault(); drop.classList.remove("is-dragging"); handleFiles(event.dataTransfer.files); });
    state.root.querySelectorAll("[data-attachment-index]").forEach((card) => card.addEventListener("input", (event) => {
      const control = event.target.closest("[data-attachment-field]"); if (!control) return;
      const attachment = state.attachments[Number(card.dataset.attachmentIndex)];
      if (control.dataset.attachmentField === "target") {
        const [kind, moduleIndex = "-1", pageIndex = "-1"] = control.value.split(":");
        attachment.moduleIndex = kind === "course" ? -1 : Number(moduleIndex);
        attachment.pageIndex = kind === "page" ? Number(pageIndex) : -1;
      } else attachment[control.dataset.attachmentField] = control.value;
      state.dirty = true;
    }));
    state.root.querySelectorAll("[data-cover-attachment]").forEach((control) => control.addEventListener("change", () => {
      state.draft.general.coverAttachmentId = control.checked ? control.dataset.coverAttachment : "";
      state.root.querySelectorAll("[data-cover-attachment]").forEach((other) => { if (other !== control) other.checked = false; });
      scheduleSave();
    }));
  }

  async function loadContextAndRender() {
    state.root = document.getElementById("tssr-course-creator");
    if (!state.root) return;
    const current = profile();
    if (!current) {
      state.root.innerHTML = `<div class="tssr-collaboration-empty"><strong>Connexion requise</strong><p>Connectez-vous pour préparer un cours et le soumettre à la validation communautaire.</p><button type="button" class="md-button md-button--primary" data-course-login>Se connecter</button></div>`;
      state.root.querySelector("[data-course-login]")?.addEventListener("click", () => bridge()?.openLogin?.());
      return;
    }
    if (!current.can_edit) {
      state.root.innerHTML = '<div class="tssr-collaboration-empty"><strong>Permission de contribution requise</strong><p>Votre compte est connecté, mais il n’est pas autorisé à modifier la documentation.</p></div>';
      return;
    }
    if (state.initializedFor !== current.id) {
      if (state.mode === "create") loadDraft();
      state.root.innerHTML = `<div class="tssr-collaboration-empty"><strong>${state.mode === "edit" ? "Chargement complet du cours…" : "Chargement du contexte éditorial…"}</strong><p>${state.mode === "edit" ? "Lecture des pages, activités, relations, fichiers et données du glossaire depuis la version GitHub publiée." : "Vérification du commit GitHub et des termes du glossaire."}</p></div>`;
      try {
        if (state.mode === "edit") {
          const result = await bridge().invoke("change-requests", { action: "get-course-editor", course_path: state.coursePath });
          const editorModel = result.course_editor;
          state.meta = editorModel.meta;
          state.context = editorModel.context;
          state.relations = editorModel.relations;
          state.draft = utils.hydrateDraft(editorModel.draft);
          state.attachments = (editorModel.attachments || []).map((item) => ({ ...item, objectUrl: item.publicPath ? siteUrl(item.publicPath) : "" }));
          state.originalDraft = utils.clone(state.draft);
          state.originalAttachments = utils.clone(state.attachments);
          loadDraft();
        } else {
          const result = await bridge().invoke("change-requests", { action: "get-course-context" });
          state.context = result.course_context;
        }
        state.initializedFor = current.id;
      } catch (error) {
        state.root.innerHTML = `<div class="tssr-form-error"><strong>${state.mode === "edit" ? "Chargement complet impossible : modification désactivée pour éviter toute perte." : "Impossible de préparer le formulaire."}</strong><p>${utils.escapeHtml(error.message)}</p><button type="button" class="tssr-action" data-retry-context>Réessayer</button></div>`;
        state.root.querySelector("[data-retry-context]")?.addEventListener("click", loadContextAndRender);
        return;
      }
    }
    rerender(false);
  }

  function injectSidebarAction() {
    document.querySelectorAll(".tssr-sidebar-add").forEach((node) => node.remove());
    const current = profile();
    if (!current?.can_edit) return;
    document.querySelectorAll(".md-sidebar--primary .md-sidebar__scrollwrap").forEach((sidebar) => {
      const action = document.createElement("div");
      action.className = "tssr-sidebar-add";
      action.innerHTML = `<a href="${siteUrl("ajouter/")}" aria-label="Ajouter un nouveau cours"><span aria-hidden="true">＋</span> Ajouter</a>`;
      sidebar.appendChild(action);
    });
  }

  function enhance() {
    syncRequestedMode();
    syncPageModeLabels();
    injectSidebarAction();
    loadContextAndRender();
  }

  function enableLocalPreview() {
    const local = ["127.0.0.1", "localhost"].includes(window.location.hostname);
    if (!local || new URLSearchParams(window.location.search).get("tssr-course-preview") !== "1") return;
    state.previewMode = true;
    state.authProfile = { id: "local-course-preview", display_name: "Aperçu local", can_edit: true, role: "member" };
    state.context = { base_commit_sha: "0".repeat(40), terms: [], limits: {}, file_limits: {} };
    state.initializedFor = state.authProfile.id;
  }

  document.addEventListener("tssr:auth-changed", (event) => {
    state.authProfile = event.detail?.profile || null;
    if (event.detail?.courseContext && state.authProfile) {
      state.context = event.detail.courseContext;
      state.initializedFor = state.authProfile.id;
    }
    enhance();
  });
  window.addEventListener("beforeunload", (event) => {
    if (!state.dirty && !state.attachments.some((item) => item.kind !== "existing")) return;
    event.preventDefault(); event.returnValue = "";
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") document.querySelectorAll(".tssr-rich-editor.is-fullscreen").forEach((editor) => editor.classList.remove("is-fullscreen"));
  });
  window.addEventListener("pagehide", () => state.attachments.forEach((item) => { if (item.kind !== "existing" && item.objectUrl) URL.revokeObjectURL(item.objectUrl); }), { once: true });

  enableLocalPreview();
  if (typeof document$ !== "undefined") {
    document$.subscribe(enhance);
    enhance();
  } else if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", enhance, { once: true });
  else enhance();
})();
