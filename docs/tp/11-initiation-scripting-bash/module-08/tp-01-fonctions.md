# TP 01 — Fonctions

## Objectifs

- Appréhender l'utilisation de fonctions.
- Créer un script pour répondre à des besoins fonctionnels.

## Prérequis cités

Le document demande d'avoir suivi les vidéos des modules 1 à 8. Ces vidéos ne sont pas fournies comme ressources lisibles dans le dossier Drive M08.

## Consigne

Créer, dans le dossier courant, un script Shell `script_M8TP1.sh` qui agit sur les fichiers terminant par `.sh` :

- créer des copies de sauvegarde en ajoutant l'extension `.save` ;
- supprimer les fichiers terminant par `.save` ;
- lister en vert les scripts disposant d'une sauvegarde et en rouge ceux qui n'en ont pas ;
- quitter le script.

Le menu doit s'afficher tant qu'une sortie n'est pas demandée. Un fichier externe nommé `fonctions.fct` doit concentrer les fonctions de sauvegarde, suppression et listing ; le script principal doit y faire appel.

## Menu proposé par l'énoncé

```text
S : Copies immédiates de sauvegarde
D : Suppression des fichiers de sauvegarde
L : Lister les fichiers
Q : Quitter
```

L'énoncé cite le recours aux structures `while`, `for`, `if` et `case`.

## Ressources non fournies comme fichiers séparés

`fonctions.fct` et `script_M8TP1.sh` sont mentionnés dans le scénario, mais sont absents comme objets Drive autonomes. Aucun fichier de remplacement n'est créé.
