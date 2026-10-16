# Module 06 — Recherches et expressions régulières

> Cette page est une synthèse limitée aux deux TP et à leurs solutions. Le TP2 est
> historiquement rangé dans Drive sous *Module 4 / TP2*, mais ses titres internes et
> ses prérequis l'identifient explicitement comme un TP du module 06.

## Objectifs du module

- Rechercher dans le fichier `Edition` et dans des chemins indiqués par le TP1.
- Rechercher des fichiers et des répertoires avec les formes `find` fournies.
- Réaliser les manipulations de noms et d'arborescence demandées par le TP2.

## TP1 — Recherches et regex

Le TP demande de rechercher `Dupont` dans `Edition`, puis la même chaîne sans tenir
compte de la casse. Il demande aussi d'afficher les lignes non vides du même fichier.

```bash
grep Dupont Edition
grep -i dupont Edition
grep -v '^$' Edition
```

Les recherches suivantes sont demandées dans les chemins et avec les motifs exacts du
scénario :

```bash
grep -sl localhost /etc/*
find /etc -type f -name "ho*"
find ~ -type d
find ~ -type f -name "*txt" -exec cp {} {}.save \;
```

Les résultats obtenus dépendent des fichiers et de l'environnement de laboratoire.

## TP2 — Spécificités Bash / métacaractères

Le second TP fait utiliser une sélection de noms dans `/etc` et une arborescence sous
`$HOME`. L'arborescence source est créée en une seule commande :

```bash
ls -d /etc/[a-d]*
mkdir -p bin Tp/{Bourne,KornShell,Divers/{Sources,lib,Executables}}
```

Depuis `Tp/Divers/Sources/`, le scénario demande la commande suivante :

```bash
touch fic*ier
```

Son résultat dépend du contenu du répertoire au moment de l'expansion ; cette forme est
conservée telle qu'elle apparaît dans la source.

Le TP demande ensuite une tentative avec `rmdir` sur un répertoire non vide. La solution
constate l'échec attendu de cette tentative et utilise ensuite les commandes suivantes :

```bash
rm -r $HOME/Tp/Divers/Sources/
rm -r ../../Divers/
```

Enfin, la source fournit une sélection précise combinant négation, plages et extension :

```bash
ls -ld /etc/[!aeiouyAEIOUY][a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z][f-s].conf
```

## Vérifications

- Relire les lignes trouvées par les commandes `grep` du TP1.
- Vérifier les fichiers et répertoires demandés par chaque commande `find`.
- Dans le TP2, constater l'échec de `rmdir` sur le répertoire non vide avant la
  suppression demandée avec `rm -r`.

## Synthèse

Les deux TP font pratiquer des recherches ciblées, des formes précises de `find`, une
arborescence source et les sélections de noms indiquées dans les documents TSSR. Ils ne
constituent pas une théorie générale des expressions régulières ou du shell Bash.

## Pour poursuivre

- [TP M06 — index](../../tp/utilisation-linux/module-06/index.md)
- [TP1 — énoncé](../../tp/utilisation-linux/module-06/tp1-enonces.md) · [correction](../../tp/utilisation-linux/module-06/tp1-corrections.md)
- [TP2 — énoncé](../../tp/utilisation-linux/module-06/tp2-enonces.md) · [correction](../../tp/utilisation-linux/module-06/tp2-corrections.md)
- [Fiche de révision M06](../../revision/utilisation-linux/module-06-recherches-et-expressions-regulieres.md)
- [Kahoot M06](../../kahoot/04-utilisation-gnu-linux-module-06-recherches-et-expressions-regulieres.md)

## Provenance

- **A — sources TSSR :** énoncé et solution TP1 *Recherches et regex* ; énoncé et
  solution TP2 *Les métacaractères*, rattachés pédagogiquement à M06.
- **B — structuration pédagogique :** synthèse web limitée aux commandes, étapes et
  observations attestées, sans apport externe.
