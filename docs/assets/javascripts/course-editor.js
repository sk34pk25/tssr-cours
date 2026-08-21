(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.TSSRAdvancedEditor = api;
})(typeof window !== "undefined" ? window : globalThis, function () {
  "use strict";

  const VERSION = 2;
  const MAX_DIALOG_TEXT = 500_000;
  const ADMONITION_TYPES = Object.freeze([
    "note", "abstract", "info", "tip", "success", "question", "warning",
    "failure", "danger", "bug", "example", "quote"
  ]);
  const CODE_LANGUAGES = Object.freeze([
    "bash", "shell", "powershell", "batch", "python", "javascript", "typescript",
    "json", "yaml", "xml", "html", "css", "sql", "ini", "toml", "dockerfile",
    "cisco", "nginx", "apache", "text", "mermaid"
  ]);
  const CONTROLLED_COLORS = Object.freeze([
    "primary", "accent", "info", "success", "warning", "danger", "neutral"
  ]);
  const TEXT_SIZES = Object.freeze(["xs", "sm", "normal", "lg", "xl", "title"]);
  const ALIGNMENTS = Object.freeze(["left", "center", "right", "justify"]);
  const MERMAID_TEMPLATES = Object.freeze({
    flowchart: "flowchart LR\n    A[Départ] --> B{Décision}\n    B -->|Oui| C[Action]\n    B -->|Non| D[Alternative]",
    sequence: "sequenceDiagram\n    participant Client\n    participant Serveur\n    Client->>Serveur: Requête\n    Serveur-->>Client: Réponse",
    class: "classDiagram\n    class Client {\n      +adresseIP\n      +connecter()\n    }\n    class Serveur {\n      +service\n      +repondre()\n    }\n    Client --> Serveur",
    state: "stateDiagram-v2\n    [*] --> Initialisation\n    Initialisation --> Actif\n    Actif --> Erreur\n    Erreur --> Actif\n    Actif --> [*]",
    er: "erDiagram\n    UTILISATEUR ||--o{ TICKET : ouvre\n    TICKET }o--|| TECHNICIEN : attribue",
    mindmap: "mindmap\n  root((Infrastructure TSSR))\n    Réseau\n      VLAN\n      Routage\n    Systèmes\n      Windows\n      Linux",
    timeline: "timeline\n    title Déploiement\n    Préparation : Inventaire\n    Installation : Configuration\n    Validation : Tests",
    gantt: "gantt\n    title Plan de déploiement\n    dateFormat YYYY-MM-DD\n    section Préparation\n    Inventaire :a1, 2026-01-01, 2d\n    section Production\n    Déploiement :after a1, 3d",
    pie: "pie title Répartition des postes\n    \"Windows\" : 70\n    \"Linux\" : 30",
    journey: "journey\n    title Résolution d’un incident\n    section Diagnostic\n      Collecter les symptômes: 5: Technicien\n      Isoler la cause: 4: Technicien\n    section Résolution\n      Appliquer le correctif: 4: Technicien\n      Valider avec l’utilisateur: 5: Utilisateur, Technicien",
    architecture: "architecture-beta\n    group lan(cloud)[Réseau local]\n    service client(server)[Client] in lan\n    service switch(internet)[Switch] in lan\n    service router(internet)[Routeur]\n    client:R -- L:switch\n    switch:R -- L:router",
    block: "block-beta\n    columns 3\n    Client space Switch\n    space Routeur space\n    Switch --> Routeur",
    network: "flowchart LR\n    Client[Client] --> Switch[Switch]\n    Switch --> Routeur[Routeur]\n    Routeur --> Internet((Internet))",
    clientServer: "flowchart LR\n    Client1[Client 1] --> Serveur[(Serveur)]\n    Client2[Client 2] --> Serveur\n    Serveur --> DNS[DNS]",
    vlan: "flowchart TB\n    Routeur[Routeur / Pare-feu] --> Trunk[Trunk 802.1Q]\n    Trunk --> VLAN10[VLAN 10 - Utilisateurs]\n    Trunk --> VLAN20[VLAN 20 - Serveurs]\n    Trunk --> VLAN30[VLAN 30 - Administration]",
    dmz: "flowchart LR\n    Internet --> Parefeu[Pare-feu]\n    Parefeu --> DMZ[DMZ - Serveur Web]\n    Parefeu --> LAN[LAN interne]\n    LAN --> AD[AD / DNS / DHCP]",
    dhcpDns: "sequenceDiagram\n    participant Client\n    participant DHCP\n    participant DNS\n    Client->>DHCP: DHCP Discover\n    DHCP-->>Client: DHCP Offer\n    Client->>DHCP: DHCP Request\n    DHCP-->>Client: DHCP ACK\n    Client->>DNS: Résolution de nom\n    DNS-->>Client: Adresse IP"
  });

  const COMMAND_GROUPS = Object.freeze([
    { id: "text", label: "Texte", commands: ["heading", "bold", "italic", "underline", "strike", "inline-code", "superscript", "subscript", "highlight", "clear-format"] },
    { id: "lists", label: "Listes", commands: ["bullet-list", "ordered-list", "checklist", "quote", "separator", "indent", "outdent"] },
    { id: "insert", label: "Insertion", commands: ["link", "internal-link", "glossary-link", "anchor", "image", "gallery", "table", "emoji", "separator"] },
    { id: "blocks", label: "Blocs", commands: ["quote", "admonition", "details", "tabs", "procedure", "prerequisites", "objectives", "common-error", "example"] },
    { id: "code", label: "Code", commands: ["code-block", "terminal", "config-file", "path"] },
    { id: "media", label: "Média", commands: ["upload-image", "upload-pdf", "image", "pdf", "video", "audio"] },
    { id: "diagrams", label: "Diagrammes", commands: ["mermaid", "network-diagram"] },
    { id: "layout", label: "Mise en page", commands: ["alignment", "text-size", "text-color", "background-color", "button", "badge", "card", "columns"] },
    { id: "advanced", label: "Avancé", commands: ["footnote", "abbreviation", "definition", "raw-markdown", "import-markdown", "copy-markdown", "download-markdown", "find-replace", "outline", "template"] }
  ]);

  const COMMAND_LABELS = Object.freeze({
    heading: ["Titre H1 à H6", "Choisir le niveau du titre"],
    bold: ["Gras", "Mettre la sélection en gras"],
    italic: ["Italique", "Mettre la sélection en italique"],
    underline: ["Souligné", "Souligner avec du HTML contrôlé"],
    strike: ["Barré", "Barrer la sélection"],
    "inline-code": ["Code en ligne", "Mettre en évidence une commande courte"],
    superscript: ["Exposant", "Mettre la sélection en exposant"],
    subscript: ["Indice", "Mettre la sélection en indice"],
    highlight: ["Surlignage", "Surligner la sélection"],
    "clear-format": ["Effacer le format", "Conserver le texte sans mise en forme"],
    "bullet-list": ["Liste à puces", "Créer une liste non ordonnée"],
    "ordered-list": ["Liste numérotée", "Créer une liste ordonnée"],
    checklist: ["Liste de tâches", "Créer des tâches cochées ou non"],
    indent: ["Augmenter le retrait", "Indenter les lignes sélectionnées"],
    outdent: ["Réduire le retrait", "Retirer un niveau d’indentation"],
    link: ["Lien", "Insérer un lien externe ou relatif"],
    "internal-link": ["Lien interne", "Rechercher une page de la documentation"],
    "glossary-link": ["Terme du glossaire", "Créer un lien vers une définition"],
    anchor: ["Titre avec ancre", "Créer une section et une ancre stable"],
    image: ["Image", "Insérer une image avec texte alternatif et taille"],
    "upload-image": ["Téléverser une image", "Ajouter une image validée à la proposition"],
    "upload-pdf": ["Téléverser un PDF", "Ajouter un PDF validé à la proposition"],
    gallery: ["Galerie", "Insérer plusieurs images dans une grille responsive"],
    table: ["Tableau", "Créer un tableau Markdown de la taille souhaitée"],
    emoji: ["Emoji ou icône", "Insérer une icône Material ou un emoji courant"],
    separator: ["Séparateur", "Insérer une ligne horizontale"],
    quote: ["Citation", "Insérer une citation à un ou plusieurs niveaux"],
    admonition: ["Admonition", "Note, astuce, avertissement ou autre encadré MkDocs"],
    details: ["Bloc repliable", "Créer un bloc fermé ou ouvert par défaut"],
    tabs: ["Onglets", "Créer des onglets Material pour plusieurs plateformes"],
    procedure: ["Procédure", "Créer une procédure technique pas à pas"],
    prerequisites: ["Prérequis", "Créer un encadré de prérequis"],
    objectives: ["Objectifs", "Créer une liste d’objectifs pédagogiques"],
    "common-error": ["Erreur fréquente", "Documenter une erreur et sa résolution"],
    example: ["Exemple", "Ajouter un exemple pédagogique"],
    "code-block": ["Bloc de code", "Code multi-langages avec titre et numéros de ligne"],
    terminal: ["Commande terminal", "Bash, PowerShell, CMD ou Cisco"],
    "config-file": ["Fichier de configuration", "Afficher un chemin et son contenu"],
    path: ["Chemin", "Mettre en évidence un chemin Windows ou Linux"],
    pdf: ["PDF", "Créer un accès sécurisé à un PDF"],
    video: ["Vidéo", "Créer un lien vidéo responsive et sûr"],
    audio: ["Audio", "Créer un accès à une ressource audio autorisée"],
    mermaid: ["Mermaid", "Créer un diagramme à partir d’un modèle"],
    "network-diagram": ["Schéma réseau", "Utiliser un modèle réseau TSSR"],
    alignment: ["Alignement", "Gauche, centre, droite ou justifié"],
    "text-size": ["Taille du texte", "Appliquer une taille contrôlée"],
    "text-color": ["Couleur du texte", "Appliquer une couleur du thème"],
    "background-color": ["Surlignage coloré", "Appliquer un fond contrôlé"],
    button: ["Bouton", "Créer un lien sous forme de bouton Material"],
    badge: ["Badge", "Créer un badge pédagogique"],
    card: ["Carte", "Créer une carte Material avec titre et lien"],
    columns: ["Colonnes", "Créer deux ou trois colonnes responsive"],
    footnote: ["Note de bas de page", "Créer une référence et sa définition"],
    abbreviation: ["Abréviation", "Définir un acronyme pour le document"],
    definition: ["Liste de définition", "Créer un terme et sa définition"],
    "raw-markdown": ["Markdown brut", "Préserver un bloc avancé sans conversion"],
    "import-markdown": ["Importer du Markdown", "Importer un fichier .md ou du texte"],
    "copy-markdown": ["Copier le Markdown", "Copier la source complète"],
    "download-markdown": ["Télécharger le Markdown", "Exporter le document courant"],
    "find-replace": ["Rechercher / remplacer", "Rechercher, remplacer ou tout remplacer"],
    outline: ["Plan du document", "Naviguer entre les titres"],
    template: ["Modèle TSSR", "Insérer un cours, TP, exercice, procédure ou fiche"]
  });

  const FORBIDDEN_MARKDOWN = Object.freeze([
    /<\s*script\b/i,
    /<\s*(iframe|object|embed|form|input|button|svg|meta|base|link|template|video|audio|source|style|plaintext|xmp|textarea|marquee)\b/i,
    /javascript\s*:/i,
    /vbscript\s*:/i,
    /\b(?:src|href)\s*=\s*["']?\s*data\s*:/i,
    /\]\(\s*data\s*:/i,
    /\bsrcdoc\s*=/i
  ]);

  function normalize(value) {
    return String(value ?? "").replaceAll("\0", "").replace(/\r\n?/g, "\n");
  }

  function decodeSecurityEntities(value) {
    return String(value ?? "")
      .replace(/&#x([0-9a-f]+);?/gi, (_, code) => String.fromCodePoint(Math.min(Number.parseInt(code, 16) || 0, 0x10ffff)))
      .replace(/&#([0-9]+);?/g, (_, code) => String.fromCodePoint(Math.min(Number.parseInt(code, 10) || 0, 0x10ffff)))
      .replace(/&(colon|tab|newline|sol|bsol|amp|quot|apos);/gi, (_, name) => ({
        colon: ":", tab: "\t", newline: "\n", sol: "/", bsol: "\\", amp: "&", quot: '"', apos: "'"
      })[name.toLowerCase()]);
  }

  function htmlBlockOpeningForSecurity(line) {
    const body = line.replace(/^ {0,3}/, "");
    const rawTag = body.match(/^<(script|pre|style|textarea)(?=\s|>|$)/i)?.[1];
    if (rawTag) return { kind: "until", pattern: new RegExp(`</${rawTag}\\s*>`, "i") };
    if (body.startsWith("<!--")) return { kind: "until", pattern: /-->/ };
    if (body.startsWith("<?")) return { kind: "until", pattern: /\?>/ };
    if (/^<!\[CDATA\[/i.test(body)) return { kind: "until", pattern: /\]\]>/ };
    if (/^<![A-Z]/.test(body)) return { kind: "until", pattern: />/ };
    if (/^<\/?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?=\s|\/?>|$)/i.test(body)) {
      return { kind: "blank" };
    }
    const trimmed = body.trimEnd();
    const first = readHtmlToken(trimmed, 0);
    return first && first.end === trimmed.length ? { kind: "blank" } : null;
  }

  function maskCodeForSecurity(value) {
    const source = String(value ?? "");
    const output = source.split("");
    const barriers = new Uint8Array(source.length);
    const lines = source.match(/[^\r\n]*(?:\r\n|\r|\n|$)/g)?.filter(Boolean) || [];
    let offset = 0;
    let fence = null;
    let htmlBlock = null;
    const mark = (start, end, barrier = false) => {
      for (let index = start; index < end; index += 1) {
        if (!/[\r\n]/.test(output[index])) output[index] = " ";
        if (barrier) barriers[index] = 1;
      }
    };
    lines.forEach((line) => {
      const start = offset;
      const end = start + line.length;
      offset = end;
      const text = line.replace(/[\r\n]+$/, "");
      if (fence) {
        mark(start, end);
        const closing = text.match(/^ {0,3}(`+|~+)\s*$/)?.[1];
        if (closing && closing[0] === fence[0] && closing.length >= fence.length) fence = null;
        return;
      }
      if (htmlBlock) {
        if (htmlBlock.kind === "blank" && !text.trim()) {
          barriers.fill(1, start, end);
          htmlBlock = null;
          return;
        }
        barriers.fill(1, start, end);
        if (htmlBlock.kind === "until" && htmlBlock.pattern.test(text)) htmlBlock = null;
        return;
      }
      const openingHtml = htmlBlockOpeningForSecurity(text);
      if (openingHtml) {
        barriers.fill(1, start, end);
        if (!(openingHtml.kind === "until" && openingHtml.pattern.test(text))) htmlBlock = openingHtml;
        return;
      }
      if (!text.trim()) barriers.fill(1, start, end);
      const opening = text.match(/^ {0,3}(`{3,}|~{3,})(.*)$/);
      if (!opening || opening[1][0] === "`" && opening[2].includes("`")) return;
      fence = opening[1];
      mark(start, end);
    });

    const tagMask = new Uint8Array(source.length);
    let htmlIndex = 0;
    while ((htmlIndex = source.indexOf("<", htmlIndex)) >= 0) {
      const token = readHtmlToken(source, htmlIndex);
      if (!token) { htmlIndex += 1; continue; }
      tagMask.fill(1, token.start, token.end);
      htmlIndex = token.end;
    }
    const runs = [];
    for (let index = 0; index < source.length;) {
      if (output[index] !== "`" || barriers[index] || tagMask[index]) { index += 1; continue; }
      const start = index;
      while (index < source.length && output[index] === "`") index += 1;
      let slashCount = 0;
      for (let cursor = start - 1; cursor >= 0 && source[cursor] === "\\"; cursor -= 1) slashCount += 1;
      if (slashCount % 2 === 0) runs.push({ start, end: index, length: index - start });
    }
    const barrierPrefix = new Uint32Array(source.length + 1);
    for (let index = 0; index < source.length; index += 1) barrierPrefix[index + 1] = barrierPrefix[index] + barriers[index];
    const nextSame = new Int32Array(runs.length);
    nextSame.fill(-1);
    const lastRun = new Map();
    for (let index = runs.length - 1; index >= 0; index -= 1) {
      const key = `${barrierPrefix[runs[index].start]}:${runs[index].length}`;
      if (lastRun.has(key)) nextSame[index] = lastRun.get(key);
      lastRun.set(key, index);
    }
    for (let index = 0; index < runs.length; index += 1) {
      const opening = runs[index];
      const closingIndex = nextSame[index];
      if (closingIndex < 0) continue;
      mark(opening.start, runs[closingIndex].end);
      index = closingIndex;
    }
    return output.join("");
  }

  function readHtmlToken(value, start) {
    const source = String(value ?? "");
    if (source.startsWith("<!--", start)) {
      const end = source.indexOf("-->", start + 4);
      if (end < 0) throw new Error("Commentaire HTML non fermé.");
      return { raw: source.slice(start, end + 3), start, end: end + 3, comment: true, name: "", closing: false, selfClosing: false };
    }
    if (!/^<\/?\s*[a-z][a-z0-9-]*(?=[\s/>])/i.test(source.slice(start))) return null;
    let cursor = start + 1;
    let quote = "";
    while (cursor < source.length) {
      const character = source[cursor];
      if (quote) {
        if (character === quote) quote = "";
      } else if (character === '"' || character === "'") quote = character;
      else if (character === ">") break;
      cursor += 1;
    }
    if (cursor >= source.length) return null;
    const raw = source.slice(start, cursor + 1);
    const match = raw.match(/^<\s*(\/?)\s*([a-z][a-z0-9-]*)/i);
    if (!match) return null;
    return {
      raw,
      start,
      end: cursor + 1,
      comment: false,
      name: match[2].toLowerCase(),
      closing: Boolean(match[1]),
      selfClosing: /\/\s*>$/.test(raw)
    };
  }

  function htmlTagRanges(value) {
    const source = String(value ?? "");
    const tags = [];
    let index = 0;
    while ((index = source.indexOf("<", index)) >= 0) {
      const token = readHtmlToken(source, index);
      if (!token) { index += 1; continue; }
      if (!token.comment) tags.push(token);
      index = token.end;
    }
    return tags;
  }

  function htmlTags(value) {
    return htmlTagRanges(value).map((token) => token.raw);
  }

  function htmlBlockEnd(value, start) {
    const source = String(value ?? "");
    const first = readHtmlToken(source, start);
    if (!first) return start;
    if (first.comment) return first.end;
    const voidTags = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
    if (first.closing || first.selfClosing || voidTags.has(first.name)) return first.end;
    let depth = 0;
    let cursor = start;
    while (cursor < source.length) {
      const opening = source.indexOf("<", cursor);
      if (opening < 0) break;
      const token = readHtmlToken(source, opening);
      if (!token) { cursor = opening + 1; continue; }
      cursor = token.end;
      if (token.comment || token.name !== first.name) continue;
      if (token.closing) depth -= 1;
      else if (!token.selfClosing && !voidTags.has(token.name)) depth += 1;
      if (depth === 0) return token.end;
    }
    return source.length;
  }

  function validateControlledHtml(value) {
    const allowedTags = new Set(["div", "span", "figure", "figcaption", "u", "mark", "sup", "sub"]);
    const simpleTags = new Set(["figcaption", "u", "mark", "sup", "sub"]);
    for (const rawTag of htmlTags(value)) {
      const match = rawTag.match(/^<\s*(\/?)\s*([a-z][a-z0-9-]*)([\s\S]*?)>$/i);
      if (!match) throw new Error("Balise HTML invalide.");
      const closing = Boolean(match[1]);
      const tag = match[2].toLowerCase();
      if (!allowedTags.has(tag)) throw new Error(`La balise HTML <${tag}> n’est pas autorisée.`);
      if (closing) continue;
      let attributes = match[3].replace(/\/\s*$/, "").trim();
      if (simpleTags.has(tag) && attributes) throw new Error(`Les attributs de <${tag}> ne sont pas autorisés.`);
      const parsed = {};
      while (attributes) {
        const attribute = attributes.match(/^([a-z][a-z0-9:-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?(?:\s+|$)/i);
        if (!attribute) throw new Error("Attribut HTML invalide ou non cité.");
        parsed[attribute[1].toLowerCase()] = attribute[2] ?? attribute[3] ?? attribute[4] ?? "";
        attributes = attributes.slice(attribute[0].length);
      }
      const allowedAttributes = tag === "span" ? new Set(["class"]) : tag === "figcaption" ? new Set() : new Set(["class", "markdown"]);
      if (Object.keys(parsed).some((name) => !allowedAttributes.has(name))) throw new Error("Attribut HTML non autorisé.");
      if (parsed.markdown !== undefined && !["", "1"].includes(parsed.markdown)) throw new Error("Attribut markdown invalide.");
      const classes = String(parsed.class || "").split(/\s+/).filter(Boolean);
      const allowedClass = (name) => name === "grid" || name === "cards" ||
        /^tssr-content-(?:figure(?:--(?:left|center|right))?|gallery|columns(?:--[23])?|align--(?:left|center|right|justify)|text--(?:xs|sm|normal|lg|xl|title)|color--(?:primary|accent|info|success|warning|danger|neutral)|background--(?:primary|accent|info|success|warning|danger|neutral)|badge(?:--(?:primary|accent|info|success|warning|danger|neutral))?|image--(?:left|center|right))$/.test(name);
      if (classes.some((name) => !allowedClass(name))) throw new Error("Classe HTML non autorisée.");
    }
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character];
    });
  }

  function cleanInline(value, fallback = "") {
    return normalize(value).replace(/\s+/g, " ").trim().slice(0, 2_000) || fallback;
  }

  function escapeMarkdown(value) {
    return cleanInline(value).replace(/([\\`*_{}\[\]()#+.!|<>])/g, "\\$1");
  }

  function safeAnchor(value, fallback = "section") {
    const slug = normalize(value)
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/['’]/g, "-")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .replace(/-{2,}/g, "-")
      .slice(0, 80)
      .replace(/-+$/g, "");
    return slug || fallback;
  }

  function safeUrl(value, options = {}) {
    const raw = normalize(value).trim();
    if (!raw && options.allowEmpty) return "";
    const canonical = decodeSecurityEntities(raw).trim();
    if (!canonical || canonical.length > 2_000 || /[\u0000-\u001f\u007f]/.test(canonical) || /[<>{}\[\]()"']/.test(canonical) || /&[a-z0-9#]+;/i.test(canonical)) {
      throw new Error("URL invalide.");
    }
    const securityProbe = canonical.replace(/[\u0000-\u0020\u007f]+/g, "");
    if (/^(?:javascript|vbscript|data|file|blob):/i.test(securityProbe) || securityProbe.startsWith("//")) {
      throw new Error("Ce protocole d’URL est interdit.");
    }
    if (canonical.startsWith("#")) return `#${safeAnchor(canonical.slice(1))}`;
    if (/^[a-z][a-z0-9+.-]*:/i.test(canonical)) {
      let parsed;
      try { parsed = new URL(canonical); } catch (_) { throw new Error("URL invalide."); }
      if (parsed.protocol !== "https:" || parsed.username || parsed.password) {
        throw new Error("Seules les URL HTTPS sans identifiants intégrés sont autorisées.");
      }
      return parsed.href;
    }
    if (
      canonical.includes("\\") || /[<>{}\[\]()"']/.test(canonical) ||
      !/^[\p{L}\p{N}._~!$&*+,;=:@%/?#\- ]+$/u.test(canonical) ||
      canonical.split(/[?#]/)[0].split("/").includes("..") && options.noParent
    ) {
      throw new Error("Chemin relatif interdit.");
    }
    return canonical.replace(/\s/g, "%20");
  }

  function validateMarkdownSecurity(value, maximum = MAX_DIALOG_TEXT) {
    const markdown = String(value ?? "").replaceAll("\0", "");
    if (markdown.length > maximum) throw new Error(`Le contenu dépasse ${Math.round(maximum / 1_000_000 * 10) / 10} Mo.`);
    const interpreted = maskCodeForSecurity(markdown);
    const securityProbe = decodeSecurityEntities(interpreted)
      .replace(/j[\t\n\r ]*a[\t\n\r ]*v[\t\n\r ]*a[\t\n\r ]*s[\t\n\r ]*c[\t\n\r ]*r[\t\n\r ]*i[\t\n\r ]*p[\t\n\r ]*t[\t\n\r ]*:/gi, "javascript:")
      .replace(/v[\t\n\r ]*b[\t\n\r ]*s[\t\n\r ]*c[\t\n\r ]*r[\t\n\r ]*i[\t\n\r ]*p[\t\n\r ]*t[\t\n\r ]*:/gi, "vbscript:")
      .replace(/d[\t\n\r ]*a[\t\n\r ]*t[\t\n\r ]*a[\t\n\r ]*:/gi, "data:");
    if (FORBIDDEN_MARKDOWN.some((pattern) => pattern.test(securityProbe))) {
      throw new Error("Le Markdown contient du HTML actif ou une URL interdite.");
    }
    if (htmlTags(securityProbe).some((tag) =>
      /\s(?:on[a-z]+|style|srcdoc|ping)\s*=/i.test(tag) ||
      /\s(?:href|src|xlink:href|action|formaction)\s*=\s*(?:["']\s*)?(?:javascript|vbscript|data)\s*:/i.test(tag)
    )) throw new Error("Le Markdown contient un attribut HTML actif ou interdit.");
    return markdown;
  }

  function validateUserMarkdown(value) {
    const markdown = validateMarkdownSecurity(value);
    validateControlledHtml(maskCodeForSecurity(markdown));
    return markdown;
  }

  function isMaskedCodeSpan(masked, start, length) {
    const view = masked.slice(start, start + length);
    return view.length === length && !/[^\s]/.test(view);
  }

  function removeOnceOutsideCode(content, fragment) {
    const masked = maskCodeForSecurity(content);
    let index = content.indexOf(fragment);
    while (index >= 0) {
      if (!isMaskedCodeSpan(masked, index, fragment.length)) {
        return `${content.slice(0, index)}${content.slice(index + fragment.length)}`;
      }
      index = content.indexOf(fragment, index + fragment.length);
    }
    return content;
  }

  function validateMarkdownTransition(originalValue, nextValue) {
    const original = String(originalValue ?? "").replaceAll("\0", "");
    const next = String(nextValue ?? "").replaceAll("\0", "");
    const maskedOriginal = maskCodeForSecurity(original);
    const fragments = [
      ...htmlTagRanges(original).map((token) => ({ value: token.raw, index: token.start })),
      ...Array.from(original.matchAll(/!?\[[^\]]*\]\([^\n)]*\)/g), (match) => ({ value: match[0], index: match.index }))
    ].filter((fragment) => !isMaskedCodeSpan(maskedOriginal, fragment.index, fragment.value.length))
      .filter((fragment) => {
        try { validateMarkdownSecurity(fragment.value); return false; } catch (_) { return true; }
      });
    let candidate = next;
    fragments.forEach((fragment) => { candidate = removeOnceOutsideCode(candidate, fragment.value); });
    validateMarkdownSecurity(candidate, 2_000_000);
    return next;
  }

  function indent(value, spaces = 4) {
    const prefix = " ".repeat(spaces);
    return normalize(value).split("\n").map((line) => `${prefix}${line}`).join("\n");
  }

  function selected(value, fallback) {
    const result = normalize(value).trim();
    return result || fallback;
  }

  function fenced(language, content, options = {}) {
    const safeLanguage = CODE_LANGUAGES.includes(language) ? language : "text";
    const attributes = [];
    const title = cleanInline(options.title);
    if (title) attributes.push(`title="${title.replaceAll('"', "&quot;")}"`);
    if (options.linenums) attributes.push(`linenums="${Math.max(1, Number(options.startLine) || 1)}"`);
    const highlights = cleanInline(options.highlight).replace(/[^0-9 ,.-]/g, "");
    if (highlights) attributes.push(`hl_lines="${highlights}"`);
    const body = normalize(content).replace(/^\n+|\n+$/g, "");
    const longest = Math.max(2, ...Array.from(body.matchAll(/`+/g), (match) => match[0].length));
    const delimiter = "`".repeat(longest + 1);
    return `${delimiter}${safeLanguage}${attributes.length ? ` ${attributes.join(" ")}` : ""}\n${body}\n${delimiter}`;
  }

  function codeSpan(value) {
    const content = String(value ?? "");
    const longest = Math.max(0, ...Array.from(content.matchAll(/`+/g), (match) => match[0].length));
    const delimiter = "`".repeat(longest + 1);
    const padding = /^`|`$|^ | $/.test(content) ? " " : "";
    return `${delimiter}${padding}${content}${padding}${delimiter}`;
  }

  function buildTable(rows, columns, values = {}) {
    const safeRows = Math.max(2, Math.min(20, Number(rows) || 2));
    const safeColumns = Math.max(1, Math.min(12, Number(columns) || 2));
    const headers = Array.from({ length: safeColumns }, (_, index) => cleanInline(values.headers?.[index], `Colonne ${index + 1}`).replaceAll("|", "\\|"));
    const alignment = Array.from({ length: safeColumns }, (_, index) => {
      const current = values.alignments?.[index];
      return current === "center" ? ":---:" : current === "right" ? "---:" : ":---";
    });
    const body = Array.from({ length: safeRows - 1 }, (_, rowIndex) =>
      `| ${Array.from({ length: safeColumns }, (_, columnIndex) => cleanInline(values.cells?.[rowIndex]?.[columnIndex], `Valeur ${rowIndex + 1}.${columnIndex + 1}`).replaceAll("|", "\\|")).join(" | ")} |`
    );
    return `| ${headers.join(" | ")} |\n| ${alignment.join(" | ")} |\n${body.join("\n")}`;
  }

  function buildCommandMarkdown(command, values = {}, selection = "") {
    const text = selected(values.text ?? selection, "Texte");
    let markdown = "";
    switch (command) {
      case "heading": {
        const level = Math.max(1, Math.min(6, Number(values.level) || 2));
        markdown = `${"#".repeat(level)} ${cleanInline(text, "Titre")}`;
        break;
      }
      case "bold": markdown = `**${text}**`; break;
      case "italic": markdown = `*${text}*`; break;
      case "underline": markdown = `<u>${escapeHtml(text)}</u>`; break;
      case "strike": markdown = `~~${text}~~`; break;
      case "inline-code": {
        markdown = codeSpan(text);
        break;
      }
      case "superscript": markdown = `<sup>${escapeHtml(text)}</sup>`; break;
      case "subscript": markdown = `<sub>${escapeHtml(text)}</sub>`; break;
      case "highlight": markdown = `<mark>${escapeHtml(text)}</mark>`; break;
      case "bullet-list": markdown = normalize(text).split("\n").map((line) => `- ${line || "Élément"}`).join("\n"); break;
      case "ordered-list": markdown = normalize(text).split("\n").map((line, index) => `${index + 1}. ${line || "Étape"}`).join("\n"); break;
      case "checklist": markdown = normalize(text).split("\n").map((line) => `- [${values.checked ? "x" : " "}] ${line || "Tâche"}`).join("\n"); break;
      case "quote": markdown = normalize(text).split("\n").map((line) => `> ${line}`).join("\n"); break;
      case "separator": markdown = "---"; break;
      case "link":
      case "internal-link":
      case "glossary-link": {
        const url = safeUrl(values.url || values.path || "#");
        const label = escapeMarkdown(values.label || text || url);
        const title = cleanInline(values.title);
        const attributes = values.newTab ? '{ target="_blank" rel="noopener noreferrer" }' : "";
        markdown = `[${label}](${url}${title ? ` "${title.replaceAll('"', "&quot;")}"` : ""})${attributes}`;
        break;
      }
      case "anchor": {
        const level = Math.max(2, Math.min(6, Number(values.level) || 2));
        const title = cleanInline(values.title || text, "Nouvelle section");
        markdown = `${"#".repeat(level)} ${title} { #${safeAnchor(values.anchor || title)} }`;
        break;
      }
      case "image": {
        const url = safeUrl(values.url || "");
        const alt = escapeMarkdown(values.alt || text || "Illustration");
        const title = cleanInline(values.title);
        const width = ["25", "50", "75", "100"].includes(String(values.width)) ? String(values.width) : "100";
        const align = ["left", "center", "right"].includes(values.align) ? values.align : "center";
        const image = `![${alt}](${url}${title ? ` "${title.replaceAll('"', "&quot;")}"` : ""}){ width="${width}%" .tssr-content-image--${align} }`;
        const caption = cleanInline(values.caption);
        markdown = caption
          ? `<figure class="tssr-content-figure tssr-content-figure--${align}" markdown="1">\n\n${image}\n\n<figcaption>${escapeHtml(caption)}</figcaption>\n</figure>`
          : image;
        break;
      }
      case "gallery": {
        const images = Array.isArray(values.images) ? values.images.slice(0, 12) : [];
        if (!images.length) throw new Error("Ajoutez au moins une image à la galerie.");
        markdown = `<div class="tssr-content-gallery" markdown="1">\n\n${images.map((item, index) => `![${escapeMarkdown(item.alt || `Image ${index + 1}`)}](${safeUrl(item.url)}${item.title ? ` "${cleanInline(item.title).replaceAll('"', "&quot;")}"` : ""})`).join("\n\n")}\n\n</div>`;
        break;
      }
      case "table": markdown = buildTable(values.rows, values.columns, values); break;
      case "emoji": {
        const common = new Set(["✅", "❌", "⚠️", "💡", "📌", "🔒", "🌐", "🖥️", "🛠️", "📚"]);
        markdown = values.emoji && common.has(values.emoji)
          ? values.emoji
          : `:material-${safeAnchor(values.icon || "server-network", "server-network")}:`;
        break;
      }
      case "code-block": markdown = fenced(values.language, values.content || selection || "# Contenu", values); break;
      case "terminal": {
        const shell = ["bash", "powershell", "batch", "cisco"].includes(values.shell) ? values.shell : "bash";
        markdown = fenced(shell, values.command || selection || "commande --option", { title: values.title || `Commande ${shell}`, linenums: false });
        if (values.explanation) markdown += `\n\n${normalize(values.explanation).trim()}`;
        break;
      }
      case "config-file": {
        const path = cleanInline(values.path, "/etc/exemple.conf");
        markdown = fenced(values.language, values.content || selection || "# Configuration", { title: path, linenums: values.linenums });
        break;
      }
      case "path": {
        const path = cleanInline(values.path || text, "/chemin/vers/fichier");
        markdown = codeSpan(path);
        break;
      }
      case "admonition":
      case "details": {
        const type = ADMONITION_TYPES.includes(values.type) ? values.type : "note";
        const prefix = command === "details" || values.collapsible ? values.open ? "???+" : "???" : "!!!";
        const title = cleanInline(values.title, COMMAND_LABELS[type]?.[0] || type.charAt(0).toUpperCase() + type.slice(1));
        markdown = `${prefix} ${type} "${title.replaceAll('"', "&quot;")}"\n${indent(values.content || selection || "Contenu de l’encadré")}`;
        break;
      }
      case "tabs": {
        const tabs = Array.isArray(values.tabs) ? values.tabs.slice(0, 10) : [];
        if (tabs.length < 2) throw new Error("Deux onglets au minimum sont nécessaires.");
        markdown = tabs.map((tab, index) => `=== "${cleanInline(tab.title, `Onglet ${index + 1}`).replaceAll('"', "&quot;")}"\n\n${indent(tab.content || "Contenu à compléter")}`).join("\n\n");
        break;
      }
      case "mermaid":
      case "network-diagram": {
        const template = values.template || (command === "network-diagram" ? "network" : "flowchart");
        const code = normalize(values.code || MERMAID_TEMPLATES[template] || MERMAID_TEMPLATES.flowchart).trim();
        markdown = fenced("mermaid", code);
        break;
      }
      case "alignment": {
        const align = ALIGNMENTS.includes(values.align) ? values.align : "left";
        markdown = `<div class="tssr-content-align--${align}" markdown="1">\n\n${text}\n\n</div>`;
        break;
      }
      case "text-size": {
        const size = TEXT_SIZES.includes(values.size) ? values.size : "normal";
        markdown = `<span class="tssr-content-text--${size}">${escapeHtml(text)}</span>`;
        break;
      }
      case "text-color":
      case "background-color": {
        const color = CONTROLLED_COLORS.includes(values.color) ? values.color : "primary";
        const family = command === "text-color" ? "color" : "background";
        markdown = `<span class="tssr-content-${family}--${color}">${escapeHtml(text)}</span>`;
        break;
      }
      case "button": {
        const url = safeUrl(values.url || "#");
        const primary = values.primary ? " .md-button--primary" : "";
        const external = /^https:\/\//i.test(url) ? ' target="_blank" rel="noopener noreferrer"' : "";
        markdown = `[${escapeMarkdown(values.label || text || "Ouvrir")}](${url}){ .md-button${primary}${external} }`;
        break;
      }
      case "badge": {
        const color = CONTROLLED_COLORS.includes(values.color) ? values.color : "info";
        markdown = `<span class="tssr-content-badge tssr-content-badge--${color}">${escapeHtml(values.label || text)}</span>`;
        break;
      }
      case "card": {
        const title = cleanInline(values.title, "Nouvelle carte");
        const description = normalize(values.description || text || "Description").trim();
        const icon = safeAnchor(values.icon || "book-open-page-variant", "book-open-page-variant");
        const link = values.url ? `\n\n[${cleanInline(values.linkLabel, "Ouvrir")}](${safeUrl(values.url)})` : "";
        markdown = `<div class="grid cards" markdown>\n\n-   :material-${icon}:{ .lg .middle } **${title}**\n\n    ---\n\n${indent(description, 4)}${link ? indent(link, 4) : ""}\n\n</div>`;
        break;
      }
      case "columns": {
        const count = Number(values.columns) === 3 ? 3 : 2;
        const columns = Array.isArray(values.contents) ? values.contents.slice(0, count) : [];
        markdown = `<div class="tssr-content-columns tssr-content-columns--${count}" markdown="1">\n${Array.from({ length: count }, (_, index) => `<div markdown="1">\n\n${normalize(columns[index] || `Colonne ${index + 1}`).trim()}\n\n</div>`).join("\n")}\n</div>`;
        break;
      }
      case "footnote": {
        const id = safeAnchor(values.id || "note", "note");
        markdown = `[^${id}]\n\n[^${id}]: ${normalize(values.content || text || "Texte de la note").trim().replace(/\n/g, "\n    ")}`;
        break;
      }
      case "abbreviation": markdown = `*[${cleanInline(values.term || text, "DHCP")}]: ${cleanInline(values.definition, "Définition complète")}`; break;
      case "definition": markdown = `${cleanInline(values.term || text, "Terme")}\n:   ${normalize(values.definition || "Définition").trim().replace(/\n/g, "\n    ")}`; break;
      case "raw-markdown": markdown = validateUserMarkdown(values.content || selection || ""); break;
      case "procedure": {
        const steps = Array.isArray(values.steps) ? values.steps : normalize(values.content || selection).split("\n").filter(Boolean);
        markdown = `!!! example "${cleanInline(values.title, "Procédure pas à pas").replaceAll('"', "&quot;")}"\n${indent(steps.map((step, index) => `${index + 1}. ${cleanInline(step, `Étape ${index + 1}`)}`).join("\n"))}`;
        break;
      }
      case "prerequisites": markdown = `!!! abstract "Prérequis"\n${indent(normalize(values.content || selection || "- Prérequis à compléter").trim())}`; break;
      case "objectives": markdown = `!!! success "Objectifs"\n${indent(normalize(values.content || selection || "- Objectif à compléter").trim())}`; break;
      case "common-error": markdown = `??? failure "Erreur fréquente — ${cleanInline(values.title, "Diagnostic").replaceAll('"', "&quot;")}"\n${indent(values.content || selection || "**Symptôme :** À compléter.\n\n**Cause :** À compléter.\n\n**Résolution :** À compléter.")}`; break;
      case "example": markdown = `!!! example "${cleanInline(values.title, "Exemple").replaceAll('"', "&quot;")}"\n${indent(values.content || selection || "Exemple à compléter.")}`; break;
      case "pdf":
      case "video":
      case "audio": {
        const url = safeUrl(values.url || "");
        const label = cleanInline(values.title, command === "pdf" ? "Ouvrir le PDF" : command === "video" ? "Voir la vidéo" : "Écouter l’audio");
        const description = normalize(values.description || "").trim();
        markdown = `[${escapeMarkdown(label)}](${url}){ .md-button target="_blank" rel="noopener noreferrer" }${description ? `\n\n${description}` : ""}`;
        break;
      }
      case "template": markdown = templateMarkdown(values.template || "course", values); break;
      default: throw new Error(`Commande d’éditeur inconnue : ${command}`);
    }
    const validated = validateUserMarkdown(markdown);
    return command === "raw-markdown" ? validated : validated.trim();
  }

  function templateMarkdown(template, values = {}) {
    const title = escapeHtml(cleanInline(values.title, "Nouveau contenu TSSR"));
    const templates = {
      course: `# ${title}\n\n## Objectifs\n\n- Objectif 1\n- Objectif 2\n\n## Prérequis\n\n- Prérequis 1\n\n## Cours\n\nContenu pédagogique.\n\n## Commandes\n\n${fenced("bash", "commande --option", { title: "Commande" })}\n\n!!! tip "À retenir"\n    Point essentiel.\n\n## Exercices\n\n1. Exercice à réaliser.`,
      lab: `# TP — ${title}\n\n## Objectif\n\nObjectif du TP.\n\n## Prérequis\n\n- Prérequis 1\n\n## Environnement\n\n- Machine ou VM\n\n## Étapes\n\n1. Première étape\n2. Deuxième étape\n\n## Vérification\n\n${fenced("bash", "commande-de-verification", { title: "Contrôle" })}\n\n??? success "Correction"\n    Correction à compléter.`,
      exercise: `# Exercice — ${title}\n\n## Consigne\n\nConsigne à compléter.\n\n??? tip "Indice"\n    Indice facultatif.\n\n??? success "Solution"\n    Solution à compléter.`,
      procedure: `# Procédure — ${title}\n\n## Prérequis\n\n- Prérequis 1\n\n## Étapes\n\n1. Première étape\n2. Deuxième étape\n3. Vérifier le résultat\n\n!!! warning "Attention"\n    Point de vigilance.`,
      revision: `# Fiche de révision — ${title}\n\n## À connaître\n\n- Notion essentielle\n\n## Commandes utiles\n\n${fenced("text", "commande", { title: "Mémo" })}\n\n## Tableau récapitulatif\n\n${buildTable(3, 2)}\n\n!!! success "À retenir"\n    Résumé en une phrase.`
    };
    return validateUserMarkdown(templates[template] || templates.course);
  }

  function classifyRawBlock(raw) {
    const text = raw.trimStart();
    if (/^```mermaid\b/.test(text)) return "Diagramme Mermaid";
    if (/^```|^~~~/.test(text)) return "Bloc de code";
    if (/^!!!/.test(text)) return "Admonition";
    if (/^\?\?\?\+?/.test(text)) return "Bloc repliable";
    if (/^===\s+"/.test(text)) return "Onglets MkDocs";
    if (/^\|.+\|\s*\n\|/.test(text)) return "Tableau Markdown";
    if (/^- \[[ xX]\]/.test(text)) return "Checklist";
    if (/^\[\^[^\]]+\]:/.test(text)) return "Note de bas de page";
    if (/^\*\[[^\]]+\]:/.test(text)) return "Abréviation";
    if (/^\$\$/.test(text)) return "Formule";
    if (/^</.test(text)) return "Composant HTML contrôlé";
    if (/\{[^{}]+\}\s*$/.test(text)) return "Attributs Material";
    return "Bloc Markdown protégé";
  }

  function lineOffsets(markdown) {
    const lines = [];
    let start = 0;
    while (start < markdown.length) {
      let end = start;
      while (end < markdown.length && markdown[end] !== "\n" && markdown[end] !== "\r") end += 1;
      let fullEnd = end;
      if (markdown[fullEnd] === "\r" && markdown[fullEnd + 1] === "\n") fullEnd += 2;
      else if (markdown[fullEnd] === "\r" || markdown[fullEnd] === "\n") fullEnd += 1;
      lines.push({ text: markdown.slice(start, end), start, end, fullEnd });
      start = fullEnd;
    }
    if (!markdown.length || /(?:\r\n|\r|\n)$/.test(markdown)) {
      lines.push({ text: "", start: markdown.length, end: markdown.length, fullEnd: markdown.length });
    }
    return lines;
  }

  function protectAdvancedMarkdown(value) {
    const markdown = String(value ?? "");
    const lines = lineOffsets(markdown);
    const ranges = [];
    const add = (startLine, endLine) => {
      const start = lines[startLine]?.start ?? 0;
      const end = endLine >= lines.length ? markdown.length : lines[endLine].start;
      if (end > start) ranges.push({ start, end });
    };
    let index = 0;
    while (index < lines.length) {
      const line = lines[index].text;
      if (index === 0 && /^---\s*$/.test(line)) {
        let end = 1;
        while (end < lines.length && !/^(?:---|\.\.\.)\s*$/.test(lines[end].text)) end += 1;
        if (end < lines.length) {
          add(0, end + 1); index = end + 1; continue;
        }
      }
      const fence = line.match(/^\s*(```+|~~~+)/);
      if (fence) {
        const delimiter = fence[1];
        let end = index + 1;
        while (end < lines.length) {
          const closing = lines[end].text.match(/^ {0,3}(`+|~+)\s*$/)?.[1];
          if (closing && closing[0] === delimiter[0] && closing.length >= delimiter.length) break;
          end += 1;
        }
        add(index, Math.min(lines.length, end + 1)); index = end + 1; continue;
      }
      if (/^\s*(?:!!!|\?\?\?\+?)\s+/.test(line)) {
        let end = index + 1;
        while (end < lines.length && (!lines[end].text.trim() || /^(?: {4}|\t)/.test(lines[end].text))) end += 1;
        add(index, end); index = end; continue;
      }
      if (/^===\s+"/.test(line)) {
        let end = index + 1;
        while (end < lines.length && (!lines[end].text.trim() || /^(?: {4}|\t)/.test(lines[end].text) || /^===\s+"/.test(lines[end].text))) end += 1;
        add(index, end); index = end; continue;
      }
      if (/^\s*\|.*\|\s*$/.test(line) && /^\s*\|?\s*:?-{3,}/.test(lines[index + 1]?.text || "")) {
        let end = index + 2;
        while (end < lines.length && /^\s*\|.*\|\s*$/.test(lines[end].text)) end += 1;
        add(index, end); index = end; continue;
      }
      if (/^\s*-\s+\[[ xX]\]\s+/.test(line)) {
        let end = index + 1;
        while (end < lines.length && (!lines[end].text.trim() || /^\s*(?:[-*+]\s+\[[ xX]\]| {2,}\S)/.test(lines[end].text))) end += 1;
        add(index, end); index = end; continue;
      }
      if (/^\[\^[^\]]+\]:/.test(line) || /^\*\[[^\]]+\]:/.test(line)) {
        let end = index + 1;
        while (end < lines.length && (!lines[end].text.trim() || /^(?: {4}|\t)/.test(lines[end].text))) end += 1;
        add(index, end); index = end; continue;
      }
      if (/^\s*\[[^\]]+\]:\s*\S+/.test(line)) {
        add(index, index + 1); index += 1; continue;
      }
      if (index + 1 < lines.length && /^:\s+/.test(lines[index + 1].text)) {
        let end = index + 2;
        while (end < lines.length && (!lines[end].text.trim() || /^(?: {4}|\t)/.test(lines[end].text))) end += 1;
        add(index, end); index = end; continue;
      }
      if (/^\s*\$\$\s*$/.test(line)) {
        let end = index + 1;
        while (end < lines.length && !/^\s*\$\$\s*$/.test(lines[end].text)) end += 1;
        add(index, Math.min(lines.length, end + 1)); index = end + 1; continue;
      }
      if (/^\s*(?:<!--|<[a-z][a-z0-9-]*(?=[\s/>]))/i.test(line)) {
        const relativeStart = line.search(/\S/);
        const endOffset = htmlBlockEnd(markdown, lines[index].start + Math.max(0, relativeStart));
        let end = index + 1;
        while (end < lines.length && lines[end].start < endOffset) end += 1;
        add(index, Math.min(lines.length, end)); index = Math.max(index + 1, end); continue;
      }
      if (/\{[^{}]+\}\s*$/.test(line)) {
        add(index, index + 1); index += 1; continue;
      }
      index += 1;
    }
    ranges.sort((left, right) => left.start - right.start);
    const merged = [];
    ranges.forEach((range) => {
      const previous = merged.at(-1);
      if (previous && range.start < previous.end) previous.end = Math.max(previous.end, range.end);
      else merged.push({ ...range });
    });
    const blocks = [];
    let cursor = 0;
    let protectedMarkdown = "";
    merged.forEach((range, blockIndex) => {
      protectedMarkdown += markdown.slice(cursor, range.start);
      const raw = markdown.slice(range.start, range.end);
      let marker = `TSSRRAWBLOCK${blockIndex}A91F`;
      while (markdown.includes(marker)) marker += "X";
      const ending = raw.match(/(?:\r\n|\r|\n)$/)?.[0] || "";
      const placeholder = `${marker}${ending}`;
      blocks.push({ marker, placeholder, raw, label: classifyRawBlock(raw), start: range.start, end: range.end });
      protectedMarkdown += placeholder;
      cursor = range.end;
    });
    protectedMarkdown += markdown.slice(cursor);
    return { markdown: protectedMarkdown, blocks };
  }

  function restoreAdvancedMarkdown(value, blocks) {
    let markdown = String(value ?? "");
    (blocks || []).forEach((block) => {
      markdown = markdown.replace(block.placeholder || block.marker, block.raw);
    });
    return markdown;
  }

  function splitSimpleRange(markdown, absoluteStart) {
    if (!markdown) return [];
    const output = [];
    const separator = /(?:\r\n|\r|\n)[\t ]*(?:\r\n|\r|\n)(?:[\t ]*(?:\r\n|\r|\n))*/g;
    let cursor = 0;
    let match;
    while ((match = separator.exec(markdown))) {
      const end = match.index + match[0].length;
      output.push({ raw: markdown.slice(cursor, end), start: absoluteStart + cursor, end: absoluteStart + end });
      cursor = end;
    }
    if (cursor < markdown.length) output.push({ raw: markdown.slice(cursor), start: absoluteStart + cursor, end: absoluteStart + markdown.length });
    return output;
  }

  function splitTrailingWhitespace(raw) {
    const match = raw.match(/(?:\r\n|\r|\n)[\t \r\n]*$/);
    if (!match) return { body: raw, suffix: "" };
    return { body: raw.slice(0, -match[0].length), suffix: match[0] };
  }

  function isBasicVisualBlock(body) {
    const text = body.trim();
    if (!text) return false;
    if (/^(?: {4}|\t)/m.test(body)) return false;
    if (/^(?:```|~~~|!!!|\?\?\?|===|\|.*\||\[\^|\*\[|<|\$\$)/m.test(text)) return false;
    if (/\{[^{}]+\}\s*$|\[\^[^\]]+\]|^\[[^\]]+\]:|^:\s+/m.test(body)) return false;
    if (/^[-*+]\s+\[[ xX]\]\s+/m.test(body)) return false;
    if (/^[-*+]\s+.*\n\s{2,}[-*+]\s+/m.test(body)) return false;
    return true;
  }

  function parseLosslessDocument(value) {
    const markdown = String(value ?? "");
    const protectedResult = protectAdvancedMarkdown(markdown);
    const advanced = protectedResult.blocks.slice().sort((left, right) => left.start - right.start);
    const blocks = [];
    let cursor = 0;
    const appendSimple = (raw, start) => {
      splitSimpleRange(raw, start).forEach((segment) => {
        const parts = splitTrailingWhitespace(segment.raw);
        const basic = isBasicVisualBlock(parts.body);
        const whitespaceOnly = !parts.body.trim();
        blocks.push({
          id: `visual-${blocks.length}`,
          kind: whitespaceOnly ? "separator" : basic ? "basic" : "raw",
          label: whitespaceOnly ? "Espacement" : basic ? "Bloc éditable" : classifyRawBlock(parts.body),
          raw: segment.raw,
          originalRaw: segment.raw,
          body: parts.body,
          suffix: parts.suffix,
          start: segment.start,
          end: segment.end,
          editable: basic
        });
      });
    };
    advanced.forEach((block) => {
      if (block.start > cursor) appendSimple(markdown.slice(cursor, block.start), cursor);
      blocks.push({ ...block, id: `visual-${blocks.length}`, kind: "raw", body: block.raw, originalRaw: block.raw, suffix: "", editable: false });
      cursor = block.end;
    });
    if (cursor < markdown.length) appendSimple(markdown.slice(cursor), cursor);
    if (!blocks.length || blocks.every((block) => block.kind === "separator")) {
      blocks.unshift({ id: "visual-empty", kind: "basic", label: "Bloc éditable", raw: "", originalRaw: "", body: "", suffix: "", start: 0, end: 0, editable: true });
    }
    return { source: markdown, blocks };
  }

  function serializeLosslessDocument(documentModel) {
    return (documentModel?.blocks || []).map((block) => String(block.raw ?? "")).join("");
  }

  function documentStats(value) {
    const markdown = normalize(value);
    const plain = markdown
      .replace(/(`{3,}|~{3,})[\s\S]*?\1/g, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/[#>*_`~\[\]{}()|:-]/g, " ");
    const words = plain.trim() ? plain.trim().split(/\s+/u).length : 0;
    return { characters: markdown.length, words, minutes: words ? Math.max(1, Math.ceil(words / 220)) : 0 };
  }

  function documentOutline(value) {
    const outlineSource = normalize(value).replace(/^(#{1,6}\s+.*?)\s+\{[^}]*\}\s*$/gm, "$1");
    const protectedDocument = protectAdvancedMarkdown(outlineSource);
    return protectedDocument.markdown.split("\n").flatMap((line, index) => {
      const match = line.match(/^(#{1,6})\s+(.+?)(?:\s+\{[^}]*\})?\s*$/);
      return match ? [{ level: match[1].length, title: match[2].replace(/[*_`]/g, "").trim(), line: index + 1 }] : [];
    });
  }

  function findReplace(value, query, replacement, options = {}) {
    const source = String(value ?? "");
    const needle = String(query ?? "");
    if (!needle) return { value: source, count: 0 };
    const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const expression = new RegExp(escaped, `${options.all ? "g" : ""}${options.caseSensitive ? "" : "i"}`);
    let count = 0;
    const result = source.replace(expression, () => { count += 1; return String(replacement ?? ""); });
    return { value: result, count };
  }

  function commandSearch(query) {
    const normalizedQuery = normalize(query).toLocaleLowerCase("fr").trim();
    return Object.entries(COMMAND_LABELS).map(([id, [label, description]]) => ({ id, label, description }))
      .filter((item) => !normalizedQuery || `${item.label} ${item.description} ${item.id}`.toLocaleLowerCase("fr").includes(normalizedQuery));
  }

  return Object.freeze({
    VERSION,
    ADMONITION_TYPES,
    CODE_LANGUAGES,
    CONTROLLED_COLORS,
    TEXT_SIZES,
    ALIGNMENTS,
    MERMAID_TEMPLATES,
    COMMAND_GROUPS,
    COMMAND_LABELS,
    escapeHtml,
    escapeMarkdown,
    safeAnchor,
    safeUrl,
    validateMarkdownSecurity,
    validateUserMarkdown,
    validateMarkdownTransition,
    buildCommandMarkdown,
    templateMarkdown,
    protectAdvancedMarkdown,
    restoreAdvancedMarkdown,
    parseLosslessDocument,
    serializeLosslessDocument,
    classifyRawBlock,
    documentStats,
    documentOutline,
    findReplace,
    commandSearch
  });
});
