# Phase 3A — fondation ingestion IA

> Évolution Phase 3B (2026-09-28) : le point d'entrée courant est désormais
> scripts/ingest_plus.py, NO_API, paquet interactif Codex et sortie locale.
> scripts/ingest_drive.py ne permet plus --provider openai ni --allow-paid-calls ;
> son mode fake doit être explicite. Les instructions API ci-dessous documentent
> uniquement l'état historique Phase 3A, pas une activation autorisée.
> Aucun credential/prix API n'est requis dans l'architecture Plus-only.
>
> Ce rapport conserve les observations historiques de Phase 3A. Ses SHA,
> résultats et références API ne décrivent pas une activation courante.
> La décision permanente et la validation après réalignement figurent dans
> PHASE_3_INTEGRATION_REVIEW.md ; l'essai interactif est décrit dans
> PHASE_3B_PLUS_ONLY_DRY_RUN_REVIEW.md. Aucun chemin actuel n'autorise l'API.

Date : 2026-09-28. Verdict local : **PHASE_3_AI_FOUNDATION_READY**.

Ce verdict concerne une fondation locale testée, pas un agent activé, une qualité pédagogique mesurée avec un modèle réel ni une autorisation de mise en production.

## 1. Référence et périmètre

- Branche : `codex/phase3-ai-ingestion`.
- HEAD/base : `04f35462e059ea27a3dfde6f695ae445acce823d`.
- `git ls-remote origin refs/heads/main` confirme encore cette référence lors du contrôle final.
- Aucun commit, staging, push, merge, déploiement, compte agent réel ou proposition réelle.
- Aucun fichier pédagogique, planning local validé, association probable ou catalogue Phase 2 existant modifié.
- Aucun appel IA payant. Les preuves de génération utilisent FakeAIProvider.
- Les migrations ont été exécutées uniquement dans PostgreSQL Docker 16.15 isolé : réseau none, aucun port publié, aucun montage du poste.

## 2. Architecture

```text
Drive TSSR (GET / READ ONLY)
  → preuve d'ascendance sous la racine
  → snapshot privé + SHA-256
  → extraction déterministe avec positions
  → segments dédupliqués + contexte Phase 2 / association humaine
  → fournisseur IA configuré, budgets, cache
  → contrôles déterministes + aperçu JSON + diff Markdown
  → READY_FOR_REVIEW ou NEEDS_REVIEW / BUDGET_EXCEEDED
  → [activation future uniquement] POST change-requests action=create
  → AGENT auteur, humains seuls validateurs
  → circuit de publication existant
```

Aucune méthode Drive d'écriture. Aucun client GitHub dans le worker. Aucun second circuit de consensus ou de publication. Pas de Redis, vector DB, queue ou service supplémentaire : le registre est un fichier SQLite local de la bibliothèque standard Python.

## 3. Inventaire Drive observé

Inventaire de métadonnées en lecture seule du dossier TSSR, via le connecteur disponible. Aucun export de contenu réel utilisé pour les tests.

Racine autorisée : `1N73OtTF2TKxYUEO9X0_4NObnmEAugzZ1`.

520 éléments descendants : 149 dossiers et 371 fichiers. Le plus grand dossier observé contient 28 enfants.

| Format observé | Nombre |
| --- | ---: |
| PDF | 252 |
| PNG | 60 |
| Texte brut | 12 |
| Google Docs | 5 |
| DOCX | 3 |
| YAML | 1 |
| XLSX | 8 |
| CSV | 4 |
| Scripts shell | 3 |
| Autres binaires, exécutables, archives, paquet Debian | 23 |

Pas de PPTX ni Google Slides observé dans cet inventaire ; leur chemin d'extraction/export est préparé. Aucun nom, email de propriétaire ou contenu métier nécessaire au rapport n'est conservé ici.

Cet inventaire n'est pas un test de bout en bout du nouvel adaptateur OAuth. Celui-ci est testé avec réponses HTTP simulées, en particulier scopes, pagination et refus d'accès.

## 4. Lecteur Drive et sécurité

`scripts/ingestion/drive.py` :

- GoogleDriveReadOnly expose metadata, children, content ; uniquement HTTP GET.
- Le token doit porter exactement le scope `https://www.googleapis.com/auth/drive.readonly`, vérifié par tokeninfo. Un grant plus large est refusé.
- BoundedReader.authorize prouve l'ascendance actuelle jusqu'à TSSR avant lecture. IDs, chaînes de parents, profondeur et cycles vérifiés.
- Tous les raccourcis sont refusés, pas seulement ceux connus comme sortants.
- URLs arbitraires et IDs de chemin refusés ; aucune redirection HTTP suivie.
- Métadonnées avant/après lecture et checksum MD5 disponible contrôlés ; version instable refusée.
- Pagination de 100, au plus 10 000 éléments, profondeur 64, fichier 25 Mo, délai HTTP 30 s.
- SOURCE_MISSING n'est inféré qu'après un inventaire complet réussi ; aucune suppression de fichier Git n'en découle.
- Le scope readonly permet potentiellement de lire d'autres fichiers accessibles au titulaire du token : la restriction TSSR supplémentaire est donc réellement assurée dans BoundedReader, pas prétendue fournie par OAuth.

Le futur worker nécessite un grant readonly dédié géré hors Git. Aucune extraction de credentials du connecteur ni réutilisation de credentials de production n'a été réalisée.

## 5. Extraction et formats

`scripts/ingestion/extract.py`, version `tssr-extract-1` :

| Format | Traitement | Réserve |
| --- | --- | --- |
| TXT, Markdown | UTF-8 strict, positions de lignes | Snapshot original conservé ; pas de réécriture Drive |
| JSON, YAML | Validation syntaxique, parseurs existants | YAML avec ancres/alias refusé ; syntaxe invalide → revue |
| DOCX | ZIP/XML standard, texte du document | Images référencées, non interprétées ; revue si présentes |
| PPTX | ZIP/XML standard, ordre numérique des slides | Références d'images, pas de vision |
| PDF | Poppler pdftotext, pages | Toujours PDF_VISUAL_REVIEW_REQUIRED |
| Google Docs | Export readonly en texte | Mise en page/images non conservées par cet export |
| Google Slides | Export readonly PDF puis Poppler | Revue visuelle obligatoire |
| Images | Référence de source | Pas d'OCR/vision automatique |
| XLSX, CSV, archives, exécutables, scripts | Non interprétés | NEEDS_REVIEW ; jamais exécutés |

Office : maximum 2 000 entrées / 64 Mo décompressés, refus des doublons et traversées ZIP, DTD/entités XML refusées. PDF : processus borné à 30 s, sortie texte contrôlée après extraction à 2 Mo. Limite globale de texte : 500 000 caractères, sans troncature silencieuse.

Le sous-processus Poppler n'est pas un bac à sable système : un traitement futur de PDF hostiles à grande échelle devra ajouter une isolation/limite mémoire et disque. Les tests actuels utilisent un PDF synthétique, pas les PDF métier.

L'original planning_formation_TSSR.yaml et son snapshot Phase 2 approuvé restent inchangés. Le lecteur générique ne corrige pas silencieusement un YAML invalide.

## 6. Registre, reprise et idempotence

`scripts/ingestion/registry.py` :

- Répertoire dédié hors dépôt, droits 0700 ; snapshots et SQLite 0600.
- Refus des répertoires non vides non marqués et des symlinks sensibles.
- Sources par fileId ; import par hash(fileId, SHA-256 du contenu), jamais par nom.
- Métadonnées : parent, nom, chemin logique, MIME, taille disponible, modifiedTime/version/checksums disponibles ; date d'import et version du parseur dans l'état.
- Un renommage à contenu identique réutilise l'import et les résultats IA.
- Une nouvelle empreinte crée un nouvel import ; les segments identiques réutilisent le cache.
- États enregistrés : DISCOVERED, SNAPSHOTTED, EXTRACTED, CLASSIFIED, GENERATED, VALIDATED, READY_FOR_REVIEW, PROPOSED ; erreurs de traitement routées vers NEEDS_REVIEW ou BUDGET_EXCEEDED. FAILED est réservé dans le registre. SOURCE_MISSING est une annotation indépendante.
- Verrou exclusif local pendant une analyse/soumission pour empêcher la double dépense dans le même registre.
- Une livraison de proposition confirmée enregistre son reçu ; le replay enregistré ne refait pas le POST.
- Une livraison incertaine conserve la même clé et le même payload. La base vérifie aussi l'idempotence et refuse un contenu contradictoire.

Le registre ne doit pas être dupliqué pour lancer deux workers autonomes sur la même source. Politique d'expiration, quotas de disque, purge et sauvegarde des snapshots privés restent à définir avant exploitation continue. Les logs techniques ne contiennent pas les prompts ni les réponses ; les aperçus privés contiennent volontairement le contenu à relire.

## 7. IA, économie et limites

`scripts/ingestion/ai.py` et `prompts/ingestion-v1.json` :

- FakeAIProvider : déterministe, sans réseau, aucune prétention de qualité pédagogique.
- OpenAIProvider : API officielle Responses, POST /v1/responses, JSON Schema strict, store=false, aucun outil accordé au modèle.
- Ancien prototype : les appels réels exigeaient une autorisation explicite. Ces options ont été retirées de la CLI en Phase 3B ; le fournisseur reste dormant et n'est pas une procédure d'activation.
- FAST : classification/extraction structurée/revue ; STANDARD : rédaction, MSP, exercices, révisions, questions.
- COMPLEX uniquement par motif explicite autorisé ; aucune escalade automatique.
- Aucun modèle réel/prix figé. Modèles et tarifs obligatoires via configuration ; comparaison qualité/prix à conduire avant activation.
- Prompts courts centralisés version tssr-prompts-1, sources traitées comme données non fiables et non comme instructions.
- Segments ≤ 6 000 octets, déduplication exacte avec conservation des positions.
- Classification sur le premier segment seulement ; la génération travaille segment par segment. C'est une limite de qualité explicitement assumée, pas une compréhension certifiée du document entier.
- Les étapes extract/review sont disponibles mais ne constituent pas une seconde passe LLM automatique dans le runner actuel.

Valeurs par défaut :

| Protection | Valeur |
| --- | ---: |
| Entrée estimée par appel | 12 000 tokens maximum |
| Sortie demandée | 2 000 tokens maximum |
| Total réservé par support | 150 000 tokens |
| Appels par support | 30 |
| Coût réservé par support | 0,50 USD |
| Retry | 1, configurable jusqu'à 2 |
| Timeout IA | 45 s |

L'estimation préalable utilise une borne conservatrice en octets UTF-8, pas une mesure de tokenizer annoncée comme exacte. Réservation durable avant chaque appel, y compris retry : timeout/crash ne libère pas artificiellement un budget potentiellement consommé. Les tokens réels et le coût calculé avec les tarifs configurés sont journalisés après réponse.

Cache : fournisseur, modèle, étape, prompts/schéma, contexte, segment, limite de sortie. Les hits ne consomment pas de budget IA. Aucun tarif réellement facturé ni benchmark économique n'est revendiqué.

## 8. Association, pédagogie et provenance

`scripts/ingestion/pipeline.py` réutilise import_contract, parcours_catalog, parcours, kahoot_catalog et markdown_security.

Les associations de `data/ingestion-bindings.json` doivent être explicitement humanValidated. Le fichier livré est vide : aucun rattachement réel n'est inventé. Les indices Phase 2 restent des indices ; MATCH_PROBABLE ne devient pas validé. Une contradiction IA/association humaine impose une revue.

- A : extraction originale et positions, séparées dans originalEvidence.
- B : reformulation générée.
- C : complément explicitement identifié.
- D : refusé tant qu'une preuve externe vérifiée n'existe pas.
- Les unités générées doivent citer un segment réellement fourni ; A est interdit dans les sorties du modèle.
- MSP reste un type distinct ; le prompt demande situations, missions, ressources, livrables et critères justifiés. Pas de relations de cours inventées depuis un titre.

La qualité sémantique et l'exactitude des compléments C requièrent une revue humaine. Un hash de source prouve une référence disponible, pas l'exactitude de toutes les affirmations.

Périmètre du ciblage : un support lié à une cible explicite. La fixture multi-module prouve plusieurs supports ciblant différents modules d'un même cours. Le découpage automatique d'un unique support transversal vers plusieurs modules n'est pas revendiqué ; il nécessite une décision de mapping explicite.

## 9. Diff et Kahoot

- Aucun fichier docs n'est écrit par la CLI.
- Aperçu privé JSON : source, contexte/confiance, catégorie, unités/provenance/positions, questions, avertissements, métriques, fichiers, base Git et diff unifié.
- Contenu humain hors bloc TSSR-SOURCE préservé. Une nouvelle version remplace uniquement le bloc de cette source dans le diff proposé.
- Cible locale modifiée refusée ; chemins docs/*.md explicites, pas de rename/delete automatique.
- Markdown/attributs actifs, HTML brut du modèle, chemins inexistants/sortants, références Drive générées, motifs de secrets et PIN refusés.
- Les liens HTTPS sont vérifiés syntaxiquement ; leur existence distante et la validité sémantique ne sont pas certifiées.

Kahoot : 1 à 20 questions, 2 à 4 réponses, bonne réponse, explication, source et provenance. Pas de remplissage jusqu'à 20, pas de quiz vide. Utilisation du marqueur canonique Phase 2, cours/module existants requis ; si un module possède déjà un quiz, revue humaine au lieu d'écrasement. URL externe null, disponibilité solo/live false. Aucune création Kahoot distante.

## 10. AGENT propose-only et consensus

Migration candidate locale : `supabase/migrations/20260928072234_agent_propose_only.sql`.

- profiles.actor_kind = HUMAN par défaut ; can_propose = false.
- AGENT obligatoirement member, can_edit=false, can_override_validation=false.
- Qualification réservée à l'opérateur DB sur une identité fraîche et jamais utilisée ; ni conversion d'un compte humain ayant participé, ni création depuis un champ libre JWT.
- requireProfile lit l'autorité en base. Toutes les actions humaines restent interdites à AGENT ; seule action create est autorisée avec les bons droits.
- Edge limite AGENT à content_change, création/modification Markdown sous docs, aucun binaire/rename/delete.
- Création par le RPC existant, service-only. Les humains seuls sont required_approvers.
- Une proposition AGENT commence pending même s'il reste un seul humain ; aucun vote auteur ajouté.
- Vote, override, publication/claim, administration, annulation directe : refusés à l'agent.
- Même guard de maintenance et même publication existante, sans nouvel accès GitHub.
- SQL calcule sa propre empreinte des fichiers ; verrou gate → profil → demande/fichiers, index unique auteur/clé ; deux créations concurrentes identiques produisent une demande unique.
- Le retour d'un replay agent déjà approuvé ne déclenche pas de publication depuis submit.

`scripts/ingestion/proposals.py` prépare uniquement POST change-requests/action=create avec session AGENT, sans service-role key. Cet adaptateur n'est pas branché dans la CLI et requiert enabled=True. Aucun POST réel n'a été émis.

### Ordre futur, non exécuté

La migration additive doit précéder le déploiement des consommateurs du nouveau auth.ts : les anciennes colonnes ne suffisent pas au nouveau SELECT. Inventorier tous les imports et coordonner le déploiement lors d'une mission distincte. Ne pas déduire de la réussite des tests locaux qu'une mise en production partielle serait sûre.

La création/qualification d'une identité AGENT neuve, sa gestion de session et la qualification de recette Supabase restent des étapes d'activation séparées.

## 11. Manifestes des fichiers

Fichiers suivis modifiés :

- .env.example
- .github/workflows/validate-pr.yml
- supabase/functions/_shared/auth.ts
- supabase/functions/change-requests/index.ts

Nouveaux fichiers :

- PHASE_3_AI_INGESTION_REVIEW.md
- data/ingestion-bindings.json
- prompts/ingestion-v1.json
- scripts/ingest_drive.py
- scripts/ingestion/__init__.py
- scripts/ingestion/drive.py
- scripts/ingestion/extract.py
- scripts/ingestion/registry.py
- scripts/ingestion/ai.py
- scripts/ingestion/pipeline.py
- scripts/ingestion/proposals.py
- supabase/functions/_shared/agent-policy.ts
- supabase/functions/_shared/agent-policy_test.ts
- supabase/migrations/20260928072234_agent_propose_only.sql
- tests/agent_postgres.py
- tests/fixtures/ingestion/simple-course.json
- tests/fixtures/ingestion/multi-module-msp-tp.json
- tests/ingestion_pdf.py
- tests/test_ingestion.py

La CI de PR est complétée pour SQL AGENT et extraction PDF réelle. Permissions contents:read et checkout sans credentials persistants conservés. Aucun workflow de production modifié. Pas de changement de lockfile ou de dépendance Python/Node ; Poppler est installé dans le job de test PDF.

## 12. Validation locale exécutée

| Commande/suite | Résultat |
| --- | --- |
| npm test | PASS — 156 |
| deno task test:edge | PASS — 136 |
| deno task check:edge | PASS — trois Edge Functions |
| Python unittest discover tests/test_*.py | PASS — 87, dont 27 ingestion |
| Python tests/maintenance_postgres.py | PASS — 55 |
| Python tests/agent_postgres.py | PASS — 6 |
| Python tests/ingestion_pdf.py avec Poppler réel | PASS — 1 |
| Python scripts/validate_course_structure.py | PASS |
| Python scripts/build_glossary.py --check | PASS — 487 termes, 8 cours, 59 modules |
| mkdocs build --strict, sortie hors dépôt | PASS |
| CLI fixture multi-module/MSP/TP, première exécution | PASS — quatre READY_FOR_REVIEW, zéro soumission |
| Même CLI, même registre, seconde exécution | PASS — 15 cache hits, aucun nouvel appel fournisseur |
| git diff --check | PASS |

Python 3.12 du projet, avec PYTHONDONTWRITEBYTECODE=1. Deno 2.2.7. PostgreSQL 16.15. Les tests SQL ne se connectent pas à Supabase production. Les fixtures incluent source ambiguë, version modifiée, réimport, source externe/raccourci, traversée, budgets/retry, source inventée, provenance A/D interdite, quiz >20/vide, extraction incomplète.

Logs et dry-run conservés hors dépôt. Aucun chemin privé du poste n'est nécessaire à la reproduction.

Rejouer avec un Python contenant les dépendances du dépôt :

```sh
npm test
deno task test:edge
deno task check:edge
PYTHONDONTWRITEBYTECODE=1 python -m unittest discover -s tests -p 'test_*.py'
PYTHONDONTWRITEBYTECODE=1 python tests/maintenance_postgres.py
PYTHONDONTWRITEBYTECODE=1 python tests/agent_postgres.py
PYTHONDONTWRITEBYTECODE=1 python tests/ingestion_pdf.py
PYTHONDONTWRITEBYTECODE=1 python scripts/validate_course_structure.py
PYTHONDONTWRITEBYTECODE=1 python scripts/build_glossary.py --check
# Choisir un répertoire temporaire de build hors dépôt.
mkdocs build --strict --site-dir /tmp/tssr-phase3-review-site
git diff --check
```

Pour rejouer la CLI, créer un répertoire temporaire dédié vide hors dépôt puis :
`python scripts/ingest_drive.py --fixture tests/fixtures/ingestion/multi-module-msp-tp.json --provider fake --dry-run --state-dir CHEMIN_DEDIE`.
Aucun flag d'envoi ni d'autorisation d'appel payant n'existe.

## 13. Limites et mise en service ultérieure

- Pas de daemon, polling permanent, scheduling, refresh OAuth ou activation de compte dans cette mission.
- Formats non textuels/visuels : revue explicite. Les 252 PDF réels n'ont pas été ingérés ni comparés visuellement.
- Sélection économique finale des modèles et évaluation pédagogique sur corpus consentis : NON EXÉCUTÉES.
- Test réseau réel OpenAI et proposition agent Supabase de bout en bout : NON EXÉCUTÉS.
- CI distante sur ce diff : NON EXÉCUTÉE, aucun push.
- Le contrôle anti-secret est conservateur, non une preuve générale d'absence de données personnelles. Avant appel réel, autoriser explicitement l'envoi des supports sélectionnés au fournisseur.
- Les snapshots privés ont besoin d'une politique de rétention et d'une protection disque adaptée.
- Un même support déjà proposé ne se transforme pas silencieusement en seconde proposition sous la même clé ; une révision humaine/modification de cible exige une procédure explicite.
- Relations et sections pédagogiques complexes non inventées ; les rattachements probables Phase 2 restent à valider.
- La relecture des diffs, la recette Supabase isolée et un plan de déploiement coordonné restent requis avant toute production.

Configuration courante : aucune variable API IA. L'adaptateur Drive facultatif accepte seulement GOOGLE_DRIVE_ACCESS_TOKEN readonly ; l'entrée interactive utilise les fichiers locaux issus du connecteur. Les noms SUPABASE_URL/SUPABASE_PUBLISHABLE_KEY et TSSR_AGENT_SESSION concernent un adaptateur futur non branché. Le worker n'a besoin ni de token GitHub ni de clé service_role. .env.example contient seulement noms vides et commentaires.

## 14. Références et décision finale

Sources officielles utilisées pour les interfaces :

- https://developers.google.com/workspace/drive/api/guides/api-specific-auth
- https://developers.google.com/workspace/drive/api/reference/rest/v3/files/list
- https://developers.google.com/workspace/drive/api/guides/manage-downloads
- https://developers.openai.com/api/docs/guides/structured-outputs
- https://developers.openai.com/api/docs/pricing
- https://supabase.com/docs/guides/database/functions

Les skills d'implémentation incrémentale, sécurité et validation ont conduit à séparer le lecteur, le registre, l'IA et la soumission, à conserver les tests sans appels payants et à démontrer les permissions en PostgreSQL isolé. Aucun verdict de qualité pédagogique réelle n'est déduit des mocks.

**PHASE_3_AI_FOUNDATION_READY — local seulement.**

Google Drive : INCHANGÉ. Supabase production : INCHANGÉ. Kahoot externe : INCHANGÉ. main : INCHANGÉ. Agent production : NON CRÉÉ. Appels IA payants de test : AUCUN. Contenu pédagogique : INCHANGÉ. Aucun commit/push/merge/déploiement.
