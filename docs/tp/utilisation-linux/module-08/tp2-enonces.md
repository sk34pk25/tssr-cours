# Énoncé — TP02 — Archivage et compression

## Préparer l’atelier

Le support demande de suivre les vidéos du module 08 et de faire le TP précédent. Utiliser le répertoire personnel du compte de laboratoire. Vérifier l’espace disponible dans `/tmp` et préparer `Restaurations` dans le cadre du TP.

**Durée estimée dans le support**

45 à 60 minutes.

## Activité 1

Archiver son répertoire personnel dans /tmp sous son login et noter la taille.

## Activité 2

Créer l’archive compressée avec gzip en une seule instruction.

## Activité 3

Répéter avec bzip2.

## Activité 4

Comparer les trois tailles et identifier la plus petite de son essai.

## Activité 5

Créer Restaurations dans son répertoire personnel et y restaurer en une instruction d’extraction.

## Activité 6

Créer une nouvelle sauvegarde non compressée en excluant Restaurations.

## Activité 7

Créer un fichier vide puis mettre à jour l’archive et vérifier sa présence.

## Livrables et vérifications

| Contrôle | Trace attendue |
| --- | --- |
| Archives | Comparer les tailles mesurées des trois formats, puis vérifier les chemins effectivement restaurés. |
| Exclusion et mise à jour | Contrôler les membres de la seconde archive non compressée. Elle doit exclure `Restaurations` et inclure le nouveau fichier après mise à jour. |

## Liens

- [Correction](tp2-corrections.md)
- [Cours du module](../../../modules/04-utilisation-gnu-linux/module-08-mecanismes-linux-et-bash-avance.md)
- [Fiche de révision](../../../revision/utilisation-linux/module-08-mecanismes-linux-et-bash-avance.md)
- [Tous les ateliers du module](index.md)
