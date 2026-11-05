# Module 04 — Fichiers, dossiers et métacaractères

**Source disponible :** énoncés et corrections des TP du module. Aucun support théorique distinct n’est fourni.

Se repérer dans l’arborescence, créer un fichier, lire ses attributs et distinguer le contenu d’un répertoire de ses propres caractéristiques. Le TP Métacaractères mal classé dans le dossier Module 4 reste étudié au module 06, conformément à son titre interne.

**Durée des ateliers :** 45 à 60 minutes. Lire chaque énoncé avant de commencer ; employer la machine et les fichiers de formation prévus.

## 1. Savoir où l’on travaille

`pwd` affiche le chemin du répertoire courant. Les commandes de cet atelier sont sensibles à la casse : **MonPremierFichier** doit conserver ses majuscules. Un chemin commençant par `/` est absolu ; un nom seul se résout depuis le répertoire courant.

`ls -A` montre les noms présents, y compris les noms cachés, sans les entrées spéciales `.` et `..`. Cette observation répond à la question « existe-t-il des fichiers et des répertoires ? » sans créer de contenu supplémentaire.

## 2. Créer puis observer

`touch MonPremierFichier` crée le fichier s’il n’existe pas. Si ce nom existe déjà, touch modifie ses horodatages ; il ne vide pas automatiquement un fichier existant. Dans le scénario, choisir le nom demandé et vérifier que l’on part d’un nouveau fichier.

`ls -l MonPremierFichier` affiche notamment les permissions, le nombre de liens, le propriétaire, le groupe, la taille et la date. Les noms et droits visibles sont les résultats à relever sur sa machine.

## 3. Un motif de noms n’est pas une recherche dans le contenu

```bash
ls /etc/*.conf
```

Le shell développe le motif `*.conf` en noms du répertoire /etc avant de lancer ls. Il s’agit de noms terminés par .conf, sans exploration récursive de leurs contenus. Les motifs plus élaborés, leur protection et la création de l’arborescence du TP Métacaractères sont détaillés au [module 06](module-06-recherches-et-expressions-regulieres.md).

## 4. Le répertoire ou ce qu’il contient ?

| Commande | Objet observé |
|---|---|
| `ls -l /tmp` | Éléments contenus directement dans /tmp |
| `ls -ld /tmp` | Le répertoire /tmp lui-même |

L’option `-d` est donc décisive pour respecter la dernière consigne. Le support montre des permissions particulières de /tmp, avec un **t** final, le sticky bit. Dans ce répertoire partagé, ce bit limite la suppression ou le renommage des entrées selon leur propriétaire ; ce n’est pas une permission accordant tous les droits sur les fichiers.

## Ateliers complets

### TP01 — Fichiers et dossiers

#### Activité 1 — Indiquer sa position dans l’arborescence.

```bash
pwd
```

#### Activité 2 — Observer la présence de fichiers et de répertoires.

```bash
ls -A
```

#### Activité 3 — Créer un fichier vide appelé MonPremierFichier.

```bash
touch MonPremierFichier
```

#### Activité 4 — Afficher les permissions et le propriétaire de MonPremierFichier.

```bash
ls -l MonPremierFichier
```
Identifier les champs, sans recopier les valeurs de la capture comme des valeurs attendues.

#### Activité 5 — Afficher les noms terminés par .conf dans /etc.

```bash
ls /etc/*.conf
```

#### Activité 6 — Afficher les caractéristiques de /tmp lui-même, puis relever sa particularité.

```bash
ls -ld /tmp
```
L’option -d évite de lister son contenu. Observer notamment le t des permissions dans l’environnement présenté.

## Écarts et précisions du document

!!! note "Lecture de la source"
    Les permissions, propriétaires et dates de la capture illustrent le serveur source : relever ceux du laboratoire courant.

!!! note "Lecture de la source"
    Le titre du module inclut les métacaractères, mais son TP propre concerne fichiers et dossiers ; le second TP est rattaché au module06 d’après le titre écrit dans son document.

## Mini-quiz

1. Quelle commande identifie le répertoire courant ?
2. Pourquoi ls -ld /tmp respecte-t-il la consigne ?
3. Que fait le motif /etc/*.conf ?

??? note "Réponses"
    1. pwd.
    2. -d demande les attributs du répertoire lui-même.
    3. Le shell sélectionne les noms terminés par .conf directement dans /etc.

## Pour pratiquer et réviser

- [TP : énoncés et corrections](../../tp/utilisation-linux/module-04/index.md)
- [Fiche de révision](../../revision/utilisation-linux/module-04-fichiers-dossiers-et-metacaracteres.md)
- [Kahoot existant du module](../../kahoot/04-utilisation-gnu-linux-module-04-fichiers-dossiers-et-metacaracteres.md)
- [Présentation du cours](index.md)

## Provenance pédagogique

Les consignes, noms et exemples proviennent des documents de formation disponibles. Les explications, contrôles, variantes explicitement signalées et mini-quiz sont une aide pédagogique distincte de la transcription originale. Les sorties de captures sont des exemples, pas des valeurs à imposer à chaque machine.
