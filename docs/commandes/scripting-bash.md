# Commandes — Initiation au scripting Bash

**Source : Initiation au scripting Bash (supports et corrections de TP du Drive).** Lignes de commande reprises telles quelles ; seule la source de chaque bloc est indiquée. Domaines et identifiants de l’établissement masqués (`.lab`, `[masqué]`).

### Module 02 - Support de cours

```text
vi monscript.sh
chmod +x ./monscript.sh
chmod ug+x ./monscript.sh
bash -x monscript.sh
```

### M4 - Solution du TP1 - Les variables denvironnement

```text
vim script_M4TP1.sh
chmod u+x script_M4TP1.sh
```

### Module 04 - Support de cours

```text
mkdir -p "$logdir" 2>/dev/null
export NOMVAR
export NOMVAR=valeur
```

### M5 - Solutions du TP1 - Enchaînements conditionnels

```text
vim script_M5TP1.sh
mkdir -p $dossier && echo -e "$vert Répertoire '$dossier' créé.$noir"
touch $dossier/$fic && echo -e "$bleu Fichier '$fic' créé dans
cat $dossier/$fic
chmod u+x script_M5TP1.sh
```

### Module 05 - Support de cours

```text
mkdir /data ; touch /data/file1 ; cat /home/bonjour.txt
mkdir /data
touch /data/file1
cat /home/bonjour.txt
mkdir /data && touch /data/file1
mkdir ./data && touch ./data/file1
ls -l ./data/
```

### M6 - Solutions du TP 1 - Enchaînements conditionnels

```text
vim script_M6TP1.sh
```

### M6 - Solutions du TP 2 - Compte utilisateur

```text
vim script_M6TP2.sh
useradd -m
passwd $nom ;;
userdel $nom ;;
```

### Module 06 - Support de cours

```text
test condition
ls -l $rep
cat $fic
mkdir /data/perso
cp -a /home/penthium/documents/* /data/perso
touch $file
```

### M7 - Enoncé du TP 1 - Boucle until

```text
scp CheminEtNomFichierACopier Utilisateurlinux@AdresseIPLinux
scp C:\users\l.atreides\Downloads\13.sh paul@192.168.10.3
```

### M7 - Solution du TP 1 - Boucle until

```text
vim script_M7TP1.sh
```

### M7 - Solution du TP 2 - Boucle for

```text
vim script_M7TP2.sh
```

### M7 - Solution du TP 3 - Boucle while-read

```text
vim script_M7TP3.sh
```

### Module 07 - Support de cours

```text
cat Edition | while read nom prenom num
cat fic | while read nom ; do
```

### M8 - Solution du TP 1 - Fonctions

```text
vim script_M8TP1.sh
vim fonctions.fct
rm -f *.save
```

### Module 08 - Support de cours

```text
source ~/mesfonctions
```

### M05-cours-support

```text
mkdir /data Traitement
touch /data/file1 séquentiel
```

### M06-tp-solution-compte-utilisateur

```text
useradd -m -s /bin/bash $nom ;;
```

### M02-tp-solution-script-a-partir-dun-algorithme.sh

```text
ls -l *.sh
ls -l *.bash
bash --version
apt list --upgradable | grep bash
```

[Cours](../modules/11-initiation-scripting-bash/index.md)
