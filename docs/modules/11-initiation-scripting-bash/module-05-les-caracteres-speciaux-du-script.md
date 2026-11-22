# Module 05 — Les caractères spéciaux du script

Les parties ci-dessous reprennent le cours original, dans le même ordre. Les encadrés et les schémas répètent ses formulations.

## Parcours de lecture

1. Support · Module 05 - Support de cours · 10 pages transcrites
2. Module 05 – Les caractères spéciaux du script
3. Objectifs
4. Enchaînement de
5. commandes
6. Regroupements
7. de commandes
8. Utiliser les couleurs
9. dans le Shell
10. Énoncé · M5 - Enoncé du TP1 - Enchaînements conditionnels · 2 pages transcrites
11. Enchaînements conditionnels
12. Correction · M5 - Solutions du TP1 - Enchaînements conditionnels · 2 pages transcrites
13. Enchaînements conditionnels

**Visuel externe**

```mermaid
flowchart TD
    N1["Support · Module 05 - Support de cours · 10 pages transcrites"]
    N2["Module 05 – Les caractères spéciaux du script"]
    N3["Objectifs"]
    N4["Enchaînement de"]
    N5["commandes"]
    N6["Regroupements"]
    N7["de commandes"]
    N8["Utiliser les couleurs"]
    N9["dans le Shell"]
    N10["Énoncé · M5 - Enoncé du TP1 - Enchaînements conditionnels · 2 pages transcrites"]
    N11["Enchaînements conditionnels"]
    N12["Correction · M5 - Solutions du TP1 - Enchaînements conditionnels · 2 pages transcrites"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
    N5 --> N6
    N6 --> N7
    N7 --> N8
    N8 --> N9
    N9 --> N10
    N10 --> N11
    N11 --> N12
```

SOURCE DRIVE · TRANSCRIPTION DU SUPPORT

Le contenu des documents du dossier TSSR est transcrit ci-dessous, page par page. Les textes et tableaux sont intégrés à la page Web. Aucun fichier PDF, aucune diapositive entière ni aucune reproduction de page n’est affiché. Seuls des croquis ou visuels isolés et vérifiés peuvent accompagner la transcription. Les versions et les consignes restent celles des supports de formation. Les compléments IA sont conservés dans leur onglet distinct.

## Support · Module 05 - Support de cours · 10 pages transcrites

!!! note "À retenir"
    Le texte, les tableaux et le code sont transcrits d’après le PDF de formation.

Le texte, les tableaux et le code sont transcrits d’après le PDF de formation. Les sauts de ligne suivent la présentation du support. Les exemples historiques sont commentés dans le cours optimisé.

## Page 1

## Module 05 – Les caractères spéciaux du script

## Objectifs

!!! note "À retenir"
    Savoir enchaîner plusieurs commandes Conditionner une commande au résultat d'une autre Regrouper les commandes Colorier la console

**Visuel externe**

```mermaid
flowchart LR
    N1["Savoir enchaîner plusieurs commandes"]
    N2["Conditionner une commande au résultat d'une autre"]
    N3["Regrouper les commandes"]
    N4["Colorier la console"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
```

- Savoir enchaîner plusieurs commandes
- Conditionner une commande au résultat d'une autre
- Regrouper les commandes
- Colorier la console

## Page 2

## Enchaînement de

## commandes

### Enchaînement de commandes

!!! note "À retenir"
    2 types d’enchaînement de commandes Inconditionnel Conditionnel

2 types d’enchaînement de commandes

Inconditionnel Conditionnel

## Page 3

### Enchaînement inconditionnel

### ;

### L’enchaînement sans condition

!!! note "À retenir"
    Pour enchaîner des commandes quel que soit le résultat de leur exécution, on utilise le « ; » entre celles-ci.

!!! example "Exemple"
    Dans cet exemple, l’utilisateur n’a pas le droit de créer un répertoire à la racine (mkdir en erreur).

Pour enchaîner des commandes quel que soit le résultat de leur exécution, on utilise le « ; » entre celles-ci.

```
$ mkdir /data ; touch /data/file1 ; cat /home/bonjour.txt
mkdir: cannot create directory `./data': Permission denied
touch: cannot touch `./data/file1': No such file or directory
Bonjour le monde !
```

- Dans cet exemple, l’utilisateur n’a pas le droit de créer un répertoire à la racine (mkdir en erreur).
- La commande de création d’un fichier dans le répertoire échoue aussi (touch en erreur).
- La dernière commande (sans lien avec les précédentes) aboutit.

### Enchaînement inconditionnel

### L’enchaînement sans condition ;

!!! note "À retenir"
    Dans un script, le traitement des commandes est séquentiel.

Dans un script, le traitement des commandes est séquentiel. Le « ; » est substitué par un retour à la ligne.

```
$ mkdir /data ; touch /data/file1 ; cat /home/bonjour.txt
```

```
mkdir /data
```

Traitement

séquentiel

```
touch /data/file1
cat /home/bonjour.txt
```

## Page 4

### Enchaînement conditionnel

### Le “et” logique &&

!!! note "À retenir"
    L’opérateur « && » conditionne l’enchaînement de commandes au résultat d’exécution positif de la commande précédente.

L’opérateur « && » conditionne l’enchaînement de commandes au résultat d’exécution positif de la commande précédente.

- Cette structure peut se traduire par :

Si la commande aboutit alors je fais la suivante.

```
$ mkdir /data && touch /data/file1
mkdir: cannot create directory `./data': Permission denied
$ mkdir ./data && touch ./data/file1
$ ls -l ./data/
-rw-r--r-- 1 Gilles Gilles 0 2021-12-26 02:12 file1
```

### Enchaînement conditionnel

### Le “et” logique &&

!!! note "À retenir"
    Le système s’appuie sur le code retour de la commande précédente (variable réservée $?) : Si $?

Le système s’appuie sur le code retour de la commande précédente (variable réservée $?) :

- Si $? = 0 (pas d’erreur) : alors la commande suivante est exécutée
- Si $? ≠ 0 (erreur) : alors la commande suivante n’est pas exécutée

## Page 5

### Enchaînement conditionnel

### Le “ou” logique ||

- L’opérateur « || » conditionne l’enchaînement de commandes à l’échec d’exécution de la commande précédente.
- Cette structure peut se traduire par : Si la commande n’a pas abouti alors je fais la suivante.

```
mkdir ./data 2>/dev/null || echo "Erreur de création du répertoire 'data'"
Erreur de création du répertoire 'data'
```

### Enchaînement conditionnel

### Le “et” logique &&

Le système s’appuie sur le code retour de la commande précédente (variable réservée $?) :

- Si $? = 0 (pas d’erreur) : alors la commande suivante n’est pas exécutée
- Si $? ≠ 0 (erreur) : alors la commande suivante est exécutée

## Page 6

### Les caractères spéciaux du script

Démo

Enchaînement conditionnel et inconditionnel de commandes

## Regroupements

## de commandes

## Page 7

### Les regroupements de commandes

**Visuel externe**

```mermaid
flowchart LR
    N1["Les regroupements de commandes peuvent être utilisés pour :"]
    N2["Exécuter plusieurs commandes dans un même environnement."]
    N3["Rediriger le résultat de plusieurs commandes vers un fichier ou un tube."]
    N1 --> N2
    N2 --> N3
```

- Les regroupements de commandes peuvent être utilisés pour :
- Exécuter plusieurs commandes dans un même environnement.
- Rediriger le résultat de plusieurs commandes vers un fichier ou un tube.
- Deux syntaxes de regroupement de commandes sont utilisables : (« regroupement ») et \{« regroupement »\}.

### Les regroupements de commandes

### Regroupement avec création de sous-shell

- Pour regrouper dans un environnement enfant l’exécution de plusieurs commandes, on utilise la syntaxe suivante :

```
$ (cmd1 ; cmd2)
```

- Dans un script, pour plus de lisibilité, le regroupement sera écrit ainsi :

```
(
   cmd1
   cmd2
)
```

Exemple :

```
$ (ls /bin/ ; ls /usr/bin) | wc –l
```

pour afficherle nombretotal de fichiers contenusdans /bin et /usr/bin

## Page 8

### Les regroupements de commandes

### Regroupement sans création de sous-shell

- Pour regrouper dans un environnement enfant l’exécution de plusieurs commandes, on utilise la syntaxe suivante :

```
$ { cmd1 ; cmd2 ; cmd3 ; }
```

À la difference de la syntaxe du (), un “;” doit être mis juste avant l’accolade fermante. Ne pas oublier le point-virgule suivant la dernière commande et les espaces après et avant les accolades.

- Dans un script, pour plus de lisibilité, le regroupement sera écrit ainsi :

```
{
   cmd1
   cmd2
}
```

## Utiliser les couleurs

## dans le Shell

## Page 9

### Utiliser les couleurs dans le Shell

- Il est possible d’utiliser quelques couleurs dans le Shell ou dans les scripts.
- Elles peuvent être utiles pour mettre en valeur des informations importantes.

| Couleur | Caractères | Fond |
| --- | --- | --- |
| Noir | 30 | 40 |
| Rouge | 31 | 41 |
| Vert | 32 | 42 |
| Jaune | 33 | 43 |
| Bleu | 34 | 44 |
| Magenta | 35 | 45 |
| Cyan | 36 | 46 |
| Gris clair | 37 | 47 |

| Code | Attribut des caractères |
| --- | --- |
| 0 | aucun |
| 1 | gras |
| 4 | souligné |
| 7 | inversé |
| 8 | invisible |
| 9 | barré |

### Utiliser les couleurs dans le Shell

**Visuel externe**

```mermaid
flowchart LR
    N1["Pour coloriser une information, les codes couleur seront à encadrer pour :"]
    N2["Annoncer la couleur : \033( ou \e("]
    N3["Finir la définition de couleur : m"]
    N4["Remettre la valeur initiale : \033(0m"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
```

- Pour coloriser une information, les codes couleur seront à encadrer pour :
- Annoncer la couleur : \033[ ou \e[
- Finir la définition de couleur : m
- Remettre la valeur initiale : \033[0m

```
$ echo -e "voici du \033[1;32mvert\033[0m"
```

Exemple

```
voici du vert
```

## Page 10

### Les caractères spéciaux du script

Démo

Les couleurs dans le shell

Référence du document : 1eRNrkmTjYjrApMM5-dm81IiX4craP22S · SHA-256 57232cfa34197b31…

## Énoncé · M5 - Enoncé du TP1 - Enchaînements conditionnels · 2 pages transcrites

Le texte, les tableaux et le code sont transcrits d’après le PDF de formation. Les sauts de ligne suivent la présentation du support. Les exemples historiques sont commentés dans le cours optimisé.

## Page 1

## Enchaînements conditionnels

### TP1 du Module 05 - Les caractères spéciaux du Shell

**Visuel externe**

```mermaid
flowchart LR
    N1["Le script demandera tout d’abord la saisie d’un nom de dossier"]
    N2["Puis, il créera automatiquement dans le dossier un fichier nommé fic_M5TP1.txt"]
    N3["Renseignera automatiquement le contenu suivant dans le fichier avec la commande"]
    N4["Affichera le contenu du fichier (et vérifier la bonne insertion du texte)"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
```

Avant de démarrer ce TP, il convient d’avoir suivi les modules 1 à 5.

Objectifs

Créer un script Shell utilisant des enchainements de commandes conditionnels.

Énoncé

Réaliser un script Shell effectuant des actions automatisées :

- Le script demandera tout d’abord la saisie d’un nom de dossier

o En réalisera la création et confirmera la bonne création avec un message en vert

- Puis, il créera automatiquement dans le dossier un fichier nommé fic_M5TP1.txt

o Le nom de ce fichier sera stocké dans une variable déclarée manuellement en début de

script

o La bonne création du fichier sera confirmée par un message de couleur bleu

- Renseignera automatiquement le contenu suivant dans le fichier avec la commande

```
echo "Introduction du fichier fic_M5TP1.txt" > $dossier/$fic
```

- Affichera le contenu du fichier (et vérifier la bonne insertion du texte)

Exemple de visuel possible :

```
$ ./script_M5TP1.sh
Veuillez saisir un nom de dossier à créer: doss_M5TP1
```

```
Création du dossier : doss_M5TP1
-----------------------------
Répertoire ‘doss_M5TP1’ créé.
```

```
Création du fichier : fic_M5TP1.txt
-----------------------------
Fichier 'fic_M5TP1.txt' créé dans ‘doss_M5TP1’.
```

```
Contenu du fichier :
```

## Page 2

```
------------------
Introduction du fichier fic_M5TP1.txt
```

Référence du document : 1T4tULWfrLnoXv7mn9g9Y0fwZKh4gQ7I0 · SHA-256 3e5f6ffe06b3b28a…

## Correction · M5 - Solutions du TP1 - Enchaînements conditionnels · 2 pages transcrites

Le texte, les tableaux et le code sont transcrits d’après le PDF de formation. Les sauts de ligne suivent la présentation du support. Les exemples historiques sont commentés dans le cours optimisé.

Correction originale : à consulter après avoir tenté l’exercice.

## Page 1

## Enchaînements conditionnels

### Solutions - TP1 du Module 05 - Les caractères spéciaux du Shell

- Créer et éditer un nouveau fichier script nommé script_M5TP1.sh

```
vim script_M5TP1.sh
```

- Y ajouter les lignes suivantes :

```
#! /bin/bash
# M5 - Solution du TP1
# Définition des variables
fic=’fic_M5TP1.txt’
bleu='\033[0;34m'
vert='\033[0;32m'
noir='\033[0m' # Pas de couleur
# Demande de saisie du nom de dossier à créer
read -p "Veuillez saisir un nom de dossier à créer : " dossier
# Enchaînement de commandes avec des messages colorés
echo ""
echo "Création du dossier : $dossier"
echo "------------------------------"
mkdir -p $dossier && echo -e "$vert Répertoire '$dossier' créé.$noir"
echo ""
echo "Création du fichier : $fic"
echo "--------------------------"
touch $dossier/$fic && echo -e "$bleu Fichier '$fic' créé dans
'$dossier'.$noir"
# Insertion d’un texte dans le fichier
echo "Introduction du fichier fic_M5TP1.txt" > $dossier/$fic
# Affichage du contenu du fichier
echo ""
echo "Contenu du fichier :"
echo "------------------"
cat $dossier/$fic
# Fin du script
```

- Rendre exécutable le fichier

```
chmod u+x script_M5TP1.sh
```

## Page 2

- Tester le script

Référence du document : 1n-768pBvhRPHlJ6be79OaNssief9kgBD · SHA-256 8d59f53e520f5a86…

## Fiche de synthèse

Les lignes reprennent les titres du cours et la première phrase de chaque partie.

| Partie | Repère du cours |
| --- | --- |
| Support · Module 05 - Support de cours · 10 pages transcrites | Le texte, les tableaux et le code sont transcrits d’après le PDF de formation. |
| Objectifs | Savoir enchaîner plusieurs commandes Conditionner une commande au résultat d'une autre Regrouper les commandes Colorier la console |
| Énoncé · M5 - Enoncé du TP1 - Enchaînements conditionnels · 2 pages transcrites | Le texte, les tableaux et le code sont transcrits d’après le PDF de formation. |
| Correction · M5 - Solutions du TP1 - Enchaînements conditionnels · 2 pages transcrites | Le texte, les tableaux et le code sont transcrits d’après le PDF de formation. |
