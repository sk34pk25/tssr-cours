# Module 02 — Écriture des scripts

## Objectifs

Le module présente la création d’un script Bash, le choix de son interpréteur, l’autorisation d’exécution, les commentaires et le suivi de l’exécution.

## Créer et identifier un script

Le support montre l’ouverture d’un fichier avec `vi monscript.sh`, puis un script minimal dont l’interpréteur est indiqué par :

```bash
#!/bin/bash
```

Il présente aussi `echo Hello world`, un commentaire introduit par `#`, ainsi que les éléments `vim`, `which`, `read nom`, `read` utilisé comme pause, `$nom` et `$HOSTNAME`.

Un exemple historique d’en-tête mentionne auteur, date, description, version et usage. Il est présenté comme un exemple du support, non comme une obligation générale.

## Autoriser et suivre l’exécution

Les commandes attestées pour rendre le script exécutable sont :

```bash
chmod +x ./monscript.sh
chmod ug+x ./monscript.sh
```

Le support montre le suivi de l’exécution avec :

```bash
bash -x monscript.sh
```

## TP 02 — Script à partir d’un algorithme

Le TP attesté est numéroté **TP2**. Il demande un script qui affiche un accueil, liste des scripts du répertoire courant, insère une ligne vide, affiche la version de Bash, recherche des emplacements relatifs à Bash et indique si une mise à jour est disponible.

La solution source utilise les commandes suivantes, conservées telles quelles :

```bash
ls -l *.sh
ls -l *.bash
bash --version
whereis bash
apt list --upgradable | grep bash
```

Les commandes dépendent du contexte du laboratoire. Elles ne sont pas généralisées au-delà du TP.

## Synthèse

Le module relie un fichier de script, l’interpréteur, les permissions d’exécution, les commentaires et l’observation de l’exécution. Il ne fournit ni argument positionnel, ni condition, ni boucle, ni fonction dans la solution TP2.

## Liens du module

- [TP 02 — Script à partir d’un algorithme](../../tp/11-initiation-scripting-bash/module-02/index.md)
- [Énoncé TP2](../../tp/11-initiation-scripting-bash/module-02/tp-02-script-a-partir-d-un-algorithme.md)
- [Correction TP2](../../tp/11-initiation-scripting-bash/module-02/correction-tp-02.md)
- [Fiche de révision](../../revision/11-initiation-scripting-bash/module-02-ecriture-des-scripts.md)
