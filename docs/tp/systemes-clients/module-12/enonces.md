# Énoncés — Module 12 — Introduction à la capture et au déploiement d’image

**Objectif source :** connaître les principes de capture et de déploiement d’image Windows.
**Prérequis source :** avoir terminé l’atelier 13 — Maintenance.

## Préparation du master

1. Sur `Win10-XX`, activer le compte Administrateur, utiliser les identifiants fournis par le formateur, puis ouvrir une session avec ce compte.
2. Vérifier qu’un snapshot récent est disponible avant les manipulations.
3. Supprimer les utilisateurs créés lors de l’atelier utilisateurs/groupes, l’utilisateur créé à l’installation de la VM et leurs profils.
4. Exécuter un Sysprep généralisé en OOBE puis arrêter `Win10-XX`.

## Créer le clone

1. Créer le dossier `Win10-XX-Clone` dans `VMs-WorkStation`.
2. Utiliser la fonctionnalité de clonage WorkStation pour créer un **Full Clone** de `Win10-XX` dans ce dossier.

## Démarrer et comparer

1. Allumer `Win10-XX` et appliquer son dernier snapshot.
2. Allumer `Win10-XX-Clone` lorsqu’il est disponible et procéder à sa configuration initiale.
3. Compléter le tableau de comparaison : VMware Tools, nom de machine, volumes, comptes SAM, adresse IP, premier journal système, points de restauration, compte Administrateur, pilote HP LaserJet et règle ICMP.

Le TP décrit un clonage VMware ; il ne demande pas une capture WIM ni un déploiement WDS réel.

## Provenance

- **A — Source TSSR :** énoncé M12.
- **B — Structuration pédagogique :** phases de travail et listes fidèles aux consignes.
