/* Standard Supabase recovery, isolated from profiles and editorial permissions. */
(function (root) {
  const receipt = "Si un compte correspond à cette adresse, un lien de récupération vous sera envoyé. Consultez aussi les courriers indésirables.";
  const invalid = "Ce lien est invalide ou a expiré. Demandez un nouveau lien de récupération.";

  function isRecoveryReturn(href) {
    const url = new URL(href);
    const hash = new URLSearchParams(url.hash.slice(1));
    return hash.get("type") === "recovery" || hash.has("error") || hash.has("error_code");
  }

  function passwordError(password, confirmation) {
    if (password.length < 12) return "Choisissez un mot de passe d’au moins 12 caractères.";
    if (password !== confirmation) return "Les deux mots de passe doivent être identiques.";
    return null;
  }

  function create({ auth, initialReturn, redirectTo, createDialog, formMessage, setBusy, onFinished, location, history }) {
    let active = initialReturn;
    let dialog = null;
    let updated = false;
    let userId = null;

    function cleanUrl() {
      // The SDK has consumed the fragment. Never copy tokens into DOM or logs.
      history.replaceState(history.state, "", location.pathname + location.search);
    }

    function request() {
      const requestDialog = createDialog("Récupérer mon mot de passe", `<form class="tssr-form">
        <label class="tssr-field">Adresse e-mail<input type="email" name="email" autocomplete="email" required></label>
        <button type="submit" class="md-button md-button--primary">Envoyer le lien</button>
      </form>`, { small: true });
      const form = requestDialog.querySelector("form");
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const button = form.querySelector('[type="submit"]');
        if (button.disabled) return;
        setBusy(button, true, "Envoi…");
        try {
          await auth.resetPasswordForEmail(String(new FormData(form).get("email") || "").trim(), { redirectTo });
        } catch (_) { /* Same receipt for server errors, absent accounts and network errors. */ }
        form.reset();
        formMessage(form, receipt, "success");
        button.textContent = "Demande traitée";
        // One request per form; do not expose account existence or retry automatically.
      });
      form.querySelector("input").focus();
    }

    async function finish(form, success) {
      try {
        const { error } = await auth.signOut({ scope: "local" });
        if (error) throw error;
      } catch (_) {
        formMessage(form, "La fermeture de session a échoué. Réessayez de fermer cette session avant de quitter cette page.");
        return false;
      }
      active = false;
      dialog.close();
      dialog = null;
      cleanUrl();
      onFinished(success);
      return true;
    }

    async function open() {
      if (dialog || !active) return;
      cleanUrl();
      dialog = createDialog("Définir un nouveau mot de passe", `<form class="tssr-form">
        <p>Choisissez un nouveau mot de passe. Cette session sera fermée après sa mise à jour.</p>
        <label class="tssr-field">Nouveau mot de passe<input type="password" name="password" autocomplete="new-password" minlength="12" required></label>
        <label class="tssr-field">Confirmer le nouveau mot de passe<input type="password" name="confirmation" autocomplete="new-password" minlength="12" required></label>
        <button type="submit" class="md-button md-button--primary" disabled>Enregistrer le mot de passe</button>
        <button type="button" data-recovery-cancel class="md-button">Annuler et fermer la session</button>
      </form>`, { small: true, locked: true });
      const form = dialog.querySelector("form");
      const button = form.querySelector('[type="submit"]');
      button.disabled = true;
      const cancel = form.querySelector("[data-recovery-cancel]");
      cancel.addEventListener("click", async () => {
        form.reset();
        button.disabled = true;
        setBusy(cancel, true);
        if (!await finish(form, updated)) setBusy(cancel, false);
      });
      try {
        const { data, error } = await auth.getUser();
        if (error || !data?.user?.id) throw new Error();
        userId = data.user.id;
        button.disabled = false;
        form.querySelector("input").focus();
      } catch (_) {
        formMessage(form, invalid);
        form.querySelectorAll("input").forEach(input => { input.disabled = true; });
        cancel.textContent = "Fermer cette session";
      }
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (button.disabled) return;
        if (!updated) {
          const password = form.elements.password.value;
          const confirmation = form.elements.confirmation.value;
          const message = passwordError(password, confirmation);
          if (message) { formMessage(form, message); return; }
          setBusy(button, true);
          cancel.disabled = true;
          try {
            const { data, error: sessionError } = await auth.getUser();
            if (sessionError || data?.user?.id !== userId) throw new Error();
            const { error } = await auth.updateUser({ password });
            if (error) throw error;
            updated = true;
          } catch (_) {
            formMessage(form, "Le mot de passe n’a pas pu être mis à jour. Vérifiez sa robustesse ou demandez un nouveau lien si la session a expiré.");
          } finally {
            form.reset();
            setBusy(button, false);
            cancel.disabled = false;
          }
        }
        if (updated) {
          form.querySelectorAll("input").forEach(input => { input.disabled = true; input.required = false; });
          button.textContent = "Fermer la session";
          button.disabled = true;
          cancel.disabled = true;
          if (!await finish(form, true)) { button.disabled = false; cancel.disabled = false; }
        }
      });
    }

    return {
      request, open,
      isActive: () => active,
      // Synchronous callback: never await another SDK call under its auth lock.
      onAuthEvent(event) { if (event === "PASSWORD_RECOVERY") active = true; return active; }
    };
  }
  root.TSSRPasswordRecovery = Object.freeze({ create, isRecoveryReturn, passwordError });
})(typeof window === "undefined" ? globalThis : window);
