# Création structurée de cours

## Architecture

La page `docs/ajouter/index.md` est une interface statique progressive. `course-creator.js` gère le formulaire, le brouillon local, les modules dynamiques, les aperçus et les fichiers. Il ne possède aucun secret et ne décide jamais de l’auteur ni de la publication.

La mutation passe par l’Edge Function existante `change-requests` avec l’action `create-course`. Le module serveur `_shared/course.ts` :

1. normalise et limite les données structurées ;
2. génère les slugs, identifiants, chemins et relations ;
3. produit les fichiers Markdown, ressources, navigation et index ;
4. met à jour `data/glossaire.json` lorsque des termes sont liés ;
5. soumet tous les fichiers à `validateProposedFiles()` ;
6. appelle la même RPC `create_change_request` que les modifications historiques.

`proposal_kind = create_course` distingue l’affichage et l’audit, sans créer un second workflow. Les tables `change_requests`, `change_request_files`, `change_approvals` et `audit_logs`, les statuts, les votes et `publishApprovedChange()` restent communs.

## Contenu généré

Selon les blocs renseignés, une proposition peut contenir :

- `docs/modules/NN-slug/index.md`, les modules et leurs pages ;
- `docs/exercices/slug/index.md` ;
- `docs/tp/slug/index.md`, `enonces.md` et `corrections.md` ;
- `docs/kahoot/slug.md` et une entrée de bibliothèque ;
- les ressources sous `docs/assets/images/cours/NN-slug/` ou `docs/assets/resources/cours/NN-slug/` ;
- les mises à jour atomiques de `mkdocs.yml`, `docs/index.md`, `docs/index-general.md`, éventuellement `docs/parcours/index.md`, et `data/glossaire.json`.

Un cours presque vide reste valide : le titre devient `Nouveau cours`, une présentation minimale est créée et aucune donnée optionnelle vide n’est publiée.

Chaque fichier peut viser le cours entier, un module ou une page précise. Une image peut être désignée comme couverture unique. Les liens externes peuvent également être rattachés à un module ; l’icône Material, la source officielle et le style contrôlé du cours sont exploités dans le Markdown généré.

## Éditeur et aperçu

L’éditeur réutilise les dépendances déjà chargées par le portail : Marked pour le rendu et DOMPurify pour le nettoyage. Il propose un mode Markdown, un mode visuel synchronisé, les dispositions édition/aperçu/côte à côte, le plein écran et des insertions compatibles avec les extensions MkDocs activées (admonitions, détails, onglets, tableaux, code et Mermaid).

Le Markdown reste la représentation commune et le mode de secours. Les syntaxes MkDocs complexes restent modifiables directement, ce qui évite d’ajouter un éditeur tiers lourd ou une nouvelle dépendance CDN.

Le brouillon texte est enregistré dans `localStorage`. Les octets des fichiers ne sont jamais persistés dans le navigateur ; ils doivent être resélectionnés après un rechargement.

## Fichiers et PDF

Le navigateur vérifie l’extension, la taille et les signatures courantes pour un retour rapide. Le serveur répète impérativement la validation : chemin généré, extension autorisée, MIME, signature PNG/JPEG/GIF/WebP/PDF/ZIP, taille individuelle et limite totale. SVG, HTML, JavaScript et exécutables natifs sont refusés.

Les octets Base64 sont stockés dans `change_request_files`, donc hors du dépôt public pendant le vote. Après rejet, annulation ou publication réussie, un trigger nettoie les contenus binaires mis en attente. En cas de conflit ou d’échec de build, ils sont conservés pour diagnostic et nouvelle tentative.

La page cible publiée — cours, module ou page complémentaire — contient un composant PDF déclaratif avec liens ouvrir/télécharger. `extra.js` ajoute un lecteur natif `<object>` uniquement pour une URL PDF de même origine. Sans JavaScript ou sans lecteur natif, les liens restent fonctionnels.

## Glossaire et build

`data/glossaire.json` reste l’unique source de vérité. Une création ajoute le cours, les modules et les références de termes dans cette source. `scripts/mkdocs_hooks.py` régénère la page statique avant chaque build afin que la recherche MkDocs et les filtres voient immédiatement les nouveaux termes. Les workflows exécutent aussi explicitement le générateur puis `validate_course_structure.py`.

## Sécurité et publication

- l’Edge Function exige un JWT Supabase, une origine autorisée, un profil actif et `can_edit` ;
- l’auteur et la date viennent de la session et de PostgreSQL ;
- huit propositions au maximum sont acceptées par auteur sur dix minutes ;
- le Markdown actif, les événements HTML, les URL `data:` et `javascript:`, le SVG et les styles inline sont refusés ;
- 100 fichiers, 2,5 Mo de Markdown et 12 Mo de binaires au total sont les limites d’une proposition ;
- les SHA de base sont relus à la soumission et à la publication ;
- le commit GitHub utilise un arbre unique : aucune publication partielle n’est possible ;
- le statut public `published` n’est confirmé qu’après le build strict et le déploiement.

## Déploiement de l’extension

Après mise à disposition du code :

```bash
supabase db push
supabase functions deploy change-requests
```

Il n’existe ni nouvelle clé, ni nouveau secret, ni nouvelle Edge Function. Les secrets GitHub déjà configurés restent utilisés par le pipeline existant.

## Tests

```bash
npm test
npx --yes deno-bin test --allow-env 'supabase/functions/_shared/*_test.ts'
npx --yes deno-bin check supabase/functions/admin-users/index.ts supabase/functions/change-requests/index.ts supabase/functions/publication-status/index.ts
.venv/bin/python scripts/validate_course_structure.py
.venv/bin/mkdocs build --strict
```

Les tests couvrent notamment une création complète, une création presque vide, les collisions de slug, le faux PDF, le path traversal, le HTML actif, les domaines Kahoot, les relations du glossaire et les protections du workflow communautaire.
