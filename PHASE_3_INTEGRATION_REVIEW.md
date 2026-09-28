# Phase 3C — revue d'intégration Plus-only

Date : 2026-09-28. Périmètre : revue, réalignement, tests, commit et PR ;
**aucune fusion ou activation en production**.

## Réalignement et préservation

Base historique : `04f35462e059ea27a3dfde6f695ae445acce823d`.
Nouveau main observé après fetch : `f5397d9a3c789e55cdb7a08027ac6707c53b21f5`.
Un seul commit ajouté : `docs: apply approved change #ab182519`.
Il ajoute deux lignes au module `docs/modules/03-microsoft-365-outils-collaboratifs/module-01-decouverte-de-microsoft-365.md`.
Aucun chevauchement avec les fichiers Phase 3 ; cette modification est conservée
sans appréciation ou correction pédagogique.

Les 26 fichiers locaux initiaux ont été inventoriés, archivés hors dépôt et
sauvegardés dans un stash explicite. Index initial vide. La branche sans commit
propre a été avancée par `git rebase origin/main`, puis le stash restauré sans
le supprimer. Vérification des 26 SHA-256 : tous identiques après restauration.
**Aucun conflit.** Aucun checkout d'une autre branche, aucun force push prévu.
Les artefacts privés Phase 3B n'ont pas été déplacés ni retraités.

## Architecture courante et frontières de confiance

```text
Drive READ ONLY → snapshot privé → extraction déterministe
  → paquet compact → session interactive Codex/ChatGPT Plus
  → résultat non fiable → validation déterministe → aperçu/diff privé
  → [future intégration distincte] proposition → humains → publication existante
```

- `scripts/ingest_plus.py` est l'entrée réelle : préparation/validation locales.
- `scripts/ingest_drive.py` refuse par défaut tout traitement et oriente vers
  cette entrée ; `--provider fake` est explicite pour les fixtures.
- Aucun choix OpenAI réel, aucun flag d'autorisation payante, aucune lecture de
  clé IA par les CLI. Une clé factice présente est ignorée dans les tests.
- Le fournisseur API historique reste dormant dans `ingestion/ai.py` et ses
  tests HTTP simulés ; aucune CLI ne l'instancie. Ce code n'est pas une fonction
  d'activation ni un fallback autorisé. Coût API du chemin courant : **0**.
- Pas de serveur autonome basé sur l'abonnement Plus. Le traitement du paquet
  nécessite une session interactive et reste limité par ses quotas.
- Drive n'expose que des méthodes de lecture ; aucune méthode d'écriture.
  Aucun accès Drive, OpenAI ou Supabase réel n'a été effectué en Phase 3C.
- Les sorties IA ne contrôlent ni cible, ni permissions, ni publication.
  Les sources sont référencées par empreinte et les cibles par le paquet privé.
- Provenance B/C obligatoire ; A/D générées refusées. Maximum vingt questions,
  pas de création Kahoot, aucun lien/PIN externe ajouté.
- `READY_FOR_HUMAN_REVIEW` et `submissionAllowed=false` ; le client futur de
  proposition n'est relié à aucune CLI et refuse les aperçus Plus courants.

## Revue du code et correction locale

Revue des frontières : fichiers Drive non fiables, extraction, sortie de modèle,
cache privé, Markdown, chemins, identité en base, Edge serveur et RPC existante.
Les protections de validation et de consensus Phase 1/2 sont conservées.

Défaut reproduit dans le runner historique à fournisseur factice : une unité
Markdown multiligne déclenchait `PlanningError` via le contrat mono-ligne Phase 2.
Le nouveau test échouait avant correction. Seule la copie de métadonnées passée
à `prepare_analysis` est maintenant normalisée ; unités, rendu et diff gardent
le Markdown original. Le test passe après correction, sans changement du
contrat Phase 2. Le chemin Plus utilisait déjà cette séparation.

Un test supplémentaire exerce les vraies fonctions `main()` de la CLI Plus,
avec fichiers synthétiques : prepare → résultat simulé → validate → replay.
Il impose des pièges réseau, fournisseur API et soumission ; contrôle l'identité
des aperçus au replay et l'absence de modification de la source/cible.
Les autres tests permanents couvrent delta local, cache, provenance, mauvaises
cibles, sorties actives, quiz >20, replays contradictoires et clés ignorées.

## Migration candidate et compatibilité

`supabase/migrations/20260928072234_agent_propose_only.sql` : **locale uniquement**.

- Colonnes additives : `actor_kind='HUMAN'`, `can_propose=false` par défaut.
  Aucun humain converti automatiquement, aucune suppression de données.
- Remplacement ciblé de la RPC existante `create_change_request`, signature et
  ACL service-only conservées ; pas de second système de propositions.
- AGENT : member, non-éditeur, sans override ; qualification DB opérateur sur
  une identité fraîche jamais utilisée. JWT/user_metadata ne confèrent aucun rôle.
- Seule action Edge `create` permise, Markdown create/update sous docs ; pas de
  vote, annulation, override, claim, publication ou administration.
- Les humains actifs éditeurs restent seuls validateurs. Une proposition AGENT
  est pending même avec un seul humain ; aucun vote auteur synthétique.
- Maintenance vérifiée en premier ; ordre des verrous gate → profil → demande.
  Empreinte SQL des fichiers, clé unique et verrou profil protègent la reprise
  et les créations concurrentes. Replay contradictoire rejeté.
- Comportement humain historique testé, y compris auteur humain unique et
  validation humaine finale d'une proposition AGENT.

### Ordre futur à qualifier, non exécuté

1. Recette isolée Supabase, sauvegarde et runbook d'activation approuvés.
2. Migration additive avant toute Edge utilisant le nouveau `requireProfile`.
   Son SELECT exige les nouvelles colonnes : déployer cette fonction sans le
   schéma casserait l'authentification éditoriale humaine.
3. Déploiement coordonné des consommateurs, notamment `change-requests` et
   `admin-users`. `publication-status` importe seulement les helpers client/body,
   pas `requireProfile` : aucun changement fonctionnel de son chemin n'est requis.
   Réinventorier ces dépendances lors de la mission d'activation.
4. Contrôle des humains/maintenance puis, uniquement sur autorisation séparée,
   création d'une identité AGENT neuve et gestion de session dédiée.

Rollback futur : rétablir les bundles Edge précédents tout en conservant les
colonnes additives ; ne pas supprimer à l'aveugle les données ou propositions
créées. La migration doit rester sous revue opérateur avant application.

## Validation locale après réalignement

Python 3.12 du projet, Deno 2.2.7, Node installé ; aucune dépendance ajoutée.
PostgreSQL 16.15 Docker : réseau none, aucun port, aucun montage du poste,
fixtures fictives seulement. Le test PDF utilise un PDF synthétique et Poppler.
Build et journaux hors dépôt, `PYTHONDONTWRITEBYTECODE=1`.

| Commande | Résultat |
| --- | --- |
| `npm test` | PASS — 156 tests |
| `deno task test:edge` | PASS — 136 tests |
| `deno task check:edge` | PASS — trois Edge Functions |
| `python -m unittest discover -s tests -p 'test_*.py'` | PASS — 97 tests |
| `python tests/maintenance_postgres.py` | PASS — 55 tests |
| `python tests/agent_postgres.py` | PASS — 6 tests |
| `python tests/ingestion_pdf.py` | PASS — 1 test avec Poppler |
| `python scripts/validate_course_structure.py` | PASS |
| `python scripts/build_glossary.py --check` | PASS — 487 termes, 8 cours, 59 modules |
| `mkdocs build --strict --site-dir REPERTOIRE_TEMPORAIRE_HORS_DEPOT` | PASS |
| `git diff --check` | PASS |
| Dry-run interactif fixture, replay et delta local | PASS — inclus dans les tests Plus |

La CI de PR exécute aussi SQL agent et extraction PDF réelle ; permissions
`contents: read`, checkout sans credentials persistants conservés. Aucun workflow
de déploiement modifié. Les résultats distants et le SHA testé doivent être lus
dans les checks de la PR : ce rapport préparé avant commit ne préjuge pas de leur
succès. Aucune fusion n'est autorisée par ce rapport.

## Manifeste du lot — 28 fichiers

Fichiers existants modifiés :

- `.env.example`
- `.github/workflows/validate-pr.yml`
- `supabase/functions/_shared/auth.ts`
- `supabase/functions/change-requests/index.ts`

Fichiers ajoutés :

- `PHASE_3_AI_INGESTION_REVIEW.md`
- `PHASE_3B_PLUS_ONLY_DRY_RUN_REVIEW.md`
- `PHASE_3_INTEGRATION_REVIEW.md`
- `data/ingestion-bindings.json`
- `prompts/ingestion-v1.json`
- `scripts/ingest_drive.py`
- `scripts/ingest_plus.py`
- `scripts/ingestion/__init__.py`
- `scripts/ingestion/ai.py`
- `scripts/ingestion/drive.py`
- `scripts/ingestion/extract.py`
- `scripts/ingestion/pipeline.py`
- `scripts/ingestion/plus.py`
- `scripts/ingestion/proposals.py`
- `scripts/ingestion/registry.py`
- `supabase/functions/_shared/agent-policy.ts`
- `supabase/functions/_shared/agent-policy_test.ts`
- `supabase/migrations/20260928072234_agent_propose_only.sql`
- `tests/agent_postgres.py`
- `tests/fixtures/ingestion/simple-course.json`
- `tests/fixtures/ingestion/multi-module-msp-tp.json`
- `tests/ingestion_pdf.py`
- `tests/test_ingestion.py`
- `tests/test_ingestion_plus.py`

Aucun fichier docs/, média pédagogique, snapshot réel, résultat privé, credential,
lockfile ou artefact temporaire prévu dans le commit. Les scans de motifs de
secrets et des identifiants/chemins du support privé n'ont détecté aucun problème
dans le lot ; cela ne constitue pas une preuve universelle d'absence de secrets.

## Limites assumées avant activation

- Revue humaine de la PR et recette Supabase/Edge à réaliser séparément.
- Pas de compte agent, de proposition réelle ni de test de publication distant.
- Automatisation Plus serveur absente volontairement ; pas de fallback API.
- Mapping humain requis ; aucune promotion automatique de MATCH_PROBABLE.
- Cache par segment : les changements de contexte sémantique transversal exigent
  une relecture complète, pas une confiance automatique dans les résultats repris.
- Politique de rétention, quota disque et protection des snapshots à définir
  avant usage continu ; répertoire privé dédié sous contrôle de l'opérateur.
- Poppler borné en durée/sortie mais pas sandboxé au niveau OS. Ingestion massive
  de fichiers hostiles à isoler davantage. Les lectures locales chargent leur
  entrée avant les limites de validation ; ce n'est pas un endpoint public.
- Droits sur les sources, qualité pédagogique et limites visuelles à valider.
- Aucun nouveau service, polling ou calendrier autonome activé.

Les skills de revue, sécurité, implémentation incrémentale et vérification ont
conduit à préserver les fichiers avant réalignement, reproduire le défaut avant
correction, tester les interfaces réelles et séparer intégration Git et activation.

Google Drive : INCHANGÉ. OpenAI API et clé : NON UTILISÉES. Coût API : 0.
Supabase production : INCHANGÉ. Agent production : NON CRÉÉ.
change_request réelle : AUCUNE. Kahoot externe : INCHANGÉ.
main : non modifié par ce lot tant que la PR reste non fusionnée.
