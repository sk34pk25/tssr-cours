# Module 04 — Les variables dans les scripts

## Objectifs

Le module présente le stockage et la réutilisation de valeurs, les variables locales et d’environnement, les paramètres réservés, l’export, la saisie utilisateur et la lecture seule.

## Affecter et réutiliser une valeur

La syntaxe source est `nom=valeur`. Le support montre notamment :

```bash
errormsg="une erreur est survenue, contactez votre administrateur système"
logdir="/var/log/"
echo "$errormsg"
```

Les noms `prenom`, `nom`, `tampon`, `errormsg`, `logdir` et `NOMVAR` sont ceux des exemples du module.

## Environnement et export

Le support cite les variables `HOME`, `LOGNAME`, `HISTFILE` et `PATH`, ainsi que :

```bash
export NOMVAR
export NOMVAR=valeur
set "$LOGNAME" $(uname -n)
```

## Paramètres réservés et saisie

Les paramètres réservés attestés sont `$$`, `$?`, `$!`, `$#`, `$0`, `$1` à `$9`, `$@` et `$*`. Le support montre `echo "$1 $2"`.

Pour la saisie :

```bash
read nom
read -p "Veuillez entrer votre nom : " nom
read -p " Saisissez votre nom et prénom: " nom prenom tampon
unset tampon
```

## TP 01 — Variables d’environnement

Le TP demande d’identifier des variables liées à l’historique et aux chemins de commandes, puis de créer `script_M4TP1.sh` pour lister des fichiers selon une extension, demander un fichier et afficher son nombre de lignes, ses deux premières lignes et ses deux dernières lignes.

La correction conserve les commandes source, notamment `set | grep history | grep /`, `set | grep HIST | grep /`, `set | grep /bin`, `rep=$(pwd)`, `extension="txt"`, `ls -l *.$extension`, `nblign=$(cat $fic | wc -l )`, `debut=$(cat $fic | head -n 2)` et `fin=$(cat $fic | tail -n 2)`.

## Synthèse

M04 limite son périmètre aux variables, à l’environnement, aux paramètres réservés, à l’export, à `read`, à `unset` et aux exemples du TP. Les syntaxes documentaires ambiguës et les données de laboratoire restent signalées pour revue.

## Liens

- [TP 01 — Variables d’environnement](../../tp/11-initiation-scripting-bash/module-04/index.md)
- [Énoncé](../../tp/11-initiation-scripting-bash/module-04/tp-01-variables-environnement.md)
- [Correction](../../tp/11-initiation-scripting-bash/module-04/correction-tp-01.md)
- [Révision](../../revision/11-initiation-scripting-bash/module-04-les-variables-dans-les-scripts.md)
