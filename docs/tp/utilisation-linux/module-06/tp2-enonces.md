# Énoncé — TP02 — Métacaractères

## Préparer l’atelier

Le support demande de suivre les vidéos du module 06 et de faire le TP précédent. Ouvrir un Bash de laboratoire et réserver l’arborescence `$HOME/Tp` à l’exercice. Identifier précisément `Sources` et `Divers` avant les opérations de suppression.

**Durée estimée dans le support**

45 à 60 minutes.

Arborescence demandée :

```text
$HOME
├── bin
└── Tp
    ├── Bourne
    ├── KornShell
    └── Divers
        ├── Sources
        ├── lib
        └── Executables
```

## Activité 1

Afficher les noms de fichiers et répertoires commençant par a, b, c ou d directement dans /etc, sans lister leur contenu.

## Activité 2

Créer en une seule commande l’arborescence bin et Tp sous $HOME, puis Bourne, KornShell, Divers et ses trois sous-répertoires.

## Activité 3

Se positionner dans Sources et créer un fichier dont le nom comporte un astérisque.

## Activité 4

Sans changer de répertoire, essayer de supprimer Sources avec rmdir et expliquer le résultat.

## Activité 5

Supprimer Divers avec rm.

## Activité 6

Depuis le répertoire personnel, lister en détail les fichiers directement dans /etc : extension .conf, six lettres, initiale consonne et lettre avant l’extension entre f et s.

## Livrables et vérifications

| Contrôle | Trace attendue |
| --- | --- |
| Arborescence | Vérifier les répertoires créés et la présence de l’astérisque littéral dans le nom demandé. |
| Suppression | Expliquer le résultat de `rmdir`, puis vérifier la disparition de `Divers` dans l’arborescence d’exercice. |
| Sélection | Contrôler l’extension et les contraintes sur les six lettres de chaque nom retenu. |

## Liens

- [Correction](tp2-corrections.md)
- [Cours du module](../../../modules/04-utilisation-gnu-linux/module-06-recherches-et-expressions-regulieres.md)
- [Fiche de révision](../../../revision/utilisation-linux/module-06-recherches-et-expressions-regulieres.md)
- [Tous les ateliers du module](index.md)
