# TP 01 — Manipuler des objets

## Contexte

Ce TP source-faithful porte sur la manipulation d’objets retournés par les commandes PowerShell. Il s’appuie sur un environnement de laboratoire non fourni avec le module.

## Activités demandées

Réaliser, dans l’ordre du scénario, les vérifications et manipulations suivantes :

1. sélectionner des propriétés et utiliser l’aide sur les commandes mobilisées ;
2. travailler sur des utilisateurs de laboratoire et leurs propriétés, sans reproduire leurs identités ;
3. filtrer et trier des objets, notamment selon leur état ;
4. compter ou mesurer des objets, des fichiers et leurs tailles ;
5. présenter des résultats sous différentes formes ;
6. consulter des événements et produire les exports demandés ;
7. importer des données CSV puis appliquer des propriétés calculées.

## Outils et formes attendus

Le TP utilise le pipeline `|`, `Select-Object`, `Where-Object`, `Sort-Object`, `Measure-Object`, les formats `Format-Table`, `Format-Wide` et `Format-List`, ainsi que `Export-Csv`, `ConvertTo-Html`, `ConvertTo-Json`, `Out-File`, `Get-Content`, `Import-Csv` et des propriétés calculées.

Les objets, emplacements, fichiers, comptes, partages, valeurs de sortie et résultats propres au laboratoire sont volontairement remplacés par des références neutres telles que `<objet-de-laboratoire>` ou `<fichier-de-laboratoire>`.

## Vérifications

Pour chaque activité, vérifier que la commande sélectionne, filtre, trie, mesure, met en forme, exporte ou importe bien les objets demandés par le scénario. Les observations dépendantes du laboratoire ne constituent pas des valeurs de référence générales.

## Attention — commande destructive de la source

Le scénario comporte une suppression d’utilisateur. Cette action est destructive et réservée au laboratoire. Elle ne doit jamais être exécutée en dehors d’un environnement prévu à cet effet ; aucune identité réelle n’est reprise dans cet énoncé.

## Points à relire dans les documents sources

Certaines consignes et corrections divergent sur les motifs de filtrage, les variantes de désactivation, les unités de taille, le format d’export et l’import CSV. Ces divergences restent documentées dans la correction et au checkpoint du module.
