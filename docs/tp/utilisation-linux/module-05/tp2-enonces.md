# Énoncé — TP02 — Les liens

## Préparer l’atelier

Le support demande de suivre les vidéos du module 05 et de faire le TP précédent. Se placer dans le répertoire de laboratoire où se trouve `Edition`. Le fichier et les nouveaux liens physiques doivent appartenir au même système de fichiers.

**Durée estimée dans le support**

45 à 60 minutes.

## Activité 1

Créer un lien physique depuis Edition vers edition1.txt et vérifier la lecture.

## Activité 2

Créer un lien symbolique depuis edition1.txt vers /tmp/stagxx/edition2.txt, puis vérifier.

## Activité 3

Créer un lien physique depuis edition1.txt vers edition3.txt.

## Activité 4

Afficher les caractéristiques des quatre noms et mettre les différences en évidence.

## Activité 5

Supprimer edition1.txt, puis tester les lectures via edition2.txt et edition3.txt.

## Livrables et vérifications

| Contrôle | Trace attendue |
| --- | --- |
| Avant suppression | Comparer les caractéristiques et le contenu des noms demandés. Noter le chemin porté par le lien symbolique. |
| Après suppression | Comparer les lectures de `edition2.txt` et `edition3.txt`. Expliquer le résultat avec le chemin et l’inode. |

## Liens

- [Correction](tp2-corrections.md)
- [Cours du module](../../../modules/04-utilisation-gnu-linux/module-05-lire-des-fichiers-et-gerer-les-liens.md)
- [Fiche de révision](../../../revision/utilisation-linux/module-05-lire-des-fichiers-et-gerer-les-liens.md)
- [Tous les ateliers du module](index.md)
