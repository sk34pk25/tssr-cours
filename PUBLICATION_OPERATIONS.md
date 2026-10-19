# Reprise des publications approuvées

Les propositions restent gouvernées par leurs votes humains. Une reprise ne
remplace pas une approbation et ne doit jamais modifier directement leur statut
en SQL.

## Diagnostic constaté le 19 octobre 2026

- Les anciens builds stricts échouaient sur des liens vers des TP/révisions non
  encore présents dans Git. Exemples de runs : `37274352838` et `38924204493`.
  Les builds isolés et le contrôle serveur `assertProposalLinks` couvrent ce cas.
- Des validations rapprochées ont laissé des runs en attente annulés par la file
  GitHub. Le dernier déploiement contient leurs commits ancêtres, mais leur propre
  callback n'a pas finalisé les propositions. Exemples : runs `39228700289`,
  `39228711273`, `39228793702` ; déploiement réussi `39228814473`.
- Le workflow de réconciliation existe, mais son indicateur d'activation n'était
  pas actif : les exécutions planifiées étaient ignorées, notamment `39218950764`.
  Le mode manuel de vérification peut désormais fonctionner avant cette activation.

## Choisir la bonne reprise

1. Échec avant écriture Git : le compte humain administrateur utilise **Reprendre
   la publication approuvée** sur la fiche. Ce bouton utilise uniquement l'action
   serveur existante `retry-publication`, sans modifier fichiers ni votes. Le
   serveur vérifie de nouveau le consensus, les profils, les blobs et l'absence
   d'effet distant. En cas de conflit, ne pas forcer ; préparer une nouvelle
   proposition à valider.
2. Publication bloquée avec commit déjà déployé : lancer
   `reconcile-publications.yml` sur `main` avec `dry_run=true`, examiner les résultats,
   puis activer `PUBLICATION_RECONCILIATION_ENABLED=true` et lancer une passe avec
   `dry_run=false`. L'activation reste obligatoire pour toute passe qui écrit.
   Le serveur atteste indépendamment Git, le build, gh-pages et GitHub Pages.
3. Ancien build réellement échoué mais contenu ensuite déployé inchangé : utiliser
   `recover-publication.yml`, d'abord en dry-run, puis en application seulement si
   l'éligibilité est attestée. Le reçu d'échec initial reste immuable ; une preuve
   séparée fait afficher **Récupéré après échec de publication**.
4. Historique Debian abandonné : consultation seule. Ne pas le republier à partir
   de ses anciens votes, ni le confondre avec la campagne active.

## Prévenir les récidives

- Une COURSE_PAGE doit construire sans aucun fichier ECOSYSTEM non publié.
- Un ECOSYSTEM doit construire sans COURSE_PAGE locale absente de la base.
- Refaire le fetch juste avant soumission et traiter les bases avancées sans
  réécrire inutilement la pédagogie.
- Surveiller la réconciliation après le déploiement Pages et par sa planification.
- Ne pas relancer d'anciens déploiements de contenu pour corriger un simple état
  d'affichage : le site ne doit pas revenir à un ancien commit.
- Une reprise refusée n'autorise ni un override ni une écriture directe de statut.
