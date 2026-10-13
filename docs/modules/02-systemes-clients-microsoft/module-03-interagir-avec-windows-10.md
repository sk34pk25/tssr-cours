# Module 03 — Interagir avec Windows 10

## Objectifs

À l’issue du module, vous devez pouvoir choisir une interface adaptée à une action d’administration courante, utiliser l’aide disponible et vérifier le résultat obtenu.

- repérer les éléments utiles de l’interface graphique Windows ;
- utiliser l’invite de commandes (`cmd`) pour naviguer et manipuler des fichiers ;
- utiliser PowerShell pour découvrir des cmdlets, lire leur aide et interroger des objets du système ;
- distinguer une cmdlet, ses paramètres, ses arguments, ses alias et les objets retournés ;
- contrôler une action à partir d’une commande ou de l’interface concernée.

> Les repères Windows 10 de ce module proviennent des supports TSSR fournis. Ils décrivent le contexte pédagogique du laboratoire ; ils ne constituent pas une mise à jour de documentation produit.

## Choisir son interface

Les travaux pratiques M03 abordent trois moyens d’interagir avec le même système.

| Interface | Usage attesté dans le module | Exemple de contrôle |
|---|---|---|
| Interface graphique | Repérer et personnaliser des éléments de l’environnement, consulter des paramètres, créer une console MMC personnalisée. | Vérifier dans la fenêtre ou le paramètre concerné que le changement est visible. |
| Invite de commandes (`cmd`) | Consulter l’aide, changer de répertoire, créer, afficher, copier et lister des fichiers. | Relire le fichier créé ou afficher son contenu et le classement demandé. |
| PowerShell | Découvrir les commandes, consulter l’aide, afficher et filtrer des informations du système. | Reprendre la cmdlet avec les propriétés demandées et comparer son résultat à la consigne. |

Le choix dépend du résultat demandé. Une même action ne doit pas être présentée comme automatiquement interchangeable entre GUI, `cmd` et PowerShell.

## Repères de l’interface Windows

Le support et le TP d’interface graphique utilisent notamment le menu Démarrer, la barre des tâches, la zone de notification et les paramètres du système. Les activités demandent de repérer le nom du poste, de personnaliser certains éléments de l’environnement, de modifier des paramètres indiqués par le scénario et de créer une console MMC accessible depuis le bureau.

Une console MMC peut réunir les composants logiciels enfichables indiqués dans le TP : gestion des disques, utilisateurs et groupes locaux, ainsi que dossiers partagés. Le contrôle consiste à ouvrir la console enregistrée et à vérifier que les composants demandés y figurent.

## Travailler avec `cmd`

L’invite de commandes est utilisée dans le module pour consulter les commandes internes et leur aide, puis réaliser une suite de manipulations simples sur le système de fichiers.

### Lire l’aide avant d’agir

Les TP demandent d’afficher l’aide de `cd` et d’identifier son utilité. La première ligne de l’aide sert de synopsis : elle permet de comprendre si la commande affiche ou modifie le répertoire courant. Quand une syntaxe est incertaine, l’aide de la commande est le premier contrôle à utiliser.

### Navigation et fichiers

Les activités portent sur les opérations suivantes :

1. se placer à la racine du lecteur demandé ;
2. créer le répertoire prévu par le scénario ;
3. enregistrer la liste des commandes internes dans un fichier ;
4. afficher ce fichier afin de vérifier sa présence et son contenu ;
5. le copier vers l’emplacement demandé ;
6. lister les éléments du bureau avec le critère de tri prévu.

La vérification est partie intégrante de la procédure : une commande exécutée n’est pas, à elle seule, la preuve que le fichier attendu existe au bon endroit ni que son contenu est exploitable.

## Découvrir PowerShell

PowerShell emploie des cmdlets et retourne des objets. Les TP M03 demandent de commencer par la découverte de commandes et leur aide, puis de sélectionner les informations utiles.

### Vocabulaire utile

| Terme | Sens dans le module |
|---|---|
| Cmdlet | Commande PowerShell utilisée pour interroger ou agir sur le système. |
| Paramètre | Élément qui précise la manière dont une cmdlet doit être exécutée. |
| Argument | Valeur fournie à un paramètre ou à la commande. |
| Objet | Résultat structuré retourné par une cmdlet, dont on peut afficher certaines propriétés. |
| Alias | Nom alternatif d’une commande. Les TP demandent de les lister et d’en identifier certains. |

### Trouver une commande et son aide

Le parcours source est le suivant :

1. rechercher la cmdlet appropriée avec `Get-Command` ;
2. consulter l’aide et les exemples avec `Get-Help` ;
3. exécuter une première requête simple ;
4. examiner les propriétés disponibles ;
5. n’afficher que les propriétés explicitement demandées.

Les TP d’aide distinguent l’aide des cmdlets et les rubriques de concepts `about_*`. Ils utilisent aussi la consultation des exemples, l’aide complète et l’aide dans une fenêtre séparée lorsque le laboratoire le prévoit.

### Objets et propriétés

Les exercices appliquent cette démarche à des groupes locaux, disques, pilotes réseau, utilisateurs, fichiers, dossiers, processus et services selon le contexte de chaque VM de laboratoire. La consigne détermine les propriétés à présenter. Il ne faut donc pas déduire d’une valeur observée dans une VM de formation une propriété universelle de tous les systèmes.

## Méthode de vérification issue des TP

Pour chaque action demandée, conservez le couple **commande ou chemin suivi → résultat contrôlé** :

- après une recherche, relire la cmdlet, l’aide ou l’exemple qui justifie le choix ;
- après une création de fichier, afficher son contenu ou relister son dossier ;
- après une configuration graphique, rouvrir la fenêtre ou la console qui rend le résultat visible ;
- après une requête PowerShell, limiter l’affichage aux propriétés demandées et comparer avec la question ;
- lorsque deux environnements de laboratoire produisent des résultats différents, documenter cette différence plutôt que de la masquer.

## Synthèse

Le module M03 ne consiste pas à mémoriser une liste de commandes isolées. Il entraîne à choisir l’interface adaptée, trouver une aide fiable, formuler une commande progressive et vérifier le résultat dans le contexte réellement visé.

## Pour pratiquer et réviser

- [Présentation des cinq TP](../../tp/systemes-clients/module-03/index.md)
- [Énoncés des TP](../../tp/systemes-clients/module-03/enonces.md)
- [Corrections des TP](../../tp/systemes-clients/module-03/corrections.md)
- [Fiche de révision](../../revision/systemes-clients/module-03-interagir-avec-windows-10.md)
- [Kahoot du module](../../kahoot/02-systemes-clients-microsoft-03-interagir-avec-windows-10.md)
- [Présentation de la formation](index.md)
