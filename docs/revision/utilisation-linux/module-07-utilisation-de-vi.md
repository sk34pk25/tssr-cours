# Révision — M07 : Utilisation de Vi

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

## Se contrôler

- À quoi sert Échap avant une action ? **À revenir au mode normal.**
- Quelle différence entre O et o ? **O ouvre avant la ligne courante, o après.**
- Que signifient % et le dernier g dans :%s/a/b/g ? **Toutes les lignes, puis toutes les occurrences de chaque ligne.**
- Comment remplir la demande de changement de séparateur ? **Employer par exemple :%s#JEAN#Jean#g.**

## Pièges du support

- Le document écrit .virmc alors que l’énoncé demande .vimrc : la forme de travail est .vimrc.
- Quelques lignes omettent le deux-points d’entrée en commande Ex. Il est ajouté dans les exemples utilisables.
- La question19 demande un autre séparateur ; la correction ne le change pas. La forme avec # répond à cette partie de la consigne.
- Les formes source des questions20 et21 ont une portée plus étroite que leur formulation ; les ancrages et le drapeau g sont expliqués, sans modifier le texte de la source.

- [Cours complet](../../modules/04-utilisation-gnu-linux/module-07-utilisation-de-vi.md)
- [Travaux pratiques](../../tp/utilisation-linux/module-07/index.md)
