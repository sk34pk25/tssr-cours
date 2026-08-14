# Corrections — Module 03 — Interagir avec Windows 10

!!! warning
    Une correction décrit le contexte du laboratoire. Comparer la logique et les contrôles avant de reprendre une valeur, une version ou un chemin dans un autre environnement.

## Solution du TP - Devenir autonome avec PowerShell

### Systèmes Clients Microsoft

#### Devenir autonome avec

#### PowerShell

#### TP du Module 03 — Interagir avec Windows 10

Sur Win10-XX, recherchez les commandes adaptées pour les besoins suivants

- À l'aide d'une console PowerShell, afficher les commandes disponibles sur le système

`Get-Command`

- À l'aide de la commande précédente, n'afficher que les cmdlets

`Get-Command -CommandType Cmdlet`

- N'afficher que les cmdlets dont le verbe est Get

`Get-Command -CommandType Cmdlet -Name Get-*`

#### ou

`Get-Command -Type Cmdlet Get-*`

- Quelle cmdlet permet d'afficher la liste des groupes locaux présents sur le système ?

`Get-LocalGroup`

#### On peut trouver cette commande en faisant un Get-Command Get-*group*

- Quelles sont les 2 propriétés des groupes locaux que le système affiche par défaut ?

#### Les deux propriétés sont Name et Description

- Quelles sont les autres propriétés des groupes locaux qui ne sont pas affichés par le

#### système ?

`Get-LocalGroup | select *`

Il y a trois autres propriétés non affichées par défaut par le système : SID, PrincipalSource et

#### ObjectClass

- Afficher le SID et la source principale du groupe Utilisateurs du bureau à distance

`Get-LocalGroup -name "Utilisateurs du Bureau*" | Select SID,PrincipalSource`

#### Sur Discovery, recherchez les commandes adaptées pour les besoins

#### suivants

- Quelle commande permet d'afficher les disques durs de la VM Discovery ? Combien de

#### disques durs possède la VM ?

`Get-Disk`

#### La VM possède 4 disques durs

- Afficher le numéro et le modèle des disques durs présent sur la VM Discovery

`Get-Disk | select Number,Model`

Pour la propriété Model, qui n'est pas une propriété affichée par défaut, nous pouvons la trouver en faisant la commande Get-Disk | select * en amont.

- N'afficher que le nom, le type de bus et le fabricant du disque numéro 2

`Get-Disk -Number 2 | Select FriendlyName,BusType,ManuFacturer`

Nous pouvons trouver les propriétés Nom, type de bus et fabricant à l'aide de la commande

`Get-Disk | select * en amont.`

- Afficher le nom, le statut et la description du pilote de l'adaptateur réseau de la VM

`Get-NetAdapter | select Name,Status,DriverDescription`

- Afficher les membres du groupe local Administrateurs de la VM Discovery

`Get-LocalGroupMember -Name "Administrateurs"`

#### Ou

`Get-LocalGroupMember Administrateurs`

- Afficher les membres du groupe local Administrateurs de la VM Discovery, mais cette

fois-ci, le résultat devra être redirigé dans le fichier AdminMembers.txt, lui -même

#### contenu dans le dossier C:\Users

`Get-LocalGroupMember -Name "Administrateurs" &gt; C:\Users\AdminMembers.txt`

#### pour vérifier la présence du fichier et de son contenu

`Get-ChildItem c:\Users`

pour lister le contenu du dossier C:\Users (AdminMembers.txt doit être présent)

`Get-Content c:\Users\AdminMembers.txt`

#### pour afficher le contenu du fichier texte à l'écran

## Solution du TP - Manipuler l_aide de PowerShell

### Systèmes Clients Microsoft

#### Manipuler l’aide de

#### PowerShell

#### TP du Module 03 — Interagir avec Windows 10

#### Sur Discovery, à l’aide de PowerShell

#### Affichez l'aide complète de la cmdlet Get-Alias

- Quelle cmdlet avez-vous utilisée ?

`Get-Help -Full Get-Alias`

#### Un Get-Help Get-Alias -ShowWindow est aussi possible

#### Sur Win10-XX, à l'aide de PowerShell

#### Affichez l'aide complète de la cmdlet Get-Alias

- Pourquoi existe-t-il une si grande différence entre les résultats des cmdlets de ces deux

#### VMs ?

Après avoir effectué la commande sur Win10 -XX, nous remarquons qu’elle semble moins fournie. Les exemples ne sont pas présents. On observe surtout la présence d’une section REMARQUES à la fin, qui indique qu’il faut télécharger les fichiers d’aide.

- Mettez à jour l'aide de PowerShell

  - Vérifiez, à l'aide de votre interface graphique, que les mis es à jour Windows

Update sont bien reportées à 35 jours au moins. Reportez-les le cas échéant. Rechercher &gt; Options avancées de Windows Update &gt; Options avancées &gt; Interrompre les

#### mises à jour jusqu’à la date maximale

  - Pour communiquer avec le serveur de mise à jour de l’aide, votre VM Win10-

#### XX aura besoin d'être connectée au switch virtuel Bridge

Dans WorkStation, xlic droit sur l’onglet de votre VM Win10-XX &gt; Settings

#### Network Adapter

#### Cochez Bridged

La VM détecte un nouveau réseau.

#### Pour mettre en place l’emplacement réseau privé, cliquez sur Oui

Une connexion internet est découverte, Windows 10 en profite pour vous demander de terminer la configuration de votre profil utilisateur. Cliquer sur Me le rappeler plus tard

  - Identifiez-vous auprès du serveur à l'aide de vos identifiants / mot de passe du

#### domaine

Pour mettre à jour les fichiers d’aide PowerShel l, lancer une invite PowerShell en tant qu’administrateur.

#### Update-help

La mise à jour se lance et est symbolisée par une barre d’avancement comme ci-dessous.

Si la barre d’avancement n’apparaît pas, c’est que vous avez fait une erreur de syntaxe dans votre commande. Au bout de quelques minutes , la mise à jour est terminée. Un message d’erreur peut éventuellement appara ître, vous indiquant une mise à jour impossible pour certains modules. Ceci n’est pas bloquant . Vous pouvez continuer le TP , cela correspond généralement à des modules qui ne sont pas installés sur votre ordinateur ou à des modules non disponibles dans la langue demandée. Pour vérifier la bonne mise à jour de l’aide, effectuez la commande suivante sur votre VM

#### Win10-xx :

`Get-Help -Full Get-Alias`

Vous devez obtenir l’aide complète (avec des exemples, des liens connexes …) Une fois la mise à jour effectuée, rebasculez votre VM sur le switch Host-Only.

- Quelle cmdlet permet d'obtenir les exemples de la cmdlet Get-Help ?

`Get-Help Get-Help -Example`

- À l'aide de ces exemples, recherchez et testez la cmdlet qui permet d'afficher la liste de

#### tous les concepts disponible et utilisable dans PowerShell

#### Voir l’exemple 8 de la commande précédente Get-Help

`Get-Help about_*`

- Quelle cmdlet nous permet d'en apprendre plus sur le concept d'alias PowerShell ?

  - Affichez le résultat de cette cmdlet dans une fenêtre d'aide séparée

`Get-Help about_Aliases -ShowWindow`

- Les alias configurés sont-ils conservés si la session PowerShell est fermée ? Quelle section

#### de l’aide faut-il consulter pour savoir comment les sauvegarder ?

Les alias configurés ne sont pas conservés si la session PowerShell est fermée. La section de l’aide qu’il faut consulter pour savoir comment les configurer est la section SAVING ALIASES

#### SAVING ALIASES

The aliases that you create are saved only in the current session. To use the aliases in a different session, add the alias to your Windows PowerShell profile. Or, use the Export-Alias cmdlet to save the aliases to a file.

#### For more information, type:

`Get-Help about_Profiles`

- PowerShell réalise un historique des commandes saisies. Utilisez l’aide pour déterminer le

nom de la variable qui définit le nombre de commandes qui sont conservées dans

#### l’historique. (indice : une variable commence par le caractère $)

`Get-Help about_History`

#### […]

#### MaximumHistoryCount

The $MaximumHistoryCount p reference variable determines the maximum number of commands that PowerShell saves in the command history. The default value is 4096. For example, the following command lowers the $MaximumHistoryCount to 100

#### commands:

#### $MaximumHistoryCount = 100

To apply the setting, restart PowerShell.

- Quelle est la valeur par défaut contenue dans cette variable ? Cette valeur peut -elle

#### être modifiée ?

Selon le résultat de la commande précédente, la valeur par défaut contenu e dans cette

#### variable est 4096. Elle peut être modifiée grâce à la commande

#### $MaximumHistoryCount = nb

## Solution du TP - Premiers pas avec PowerShell

### Systèmes Clients Microsoft

#### Premiers pas avec

#### PowerShell

#### TP du Module 03 — Interagir avec Windows 10

#### Sur la VM Win10-XX

#### Pour une meilleure lisibilité, personnalisez votre fenêtre PowerShell

- Changez la police et la taille de la police
- Agrandissez votre fenêtre

Faire le focus dans la fenêtre puis "CTRL + Scroll souris vers le haut" pour agrandir la taille de

#### la fenêtre et la taille de la police en même temps

Sur la VM Win10-XX, une fois votre fenêtre PowerShell prête, interagissez

#### avec votre système à l'aide des cmdlets

- Quelle version de PowerShell est installée sur votre système ?

#### $PSVersionTable

#### Ou

`Get-Host`

- Affichez le contenu du répertoire courant

  - Quelle cmdlet avez-vous utilisée ?

`Get-ChildItem`

- Affichez le contenu du répertoire c:\users

  - Quelle cmdlet avez-vous utilisée ?

`Get-ChildItem -Path C:\Users`

- Affichez la liste des alias PowerShell

  - Quelle cmdlet avez -vous utilisé e ? Quels sont les alias de la cmdlet Get -

#### ChildItem ?

`Get-Alias`

#### Les alias de la cmdlet Get-ChildItem sont : dir, gci, ls

#### Faites un snapshot TP04 terminé

#### Sur la VM DiscoveryXX

- Ouvrez une session avec l'utilisateur adm (Pa$$w0rd) puis interagissez avec votre

système à l'aide des cmdlets.

- Affichez le contenu du fichier C:\PowerShell\Intro.txt

  - Quelle cmdlet avez-vous utilisée ?

#### Avec la cmdlet Get-Content ou avec les alias gc, type ou cat

On peut trouver la réponse dans le fichier texte à l'aide du bloc-notes ou en tapant dans la

#### console PowerShell &gt; notepad.exe c:\PowerShell\Intro.txt

- Dans quel répertoire êtes-vous actuellement ? Déplacez-vous à la racine du lecteur C:\

`Set-location c:\`

#### Indice pour trouver : s'aider de la liste des alias

La commande cd a été vue dans la correction du TP précédent : cd -&gt; set-location

## Solution du TP - Prise en main de la cmd

### Systèmes Clients Microsoft

#### Prise en main de la cmd

#### TP du Module 03 — Interagir avec Windows 10

#### Sur la VM Win10-XX, à l'aide de votre interface graphique

#### Pour une meilleure lisibilité, personnalisez votre fenêtre cmd

- Changez la police en consolas taille 24
- Changez les couleurs de la police et de l'arrière-plan

#### Clic gauche en haut à gauche de la fenêtre cmd &gt; Propriétés

#### Onglet Police, onglet Couleurs …

Sinon il faut faire le focus dans la fenêtre puis "CTRL + Scroll souris vers le haut" pour agrandir

#### la taille de la fenêtre et la taille de la police en même temps

Sur la VM Win10-XX, une fois votre fenêtre cmd.exe prête, interagissez avec votre

#### système à l'aide de la ligne de commande

- Affichez les commandes internes disponibles

#### Dans l’interface en ligne de commande, tapez help

- Affichez l'aide de la commande cd. Quelle est son utilité ?

#### help cd

#### --- ou ---

`cd / ?`

Pour connaître l'utilité d'une commande, il suffit de lire la première ligne de l'aide (que l'on

#### appelle le synopsis)

#### help cd

Affiche le nom ou change le répertoire en cours.

#### CHDIR [/D] [lecteur:][chemin]

#### CHDIR [..]

`CD [/D] [lecteur:][chemin]`

`CD [..]`

#### […]

- Placez-vous à la racine du lecteur C

`cd c:\`

- Créez un répertoire CommandList à la racine du lecteur C

#### md CommandList

#### --- ou ---

`mkdir Commandlist`

- Dans le répertoire c:\CommandList, créez un fichier InternalCommands.txt qui

recense la liste des commandes internes disponible.

#### help &gt; c:\CommandList\InternalCommands.txt

- Pour vérification, affichez le contenu du fichier InternalCommands.txt

#### type c:\CommandList\InternalCommands.txt

- Copiez ce fichier sur le bureau (indice : votre bureau est un sous -répertoire présent

#### dans c:\users)

#### copy c:\CommandList\InternalList.txt c:\users\pnom\Desktop

pnom est l’utilisateur que vous avez créé lors de l’installation de Windows 10

#### Possibilité d'utiliser xcopy et robocopy en lieu et place de copy

- Affichez la liste de tous les fichiers et sous -répertoires contenus dans votre dossier

bureau. Le résultat devra afficher la liste triée par la taille (ordre croissant)

#### dir /A /OS c:\users\prenom\Desktop

#### Faites un snapshot TP03 terminé

## Solution du TP - Prise en main de l_interface graphique

### Systèmes Clients Microsoft

#### Prise en main de l’interface

#### graphique

#### TP du Module 03 — Interagir avec Windows 10

#### Sur la VM Win10-XX

- Ouvrez une session sur le système puis changez le mot de passe.

#### Faites CTRL+ALT+SUPPR dans votre VM puis changer de mot de passe

- Supprimez les raccourcis Windows Store et Courrier de votre barre des tâches.

#### Ajoutez-y ensuite un raccourci Windows PowerShell

#### Clic droit sur les icônes du bureau &gt; Détacher de la barre des tâches

Rechercher &gt; PowerShell &gt; clic droit &gt; Epingler à la barre des tâches

- Interrompre temporairement l'installation des mises à jour Windows Update pendant

35 jours au plus.

#### Rechercher &gt; Windows Update

#### Options avancées de Windows Update

#### Options avancées

#### Interrompre les mises à jour &gt; Suspendre les mises à jour au maximum

- Quel nom porte votre "PC" ? (Indice : DESKTOP-…)

#### Rechercher &gt; Nom &gt; Afficher le nom de votre PC

- Renommez votre "PC". Il portera le même nom que votre VM

#### Rechercher &gt; Nom &gt; Afficher le nom de votre PC

#### Renommer ce PC

#### Un redémarrage est nécessaire

Après le redémarrage, vérifiez la bonne prise en compte du nouveau nom.

- Créez une console mmc personnalisée. Elle vous permettra de configurer les disques,

les utilisateurs et les groupes ainsi que les partages. Cette console devra être disponible depuis votre bureau.

#### Démarrer &gt; Exécuter &gt; mmc

#### Fichier &gt; Ajouter/supprimer des composants logiciels enfichables

#### Gestion des disques &gt; Cet ordinateur &gt; Ajouter

#### Utilisateurs et groupes locaux &gt; l'ordinateur local &gt; Ajouter

#### Dossiers partagés &gt; l'ordinateur local &gt; Ajouter

#### OK

#### Fichier &gt; Enregistrer sous &gt; Bureau &gt; MaConsole.msc

- Personnalisez le papier peint du bureau

#### Clic droit n’importe où sur le bureau &gt; Personnaliser

- Désactiver la mise en veille du système

Rechercher &gt; Veille &gt; Modifier les conditions de mise en veille de l'ordinateur

#### Ecran &gt; jamais

#### Veille &gt; jamais

#### Sur la VM Discovery

- Ouvrez une session avec l'utilisateur adm (Pa$$w0rd)
- Quels sont les composants logiciels enfichables disponibles dans la console admConsole

#### disponible sur le bureau ?

Ouvrir la console admConsole et observer les logiciels enfichables présents :

#### - Gestion de l’ordinateur

#### - Gestionnaires de périphériques

#### - Services

- Renommez l'OS, il portera le nom DiscoveryXX (XX étant vos initiales)

#### Rechercher &gt; nom &gt; Afficher le nom de votre PC

#### Renommer ce PC

#### Un redémarrage est nécessaire

#### Après le redémarrage, vérifiez la bonne prise en compte du nouveau nom

- Interrompre temporairement l'installation des mises à jour Windows Update pendant 35

jours au plus.

#### Rechercher &gt; Windows Update

#### Options avancées de Windows Update

#### Options avancées

#### Interrompre les mises à jour &gt; Suspendre les mises à jour au maximum
