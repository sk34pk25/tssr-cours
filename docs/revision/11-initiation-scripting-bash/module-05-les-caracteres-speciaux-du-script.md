# Révision — Module 05 — Les caractères spéciaux du script

## Enchaîner et conditionner

Les formes attestées sont :

```bash
mkdir /data ; touch /data/file1 ; cat /home/bonjour.txt
mkdir /data && touch /data/file1
mkdir ./data 2>/dev/null || echo "Erreur de création du répertoire 'data'"
```

Le module cite également le tube `|`, le code retour `$?` et la redirection d’erreur `2>/dev/null`.

## Regrouper

```bash
(cmd1 ; cmd2)
{ cmd1 ; cmd2 ; cmd3 ; }
```

## Couleurs

Le support cite les caractères `30` à `37`, les fonds `40` à `47`, les attributs `0`, `1`, `4`, `7`, `8` et `9`, les préfixes `\033[` et `\e[`, la terminaison `m` et la remise à zéro `\033[0m`.

```bash
echo -e "voici du \033[1;32mvert \033[0m"
```

## TP 01

Le TP associe la saisie d’un dossier, `mkdir -p`, la création de `fic_M5TP1.txt`, l’écriture avec `>`, l’affichage avec `cat` et les messages colorés du scénario.

- [Cours M05](../../modules/11-initiation-scripting-bash/module-05-les-caracteres-speciaux-du-script.md)
- [TP 01](../../tp/11-initiation-scripting-bash/module-05/index.md)
