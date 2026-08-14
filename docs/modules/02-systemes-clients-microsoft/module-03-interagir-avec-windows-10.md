# Module 03 — Interagir avec Windows 10

**Séquence :** Systèmes clients Microsoft  
**Importance :** socle de la progression officielle  
**Sources consolidées :** 2 support(s) de cours, 5 énoncé(s), 5 correction(s)

!!! warning "Périmètre et versions"
    Le support enseigne Windows 10. Windows 10 a atteint sa fin de support général le 14 octobre 2025 ; les manipulations restent utiles pour le laboratoire et les environnements hérités, mais un déploiement neuf doit viser une édition Windows encore prise en charge. Référence : [Cycle de vie Windows 10](https://learn.microsoft.com/en-us/lifecycle/products/windows-10-home-and-pro).

## Objectifs et compétences

- Administrer par interface graphique, CMD et PowerShell.
- Découvrir l’aide, les commandes et les cmdlets.
- Manipuler fichiers, processus et services.
- Choisir l’interface adaptée à une tâche ponctuelle ou automatisée.

!!! tip "Façon simple de le comprendre"
    Ce module sert à passer de la notion « Interagir avec Windows 10 » à une méthode que l’on peut expliquer, appliquer, vérifier et dépanner.

## Méthode de travail

1. Lire les concepts dans l’ordre du support.
2. Reproduire les exemples dans un environnement de laboratoire.
3. Noter le résultat attendu avant de modifier une configuration.
4. Vérifier avec l’outil ou la commande appropriée.
5. Revenir à l’état initial si le résultat diverge.

## Commandes repérées dans les supports

```text
Get-Command
Get-Help Get-Process -Detailed
Get-Process | Where-Object {$_.CPU -gt 10}
Get-Service | Where-Object {$_.Status -eq "Running"}
Get-ChildItem —path c:\users
Get-Command -CommandType Cmdlet
Get-Command -CommandType Cmdlet -Name Get-*
Get-Command -Type Cmdlet Get-*
Get-LocalGroup
Get-LocalGroup | select *
Get-LocalGroup -name "Utilisateurs du Bureau*" | Select SID,PrincipalSource
Get-Disk
Get-Disk | select Number,Model
Get-Disk -Number 2 | Select FriendlyName,BusType,ManuFacturer
Get-Disk | select * en amont.
Get-NetAdapter | select Name,Status,DriverDescription
Get-LocalGroupMember -Name "Administrateurs"
Get-LocalGroupMember Administrateurs
```

!!! warning
    Une commande extraite d’un support n’est pas à exécuter aveuglément. Vérifier la version, les droits, la cible et l’existence d’une sauvegarde avant toute action destructive.

## Synthèse Module 3 - Interaction Windows 10, CLI, PowerShell & Excel V2

### Synthèse - Module 3 : Interagir avec Windows 10 (GUI, CLI, PowerShell) et Outils Collaboratifs (Excel) (V2)

### 1. Interfaces d'Administration sous Windows 10

Windows 10 propose plusieurs interfaces pour l'administration et l'interaction avec le système :

Interface Graphique (GUI) : Bureau, Panneau de configuration, Paramètres Windows, Consoles MMC (mmc.exe).

Invite de commande (cmd.exe) : Shell historique hérité de MS-DOS pour l'exécution d'outils système et de scripts batch (.bat / .cmd).

PowerShell : Shell moderne orienté objet basé sur .NET, permettant d'automatiser les tâches complexes d'administration.

### 2. Commandes d'Administration CLI et PowerShell

Exemples de commandes essentielles pour interagir avec le système :

:: Commandes de base sous Invite de commande (cmd.exe)

help shutdown

shutdown /r /t 0

copy source.txt destination.txt

help copy &gt; aide_copy.txt

# Commandes et Cmdlets PowerShell

`Get-Command`

`Get-Help Get-Process -Detailed`

`Get-Process | Where-Object {$_.CPU -gt 10}`

`Get-Service | Where-Object {$_.Status -eq "Running"}`

### 3. Notions Essentielles de Microsoft Excel

Le module couvre également les fonctionnalités de calcul et d'analyse dans Excel pour l'aide au pilotage informatique :

| Catégorie | Fonctions principales | Exemple d'utilisation |

| --- | --- | --- |

| Mathématiques | SOMME, ARRONDI, MOD, QUOTIENT | =SOMME(A1:A10) |

| Texte | CONCAT, GAUCHE, DROITE, NBCAR | =CONCAT(A2; " "; B2) |

| Recherche | RECHERCHEV, RECHERCHEH, COLONNE | =RECHERCHEV(A2; TableRef; 2; FAUX) |

| Logique | SI, ET, OU, SIERREUR | =SI(ET(A2&gt;10; B2="OK"); "Valide"; "Rejeté") |

## Module 03 - Support de cours

### Systèmes clients Microsoft

#### Module 03 — Interagir avec Windows 10

#### Objectifs • Interagir avec le système

- Découvrir l’interface graphique

- Administrer le système avec la ligne de

#### commande

- Démarrer avec PowerShell

### T our d’horizon

- Système d'exploitation multi-utilisateur

- Le bureau personnalisable

- Le menu démarrer

- Clic gauche : les tuiles

- Clic droit : les principaux raccourcis

- Les bureaux supplémentaires

- TimeLine (ou l'historique de vos actions)

- Système d'exploitation multitâche

- La barre des tâches et ses raccourcis

- Windows + Tab

- Le gestionnaire des tâches

#### T our d’horizon graphique

#### La zone de notification

- Accès à la configuration

#### réseau

- Configuration rapide de la

#### connectivité

- Mode Tablette

- "Tous les paramètres"

### T our d’horizon graphique

- La zone de recherche indexée

- Le panneau de configuration

- Les consoles MMC

- Préconfigurées

- Personnalisées

#### Démonstration

### T our d’horizon — La CLI

#### TP

- Généralement, les OS disposent d'un (ou plusieurs) Shell(s)

- Microsoft Windows : Historiquement orienté GUI

- Pour certaines actions spécifiques : CLI requise

- Automatisation de tâches d'administration (scripts) : CLI requise

- Les Shells de Microsoft :

- command.com pour les OS basés sur MS-DOS (avant Win9X)

- cmd.exe pour les OS basés sur WinNT (Windows NT, 2000 et plus)

- PowerShell nativement présent sur 2008 Server et suivant

#### Outre L'interface graphique (GUI), l'interface ligne de commande (CLI)

- Le shell cmd.exe (command prompt) pour "aiguiser" le système de manière plus

#### "pointue"

- Évolution de command.com présent nativement avec MS-DOS

- Interagir avec l'OS grâce aux commandes internes au shell

- … et grâce à des commandes externes

- Interpréter des fichiers batch (script)

#### T our d’horizon — La CLI

#### Principe d'utilisation de la ligne de commande

#### C:\windows\system32&gt; help

#### prompt commande seule

#### C:\windows\system32&gt; help shutdown

#### prompt commande

#### paramètre

#### Principe d'utilisation de la ligne de commande

#### C:\windows\system32&gt; shutdown /r /t 0

#### prompt commande

#### option

#### seule

#### option et son paramètre

#### T our d’horizon — La CLI

#### Principe d'utilisation de la ligne de commande

- Le premier mot est toujours une commande

- Une option est identifiable par un /

- Chaque mot est séparé par un espace

- L'espace est un caractère spécial interprété par le système

- Le prompt est dynamique et personnalisable

- Les quotes permettent de convertir les caractères spéciaux en caractères alphanumériques

- Exemple 'Mes Documents'

- Par défaut, le résultat d'une commande s'affiche à l'écran. Possibilité de rediriger le résultat

dans un fichier à l'aide des simples chevrons &gt; et/ou des doubles chevrons &gt;&gt;

- Exemple help shutdown &gt; aide.txt enregistre l'aide détaillée de la commande shutdown

#### dans le fichier aide.txt au lieu d'afficher l'aide détaillée à l'écran

### La syntaxe de l’aide

- À l'aide ! La commande help [&lt;commande&gt;] est indispensable

- Comprendre la syntaxe d'une commande

#### C:\windows\system32&gt; help copy

#### COPY [/D] [/V] [/N] [/Y | /-Y] [/Z] [/L] [/A | /B ] source

#### [/A | /B] [+ source [/A | /B] [+ ...]] [cible [/A | /B]]

#### Notation Description

Texte sans crochet ou accolades Élément obligatoire que vous devez taper ou choisir une valeur

#### [texte entre crochet] Éléments facultatifs

#### {Texte entre accolades} Choisir un des éléments parmi ceux présents

#### Barre verticale ou "pipeline" | Séparateur d'éléments

Points de suspension … Éléments qui peuvent être répétés et utilisés plusieurs fois

#### La syntaxe de l’aide

#### Exemple

- COPY et source obligatoire

- Possibilité de choisir 0, 1 ou des options seules (/D, /N, /A ou /B car il y a un |)

- Possibilité de choisir plusieurs sources

- Pour plus de détails et exemples, consultez l'aide en ligne

#### C:\windows\system32&gt; help copy

#### COPY [/D] [/V] [/N] [/Y | /-Y] [/Z] [/L] [/A | /B ] source

#### [/A | /B] [+ source [/A | /B] [+ ...]] [cible [/A | /B]]

https://docs.microsoft.com/fr-fr/windows-server/administration/windows-commands/windows-

#### commands

### Démonstration

#### TP

### Présentation de PowerShell

- Dernier shell en date chez Microsoft

- Interpréteur de commande

- Langage de script

- Orienté objet

- S'appuie sur les bibliothèques .NET Framework

#### Présentation de PowerShell

#### Date Version Version de Windows Versions

#### disponibles

#### Novembre 2006 PowerShell 1.0 Windows Server 2008

#### Windows XP SP2 et +

#### Windows Server 2003 SP1 et +

#### Windows Server 2003R2

#### Windows Vista SP1 et +

#### Octobre 2009 PowerShell 2.0 Windows 7

#### Windows server 2008 R2

#### Windows XP SP3

#### Windows Server 2003 SP2

#### Windows Vista SP1 et +

#### Windows Server 2008 SP1 et +

#### Septembre 2012 PowerShell 3.0 (.NET 4.0 requis) Windows 8

#### Windows server 2012

#### Windows 7 SP1

#### Windows Server 2008 SP2

#### Windows Server 2008R2 SP1

#### Octobre 2013 PowerShell 4.0 (.NET 4.5 requis) Windows 8.1

#### Windows Server 2012R2

#### Windows 7 SP1

#### Windows Server 2008R2 SP1

#### Windows Server 2012

#### Septembre 2014 PowerShell 5.0 (.NET 4.5 requis) Windows 10

#### Windows 8.1

#### Windows Server 2012R2

- La console texte native

- Possibilité d'ouvrir la console avec les droits administrateurs

- Console graphique ISE (Integrated Scripting

#### Environment)

- Pour manipuler les scripts

- Des outils tiers existent et rassemblent différentes

#### consoles dans le même environnement

- Windows terminal

- VSCode

#### Présentation de PowerShell

#### $PSVersionTable: variable tableau

#### des versions de Powershell

- PSVersion : version de PowerShell

#### disponible sur le système d'exploitation

- PSCompatibleVersions :

#### Retrocompatibilité

- Les commandes PowerShell : les cmdlets

- Constituées d'un verbe et d'un nom séparé par un —

- Verbes les plus courants : Get, Set, Remove, Add, New

- Les noms dépendent du contexte d'utilisation : LocalUser, NetAdapter, Alias, variable…

- Exemple de cmdlet

- Get-Alias

- Affiche la liste des Alias PowerShell

- New-LocalUser

- Crée un nouvel utilisateur local dans l'ordinateur

#### Présentation de PowerShell

#### Les commandes PowerShell : les cmdlets

- Conçues pour remplir des tâches spécifiques

- Ne sont pas sensibles à la casse

- Comportent des paramètres (obligatoires ou optionnels)…

- … avec des arguments (aucun ou plusieurs)

- Peuvent posséder un ou plusieurs alias

`Get-ChildItem —path c:\users`

#### cmdlet paramètre argument

#### Touche Description

[Tab]/[Maj][Tab] Complétion d'un chemin, du nom de la commande, d'un paramètre et d'une valeur de paramètre [Ctrl][Espace] Liste des différentes propositions de la complétion (flèches directionnelles et [Entrée] pour choisir)

#### [Echap] Efface la ligne de commande en cours de frappe

#### [Haut]/[Bas] Défilement de l'historique des commandes

#### [Gauche]/[Droite] Déplace le curseur sur la ligne de commande en cours

#### [Home]/[Fin] Déplace le curseur en début/fin de ligne

#### [Ctrl]c Met fin à l'exécution de l'instruction courante

#### cls clear screen

#### exit Ferme la console PowerShell

#### Démonstration

### Aide de PowerShell

#### TP

- Système d'aide intégré très complet pour :

- Obtenir des informations sur l'usage des commandes

- Obtenir des informations sur les concepts de PowerShell

- PowerShell v1 et v2

- Aide intégrée nativement

- PowerShell v3 et plus

- Aide téléchargeable (sur internet, sur un serveur local) en anglais

- Avantage : mettre à jour l'aide, obtenir les dernières sections actualisées.

#### Indispensable : mettre à jour l'aide

- Posséder les privilèges d'administration

- Mise à jour par internet : Update-Help

- -force pour outrepasser la limite d'une MAJ/j

- Mise à jour pour un système déconnecté

- Prérequis : posséder un dépôt local

- Update-help —SourcePath \\chemin\vers\aide\PowerShell -UIculture en-US -credential

&lt;login&gt;

#### Aide de PowerShell

- L'aide est accessible depuis

- La cmdlet Get-Help &lt;recherche&gt;

- Help &lt;recherche&gt; affiche l'aide page par page

- Man &lt;recherche&gt; (alias de Help)

- &lt;recherche&gt; -? (disponible depuis toutes les cmdlets)

- Exemples

- Get-help Disable-LocalUser

- Affiche l'aide de la cmdlet Disable-LocalUser

- Help help

- Affiche "l'aide de l'aide" page par page

- Man about_Variables

- Affiche le manuel d'utilisation des variables PowerShell, page par page

- Help about_* affiche la liste des concepts disponibles

#### Astuces

- Get-help —Examples &lt;recherche&gt;

- N'affiche que les exemples d'utilisation de la cmdlet

- Get-Help —ShowWindow &lt;recherche&gt;

- Affiche l'aide complète dans une fenêtre séparée

- Get-Help —Online &lt;recherche&gt;

- Affiche l'aide à jour détaillée disponible sur les serveurs Internet Microsoft (navigateur

#### internet requis)

#### Démonstration

### Cmdlets de base et objets

#### TP

- La notion d'objet

- Provient du monde de la programmation

- Quelques objets PowerShell

- Une carte réseau

- Un disque dur

- Un utilisateur

- Un fichier

- Etc.

- Constitution d'un objet

- Des propriétés (des caractéristiques)

- Des méthodes (des actions)

- Un objet PowerShell s'apparente à un objet du monde réel

- Exemple : l'objet monBallon

- Objet qui possède des caractéristiques

- Une forme (sphérique, ovale, cubique …)

- Des dimensions (diamètre en cm)

- Une masse (en kg)

- Etc.

- Des actions sont réalisables sur cet objet

- Lancer

- Gonfler

- Faire rebondir

- Etc.

#### Cmdlets de base et objets

#### Comment afficher des caractéristiques de l'objet monBallon ?

- Get-monBallon

- Affiche certaines propriétés (les caractéristiques) de l'objet monBallon et leurs valeurs associées

- Toutes les autres propriétés sont présentes mais cachées pour faciliter la lecture à l'écran

- Get-monBallon | select *

- Affiche toutes les propriétés de l'objet monBallon et leurs valeurs associées

- Get-monBallon | select diamètre,forme,couleur

- N'affiche seulement que les propriétés demandées et leurs valeurs associées

- (get-monBallon).description

- Affiche la propriété description de l'objet monBallon et sa valeur

- Équivaut à Get-monBallon | select description

### Interagir avec un objet PowerShell

- Get-Command

- Cmdlet la plus importante à connaître

- Permet de découvrir toutes les commandes disponibles

- Get-command (sans paramètres ni arguments) liste toutes les commandes de PowerShell !

- Get-Command get-*

- Affiche toutes les commandes commençant par le verbe get

- Get-Command *printer*

- Affiche toutes les commandes contenant la chaîne de caractères printer

- Get-Command new-*user*

- Affiche toutes les cmdlets commençant par new ET contenant la chaîne de caractères user

- Une fois la commande trouvée, utilisez get-help pour vous l'approprier

#### Interagir avec un objet PowerShell

- Comment modifier / faire évoluer l'objet monBallon ?

- Mon ballon de basket possède une valeur erronée pour la propriété

#### Description, je veux modifier la valeur

- Set-monBallon —Nom "Basket" —Description "Ballon de Basket"

- Je veux un nouveau ballon de rugby blanc

- New-monBallon —Nom "Rugby" —Forme "ovale" —Couleur "blanc" —Description

#### "Ballon de rugby"

- Je n'ai plus besoin de mon ballon de football

- Remove-monBallon —Nom "Football"

### Démonstration

#### TP

### Conclusion

- Différentes façons de piloter un système

#### d’exploitation

- Avec l’interface graphique

- Avec la ligne de commande

- Avec PowerShell

- L’aide précieuse pour s’en sortir

- Utiliser les ressources

- Modifier le système

## Mise en pratique

- [Travaux pratiques du module](../../tp/systemes-clients/module-03/index.md)
- [Fiche de révision du module](../../revision/systemes-clients/module-03-interagir-avec-windows-10.md)

## Questions flash

1. Comment expliquer simplement « Interagir avec Windows 10 » à un collègue ?
2. Quelles étapes ou notions doivent être maîtrisées avant la manipulation ?
3. Quel contrôle permet de prouver que le résultat est correct ?
4. Quel est le premier risque ou piège à écarter ?

??? success "Éléments de réponse"
    - Administrer par interface graphique, CMD et PowerShell.
    - Découvrir l’aide, les commandes et les cmdlets.
    - Manipuler fichiers, processus et services.
    - Choisir l’interface adaptée à une tâche ponctuelle ou automatisée.

## Voir aussi

- [Présentation de la séquence](index.md)
