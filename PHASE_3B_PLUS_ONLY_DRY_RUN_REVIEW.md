# Phase 3B — essai interactif réel, version publiable

Date de l'essai : 2026-09-28. Verdict historique : **PHASE_3B_PLUS_ONLY_READY**.
Ce rapport synthétise les preuves privées conservées hors dépôt ; il ne contient
ni PDF métier, ni extrait pédagogique, ni réponse réelle, ni identifiant privé
du support, ni URL signée. Le support n'a pas été retraité pendant la Phase 3C.

## Périmètre et architecture

Un PDF technique de neuf pages, 214 832 octets, a été lu via le connecteur Drive.
Deux pages ont été sélectionnées pour un TP associé explicitement à un module
IPv4 existant. Aucune association probable n'a été transformée en certitude.

Drive READ ONLY → snapshot privé → extraction Poppler → paquet compact →
session Codex/ChatGPT Plus → résultat structuré → validation → aperçu/diff local.

Les seules opérations Drive employées étaient des lectures. Les métadonnées
avant/après et l'ascendance ont été contrôlées. Le scope OAuth interne du
connecteur n'était pas observable : ce rapport ne prétend pas l'avoir vérifié.
Aucun jeton du connecteur n'a été extrait. Le runner interactif n'a pas de client
réseau et ne dépend pas d'une clé API IA.

## Résultat observé

- Extraction de neuf fragments paginés, sélection de deux pages seulement.
- Revue visuelle locale de ces deux pages ; avertissement
  `PDF_VISUAL_REVIEW_REQUIRED` conservé dans le résultat.
- Sept unités proposées : deux reformulations B et cinq compléments C.
- Cinq questions avec réponses, explication et référence de segment.
- Aucune unité générée présentée comme original A ou mise à jour externe D.
- `READY_FOR_HUMAN_REVIEW`, `submissionAllowed=false`.
- Aucune écriture de cours, aucun appel au client de proposition.

Les compléments ne sont pas un corrigé officiel. Des ambiguïtés du support ont
été signalées et non corrigées dans Drive. La revue humaine, les droits de
publication et l'exactitude pédagogique restent à confirmer avant utilisation.
L'essai privé n'autorise pas la republication du document ou d'un dérivé.

## Cache et delta

| Passage | Segments manquants | Hits | Caractères source | JSON compact |
| --- | ---: | ---: | ---: | ---: |
| Initial | 2 | 0 | 2 605 | 4 563 octets |
| Replay identique | 0 | 2 | 0 | 1 679 octets |
| Delta local simulé | 1 | 1 | 1 143 | 3 108 octets |

Le replay a produit un aperçu identique, sans nouvelle analyse Codex.
Le delta portait sur une copie JSON locale explicitement étiquetée
`LOCAL_SIMULATION`, pas sur un nouveau PDF ou une nouvelle version Drive.
Un seul segment a été retraité ; les quatre unités de l'autre segment sont
restées identiques. Le PDF original et son empreinte ont été conservés.

La clé de cache comprend l'identité source, la cible, la classification, la
version de contrat et le hash du segment. Cible, provenance et Markdown sont
revalidés au replay. Les dépendances sémantiques entre segments imposent toujours
une relecture humaine du résultat complet.

## Vérifications historiques

| Suite exécutée en Phase 3B | Résultat |
| --- | --- |
| Python | PASS — 95 tests, dont 8 Plus |
| npm | PASS — 156 tests |
| Deno | PASS — 136 tests |
| Structure / glossaire / MkDocs strict / diff check | PASS |
| Essai réel / replay / delta local | PASS dans le périmètre décrit |

Les suites PostgreSQL n'avaient pas été rejouées en Phase 3B. Leur nouvelle
exécution est documentée séparément dans PHASE_3_INTEGRATION_REVIEW.md.

## Limites et garanties

- ChatGPT Plus/Codex demeure une session interactive, pas une API serveur autonome.
- Aucun appel OpenAI API, aucune clé utilisée, coût API : **0**.
- Consommation exacte du quota Plus : non observable, aucun chiffre inventé.
- Aucun fallback payant, aucune escalade automatique de modèle.
- Aucun compte AGENT, proposition réelle, changement Supabase ou Kahoot.
- Les artefacts réels restent privés, hors Git ; aucun retraitement en Phase 3C.

## Reproduction sur fixtures

`python -m unittest discover -s tests -p 'test_ingestion_plus.py'` exerce la
préparation, les résultats simulés, la validation, le cache, le replay, le delta,
la provenance, la limite de vingt questions et les refus réseau/soumission.
L'entrée réelle est `scripts/ingest_plus.py prepare` puis `validate`, avec un
répertoire privé dédié hors dépôt. Aucun envoi n'est relié à cette CLI.
