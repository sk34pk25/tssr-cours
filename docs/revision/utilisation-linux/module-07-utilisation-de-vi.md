# Fiche de révision — Module 07 — Utilisation de Vi

Passer d’un mode à l’autre, contrôler les modifications et lire la portée d’une substitution.

## Gestes à retenir

| Besoin | Repère |
|---|---|
| Revenir au mode normal | Échap |
| Début / fin | gg / G |
| Insérer avant / après | i / a ; O / o pour une nouvelle ligne |
| Rechercher | /motif ; ?motif ; n ; N |
| Lignes | dd ; yy puis p |
| Substitution globale |  :%s/ancien/nouveau/g |
| Enregistrer et quitter | :wq |
| Configuration | .vimrc ; set number ; set tabstop=5 ; set nocompatible |

## Contrôles à savoir réaliser

| Point de contrôle | Vérification |
| --- | --- |
| Navigation et insertion | Revenir en mode normal avec Échap avant de lancer `gg`, `G` ou une recherche. Observer la ligne où `O` ou `o` ouvre l’insertion. |
| Copie et déplacement | Distinguer la suppression de la ligne avec `dd`, la copie avec `yy` et la remise en place avec `p`. Vérifier la position avant de continuer. |
| Substitutions et configuration | Lire la plage, le motif et les drapeaux. Tester les options de `.vimrc` en rouvrant le fichier dans Vim. |

## Pièges du support

- Le document écrit .virmc alors que l’énoncé demande .vimrc : la forme de travail est .vimrc.
- Quelques lignes omettent le deux-points d’entrée en commande Ex. Il est ajouté dans les exemples utilisables.
- La question 19 demande un autre séparateur ; la correction ne le change pas. La forme avec # répond à cette partie de la consigne.
- Les formes source des questions20 et21 ont une portée plus étroite que leur formulation ; les ancrages et le drapeau g sont expliqués, sans modifier le texte de la source.

## Retenir puis vérifier

**Commencer par identifier le mode actif. Pour une substitution, lire la plage avant de valider.**

**1. Comment revenir au mode normal ?**

??? success "Réponse expliquée"
    Appuyer sur Échap. On peut ensuite utiliser les déplacements et lancer une commande Ex avec deux-points.

**2. Quelle différence entre `O` et `o` ?**

??? success "Réponse expliquée"
    `O` ouvre une nouvelle ligne avant la ligne courante. `o` ouvre une ligne après.

**3. Dans `:%s/a/b/g`, à quoi servent `%` et `g` ?**

??? success "Réponse expliquée"
    `%` désigne toutes les lignes. Le drapeau `g` remplace toutes les occurrences correspondantes sur chacune d’elles.

**4. Quel changement répond à la question 19 ?**

??? success "Réponse expliquée"
    Changer le séparateur, par exemple avec `:%s#JEAN#Jean#g`, puis examiner le résultat.

## Pour pratiquer

- [Cours complet](../../modules/04-utilisation-gnu-linux/module-07-utilisation-de-vi.md)
- [Travaux pratiques](../../tp/utilisation-linux/module-07/index.md)
- [Kahoot existant du module](../../kahoot/04-utilisation-gnu-linux-module-07-utilisation-de-vi.md)
