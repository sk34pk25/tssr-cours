# Activation de la collaboration TSSR

Le code et la configuration publique Supabase sont prêts. L’URL du projet et sa clé `sb_publishable_...` sont intégrées au site ; aucun secret serveur ni aucun compte n’a été créé automatiquement. Les étapes ci-dessous sont les seules opérations manuelles nécessaires.

## État vérifié le 14 août 2026

- l’endpoint Supabase Auth répond correctement avec la clé publique fournie ;
- l’inscription publique est désactivée (`disable_signup: true`) ;
- la migration `20260814130000` est appliquée à l’identique en local et à distance ;
- l’accès anonyme à `public.profiles` est refusé par les permissions/RLS, comme attendu ;
- `admin-users`, `change-requests` et `publication-status` sont déployées et `ACTIVE` ;
- les secrets GitHub personnalisés restent à configurer avec un nouveau token non exposé et un secret de webhook.

## 1. Finaliser le projet Supabase existant

1. Ouvrir le projet `ygjnszbdqgmmkwhvifao` dans <https://supabase.com/dashboard>.
2. Dans **Authentication → Providers → Email**, conserver l’authentification par e-mail et mot de passe.
3. Désactiver l’inscription publique des nouveaux utilisateurs.
4. Vérifier que la référence du projet est `ygjnszbdqgmmkwhvifao` et que la clé **Publishable** intégrée correspond toujours à celle du projet.
5. Ne copier aucune clé `secret` ou `service_role` dans les fichiers MkDocs, dans GitHub Variables ou dans le navigateur.

## 2. Installer et relier la CLI Supabase

Sur macOS avec Homebrew :

```bash
brew install supabase/tap/supabase
supabase login
cd "/Users/skala/Documents/ChatGPT/TSSR MKDOCS/formation-tssr"
supabase link --project-ref ygjnszbdqgmmkwhvifao
```

## 3. Appliquer la migration

```bash
supabase db push
```

Cette commande crée les tables `profiles`, `change_requests`, `change_request_files`, `change_approvals` et `audit_logs`, ainsi que les politiques RLS, les protections du dernier administrateur et les fonctions SQL atomiques de consensus.

Elle applique aussi la migration de création structurée de cours : type de proposition `create_course`, résumé de validation, MIME des fichiers, limitation de débit et nettoyage des binaires temporaires. Aucune table de cours parallèle n’est créée.

## 4. Préparer le token GitHub serveur

Dans GitHub, créer un **fine-grained personal access token** limité au seul dépôt `sk34pk25/tssr-cours` avec :

- **Contents: Read and write** ;
- **Pull requests: Read and write**.

Ce token est utilisé uniquement par les Edge Functions. Il ne doit jamais être ajouté aux variables publiques GitHub Pages.

Créer aussi un secret aléatoire pour le retour de déploiement :

```bash
openssl rand -hex 32
```

Conserver temporairement la valeur obtenue sous le nom `PUBLICATION_WEBHOOK_SECRET`.

## 5. Configurer les secrets des Edge Functions

```bash
supabase secrets set \
  GITHUB_TOKEN="COLLER_LE_TOKEN_FINE_GRAINED" \
  GITHUB_OWNER="sk34pk25" \
  GITHUB_REPO="tssr-cours" \
  GITHUB_BRANCH="main" \
  GITHUB_PUBLISH_MODE="auto" \
  ALLOWED_ORIGINS="https://sk34pk25.github.io" \
  PUBLICATION_WEBHOOK_SECRET="COLLER_LE_SECRET_ALEATOIRE"
```

`GITHUB_PUBLISH_MODE=auto` tente d’abord un commit direct sans force push. Si GitHub refuse parce que `main` est protégée, la fonction crée automatiquement une branche et une Pull Request que le workflow valide et fusionne sans intervention humaine.

Les variables serveur Supabase (`SUPABASE_URL`, clé publiable et clé secrète/service role) sont fournies automatiquement aux Edge Functions hébergées. Ne les dupliquez pas dans le dépôt.

## 6. Déployer les trois Edge Functions

```bash
supabase functions deploy admin-users
supabase functions deploy change-requests
supabase functions deploy publication-status --no-verify-jwt
```

Après une mise à jour du code de création de cours, redéployer au minimum `change-requests` :

```bash
supabase db push
supabase functions deploy change-requests
```

Les deux premières fonctions exigent une session utilisateur valide. `publication-status` n’accepte pas de JWT utilisateur : elle vérifie exclusivement le secret partagé envoyé par GitHub Actions.

## 7. Créer le premier administrateur

1. Dans **Supabase → Authentication → Users**, créer manuellement le premier utilisateur avec son e-mail et un mot de passe temporaire d’au moins 12 caractères.
2. Dans **SQL Editor**, exécuter une seule fois :

```sql
select private.bootstrap_first_admin(
  'patrik@example.com',
  'Patrik'
);
```

Remplacer l’adresse par celle réellement créée. La fonction refuse de s’exécuter dès qu’un administrateur actif existe. Tous les comptes suivants seront créés depuis le tableau de bord du site.

## 8. Variables publiques GitHub Actions

Les valeurs publiques sont déjà intégrées au générateur de déploiement. Il est néanmoins recommandé de les déclarer dans **GitHub → Settings → Secrets and variables → Actions → Variables** afin de pouvoir les remplacer plus tard sans modifier le code :

```text
SUPABASE_URL=https://ygjnszbdqgmmkwhvifao.supabase.co
SUPABASE_PUBLISHABLE_KEY=sb_publishable_-bY_X1PqsziK-JG8mxZh6w_Z0TRvu90
```

Ces deux valeurs sont conçues pour être publiques. Les politiques RLS et les Edge Functions portent la sécurité réelle.

## 9. Configurer le retour privé GitHub → Supabase

Dans **GitHub → Settings → Secrets and variables → Actions → Secrets**, créer :

```text
SUPABASE_PUBLICATION_WEBHOOK_URL=https://ygjnszbdqgmmkwhvifao.supabase.co/functions/v1/publication-status
SUPABASE_PUBLICATION_WEBHOOK_SECRET=LE_MEME_SECRET_ALEATOIRE
```

Ne placez jamais ces deux valeurs dans **Variables** : elles doivent rester dans **Secrets**.

## 10. Activer et tester GitHub Pages

Le dépôt utilise déjà la branche `gh-pages`. Le workflow `.github/workflows/deploy-docs.yml` :

1. exécute `mkdocs build --strict` ;
2. génère la configuration publique Supabase ;
3. met à jour `gh-pages` par commit fast-forward ;
4. informe Supabase du succès ou de l’échec.

Après avoir envoyé les fichiers du projet sur GitHub, vérifier dans **Actions** que **Build and deploy MkDocs** réussit. Dans **Settings → Pages**, conserver la publication depuis la racine de la branche `gh-pages`.

## 11. Test fonctionnel minimal

1. Ouvrir <https://sk34pk25.github.io/tssr-cours/>.
2. Cliquer **Se connecter** et utiliser le premier compte administrateur.
3. Remplacer le mot de passe temporaire lorsqu’il est demandé.
4. Créer deux membres depuis **Tableau de bord** et activer `can_edit` pour les comptes devant voter.
5. Ouvrir une page de cours, cliquer **Modifier cette page**, modifier une phrase et soumettre.
6. Vérifier que l’auteur est automatiquement marqué comme ayant accepté.
7. Accepter successivement avec les autres éditeurs : aucune publication ne doit survenir avant le dernier vote.
8. Après le dernier vote, vérifier le commit GitHub, le workflow Pages et le statut **Publiée**.
9. Créer deux propositions sur le même fichier ; publier la première puis vérifier que la seconde passe en **Conflit**.
10. Tester un refus : un seul vote **Refuser** doit bloquer définitivement cette version.

## Commandes de contrôle local

```bash
cd "/Users/skala/Documents/ChatGPT/TSSR MKDOCS/formation-tssr"
npm test
npx --yes deno-bin test --allow-env supabase/functions/_shared/validation_test.ts
.venv/bin/mkdocs build --strict
```

Le test Deno télécharge uniquement les dépendances TypeScript épinglées nécessaires aux Edge Functions. Docker n’est requis que pour lancer toute la pile Supabase en local avec `supabase start`.
