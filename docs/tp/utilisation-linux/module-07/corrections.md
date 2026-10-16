# Correction — TP M07 : Utilisation de Vi

> **Source A :** « Solution du TP — Utilisation de Vi ». Les commandes et les
> formes documentaires sont reproduites sans normalisation.

## Activité 1

```text
vi Edition
```

## Activité 2

```text
/Dupont Jean
```

## Activité 3

```text
2e
a
-Jacques
```

## Activité 4

```text
/Dupont Pierre
w
i
Jean-
```

## Activité 5

```text
esc
gg
```

## Activité 6

```text
/Dupont
O
```

Insérer ensuite le nom et le prénom demandés par le scénario.

## Activité 7

```text
G
?Dupont
o
n
N
```

Insérer le voisin demandé, puis observer les occurrences avec `n` et `N`.

## Activité 8

```text
:wq
```

## Activité 9

```text
vi Edition
/Dupont Jean
n
cwMerlin-Duval
```

## Activité 10

```text
/Couteau Jean
dd
```

## Activité 11

```text
:g/Dupont/s//Durand/g
```

## Activité 12

```text
:g/Durand/m$
```

## Activité 13

```text
/Ben Raf
yy
p
```

## Activité 14

```text
:!date
```

## Activité 15

La solution indique :

```text
vi .virmc
i
set number
set tabstop=5
set nocompatible
```

!!! warning "NEEDS_REVIEW — nom du fichier"

    L'énoncé demande `.vimrc`, mais la solution indique `vi .virmc`. La divergence
    est conservée telle quelle.

## Activité 16

```text
:g/ Durand/s//Dupont/
```

L'espace après le premier `/` est conservé à l'identique.

## Activité 17

```text
g/Jean /s/Jean/&-Paul
```

!!! warning "NEEDS_REVIEW — préfixe documentaire"

    La forme source ne montre pas de `:` initial.

## Activité 18

```text
:g/\(Jean\)/s//\U\1/
```

## Activité 19

```text
:g/JEAN/s//Jean/
```

## Activité 20

```text
:%s/Jean/Jean-Jean/
```

## Activité 21

```text
:%s/\<[1-3]/(033)&/
```

## Activité 22

```text
g/^F/s/$/0/
```

!!! warning "NEEDS_REVIEW — préfixe documentaire"

    La forme source ne montre pas de `:` initial.

## Contrôle final

Les résultats à observer restent ceux du fichier `Edition` et du scénario de
laboratoire. Aucune commande supplémentaire ni interprétation générale Vi n'est
ajoutée à cette correction.
