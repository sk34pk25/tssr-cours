# Énoncés — Module 03 — Interagir avec Windows 10

!!! danger "Avant une manipulation destructive"
    Vérifier la cible, créer une sauvegarde ou un instantané et préparer le retour arrière. Les adresses et noms de machines du support appartiennent au laboratoire de formation.

## Enoncé du TP - Devenir autonome avec PowerShell

### Systèmes Clients Microsoft

#### Devenir autonome avec

#### PowerShell

#### TP du Module 03 — Interagir avec Windows 10

Lors de ce TP, vous allez continuer à pratiquer avec la ligne de commande PowerShell, dans le but de vous familiariser avec cette notion d'objet. Le but est de chercher les bonnes cmdlets grâce à get-command et d’à apprendre à les manipuler grâce à get- help. Surtout, n'oubliez pas l'aide de PowerShell. Lisez l'aide, elle vous fera gagner un temps précieux.

#### Durée estimée

#### 1 heure 30 minutes

#### Énoncé

#### Lisez l'ensemble de ce TP avant de vous lancer dans la pratique

#### Sur Win10-XX, recherchez les commandes adaptées pour les besoins

#### suivants

À l'aide d'une console PowerShell, afficher les commandes disponibles sur le système

#### À l'aide de la commande précédente, n'afficher que les cmdlets

#### N'afficher que les cmdlets dont le verbe est Get

Quelle cmdlet permet d'afficher la liste des groupes locaux présents sur le système ? Quelles sont les 2 propriétés des groupes locaux que le système affiche par défaut ?

Quelles sont les autres propriétés des groupes locaux qui ne sont pas affichés par le

#### système ?

Afficher le SID et la source principale du groupe Utilisateurs du bureau à distance

#### Sur Discovery, recherchez les commandes adaptées pour les besoins

#### suivants

#### Conseils pour bien construire vos prochaines réponses

1. Cherchez la commande demandée à l'aide de Get-

#### Command

2. Parcourez l'aide et les exemples d'utilisation de cette

#### cmdlet

3. Testez la cmdlet de manière basique pour commencer…
4. … puis chercher et afficher les propriétés demandées

Quelle commande permet d'afficher les disques durs de la VM Discovery ? Combien

#### de disques durs possède la VM ?

Afficher le numéro et le modèle des disques durs présent sur la VM Discovery

#### N'afficher que le nom, le type de bus et le fabricant du disque numéro 2

Afficher le nom, le statut et la description du pilote de l'adaptateur réseau de la VM

#### Afficher les membres du groupe local Administrateurs de la VM Discovery

Afficher les membres du groupe local Administrateurs de la VM Discovery, mais cette fois-ci, le résultat devra être redirigé dans le fichier AdminMembers.txt, lui-même

#### contenu dans le dossier C:\Users

Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les ressources à télécharger.

## Enoncé du TP - Manipuler l_aide de PowerShell

### Systèmes Clients Microsoft

#### Manipuler l'aide de

#### PowerShell

#### TP du Module 03 — Interagir avec Windows 10

Durant ce TP vous serez amené à utiliser et à naviguer dans l'aide pour retrouver des informations. Bien évidemment, il faudra mettre à jour cet aide pour ensuite découvrir la manière dont on l'utilise, dont on navigue à l'intérieur. N'oubliez pas qu'il existe de l'aide pour deux domaines : l'aide pour utiliser les cmdlets et l'aide pour découvrir des concepts de PowerShell (help about_*).

#### Durée estimée

#### 1 heure

#### Énoncé

Lisez l'ensemble de ce TP avant de vous lancer dans la pratique.

#### Sur Discovery, à l'aide de PowerShell

#### Affichez l'aide complète de la cmdlet Get-Alias

#### Quelle cmdlet avez-vous utilisée ?

#### Sur Win10-XX, à l'aide de PowerShell

#### Affichez l'aide complète de la cmdlet Get-Alias

Pourquoi existe-t-il une si grande différence entre les résultats des cmdlets de ces deux

#### VMs ?

#### Mettez à jour l'aide de PowerShell

  - Vérifiez, à l'aide de votre interface graphique, que les mises à jour Windows

Update sont bien reportées à 35 jours au moins. Reportez-les le cas échéant.

  - Pour communiquer avec le serveur de mise à jour de l’aide, votre VM Win10-

#### XX aura besoin d'être connecté au switch virtuel Bridge

Une fois la mise à jour effectuée, rebasculez votre VM sur le switch Host-Only

#### Quelle cmdlet permet d'obtenir les exemples de la cmdlet Get-Help ?

À l'aide de ces exemples, recherchez et testez la cmdlet qui permet d'afficher la liste

#### de tous les concepts disponible et utilisable dans PowerShell

Quelle cmdlet nous permet d'en apprendre plus sur le concept d'alias PowerShell ?

  - Affichez le résultat de cette cmdlet dans une fenêtre d'aide séparée

Les alias configurés sont s’ils conservés si la session PowerShell est fermée  ? Quelle section de l’aide faut-il consulter pour savoir comment les sauvegarder ? PowerShell réalise un historique des commandes saisies. Utilisez l’aide pour déterminer le nom de la variable qui définit le nombre de commandes qui sont conservées dans l’historique (indice : une variable commence par le caractère $).

Quelle est la valeur par défaut contenue dans cette variable  ? Cette valeur peut-elle

#### être modifiée ?

Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les ressources à télécharger.

## Enoncé du TP - Premiers pas avec PowerShell

### Systèmes Clients Microsoft

#### Premiers pas avec

#### PowerShell

#### TP du Module 03 — Interagir avec Windows 10

Le but de ce TP est de découvrir la base de l'utilisation de PowerShell. Vous allez pouvoir interagir de manière simple avec le système.

#### Durée estimée

#### 30 minutes

#### Énoncé

Lisez l'ensemble de ce TP avant de vous lancer dans la pratique.

#### Sur la VM Win10-XX

#### Pour une meilleure lisibilité, personnalisez votre fenêtre PowerShell :

#### Changez la police et la taille de la police

#### Agrandissez votre fenêtre

Sur la VM Win10-XX, une fois votre fenêtre PowerShell prête, interagissez

#### avec votre système à l'aide des cmdlets

#### Quelle version de PowerShell est installée sur votre système ?

Affichez le contenu du répertoire courant .

#### Quelle cmdlet avez-vous utilisée ?

Affichez le contenu du répertoire c:\users.

#### Quelle cmdlet avez-vous utilisée ?

Affichez la liste des alias PowerShell. Quelle cmdlet avez-vous utilisée ? Quels sont les alias de la cmdlet Getchild-Item ?

#### Faites un snapshot TP04 terminé

#### Sur la VM DiscoveryXX

Ouvrez une session avec l'utilisateur adm (Pa$$w0rd) puis interagissez avec votre système à l'aide des cmdlets. Affichez le contenu du fichier C:\PowerShell\Intro.txt.

#### Quelle cmdlet avez-vous utilisée ?

Dans quel répertoire êtes-vous actuellement ? Déplacez-vous à la racine du lecteur C:\.

Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les ressources à télécharger.

## Enoncé du TP - Prise en main de l_interface graphique

### Systèmes Clients Microsoft

#### Prise en main de l'interface

#### graphique

#### TP du Module 03 — Interagir avec Windows 10

Lors de cet atelier, vous allez être amené à interagir avec l'interface graphique pour commencer à personnaliser le système d'exploitation. Ainsi, vous commencez à rentrer dans la peau d'un technicien en utilisant notamment les consoles MMC.

#### Durée estimée

#### 30 minutes

#### Énoncé

#### Lisez l'ensemble de cet atelier avant de vous lancer dans la pratique

#### Sur la VM Win10-XX

Ouvrez une session sur le système puis changez le mot de passe. Supprimez les raccourcis Windows Store et Courrier de votre barre des tâches. Ajoutez- y ensuite un raccourci Windows PowerShell.

Interrompre temporairement l'installation des mises à jour Windows Update pendant 35 jours au plus.

#### Quel nom porte votre PC ? (Indice : DESKTOP-…)

Renommez votre PC. Il portera le même nom que votre VM. Créez une console mmc personnalisée. Elle vous permettra de configurer les disques, les utilisateurs et les groupes ainsi que les partages. Cette console devra être disponible depuis votre bureau.

#### Personnalisez le papier peint du bureau

#### Désactiver la mise en veille du système

#### Faites un Snapshot "TP02 terminé"

#### Sur la VM Discovery

#### Ouvrez une session avec l'utilisateur adm (Pa$$w0rd)

Quels sont les composants logiciels enfichables disponibles dans la console

#### admConsole disponible sur le bureau ?

Renommez l'OS, il portera le nom DiscoveryXX (XX étant vos initiales).

Interrompre temporairement l'installation des mises à jour Windows Update pendant 35 jours au plus.

Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les ressources à télécharger.

## Enoncé du TP - Prise en main de la cmd

### Systèmes Clients Microsoft

#### Prise en main de la cmd

#### TP du Module 03 — Interagir avec Windows 10

Durant ce TP, vous allez vous familiariser avec la ligne de commande cmd. Le but est d'utiliser l'aide. Il suffit de lire l'aide pour s'en sortir. Le but est aussi de réaliser des tests avant d'être sûr d'avoir la commande finale.

#### Durée estimée

#### 1 heure

#### Énoncé

Lisez l'ensemble de ce TP avant de vous lancer dans la pratique.

#### Sur la VM Win10-XX, à l'aide de votre interface graphique

#### Pour une meilleure lisibilité, personnalisez votre fenêtre cmd

#### Changez la police en consolas taille 24

#### Changez les couleurs de la police et de l'arrière-plan

#### Sur la VM Win10-XX, une fois votre fenêtre cmd.exe prête, interagissez

#### avec votre système à l'aide de la ligne de commande

#### Affichez les commandes internes disponibles

#### Affichez l'aide de la commande cd. Quelle est son utilité ?

#### Placez-vous à la racine du lecteur C

#### Créez un répertoire CommandList à la racine du lecteur C

Dans le répertoire c:\CommandList, créez un fichier InternalCommands.txt qui recense la liste des commandes internes disponible.

#### Pour vérification, affichez le contenu du fichier InternalCommands.txt

Copiez ce fichier sur le bureau (indice : votre bureau est un sous-répertoire présent

#### dans c:\users)

Affichez la liste de tous les fichiers et sous-répertoires contenus dans votre dossier bureau. Le résultat devra afficher la liste triée par la taille (ordre croissant)

#### Faites un snapshot TP03 terminé

Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les ressources à télécharger.

Une fois le travail terminé : [consulter les corrections](corrections.md).
