# Module 04 — Fichiers et dossiers

> **Périmètre :** cette page reprend exclusivement le TP1 *Fichiers et dossiers* attesté pour le module.

## Objectifs du TP

Le TP demande de repérer sa position dans l’arborescence, d’observer les fichiers et répertoires présents, de créer un fichier vide et d’effectuer les contrôles demandés sur ce fichier, sur `/etc` et sur `/tmp`.

Durée indicative attestée : **45 à 60 minutes**.

## Position dans l’arborescence

```bash
pwd
```

`pwd` répond à la première question du TP : il affiche le répertoire où la session est positionnée.

## Fichiers et répertoires présents

```bash
ls -A
```

Le TP demande d’observer avec cette commande l’existence de fichiers et de répertoires.

## Créer puis observer un fichier

```bash
touch MonPremierFichier
ls -l MonPremierFichier
```

Après avoir créé le fichier vide demandé, observez les permissions et le propriétaire affichés pour ce fichier. Cette page ne généralise pas les règles de permissions au-delà de cette observation source.

## Fichiers `.conf` dans `/etc`

```bash
ls /etc/*.conf
```

La consigne utilise ce motif précis pour afficher les fichiers de `/etc` dont le nom se termine par `.conf`.

## Caractéristiques de `/tmp`

```bash
ls -ld /tmp
```

Le TP demande les caractéristiques détaillées de `/tmp`, sans en afficher le contenu.

## Vérifications attendues

- relever la position courante avec `pwd` ;
- observer l’affichage de `ls -A` ;
- créer puis contrôler `MonPremierFichier` ;
- relever les fichiers affichés par `ls /etc/*.conf` ;
- relever les caractéristiques de `/tmp` sans lister son contenu.

## Pour poursuivre

- [TP1 — Fichiers et dossiers](../../tp/utilisation-linux/module-04/index.md)
- [Énoncé TP1](../../tp/utilisation-linux/module-04/enonces.md)
- [Correction TP1](../../tp/utilisation-linux/module-04/corrections.md)
- [Fiche de révision M04](../../revision/utilisation-linux/module-04-fichiers-dossiers-et-metacaracteres.md)
- [Kahoot M04](../../kahoot/04-utilisation-gnu-linux-module-04-fichiers-dossiers-et-metacaracteres.md)

## Provenance

- **A — source TSSR :** *Enoncé du TP 1 - Fichiers et dossiers.pdf* et *Solution du TP 1 - Fichiers et dossiers.pdf*.
- **B — structuration pédagogique :** mise en forme web fidèle aux objectifs, questions et commandes des deux documents, sans apport externe.
