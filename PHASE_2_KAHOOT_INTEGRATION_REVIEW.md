# Phase 2B — Intégration locale Parcours/MSP et Kahoot

Dates : 27–28 septembre 2026. Périmètre : revue du diff local et implémentation locale uniquement.

## Résultat

**PHASE_2_KAHOOT_READY — pour revue humaine du diff local, pas pour publication automatique.**

Branche conservée : `codex/phase2-parcours-msp`.
HEAD inchangé : `b68fe42536b6d05e5bee19831809f44f34967c53`.
Aucun staging, commit, push, merge, migration distante ou déploiement.
Aucune proposition réelle, aucun vote, aucun override, aucun quiz externe créé.

Suivi : `PHASE_2_INTEGRATION_REVIEW.md` consigne la revue finale Phase 2C et
l'autorisation ultérieure de commit/push/PR, sans merge. Les résultats et limites
ci-dessous restent ceux de la livraison locale Phase 2B.

## 1. Fondation conservée

Le point de départ était la fondation locale documentée dans
`PHASE_2_FOUNDATION_REVIEW.md`, avec trois fichiers suivis modifiés et dix-sept
nouveaux fichiers. Pas de nouvel audit de production Phase 1.

Le snapshot, ses 28 périodes et ses données originales sont conservés.
Empreintes vérifiées après les tests :

- `data/parcours_tssr.yaml` : `caa3f80b55ed2dc39e1e1101131c4c9db3f6377d186ad1d461b22dc93772e02d`.
- `tests/fixtures/planning-drive-original.txt` : `0b8ad75dbb9a7155d7990b512d8ddff2c607713503946b1523080fdb6a7b6324`.

Parser strict, tri chronologique, états dynamiques, catégories MSP, mappings
explicites et anciens chemins restent présents. Aucun fichier existant sous
`docs/modules/`, `docs/exercices/`, `docs/tp/`, `docs/revision/`, `docs/kahoot/`
ou `docs/parcours/` n'a été réécrit. `data/glossaire.json` est inchangé.

Google Drive est exclusivement une source READ ONLY : pas d'appel Drive dans
cette mission, pas de permission d'écriture ajoutée, pas de client de synchronisation.

## 2. Architecture Kahoot

On conserve les pages Markdown `docs/kahoot/` et le formulaire humain existant.
Pas de nouvelle table, de migration, de catalogue éditorial parallèle, d'API
Kahoot ou de nouveau système d'authentification.

Une nouvelle page structurée porte **un Kahoot canonique par module**. Ce choix
garantit la limite de 20 questions au niveau du module, pas seulement d'une
sous-liste. Les autres modules peuvent ne pas avoir de Kahoot.

Les métadonnées versionnées sont contenues dans un commentaire
`TSSR-KAHOOT-V1`, sous forme de JSON encodé URI. Cet encodage évite une collision
avec la protection `attr_list` sans l'affaiblir. Ce n'est ni du chiffrement ni
un emplacement pour des données privées. Le formulaire reste le moyen normal
de les éditer ; `readKahoot()` et `writeKahoot()` assurent l'aller-retour.

Champs conservés :

| Champ | Sens |
| --- | --- |
| `schemaVersion` | Version du contrat, actuellement 1 |
| `courseId` | Chemin canonique du cours relatif à `docs/`, terminé par `index.md` |
| `moduleId` | Chemin canonique du module du même cours |
| `title` | Titre explicite |
| `questionCount` | Entier entre 1 et 20 |
| `url` | Lien officiel de partage/détails, ou `null` pour une préparation sourcée |
| `soloAvailable`, `liveAvailable` | Déclarations humaines explicites, false par défaut |
| `provenance` | A original, B reformulation, C complément pédagogique, D mise à jour externe |
| `state` | `linked` si URL renseignée, sinon `prepared` avec questions non vides |
| `questions` | Question, réponses, réponse correcte, explication, source et provenance |

Les IDs de cours/modules sont des **références documentaires par chemin**,
distinctes des identifiants métier du glossaire. Le renommage du titre ou le
réordonnancement dans le formulaire n'affecte pas ces chemins existants.
Le déplacement/suppression de module dans l'UI conserve l'association par
`clientId`, ou la remet à sélectionner si le module a disparu.

Les nouveaux Kahoots sont proposés atomiquement avec leurs pages/navigation.
Les créations utilisent une page par quiz au lieu d'un fichier regroupant
plusieurs Kahoots ; les fichiers historiques ne sont pas migrés implicitement.

`scripts/kahoot_catalog.py` parcourt les pages, valide les métadonnées et les
cibles locales, puis `scripts/mkdocs_hooks.py` produit uniquement au build :

- la bibliothèque `kahoot/bibliotheque.md`, groupée par cours ;
- les cartes portant le lien vers le module et sa page Kahoot ;
- la carte réciproque dans le module concerné ;
- le contrôle des doublons de module et d'identifiant distant, y compris un
  doublon d'une URL de quiz historique.

La bibliothèque est désormais une projection : ajouter les quiz via les pages
et le formulaire, pas en dupliquant manuellement des cartes dans sa source.
Le texte source historique de la bibliothèque n'est pas supprimé du dépôt.
Les liens HTML générés utilisent la configuration actuelle `use_directory_urls`.

## 3. Solo, groupe et frontière d'autorisation

Le fonctionnement principal est **link-only**, avec lien officiel permanent
vers le quiz, jamais un PIN de partie ou un lien de session stocké.

- Solo : bouton public uniquement si `soloAvailable=true` et URL validée.
- Groupe : bouton caché et désactivé par défaut. Il devient disponible si
  `TSSRCollaboration.getProfile()` retourne un profil actif, grâce au mécanisme
  existant `tssr:auth-changed`. L'état est relu au clic, y compris après logout.
- Un clic ouvre la fiche Kahoot dans un nouvel onglet avec `noopener,noreferrer`.
  L'utilisateur choisit le mode proposé par Kahoot. Aucun endpoint de lancement
  de partie non documenté n'est construit.
- Une connexion Kahoot peut être demandée par Kahoot. La connexion TSSR ne
  remplace pas les droits du compte externe.
- Le lien officiel reste accessible comme repli. Pas d'iframe ni de service
  tiers nécessaire au chargement du contenu TSSR.

**Limite explicite :** le contrôle TSSR porte sur son action UI. Le lien Kahoot
étant public, le site ne peut pas empêcher un visiteur de le copier puis
d'utiliser les fonctionnalités que Kahoot lui autorise. Ce n'est pas un
contrôle d'accès serveur à Kahoot. Aucun endpoint privilégié n'a été ajouté.
Toute future mutation serveur devra vérifier la session et ses permissions
côté serveur, sans se fier à ce bouton.

Les capacités du compte et les contenus réellement distants n'ont pas été
testés avec le compte de l'utilisateur. Les déclarations solo/live et le nombre
de questions externes doivent être vérifiés humainement et révisés si le quiz
change sur Kahoot. Le portail ne prétend pas les vérifier par API.

## 4. Capacités officielles et gratuité

Documentation officielle consultée le 27 septembre 2026 :

- [Partager un Kahoot](https://support.kahoot.com/hc/en-us/articles/115001615507-How-to-share-a-kahoot) : copier le lien depuis la fiche et l'action Share kahoot. Le partage dépend de la visibilité.
- [Visibilité](https://support.kahoot.com/hc/en-us/articles/115002930528-How-to-make-a-kahoot-public-private-or-other) : certaines options dépendent du compte. Notamment, un compte business gratuit peut être limité au privé ; ne pas promettre un accès solo public universel sur la seule mention « gratuit ».
- [Liens et intégration embarquée](https://support.kahoot.com/hc/en-us/articles/360018695193-How-to-embed-or-link-a-kahoot-onto-a-web-page) : un aperçu embarqué existe pour les quiz publics/non répertoriés ; l'embarquement des assignments dépend du plan. Faute de visibilité/type de compte vérifiés ici, aucune iframe n'est activée. Le lien officiel est le chemin robuste retenu.
- [Guest hosting](https://support.kahoot.com/hc/en-us/articles/29428983927059-How-to-allow-guest-hosting) : dépend de certains plans et des réglages du créateur. Cette capacité payante/conditionnelle n'est pas requise par TSSR.

Aucune capacité maximale de participants n'est codée, aucun abonnement requis
par le portail, aucun changement de visibilité/compte effectué.

### Actions humaines pour associer un vrai quiz, plus tard

1. Ouvrir sa fiche dans son compte Kahoot ; vérifier que sa visibilité permet
   l'usage souhaité avec le plan actuel, sans acheter ni modifier automatiquement le plan.
2. Copier le lien officiel via Share kahoot → Copy.
3. Vérifier les modes proposés par Kahoot pour ce lien, notamment le solo en
   visiteur et les permissions nécessaires à l'hôte.
4. Dans Ajouter/Modifier, renseigner titre, module, nombre réel 1–20 et provenance ;
   cocher uniquement les modes effectivement vérifiés.
5. Soumettre normalement à la validation humaine existante. Ne pas réutiliser
   une approbation pour un contenu changé.
6. Pour une partie de groupe, se connecter à TSSR puis utiliser l'action et
   terminer la préparation sur Kahoot. Le PIN/lien/QR est fourni par Kahoot à ce
   moment, il n'est jamais enregistré par cette intégration.

Le quiz historique actuellement intitulé « Sans titre » reste tel quel ; aucun
nouveau quiz de ce nom n'a été généré. Sa correspondance au module, son nombre
de questions et ses modes ne sont pas déduits de son URL. Il reste consultable
dans la rubrique historique, sans faux boutons de modes prétendument validés.

## 5. Contrôles et corrections

- Limite préparatoire 30, création 40 et contexte d'édition 80 remplacés par 20
  pour les listes de questions structurées ; les plafonds de nombre de quiz,
  exercices, ressources et pages ne sont pas des limites de questions et restent distincts.
- 0 et 21 questions refusées ; 1 et 20 acceptées ; pas de remplissage jusqu'à 20.
- URL seule nouvelle : nombre déclaré 1–20 obligatoire ; préparation sans URL :
  questions structurées sourcées non vides. Anciennes pages non structurées conservées.
- Questions préparées avec 2–4 réponses distinctes, réponse correcte, source et
  provenance. Elles sont conservées dans les métadonnées éditables, pas dupliquées
  dans un corps généré qui risquerait de diverger lors d'une modification.
- Les propositions Markdown génériques contrôlent aussi les métadonnées ; un
  nouveau lien Kahoot doit les porter et une page structurée ne peut pas les
  perdre silencieusement. Les relations globales et doublons sont revérifiés au build.
- Aucun changement aux rôles, RPC, maintenance, consensus, override, claim,
  callback, attestation SHA, workflows ou secrets Phase 1.
- Le test d'intégration initial a effectivement échoué sur JSON/attr_list, puis
  passé après encodage des données. Les protections Phase 1 ne sont pas contournées.
- Les indices de module Kahoot ne sont plus rabattus silencieusement vers une
  borne de la liste lors de la normalisation serveur.

## 6. Contrat IA : préparation seulement

`scripts/import_contract.py` passe au schéma 2. `KAHOOT_SOURCE` exige des
références cours/module cohérentes et 1–20 questions structurées, chacune avec
provenance A/B/C/D et source. Unité de provenance et texte original restent traçables.

`idempotencyKey` couvre fichier Drive, empreinte du support, type et cible ;
`proposalFingerprint` couvre aussi le résultat préparé. Ces empreintes préparent
la déduplication mais ne sont pas encore une réservation transactionnelle ni un
registre de propositions. Aucun modèle, compte agent, RPC IA, polling ou connecteur
Drive n'est activé. Aucun nom de modèle définitif n'est codé.

Le futur agent sera une source de propositions uniquement. Votes, auto-approbation,
override, gestion des comptes, commits directs et écriture Drive lui resteront
interdits. Le contrat local ne crée pas ces permissions ; l'identité serveur
proposer-only et sa protection seront une étape distincte avant toute connexion IA.

## 7. Manifeste Phase 2B

Fichiers suivis modifiés par cette extension (dont deux partagés avec Foundation) :

```text
docs/assets/javascripts/course-creator-utils.js
docs/assets/javascripts/course-creator.js
mkdocs.yml
scripts/mkdocs_hooks.py
supabase/functions/_shared/course-editor.ts
supabase/functions/_shared/course-editor_test.ts
supabase/functions/_shared/course.ts
supabase/functions/_shared/course_test.ts
supabase/functions/_shared/validation.ts
tests/course-creator-glossary.browser.mjs
```

Nouveaux fichiers Phase 2B :

```text
docs/assets/javascripts/kahoot.js
docs/assets/stylesheets/kahoot.css
scripts/kahoot_catalog.py
supabase/functions/_shared/kahoot.ts
supabase/functions/_shared/kahoot_test.ts
tests/kahoot.browser.mjs
tests/kahoot.test.mjs
tests/test_kahoot.py
PHASE_2_KAHOOT_INTEGRATION_REVIEW.md
```

Fichiers Foundation encore non suivis, actualisés : `scripts/import_contract.py`,
`tests/test_import_contract.py`, `PHASE_2_FOUNDATION_REVIEW.md` (règle 20).
Le reste du manifeste Foundation est conservé, dont `extra.js`, données Parcours/MSP,
pages, styles, scripts et tests. Les rapports restent des documents de revue locale,
à examiner séparément avant toute décision de staging/publication.

## 8. Validation réellement exécutée

| Suite | Résultat | Preuve |
| --- | --- | --- |
| `npm test` | PASS | 156 tests, zéro échec |
| `deno task test:edge` | PASS | 133 tests, zéro échec |
| `deno task check:edge` | PASS | trois points d'entrée vérifiés ; aucun déploiement |
| `python -m unittest discover -s tests -p 'test_*.py'` | PASS | 60 tests, zéro échec |
| `python tests/maintenance_postgres.py` | PASS | 55 tests, PostgreSQL 16.15 isolé |
| `python scripts/validate_course_structure.py` | PASS | Structure, navigation et relations valides |
| `python scripts/build_glossary.py --check` | PASS | 487 termes, 8 cours, 59 modules, aucun changement |
| `mkdocs build --strict` | PASS | 6,04 s ; sortie temporaire hors dépôt |
| `node --test tests/kahoot.browser.mjs` | PASS | 4 largeurs, anonymat/connexion/déconnexion, clavier, zéro débordement, aucune erreur JS/console |
| `node --test tests/course-creator-glossary.browser.mjs` | PASS | 13 tests dont 2 nouveaux tests de formulaire Kahoot ; soumissions uniquement interceptées par fixture |
| `git diff --check` | PASS | Aucun défaut d'espacement suivi |

Python utilisé avec `PYTHONDONTWRITEBYTECODE=1` et le venv existant
`../formation-tssr/.venv/bin/python`. Deno 2.2.7 déjà présent, pas d'installation
de dépendance. Chromium utilise une session Playwright isolée et des réponses
locales ; aucune ouverture effective de partie Kahoot, aucun appel production.

Reproduction des tests navigateur : après build temporaire, définir
`TSSR_TEST_SITE_DIR` vers ce build, `TSSR_TEST_PYTHON` vers le Python du projet,
`NODE_PATH` vers un runtime Playwright existant et, si nécessaire,
`PLAYWRIGHT_CHANNEL=chrome`, puis lancer les deux commandes ci-dessus.
Les tests `.browser.mjs` sont des suites explicites, distinctes de `npm test`.

Build de vérification : `/tmp/tssr-phase2b-final.OUfOAJ/site`.
Captures de la fixture locale aux quatre largeurs : même dossier parent,
`kahoot-320.png`, `kahoot-768.png`, `kahoot-1024.png`, `kahoot-1440.png`.
Captures mobile et desktop inspectées visuellement ; aucune fixture n'est
ajoutée aux pages publiables du dépôt.

Le build émet l'information habituelle sur les anciennes pages hors navigation
et le message général de Material sur MkDocs 2 ; il termine en code 0 avec `--strict`.
PostgreSQL : `network=none`, aucun port, aucun montage hôte, conteneurs jetables
nettoyés par les tests. Aucun identifiant ou URL de base distante utilisé.

## 9. Limites et décisions humaines restantes

- Valider le diff avant tout staging/commit. Aucune intégration Git automatique.
- Préparer séparément la livraison coordonnée UI/serveur/build : un ancien
  frontend en cache ne fournit pas tous les nouveaux champs exigés pour un
  nouveau Kahoot. Les anciennes pages restent lisibles ; inviter à recharger
  l'éditeur lors de cette future bascule. Aucun déploiement n'est autorisé ici.
- Compléter humainement les métadonnées du quiz historique si souhaité, sans
  attribuer automatiquement ses questions à un module supposé.
- Vérifier sur le vrai compte la visibilité et les modes avant de les déclarer
  disponibles. L'offre gratuite exacte n'a pas été inspectée et peut restreindre
  la visibilité ; le fonctionnement sans iframe/abonnement reste possible.
- Les questions proposées demandent une revue pédagogique ; une provenance
  déclarée n'est pas une preuve automatique de pertinence.
- Les futures écritures serveur IA, droits proposer-only, registre durable de
  déduplication et éventuelle intégration embarquée vérifiée restent hors périmètre.

Ces points ne bloquent pas la revue de l'architecture locale livrée. Ils ne sont
pas présentés comme des fonctionnalités distantes déjà vérifiées.

## 10. Contrôle final et limites d'autorité

Diff pédagogique existant vide. HEAD conservé, staging vide. Aucun fichier de
test généré ou build ajouté au dépôt ; tous les nouveaux fichiers Git sont des
sources, tests, données de fondation ou rapports prévus.

Recherche de motifs de tokens/clefs privées dans les ajouts et fichiers nouveaux :
aucun signal détecté. C'est un contrôle ciblé, pas une preuve universelle d'absence
de données sensibles. Aucune valeur de secret n'a été enregistrée par ce lot.

Google Drive inchangé par cette mission ; Supabase production inchangé par cette
mission ; Kahoot externe inchangé ; aucun déploiement ; aucun commit/push/merge.
