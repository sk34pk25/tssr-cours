# Réconciliation des publications attestées

## Périmètre et diagnostic — 4 octobre 2026

Correctif technique uniquement : aucun contenu, écran, vote, override, rôle,
compte ou droit AGENT ne change. Une PR livrant ce fichier n'autorise pas à elle
seule une migration, un déploiement Edge ou une réconciliation en production.

Le groupe `tssr-pages-deployment` de `deploy-docs.yml` conserve
`cancel-in-progress: false`. Cela protège le run **en cours**, mais la file
GitHub par défaut ne conserve qu'un run **en attente** : une nouvelle arrivée
remplace le précédent. Les neuf runs Debian M03–M11 sont `cancelled`, avec
zéro job exécuté. Aucun job `report` n'a donc envoyé leur callback.
M01, M12 et M02 ont des runs réussis et des reçus terminaux ; leur succès ne
prouve pas celui d'un run intermédiaire annulé.

La lecture de l'Edge `publication-status` v10 confirme que `publication.ts`,
`github.ts` et `maintenance.ts` déployés correspondent aux sources de la base
de ce correctif. Le callback normal exige le run lié à la CR et au SHA exact ;
il n'existe pas de parcours de rattrapage par ancêtre dans cette version.

Sources officielles : [concurrence GitHub Actions](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/control-workflow-concurrency),
[runs et tentatives](https://docs.github.com/en/rest/actions/workflow-runs),
[RPC Supabase](https://supabase.com/docs/reference/javascript/rpc).

## Décision

- **A, sérialiser toutes les publications applicatives** : imposerait une nouvelle
  file/prise de verrou globale, des délais et une reprise des workers bloqués.
  Ne résout pas les callbacks déjà perdus. Non retenu.
- **B, ancêtre réellement déployé** : retenu avec la sérialisation `gh-pages`
  existante, sans nouvelle admission ou mutex applicatif global.
- **C, ajouter aussi une file applicative globale** : complexité et risque de
  famine inutiles pour ce défaut ; non retenu.

## Chaîne de preuves

1. Lire le HEAD réel de `gh-pages`, son SHA et le message strict `deploy: <sha>`.
   Ce message seul n'est jamais suffisant.
2. Vérifier l'appartenance du SHA source à la branche configurée.
3. Vérifier le run `deploy-docs.yml`, dépôt, branche, événement, SHA, tentative,
   jobs nommés avec l'identité attestée et étapes exactes checkout/build/push.
4. Exiger la réussite des jobs build et deploy. Le run doit être réussi, sauf
   **échec du seul job `report`**, avec tous les autres jobs réussis : ce cas
   représente précisément un callback perdu après publication, pas un build
   échoué. Un run annulé/échoué avant déploiement n'est jamais une preuve.
5. Vérifier le run GitHub Pages `dynamic/pages/pages-build-deployment`, son dépôt,
   événement `dynamic`, branche `gh-pages`, SHA exact, succès et jobs build/deploy.
6. Pour un déploiement collaboratif, relier aussi l'identité des jobs à l'intention
   de la CR d'ancrage. Les déploiements techniques sans CR sont acceptés seulement
   avec les identités vides cohérentes et toutes les autres preuves.
7. Pour chaque CR `publishing`, vérifier son identité moderne, l'absence de
   callback/échec/horodatage terminal, son commit et son ascendance vers le SHA
   réellement déployé. En transport PR, exiger le véritable merge SHA de la PR
   approuvée, même dépôt, branche et head approuvé, pas seulement le head de PR.
8. Relire `gh-pages` avant chaque tentative terminale ; s'il a changé, ne pas
   finaliser à partir de cette observation devenue périmée.
9. Appeler `service_reconcile_publication`, jamais un UPDATE de statut direct.

Les mainteneurs autorisés à écrire les workflows/branches et le propriétaire DB
restent des frontières de confiance, comme pour la publication existante.
L'ascendance atteste l'intégration cumulative ; elle ne garantit pas qu'une
modification humaine ultérieure n'a pas remplacé une partie du contenu.

## État, SQL et audit

Migration additive `20261004120000_publication_reconciliation.sql` : une seule
RPC réservée à `service_role`. Aucun backfill, aucune modification de H, des RLS
ou du guard. `anon`/`authenticated` (y compris AGENT) n'ont aucun EXECUTE.

La RPC verrouille **CR puis permis**, avec `lock_timeout=3s`, et exige un permis
moderne lié dont le worker a confirmé la fin (`finished_at`). Les appels externes
sont effectués avant ces locks. Elle délègue au wrapper
`service_complete_guarded_publication` : même contexte terminal, mêmes triggers,
snapshot, idempotence et audit `publication_succeeded` atomique.

Le reçu conserve `expected_sha` et `commit_sha` propres à la demande. Le champ
supplémentaire `reconciliation` identifie explicitement le protocole, le SHA
cumulatif déployé, les runs/tentatives MkDocs et Pages, le SHA `gh-pages` et la CR
d'ancrage éventuelle. **Ce n'est pas un faux callback du run annulé.**
`published_at` reste l'heure de finalisation du protocole existant ; la preuve
du déploiement antérieur est conservée séparément dans le reçu/audit.

Rejouer le même reçu cohérent ne réécrit rien. Un reçu différent, un callback
tardif contradictoire ou un état terminal corrompu est refusé ; aucun échec
ultérieur ne remplace un succès. Les scans suivants ne sélectionnent plus les
lignes terminales. Un vrai build échoué conserve le traitement d'échec existant.

La finalisation d'une opération durable déjà admise reste possible pendant
drain/maintenance, comme le callback existant. Aucun nouveau claim, aucune
écriture GitHub, aucune réouverture du guard n'est autorisée par ce mécanisme.

## Exécution et observabilité

Endpoint existant `publication-status`, POST derrière le **même** secret serveur
de webhook : `{ "action": "reconcile", "dry_run": true, "after_id": null }`.
L'omission de `dry_run` signifie lecture/éligibilité seulement. Aucun secret ne
doit être copié dans un terminal affiché, un document, un payload versionné ou
un compte AGENT. Le client ne fournit ni SHA de confiance ni preuve GitHub.

Chaque appel traite au plus dix candidats. Pagination par UUID, pas OFFSET :
les refus ne bloquent pas les lignes suivantes. Retour `next_cursor` à réutiliser.
Un sweep est borné à 50 pages (500 candidats) et 15 minutes ; dépassement =
diagnostic et continuation explicite `after_id`, jamais validation forcée.

Le workflow `Reconcile attested publications` se déclenche après Pages, toutes
les 30 minutes et manuellement. Aucun checkout/artifact/code pédagogique dans
ce job porteur du secret ; permissions GitHub vides ; aucune écriture GitHub.
Il reste désactivé tant que `PUBLICATION_RECONCILIATION_ENABLED` n'est pas `true`.

Les événements `publication_callback` et `publication_reconciliation` contiennent
uniquement UUID/SHA/run/méthode/résultat, jamais contenus, noms ou secrets. Les
refus indiquent notamment état incomplet, commit non ancêtre, Pages déplacé ou
permis inachevé/état changé. Un échec de preuve globale fait échouer le workflow.
Les lignes non admissibles sont conservées, signalées et nécessitent une revue ;
elles ne sont pas automatiquement marquées failed.

## Futur cutover et retour arrière — non exécutés par cette PR

1. Revue humaine et CI ; garder l'activation à false/absente.
2. Précontrôle frais et qualification des opérations en cours selon le runbook
   Phase 1. Ne pas contourner le drain ni inventer la fin d'un worker historique.
3. Après autorisation de livraison : appliquer la migration additive puis
   déployer **publication-status uniquement**, avec son `verify_jwt` actuel.
   Aucun redéploiement de change-requests/admin-users requis.
4. Activer le workflow sous contrôle opérateur et lancer d'abord son mode manuel
   dry-run ; comparer les preuves retournées aux preuves GitHub fraîches.
5. Autoriser le premier sweep réel, vérifier les audits unitaires, les invariants
   terminaux et les lignes exclues. Ensuite conserver le rattrapage automatique.

Le merge seul ne déploie pas l'Edge et n'applique pas cette migration. La variable
ne doit être activée qu'après synchronisation de la RPC et de l'Edge. Arrêt sûr :
désactiver la variable ; au besoin restaurer l'ancienne Edge. Laisser la RPC
additive inutilisée est sans effet. **Ne pas annuler des reçus déjà finalisés**,
ne pas supprimer leurs audits ou rejouer un UPDATE manuel pour le rollback.

Limites fail-closed : API/permissions GitHub indisponibles, historique Actions
effacé, jobs tronqués/renommés, déploiement d'un ancien SHA par dispatch dont
`run.head_sha` diffère du SHA publié, ou dernier essai de build échoué : diagnostic
et revue, pas d'inférence optimiste. Les planifications GitHub peuvent être
retardées ; il n'y a pas de garantie de délai de 30 minutes. La fin de callback
et GitHub ne peuvent pas partager une transaction distribuée ; le reçu conserve
la preuve immutable observée, même si un déploiement ultérieur survient ensuite.

## Plan Debian issu des lectures de production

Référence observée : main/source déployée
`666048c5e970a277afedbe1a5be91beff2bb5589`, run MkDocs `37162920231/1`,
gh-pages `690a80369a54db6cf41f07297ed73477e3f4e09d`, Pages `37163002431/1`.
Le vérificateur local a validé cette chaîne par des GET GitHub réels, sans RPC
de réconciliation et sans mutation distante.

| Module | CR | SHA propre (court) | Run annulé | État observé / plan |
|---|---|---|---|---|
| M03 | 8ee9f018-0cd9-4b51-9cc4-611318801732 | 72817698 | 37162002913 | publishing ; admissible sous revalidation |
| M04 | 78eec129-0b7d-4d10-aa68-c536649bdbc3 | 91faf876 | 37161998537 | publishing ; admissible sous revalidation |
| M05 | 94e0c983-8c6a-4522-a90c-a2104a077006 | f85bed2c | 37161982746 | publishing ; admissible sous revalidation |
| M06 | 756328d8-b6d6-498f-8982-b2007395b775 | 6b759699 | 37161976697 | publishing ; admissible sous revalidation |
| M07 | 79f08e56-2bcc-41f7-ba17-2638459c4394 | 967af8c7 | 37161961764 | publishing ; admissible sous revalidation |
| M08 | 181683c9-d458-4915-8d86-0f0637149071 | 990a5547 | 37161957578 | publishing ; admissible sous revalidation |
| M09 | 88e00dc4-b8ca-4c95-b7c2-ec92c9032c32 | eae5e87e | 37161944785 | publishing ; admissible sous revalidation |
| M10 | c950a4dd-c602-4a8a-b64a-b8cc25bf9bc4 | 8fff91a8 | 37161939627 | publishing ; admissible sous revalidation |
| M11 | 5a068b3a-526c-4784-9f83-d25e1a51f798 | 08681dc4 | 37161928221 | publishing ; admissible sous revalidation |

Pour ces neuf lignes : permis fini, intention directe, pas de callback ni motif
d'échec, dernier audit publication_committed, comparaison ancêtre du SHA déployé
confirmée (`behind_by=0`). M01/M02/M12 terminales : ne rien changer.
La CR groupée `248577dd-f538-4b1f-a81e-f4dd7a57d3a1`, commit `ef449c08…`,
est **exclue** : divergence (`behind_by=1`) et worker non fini. Qualification
distincte obligatoire. Aucune de ces lignes n'a été modifiée pendant ce travail.
