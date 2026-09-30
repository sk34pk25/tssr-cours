# Phase 3E — filtrage des credentials AGENT et recette complète locale

Rapport finalisé le 30 septembre 2026. **PHASE_3_AGENT_STAGING_READY**.
Résultat du correctif : **fixed**, localement uniquement. Ce verdict ne vaut
ni activation production, ni qualification bout-en-bout Supabase hébergé.

## 1. État initial et périmètre

Checkout : `formation-tssr-technical-integration`, branche
`codex/phase3-ai-ingestion`, HEAD `5daec10052c281926a66318a4db0162f3561c945`.
La recette Phase 3D avait démontré une réponse HTTP 201 et un appel au RPC de
création pour un faux token reconnaissable envoyé directement par un AGENT.
Le filtre Python seul ne protégeait donc pas la frontière Edge.

Le test rouge original a été conservé, réexécuté avant correction (échec), puis
exécuté après correction (succès). Aucun skip/xfail ajouté. Les ajouts de recette
Phase 3D préexistants ont été conservés ; aucun redémarrage depuis zéro.

## 2. Correction et frontière de confiance

`supabase/functions/change-requests/index.ts:submit` détermine l'identité AGENT
à partir du profil chargé côté serveur, jamais d'un champ d'identité fourni
par le client. Pour cette identité :

1. Refuser les fichiers déclarés Base64 avant le scan ; les binaires restent
   interdits, aucune analyse arbitraire de leur contenu n'est ajoutée.
2. Appeler `assertNoCredentials(body)` sur le payload JSON complet, avant
   `trustedFiles`, les lectures Git et le RPC de création. Titre, description,
   chemins, références et métadonnées imbriquées sont couverts, même si des
   métadonnées seraient ensuite supprimées par `agentSummary`.
3. Conserver les validations existantes de chemin, Markdown, permissions,
   provenance et fingerprint.
4. Scanner aussi les fichiers fiables retournés par `trustedFiles`, notamment
   `old_content` copié depuis Git, avant toute persistance.
5. Seulement ensuite appeler `create_change_request`.

Les refus de credentials retournent HTTP 400 et une erreur constante sans
extrait du secret, sans log de sa valeur. Les tests vérifient l'absence d'appel
au RPC de création et de publication. Le seul RPC permis avant ce refus dans
le harness HTTP est la lecture `service_collaboration_state`.

Les autres entrées cours/navigation requièrent toujours les permissions
humaines ; elles ne constituent pas un chemin alternatif AGENT. Les votes,
override, administration et publication ne sont pas ouverts aux AGENT.

## 3. Politique commune et compatibilité

Source unique des motifs et placeholders :
`supabase/functions/_shared/credential-policy.json`.
Consommateurs : `credentials.ts:containsCredential/assertNoCredentials` et
`scripts/ingestion/credentials.py:contains_credential`, appelé par
`scripts/ingestion/pipeline.py:safe_text`.

Reconnaissance ciblée : tokens typés, clés API, en-têtes de clé privée, forme
JWT, affectations password/API/token/session, Authorization Bearer/Basic,
options CLI sensibles et mot de passe dans URI. Normalisation NFKC et deux
passes bornées de décodage d'entités HTML/échappements ASCII percent-encoded.
Aucune exécution, aucun décodage de binaire, aucun réseau dans le validateur.
Parcours JSON itératif et borne de complexité ; pas de récursion arbitraire.

Les simples mots « password », « passwd » ou « bearer token » ne suffisent pas
à rejeter une leçon. Les placeholders explicites et valeurs expurgées restent
acceptés ; leur exception ne neutralise pas un token reconnaissable ailleurs.
Un correctif de faux positif pendant le développement a limité la synthèse
d'affectations JSON aux noms de champs sensibles : un exemple `password=""`
dans du Markdown ne doit pas devenir un secret à cause de l'échappement JSON.

**Décision humaine explicite : filtre Edge AGENT-only.** Étendre ce filtre à
tous les cours humains changerait leur contrat de soumission et nécessiterait
une qualification de faux positifs dédiée. La mission autorise ce périmètre
minimal. Un test HTTP humain conserve l'acceptation d'un exemple de mot de
passe pédagogique ; les validateurs de sécurité existants restent actifs.
Ce choix ne prétend pas protéger les soumissions humaines par ce nouveau filtre.

## 4. Tests et preuves

Les 24 cas partagés de `tests/fixtures/credentials.json` comprennent 15 refus
et 9 contrôles légitimes. Ils traversent à la fois le vrai handler TypeScript
et `safe_text` Python. Tous les marqueurs sont synthétiques, aucune clé réelle.

`agent-staging-http_test.ts` contient 11 tests : création/update Markdown sûrs,
identité serveur, interdictions AGENT, administration refusée, maintenance,
replay approved sans publication, provenance, test rouge conservé, matrice
de credentials, autres champs/copie Git et compatibilité humaine. Auth,
PostgREST et GitHub sont des transports simulés ; les handlers et validateurs
applicatifs sont réels. Deno n'a pas de permission réseau pour cette suite.

PostgreSQL réel mesuré : **16.15**, image postgres:16, conteneurs jetables sans
réseau, port publié ni montage hôte. Données exclusivement synthétiques ; Auth
SQL est simulé, migrations applicatives réelles. Les suites ont été exécutées
séquentiellement et complètement. Aucun conteneur de test ne reste actif au
contrôle final ; aucun processus tiers tué ni réglage global modifié.

Les 10 tests AGENT couvrent conservation des lignes historiques/defaults
HUMAN, identité neuve, moindre privilège, impossibilité de vote/override/claim,
absence de vote implicite, consensus des trois humains requis, override humain
sans votes fabriqués, création humaine existante, maintenance fermée,
idempotence, payload contradictoire et deux propositions simultanées.
Les 55 tests maintenance couvrent aussi les verrous, snapshots/concurrence,
permissions, replay, publication guardée et override administratif.

### Résultats réellement exécutés

| Commande logique | Résultat | Preuve |
| --- | --- | --- |
| `npm test` | PASS | 156 tests, 0 échec, 0 skip |
| `deno task test:edge` | PASS | 147 tests, 0 échec ; 11 HTTP AGENT inclus |
| `deno task check:edge` | PASS | Trois entrées Edge vérifiées |
| `python -m unittest discover -s tests -p 'test_*.py'` | PASS | 98 tests |
| `python tests/maintenance_postgres.py` | PASS | 55 tests, suite complète en 181,049 s |
| `python tests/agent_postgres.py` | PASS | 10 tests, suite complète en 111,208 s |
| `python tests/ingestion_pdf.py` | PASS | 1 test ; vrai Poppler, PDF synthétique |
| `python scripts/validate_course_structure.py` | PASS | Structure/navigation/relations valides |
| `python scripts/build_glossary.py --check` | PASS | 487 termes, 8 cours, 59 modules |
| `python -m mkdocs build --strict --site-dir <temp>/site-3e` | PASS | Exit 0, construction en 5,23 s ; aucun warning/error |
| `git diff --check` | PASS | Diff suivi sans erreur d'espacement |

Runtimes utilisés, sans installation nouvelle :

- Python : `/Users/skala/Documents/ChatGPT/TSSR MKDOCS/formation-tssr/.venv/bin/python`, avec `PYTHONDONTWRITEBYTECODE=1`.
- Deno : `/Users/skala/.npm/_npx/06255b976d8b3cf8/node_modules/deno-bin/bin/deno` (2.2.7), ajouté au PATH de la commande uniquement.
- PDF : `PDFTOTEXT_BIN=/Users/skala/.cache/codex-runtimes/codex-primary-runtime/dependencies/native/poppler/poppler/bin/pdftotext`.
- Le site de contrôle et les logs sont hors dépôt, dans le répertoire temporaire de validation ; aucun artefact généré ajouté au staging.

## 5. Manifeste pour revue humaine

Fichiers applicatifs modifiés/créés par Phase 3E :

- `scripts/ingestion/pipeline.py` — consommateur de la politique partagée.
- `scripts/ingestion/credentials.py` — reconnaissance Python.
- `supabase/functions/change-requests/index.ts` — frontière serveur AGENT.
- `supabase/functions/_shared/credential-policy.json` — politique commune.
- `supabase/functions/_shared/credentials.ts` — reconnaissance et parcours JSON.

Tests du lot local Phase 3D/3E :

- `tests/agent_postgres.py` — extensions SQL Phase 3D conservées, maintenant validées.
- `supabase/functions/_shared/agent-staging-http_test.ts` — recette HTTP et régressions Phase 3E.
- `tests/fixtures/credentials.json` — matrice synthétique commune.
- `tests/test_credentials.py` — frontière Python.

Documents : mise à jour additive de `PHASE_3D_AGENT_STAGING_REVIEW.md` et
création du présent rapport. `CODEX_INGESTION_SESSION.md` et
`PHASE_3_AGENT_CUTOVER_RUNBOOK.md` étaient déjà non suivis et sont conservés
sans modification. Pas de cours, média, navigation, migration, workflow ou
`publication-status` modifié. `git diff --stat` seul n'inclut pas les fichiers
non suivis : ce manifeste fait foi pour leur revue, pas pour un staging autorisé.

## 6. Revue et limites

Les skills de correction de vulnérabilité, sécurité, implémentation incrémentale
et vérification ont guidé la reproduction rouge/verte, le contrôle des copies
de données et les vérifications de compatibilité. La revue déléguée n'a pas
été disponible (quota) ; une seconde passe de revue par le même agent a été
réalisée. Ce n'est pas une revue indépendante ; la revue humaine du diff reste
nécessaire avant intégration Git.

Limites assumées : la reconnaissance de motifs n'est pas un détecteur universel
de secrets. Un secret sans forme reconnaissable, chiffré ou arbitrairement
obfusqué n'est pas garanti détectable. La validation humaine et la minimisation
des sources restent obligatoires. L'identité service applicative et l'opérateur
DB restent des frontières de confiance ; l'agent final n'obtient pas leurs clés.

Cette recette ne remplace pas un bout-en-bout GoTrue → PostgREST → Edge déployée
→ GitHub, ni la qualification d'une session réelle/rotation/révocation. Aucun
compte ou proposition réelle n'a été créé. Le runbook reste NON EXÉCUTÉ ; sa
mention du blocage Phase 3D est historique, remplacée localement par ce rapport,
pas par une autorisation de cutover automatique.

## 7. Verdict et frontières finales

**PHASE_3_AGENT_STAGING_READY** : les deux blocages locaux Phase 3D sont levés
(filtrage serveur et suites PostgreSQL intégrales). Aucun bloqueur local
supplémentaire découvert dans le périmètre testé. Diff prêt pour revue humaine,
pas pour publication automatique.

- Google Drive : inchangé, READ ONLY ; aucun accès requis ici.
- OpenAI API : non utilisée ; coût API : 0.
- Kahoot externe : inchangé.
- Supabase production : inchangé par cette mission ; aucun accès nécessaire.
- Migration AGENT production : non appliquée par cette mission.
- Edge Phase 3 production : non déployées ; publication-status intacte.
- Compte AGENT production : non créé ; proposition AGENT réelle : aucune.
- Aucun staging, commit, push, merge, fetch ou déploiement Phase 3E.
- Main inchangé par cette mission ; l'état distant n'est pas ré-audité ici.

## 8. Revue et intégration Phase 3F — 30 septembre 2026

Autorisation distincte : intégrer les sources/tests/documents Phase 3D/3E,
pousser `codex/phase3-ai-ingestion`, créer une PR vers main et vérifier sa CI,
sans fusion ni activation de production. Les déclarations de la section 7
décrivent la mission Phase 3E terminée, pas cette nouvelle autorisation Git.

Fetch et contrôle GitHub : main à `22dbc42e6d7de165acc6a9a18e6881ed982be014`.
Le seul commit au-dessus de l'ancien HEAD est le merge de PR #8 ; les arbres
Git sont identiques. Réalignement par fast-forward uniquement, sans rebase,
sans commit de merge ni conflit. Les 13 fichiers locaux ont été comparés par
empreinte avant/après : contenu strictement conservé. Staging initial vide.

Revue finale des chemins, sources, tests et rapports : aucun contenu de cours,
support Drive réel, snapshot privé, PDF, capture, log ou secret réel identifié
dans le lot. Les canaries et profils des tests sont synthétiques. Le scan de
motifs de credentials à forte confiance ne rapporte aucun candidat dans les
13 fichiers ; ce scan complète la revue, sans prouver l'absence universelle
de secrets arbitraires. Aucun changement de dépendance ou de workflow.

Deux documents de préparation reçoivent une précision datée : recette locale
verte ne signifie pas backend déployé et n'autorise pas une soumission réelle.
Les rapports historiques restent conservés. Le manifeste candidat contient
exactement les neuf fichiers source/test de la section 5 et les quatre documents
`CODEX_INGESTION_SESSION.md`, `PHASE_3_AGENT_CUTOVER_RUNBOOK.md`,
`PHASE_3D_AGENT_STAGING_REVIEW.md`, `PHASE_3E_AGENT_SECURITY_FIX_REVIEW.md`.

Toutes les commandes de la matrice ont été **réexécutées après réalignement** :

| Suite Phase 3F | Résultat |
| --- | --- |
| npm test | PASS — 156 tests |
| Deno test:edge | PASS — 147 tests |
| Deno check:edge | PASS — trois entrées |
| Python unittest discover | PASS — 98 tests |
| PostgreSQL maintenance | PASS — 55 tests, 108,702 s |
| PostgreSQL AGENT | PASS — 10 tests, 19,576 s |
| PDF synthétique / Poppler | PASS — 1 test |
| Validation structure | PASS |
| Glossaire --check | PASS — 487 termes, 8 cours, 59 modules |
| MkDocs strict | PASS — 5,26 s, sortie hors dépôt |
| git diff --check | PASS |

Les deux suites PostgreSQL 16.15 ont tourné séquentiellement avec isolation
réseau/ports/montages vérifiée par le harness. Aucun conteneur ne reste actif.
Les tests n'ont ajouté aucun fichier généré au lot. Les logs de cette mission
sont temporaires hors dépôt et ne sont pas intégrés au commit.

Ce constat est pré-commit : le SHA final, l'URL de la PR et les résultats CI
seront rapportés dans la PR et le compte rendu de livraison, sans anticiper
leur succès ici. Aucun déploiement, migration ou appel Supabase production ;
aucun compte/proposition AGENT réel, accès Drive ou Kahoot ni API OpenAI.
