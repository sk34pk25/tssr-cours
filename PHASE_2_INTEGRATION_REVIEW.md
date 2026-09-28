# Phase 2C — revue finale et préparation de l'intégration

Date : 2026-09-28. Branche : `codex/phase2-parcours-msp`.
Base revue : `b68fe42536b6d05e5bee19831809f44f34967c53`.
La lecture GitHub avant intégration retrouve cette même base sur `main`.

## Périmètre et décision

Revue de l'ensemble de la fondation Parcours/MSP et de l'intégration Kahoot
locale, puis préparation d'un commit unique et d'une PR vers main.
Ce document précède le commit : son SHA, l'URL de PR et les résultats CI
distants sont fournis dans le compte rendu de livraison et la PR, pas prédits ici.
La fusion et toute mise en production restent une décision humaine séparée.

Les rapports `PHASE_2_FOUNDATION_REVIEW.md` et
`PHASE_2_KAHOOT_INTEGRATION_REVIEW.md` conservent leur historique et les décisions
d'architecture. Leurs mentions d'absence de commit concernent leurs phases locales.

## Revue du diff complet

- Aucun cours historique, exercice, TP, révision, média, ancien parcours ou
  fichier Kahoot existant déplacé, supprimé ou réécrit ; glossaire JSON inchangé.
- Les 28 périodes et tous les champs du planning sont conservés octet pour octet
  hors les deux réparations syntaxiques autorisées. Tests d'empreintes et de fidélité.
- GNU/Linux administration et Services réseau Microsoft restent MATCH_PROBABLE :
  quatre périodes, deux correspondances, aucune cible canonique inventée.
- MSP services réseau conserve ses relations vides ; systèmes clients garde ses
  preuves documentaires, son chemin et ses ressources historiques.
- Nouvelle navigation uniquement additive ; classement Cours au build sans perte
  de groupe/page. Le statut temporel est calculé au navigateur, Europe/Paris.
- Kahoot : 1 à 20 questions, un Kahoot structuré canonique par module, contrôles
  UI/serveur/build/contrat IA ; aucun nouveau quiz vide. Conservation des pages
  historiques sans leur inventer un nombre ou des modes disponibles.
- Les plafonds 30 du nombre de quiz et 40 du nombre de ressources ne sont pas
  des limites de questions. Le `list(item.questions, 80)` de `hasQuizInput()`
  ne fait que détecter une saisie ; la normalisation suivante impose 20 et
  rejette les dépassements. Aucun chemin moderne acceptant 30/40 questions identifié.
- Valeurs externes échappées au rendu, chemins documentaires contrôlés, URLs
  Kahoot HTTPS bornées aux liens de partage/détails, pas de PIN/session persisté.
- Aucun changement aux RPC, migrations, autorisations, vote, override, claim,
  attestation, callback ou workflows Phase 1 ; tests de régression conservés.
- Aucun client IA/Drive, aucun nouveau droit, aucune dépendance ajoutée.
- Pas d'appel réseau depuis les nouveaux parseurs/projections/contrats.
- Aucun build, capture, journal temporaire ou fichier /tmp dans le manifeste Git.
- Recherche ciblée de motifs de secrets dans les ajouts et fichiers nouveaux :
  aucun signal. Les identifiants Drive documentent la source, sans accorder d'accès.
  Les noms de formateurs proviennent du planning dont la fidélité est explicitement
  requise ; aucune identité de compte Supabase ou donnée d'authentification ajoutée.

Le module Kahoot spécialisé limite l'extension des gros générateurs existants.
Point mineur sans effet de bord : `appendKahootLibrary()` dans `course.ts` n'est
plus appelé, la bibliothèque étant une projection de build. Pas de suppression
opportuniste dans cette passe ; un retrait peut être validé séparément.

## Compléments Phase 2C

Aucune correction fonctionnelle nécessaire après la revue ciblée.

- Nouveau test permanent `tests/parcours.browser.mjs` : build réel, liens internes,
  passage En cours → Passé par horloge simulée et timer réel de l'application,
  retour de navigation, clavier, menu mobile, MSP et largeur aux quatre résolutions.
- `tests/kahoot.browser.mjs` étendu : bibliothèque ET module, 320/768/1024/1440,
  anonymat, profil actif simulé, logout, clavier, repli officiel, absence de
  débordement. Captures des états anonyme et connecté hors dépôt.
- Les premiers essais du nouveau scénario Parcours ciblaient le voile du menu
  puis un ancien libellé de sous-page. Le HTML Material montre le bouton dans
  `.md-header` et le lien de section `MSP` (navigation.indexes). Sélecteurs de
  test corrigés ; aucune temporisation arbitraire ni assertion supprimée.

Les tests locaux utilisent Chromium/Playwright existant dans un profil isolé.
Les requêtes externes sont interceptées et le client collaboration de production
est neutralisé dans ces fixtures. Aucun compte, token, vote, appel de proposition
ou lancement Kahoot réel. Les cartes modernes de démonstration sont injectées
dans la réponse de test, jamais enregistrées sous docs/.

## Validations locales exécutées avant commit

| Commande / suite | Résultat |
| --- | --- |
| `npm test` | PASS — 156 tests |
| `deno task test:edge` | PASS — 133 tests |
| `deno task check:edge` | PASS — trois points d'entrée |
| `python -m unittest discover -s tests -p 'test_*.py'` | PASS — 60 tests |
| `python tests/maintenance_postgres.py` | PASS — 55 tests, PostgreSQL 16.15 |
| `python scripts/validate_course_structure.py` | PASS |
| `python scripts/build_glossary.py --check` | PASS — 487 termes, 8 cours, 59 modules |
| `mkdocs build --strict --site-dir <temporaire>/site` | PASS — 6,15 s |
| `node --test tests/parcours.browser.mjs` | PASS — 4 scénarios Parcours/MSP |
| `node --test tests/kahoot.browser.mjs` | PASS — 8 scénarios bibliothèque/module |
| `node --test tests/course-creator-glossary.browser.mjs` | PASS — 13 scénarios formulaire |
| `git diff --check` | PASS |

Python/MkDocs : venv existant `../formation-tssr/.venv/bin/`, toujours avec
`PYTHONDONTWRITEBYTECODE=1`. Deno 2.2.7 existant ; aucun runtime installé dans le dépôt.
PostgreSQL : conteneurs jetables, réseau none, aucun port ni montage hôte,
nettoyés par la suite. Aucune cible Supabase distante.

Pour reproduire les tests navigateur : fournir `TSSR_TEST_SITE_DIR` (build strict),
`TSSR_TEST_PYTHON` (venv), `NODE_PATH` (Playwright existant), et éventuellement
`PLAYWRIGHT_CHANNEL=chrome` et `TSSR_TEST_SCREENSHOTS` (hors dépôt). Les suites
`.browser.mjs` sont explicites, non incluses dans `npm test` ni la CI actuelle.
Le job CI existant exécute Node, Python, PostgreSQL, Deno et MkDocs strict.

Contrôle visuel des captures mobile/desktop : Parcours, MSP, bibliothèque et
module avec carte locale, présentation cohérente et liens lisibles. Aucun
débordement mesuré ni erreur console/page dans les scénarios finaux. Ce contrôle
n'est pas un audit WCAG exhaustif ni une mesure des performances de production.
Le message général Material sur MkDocs 2 et l'information sur les pages historiques
hors navigation restent présents ; le build strict termine en code 0.

Pas d'audit npm des dépendances annoncé : le package de tests n'a ni dépendance
npm ni lockfile npm ; les dépendances du site sont inchangées. Aucun nouvel outil
d'audit installé. Cela ne constitue pas une certification des dépendances historiques.

## Manifeste à indexer explicitement

11 fichiers suivis modifiés :

```text
docs/assets/javascripts/course-creator-utils.js
docs/assets/javascripts/course-creator.js
docs/assets/javascripts/extra.js
mkdocs.yml
scripts/mkdocs_hooks.py
supabase/functions/_shared/course-editor.ts
supabase/functions/_shared/course-editor_test.ts
supabase/functions/_shared/course.ts
supabase/functions/_shared/course_test.ts
supabase/functions/_shared/validation.ts
tests/course-creator-glossary.browser.mjs
```

28 nouveaux fichiers :

```text
PHASE_2_FOUNDATION_REVIEW.md
PHASE_2_KAHOOT_INTEGRATION_REVIEW.md
PHASE_2_INTEGRATION_REVIEW.md
data/course-mapping.json
data/msp.json
data/parcours-source.json
data/parcours_tssr.yaml
docs/assets/javascripts/kahoot.js
docs/assets/javascripts/parcours.js
docs/assets/stylesheets/kahoot.css
docs/assets/stylesheets/parcours.css
docs/msp/index.md
docs/parcours-tssr/index.md
scripts/import_contract.py
scripts/kahoot_catalog.py
scripts/parcours.py
scripts/parcours_catalog.py
scripts/parcours_render.py
supabase/functions/_shared/kahoot.ts
supabase/functions/_shared/kahoot_test.ts
tests/fixtures/planning-drive-original.txt
tests/kahoot.browser.mjs
tests/kahoot.test.mjs
tests/parcours.browser.mjs
tests/parcours.test.mjs
tests/test_import_contract.py
tests/test_kahoot.py
tests/test_parcours.py
```

## Préparation production — aucune exécution autorisée ici

1. Revue humaine de la PR et de tous les checks avant merge.
2. Décider séparément de la livraison coordonnée frontend/build/backend : les
   nouveaux champs de Kahoot ne doivent pas être soumis à l'ancien backend qui
   n'applique pas ce contrat. Un ancien formulaire en cache devra être rechargé.
   Prévoir une fenêtre de maintenance éditoriale selon le circuit Phase 1 existant
   avant cette bascule ; ne pas modifier les comptes ni contourner le consensus.
3. La source serveur change dans `_shared/course.ts`, `course-editor.ts`,
   `kahoot.ts` et `validation.ts`. Sa présence dans GitHub ne vaut PAS redéploiement
   Edge. Aucun schéma, secret ou migration requis par ce lot. Une future mission
   déterminera et autorisera explicitement les déploiements nécessaires.
4. Le merge main déclenchera le workflow documentaire existant ; ni merge ni
   déclenchement manuel dans cette mission. Avant toute ouverture éditoriale,
   contrôler ensemble la version du site et celle du serveur.
5. Retour arrière éventuel : réversion Git revue et versions frontend/serveur
   coordonnées. Ne pas ignorer de nouvelles métadonnées déjà publiées ; aucun
   rollback automatique ni reset de contenu prévu ici.

Limites restant soumises à décision humaine :

- Confirmer les deux équivalences de cours et analyser MSP services réseau.
- Vérifier les capacités et la visibilité des vrais quiz du compte Kahoot avant
  de déclarer solo/live. Aucune API inventée, aucune fonction payante obligatoire.
- Pas de contrôle serveur sur un lien Kahoot public : TSSR contrôle son action
  UI, Kahoot conserve son authentification et ses permissions de lancement.
- Un quiz lié porte un nombre déclaré, pas vérifié par API. Les questions
  préparées sont éditables dans les métadonnées, pas un moteur de jeu TSSR.
- La déduplication des imports IA est préparée par empreintes, sans journal
  durable ni réservation transactionnelle. L'identité proposer-only doit encore
  être construite et testée avant tout agent réel.

## Invariants d'autorité

Google Drive : READ ONLY, aucune lecture supplémentaire ni écriture dans cette
mission. Supabase production et Kahoot externe : aucune opération. Aucune
proposition artificielle, aucun vote ou override. Les seules écritures distantes
autorisées après validation locale sont le push de cette branche et sa PR.
main n'est pas modifié, la PR ne sera pas fusionnée, aucun déploiement effectué.
