/* Native, Markdown-first interface for the TSSR course editor. */
(function (root, factory) {
  const api = factory(root.TSSRAdvancedEditor, root.TSSRCourseCreatorUtils);
  if (typeof module === "object" && module.exports) module.exports = api;
  root.TSSRAdvancedEditorUI = api;
})(typeof window !== "undefined" ? window : globalThis, function (core, utils) {
  "use strict";

  const QUICK_COMMANDS = new Set([
    "heading", "bold", "italic", "underline", "strike", "inline-code", "highlight",
    "bullet-list", "ordered-list", "checklist", "quote", "separator", "link"
  ]);
  const INLINE_VISUAL = new Set([
    "bold", "italic", "underline", "strike", "inline-code", "superscript", "subscript",
    "highlight", "clear-format", "link", "internal-link", "glossary-link"
  ]);
  const IMMEDIATE = new Set([
    "bold", "italic", "underline", "strike", "inline-code", "superscript", "subscript",
    "highlight", "clear-format", "bullet-list", "ordered-list", "checklist", "quote",
    "separator", "indent", "outdent"
  ]);
  let dialogSequence = 0;
  let editorSequence = 0;

  function escapeHtml(value) {
    return (utils?.escapeHtml || core?.escapeHtml || String)(value ?? "");
  }

  function duplicateRawValue(value) {
    const source = String(value ?? "");
    const newline = source.includes("\r\n") ? "\r\n" : source.includes("\r") ? "\r" : "\n";
    const separator = source.endsWith(`${newline}${newline}`) ? "" : source.endsWith(newline) ? newline : `${newline}${newline}`;
    return `${separator}${source}`;
  }

  function button(command, shortLabel, label, shortcut = "") {
    return `<button type="button" class="tssr-editor-tool" data-editor-command="${command}" aria-label="${escapeHtml(label)}" title="${escapeHtml(label)}${shortcut ? ` · ${shortcut}` : ""}"${shortcut ? ` aria-keyshortcuts="${escapeHtml(shortcut)}"` : ""}>${shortLabel}</button>`;
  }

  function commandGroups(groups, idPrefix) {
    return groups.map((group) => `<section class="tssr-editor-command-group" aria-labelledby="${idPrefix}-${group.id}">
      <h4 id="${idPrefix}-${group.id}">${escapeHtml(group.label)}</h4>
      ${group.commands.map((command) => {
        const metadata = core.COMMAND_LABELS[command];
        if (!metadata) return "";
        return `<button type="button" data-editor-command="${command}"><strong>${escapeHtml(metadata[0])}</strong><small>${escapeHtml(metadata[1])}</small></button>`;
      }).join("")}
    </section>`).join("");
  }

  function markup(options = {}) {
    const editorId = `tssr-editor-${++editorSequence}`;
    const mode = options.mode === "visual" ? "visual" : "markdown";
    const layout = ["edit", "preview", "split"].includes(options.layout) ? options.layout : "split";
    const label = escapeHtml(options.label || "Contenu");
    const value = escapeHtml(options.value || "");
    const insertGroups = core.COMMAND_GROUPS.filter((group) => ["insert", "blocks", "code", "media", "diagrams"].includes(group.id));
    const plusGroups = core.COMMAND_GROUPS;
    return `<div class="tssr-rich-editor" data-rich-editor data-editor-path="${escapeHtml(options.path || "")}" data-editor-key="${escapeHtml(options.editorKey || options.path || "")}" data-mode="${mode}" data-layout="${layout}">
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
      <div class="tssr-rich-editor__toolbar" role="toolbar" aria-label="Outils de rédaction">
        <div class="tssr-editor-toolset" role="group" aria-label="Historique">
          <button type="button" class="tssr-editor-tool" data-editor-action="undo" aria-label="Annuler" title="Annuler · Ctrl ou Cmd + Z" aria-keyshortcuts="Control+Z Meta+Z">↶</button>
          <button type="button" class="tssr-editor-tool" data-editor-action="redo" aria-label="Rétablir" title="Rétablir · Ctrl ou Cmd + Maj + Z" aria-keyshortcuts="Control+Shift+Z Meta+Shift+Z">↷</button>
        </div>
        <label class="tssr-editor-format"><span class="tssr-visually-hidden">Format du bloc</span><select data-editor-format aria-label="Format du bloc">
          <option value="paragraph">Paragraphe</option>${Array.from({ length: 6 }, (_, index) => `<option value="${index + 1}">Titre H${index + 1}</option>`).join("")}
        </select></label>
        <div class="tssr-editor-toolset" role="group" aria-label="Mise en forme du texte">
          ${button("bold", "<strong>B</strong>", "Gras", "Control+B Meta+B")}
          ${button("italic", "<em>I</em>", "Italique", "Control+I Meta+I")}
          ${button("underline", "<u>U</u>", "Souligné", "Control+U Meta+U")}
          ${button("strike", "<s>S</s>", "Barré")}
          ${button("inline-code", "&lt;/&gt;", "Code en ligne")}
          ${button("highlight", "▰", "Surlignage")}
        </div>
        <div class="tssr-editor-toolset" role="group" aria-label="Listes et liens">
          ${button("bullet-list", "•", "Liste à puces")}
          ${button("ordered-list", "1.", "Liste numérotée")}
          ${button("checklist", "☑", "Liste de tâches")}
          ${button("link", "🔗", "Insérer un lien", "Control+K Meta+K")}
        </div>
        <details class="tssr-editor-menu tssr-editor-menu--insert">
          <summary aria-label="Ouvrir le menu Insérer">Insérer <span aria-hidden="true">＋</span></summary>
          <div class="tssr-editor-menu__panel">${commandGroups(insertGroups, `${editorId}-insert`)}</div>
        </details>
        <details class="tssr-editor-menu tssr-editor-menu--more">
          <summary aria-label="Ouvrir tous les outils">Plus <span aria-hidden="true">⋯</span></summary>
          <div class="tssr-editor-menu__panel tssr-editor-menu__panel--wide">${commandGroups(plusGroups, `${editorId}-plus`)}</div>
        </details>
        <div class="tssr-editor-toolset tssr-editor-toolset--end" role="group" aria-label="Affichage et aide">
          <button type="button" class="tssr-editor-tool" data-editor-action="palette" aria-label="Palette de commandes" title="Palette de commandes · Ctrl ou Cmd + Maj + P" aria-keyshortcuts="Control+Shift+P Meta+Shift+P">⌘</button>
          <button type="button" class="tssr-editor-tool" data-editor-action="outline" aria-label="Afficher le plan" aria-pressed="false" title="Plan du document">☷</button>
          <button type="button" class="tssr-editor-tool" data-editor-action="focus" aria-label="Activer le mode concentration" aria-pressed="false" title="Mode concentration">◉</button>
          <button type="button" class="tssr-editor-tool" data-editor-action="help" aria-label="Aide de l’éditeur" title="Aide et raccourcis">?</button>
          <button type="button" class="tssr-editor-tool" data-editor-fullscreen aria-label="Passer en plein écran" aria-pressed="false" title="Plein écran">⛶</button>
        </div>
      </div>
      <div class="tssr-rich-editor__workspace">
        <div class="tssr-rich-editor__source">
          <textarea class="tssr-markdown-editor" data-editor-markdown spellcheck="true" aria-label="${label} en Markdown">${value}</textarea>
          <div class="tssr-visual-editor md-typeset" data-editor-visual role="document" aria-label="${label} en mode visuel"></div>
        </div>
        <div class="tssr-rich-editor__preview md-typeset" data-editor-preview aria-label="Aperçu sécurisé"></div>
        <aside class="tssr-editor-outline" data-editor-outline hidden aria-label="Plan du document"><div><strong>Plan du document</strong><button type="button" data-editor-outline-close aria-label="Fermer le plan">×</button></div><nav></nav></aside>
      </div>
      <div class="tssr-editor-statusbar">
        <span data-editor-stats>0 mot · 0 caractère</span>
        <span data-editor-status role="status" aria-live="polite">Markdown prêt</span>
        <span>Source unique · blocs avancés protégés</span>
      </div>
      <p class="tssr-help">Tapez <kbd>/</kbd> au début d’un bloc ou utilisez <kbd>Ctrl/Cmd + Maj + P</kbd>. Le build MkDocs strict reste l’autorité du rendu final.</p>
      <input type="file" data-editor-import accept=".md,.markdown,text/markdown,text/plain" hidden>
      <input type="file" data-editor-upload accept=".png,.jpg,.jpeg,.webp,.gif,.pdf" multiple hidden>
    </div>`;
  }

  function appendField(form, descriptor, dialogId) {
    const wrapper = document.createElement(descriptor.type === "checkbox" ? "label" : "label");
    wrapper.className = descriptor.type === "checkbox" ? "tssr-editor-checkbox" : "tssr-field";
    const caption = document.createElement("span");
    caption.textContent = descriptor.label;
    let input;
    if (descriptor.type === "textarea") input = document.createElement("textarea");
    else if (descriptor.type === "select") {
      input = document.createElement("select");
      (descriptor.options || []).forEach((option) => {
        const node = document.createElement("option");
        node.value = String(option.value);
        node.textContent = option.label;
        if (String(descriptor.value ?? "") === node.value) node.selected = true;
        input.append(node);
      });
    } else {
      input = document.createElement("input");
      input.type = descriptor.type || "text";
    }
    input.name = descriptor.name;
    input.id = `${dialogId}-${descriptor.name}`;
    if (descriptor.type === "checkbox") {
      input.checked = Boolean(descriptor.value);
      wrapper.append(input, caption);
    } else {
      if (descriptor.type !== "select") input.value = String(descriptor.value ?? "");
      if (descriptor.placeholder) input.placeholder = descriptor.placeholder;
      if (descriptor.required) input.required = true;
      if (descriptor.min !== undefined) input.min = String(descriptor.min);
      if (descriptor.max !== undefined) input.max = String(descriptor.max);
      if (descriptor.maxLength) input.maxLength = descriptor.maxLength;
      if (descriptor.rows && input instanceof HTMLTextAreaElement) input.rows = descriptor.rows;
      if (descriptor.list?.length) {
        const list = document.createElement("datalist");
        list.id = `${input.id}-list`;
        descriptor.list.forEach((entry) => {
          const option = document.createElement("option");
          option.value = typeof entry === "string" ? entry : entry.value;
          if (typeof entry !== "string" && entry.label) option.label = entry.label;
          list.append(option);
        });
        input.setAttribute("list", list.id);
        wrapper.append(caption, input, list);
      } else wrapper.append(caption, input);
    }
    if (descriptor.help) {
      const help = document.createElement("small");
      help.textContent = descriptor.help;
      wrapper.append(help);
    }
    form.append(wrapper);
    return input;
  }

  function openDialog(configuration) {
    const trigger = configuration.trigger || document.activeElement;
    const id = `tssr-editor-dialog-${++dialogSequence}`;
    const dialog = document.createElement("dialog");
    dialog.className = "tssr-editor-dialog";
    dialog.setAttribute("aria-labelledby", `${id}-title`);
    const header = document.createElement("header");
    const heading = document.createElement("h2");
    heading.id = `${id}-title`;
    heading.textContent = configuration.title;
    const close = document.createElement("button");
    close.type = "button";
    close.className = "tssr-editor-dialog__close";
    close.setAttribute("aria-label", "Fermer sans modifier");
    close.textContent = "×";
    header.append(heading, close);
    const form = document.createElement("form");
    form.method = "dialog";
    form.className = "tssr-editor-dialog__form";
    const body = document.createElement("div");
    body.className = "tssr-editor-dialog__body";
    if (configuration.description) {
      const description = document.createElement("p");
      description.textContent = configuration.description;
      body.append(description);
    }
    const fields = document.createElement("div");
    fields.className = "tssr-editor-dialog__fields";
    body.append(fields);
    const controls = {};
    (configuration.fields || []).forEach((descriptor) => { controls[descriptor.name] = appendField(fields, descriptor, id); });
    const error = document.createElement("div");
    error.className = "tssr-form-error";
    error.setAttribute("role", "alert");
    error.id = `${id}-error`;
    error.hidden = true;
    body.append(error);
    const footer = document.createElement("footer");
    const cancel = document.createElement("button");
    cancel.type = "button";
    cancel.className = "tssr-action";
    cancel.textContent = "Annuler";
    const submit = document.createElement("button");
    submit.type = "submit";
    submit.className = "tssr-action tssr-action--primary";
    submit.textContent = configuration.submitLabel || "Insérer";
    footer.append(cancel, submit);
    form.append(body, footer);
    dialog.append(header, form);
    document.body.append(dialog);
    let deferredAction = null;

    const dismiss = () => dialog.close("cancel");
    close.addEventListener("click", dismiss);
    cancel.addEventListener("click", dismiss);
    dialog.addEventListener("cancel", (event) => { event.preventDefault(); dismiss(); });
    dialog.addEventListener("close", () => {
      const submitted = dialog.returnValue === "submit";
      dialog.remove();
      Promise.resolve()
        .then(() => submitted ? deferredAction?.() : null)
        .then((focusTarget) => {
          const target = focusTarget?.isConnected ? focusTarget : trigger?.isConnected ? trigger : null;
          requestAnimationFrame(() => target?.focus?.({ preventScroll: true }));
          configuration.onClose?.(submitted);
        })
        .catch((caught) => configuration.onDeferredError?.(caught));
    }, { once: true });
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      error.hidden = true;
      Object.values(controls).forEach((control) => {
        control.removeAttribute("aria-invalid");
        if (control.getAttribute("aria-errormessage") === error.id) control.removeAttribute("aria-errormessage");
      });
      const values = {};
      Object.entries(controls).forEach(([name, control]) => {
        values[name] = control.type === "checkbox" ? control.checked : control.value;
      });
      try {
        submit.disabled = true;
        const result = await configuration.onSubmit?.(values, controls);
        deferredAction = typeof result === "function" ? result : null;
        dialog.close("submit");
      } catch (caught) {
        error.textContent = caught?.message || "Les valeurs saisies ne sont pas valides.";
        error.hidden = false;
        submit.disabled = false;
        const invalid = controls[caught?.field] || Object.values(controls).find((control) => !control.checkValidity()) || Object.values(controls)[0];
        invalid?.setAttribute("aria-invalid", "true");
        invalid?.setAttribute("aria-errormessage", error.id);
        invalid?.focus();
      }
    });
    dialog.showModal();
    requestAnimationFrame(() => Object.values(controls)[0]?.focus());
    return dialog;
  }

  function contextPages(options) {
    const seen = new Set();
    const pages = [];
    const add = (value, label) => {
      const path = String(value || "").trim();
      if (!path || seen.has(path) || /^https?:/i.test(path)) return;
      seen.add(path);
      pages.push({ value: path, label: String(label || path).trim() });
    };
    (options.context?.pages || []).forEach((page) => add(page.path || page.url, page.label || page.title));
    document.querySelectorAll(".md-nav a[href]").forEach((link) => {
      try {
        const url = new URL(link.href, location.href);
        if (url.origin === location.origin) add(`${url.pathname}${url.hash}`, link.textContent);
      } catch (_) { /* Ignore malformed navigation links. */ }
    });
    return pages.slice(0, 500);
  }

  function descriptorFor(command, selection, options) {
    const languages = core.CODE_LANGUAGES.map((value) => ({ value, label: value === "text" ? "Texte brut" : value }));
    const admonitions = core.ADMONITION_TYPES.map((value) => ({ value, label: value }));
    const colors = core.CONTROLLED_COLORS.map((value) => ({ value, label: value }));
    const commonText = selection || "";
    const definitions = {
      link: ["Insérer un lien", [
        { name: "label", label: "Libellé", value: commonText || "Lien", required: true },
        { name: "url", label: "URL HTTPS, chemin relatif ou ancre", placeholder: "https://… ou ../page.md", required: true },
        { name: "title", label: "Info-bulle facultative" },
        { name: "newTab", label: "Ouvrir dans un nouvel onglet", type: "checkbox", value: true }
      ]],
      "internal-link": ["Lien interne", [
        { name: "label", label: "Libellé", value: commonText || "Voir la page", required: true },
        { name: "path", label: "Page de la documentation", required: true, list: contextPages(options), placeholder: "modules/…/page.md" },
        { name: "title", label: "Info-bulle facultative" }
      ]],
      "glossary-link": ["Terme du glossaire", [
        { name: "label", label: "Terme affiché", value: commonText, required: true, list: (options.context?.terms || []).map((term) => ({ value: term.term, label: term.full_name || term.term })) },
        { name: "path", label: "Ancre du glossaire", value: "glossaire/#", required: true, help: "Complétez l’ancre avec l’identifiant du terme." }
      ]],
      anchor: ["Titre et ancre", [
        { name: "title", label: "Titre", value: commonText || "Nouvelle section", required: true },
        { name: "anchor", label: "Identifiant d’ancre", placeholder: "nouvelle-section" },
        { name: "level", label: "Niveau", type: "select", value: "2", options: [2, 3, 4, 5, 6].map((value) => ({ value, label: `H${value}` })) }
      ]],
      image: ["Insérer une image", [
        { name: "url", label: "URL HTTPS ou chemin de l’image", required: true, placeholder: "assets/images/…" },
        { name: "alt", label: "Texte alternatif", value: commonText, required: true },
        { name: "title", label: "Titre facultatif" }, { name: "caption", label: "Légende facultative" },
        { name: "width", label: "Largeur", type: "select", value: "100", options: [25, 50, 75, 100].map((value) => ({ value, label: `${value} %` })) },
        { name: "align", label: "Alignement", type: "select", value: "center", options: ["left", "center", "right"].map((value) => ({ value, label: value })) }
      ]],
      gallery: ["Galerie d’images", [{ name: "items", label: "Une image par ligne : URL | texte alternatif | titre", type: "textarea", rows: 7, required: true }]],
      emoji: ["Emoji ou icône", [
        { name: "emoji", label: "Emoji courant (facultatif)", type: "select", value: "", options: [{ value: "", label: "Icône Material" }, ...["✅", "❌", "⚠️", "💡", "📌", "🔒", "🌐", "🖥️", "🛠️", "📚"].map((value) => ({ value, label: value }))] },
        { name: "icon", label: "Nom d’icône Material", value: "server-network", help: "Ex. lan, shield-lock, microsoft-windows, linux" }
      ]],
      table: ["Créer un tableau", [
        { name: "rows", label: "Nombre total de lignes", type: "number", value: 3, min: 2, max: 20, required: true },
        { name: "columns", label: "Nombre de colonnes", type: "number", value: 2, min: 1, max: 12, required: true }
      ]],
      "code-block": ["Bloc de code", [
        { name: "language", label: "Langage", type: "select", value: "bash", options: languages },
        { name: "title", label: "Titre du bloc" },
        { name: "content", label: "Code", type: "textarea", value: commonText, rows: 12, required: true },
        { name: "linenums", label: "Afficher les numéros de ligne", type: "checkbox", value: true },
        { name: "startLine", label: "Première ligne", type: "number", value: 1, min: 1, max: 99999 },
        { name: "highlight", label: "Lignes à surligner", placeholder: "2 4-6" }
      ]],
      terminal: ["Commande terminal", [
        { name: "shell", label: "Terminal", type: "select", value: "bash", options: ["bash", "powershell", "batch", "cisco"].map((value) => ({ value, label: value })) },
        { name: "title", label: "Titre" }, { name: "command", label: "Commande", type: "textarea", value: commonText, rows: 6, required: true },
        { name: "explanation", label: "Explication facultative", type: "textarea", rows: 3 }
      ]],
      "config-file": ["Fichier de configuration", [
        { name: "path", label: "Chemin du fichier", value: "/etc/exemple.conf", required: true },
        { name: "language", label: "Langage", type: "select", value: "ini", options: languages },
        { name: "content", label: "Contenu", type: "textarea", value: commonText, rows: 12, required: true },
        { name: "linenums", label: "Afficher les numéros de ligne", type: "checkbox" }
      ]],
      path: ["Chemin de fichier", [{ name: "path", label: "Chemin Windows ou Linux", value: commonText || "/chemin/vers/fichier", required: true }]],
      admonition: ["Admonition", [
        { name: "type", label: "Type", type: "select", value: "info", options: admonitions },
        { name: "title", label: "Titre", value: "Information" },
        { name: "content", label: "Contenu", type: "textarea", value: commonText, rows: 8, required: true },
        { name: "collapsible", label: "Rendre le bloc repliable", type: "checkbox" },
        { name: "open", label: "Ouvert par défaut", type: "checkbox" }
      ]],
      details: ["Bloc repliable", [
        { name: "type", label: "Type", type: "select", value: "note", options: admonitions },
        { name: "title", label: "Titre", value: "Détails" },
        { name: "content", label: "Contenu", type: "textarea", value: commonText, rows: 8, required: true },
        { name: "open", label: "Ouvert par défaut", type: "checkbox" }
      ]],
      tabs: ["Onglets", [{ name: "items", label: "Un onglet par ligne : Titre :: Contenu", type: "textarea", value: "Windows :: Contenu Windows\nLinux :: Contenu Linux", rows: 8, required: true, help: "Utilisez \\n dans une ligne pour créer un saut de ligne dans son contenu." }]],
      mermaid: ["Diagramme Mermaid", [
        { name: "template", label: "Modèle", type: "select", value: "flowchart", options: Object.keys(core.MERMAID_TEMPLATES).map((value) => ({ value, label: value })) },
        { name: "code", label: "Code Mermaid facultatif", type: "textarea", value: commonText, rows: 14, help: "Laissez vide pour utiliser le modèle sélectionné." }
      ]],
      "network-diagram": ["Schéma réseau TSSR", [{ name: "template", label: "Modèle", type: "select", value: "network", options: ["network", "clientServer", "vlan", "dmz", "dhcpDns"].map((value) => ({ value, label: value })) }, { name: "code", label: "Code Mermaid facultatif", type: "textarea", rows: 12 }]],
      alignment: ["Alignement", [{ name: "align", label: "Alignement", type: "select", value: "center", options: core.ALIGNMENTS.map((value) => ({ value, label: value })) }, { name: "text", label: "Contenu", type: "textarea", value: commonText, rows: 6, required: true }]],
      "text-size": ["Taille du texte", [{ name: "size", label: "Taille", type: "select", value: "normal", options: core.TEXT_SIZES.map((value) => ({ value, label: value })) }, { name: "text", label: "Texte", value: commonText, required: true }]],
      "text-color": ["Couleur du texte", [{ name: "color", label: "Couleur du thème", type: "select", value: "primary", options: colors }, { name: "text", label: "Texte", value: commonText, required: true }]],
      "background-color": ["Fond coloré", [{ name: "color", label: "Couleur du thème", type: "select", value: "info", options: colors }, { name: "text", label: "Texte", value: commonText, required: true }]],
      button: ["Bouton Material", [{ name: "label", label: "Libellé", value: commonText || "Ouvrir", required: true }, { name: "url", label: "URL", required: true }, { name: "primary", label: "Bouton principal", type: "checkbox", value: true }]],
      badge: ["Badge", [{ name: "label", label: "Texte", value: commonText || "À retenir", required: true }, { name: "color", label: "Couleur", type: "select", value: "info", options: colors }]],
      card: ["Carte", [{ name: "title", label: "Titre", required: true }, { name: "description", label: "Description", type: "textarea", value: commonText, rows: 5 }, { name: "icon", label: "Icône Material", value: "book-open-page-variant" }, { name: "url", label: "URL facultative" }, { name: "linkLabel", label: "Libellé du lien", value: "Ouvrir" }]],
      columns: ["Colonnes", [{ name: "columns", label: "Nombre", type: "select", value: "2", options: [2, 3].map((value) => ({ value, label: `${value} colonnes` })) }, { name: "items", label: "Séparez les colonnes par ---COLONNE---", type: "textarea", value: commonText || "Colonne 1\n---COLONNE---\nColonne 2", rows: 10, required: true }]],
      footnote: ["Note de bas de page", [{ name: "id", label: "Identifiant", value: "note" }, { name: "content", label: "Contenu", type: "textarea", value: commonText, rows: 5, required: true }]],
      abbreviation: ["Abréviation", [{ name: "term", label: "Abréviation", value: commonText || "DHCP", required: true }, { name: "definition", label: "Définition", required: true }]],
      definition: ["Liste de définition", [{ name: "term", label: "Terme", value: commonText, required: true }, { name: "definition", label: "Définition", type: "textarea", rows: 5, required: true }]],
      "raw-markdown": ["Bloc Markdown brut", [{ name: "content", label: "Source Markdown exacte", type: "textarea", value: commonText, rows: 16, required: true, maxLength: 500000, help: "Les balises actives, événements, styles libres et URL dangereuses sont refusés." }]],
      procedure: ["Procédure TSSR", [{ name: "title", label: "Titre", value: "Procédure pas à pas" }, { name: "content", label: "Une étape par ligne", type: "textarea", value: commonText, rows: 8, required: true }]],
      prerequisites: ["Prérequis", [{ name: "content", label: "Liste des prérequis", type: "textarea", value: commonText || "- Prérequis à compléter", rows: 6, required: true }]],
      objectives: ["Objectifs", [{ name: "content", label: "Liste des objectifs", type: "textarea", value: commonText || "- Objectif à compléter", rows: 6, required: true }]],
      "common-error": ["Erreur fréquente", [{ name: "title", label: "Diagnostic", required: true }, { name: "content", label: "Symptôme, cause et résolution", type: "textarea", value: commonText, rows: 9, required: true }]],
      example: ["Exemple", [{ name: "title", label: "Titre", value: "Exemple" }, { name: "content", label: "Contenu", type: "textarea", value: commonText, rows: 8, required: true }]],
      pdf: ["Ressource PDF", [{ name: "title", label: "Titre", value: "Ouvrir le PDF", required: true }, { name: "url", label: "URL HTTPS ou chemin du PDF", required: true }, { name: "description", label: "Description", type: "textarea", rows: 3 }]],
      video: ["Ressource vidéo", [{ name: "title", label: "Titre", value: "Voir la vidéo", required: true }, { name: "url", label: "URL HTTPS", required: true }, { name: "description", label: "Description", type: "textarea", rows: 3 }]],
      audio: ["Ressource audio", [{ name: "title", label: "Titre", value: "Écouter l’audio", required: true }, { name: "url", label: "URL HTTPS", required: true }, { name: "description", label: "Description", type: "textarea", rows: 3 }]],
      template: ["Modèle TSSR", [{ name: "template", label: "Type", type: "select", value: "course", options: [{ value: "course", label: "Cours" }, { value: "lab", label: "TP" }, { value: "exercise", label: "Exercice" }, { value: "procedure", label: "Procédure" }, { value: "revision", label: "Fiche de révision" }] }, { name: "title", label: "Titre", required: true }]],
      "find-replace": ["Rechercher et remplacer", [{ name: "query", label: "Rechercher", required: true }, { name: "replacement", label: "Remplacer par" }, { name: "caseSensitive", label: "Respecter la casse", type: "checkbox" }, { name: "all", label: "Remplacer toutes les occurrences", type: "checkbox", value: true }]]
    };
    const result = definitions[command];
    if (!result) return null;
    return { title: result[0], fields: result[1] };
  }

  function normalizeDialogValues(command, values) {
    if (command === "gallery") {
      values.images = values.items.split(/\r?\n/).filter(Boolean).map((line) => {
        const [url, alt, title] = line.split("|").map((part) => part.trim());
        return { url, alt, title };
      });
    }
    if (command === "tabs") values.tabs = values.items.split(/\r?\n/).filter(Boolean).map((line) => {
      const separator = line.indexOf("::");
      return separator < 0 ? { title: line.trim(), content: "Contenu à compléter" } : { title: line.slice(0, separator).trim(), content: line.slice(separator + 2).trim().replaceAll("\\n", "\n") };
    });
    if (command === "columns") values.contents = values.items.split(/\r?\n---COLONNE---\r?\n/);
    if (command === "procedure") values.steps = values.content.split(/\r?\n/).filter(Boolean);
    return values;
  }

  function createRawCard(block, index) {
    const card = document.createElement("section");
    card.className = "tssr-editor-raw-block";
    card.dataset.tssrRawBlock = "";
    card.dataset.visualBlockIndex = String(index);
    card.contentEditable = "false";
    const header = document.createElement("header");
    const title = document.createElement("strong");
    title.textContent = block.label || "Bloc Markdown protégé";
    const badge = document.createElement("span");
    badge.textContent = "Source préservée";
    const actions = document.createElement("div");
    [["edit", "Modifier"], ["duplicate", "Dupliquer"], ["up", "Monter"], ["down", "Descendre"], ["delete", "Supprimer"]].forEach(([action, label]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.rawAction = action;
      button.setAttribute("aria-label", `${label} le bloc ${block.label}`);
      button.textContent = label;
      actions.append(button);
    });
    header.append(title, badge, actions);
    const pre = document.createElement("pre");
    const code = document.createElement("code");
    code.dataset.tssrRawSource = "";
    code.textContent = block.raw;
    pre.append(code);
    card.append(header, pre);
    return card;
  }

  function openHelp(trigger) {
    openDialog({
      trigger,
      title: "Aide de l’éditeur",
      description: "Le Markdown est l’unique source enregistrée. Les blocs MkDocs avancés apparaissent sous forme de cartes protégées : les modifier n’altère jamais les blocs voisins.",
      submitLabel: "Fermer",
      fields: [],
      onSubmit: () => undefined
    });
    const body = document.querySelector(".tssr-editor-dialog[open] .tssr-editor-dialog__body");
    if (!body) return;
    const list = document.createElement("ul");
    ["Ctrl/Cmd + B : gras", "Ctrl/Cmd + I : italique", "Ctrl/Cmd + K : lien", "Ctrl/Cmd + Z : annuler", "Ctrl/Cmd + Maj + Z : rétablir", "Ctrl/Cmd + Maj + P : palette", "/ au début d’un bloc vide : palette", "Échap : fermer le dialogue ou quitter le plein écran"].forEach((text) => {
      const item = document.createElement("li"); item.textContent = text; list.append(item);
    });
    body.insertBefore(list, body.querySelector(".tssr-editor-dialog__fields"));
  }

  function mount(wrapper, options = {}) {
    if (!wrapper || !core || !utils) return null;
    const markdown = wrapper.querySelector("[data-editor-markdown]");
    const visual = wrapper.querySelector("[data-editor-visual]");
    const preview = wrapper.querySelector("[data-editor-preview]");
    const stats = wrapper.querySelector("[data-editor-stats]");
    const status = wrapper.querySelector("[data-editor-status]");
    const outline = wrapper.querySelector("[data-editor-outline]");
    const abortController = new AbortController();
    const signal = abortController.signal;
    let visualDocument = null;
    let activeVisualBlock = 0;
    let savedRange = null;
    let previewTimer = null;
    let historyTimer = null;
    let fullscreenRestore = null;
    const trustedSource = String(options.trustedSource ?? "");
    const history = options.history || { entries: [markdown.value], index: 0 };
    if (!history.entries?.length) Object.assign(history, { entries: [markdown.value], index: 0 });

    const notify = (message, type = "info") => options.notify?.(message, type);
    const closeEditorMenus = (except = null) => {
      wrapper.querySelectorAll(".tssr-editor-menu[open]").forEach((menu) => {
        if (menu !== except) menu.removeAttribute("open");
      });
    };
    const toggleOutline = (force) => {
      const open = force ?? outline.hidden;
      outline.hidden = !open;
      wrapper.classList.toggle("has-outline", open);
      wrapper.querySelector('[data-editor-action="outline"]')?.setAttribute("aria-pressed", String(open));
    };
    const closestVisualBlock = (node) => {
      const element = node?.nodeType === Node.ELEMENT_NODE ? node : node?.parentElement;
      return element?.closest?.("[data-visual-block-index]") || null;
    };
    const updateStats = () => {
      const current = core.documentStats(markdown.value);
      stats.textContent = `${current.words} mot${current.words > 1 ? "s" : ""} · ${current.characters} caractère${current.characters > 1 ? "s" : ""} · ${current.minutes} min`;
      const items = core.documentOutline(markdown.value);
      const navigation = outline.querySelector("nav");
      navigation.replaceChildren();
      if (!items.length) {
        const empty = document.createElement("span"); empty.textContent = "Aucun titre."; navigation.append(empty);
      } else items.forEach((item) => {
        const button = document.createElement("button");
        button.type = "button";
        button.style.setProperty("--outline-level", String(item.level));
        button.textContent = item.title;
        button.addEventListener("click", () => {
          const lines = markdown.value.split("\n");
          const position = lines.slice(0, item.line - 1).reduce((sum, line) => sum + line.length + 1, 0);
          setMode("markdown");
          markdown.focus();
          markdown.setSelectionRange(position, position + lines[item.line - 1].length);
        }, { signal });
        navigation.append(button);
      });
    };

    const renderPreview = () => {
      window.clearTimeout(previewTimer);
      if (wrapper.dataset.layout === "edit" || wrapper.closest("[hidden]")) {
        status.textContent = "Aperçu en pause · mode Édition";
        return;
      }
      options.renderPreview?.(markdown.value, preview);
      status.textContent = "Aperçu actualisé";
    };
    const schedulePreview = () => {
      window.clearTimeout(previewTimer);
      if (wrapper.dataset.layout === "edit" || wrapper.closest("[hidden]")) {
        status.textContent = "Aperçu en pause · mode Édition";
        return;
      }
      status.textContent = "Actualisation de l’aperçu…";
      previewTimer = window.setTimeout(renderPreview, 160);
    };

    const recordHistory = () => {
      window.clearTimeout(historyTimer);
      const value = markdown.value;
      if (history.entries[history.index] === value) return;
      history.entries.splice(history.index + 1);
      history.entries.push(value);
      if (history.entries.length > 100) history.entries.shift();
      history.index = history.entries.length - 1;
    };
    const scheduleHistory = () => {
      window.clearTimeout(historyTimer);
      historyTimer = window.setTimeout(recordHistory, 450);
    };
    const emit = (value, configuration = {}) => {
      markdown.value = value;
      options.onChange?.(value);
      updateStats();
      schedulePreview();
      if (configuration.record !== false) scheduleHistory();
      if (configuration.rerenderVisual) renderVisual();
    };

    const renderVisual = () => {
      visualDocument = core.parseLosslessDocument(markdown.value);
      visual.replaceChildren();
      visualDocument.blocks.forEach((block, index) => {
        if (block.kind === "separator") return;
        if (!block.editable) {
          visual.append(createRawCard(block, index));
          return;
        }
        const editable = document.createElement("section");
        editable.className = "tssr-editor-visual-block";
        editable.dataset.visualBlockIndex = String(index);
        editable.contentEditable = "true";
        editable.setAttribute("role", "textbox");
        editable.setAttribute("aria-multiline", "true");
        editable.setAttribute("aria-label", `Bloc éditable ${index + 1}`);
        options.renderPreview?.(block.body, editable);
        editable.querySelectorAll("a").forEach((link) => {
          link.removeAttribute("target");
          link.addEventListener("click", (event) => event.preventDefault(), { signal });
        });
        if (!editable.textContent?.trim()) editable.innerHTML = "<p><br></p>";
        visual.append(editable);
      });
      status.textContent = `${visualDocument.blocks.filter((block) => !block.editable).length} bloc(s) avancé(s) protégé(s)`;
    };

    const setMode = (mode) => {
      const next = mode === "visual" ? "visual" : "markdown";
      wrapper.dataset.mode = next;
      options.onMode?.(next);
      wrapper.querySelectorAll("[data-editor-mode]").forEach((item) => item.setAttribute("aria-pressed", String(item.dataset.editorMode === next)));
      if (next === "visual") renderVisual();
      status.textContent = `Mode ${next === "visual" ? "visuel" : "Markdown"}`;
    };

    const commitVisualBlock = (element) => {
      if (!visualDocument) return;
      const index = Number(element.dataset.visualBlockIndex);
      const block = visualDocument.blocks[index];
      if (!block?.editable) return;
      block.body = utils.htmlToMarkdown(element, { safeUrl: core.safeUrl });
      block.raw = `${block.body}${block.suffix}`;
      emit(core.serializeLosslessDocument(visualDocument));
    };

    const saveVisualSelection = () => {
      const selection = window.getSelection?.();
      if (!selection?.rangeCount || !visual.contains(selection.anchorNode)) return;
      savedRange = selection.getRangeAt(0).cloneRange();
      const block = closestVisualBlock(selection.anchorNode);
      if (block) activeVisualBlock = Number(block.dataset.visualBlockIndex);
    };
    const restoreVisualSelection = () => {
      if (!savedRange) return false;
      const selection = window.getSelection?.();
      if (!selection || !savedRange.startContainer?.isConnected) return false;
      selection.removeAllRanges(); selection.addRange(savedRange); return true;
    };

    const selectedText = () => {
      if (wrapper.dataset.mode === "visual") return savedRange?.toString() || "";
      return markdown.value.slice(markdown.selectionStart || 0, markdown.selectionEnd || 0);
    };
    const insertMarkdown = (snippet) => {
      if (wrapper.dataset.mode !== "visual" || !visualDocument) {
        const start = markdown.selectionStart ?? markdown.value.length;
        const end = markdown.selectionEnd ?? start;
        markdown.setRangeText(snippet, start, end, "end");
        emit(markdown.value);
        markdown.focus();
        return;
      }
      const blocks = visualDocument.blocks;
      const insertionIndex = Math.min(Math.max(activeVisualBlock + 1, 0), blocks.length);
      const before = blocks.slice(0, insertionIndex).map((block) => block.raw).join("");
      const after = blocks.slice(insertionIndex).map((block) => block.raw).join("");
      const prefix = before && !/(?:\r\n|\r|\n){2}$/.test(before) ? "\n\n" : "";
      const suffix = after && !/^(?:\r\n|\r|\n){2}/.test(after) ? "\n\n" : "";
      emit(`${before}${prefix}${snippet}${suffix}${after}`, { rerenderVisual: true });
    };

    const applyVisualInline = (command, values = {}) => {
      if (!restoreVisualSelection()) return false;
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const startBlock = closestVisualBlock(range.startContainer);
      const endBlock = closestVisualBlock(range.endContainer);
      if (!startBlock || startBlock !== endBlock) {
        notify("Sélectionnez du texte dans un seul bloc avant d’appliquer cette mise en forme.", "error");
        return true;
      }
      const text = selection.toString() || values.label || values.text || "Texte";
      const commands = { bold: "bold", italic: "italic", underline: "underline", strike: "strikeThrough", "clear-format": "removeFormat" };
      if (commands[command]) document.execCommand(commands[command], false);
      else if (command === "inline-code") document.execCommand("insertHTML", false, `<code>${core.escapeHtml(text)}</code>`);
      else if (command === "highlight") document.execCommand("insertHTML", false, `<mark>${core.escapeHtml(text)}</mark>`);
      else if (command === "superscript") document.execCommand("insertHTML", false, `<sup>${core.escapeHtml(text)}</sup>`);
      else if (command === "subscript") document.execCommand("insertHTML", false, `<sub>${core.escapeHtml(text)}</sub>`);
      else if (["link", "internal-link", "glossary-link"].includes(command)) {
        const url = core.safeUrl(values.url || values.path || "#");
        const anchor = document.createElement("a");
        anchor.setAttribute("href", url);
        anchor.textContent = values.label || selection.toString() || "Lien";
        if (values.title) anchor.title = values.title;
        if (values.newTab) { anchor.target = "_blank"; anchor.rel = "noopener noreferrer"; }
        range.deleteContents();
        range.insertNode(anchor);
        const caret = document.createRange();
        caret.setStartAfter(anchor); caret.collapse(true);
        selection.removeAllRanges(); selection.addRange(caret);
        savedRange = caret.cloneRange();
      } else return false;
      commitVisualBlock(startBlock);
      return true;
    };

    const applyImmediate = (command) => {
      if (wrapper.dataset.mode === "visual") {
        if (INLINE_VISUAL.has(command) && applyVisualInline(command)) return;
        const restored = restoreVisualSelection();
        const selection = restored ? window.getSelection() : null;
        const range = selection?.rangeCount ? selection.getRangeAt(0) : null;
        const startBlock = range ? closestVisualBlock(range.startContainer) : null;
        const endBlock = range ? closestVisualBlock(range.endContainer) : null;
        if (!restored && ["indent", "outdent"].includes(command)) {
          notify("Placez le curseur dans un bloc avant de modifier son retrait.", "error");
          return;
        }
        if (restored && (!startBlock || startBlock !== endBlock)) {
          notify("Sélectionnez le contenu d’un seul bloc avant d’appliquer cette commande.", "error");
          return;
        }
        if (restored && command === "bullet-list") document.execCommand("insertUnorderedList", false);
        else if (restored && command === "ordered-list") document.execCommand("insertOrderedList", false);
        else if (restored && command === "quote") document.execCommand("formatBlock", false, "blockquote");
        else if (restored && ["indent", "outdent"].includes(command)) document.execCommand(command, false);
        else {
          insertMarkdown(core.buildCommandMarkdown(command, {}, selectedText()));
          return;
        }
        if (startBlock) commitVisualBlock(startBlock);
        return;
      }
      const start = markdown.selectionStart ?? 0;
      const end = markdown.selectionEnd ?? start;
      if (["indent", "outdent"].includes(command)) {
        const lineStart = markdown.value.lastIndexOf("\n", start - 1) + 1;
        const lineEnd = markdown.value.indexOf("\n", end);
        const boundary = lineEnd < 0 ? markdown.value.length : lineEnd;
        const source = markdown.value.slice(lineStart, boundary);
        const changed = source.split("\n").map((line) => command === "indent" ? `    ${line}` : line.replace(/^(?: {1,4}|\t)/, "")).join("\n");
        markdown.setRangeText(changed, lineStart, boundary, "select");
        emit(markdown.value); return;
      }
      if (command === "clear-format") {
        const plain = markdown.value.slice(start, end).replace(/[*_~`<>]/g, "");
        markdown.setRangeText(plain, start, end, "select"); emit(markdown.value); return;
      }
      insertMarkdown(core.buildCommandMarkdown(command, {}, selectedText()));
    };

    const specialCommand = async (command, trigger) => {
      if (command === "outline") {
        toggleOutline();
        return true;
      }
      if (command === "copy-markdown") {
        await navigator.clipboard.writeText(markdown.value);
        notify("Markdown copié.", "success"); return true;
      }
      if (command === "download-markdown") {
        const url = URL.createObjectURL(new Blob([markdown.value], { type: "text/markdown;charset=utf-8" }));
        const link = document.createElement("a"); link.href = url; link.download = `${options.filename || "contenu"}.md`; link.click(); URL.revokeObjectURL(url);
        notify("Export Markdown préparé.", "success"); return true;
      }
      if (command === "import-markdown") { wrapper.querySelector("[data-editor-import]").click(); return true; }
      if (command === "upload-image" || command === "upload-pdf") {
        const input = wrapper.querySelector("[data-editor-upload]");
        input.accept = command === "upload-image" ? ".png,.jpg,.jpeg,.webp,.gif,image/png,image/jpeg,image/webp,image/gif" : ".pdf,application/pdf";
        input.click(); return true;
      }
      if (command === "outline") return true;
      return false;
    };

    const runCommand = async (command, trigger) => {
      wrapper.querySelectorAll(".tssr-editor-menu[open]").forEach((menu) => menu.removeAttribute("open"));
      if (await specialCommand(command, trigger)) return;
      if (IMMEDIATE.has(command)) { applyImmediate(command); return; }
      if (command === "heading") {
        insertMarkdown(core.buildCommandMarkdown("heading", { level: 2 }, selectedText())); return;
      }
      const descriptor = descriptorFor(command, selectedText(), options);
      if (!descriptor) { notify(`La commande « ${core.COMMAND_LABELS[command]?.[0] || command} » n’est pas disponible dans ce contexte.`, "error"); return; }
      openDialog({
        trigger,
        title: descriptor.title,
        description: command === "raw-markdown" ? "La source est validée avant insertion. Annuler ne modifie jamais le document." : "Renseignez les champs puis confirmez l’insertion.",
        fields: descriptor.fields,
        submitLabel: command === "find-replace" ? "Remplacer" : "Insérer",
        onSubmit: (rawValues) => {
          try {
            const values = normalizeDialogValues(command, rawValues);
            if (command === "find-replace") {
              const result = core.findReplace(markdown.value, values.query, values.replacement, values);
              if (!result.count) {
                const error = new Error("Aucune occurrence trouvée.");
                error.field = "query";
                throw error;
              }
              return () => {
                emit(result.value, { rerenderVisual: wrapper.dataset.mode === "visual" });
                notify(`${result.count} occurrence(s) remplacée(s).`, "success");
                return wrapper.dataset.mode === "visual" ? visual : markdown;
              };
            }
            const snippet = core.buildCommandMarkdown(command, values, selectedText());
            if (wrapper.dataset.mode === "visual" && INLINE_VISUAL.has(command)) {
              return () => {
                const focusTarget = visual.querySelector(`[data-visual-block-index="${activeVisualBlock}"]`);
                if (!applyVisualInline(command, values)) insertMarkdown(snippet);
                return focusTarget?.isConnected ? focusTarget : visual.querySelector(".tssr-editor-visual-block") || visual;
              };
            }
            return () => { insertMarkdown(snippet); return wrapper.dataset.mode === "visual" ? visual : markdown; };
          } catch (caught) {
            const urlFields = { link: "url", "internal-link": "path", "glossary-link": "path", image: "url", button: "url", card: "url", pdf: "url", video: "url", audio: "url", gallery: "items" };
            if (!caught.field && urlFields[command]) caught.field = urlFields[command];
            throw caught;
          }
        },
        onDeferredError: (caught) => notify(caught?.message || "La commande n’a pas pu être appliquée.", "error")
      });
    };

    const runCommandSafely = async (command, trigger) => {
      try {
        await runCommand(command, trigger);
      } catch (caught) {
        notify(caught?.message || "La commande n’a pas pu être exécutée.", "error");
      } finally {
        requestAnimationFrame(() => {
          if (!document.querySelector("dialog[open]") && document.activeElement === document.body && trigger?.isConnected) {
            trigger.focus?.({ preventScroll: true });
          }
        });
      }
    };

    const openPalette = (trigger) => {
      const paletteId = `tssr-editor-palette-${++dialogSequence}`;
      const dialog = document.createElement("dialog");
      dialog.className = "tssr-editor-palette";
      dialog.id = paletteId;
      dialog.setAttribute("aria-label", "Palette de commandes");
      const input = document.createElement("input");
      input.type = "search";
      input.placeholder = "Rechercher une commande…";
      input.setAttribute("role", "combobox");
      input.setAttribute("aria-autocomplete", "list");
      input.setAttribute("aria-expanded", "true");
      const results = document.createElement("div");
      results.id = `${paletteId}-results`;
      results.setAttribute("role", "listbox");
      input.setAttribute("aria-controls", results.id);
      let active = 0;
      let selectedCommand = null;
      const render = () => {
        const commands = core.commandSearch(input.value);
        results.replaceChildren();
        commands.forEach((command, index) => {
          const option = document.createElement("button");
          option.type = "button";
          option.id = `${paletteId}-option-${index}`;
          option.setAttribute("role", "option");
          option.setAttribute("aria-selected", String(index === active));
          const title = document.createElement("strong"); title.textContent = command.label;
          const description = document.createElement("small"); description.textContent = command.description;
          option.append(title, description);
          option.addEventListener("click", () => { selectedCommand = command.id; dialog.close("select"); });
          results.append(option);
        });
        active = Math.min(active, Math.max(0, commands.length - 1));
        const current = results.children[active];
        if (current) { current.setAttribute("aria-selected", "true"); input.setAttribute("aria-activedescendant", current.id); }
        else input.removeAttribute("aria-activedescendant");
      };
      input.addEventListener("input", () => { active = 0; render(); });
      input.addEventListener("keydown", (event) => {
        if (!["ArrowDown", "ArrowUp", "Enter"].includes(event.key)) return;
        event.preventDefault();
        if (event.key === "ArrowDown") active = Math.min(results.children.length - 1, active + 1);
        if (event.key === "ArrowUp") active = Math.max(0, active - 1);
        if (event.key === "Enter") { results.children[active]?.click(); return; }
        Array.from(results.children).forEach((item, index) => item.setAttribute("aria-selected", String(index === active)));
        const current = results.children[active];
        if (current) {
          input.setAttribute("aria-activedescendant", current.id);
          current.scrollIntoView({ block: "nearest" });
        } else input.removeAttribute("aria-activedescendant");
      });
      dialog.append(input, results);
      document.body.append(dialog);
      dialog.addEventListener("cancel", (event) => { event.preventDefault(); dialog.close(); });
      dialog.addEventListener("close", () => {
        dialog.remove();
        if (selectedCommand) queueMicrotask(() => runCommandSafely(selectedCommand, trigger));
        else requestAnimationFrame(() => trigger?.isConnected && trigger.focus?.({ preventScroll: true }));
      }, { once: true });
      dialog.showModal(); render(); input.focus();
    };

    const historyMove = (delta) => {
      recordHistory();
      const destination = history.index + delta;
      if (destination < 0 || destination >= history.entries.length) return;
      history.index = destination;
      emit(history.entries[destination], { record: false, rerenderVisual: wrapper.dataset.mode === "visual" });
    };

    const toggleFullscreen = (button, force) => {
      const next = force ?? !wrapper.classList.contains("is-fullscreen");
      wrapper.classList.toggle("is-fullscreen", next);
      button.setAttribute("aria-pressed", String(next));
      button.setAttribute("aria-label", next ? "Quitter le plein écran" : "Passer en plein écran");
      button.title = next ? "Quitter le plein écran" : "Plein écran";
      document.documentElement.classList.toggle("tssr-editor-fullscreen-open", next);
      if (next) { fullscreenRestore = document.activeElement; button.focus(); }
      else { fullscreenRestore?.focus?.({ preventScroll: true }); fullscreenRestore = null; }
    };

    markdown.addEventListener("input", () => {
      visualDocument = null;
      options.onChange?.(markdown.value);
      updateStats(); schedulePreview(); scheduleHistory();
    }, { signal });
    visual.addEventListener("input", (event) => {
      const block = event.target.closest?.(".tssr-editor-visual-block");
      if (block) commitVisualBlock(block);
    }, { signal });
    visual.addEventListener("focusin", saveVisualSelection, { signal });
    visual.addEventListener("keyup", saveVisualSelection, { signal });
    visual.addEventListener("mouseup", saveVisualSelection, { signal });
    visual.addEventListener("click", (event) => {
      const action = event.target.closest?.("[data-raw-action]");
      if (!action || !visualDocument) return;
      const index = Number(action.closest("[data-visual-block-index]").dataset.visualBlockIndex);
      const block = visualDocument.blocks[index];
      if (!block) return;
      if (action.dataset.rawAction === "edit") {
        openDialog({ trigger: action, title: `Modifier — ${block.label}`, description: "Seul ce bloc sera remplacé. Les blocs voisins restent byte-for-byte identiques.", fields: [{ name: "content", label: "Source Markdown", type: "textarea", value: block.raw, rows: 18, required: true, maxLength: 500000 }], submitLabel: "Enregistrer le bloc", onSubmit: (values) => {
          const previous = block.raw;
          try {
            block.raw = String(values.content);
            const candidate = core.serializeLosslessDocument(visualDocument);
            core.validateMarkdownTransition(trustedSource, candidate);
            block.raw = previous;
            return () => {
              block.raw = String(values.content);
              emit(candidate, { rerenderVisual: true });
              return visual.querySelector(`[data-visual-block-index="${index}"] [data-raw-action="edit"]`) || visual;
            };
          } catch (error) {
            block.raw = previous;
            error.field = "content";
            throw error;
          }
        }, onDeferredError: (caught) => notify(caught?.message || "Le bloc n’a pas pu être mis à jour.", "error") });
      } else if (action.dataset.rawAction === "duplicate") {
        const copy = { ...block, id: `${block.id}-copy`, originalRaw: "", raw: duplicateRawValue(block.raw) };
        visualDocument.blocks.splice(index + 1, 0, copy);
        try {
          const candidate = core.serializeLosslessDocument(visualDocument);
          core.validateMarkdownTransition(trustedSource, candidate);
          emit(candidate, { rerenderVisual: true });
        } catch (_) {
          visualDocument.blocks.splice(index + 1, 1);
          notify("Ce bloc historique contient un fragment sensible conservé uniquement à son emplacement d’origine et ne peut pas être dupliqué.", "error");
        }
      } else if (action.dataset.rawAction === "delete") {
        if (window.confirm(`Supprimer le bloc « ${block.label} » ?`)) { visualDocument.blocks.splice(index, 1); emit(core.serializeLosslessDocument(visualDocument), { rerenderVisual: true }); }
      } else {
        const destination = action.dataset.rawAction === "up" ? index - 1 : index + 1;
        if (destination >= 0 && destination < visualDocument.blocks.length) {
          [visualDocument.blocks[index], visualDocument.blocks[destination]] = [visualDocument.blocks[destination], visualDocument.blocks[index]];
          emit(core.serializeLosslessDocument(visualDocument), { rerenderVisual: true });
        }
      }
    }, { signal });

    wrapper.querySelector(".tssr-rich-editor__toolbar").addEventListener("pointerdown", saveVisualSelection, { signal });
    wrapper.querySelector(".tssr-rich-editor__toolbar").addEventListener("click", (event) => {
      const command = event.target.closest?.("[data-editor-command]");
      const action = event.target.closest?.("[data-editor-action]");
      if (command) runCommandSafely(command.dataset.editorCommand, command);
      else if (action?.dataset.editorAction === "undo") historyMove(-1);
      else if (action?.dataset.editorAction === "redo") historyMove(1);
      else if (action?.dataset.editorAction === "palette") openPalette(action);
      else if (action?.dataset.editorAction === "outline") {
        toggleOutline();
      } else if (action?.dataset.editorAction === "focus") {
        const active = wrapper.classList.toggle("is-focus-mode");
        if (active) toggleOutline(false);
        action.setAttribute("aria-pressed", String(active)); action.setAttribute("aria-label", active ? "Quitter le mode concentration" : "Activer le mode concentration");
      } else if (action?.dataset.editorAction === "help") openHelp(action);
    }, { signal });
    wrapper.querySelector("[data-editor-format]").addEventListener("change", (event) => {
      const level = event.target.value;
      if (wrapper.dataset.mode === "visual" && restoreVisualSelection()) {
        const selection = window.getSelection();
        const range = selection?.rangeCount ? selection.getRangeAt(0) : null;
        const startBlock = range ? closestVisualBlock(range.startContainer) : null;
        const endBlock = range ? closestVisualBlock(range.endContainer) : null;
        if (!startBlock || startBlock !== endBlock) {
          notify("Sélectionnez le contenu d’un seul bloc avant de changer son format.", "error");
          event.target.value = "paragraph";
          return;
        }
        document.execCommand("formatBlock", false, level === "paragraph" ? "p" : `h${level}`);
        commitVisualBlock(startBlock);
      } else if (level !== "paragraph") insertMarkdown(core.buildCommandMarkdown("heading", { level }, selectedText()));
      event.target.value = "paragraph";
    }, { signal });
    wrapper.querySelector("[data-editor-fullscreen]").addEventListener("click", (event) => toggleFullscreen(event.currentTarget), { signal });
    wrapper.querySelectorAll("[data-editor-mode]").forEach((button) => button.addEventListener("click", () => setMode(button.dataset.editorMode), { signal }));
    wrapper.querySelectorAll("[data-editor-layout]").forEach((button) => button.addEventListener("click", () => {
      const layout = button.dataset.editorLayout;
      wrapper.dataset.layout = layout;
      options.onLayout?.(layout);
      wrapper.querySelectorAll("[data-editor-layout]").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      if (layout !== "edit") renderPreview();
    }, { signal }));
    wrapper.querySelector("[data-editor-outline-close]").addEventListener("click", () => {
      toggleOutline(false);
    }, { signal });
    wrapper.querySelectorAll(".tssr-editor-menu").forEach((menu) => menu.addEventListener("toggle", () => {
      if (menu.open) closeEditorMenus(menu);
    }, { signal }));
    document.addEventListener("pointerdown", (event) => {
      if (!wrapper.contains(event.target) || !event.target.closest?.(".tssr-editor-menu")) closeEditorMenus();
    }, { signal });
    wrapper.querySelector("[data-editor-import]").addEventListener("change", async (event) => {
      const file = event.target.files?.[0]; event.target.value = "";
      if (!file) return;
      if (file.size > 2_000_000 || !/\.(?:md|markdown)$/i.test(file.name) && !/^text\/(?:markdown|plain)$/i.test(file.type)) { notify("Le fichier Markdown est invalide ou dépasse 2 Mo.", "error"); return; }
      try {
        const content = await file.text();
        const validated = core.validateMarkdownSecurity(content, 2_000_000);
        insertMarkdown(validated); notify("Markdown importé.", "success");
      } catch (error) { notify(error?.message || "Le fichier Markdown n’a pas pu être lu.", "error"); }
    }, { signal });
    wrapper.querySelector("[data-editor-upload]").addEventListener("change", async (event) => {
      const files = Array.from(event.target.files || []);
      event.target.value = "";
      if (!files.length) return;
      try {
        const result = await options.onFiles?.(files);
        if (result?.accepted !== 0) notify("Fichier(s) ajouté(s) à la proposition. Choisissez leur destination dans Ressources / PDF.", "success");
      } catch (error) { notify(error?.message || "Le téléversement a échoué.", "error"); }
    }, { signal });

    const handleFiles = (event) => {
      const files = Array.from(event.dataTransfer?.files || event.clipboardData?.files || []);
      if (!files.length) return false;
      event.preventDefault();
      Promise.resolve(options.onFiles?.(files)).then((result) => {
        if (result?.accepted !== 0) notify("Fichier(s) ajouté(s) à la proposition. Choisissez leur destination dans Ressources / PDF.", "success");
      }).catch((error) => notify(error?.message || "Le téléversement a échoué.", "error"));
      return true;
    };
    [markdown, visual].forEach((element) => {
      element.addEventListener("drop", handleFiles, { signal });
      element.addEventListener("paste", (event) => {
        if (handleFiles(event) || element === markdown) return;
        event.preventDefault();
        document.execCommand("insertText", false, event.clipboardData?.getData("text/plain") || "");
      }, { signal });
      element.addEventListener("keydown", (event) => {
        const modifier = event.metaKey || event.ctrlKey;
        if (modifier && event.shiftKey && event.key.toLowerCase() === "p") { event.preventDefault(); openPalette(element); return; }
        if (modifier && event.key.toLowerCase() === "b") { event.preventDefault(); applyImmediate("bold"); return; }
        if (modifier && event.key.toLowerCase() === "i") { event.preventDefault(); applyImmediate("italic"); return; }
        if (modifier && event.key.toLowerCase() === "k") { event.preventDefault(); runCommandSafely("link", element); return; }
        if (modifier && event.key.toLowerCase() === "z") { event.preventDefault(); historyMove(event.shiftKey ? 1 : -1); return; }
        if (event.key !== "/" || modifier || event.altKey) return;
        if (element === markdown) {
          const before = markdown.value.slice(0, markdown.selectionStart);
          if (!/(?:^|\n)[\t ]*$/.test(before) || markdown.selectionStart !== markdown.selectionEnd) return;
        } else {
          const block = event.target.closest?.(".tssr-editor-visual-block");
          if (!block || block.textContent.trim()) return;
        }
        event.preventDefault(); openPalette(element);
      }, { signal });
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && wrapper.querySelector(".tssr-editor-menu[open]")) {
        event.preventDefault();
        const summary = wrapper.querySelector(".tssr-editor-menu[open] > summary");
        closeEditorMenus();
        summary?.focus({ preventScroll: true });
        return;
      }
      if (event.key === "Escape" && wrapper.classList.contains("is-fullscreen") && !document.querySelector("dialog[open]")) toggleFullscreen(wrapper.querySelector("[data-editor-fullscreen]"), false);
      if (event.key === "Tab" && wrapper.classList.contains("is-fullscreen")) {
        const focusable = Array.from(wrapper.querySelectorAll('button:not([disabled]), select:not([disabled]), textarea:not([disabled]), [contenteditable="true"], summary')).filter((element) => element.offsetParent !== null);
        if (!focusable.length) return;
        const first = focusable[0], last = focusable.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    }, { signal });

    updateStats();
    if (wrapper.dataset.mode === "visual") renderVisual();
    if (wrapper.dataset.layout !== "edit" && !wrapper.closest("[hidden]")) renderPreview();
    return {
      activate() {
        updateStats();
        if (wrapper.dataset.mode === "visual" && !visualDocument) renderVisual();
        if (wrapper.dataset.layout !== "edit") renderPreview();
      },
      destroy() {
        abortController.abort();
        window.clearTimeout(previewTimer); window.clearTimeout(historyTimer);
        if (wrapper.classList.contains("is-fullscreen")) toggleFullscreen(wrapper.querySelector("[data-editor-fullscreen]"), false);
      }
    };
  }

  return Object.freeze({ markup, mount, openDialog, duplicateRawValue });
});
