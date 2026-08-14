/* TSSR collaborative documentation client. Public credentials only; every mutation is server-authorized. */
(function () {
  const utils = window.TSSRCollaborationUtils;
  const config = window.TSSR_COLLABORATION_CONFIG || {};
  const state = {
    client: null,
    session: null,
    profile: null,
    initialized: false,
    dashboardTab: "pending",
    navigationModel: null,
    navigationSource: null
  };

  function siteRoot() {
    try {
      const material = JSON.parse(document.getElementById("__config")?.textContent || "{}");
      return new URL(`${material.base || "."}/`, window.location.href);
    } catch (_) {
      return new URL("./", window.location.href);
    }
  }

  function siteUrl(path) {
    return new URL(path.replace(/^\//, ""), siteRoot()).href;
  }

  function currentSourcePath() {
    const value = document.querySelector("[data-tssr-source-path]")?.dataset.tssrSourcePath ||
      document.querySelector('meta[name="tssr-source-path"]')?.content;
    return utils.sourcePath(value);
  }

  function formatDate(value) {
    if (!value) return "—";
    return new Intl.DateTimeFormat("fr-FR", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
  }

  function setBusy(button, busy, label) {
    if (!button) return;
    if (busy) {
      button.dataset.originalLabel = button.textContent;
      button.textContent = label || "Traitement…";
      button.disabled = true;
    } else {
      button.textContent = button.dataset.originalLabel || button.textContent;
      button.disabled = false;
    }
  }

  function toast(message, kind = "success") {
    let element = document.querySelector(".tssr-collab-toast");
    if (!element) {
      element = document.createElement("div");
      element.className = "tssr-collab-toast";
      element.setAttribute("role", "status");
      document.body.appendChild(element);
    }
    element.className = `tssr-collab-toast tssr-collab-toast--${kind}`;
    element.textContent = message;
    element.hidden = false;
    window.clearTimeout(element._hideTimer);
    element._hideTimer = window.setTimeout(() => { element.hidden = true; }, 4500);
  }

  function createDialog(title, content, options = {}) {
    const dialog = document.createElement("dialog");
    dialog.className = `tssr-collab-dialog${options.small ? " tssr-collab-dialog--small" : ""}`;
    dialog.setAttribute("aria-labelledby", `tssr-dialog-${Date.now()}`);
    dialog.innerHTML = `
      <div class="tssr-dialog__header">
        <h2 id="${dialog.getAttribute("aria-labelledby")}">${utils.escapeHtml(title)}</h2>
        <button type="button" class="tssr-dialog__close" aria-label="Fermer">×</button>
      </div>
      <div class="tssr-dialog__body">${content}</div>
    `;
    const closeButton = dialog.querySelector(".tssr-dialog__close");
    closeButton.hidden = Boolean(options.locked);
    if (options.locked) {
      dialog.addEventListener("cancel", (event) => event.preventDefault());
    } else {
      closeButton.addEventListener("click", () => dialog.close());
      dialog.addEventListener("click", (event) => {
        if (event.target === dialog) dialog.close();
      });
    }
    dialog.addEventListener("close", () => dialog.remove(), { once: true });
    document.body.appendChild(dialog);
    dialog.showModal();
    return dialog;
  }

  function formMessage(form, message, kind = "error") {
    let node = form.querySelector(".tssr-form-message");
    if (!node) {
      node = document.createElement("div");
      node.className = "tssr-form-message";
      node.setAttribute("role", "alert");
      form.prepend(node);
    }
    node.className = `tssr-form-message tssr-form-${kind}`;
    node.textContent = message;
  }

  async function invoke(functionName, body) {
    if (!state.client) throw new Error("La collaboration Supabase n’est pas encore configurée.");
    const { data, error } = await state.client.functions.invoke(functionName, { body });
    if (error) {
      let message = error.message;
      try {
        const details = await error.context?.json();
        if (details?.error) message = details.error;
      } catch (_) { /* The generic error remains useful. */ }
      throw new Error(message);
    }
    if (data?.error) throw new Error(data.error);
    return data;
  }

  function injectHeader() {
    const header = document.querySelector(".md-header__inner");
    if (!header || header.querySelector(".tssr-collab-header")) return;
    const shell = document.createElement("div");
    shell.className = "tssr-collab-header";
    shell.innerHTML = `
      <button type="button" class="tssr-collab-auth" data-tssr-action="login" aria-haspopup="dialog">
        <span aria-hidden="true">👤</span><span class="tssr-collab-auth__label">Se connecter</span>
      </button>
      <button type="button" class="tssr-collab-user" aria-expanded="false" hidden>
        <span aria-hidden="true">👤</span><span class="tssr-collab-user__name"></span>
        <span class="tssr-collab-user__role"></span><span class="tssr-collab-user__chevron" aria-hidden="true"></span>
      </button>
      <div class="tssr-collab-menu" hidden>
        <button type="button" data-user-action="account">Mon compte</button>
        <a href="${siteUrl("collaboration/")}">Modifications <span data-pending-badge></span></a>
        <button type="button" data-user-action="edit" data-edit-only>Mode édition</button>
        <button type="button" data-user-action="navigation" data-edit-only>Navigation du site</button>
        <button type="button" data-user-action="admin" data-admin-only>Tableau de bord</button>
        <button type="button" class="tssr-collab-menu__danger" data-user-action="logout">Se déconnecter</button>
      </div>
    `;
    const search = header.querySelector('label[for="__search"]');
    header.insertBefore(shell, search || null);
    shell.querySelector(".tssr-collab-user").addEventListener("click", function () {
      const menu = shell.querySelector(".tssr-collab-menu");
      menu.hidden = !menu.hidden;
      this.setAttribute("aria-expanded", String(!menu.hidden));
    });
    shell.querySelector(".tssr-collab-menu").addEventListener("click", handleUserMenu);
    updateHeader();
  }

  function injectNotificationBar() {
    const container = document.querySelector(".md-container");
    if (!container || container.querySelector(":scope > .tssr-collab-notice")) return;
    const bar = document.createElement("div");
    bar.className = "tssr-collab-notice";
    bar.hidden = true;
    container.prepend(bar);
  }

  function updateHeader() {
    const shell = document.querySelector(".tssr-collab-header");
    if (!shell) return;
    const login = shell.querySelector(".tssr-collab-auth");
    const user = shell.querySelector(".tssr-collab-user");
    const menu = shell.querySelector(".tssr-collab-menu");
    login.hidden = Boolean(state.profile);
    user.hidden = !state.profile;
    menu.hidden = true;
    user.setAttribute("aria-expanded", "false");
    if (state.profile) {
      shell.querySelector(".tssr-collab-user__name").textContent = state.profile.display_name;
      shell.querySelector(".tssr-collab-user__role").textContent = state.profile.role === "admin" ? "Admin" : "";
    }
    shell.querySelectorAll("[data-edit-only]").forEach((element) => { element.hidden = !state.profile?.can_edit; });
    shell.querySelectorAll("[data-admin-only]").forEach((element) => { element.hidden = state.profile?.role !== "admin"; });
  }

  async function openLogin() {
    const dialog = createDialog("Se connecter", `
      <form class="tssr-form" id="tssr-login-form">
        <label class="tssr-field">Adresse e-mail
          <input type="email" name="email" autocomplete="username" required>
        </label>
        <label class="tssr-field">Mot de passe
          <input type="password" name="password" autocomplete="current-password" required>
        </label>
        <p class="tssr-help">Les comptes sont créés uniquement par un administrateur. Aucune inscription publique n’est proposée.</p>
        <button type="submit" class="md-button md-button--primary">Se connecter</button>
      </form>
    `, { small: true });
    const form = dialog.querySelector("form");
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const submit = form.querySelector('[type="submit"]');
      if (!state.client) {
        formMessage(form, "Supabase n’est pas encore configuré. Suivez ADMIN_SETUP.md pour activer la connexion.");
        return;
      }
      setBusy(submit, true, "Connexion…");
      const values = new FormData(form);
      const { error } = await state.client.auth.signInWithPassword({
        email: String(values.get("email") || "").trim(),
        password: String(values.get("password") || "")
      });
      setBusy(submit, false);
      if (error) {
        formMessage(form, "Connexion impossible. Vérifiez vos identifiants ou contactez un administrateur.");
        return;
      }
      dialog.close();
    });
    form.querySelector("input").focus();
  }

  async function loadProfile() {
    if (!state.client || !state.session) {
      state.profile = null;
      return;
    }
    const { data, error } = await state.client.from("profiles")
      .select("id, auth_user_id, display_name, email, role, can_edit, status, must_change_password")
      .eq("auth_user_id", state.session.user.id)
      .single();
    if (error || !data || data.status !== "active") {
      await state.client.auth.signOut();
      state.profile = null;
      throw new Error("Ce compte n’est pas actif.");
    }
    state.profile = data;
  }

  async function initializeAuth() {
    if (state.initialized) return;
    state.initialized = true;
    if (!utils.collaborationConfigured(config) || !window.supabase?.createClient) {
      updateHeader();
      renderCollaborationPage();
      return;
    }
    state.client = window.supabase.createClient(config.supabaseUrl, config.supabasePublishableKey, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
    });
    const { data } = await state.client.auth.getSession();
    state.session = data.session;
    try { await loadProfile(); } catch (error) { toast(error.message, "error"); }
    updateAuthenticatedUi();
    state.client.auth.onAuthStateChange(async (_event, session) => {
      state.session = session;
      try { await loadProfile(); } catch (error) { toast(error.message, "error"); }
      updateAuthenticatedUi();
      if (state.profile?.must_change_password) window.setTimeout(() => openAccount(true), 100);
    });
  }

  async function updateAuthenticatedUi() {
    updateHeader();
    enhanceCurrentPage();
    renderCollaborationPage();
    await updatePendingNotice();
  }

  async function updatePendingNotice() {
    const bar = document.querySelector(".tssr-collab-notice");
    if (!bar || !state.profile?.can_edit || !state.client) {
      if (bar) bar.hidden = true;
      return;
    }
    const { data, error } = await state.client.from("change_requests")
      .select("id, required_approvers, change_approvals(user_id, decision)")
      .eq("status", "pending");
    if (error) { bar.hidden = true; return; }
    const pending = (data || []).filter((request) =>
      request.required_approvers.includes(state.profile.id) &&
      !request.change_approvals.some((approval) => approval.user_id === state.profile.id)
    ).length;
    document.querySelectorAll("[data-pending-badge]").forEach((badge) => {
      badge.textContent = pending ? `(${pending})` : "";
    });
    if (!pending) { bar.hidden = true; return; }
    bar.innerHTML = `<a href="${siteUrl("collaboration/")}">🟠 ${pending} modification${pending > 1 ? "s" : ""} en attente de votre validation</a>`;
    bar.hidden = false;
  }

  async function handleUserMenu(event) {
    const action = event.target.closest("[data-user-action]")?.dataset.userAction;
    if (!action) return;
    if (action === "logout") {
      await state.client?.auth.signOut();
      toast("Vous êtes déconnecté.");
    } else if (action === "account") {
      openAccount(false);
    } else if (action === "edit") {
      openPageEditor();
    } else if (action === "navigation") {
      openNavigationEditor();
    } else if (action === "admin") {
      if (document.getElementById("tssr-collaboration-page")) {
        state.dashboardTab = "admin";
        renderCollaborationPage();
      } else {
        window.location.href = `${siteUrl("collaboration/")}#administration`;
      }
    }
  }

  function openAccount(forcePassword) {
    if (!state.profile) return openLogin();
    const dialog = createDialog(forcePassword ? "Choisir votre mot de passe" : "Mon compte", `
      <form class="tssr-form" id="tssr-account-form">
        ${forcePassword ? '<div class="tssr-form-error">Le mot de passe temporaire doit être remplacé avant de continuer.</div>' : ""}
        <label class="tssr-field">Nom affiché
          <input type="text" name="display_name" maxlength="100" value="${utils.escapeHtml(state.profile.display_name)}" required>
        </label>
        <label class="tssr-field">Adresse e-mail
          <input type="email" value="${utils.escapeHtml(state.profile.email)}" disabled>
        </label>
        <p class="tssr-help">Rôle : ${state.profile.role === "admin" ? "Administrateur" : "Membre"} · Modification : ${state.profile.can_edit ? "Oui" : "Non"}</p>
        <hr>
        <label class="tssr-field">Mot de passe actuel
          <input type="password" name="current_password" autocomplete="current-password">
        </label>
        <label class="tssr-field">Nouveau mot de passe
          <input type="password" name="new_password" minlength="12" autocomplete="new-password">
        </label>
        <label class="tssr-field">Confirmer le nouveau mot de passe
          <input type="password" name="confirm_password" minlength="12" autocomplete="new-password">
        </label>
        <button type="submit" class="md-button md-button--primary">Enregistrer</button>
      </form>
    `, { small: true, locked: forcePassword });
    const form = dialog.querySelector("form");
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const submit = form.querySelector('[type="submit"]');
      const values = new FormData(form);
      const displayName = String(values.get("display_name") || "").trim();
      const currentPassword = String(values.get("current_password") || "");
      const newPassword = String(values.get("new_password") || "");
      const confirmation = String(values.get("confirm_password") || "");
      if (forcePassword && !newPassword) return formMessage(form, "Vous devez choisir un nouveau mot de passe.");
      if (newPassword && (newPassword.length < 12 || newPassword !== confirmation)) {
        return formMessage(form, "Le nouveau mot de passe doit contenir 12 caractères et les deux saisies doivent correspondre.");
      }
      setBusy(submit, true);
      try {
        if (newPassword) {
          await invoke("admin-users", {
            action: "change-own-password",
            current_password: currentPassword,
            password: newPassword
          });
          state.profile.must_change_password = false;
        }
        if (displayName !== state.profile.display_name) {
          const result = await invoke("admin-users", { action: "update-own-profile", display_name: displayName });
          state.profile = result.profile;
        }
        updateHeader();
        dialog.close();
        toast("Compte mis à jour.");
      } catch (error) {
        formMessage(form, error.message);
      } finally {
        setBusy(submit, false);
      }
    });
  }

  function renderPreview(text, target) {
    if (!window.marked || !window.DOMPurify) {
      target.textContent = text;
      return;
    }
    target.innerHTML = window.DOMPurify.sanitize(window.marked.parse(text), {
      FORBID_TAGS: ["script", "iframe", "object", "embed", "form", "input", "button"],
      FORBID_ATTR: ["srcdoc"]
    });
  }

  function bindEditorTabs(dialog) {
    dialog.querySelectorAll("[data-editor-tab]").forEach((button) => {
      button.addEventListener("click", () => {
        dialog.querySelectorAll("[data-editor-tab]").forEach((item) => item.setAttribute("aria-selected", String(item === button)));
        dialog.querySelectorAll(".tssr-editor-pane").forEach((pane) => {
          pane.dataset.mobileHidden = String(pane.dataset.editorPane !== button.dataset.editorTab);
        });
      });
    });
  }

  async function imageProposal(file, pagePath) {
    if (!file) return null;
    const allowed = ["image/png", "image/jpeg", "image/webp", "image/gif"];
    if (!allowed.includes(file.type)) throw new Error("Format d’image autorisé : PNG, JPEG, WebP ou GIF.");
    if (file.size > 5_000_000) throw new Error("L’image dépasse 5 Mo.");
    const extension = { "image/png": "png", "image/jpeg": "jpg", "image/webp": "webp", "image/gif": "gif" }[file.type];
    const baseName = file.name.replace(/\.[^.]+$/, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 70) || "image";
    const filePath = `docs/assets/images/collaboration/${Date.now()}-${baseName}.${extension}`;
    const dataUrl = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(new Error("Lecture de l’image impossible."));
      reader.readAsDataURL(file);
    });
    return {
      change: {
        file_path: filePath,
        new_content: String(dataUrl).split(",")[1],
        content_encoding: "base64",
        change_type: "create"
      },
      markdown: `![${baseName.replaceAll("-", " ")}](${utils.relativeAssetPath(pagePath, filePath)})`
    };
  }

  async function openPageEditor(options = {}) {
    if (!state.profile?.can_edit) return;
    const filePath = options.filePath || currentSourcePath();
    if (!filePath) return toast("Cette page ne peut pas être reliée à un fichier Markdown.", "error");
    let source;
    try {
      const result = await invoke("change-requests", { action: "get-source", file_path: filePath });
      source = result.source;
    } catch (error) {
      return toast(error.message, "error");
    }
    const initialContent = options.initialContent ?? source.content;
    const dialog = createDialog(`Modifier : ${filePath.replace(/^docs\//, "")}`, `
      <form id="tssr-editor-form">
        <div class="tssr-editor-meta">
          <label class="tssr-field">Titre de la modification
            <input type="text" name="title" maxlength="160" value="${utils.escapeHtml(options.title || `Mise à jour de ${filePath.replace(/^docs\//, "")}`)}" required>
          </label>
          <label class="tssr-field">Description facultative
            <input type="text" name="description" maxlength="500" value="">
          </label>
        </div>
        <div class="tssr-editor-tabs" role="tablist">
          <button type="button" class="tssr-tab" data-editor-tab="editor" aria-selected="true">Éditeur</button>
          <button type="button" class="tssr-tab" data-editor-tab="preview" aria-selected="false">Aperçu</button>
        </div>
        <div class="tssr-editor-grid">
          <section class="tssr-editor-pane" data-editor-pane="editor">
            <div class="tssr-editor-pane__title">Markdown</div>
            <textarea class="tssr-markdown-editor" name="content" spellcheck="true">${utils.escapeHtml(initialContent)}</textarea>
          </section>
          <section class="tssr-editor-pane" data-editor-pane="preview" data-mobile-hidden="true">
            <div class="tssr-editor-pane__title">Aperçu sécurisé</div>
            <div class="tssr-markdown-preview md-typeset"></div>
          </section>
        </div>
        <div class="tssr-editor-tools">
          <label class="tssr-field">Ajouter une image
            <input type="file" name="image" accept="image/png,image/jpeg,image/webp,image/gif">
          </label>
          <span class="tssr-help">L’image rejoint la même proposition et n’est publiée qu’après consensus.</span>
        </div>
        <div class="tssr-dialog__footer">
          <button type="button" class="tssr-action tssr-action--danger" data-delete-page>Proposer la suppression</button>
          <button type="button" class="tssr-action" data-cancel>Annuler</button>
          <button type="submit" class="tssr-action tssr-action--primary">Soumettre à validation</button>
        </div>
      </form>
    `);
    const form = dialog.querySelector("form");
    const editor = form.elements.content;
    const preview = dialog.querySelector(".tssr-markdown-preview");
    renderPreview(editor.value, preview);
    editor.addEventListener("input", () => renderPreview(editor.value, preview));
    bindEditorTabs(dialog);
    dialog.querySelector("[data-cancel]").addEventListener("click", () => dialog.close());
    dialog.querySelector("[data-delete-page]").addEventListener("click", async () => {
      if (!window.confirm(`Créer une proposition pour supprimer ${filePath} ? La suppression sera refusée si la navigation référence encore cette page.`)) return;
      try {
        await invoke("change-requests", {
          action: "create",
          title: `Suppression de ${filePath.replace(/^docs\//, "")}`,
          description: "Suppression de page demandée depuis le portail.",
          base_commit_sha: source.commitSha,
          files: [{ file_path: filePath, base_file_sha: source.fileSha, change_type: "delete", content_encoding: "utf-8" }]
        });
        dialog.close();
        toast("Proposition de suppression créée.");
        await updatePendingNotice();
      } catch (error) { formMessage(form, error.message); }
    });
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const submit = form.querySelector('[type="submit"]');
      setBusy(submit, true, "Soumission…");
      try {
        const selectedImage = form.elements.image.files[0];
        const image = await imageProposal(selectedImage, filePath);
        if (image) {
          const insertion = editor.selectionStart ?? editor.value.length;
          editor.value = `${editor.value.slice(0, insertion)}\n\n${image.markdown}\n${editor.value.slice(insertion)}`;
        }
        if (editor.value === source.content && !image) throw new Error("Aucune modification n’a été détectée.");
        const values = new FormData(form);
        const files = [{
          file_path: filePath,
          base_file_sha: source.fileSha,
          old_content: source.content,
          new_content: editor.value,
          content_encoding: "utf-8",
          change_type: "update"
        }];
        if (image) files.push(image.change);
        await invoke("change-requests", {
          action: "create",
          title: String(values.get("title") || ""),
          description: String(values.get("description") || ""),
          base_commit_sha: source.commitSha,
          supersedes_id: options.supersedesId || null,
          files
        });
        dialog.close();
        toast("La proposition a été soumise. Le site public n’a pas été modifié.");
        await updatePendingNotice();
      } catch (error) {
        formMessage(form, error.message);
      } finally {
        setBusy(submit, false);
      }
    });
  }

  async function openNewPageEditor() {
    if (!state.profile?.can_edit) return;
    let base;
    try { base = (await invoke("change-requests", { action: "get-source", file_path: "mkdocs.yml" })).source; }
    catch (error) { return toast(error.message, "error"); }
    const dialog = createDialog("Créer une page Markdown", `
      <form id="tssr-new-page-form" class="tssr-form">
        <label class="tssr-field">Chemin du fichier
          <input name="path" value="docs/nouvelle-page.md" pattern="docs/[a-zA-Z0-9_./-]+\\.md" required>
        </label>
        <label class="tssr-field">Titre de la proposition
          <input name="title" maxlength="160" value="Création d’une nouvelle page" required>
        </label>
        <label class="tssr-field">Contenu Markdown
          <textarea class="tssr-markdown-editor" name="content" required># Nouvelle page\n\nContenu à compléter.</textarea>
        </label>
        <p class="tssr-help">Après publication de la page, utilisez « Navigation du site » pour la rendre visible dans le menu.</p>
        <button type="submit" class="md-button md-button--primary">Soumettre à validation</button>
      </form>
    `);
    const form = dialog.querySelector("form");
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const submit = form.querySelector('[type="submit"]');
      const values = new FormData(form);
      setBusy(submit, true);
      try {
        await invoke("change-requests", {
          action: "create",
          title: String(values.get("title") || ""),
          base_commit_sha: base.commitSha,
          files: [{
            file_path: String(values.get("path") || ""),
            new_content: String(values.get("content") || ""),
            content_encoding: "utf-8",
            change_type: "create"
          }]
        });
        dialog.close();
        toast("Proposition de création soumise.");
      } catch (error) { formMessage(form, error.message); }
      finally { setBusy(submit, false); }
    });
  }

  function navArrayAt(path) {
    let array = state.navigationModel;
    const indexes = path === "" ? [] : path.split(".").map(Number);
    for (const index of indexes.slice(0, -1)) array = array[index].children;
    return { array, index: indexes.at(-1) };
  }

  function renderNavigationNodes(nodes, parentPath = "") {
    return nodes.map((node, index) => {
      const path = parentPath ? `${parentPath}.${index}` : String(index);
      return `<div class="tssr-nav-node" data-nav-path="${path}">
        <div class="tssr-nav-node__fields">
          <input aria-label="Libellé" data-nav-field="label" value="${utils.escapeHtml(node.label)}">
          <input aria-label="Cible ou URL" data-nav-field="target" value="${utils.escapeHtml(node.target)}" ${node.children.length ? "disabled" : ""} placeholder="chemin/page.md ou https://…">
          <div class="tssr-nav-controls">
            <button type="button" data-nav-action="up" title="Monter" aria-label="Monter">↑</button>
            <button type="button" data-nav-action="down" title="Descendre" aria-label="Descendre">↓</button>
            <button type="button" data-nav-action="add" title="Ajouter un enfant" aria-label="Ajouter un enfant">＋</button>
            <button type="button" data-nav-action="remove" title="Supprimer" aria-label="Supprimer">×</button>
          </div>
        </div>
        ${node.children.length ? `<div class="tssr-nav-node__children">${renderNavigationNodes(node.children, path)}</div>` : ""}
      </div>`;
    }).join("");
  }

  function syncNavigationInputs(container) {
    container.querySelectorAll("[data-nav-path]").forEach((element) => {
      const path = element.dataset.navPath;
      const indexes = path.split(".").map(Number);
      let node = state.navigationModel[indexes.shift()];
      for (const index of indexes) node = node.children[index];
      node.label = element.querySelector('[data-nav-field="label"]').value;
      if (!node.children.length) node.target = element.querySelector('[data-nav-field="target"]').value;
    });
  }

  function refreshNavigationEditor(container) {
    container.innerHTML = renderNavigationNodes(state.navigationModel);
  }

  async function openNavigationEditor() {
    if (!state.profile?.can_edit) return;
    let result;
    try { result = await invoke("change-requests", { action: "get-navigation" }); }
    catch (error) { return toast(error.message, "error"); }
    state.navigationSource = result.navigation;
    state.navigationModel = utils.navigationToModel(result.navigation.nav);
    const dialog = createDialog("Navigation et identité du site", `
      <form id="tssr-navigation-form">
        <div class="tssr-form__row">
          <label class="tssr-field">Nom du site
            <input name="site_name" value="${utils.escapeHtml(result.navigation.site_name)}" required>
          </label>
          <label class="tssr-field">Description
            <input name="site_description" value="${utils.escapeHtml(result.navigation.site_description)}">
          </label>
        </div>
        <p class="tssr-help">Seuls le nom, la description et la navigation sont modifiables ici. Les plugins, scripts, secrets et réglages de sécurité restent verrouillés.</p>
        <div class="tssr-nav-editor"></div>
        <div class="tssr-editor-tools">
          <button type="button" class="tssr-action" data-add-root>Ajouter une section</button>
        </div>
        <div class="tssr-dialog__footer">
          <button type="button" class="tssr-action" data-cancel>Annuler</button>
          <button type="submit" class="tssr-action tssr-action--primary">Soumettre à validation</button>
        </div>
      </form>
    `);
    const form = dialog.querySelector("form");
    const container = dialog.querySelector(".tssr-nav-editor");
    refreshNavigationEditor(container);
    container.addEventListener("click", (event) => {
      const button = event.target.closest("[data-nav-action]");
      if (!button) return;
      syncNavigationInputs(container);
      const element = button.closest("[data-nav-path]");
      const path = element.dataset.navPath;
      const { array, index } = navArrayAt(path);
      const action = button.dataset.navAction;
      if (action === "up" && index > 0) [array[index - 1], array[index]] = [array[index], array[index - 1]];
      if (action === "down" && index < array.length - 1) [array[index], array[index + 1]] = [array[index + 1], array[index]];
      if (action === "remove" && window.confirm(`Supprimer « ${array[index].label} » de la navigation ?`)) array.splice(index, 1);
      if (action === "add") {
        if (!array[index].children.length && array[index].target) {
          array[index].children.push({ label: "Présentation", target: array[index].target, children: [] });
          array[index].target = "";
        }
        array[index].children.push({ label: "Nouvel élément", target: "chemin/page.md", children: [] });
      }
      refreshNavigationEditor(container);
    });
    dialog.querySelector("[data-add-root]").addEventListener("click", () => {
      syncNavigationInputs(container);
      state.navigationModel.push({ label: "Nouvelle section", target: "chemin/page.md", children: [] });
      refreshNavigationEditor(container);
    });
    dialog.querySelector("[data-cancel]").addEventListener("click", () => dialog.close());
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      syncNavigationInputs(container);
      const submit = form.querySelector('[type="submit"]');
      const values = new FormData(form);
      setBusy(submit, true);
      try {
        await invoke("change-requests", {
          action: "create-navigation-change",
          title: "Mise à jour de la navigation du site",
          description: "Modification structurée depuis l’éditeur de navigation.",
          base_commit_sha: state.navigationSource.base_commit_sha,
          site_name: String(values.get("site_name") || ""),
          site_description: String(values.get("site_description") || ""),
          nav: utils.modelToNavigation(state.navigationModel)
        });
        dialog.close();
        toast("La modification de navigation a été soumise à validation.");
      } catch (error) { formMessage(form, error.message); }
      finally { setBusy(submit, false); }
    });
  }

  async function loadChanges() {
    if (!state.client || !state.profile) return [];
    const { data, error } = await state.client.from("change_requests")
      .select("*, change_request_files(*), change_approvals(*)")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return data || [];
  }

  function approvalSummary(request) {
    const approvals = new Map(request.change_approvals.map((vote) => [vote.user_id, vote]));
    const labels = Array.isArray(request.required_approver_labels) ? request.required_approver_labels : [];
    const rows = labels.map((approver) => {
      const vote = approvals.get(approver.id);
      const symbol = vote?.decision === "approved" ? "✓" : vote?.decision === "rejected" ? "✕" : "○";
      return `<li>${symbol} ${utils.escapeHtml(approver.display_name)}${vote?.comment ? ` — ${utils.escapeHtml(vote.comment)}` : ""}</li>`;
    }).join("");
    const approved = request.change_approvals.filter((vote) => vote.decision === "approved" && request.required_approvers.includes(vote.user_id)).length;
    return { rows, approved, total: request.required_approvers.length, approvals };
  }

  function changeCard(request) {
    const status = utils.statusInfo(request.status);
    const approval = approvalSummary(request);
    const myVote = approval.approvals.get(state.profile.id);
    const canVote = state.profile.can_edit && request.status === "pending" && request.required_approvers.includes(state.profile.id) && !myVote;
    const canCancel = (request.author_id === state.profile.id || state.profile.role === "admin") && ["pending", "approved", "failed", "conflict"].includes(request.status);
    const canRevise = request.change_request_files.some((file) => file.content_encoding === "utf-8" && file.file_path.endsWith(".md")) && ["rejected", "failed", "conflict"].includes(request.status);
    return `<article class="tssr-change-card" data-change-id="${request.id}">
      <div class="tssr-change-card__header">
        <h3>${utils.escapeHtml(request.title)}</h3>
        <span class="tssr-status tssr-status--${status.className}">${status.label}</span>
      </div>
      <div class="tssr-change-meta">
        <span>${utils.escapeHtml(request.author_display_name)}</span>
        <span>${formatDate(request.created_at)}</span>
        <span>${request.change_request_files.length} fichier${request.change_request_files.length > 1 ? "s" : ""}</span>
        <span>Validations : ${approval.approved} / ${approval.total}</span>
      </div>
      ${request.description ? `<p>${utils.escapeHtml(request.description)}</p>` : ""}
      ${request.failure_reason ? `<div class="tssr-form-error">${utils.escapeHtml(request.failure_reason)}</div>` : ""}
      <ul class="tssr-approvals">${approval.rows}</ul>
      ${request.published_commit_sha ? `<p class="tssr-muted">Commit : <code>${utils.escapeHtml(request.published_commit_sha)}</code></p>` : ""}
      <div class="tssr-card-actions">
        <button type="button" class="tssr-action" data-change-action="diff">Voir les changements</button>
        ${canVote ? '<button type="button" class="tssr-action tssr-action--primary" data-change-action="approve">Accepter</button><button type="button" class="tssr-action tssr-action--danger" data-change-action="reject">Refuser</button>' : ""}
        ${canRevise ? '<button type="button" class="tssr-action" data-change-action="revise">Créer une révision</button>' : ""}
        ${canCancel ? '<button type="button" class="tssr-action tssr-action--danger" data-change-action="cancel">Annuler</button>' : ""}
      </div>
    </article>`;
  }

  async function showDiff(request) {
    const fileTabs = request.change_request_files.map((file, index) =>
      `<button type="button" class="tssr-tab" data-diff-file="${index}" aria-selected="${index === 0}">${utils.escapeHtml(file.new_file_path || file.file_path)}</button>`
    ).join("");
    const dialog = createDialog(`Changements : ${request.title}`, `<div class="tssr-tabs">${fileTabs}</div><div data-diff-content></div>`);
    const render = (index) => {
      const file = request.change_request_files[index];
      const target = dialog.querySelector("[data-diff-content]");
      if (file.content_encoding === "base64") {
        target.innerHTML = `<div class="tssr-collaboration-empty"><strong>Fichier image</strong><p>${utils.escapeHtml(file.file_path)} — aperçu binaire non affiché dans le diff.</p></div>`;
        return;
      }
      const diff = utils.lineDiff(file.old_content || "", file.new_content || "");
      if (!diff) {
        target.innerHTML = `<div class="tssr-diff-panes"><div><strong>Avant</strong><pre>${utils.escapeHtml(file.old_content || "")}</pre></div><div><strong>Après</strong><pre>${utils.escapeHtml(file.new_content || "")}</pre></div></div>`;
        return;
      }
      target.innerHTML = `<div class="tssr-diff">${diff.map((line) =>
        `<div class="tssr-diff__line tssr-diff__line--${line.type}"><span>${line.type === "add" ? "+" : line.type === "remove" ? "−" : " "}</span><span>${utils.escapeHtml(line.line)}</span></div>`
      ).join("")}</div>`;
    };
    dialog.querySelectorAll("[data-diff-file]").forEach((button) => button.addEventListener("click", () => {
      dialog.querySelectorAll("[data-diff-file]").forEach((item) => item.setAttribute("aria-selected", String(item === button)));
      render(Number(button.dataset.diffFile));
    }));
    render(0);
  }

  async function handleChangeAction(event, requests) {
    const button = event.target.closest("[data-change-action]");
    if (!button) return;
    const request = requests.find((item) => item.id === button.closest("[data-change-id]").dataset.changeId);
    if (!request) return;
    const action = button.dataset.changeAction;
    if (action === "diff") return showDiff(request);
    if (action === "revise") {
      const file = request.change_request_files.find((item) => item.content_encoding === "utf-8" && item.file_path.endsWith(".md"));
      return openPageEditor({ filePath: file.file_path, initialContent: file.new_content, title: `Révision de ${request.title}`, supersedesId: request.id });
    }
    if (action === "cancel") {
      if (!window.confirm("Annuler cette proposition ?")) return;
      try {
        await invoke("change-requests", { action: "cancel", change_request_id: request.id });
        toast("Proposition annulée.");
        renderCollaborationPage();
      } catch (error) { toast(error.message, "error"); }
      return;
    }
    if (action === "approve" || action === "reject") {
      let comment = "";
      if (action === "reject") {
        comment = window.prompt("Commentaire facultatif expliquant le refus :", "") ?? "";
        if (!window.confirm("Confirmer le refus ? La proposition ne sera pas publiée.")) return;
      }
      setBusy(button, true, action === "approve" ? "Validation…" : "Refus…");
      try {
        await invoke("change-requests", {
          action: "vote",
          change_request_id: request.id,
          decision: action === "approve" ? "approved" : "rejected",
          comment
        });
        toast(action === "approve" ? "Validation enregistrée." : "Refus enregistré.");
        renderCollaborationPage();
        updatePendingNotice();
      } catch (error) { toast(error.message, "error"); }
      finally { setBusy(button, false); }
    }
  }

  async function adminList(container) {
    container.innerHTML = '<p class="tssr-muted">Chargement des utilisateurs…</p>';
    try {
      const result = await invoke("admin-users", { action: "list" });
      const profiles = result.profiles || [];
      container.innerHTML = `<div class="tssr-dashboard-actions"><button type="button" class="tssr-action tssr-action--primary" data-admin-action="create">＋ Ajouter un utilisateur</button></div>
        <div class="tssr-user-list">${profiles.map((profile) => `<article class="tssr-user-card" data-profile-id="${profile.id}">
          <div class="tssr-user-card__header"><h3>${utils.escapeHtml(profile.display_name)}</h3><span class="tssr-status tssr-status--${profile.status === "active" ? "published" : profile.status === "suspended" ? "pending" : "cancelled"}">${profile.status === "active" ? "Actif" : profile.status === "suspended" ? "Suspendu" : "Supprimé"}</span></div>
          <div class="tssr-user-meta"><span>${utils.escapeHtml(profile.email)}</span><span>${profile.role === "admin" ? "Administrateur" : "Membre"}</span><span>Modification : ${profile.can_edit ? "Oui" : "Non"}</span></div>
          <div class="tssr-card-actions">
            ${profile.status !== "deleted" ? '<button type="button" class="tssr-action" data-admin-action="edit">Modifier</button><button type="button" class="tssr-action" data-admin-action="password">Réinitialiser le mot de passe</button>' : ""}
            ${profile.status === "active" ? '<button type="button" class="tssr-action tssr-action--danger" data-admin-action="suspend">Suspendre</button>' : profile.status === "suspended" ? '<button type="button" class="tssr-action" data-admin-action="reactivate">Réactiver</button>' : ""}
            ${profile.status !== "deleted" ? '<button type="button" class="tssr-action tssr-action--danger" data-admin-action="delete">Supprimer</button>' : ""}
          </div>
        </article>`).join("")}</div>`;
      container.onclick = (event) => handleAdminAction(event, profiles, container);
    } catch (error) {
      container.innerHTML = `<div class="tssr-form-error">${utils.escapeHtml(error.message)}</div>`;
    }
  }

  function userForm(profile) {
    const creating = !profile;
    const dialog = createDialog(creating ? "Ajouter un utilisateur" : "Modifier l’utilisateur", `
      <form class="tssr-form" id="tssr-user-form">
        <label class="tssr-field">Nom
          <input name="display_name" maxlength="100" value="${utils.escapeHtml(profile?.display_name || "")}" required>
        </label>
        <label class="tssr-field">Adresse e-mail
          <input type="email" name="email" value="${utils.escapeHtml(profile?.email || "")}" required>
        </label>
        ${creating ? '<label class="tssr-field">Mot de passe temporaire<input type="password" name="password" minlength="12" autocomplete="new-password" required></label>' : ""}
        <label class="tssr-field">Rôle
          <select name="role"><option value="member" ${profile?.role !== "admin" ? "selected" : ""}>Membre</option><option value="admin" ${profile?.role === "admin" ? "selected" : ""}>Administrateur</option></select>
        </label>
        <label class="tssr-field tssr-field--check"><input type="checkbox" name="can_edit" ${profile?.can_edit ? "checked" : ""}> Autorisé à modifier</label>
        <button type="submit" class="md-button md-button--primary">${creating ? "Créer" : "Enregistrer"}</button>
      </form>
    `, { small: true });
    return { dialog, form: dialog.querySelector("form") };
  }

  async function handleAdminAction(event, profiles, container) {
    const button = event.target.closest("[data-admin-action]");
    if (!button) return;
    const action = button.dataset.adminAction;
    const profileId = button.closest("[data-profile-id]")?.dataset.profileId;
    const profile = profiles.find((item) => item.id === profileId);
    if (action === "create" || action === "edit") {
      const editor = userForm(action === "edit" ? profile : null);
      editor.form.addEventListener("submit", async (submitEvent) => {
        submitEvent.preventDefault();
        const submit = editor.form.querySelector('[type="submit"]');
        const values = new FormData(editor.form);
        setBusy(submit, true);
        try {
          await invoke("admin-users", {
            action: action === "create" ? "create" : "update",
            profile_id: profile?.id,
            display_name: values.get("display_name"),
            email: values.get("email"),
            password: values.get("password"),
            role: values.get("role"),
            can_edit: values.get("can_edit") === "on"
          });
          editor.dialog.close();
          toast(action === "create" ? "Utilisateur créé." : "Utilisateur mis à jour.");
          adminList(container);
        } catch (error) { formMessage(editor.form, error.message); }
        finally { setBusy(submit, false); }
      });
      return;
    }
    if (action === "password") {
      const dialog = createDialog(`Nouveau mot de passe — ${profile.display_name}`, `<form class="tssr-form"><label class="tssr-field">Mot de passe temporaire<input type="password" name="password" minlength="12" autocomplete="new-password" required></label><p class="tssr-help">Le mot de passe actuel n’est jamais affiché. L’utilisateur devra remplacer ce mot de passe à sa prochaine connexion.</p><button type="submit" class="md-button md-button--primary">Définir le mot de passe</button></form>`, { small: true });
      const form = dialog.querySelector("form");
      form.addEventListener("submit", async (submitEvent) => {
        submitEvent.preventDefault();
        try {
          await invoke("admin-users", { action: "reset-password", profile_id: profile.id, password: new FormData(form).get("password") });
          dialog.close(); toast("Mot de passe temporaire défini."); adminList(container);
        } catch (error) { formMessage(form, error.message); }
      });
      return;
    }
    const confirmations = {
      suspend: `Suspendre ${profile.display_name} ? Cette personne sera retirée des validations en attente.`,
      reactivate: `Réactiver ${profile.display_name} ?`,
      delete: `Supprimer le compte de ${profile.display_name} ? Son identité et son historique seront conservés.`
    };
    if (!window.confirm(confirmations[action])) return;
    try {
      await invoke("admin-users", { action, profile_id: profile.id });
      toast(action === "suspend" ? "Utilisateur suspendu." : action === "reactivate" ? "Utilisateur réactivé." : "Utilisateur supprimé.");
      adminList(container);
    } catch (error) { toast(error.message, "error"); }
  }

  async function renderCollaborationPage() {
    const page = document.getElementById("tssr-collaboration-page");
    if (!page) return;
    if (!state.profile) {
      page.innerHTML = `<div class="tssr-collaboration-empty"><strong>Connexion requise</strong><p>Connectez-vous pour consulter les propositions, voter ou modifier la documentation.</p><button type="button" class="md-button md-button--primary" data-tssr-action="login">Se connecter</button></div>`;
      return;
    }
    if (window.location.hash === "#administration" && state.profile.role === "admin") state.dashboardTab = "admin";
    page.innerHTML = `<div class="tssr-dashboard-actions">
      ${state.profile.can_edit ? '<button type="button" class="tssr-action tssr-action--primary" data-dashboard-action="new-page">Nouvelle page</button><button type="button" class="tssr-action" data-dashboard-action="navigation">Navigation du site</button>' : ""}
    </div>
    <div class="tssr-tabs" role="tablist">
      <button type="button" class="tssr-tab" data-dashboard-tab="pending" aria-selected="${state.dashboardTab === "pending"}">En attente</button>
      <button type="button" class="tssr-tab" data-dashboard-tab="history" aria-selected="${state.dashboardTab === "history"}">Historique</button>
      <button type="button" class="tssr-tab" data-dashboard-tab="mine" aria-selected="${state.dashboardTab === "mine"}">Mes modifications</button>
      ${state.profile.role === "admin" ? `<button type="button" class="tssr-tab" data-dashboard-tab="admin" aria-selected="${state.dashboardTab === "admin"}">Administration</button>` : ""}
    </div>
    <div data-dashboard-content><p class="tssr-muted">Chargement…</p></div>`;
    page.querySelector('[data-dashboard-action="new-page"]')?.addEventListener("click", openNewPageEditor);
    page.querySelector('[data-dashboard-action="navigation"]')?.addEventListener("click", openNavigationEditor);
    page.querySelectorAll("[data-dashboard-tab]").forEach((button) => button.addEventListener("click", () => {
      state.dashboardTab = button.dataset.dashboardTab;
      renderCollaborationPage();
    }));
    const content = page.querySelector("[data-dashboard-content]");
    if (state.dashboardTab === "admin") return adminList(content);
    try {
      const requests = await loadChanges();
      const filtered = state.dashboardTab === "pending"
        ? requests.filter((request) => ["pending", "approved", "publishing"].includes(request.status))
        : state.dashboardTab === "mine"
          ? requests.filter((request) => request.author_id === state.profile.id)
          : requests.filter((request) => !["pending", "approved", "publishing"].includes(request.status));
      content.innerHTML = filtered.length
        ? `<div class="tssr-change-list">${filtered.map(changeCard).join("")}</div>`
        : '<div class="tssr-collaboration-empty"><strong>Aucune modification dans cette vue</strong><p>Les propositions apparaîtront ici dès leur soumission.</p></div>';
      content.addEventListener("click", (event) => handleChangeAction(event, requests));
    } catch (error) {
      content.innerHTML = `<div class="tssr-form-error">${utils.escapeHtml(error.message)}</div>`;
    }
  }

  function enhanceCurrentPage() {
    injectHeader();
    injectNotificationBar();
    enhanceCurrentPageButton();
    renderCollaborationPage();
  }

  function enhanceCurrentPageButton() {
    document.querySelectorAll(".tssr-edit-page").forEach((button) => button.remove());
    if (!state.profile?.can_edit) return;
    const source = currentSourcePath();
    const article = document.querySelector(".md-content__inner");
    if (!source || !article || source === "docs/collaboration/index.md") return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "tssr-edit-page";
    button.textContent = "Modifier cette page";
    button.addEventListener("click", () => openPageEditor());
    article.insertBefore(button, article.querySelector("h1") || article.firstChild);
  }

  document.addEventListener("click", (event) => {
    if (event.target.closest('[data-tssr-action="login"]')) openLogin();
    if (!event.target.closest(".tssr-collab-header")) {
      const menu = document.querySelector(".tssr-collab-menu");
      if (menu) menu.hidden = true;
    }
  });

  function start() {
    injectHeader();
    injectNotificationBar();
    initializeAuth();
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(function () {
      injectHeader();
      injectNotificationBar();
      enhanceCurrentPageButton();
      renderCollaborationPage();
    });
    start();
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
