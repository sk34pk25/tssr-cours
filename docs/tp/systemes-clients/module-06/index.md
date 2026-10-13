# TP — Module 06 — La sécurité NTFS et les ACL

## Scénario

Ce TP met en pratique la configuration et la vérification d’autorisations NTFS sur les répertoires de deux volumes de laboratoire. Les réponses restent séparées de l’énoncé : réalisez d’abord les activités, puis comparez les résultats à la correction.

| Information | Élément attesté |
| --- | --- |
| Durée estimée | 1 heure |
| Environnement | VM `Win10-XX`, volumes `DATA` et `TOOLS`, VM Discovery pour les questions PowerShell |
| Objectif | Configurer, expliquer et contrôler les ACL de répertoires |
| Outils | Onglet Sécurité, Accès effectif et PowerShell pour les commandes demandées |

!!! warning "Ressources de laboratoire non fournies"
    La VM `Win10-XX`, la VM Discovery ainsi que les volumes `DATA` et `TOOLS` sont mentionnés dans le scénario. Ils ne sont pas fournis dans le dossier Drive M06 live. Utilisez uniquement les ressources mises à disposition par le formateur ; ne les remplacez pas par une ressource inventée.

## Résultats attendus

- les répertoires `Echange`, `logiciels` et `manuels d’utilisation` sont créés dans le contexte prévu ;
- les groupes et droits demandés sont configurés sans modifier les noms du scénario ;
- l’héritage et les accès sont vérifiés ;
- les réponses PowerShell demandées sont contrôlées sur la VM Discovery du laboratoire.

## Parcours

1. [Lire l’énoncé](enonces.md).
2. Réaliser les activités dans l’ordre et conserver les contrôles demandés.
3. Vérifier les résultats avec les comptes concernés ou Accès effectif.
4. [Consulter la correction](corrections.md) après votre tentative.
5. Revoir les notions dans le [cours](../../../modules/02-systemes-clients-microsoft/module-06-la-securite-ntfs-et-les-acl.md) et la [fiche de révision](../../../revision/systemes-clients/module-06-la-securite-ntfs-et-les-acl.md).
