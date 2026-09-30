# Phase 3 — runbook futur AGENT propose-only

Date : 2026-09-28. **DOCUMENT DE PRÉPARATION — NE PAS EXÉCUTER.**

La PR #8 a intégré les sources dans main au merge
`22dbc42e6d7de165acc6a9a18e6881ed982be014`. Cela ne déploie pas les Edge
Functions et n'applique pas la migration AGENT. Aucun compte AGENT production
n'a été créé par cette mission.

## Porte de sortie préalable

La recette Phase 3D a reproduit un défaut : l'entrée Edge `create` accepte
un secret synthétique reconnaissable dans du Markdown (HTTP 201). Le filtrage
Python `scripts/ingestion/pipeline.py:safe_text` ne protège pas un appel direct
au serveur. **Cutover interdit tant que ce test rouge et les autres réserves
du rapport `PHASE_3D_AGENT_STAGING_REVIEW.md` ne sont pas fermés.**

Actualisation Phase 3F, 30 septembre 2026 : ces réserves sont fermées en recette
locale (voir `PHASE_3E_AGENT_SECURITY_FIX_REVIEW.md`). L'intégration Git reste
distincte du déploiement : toutes les portes de contrôle et l'autorisation
humaine de production ci-dessous restent obligatoires. Runbook non exécuté.

Cette procédure n'autorise ni une correction distante ni une activation. Une
nouvelle autorisation humaine, une révision figée et une recette verte sont
nécessaires. Les commandes opératoires avec UUID, générations CAS et versions
Edge seront figées après un nouveau précontrôle ; ne pas reprendre des valeurs
d'une ancienne phase.

## Ordre contrôlé

| Étape | Action future | Preuve exigée / arrêt et retour arrière |
| --- | --- | --- |
| 1. Précontrôle | Inventaire read-only main, workflows, schéma, profils, propositions, opérations/permits durables et gate. Fixer le SHA candidat. | Aucun run actif ni publication ambiguë ; toutes les réserves fermées. Vérifier exactement quelles migrations existent, sans supposer l'état production. |
| 2. Rollback backend | Préparer les sources complètes et reproductibles des versions actuellement déployées de `change-requests` et `admin-users`, leurs hashes et dépendances. Tester la restauration en recette. | Un simple numéro de version Edge n'est pas une preuve de rollback disponible. Arrêter si l'artefact ne permet pas de redéployer l'ancienne pile. Ne pas copier de secrets dans Git. |
| 3. Maintenance éditoriale | Transition opérateur CAS open → draining ; laisser terminer les opérations durables déjà autorisées ; prouver quiescence GitHub/DB ; passer maintenance. | Employer les RPC/opérations privées du guard existant, générations fraîches, jamais UPDATE ad hoc. Le site public reste lisible. Pas de changement de comptes humains pour geler les écritures. Ne pas forcer l'ouverture sur erreur. |
| 4. Migration additive | Appliquer uniquement `20260928072234_agent_propose_only.sql` après vérification des dépendances historiques, guard, hardening, post-H et override. | Les anciens profils restent HUMAN, can_propose=false ; comparer leurs droits et données avant/après, contraintes et index. Migration non idempotente : ne pas rejouer aveuglément les ADD COLUMN. Aucun backfill d'identités. |
| 5. Consommateurs auth | Déployer les bundles approuvés de `change-requests` et `admin-users`, tous deux utilisateurs de `requireProfile`. | Les nouvelles sélections actor_kind/can_propose imposent migration AVANT fonctions. Ne pas déployer `publication-status` : il importe des utilitaires du module mais n'utilise pas `requireProfile`, aucun changement requis ici. Vérifier versions et hashes, sans afficher les secrets. |
| 6. Smoke humain fermé | Vérifier consultation, authentification dédiée de recette puis session humaine autorisée de production, profil/permissions ; les mutations doivent rester refusées en maintenance. | Pas de proposition artificielle ni de vote de test en production. Les mutations positives/override ont été testés en recette, pas déduits d'une réponse d'authentification. Si régression : anciennes fonctions, gate fermé, schéma additif conservé après contrôle de compatibilité. |
| 7. Identité AGENT neuve | Après autorisation distincte, créer une identité Auth dédiée via le canal administratif sécurisé, jamais un humain existant. Qualifier son profil par opérateur DB. | Au moment de la qualification : profil member, non éditeur, sans override, temporaire, created_at=updated_at, aucun historique auteur/vote/audit. La première mutation contrôlée doit définir AGENT et les permissions approuvées. Aucun appel frontend/service_role ne peut qualifier cette identité. Arrêter si elle a déjà été utilisée. |
| 8. Contrôles propose-only fermés | Vérifier DB/ACL, nouvelle session propre, refus vote/reject/override/admin/claim/cancel et refus create sous maintenance. | Ne pas demander à un create de réussir alors que le guard est fermé. Les tests positifs et concurrence sont exécutés uniquement en recette. Si une opération interdite réussit : conserver maintenance, désactiver l'intégration dédiée par procédure autorisée ; aucune publication réparatrice automatique. |
| 9. Réouverture | Rassembler les preuves readiness du protocole existant et effectuer la transition CAS contrôlée vers open. | Ne pas falsifier readiness ni substituer un SHA de dépôt à la version réellement déployée. Vérifier consultation humaine et absence de publication inattendue. En cas d'incident : draining puis quiescence/maintenance. |
| 10. Dry-run réel | Lire uniquement un support Drive explicitement choisi, snapshot privé, préparation locale, session Codex/ChatGPT interactive, validation du JSON et preview. | Aucune API OpenAI, aucun appel propose, aucune écriture Drive/docs. Source/position/provenance et cible revues par humain. |
| 11. Première proposition | Autorisation explicite d'activer l'adaptateur `scripts/ingestion/proposals.py:ProposalClient` avec session AGENT dédiée. Soumettre une preview réelle et figée à `change-requests`, action create. | Demande pending, validateurs HUMAN, zéro vote implicite, reçu durable et clé idempotente. L'humain valide ensuite ; seul le pipeline existant publie. En cas de réponse perdue, même clé et mêmes octets, jamais nouvelle clé automatique. |

## Session AGENT : frontière de confiance

Le worker reçoit uniquement une session Auth de l'identité neuve et la clé
publishable publique nécessaire au transport. Aucun service_role, secret serveur,
token GitHub, compte humain ou credential Drive d'écriture. L'identité
est vérifiée par Auth et les droits sont relus dans `profiles`, pas dans un
champ actor_kind envoyé par le worker ou dans user_metadata.

Le parcours admin-users de changement de mot de passe est HUMAN-only par
`assertActorAction` : ne pas supposer qu'il provisionnera le worker. Prévoir
un canal Auth administratif sécurisé séparé pour établir/renouveler son secret,
puis qualifier/activer les droits via l'opérateur DB conformément au trigger.
La qualification fraîche et la levée de must_change_password doivent être
coordonnées sans mutation intermédiaire du profil. Tester ce cycle GoTrue réel
sur une recette Supabase dédiée avant la production ; le harness PostgreSQL
utilise des stubs auth.uid/auth.role et ne prouve pas un login réel.

## Compatibilité et rollback

- Nouveau backend sans colonnes AGENT : interdit, requireProfile échouerait.
- Migration + ancien backend + uniquement profils HUMAN : période de bascule
  conservatrice sous maintenance, pas de création AGENT avant mise à jour des
  deux consommateurs et contrôles.
- Si la migration réussit mais un déploiement échoue : ne pas DROP les colonnes
  ni effacer des propositions. Garder maintenance, restaurer les deux bundles
  anciens testés puis réévaluer. Aucune réouverture automatique.
- Après une première proposition AGENT, un rollback vers l'ancien backend ne
  doit pas rouvrir le circuit : l'ancien code ne connaît pas ses invariants.
  Maintenir le gel et traiter les demandes AGENT explicitement. Ne pas les
  supprimer et ne pas transformer leur auteur en HUMAN.
- Les changements Git/Pages et le backend sont des livraisons distinctes ; la
  PR #8 fusionnée n'est pas une autorisation de migration production.

## Validation préalable à toute exécution

Rejouer les suites du rapport Phase 3D, y compris le test HTTP de secret, les
tests SQL avec trois humains, consensus, override, maintenance, concurrence et
auto-escalade. Vérifier le vrai provisioning Auth en recette, la restauration
des bundles, les SHA, l'absence d'opérations durables en cours et l'accord humain.
Ne stocker aucun mot de passe/token dans ce document, les tests ou le dépôt.
