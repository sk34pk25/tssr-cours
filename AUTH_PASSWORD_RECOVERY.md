# Récupération du mot de passe

Le bouton **Se connecter → Mot de passe oublié ?** utilise uniquement
`supabase.auth.resetPasswordForEmail(email, { redirectTo: siteRoot })`.
Le retour est la racine du portail, qui doit être autorisée dans les URL de
redirection Supabase Auth. L'envoi des e-mails dépend de la configuration Auth
existante ; ce parcours ne modifie ni SMTP ni les URL autorisées.

La réponse affichée est identique pour une adresse inconnue, un refus serveur
ou une demande acceptée. Elle ne garantit pas la livraison du courrier. Aucun
renvoi automatique n'est effectué.

## Retour du lien

Le client Supabase existant consomme le lien implicite et émet
`PASSWORD_RECOVERY`. L'abonnement est installé avant `getSession()` et ne fait
aucun appel SDK asynchrone sous le verrou du callback Auth.

Un retour de récupération utilise une session en mémoire et une clé de stockage
distincte de la session habituelle. Le fragment d'authentification est retiré de
l'URL après sa consommation par le SDK ; aucune valeur de jeton n'est rendue.
Le portail ne charge pas de profil ou d'interface éditoriale pour cette session.

Le nouveau mot de passe et sa confirmation sont masqués et doivent correspondre
(minimum 12 caractères). Le serveur Auth vérifie également sa propre politique.
Le seul appel de mutation est `auth.updateUser({ password })`, après validation
de l'utilisateur de la session. Les champs sont vidés après la tentative.

Après succès, `auth.signOut({ scope: "local" })` ferme la session de récupération.
Une erreur de déconnexion reste visible et propose une nouvelle fermeture, sans
répéter la mise à jour du mot de passe. Un lien invalide/expiré ne permet aucune
mise à jour et peut être fermé avant de demander un nouveau lien.

Aucune modification de profil, permission, rôle, guard ou Edge Function ; aucune
clé administrative. Ce flux est identique pour les utilisateurs humains et AGENT.
Le navigateur/gestionnaire de mots de passe peut proposer son propre enregistrement,
mais l'application ne persiste jamais les mots de passe.

## Validation et retour arrière

- `npm test` inclut les tests unitaires de récupération.
- `NODE_PATH=<runtime-playwright-existant>/node_modules node --test tests/password-recovery.browser.mjs`
  vérifie les formulaires réels avec Auth simulé, trafic intercepté et aucune
  adresse réelle. Les captures facultatives utilisent `TSSR_TEST_SCREENSHOTS`.
  `TSSR_TEST_SITE_DIR` charge les styles du build strict. Définir
  `TSSR_TEST_SUPABASE_BUNDLE` vers le bundle UMD local de la version épinglée
  active aussi le test du véritable SDK, avec endpoints Auth interceptés.
- Exécuter aussi les suites Python/Edge et `mkdocs build --strict`.
- La livraison réelle du courrier et la saisie privée du nouveau mot de passe
  restent une qualification humaine après déploiement.
- Retour arrière : revert Git de ce lot puis déploiement habituel Pages ; aucune
  migration ou restauration de base nécessaire.
