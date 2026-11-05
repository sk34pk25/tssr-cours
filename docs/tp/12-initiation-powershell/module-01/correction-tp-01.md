# Correction — Premières commandes

La solution fournie est reprise dans son ordre. Les valeurs observées concernent la maquette du document. Les valeurs d’accès du laboratoire sont indiquées comme « fourni par le formateur ». Les adresses de messagerie personnelles utilisent example.com.

## Premières commandes

TP du Module 01

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 1 de ce cours.

Durée estimée

2 heures

## Énoncé

Objectifs :

- Lancer des commandes PowerShell données
- Analyser les différences de résultats d’exécution entre différents environnements

Prérequis :

- Récupérer la maquette fournie par le formateur
- Avoir une connexion internet

Consignes :

- Décompresser la maquette fournie par le formateur
- Intégrer les machines virtuelles dans VMware Workstation
- Démarrer les machines virtuelles suivantes :

```text
o CLI01
o CD01
```

- S’y connecter :

```text
o identifiant : Administrator@ad01.lcl
o mot de passe : fourni par le formateur
```

Depuis la machine CLI01 :

- Lancez la console PowerShell en mode administrateur et découvrez l'interface utilisateur.
- Exécutez la commande Get-Command | Measure. Indiquez le nombre de commandes renvoyées par la propriété Count

2855

- Lancez la console PowerShell Core en mode administrateur et découvrez l'interface

utilisateur.

- Exécutez la commande Get-Command | Measure. Indiquez le nombre de commandes renvoyées par la propriété Count.

Admin 2825 / user 2796

- Affichez la liste des verbes disponibles dans chaque console PowerShell. Que remarquez-vous ?

```text
Get-Verb (| measure)
PS = 98
PSCore = 100
```

On remarque les verbes sont classés par groupe.

- Listez les commandes utilisant le verbe New. Quelle commande avez-vous utilisée ?

```text
Get-Command -Verb New
```

- Listez les commandes contenant user dans le nom. Quelle commande avez-vous utilisée ?

```text
Get-Command -Noun *User*
```

- Indiquez la commande permettant de créer un nouvel utilisateur local.

```text
Get-command -Noun *localuser*
```

- Listez les cinq premiers utilisateurs locaux de chaque machine virtuelle.

```text
o Utilisateurs de CD01
Get-LocalUser | select -first 5
o  Utilisateurs de CLI01
```

Get-LocalUser | select -first 5

Bonus

- Modifiez la description d’un utilisateur local sur « SRV01 » et « CLI01 ». Quelles commandes avez-vous utilisées ?

```text
Set-LocalUser -Name "AxelRios" -Description "Operateur"
Get-LocalUser -Name "AxelRios"
```

Depuis la machine CLI01

- Affichez l’aide de la commande permettant de lister tous les services du système.

```text
Get-Help Get-Service
```

- Affichez l’aide dans une nouvelle fenêtre. Indiquez la commande utilisée.

```text
Get-Help Get-Service -showwindow
```

- Affichez la totalité de l’aide disponible. Quelle commande avez-vous utilisée ?

```text
Get-Help Get-Service -full
```

- Affichez l’aide en ligne de la commande permettant de lister les membres d’un groupe d’utilisateurs locaux. Quelle commande avez-vous utilisée, quels sont les avantages de l’aide en ligne ?

```text
Get-Help Get-LocalGroup – Online
```

Afficher les membres d'un groupe

```text
Get-LocalGroupMember -Online
```

- Mettez à jour les fichiers d’aide de votre console PowerShell.

```text
o Vous allez effectuer la mise à jour de toutes vos commandes à
```

partir d’un dépôt local situé sur « CD01 ».

```text
o Voici
le
chemin
«
UNC
»
du
dépôt
:
\\CD01\Partage\Depot\CLI01
o Indiquez vos remarques
Update-Help -Sourcepath \\CD01\Partage\Depot\CLI01\ -UICulture EN-US
```

On remarque que certains modules n’ont pas de fichier d’aide disponible.

- Effectuez la même action mais en sélectionnant le langage « fr-FR ». Indiquez vos remarques.

```text
Update-Help -Sourcepath \\CD01\Partage\Depot\CLI01\ -UICulture fr-FR
```

On remarque que très peu de modules disposent de fichiers d’aide traduits.

Depuis la machine CLI01

- Affichez les modules actuellement chargés par la console PowerShell.

```text
Get-Module ou Get-module -all
o Combien de modules sont actuellement disponibles ?
Get-Module | measure
o De quel module la commande Get-LocalUser est-elle issue ?
get-command get-localuser
get-command get-localuser | ft wrap
get-command get-localuser | select module
>> Microsoft.PowerShell.LocalAccounts
```

- Affichez les emplacements disponibles pour déposer les fichiers contenant les modules. Quelle commande avez-vous utilisée ?

```text
Get-Help about_modules -showwindow
```

On cherche "Path"

#variable d'environnement :

```text
$env:PSModulePath
```

C:\Users\Administrator\Documents\WindowsPowerShell\Modules;C:\Program Files\WindowsPowerShell\Modules;C:\Windows\system32\WindowsPowerShell\v1.0\Mod ules

- Installer le module AWSPowerShell. L’archive est disponible sur le partage \\CD01\Partage\Modules

```text
o Quelles commandes avez-vous utilisées ?
```

- Vous allez obtenir un message d’erreur à l’importation du module

```text
o Quelle
commande
allez-vous
exécuter
pour
permettre
l’importation du module ?
Import-Module AWSPowserShell
o Indiquez trois commandes disponibles dans le module
```

AwsPowerShell

- Mettez en place un profil personnel sur chaque console PowerShell.

```text
o Vous pouvez modifier la coloration ainsi que la police.
o Affichez l’aide de la commande Get-Help à chaque ouverture
```

de la console PowerShell.

```text
o Quel fichier avez-vous édité ?
```

Microsoft.PowerShell_profile.ps1

Bonus

- Modifiez le prompt de votre console PowerShell.

```text
o En
vous
basant
sur
le
fichier
\\CD01\Partage\Aplication\Prompt.ps1
o Modifiez votre prompt pour afficher l’heure ainsi que la
```

localisation actuelle du prompt dans le système de fichier.

Vous pouvez également afficher une bannière avec le nom de l’utilisateur actuel.

## Solution

Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les ressources à télécharger.
## Contrôler les réponses et les différences de version

La correction compare les commandes et verbes disponibles dans les consoles du TP. Relevez aussi `$PSVersionTable` et `Get-Module` pour expliquer les différences. Les quantités imprimées dans le PDF restent des observations de ses machines.

L’énoncé demande l’aide sur les **membres** d’un groupe. Le document donne `Get-Help Get-LocalGroup -Online` et `Get-LocalGroupMember -Online`. La commande d’aide qui correspond au besoin est `Get-Help Get-LocalGroupMember -Online`. Pour la mise à jour, le paramètre documenté est `-SourcePath`. Vérifiez l’existence du chemin et la culture des fichiers d’aide avant d’interpréter le résultat. [Référence Microsoft de Update-Help](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/update-help?view=powershell-7.2).

La copie d’AWSPowerShell fait partie de la maquette. `AWSPowserShell` dans le corrigé est une faute de frappe. `Get-Module -ListAvailable -Name AWSPowerShell` aide à distinguer un problème de nom d’un module absent. Relever aussi `$PROFILE` dans chaque console. La démonstration du profil montre l’affichage du nom et de l’heure et un prompt personnalisé.

```powershell
Get-Module -ListAvailable -Name AWSPowerShell
Get-Command -Module AWSPowerShell -CommandType Cmdlet | Select-Object -First 3
$PROFILE
Test-Path -LiteralPath $PROFILE
```

Pour le bonus, voici un exemple pédagogique externe de prompt qui affiche l’heure et le dossier courant.

```powershell
function prompt {
    '[{0:HH:mm:ss}] {1} > ' -f (Get-Date), (Get-Location)
}
```


- [Retour à l’énoncé](tp-01-premieres-commandes.md)
- [Cours du module](../../../modules/12-initiation-powershell/module-01.md)
