# Fiche de révision — Module 07 — Utilisation de Vi

> **Sources A :** énoncé et solution du TP « Utilisation de Vi ». Les commandes
> ci-dessous sont limitées aux formes réellement présentes dans ces documents.

## Ouvrir, chercher et se déplacer

```text
vi Edition
/Dupont Jean
?Dupont
n
N
2e
w
gg
G
```

## Insérer et modifier

```text
i
a
o
O
esc
cwMerlin-Duval
dd
yy
p
```

## Enregistrer, commande externe et réglages

```text
:wq
:!date
set number
set tabstop=5
set nocompatible
```

## Commandes globales attestées

```text
:g/Dupont/s//Durand/g
:g/Durand/m$
:g/ Durand/s//Dupont/
g/Jean /s/Jean/&-Paul
:g/\(Jean\)/s//\U\1/
:g/JEAN/s//Jean/
:%s/Jean/Jean-Jean/
:%s/\<[1-3]/(033)&/
g/^F/s/$/0/
```

## Points à vérifier dans les sources

- `.vimrc` est cité dans l'énoncé ; `vi .virmc` est indiqué dans la solution.
- `g/Jean /s/Jean/&-Paul` et `g/^F/s/$/0/` sont documentés sans `:` visible.
- `:g/ Durand/s//Dupont/` contient un espace après le premier `/`.

Ces formes sont conservées comme **NEEDS_REVIEW** : elles ne sont pas
normalisées dans cette fiche.

## Liens

- [Cours M07](../../modules/04-utilisation-gnu-linux/module-07-utilisation-de-vi.md)
- [TP et énoncé](../../tp/utilisation-linux/module-07/enonces.md)
- [Correction](../../tp/utilisation-linux/module-07/corrections.md)
- [Kahoot M07](../../kahoot/04-utilisation-gnu-linux-module-07-utilisation-de-vi.md)
