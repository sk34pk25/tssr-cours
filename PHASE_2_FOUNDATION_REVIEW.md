# Phase 2 — audit ciblé et fondation locale

Date : 2026-09-27. Verdict final : **PHASE_2_FOUNDATION_READY** — implémentation et validation locales, aucune mise en production.

Les sections 1 à 7 conservent l'audit initial, alors bloqué. Ce blocage a été
levé par l'autorisation explicite de corriger uniquement le snapshot local.
La section 8 décrit l'état final et fait autorité sur l'état de livraison.

Suivi : la revue finale et l'intégration Git autorisée en Phase 2C sont décrites
dans `PHASE_2_INTEGRATION_REVIEW.md`. Les constats « aucun commit/push » ci-dessous
décrivent l'état historique de la fondation avant cette intégration.

## 1. Périmètre et état initial vérifié

Phase 1 acceptée comme validée par l'utilisateur ; aucun nouvel audit de production.
Fetch Git en lecture distante, puis réutilisation du checkout d'intégration propre.
Branche locale : `codex/phase2-parcours-msp`.
Base : `b68fe42536b6d05e5bee19831809f44f34967c53`, main observé, commit
`docs: apply approved change #9891da17`, après la fusion de PR #6.
Aucun ancien checkout de guard modifié. Aucun commit, push, vote, override,
callback, proposition, migration ou déploiement. Aucun contenu pédagogique modifié.
Seul ce rapport est ajouté. Aucun fichier de données de parcours n'est importé.

## 2. Source Drive : problème bloquant constaté

Dossier inspecté en lecture seule :
<https://drive.google.com/drive/folders/1N73OtTF2TKxYUEO9X0_4NObnmEAugzZ1>.
Le listing de sa racine expose `planning_formation_TSSR.yaml`, pas le nom
`planning_formation_TSSR (1).yaml` annoncé dans la mission.

Fichier réellement lu :
<https://drive.google.com/file/d/1HYG2eTD-1Zv42cS-xcdrpSS17XaFkCdC/view>.
MIME : `application/x-yaml`. Taille : 6127 octets.
Dernière modification indiquée : `2026-09-21T09:18:57.712Z`.
SHA-256 des octets retournés :
`0b8ad75dbb9a7155d7990b512d8ddff2c607713503946b1523080fdb6a7b6324`.
Aucune copie brute ajoutée au dépôt, aucune écriture Drive.

Reproduction réelle avec le Python/PyYAML du projet :

```text
ParserError: while parsing a block mapping
line 3, column 1
expected <block end>, but found '<scalar>'
line 15, column 19:
- "non renseigné" signifie que le formateur n'était ...
```

Un deuxième diagnostic, sur la représentation YAML de la seule section
`planning` (sans importer ni réécrire les données), constate un `MappingNode`
avec **28 clés `cours`**. Chaque période manque du tiret de liste.
Un `safe_load` naïf de cette section conserve uniquement les cinq dernières
valeurs : cours, date_debut, date_fin, modalite_lieu, formateurs. Il perd donc
27 périodes. Le chargement du document entier échoue déjà avant cela.

Il serait incorrect de traiter ce résultat comme un planning de 28 objets,
de récupérer silencieusement les doublons ou de réécrire la source sans accord.
Décision nécessaire : fournir le lien de la version `(1)` si distincte,
ou confirmer ce fichier et autoriser une correction strictement syntaxique
(chaîne du contexte correctement citée, périodes en liste), sans changement
des intitulés, dates, formateurs, modalités ni de l'ordre physique.

## 3. Audit ciblé du dépôt

| Composant | Fichiers / constat | Conséquence Phase 2 |
|---|---|---|
| Site | `mkdocs.yml` : Material français, navigation explicite, recherche, glightbox, attr_list, md_in_html, superfences | Réutiliser le thème et les classes ; aucune dépendance UI nouvelle |
| Hooks | `scripts/mkdocs_hooks.py::on_config`, `on_pre_build` | Sécurité Markdown conservée ; génération actuelle du glossaire uniquement |
| Catalogue | `docs/modules/01-*` à `09-*`, index et pages module | Ne déplacer ni renommer ces chemins |
| Relations | `data/glossaire.json` : 8 cours, 59 modules ; IDs et `courseId` | Le catalogue du glossaire n'est pas exhaustif : le neuvième cours existe sans association de glossaire |
| Parcours ancien | `docs/parcours/index.md` + 9 étapes historiques, hors nav explicite | Ne pas écraser ce contenu ni les contributions du formulaire |
| Formulaire | `docs/ajouter/index.md`, `course-creator.js`, `course-editor.js` et utilitaires | Le parcours YAML ne doit pas supprimer les fonctions éditoriales existantes |
| Génération | `supabase/functions/_shared/course-editor.ts` : édition des fichiers, nav, liens glossaire, quiz | Garder les deltas minimaux et la protection contre quiz vides |
| Parcours éditorial | Même fichier, vers lignes 2568–2603 : modification conditionnelle de `docs/parcours/index.md` | Nouvelle page YAML séparée proposée pour ne pas écraser les contributions humaines |
| Collaboration | `supabase/functions/change-requests/index.ts` : `create-course`, `modify-course`, `create`, `vote`, `admin_override_approval`, `cancel` | Futur agent = source de proposition seulement, aucun accès au vote/override/publication |
| TP | `docs/tp/`, dont `tp/msp/`, index, énoncés/corrections | Réutiliser les références, pas de copie des contenus |
| Exercices | `docs/exercices/` : quiz réseau/systèmes clients, cas transversaux | Maintenir une famille distincte |
| Révisions | `docs/revision/`, dont MSP | Maintenir les liens canoniques |
| Kahoot | `docs/kahoot/bibliotheque.md`, nav Kahoot, traitement des URLs officielles dans le serveur | Aucun Kahoot créé ; règle actualisée Phase 2B : 1–20 questions par module, jamais vide |
| Glossaire | `scripts/build_glossary.py`, `data/glossaire.json`, page générée | Ne pas ajouter automatiquement un cours/terme pour satisfaire le mapping |
| Validation | `scripts/validate_course_structure.py` | Valide nav, slugs, relations, PDF ; compléter plus tard par validation du manifeste |
| Drive | Aucun import/synchroniseur Drive identifié dans les scripts inspectés | Préparer un contrat sans daemon ni identifiants ni appels réseau au build |

`course-editor_test.ts` contient notamment les régressions pour association
explicite de glossaire, édition sans changement parasite, liens invalides et
préservation d'un quiz existant vide. Elles ne doivent pas être affaiblies.

## 4. Chronologie lisible — diagnostic, PAS snapshot YAML validé

Les 28 blocs ci-dessous sont lisibles dans le texte source. Tri par date_debut,
pas par position physique. Cette table ne vaut pas validation du format source.
MATCH_EXACT désigne ici une identité de titre après typographie et retrait du
suffixe de période seulement ; MATCH_PROBABLE n'autorise aucune association.

| Début | Fin | Intitulé source | Classe / candidat existant |
|---|---|---|---|
| 2026-06-08 | 2026-06-12 | Microsoft 365 - Outils collaboratifs | MATCH_EXACT → C03 |
| 2026-06-15 | 2026-06-19 | Bases des réseaux | MATCH_EXACT → C01 |
| 2026-06-22 | 2026-06-26 | Systèmes clients Microsoft (1/2) | MATCH_EXACT → C02 |
| 2026-06-29 | 2026-07-03 | Systèmes clients Microsoft (2/2) | MATCH_EXACT → C02 |
| 2026-07-06 | 2026-07-10 | Utilisation d'une distribution GNU/Linux | MATCH_EXACT → C04 |
| 2026-07-13 | 2026-07-17 | Administration d'une distribution GNU/Linux (1/2) | MATCH_PROBABLE → C05 |
| 2026-07-20 | 2026-07-24 | Administration d'une distribution GNU/Linux (2/2) | MATCH_PROBABLE → C05 |
| 2026-07-27 | 2026-07-31 | Mise en situation professionnelle : systèmes clients | MSP → existante M01 |
| 2026-08-03 | 2026-08-07 | Sensibilisation ITIL et Gestion de Parc (1/2) | MATCH_EXACT → C06 |
| 2026-08-10 | 2026-08-14 | Sensibilisation ITIL et Gestion de Parc (2/2) | MATCH_EXACT → C06 |
| 2026-08-17 | 2026-08-21 | Les infrastructures réseaux (1/2) | MISSING |
| 2026-08-24 | 2026-08-28 | Les infrastructures réseaux (2/2) | MISSING |
| 2026-08-31 | 2026-09-04 | Services réseau en environnement Microsoft (1/2) | MATCH_PROBABLE → C09 (réseau/réseaux) |
| 2026-09-07 | 2026-09-11 | Services réseau en environnement Microsoft (2/2) | MATCH_PROBABLE → C09 (réseau/réseaux) |
| 2026-09-14 | 2026-09-18 | Services réseau en environnement Linux | MISSING |
| 2026-09-21 | 2026-09-25 | Mise en situation professionnelle : services réseau | MSP → support Drive, pas de page actuelle |
| 2026-09-28 | 2026-10-02 | Initiation au scripting Bash | MISSING |
| 2026-10-05 | 2026-10-09 | Initiation à Powershell | MISSING |
| 2026-10-12 | 2026-10-16 | Virtualisation de serveurs | MISSING |
| 2026-10-19 | 2026-10-23 | Messagerie Cloud | MISSING |
| 2026-10-26 | 2026-10-30 | Sauvegarde et Restauration | MISSING |
| 2026-11-02 | 2026-11-06 | Réseau et Sécurité (1/2) | MISSING |
| 2026-11-09 | 2026-11-13 | Réseau et Sécurité (2/2) | MISSING |
| 2026-11-16 | 2026-11-20 | Services transverses Microsoft (RDS/WDS) | MISSING |
| 2026-11-23 | 2026-12-24 | Stage en entreprise | NON_COURSE / stage |
| 2026-12-25 | 2027-01-01 | Interruption | NON_COURSE / interruption |
| 2027-01-04 | 2027-01-22 | Stage en entreprise | NON_COURSE / stage |
| 2027-02-15 | 2027-02-19 | Evaluations Finales RENNES | NON_COURSE / évaluation |

MISSING = pas de cours canonique dédié dans le dépôt examiné ; cela ne veut
pas dire qu'aucun chapitre d'un autre cours ne traite le sujet ou qu'aucun
support Drive n'existe. Ne pas créer de cours automatiquement.

### Chemins canoniques et actions proposées

| Référence | Chemin sous docs/ | Action après validation de la source |
|---|---|---|
| C01 | `modules/01-bases-reseaux/index.md` | Référencer sans déplacement |
| C02 | `modules/02-systemes-clients-microsoft/index.md` | Deux périodes, un seul cours |
| C03 | `modules/03-microsoft-365-outils-collaboratifs/index.md` | Présenter en premier, sans renommer |
| C04 | `modules/04-utilisation-gnu-linux/index.md` | Référencer |
| C05 | `modules/05-administration-debian-gnu-linux/index.md` | Confirmer l'équivalence Debian / administration GNU/Linux |
| C06 | `modules/06-sensibilisation-itil-gestion-parc/index.md` | Deux périodes, un seul cours |
| C07 | `modules/07-administration-glpi/index.md` | Conserver hors périodes explicitement associées |
| M01 | `modules/08-msp-systemes-clients/index.md` | Ajouter entrée MSP de premier niveau sans casser le chemin historique |
| C09 | `modules/09-services-reseaux-en-environnement-microsoft/index.md` | Confirmer l'équivalence de titre ; ne pas créer deux copies |

## 5. Architecture proposée (non implémentée)

### Parcours

- Drive = source d'entrée ; Git = snapshot revu puis publié par le circuit existant.
- Un seul snapshot YAML, original valide conservé sans réordonner les octets.
  Provenance séparée : file_id, modified_time, SHA-256, version du parser.
- Parser sûr, sans tags Python, rejet des clés dupliquées et schémas inattendus.
  `planning` doit être une liste non vide ; dates ISO valides, début <= fin,
  champs texte bornés, formateurs liste de chaînes. Aucun champ statut fixe.
- Modèle : période indépendante avec identifiant stable, type, dates,
  titre, modalité/lieu, formateurs et référence optionnelle vers cours ou MSP.
- Tri par date_debut, ordre stable des ex aequo. Deux périodes ne créent jamais
  deux cours. Aucun lien pour une cible absente ou ambiguë.
- Nouvelle page proposée `docs/parcours-tssr/index.md`, construite depuis le
  snapshot au build. L'ancien `docs/parcours/` reste intact pour les liens et
  contributions du formulaire. L'ancien index annonce actuellement une source
  de vérité à neuf étapes : prévoir un avertissement de contexte non destructif
  avant intégration pour ne pas présenter deux autorités concurrentes.
- Statut au navigateur, date civile Europe/Paris, recalcul à l'ouverture,
  navigation instantanée, retour à l'onglet et changement de jour. Sans JS :
  dates lisibles, pas de statut périmé persisté lors du build.
- Réutiliser `tssr-timeline__card`, `tssr-timeline__body`, et les tokens actuels.
  Types et états indiqués en texte, pas seulement par couleur.
- Mapping séparé avec décision, cible, candidats et preuve ; les correspondances
  probables restent non résolues. Trier la présentation des cours par première
  période validée ; garder tous les cours non associés et tous les chemins.

### MSP

- Catégorie de navigation principale dédiée, modèle distinct du cours.
- `data/msp.json` envisagé : id, titre, chemin existant optionnel, sources,
  relations `{courseId, moduleId?, evidence}` et compétences documentées.
- Sections facultatives : contexte, situation, objectifs, prérequis, missions,
  ressources, livrables, critères, tests, dépannage, synthèse, correction.
- Ne pas migrer l'identifiant glossaire historique `msp`, ni déplacer les pages,
  TP ou révisions existants. Une entrée de navigation dédiée peut référencer
  directement les pages historiques : aucune duplication du contenu.
- Les objectifs du module MSP systèmes clients citent explicitement Windows,
  Debian, réseau, comptes, stockage, scripting et preuves. Cela fournit des
  pistes documentées, pas une liste automatique définitive de modules prérequis.
- Le dossier Drive MSP services réseau existe (`1sTxYxQiaiKhaRdqsQYGV7Kw37myRNXK3`).
  Ses supports n'ont pas été analysés dans cette passe : relations non établies.

### Préparation Drive / IA

- Découverte bornée au dossier TSSR et à un file_id de manifeste confirmé,
  pas au seul nom mutable. Aucun déplacement, renommage ou écriture Drive.
- Le build MkDocs reste hors ligne : aucune API Drive au build, aucun secret.
- Détection future par couple file_id + révision/empreinte ; journal d'import
  idempotent et comparaison du snapshot, jamais publication automatique.
- Classification proposée : COURSE, MSP, TP, EXERCISE, REVISION, KAHOOT_SOURCE,
  RESOURCE, UNKNOWN. UNKNOWN et ambiguïtés exigent revue humaine.
- Provenance par unité générée : A original, B reformulation, C complément
  pédagogique, D mise à jour externe, avec source/page/extrait ou référence.
- Avant toute intégration réelle d'un agent, prévoir côté serveur une identité
  de proposition seule, exclue des validateurs et de l'auto-approbation auteur.
  Ne pas réutiliser le compte Patrik ni un profil éditeur humain comme raccourci.
- Réutiliser le modèle de change_request et son cycle de validation. Aucun
  nouveau chemin commit/main, aucun override agent, aucun vote d'agent.
- Un contrat MSP/parcours devra être admis et validé explicitement par le
  serveur existant : ne pas présumer que tout nouveau fichier `data/*.json`
  ou `.yaml` est déjà autorisé. Aucun élargissement du validateur réalisé ici.
- Kahoot : conserver les régressions Phase 1, aucune création vide ; préparer
  au plus 20 questions pertinentes par module (règle Phase 2B), provenance incluse, validation humaine.

## 6. Vérifications de cette passe

| Contrôle | État | Observation |
|---|---|---|
| Lecture Drive / identité source | PARTIEL | Fichier sans `(1)` identifié, version demandée à confirmer |
| Parsing intégral du fichier réel par PyYAML | FAIL | ParserError ligne 15, reproduit |
| Diagnostic des doublons de la section planning | PASS | 28 clés cours, MappingNode, perte silencieuse avec chargement naïf |
| npm test | PASS | 149 tests, 0 échec |
| validate_course_structure.py | PASS | Navigation, relations et structure existantes valides |
| build_glossary.py --check | PASS | 487 termes, 8 cours, 59 modules |
| MkDocs strict | PASS | Code retour 0, 5,13 s ; pages parcours historiques signalées hors nav à titre informatif |
| Nouveaux tests Phase 2 | NON EXÉCUTÉ | Pas de parser/UI implémenté avant clarification de la source |
| Deno / PostgreSQL / navigateur | NON EXÉCUTÉ | Aucun changement serveur, SQL ou UI dans cette passe |
| git diff --check | PASS | Aucun changement de fichier suivi ; rapport local non suivi |

Python utilisé : environnement existant `../formation-tssr/.venv/bin/python`,
avec `PYTHONDONTWRITEBYTECODE=1`. Site temporaire hors dépôt :
`/tmp/tssr-phase2-baseline.sokNNP/site`.

## 7. Reprise après clarification

1. Confirmer le fichier d'entrée et obtenir un YAML valide sans perte.
2. Implémenter parser strict + tests permanents de dates, tri, doublons,
   périodes répétées, types MSP/stage/interruption/évaluation et ambiguïtés.
3. Construire le mapping revu, le modèle MSP et la nouvelle page sans modifier
   le contenu historique ; vérifier que l'ensemble des anciennes cibles demeure.
4. Tester les états dynamiques et le responsive 320/768/1024/1440, puis toutes
   les suites pertinentes et MkDocs strict. Aucun déploiement dans cette mission.

Seul bloqueur immédiat : format/identité de la source de vérité. Les mappings
probables peuvent rester explicitement non résolus et les liens MSP incomplets
peuvent rester sans cible ; ils ne justifient pas d'inventer des relations.
Fondation décrite mais pas déclarée livrée : **PHASE_2_FOUNDATION_BLOCKED**.

## 8. Reprise autorisée et livraison locale — 2026-09-27

### Règle permanente : Google Drive TSSR strictement READ ONLY

Google Drive est uniquement une source d'entrée. Aucune création, modification,
correction, réorganisation, suppression, copie distante, déplacement ou renommage
de fichier/dossier n'est autorisé dans le Drive TSSR, dans cette phase ou les suivantes.
Cette règle couvre aussi l'original `planning_formation_TSSR.yaml`.

Architecture retenue :

```text
Google Drive TSSR (READ ONLY)
  → lecture → snapshot/import local → analyse IA → proposition
  → validation humaine → Git/GitHub → site
```

Aucun flux retour vers Drive. Aucun accès Drive au build. Aucun jeton, compte
agent, connecteur d'écriture ou synchroniseur bidirectionnel ajouté.
`data/parcours-source.json` inscrit cette politique et la provenance du snapshot.

### Fidélité des 28 périodes

Source confirmée par l'utilisateur : fichier sans `(1)`, identifié en section 2.
Deux réparations uniquement dans `data/parcours_tssr.yaml` :

1. Citation YAML valide de la phrase de contexte commençant par « non renseigné ».
2. Remplacement des 28 préfixes `    cours:` par `  - cours:`.

Les autres octets sont conservés : intitulés, dates, formateurs, modalités,
contexte et ordre physique. La source distante n'a pas été corrigée.
Le test de fidélité refait ces deux substitutions à partir de la fixture brute
et exige l'égalité exacte avec le snapshot. La fixture de 6 127 octets n'est
pas une seconde source de build : elle sert uniquement à prouver cette réparation.

| Empreinte SHA-256 | Valeur |
|---|---|
| Original / fixture | `0b8ad75dbb9a7155d7990b512d8ddff2c607713503946b1523080fdb6a7b6324` |
| Snapshot corrigé | `caa3f80b55ed2dc39e1e1101131c4c9db3f6377d186ad1d461b22dc93772e02d` |

Le test des 28 périodes est une assertion de fidélité de cette version de
source, pas une limite produit : un autre test ajoute une 29e période et passe.
Un futur changement de source devra apporter une nouvelle provenance et un
diff explicitement revu, sans modifier Drive ni inventer des données.

### Architecture réellement implémentée

- `scripts/parcours.py` : chargement hors ligne, SafeLoader strict, clés
  dupliquées/tags actifs/ancres/alias refusés, taille bornée, schéma exact des
  périodes, dates valides, début ≤ fin, champs texte bornés. Identité dérivée
  du titre et des dates ; stable lors d'un simple changement d'ordre physique.
- `scripts/parcours_catalog.py` : catalogue des 9 index historiques, mapping
  conservateur et validation des preuves MSP. Les chemins restent canoniques ;
  pas de migration du glossaire ni de duplication de cours.
- `scripts/parcours_render.py` : rendu HTML échappé de deux bibliothèques au
  build, sans écrire dans les documents sources. Les liens sont validés dans
  `docs/`, avec résolution des chemins et refus des sorties par symlink.
- `scripts/mkdocs_hooks.py` : branchement du rendu, tri en mémoire des groupes
  Cours par première période associée. Tous les groupes, sous-pages et liens
  restent présents. Les cours non associés restent après les cours associés,
  dans leur ordre relatif précédent. Sécurité Markdown et glossaire conservés.
- `docs/parcours-tssr/index.md` : page dédiée au planning ; l'ancien
  `docs/parcours/` et les contributions du formulaire ne sont pas écrasés.
  Un avertissement de contexte est injecté uniquement au rendu des anciennes
  pages, avec lien vers le planning complet.
- `docs/assets/javascripts/parcours.js` : états calculés à la date civile
  Europe/Paris, bornes inclusives, au chargement/retour/navigation Material et
  périodiquement. Aucun statut stocké dans le snapshot ni storage navigateur.
- `docs/assets/stylesheets/parcours.css` : adaptation ciblée de la nouvelle
  timeline aux écrans étroits, sans modifier le design des cartes historiques.

La table des 28 périodes de la section 4 est désormais issue d'un snapshot
valide et testée. Répartition observée avec `parcours_catalog.model()` :

| Classe | Périodes | Décision |
|---|---:|---|
| MATCH_EXACT | 7 | Liens vers les cours existants, sans doublons |
| MATCH_PROBABLE | 4 | Deux équivalences à confirmer ; aucun lien deviné |
| MISSING | 11 | Aucun cours canonique dédié détecté ; pas de création automatique |
| MSP | 2 | Une MSP existante liée, une sans contenu intégré |
| NON_COURSE | 4 | Deux stages, interruption, évaluations |

### MSP distinctes des cours

`data/msp.json` porte deux identités MSP et des sections facultatives, des
ressources et relations explicites. Une relation de module peut préciser
`modulePath`, contrôlé comme appartenant au dossier du cours. Les relations
actuelles restent au niveau cours : aucun prérequis de module inventé.

La MSP systèmes clients réutilise son chemin historique et ses TP/révisions.
Trois relations cours sont appuyées par des citations présentes dans son
support : réseaux, Windows, Debian. Le validateur exige encore la présence
des citations et des documents concernés. Cela ne prétend pas constituer
une liste exhaustive des compétences/prérequis.

MSP services réseau est identifiée, mais ses relations et son contenu restent
à analyser et à faire valider. Aucun faux lien. La rubrique MSP de premier
niveau est ajoutée ; l'ancienne entrée sous Cours reste par compatibilité,
sans faire de cette activité un nouveau cours dupliqué.

### Préparation IA : portée exacte et limites de sécurité

`scripts/import_contract.py::prepare_analysis` est un contrat local pur,
sans réseau, RPC, écriture ou publication. Il valide les huit classifications
et exige la provenance A/B/C/D de chaque unité, sa source et son contenu.
Il produit une clé déterministe pour le couple fileId/empreinte du support.
Les questions Kahoot sont acceptées seulement pour KAHOOT_SOURCE, entre 1 et
20 par module (règle Phase 2B qui remplace la limite préparatoire), jamais vides ; aucun Kahoot réel n'a été créé.

Ce contrat n'est **pas** un agent, une classification IA exécutée, un journal
durable de déduplication ou un endpoint de change_request. Aucun modèle n'est
appelé. `requiresHumanReview=true` exprime un état préparatoire, pas un contrôle
d'autorisation serveur. Les champs d'autorité ne font pas partie de son entrée.

Avant de connecter un futur agent, il restera nécessaire de :

1. Construire un lecteur Drive limité au dossier confirmé et à des opérations
   de lecture, avec permissions effectivement read-only ; aucun outil d'écriture.
2. Créer un journal durable de versions/imports, de reprise et de déduplication.
3. Introduire une identité de proposition seule, hors vote et override, sans
   auto-approbation auteur ; ne pas réutiliser un compte administrateur/éditeur.
4. Convertir l'analyse revue en fichiers validés par le serveur et utiliser
   le cycle existant de change_request. Les nouveaux YAML/JSON ne sont pas
   automatiquement admis par le validateur éditorial historique.
5. Tester ces autorisations et toute la publication en recette avant production.

Le moteur génératif, l'analyse des autres supports et ces adaptations serveur
restent pour les phases suivantes ; aucune de ces capacités n'est annoncée
comme déjà opérationnelle.

### Manifeste local

Fichiers suivis modifiés (3) :

```text
docs/assets/javascripts/extra.js
mkdocs.yml
scripts/mkdocs_hooks.py
```

Fichiers créés (17, rapport compris) :

```text
PHASE_2_FOUNDATION_REVIEW.md
data/course-mapping.json
data/msp.json
data/parcours-source.json
data/parcours_tssr.yaml
docs/assets/javascripts/parcours.js
docs/assets/stylesheets/parcours.css
docs/msp/index.md
docs/parcours-tssr/index.md
scripts/import_contract.py
scripts/parcours.py
scripts/parcours_catalog.py
scripts/parcours_render.py
tests/fixtures/planning-drive-original.txt
tests/parcours.test.mjs
tests/test_import_contract.py
tests/test_parcours.py
```

Aucun fichier pédagogique préexistant, image, média, migration, Edge Function,
workflow, rôle ou secret modifié. Aucun fichier indexé, commit ou push.
Les nouvelles suites sont déjà découvertes par npm test et unittest discover
dans les trois workflows existants ; aucun workflow supplémentaire nécessaire.

### Résultats réellement exécutés

| Contrôle | Résultat | Preuve / portée |
|---|---|---|
| `npm test` | PASS | 153 tests, dont 4 nouveaux tests Parcours |
| `deno task test:edge` | PASS | 127 tests, régressions Phase 1 conservées |
| `deno task check:edge` | PASS | Trois Edge Functions typées, aucune déployée |
| `python -m unittest discover -s tests -p 'test_*.py'` | PASS | 53 tests, dont 12 Parcours et 4 contrat d'import |
| `python tests/maintenance_postgres.py` | PASS | 55 tests ; PostgreSQL 16.15 jetable, réseau none, sans ports ni montages hôte |
| `python scripts/validate_course_structure.py` | PASS | Structure, navigation et relations valides |
| `python scripts/build_glossary.py --check` | PASS | 487 termes, 8 cours, 59 modules ; aucun changement du glossaire |
| `mkdocs build --strict --site-dir /tmp/tssr-phase2-baseline.sokNNP/site` | PASS | Code retour 0, dernier build 6,02 s ; sortie hors dépôt |
| `git diff --check` | PASS | Aucun défaut d'espacement suivi |
| Navigateur Chrome local, Parcours et MSP | PASS | 320/768/1024/1440 px, aucun débordement horizontal ; cartes réellement stylées |
| Navigation Parcours → MSP → Parcours | PASS | Retour : 16 Passé, 12 À venir au 27/09/2026 ; pas de statut figé au build |
| Clavier / lien canonique / retour arrière | PASS | Tab atteint le lien suivant ; Entrée ouvre Microsoft 365 ; retour conserve cartes et états |

Python/MkDocs : environnement existant `../formation-tssr/.venv/bin/`, avec
`PYTHONDONTWRITEBYTECODE=1`. Deno 2.2.7 : binaire déjà présent dans le cache npm
local ; pas de dépendance installée dans le dépôt. Les tests PostgreSQL ont
créé puis supprimé leurs conteneurs isolés, sans cible de production.

Incidents de validation résolus/documentés :

- Le premier test de fixture d'extension partageait la liste de formateurs et
  produisait un alias YAML interdit : fixture corrigée, validateur non affaibli.
- Débordement initial mobile de 37 px (scrollWidth 357 pour viewport 320) :
  badge flex non adapté aux dates/types longs. Correctif CSS limité à
  `.tssr-planning`, test permanent ajouté, nouvelle mesure clientWidth =
  scrollWidth = 309 (320 moins la scrollbar). Pas de masquage par overflow.
- Prévisualisation locale : chargements partiels et erreurs GLightbox/
  document$ observés, également après retour arrière Chrome. Ces écrans
  incomplets ne servent pas de preuve finale. L'hypothèse de saturation du
  petit serveur de test a été contrôlée sans changer le dépôt : même build,
  serveur localhost HTTP/1.1 avec file de connexions 128 au port 41741.
  Contrôles réussis après cette adaptation : CSS calculé grid/inline-block,
  états corrects, navigation MSP, activation clavier d'un cours et retour
  arrière. Aucune erreur console du site sur ce dernier essai. Des warnings
  d'une extension Chrome sont séparés des erreurs du site. Cela ne constitue
  pas une mesure des performances de production.
- Aucun scan de vulnérabilités de dépendances ou audit WCAG exhaustif annoncé ;
  aucune dépendance changée et aucune mise en production effectuée.

### Décisions humaines restantes, non bloquantes pour la fondation

- Confirmer GNU/Linux administration ↔ Administration Debian GNU/Linux.
- Confirmer Services réseau Microsoft ↔ Services réseaux Microsoft.
- Analyser les supports MSP services réseau avant de fixer ses relations.
- Valider le diff local avant toute intégration Git ou publication.

Les correspondances probables restent visiblement non résolues. Les 11 périodes
sans cours dédié ne donnent pas lieu à du contenu ou des liens inventés.
Le rendu utilise les URLs en répertoires du projet actuel ; un futur changement
de `use_directory_urls` nécessiterait d'adapter et de retester les liens générés.
Les nouvelles pages index sont générées depuis les données, pas des espaces
de rédaction libre : leurs mises à jour doivent porter sur les sources de
données. Leur édition structurée via le formulaire et l'admission serveur de
ces sources restent à intégrer ; l'éditeur des cours existants n'est pas modifié.

Captures de contrôle conservées hors dépôt :
`/tmp/tssr-phase2-baseline.sokNNP/parcours-desktop.png` et
`/tmp/tssr-phase2-baseline.sokNNP/parcours-mobile.png`.

Verdict : **PHASE_2_FOUNDATION_READY** pour cette fondation locale uniquement.
Production inchangée. Drive inchangé. Automatisation IA réelle non activée.
