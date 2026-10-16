# Module 05 — Les caractères spéciaux du script

## Objectifs

Le module présente l’enchaînement et le regroupement de commandes, les tubes et redirections montrés dans les exemples, ainsi que les couleurs d’affichage.

## Enchaîner et conditionner l’exécution

Les exemples source utilisent le point-virgule, `&&` et `||` :

```bash
mkdir /data ; touch /data/file1 ; cat /home/bonjour.txt
mkdir /data && touch /data/file1
mkdir ./data && touch ./data/file1
ls -l ./data/
mkdir ./data 2>/dev/null || echo "Erreur de création du répertoire 'data'"
```

Le support montre également le tube `|`, le code retour `$?` et la redirection d’erreur `2>/dev/null`.

## Regrouper des commandes

Les deux formes attestées sont :

```bash
(cmd1 ; cmd2)
{ cmd1 ; cmd2 ; cmd3 ; }
```

La documentation source concernant les accolades reste à relire : elle annonce l’absence de sous-shell tout en mentionnant un environnement enfant.

## Couleurs d’affichage

Le support cite les codes de caractères `30` à `37`, les fonds `40` à `47` et les attributs `0`, `1`, `4`, `7`, `8` et `9`. Les séquences attestées commencent par `\033[` ou `\e[`, se terminent par `m`, et sont remises à zéro avec `\033[0m`.

```bash
echo -e "voici du \033[1;32mvert \033[0m"
```

## TP 01 — Enchaînements conditionnels

Le TP demande de saisir un dossier, de le créer, de créer `fic_M5TP1.txt`, d’y écrire un texte, d’afficher son contenu et de différencier par couleur les messages relatifs au dossier et au fichier. Les variables de scénario sont `fic`, `bleu`, `vert`, `noir` et `dossier`.

La correction conserve notamment `read -p`, `mkdir -p $dossier && echo -e ...`, `touch $dossier/$fic && echo -e ...`, `echo "Introduction du fichier fic_M5TP1.txt" > $dossier/$fic` et `cat $dossier/$fic` sans les modifier silencieusement.

## Synthèse

M05 se limite au séquencement avec `;`, à l’exécution conditionnelle avec `&&` et `||`, aux regroupements, au tube, au code retour présenté, à la redirection d’erreur, aux couleurs ANSI attestées et aux commandes du TP.

## Liens

- [TP 01 — Enchaînements conditionnels](../../tp/11-initiation-scripting-bash/module-05/index.md)
- [Énoncé](../../tp/11-initiation-scripting-bash/module-05/tp-01-enchainements-conditionnels.md)
- [Correction](../../tp/11-initiation-scripting-bash/module-05/correction-tp-01.md)
- [Révision](../../revision/11-initiation-scripting-bash/module-05-les-caracteres-speciaux-du-script.md)
