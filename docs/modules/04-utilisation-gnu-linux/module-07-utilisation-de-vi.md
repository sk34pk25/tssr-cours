# Module 07 — Utilisation de Vi

> **Sources A :** énoncé et solution du TP « Utilisation de Vi ». Cette page
> structure uniquement les activités attestées par ces deux documents. Les vidéos
> M07, le TP précédent et le fichier `Edition` sont cités par le scénario, mais ne
> sont pas fournis dans le dossier Drive M07.

## Objectifs du TP

- Ouvrir le fichier `Edition` avec `vi`.
- Rechercher, parcourir et modifier les occurrences indiquées dans le scénario.
- Enregistrer le travail, exécuter la commande externe demandée et appliquer les
  réglages de configuration cités par les sources.

## Ouverture, recherches et navigation

Le TP ouvre le fichier avec :

```text
vi Edition
```

Les recherches et déplacements explicitement utilisés sont :

```text
/Dupont Jean
/Dupont Pierre
/Dupont
?Dupont
n
N
2e
w
gg
G
```

Dans les activités, ces commandes servent à retrouver les personnes ou les zones
du fichier demandées avant une modification. `n` et `N` permettent d'observer les
occurrences recherchées dans le scénario.

## Insertion et modification

Les formes d'insertion présentes dans le TP sont :

```text
i
a
o
O
esc
```

Les activités de modification emploient également :

```text
cwMerlin-Duval
dd
yy
p
```

Chaque commande est utilisée dans un exercice précis : modifier un nom, supprimer
une ligne, puis copier et insérer la ligne demandée.

## Sauvegarde et sortie

La forme attestée pour enregistrer et quitter est :

```text
:wq
```

## Commandes globales du TP

Les formes ci-dessous sont reproduites telles qu'elles figurent dans les sources :

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

!!! warning "Formes documentaires à conserver"

    Les deux commandes sans préfixe `:` visible, ainsi que l'espace dans
    `:g/ Durand/s//Dupont/`, sont conservés à l'identique. Les documents ne
    permettent pas de les normaliser.

## Commande externe et configuration

La commande externe demandée est :

```text
:!date
```

Les réglages cités sont :

```text
set number
set tabstop=5
set nocompatible
```

!!! warning "NEEDS_REVIEW — fichier de configuration"

    L'énoncé mentionne `.vimrc`, tandis que la solution indique `vi .virmc`.
    Cette divergence est conservée sans correction silencieuse.

## Vérifications et synthèse

Les vérifications du TP consistent à retrouver les occurrences demandées, à
observer les modifications réalisées dans `Edition`, puis à enregistrer avec
`:wq`. Les commandes globales, la commande externe et les réglages sont des
activités distinctes du même scénario.

## Liens du module

- [TP M07 — index](../../tp/utilisation-linux/module-07/index.md)
- [Énoncé du TP](../../tp/utilisation-linux/module-07/enonces.md)
- [Correction du TP](../../tp/utilisation-linux/module-07/corrections.md)
- [Fiche de révision](../../revision/utilisation-linux/module-07-utilisation-de-vi.md)
- [Kahoot M07](../../kahoot/04-utilisation-gnu-linux-module-07-utilisation-de-vi.md)
- [Présentation de la séquence](index.md)

*A — sources TSSR M07 ; B — organisation pédagogique fidèle aux activités
attestées, sans ajout de théorie générale Vi.*
