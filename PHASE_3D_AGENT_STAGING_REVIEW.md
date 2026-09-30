# Phase 3D — merge et recette isolée AGENT propose-only

Date : 2026-09-28. Verdict : **PHASE_3_AGENT_STAGING_BLOCKED — pas d'activation AGENT production**.

## 1. Périmètre et livraison Git

Précontrôles distants observés avant fusion : PR #8 ouverte/non fusionnée,
head `5daec10052c281926a66318a4db0162f3561c945`, base main
`f5397d9a3c789e55cdb7a08027ac6707c53b21f5`, un commit, 28 fichiers,
mergeable=true, état clean, manifeste attendu, aucun check encore en cours.
Revue du diff : aucun cours, secret réel ou artefact privé identifié dans les
28 fichiers. CI `Validate pull requests` completed/success, run 36456297686.

Fusion normale uniquement de [PR #8](https://github.com/sk34pk25/tssr-cours/pull/8),
avec comparaison atomique du head attendu (`--match-head-commit`), sans bypass,
force-push, squash ni suppression de branche. Fusion à 2026-09-28T17:20:50Z.

**Merge SHA et nouveau main : `22dbc42e6d7de165acc6a9a18e6881ed982be014`.**
Le checkout de recette reste `codex/phase3-ai-ingestion`, HEAD `5daec100...` ;
son arbre de commit est identique à origin/main après fetch. Les seuls ajouts
locaux de cette mission sont les tests et documents listés plus bas ; aucune
seconde modification Git distante, aucun nouveau commit/staging/push.

## 2. CI, déploiement et site

| Workflow / run | Résultat observé | SHA / précision |
| --- | --- | --- |
| [Validate pull requests / 36456297686](https://github.com/sk34pk25/tssr-cours/actions/runs/36456297686) | completed / success | head PR `5daec100...` |
| [Build and deploy MkDocs / 36457474371](https://github.com/sk34pk25/tssr-cours/actions/runs/36457474371) | completed / success | nouveau main `22dbc42e...` |
| [Pages build and deployment / 36421690695](https://github.com/sk34pk25/tssr-cours/actions/runs/36421690695) | completed / success, déploiement actif antérieur | gh-pages `8bb090973cc6eb994c26c5b3de86ef9abe4a9a03` |

Le job build 109047448199 vérifie le SHA checkout et construit le nouvel arbre.
Le job deploy 109048117896 conclut exactement **« Aucun changement à publier. »**
après comparaison des fichiers générés. `gh-pages` est donc inchangé : aucun
nouveau run Pages n'est déclenché. Ce n'est ni un échec ni un nouveau déploiement
Pages du SHA 22dbc42e. Le site actif est l'artefact précédent, identique à la
nouvelle construction selon le job de comparaison. Les étapes d'attestation
Supabase sont sautées pour ce merge technique sans Change-Request-ID ; report
est skipped. Aucune migration ou commande de déploiement Edge dans ce workflow.

Smoke public : Chrome via Playwright installé, profil temporaire isolé, aucune
session réutilisée, seulement GET/HEAD, blocage défensif de toute requête Supabase.
Zéro requête bloquée a finalement été observée sur les six routes suivantes :

| Route sous https://sk34pk25.github.io/tssr-cours/ | HTTP | DOM / console |
| --- | --- | --- |
| parcours-tssr/ | 200 | Parcours rendu, navigation ; pas d'erreur/warning |
| msp/ | 200 | MSP rendues ; pas d'erreur/warning |
| kahoot/bibliotheque/ | 200 | Bibliothèque ; pas d'erreur/warning |
| modules/01-bases-reseaux/ | 200 | Cours ; pas d'erreur/warning |
| modules/01-bases-reseaux/module-03-l-adressage-ipv4/ | 200 | Module ; pas d'erreur/warning |
| ajouter/ | 200 | Connexion requise correctement rendue ; pas d'erreur/warning |

Captures Parcours et Ajouter inspectées visuellement ; pas de débordement
horizontal à 1440×960. Limite : smoke anonyme, pas de test de soumission humaine
production, ni audit exhaustif responsive ou de tous les liens. Le skill
browser-testing-with-devtools a conduit à cette vérification réelle ; son
connecteur n'étant pas disponible, Playwright isolé a servi de remplacement.

## 3. Recette SQL et isolation

Harness `tests/maintenance_postgres.py` : conteneurs uniques postgres:16,
`--network none`, aucun port publié, aucun bind mount hôte, données en tmpfs,
vérifications Docker inspect. Aucune URL de base ni secret Supabase lus. Données
exclusivement synthétiques. `auth.users`, `auth.uid()` et `auth.role()` sont des
stubs SQL locaux ; les migrations applicatives sont les vraies migrations du dépôt.

Ordre testé par le harness : migrations historiques 20260814130000,
20260815120000, 20260815190000, 20260821120000 → guard 20260909120000 →
hardening 20260907120000 → wrapper-only 20260912165830 → admin override →
AGENT 20260928072234. La migration AGENT n'est appliquée qu'aux bases jetables.

Un premier lancement a échoué avant démarrage du conteneur (Docker code 125,
API /version HTTP 500). Aucun redémarrage Docker ou accès à une base alternative
n'a été effectué. Docker a ensuite répondu (moteur 29.3.0), permettant de relancer
les suites. PostgreSQL mesuré : **16.15**, Debian aarch64. Les deux conteneurs
ont effectivement appliqué le socle et démarré les cas, mais les suites ont
été interrompues devant la surcharge locale (load average 304.41, swap utilisé
8285.50 Mo). Ce n'est pas une erreur SQL démontrée ni une réussite de recette.
Les résultats finaux sont consignés en section 7.

Les tests ajoutés comparent les lignes historiques avant/après, hors les deux
colonnes additives, vérifient les defaults HUMAN/false, l'index unique valide,
les contraintes même sous opérateur DB et le refus de reconvertir un humain utilisé.
Ils créent HUMAN_A, HUMAN_B, ADMIN_HUMAN et AGENT_TEST frais exclusivement dans la
recette. Trois humains sont requis ; A puis B ne suffisent pas, l'administrateur
éditeur est également un validateur. L'override est une décision explicite
distincte, sans fabrication de votes.

Ces assertions décrivent la couverture prévue, pas des résultats extrapolés.
Le cas AGENT de maintenance fermée a effectivement passé ; le cas de concurrence
était encore dans son setUp à l'interruption. Le premier cas maintenance
`test_admin_drain_header_requires_server_role` a passé ; la suite complète n'a
pas terminé. Les deux processus ont été interrompus (exit 130), puis leurs
seuls conteneurs identifiés ont été supprimés :
`tssr-maintenance-test-00438e8a7089` et `tssr-maintenance-test-13355ea0c4e9`.
Contrôle final : aucun conteneur de ces suites restant. Données synthétiques
jetables supprimées, régénérables par les tests ; aucun fichier utilisateur supprimé.

## 4. Recette HTTP du véritable serveur

Nouveau `supabase/functions/_shared/agent-staging-http_test.ts` : importe et appelle
les vrais handlers change-requests/admin-users, les vrais requireProfile,
agentSummary, trustedFiles et validateurs. Seuls les transports Auth/PostgREST
et GitHub sont simulés ; toute requête non prévue fait échouer le test. Deno est
lancé sans --allow-net. Aucune credential, aucun login réel, aucune écriture distante.

| Propriété | Preuve HTTP locale |
| --- | --- |
| Create/update Markdown docs, content_change | HTTP 201, RPC create seule ; identité AGENT et fingerprint reconstruits côté serveur |
| Vote approved/rejected, cancel, override, actions cours/navigation | Refus, aucune proposition ni claim |
| Admin-users | Refus HTTP 403 pour list/create/update/reset_password |
| Binaire/rename/delete/migration/workflow/hors docs/Markdown actif | Refus avant RPC create |
| Guard maintenance/draining, session déjà ouverte | HTTP 503, aucune création |
| Réponse idempotente déjà approved | Aucune tentative de publication par l'AGENT |
| Provenance racine incorrecte | HTTP 400, aucune création |
| Secret synthétique dans Markdown | **ÉCHEC : HTTP 201 et RPC create atteinte** |

Les tests SQL portent séparément sur le moteur réel, la concurrence, les ACL,
le consensus et l'index d'idempotence. Ne pas présenter cette combinaison comme
un test bout-en-bout GoTrue → PostgREST → Edge → GitHub : aucun de ces services
externes n'est appelé par le harness. Aucun test d'écriture GitHub par un agent
n'est réalisé ; le worker n'a pas de token GitHub et le handler est vérifié sans
chemin de publication pour cette identité.

## 5. Blocage confirmé : filtrage secrets absent à la frontière Edge

Reproduction permanente :
`agent-staging-http_test.ts`, test « recognizable synthetic secret in Markdown
must be denied server-side ». Le canary est construit à l'exécution, non réel,
jamais utilisé comme credential. Résultat attendu 4xx, observé 201.

Cause : `change-requests/index.ts:submit` valide fichiers et périmètre AGENT,
puis `agentSummary` contrôle provenance et fingerprint ; aucun ne reprend
le contrôle `scripts/ingestion/pipeline.py:safe_text`. L'appel direct à l'Edge
ne passe pas par le pipeline Python. Ce n'est pas une faille prouvée de vote
ou publication automatique, mais une violation de l'exigence « pas de secrets »
pour les propositions AGENT.

Prochaine correction à autoriser : filtrage serveur explicite des champs texte
AGENT avant persistance (fichiers, titre/description et métadonnées acceptées),
tests de reconnaissance et de faux positifs, erreurs expurgées, sans déléguer
la sécurité au client. Le filtre ne peut garantir la détection de toute chaîne
secrète arbitraire ; conserver aussi validation humaine et minimisation des données.
**Aucune correction fonctionnelle improvisée ni déploiement effectué ici.**

## 6. Compatibilité et préparation future

Le skill Supabase a motivé la vérification de la documentation actuelle sur RLS
et de la distinction rôle SQL / identité applicative :
[RLS Supabase](https://supabase.com/docs/guides/database/postgres/row-level-security).
Les rôles/grants locaux testés ne prouvent pas les ACL réellement déployées ;
elles devront être inventoriées avant cutover, en lecture seule.

Le futur worker utilisera une identité Auth neuve et une session dédiée. Aucun
compte humain, service_role, token GitHub ou credential Drive d'écriture. Le
provisioning Auth réel, rotation/révocation et refresh de session restent à
qualifier dans une recette Supabase distincte : les stubs SQL ne les couvrent pas.
Le parcours admin-users de changement de mot de passe est HUMAN-only ; le
runbook décrit la séparation opérateur Auth / qualification DB, sans inventer
un chemin applicatif qui n'existe pas.

Documents produits : `PHASE_3_AGENT_CUTOVER_RUNBOOK.md` (procédure future bloquée,
ordre migration avant consommateurs auth, rollback sous maintenance) et
`CODEX_INGESTION_SESSION.md` (contrat NO_API, JSON exact, B/C, questions ≤20,
cache, no-submission, Drive READ ONLY). Aucun des deux n'est exécuté.

## 7. Résultats des suites locales

Commandes exécutées depuis ce checkout, Python du venv existant et
PYTHONDONTWRITEBYTECODE=1 ; Deno 2.2.7 installé ; Poppler installé pour le PDF
synthétique. Le build utilise `--site-dir` hors dépôt.

| Commande | Résultat | Preuve |
| --- | --- | --- |
| npm test | PASS | 156 tests, zéro échec |
| deno task test:edge | FAIL | 143 passed, 1 failed : canary secret accepté |
| deno task check:edge | PASS | Les trois entrées Edge vérifiées |
| python -m unittest discover -s tests -p 'test_*.py' | PASS | 97 tests, zéro échec |
| python tests/maintenance_postgres.py | NON EXÉCUTÉ intégralement | Démarré puis interrompu pour surcharge hôte ; pas de verdict de suite |
| python tests/agent_postgres.py | NON EXÉCUTÉ intégralement | Démarré puis interrompu pour surcharge hôte ; les nouveaux cas SQL ne sont pas déclarés validés |
| python tests/ingestion_pdf.py | PASS | 1 test, PDF synthétique |
| python scripts/validate_course_structure.py | PASS | Structure/navigation/relations valides |
| python scripts/build_glossary.py --check | PASS | 487 termes, 8 cours, 59 modules |
| python -m mkdocs build --strict --site-dir /tmp/tssr-phase3d-validation.6eJebj/site | PASS | Construction stricte terminée, exit 0 |
| git diff --check | PASS | Aucun problème d'espacement sur le diff suivi ; staging vide |

Logs locaux temporaires : `/tmp/tssr-phase3d-validation.6eJebj/` ; aucun support
Drive ni contenu pédagogique privé copié dans cette recette. Les logs ne sont
pas ajoutés au dépôt. Les résultats antérieurs Phase 3C ne sont pas utilisés
pour déclarer ces nouvelles suites réussies.

## 8. Modifications locales et frontières finales

- Modifié : `tests/agent_postgres.py` (sans retirer les six cas existants).
- Créé : `supabase/functions/_shared/agent-staging-http_test.ts` (8 cas dont le
  test rouge conservé, pas de skip/xfail).
- Créés : les trois documents Phase 3D de cette livraison.
- Aucun code applicatif, migration, workflow, cours ou média modifié localement.
- Aucun staging, commit ni push pour ces ajouts. Le merge PR #8 est la seule
  mutation GitHub de la mission ; aucun workflow lancé manuellement.
- Supabase production : aucune migration, aucun déploiement (y compris
  publication-status), aucune donnée/proposition/compte AGENT créée ou modifiée.
- Drive : aucun accès nécessaire ici, aucune écriture. OpenAI API : aucun appel,
  coût 0. Les tests des providers utilisent des mocks, pas le réseau. Kahoot
  externe inchangé.

## Conclusion

**PHASE_3_AGENT_STAGING_BLOCKED**. L'intégration Git/site est terminée, mais le défaut serveur confirmé
interdit `PHASE_3_AGENT_STAGING_READY`. Fermer cette réserve dans une mission
corrective locale explicitement autorisée, puis rejouer la recette complète
dans un environnement aux ressources disponibles. Les matrices SQL ajoutées
restent à terminer : conservation des humains, consensus à trois, override,
idempotence concurrente et permissions ne sont pas déclarés PASS par extrapolation.
Ne pas exécuter le runbook de cutover ni activer un agent production.

## 9. Addendum Phase 3E — 30 septembre 2026

L'historique et le verdict Phase 3D ci-dessus sont conservés. Une mission locale
corrective explicitement autorisée a depuis fermé ses deux réserves :

- Test rouge du faux secret conservé ; filtre serveur AGENT avant création,
  politique partagée avec Python, 24 cas de refus/contrôle et 11 tests HTTP.
- PostgreSQL 16.15 isolé : les 10 tests AGENT et les 55 tests maintenance ont
  terminé complètement, séquentiellement, avec succès.
- Validation complète : npm 156 PASS ; Deno 147 PASS ; check Edge PASS ; Python
  98 PASS ; PDF 1 PASS ; structure PASS ; glossaire PASS ; MkDocs strict PASS ;
  diff check PASS. Aucune suite n'est déclarée verte par extrapolation.

**Verdict local courant : PHASE_3_AGENT_STAGING_READY.** Le rapport détaillé,
les limites, le choix AGENT-only préservant le parcours humain et le manifeste
du diff sont dans [PHASE_3E_AGENT_SECURITY_FIX_REVIEW.md](PHASE_3E_AGENT_SECURITY_FIX_REVIEW.md).
Pas d'activation de production, pas de migration/déploiement/compte/proposition
AGENT réel ; aucun nouveau commit, staging, push ou merge pour Phase 3E.
La prochaine étape est la revue humaine du diff, pas l'exécution du cutover.
