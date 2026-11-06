# Énoncé — Premières commandes

Le document fourni décrit le travail demandé et les résultats à relever dans la maquette. Les valeurs d’accès du laboratoire sont indiquées comme « fourni par le formateur ». Les adresses de messagerie personnelles utilisent example.com.

## Initiation à PowerShell Premières commandes

TP du Module 01

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 1 de ce cours.

Durée estimée

2 heures

## Préparer le travail et le compte rendu

Vérifier les consoles disponibles, le rôle des VM et l’accès au dépôt d’aide de la maquette. Relever la version et l’hôte à chaque observation.

| Étape | Preuve à relever |
| --- | --- |
| Comparaison des consoles | Édition, version, nombre de commandes et un exemple de différence. |
| Aide et modules | Commandes utilisées, cultures disponibles, origine de la commande et trois exemples exportés. |
| Profil | Chemin de l’hôte choisi et résultat observé à sa réouverture. |

## Énoncé

Objectifs :

Lancer des commandes PowerShell données

Analyser les différences de résultats d’exécution entre différents environnements

Prérequis :

Récupérer la maquette fournie par le formateur

Avoir une connexion internet

Consignes :

Décompresser la maquette fournie par le formateur

Intégrer les machines virtuelles dans VMware Workstation

Démarrer les machines virtuelles suivantes :

- CLI01
- CD01

S’y connecter :

- identifiant : Administrator@ad01.lcl
- mot de passe : fourni par le formateur

Depuis la machine CLI01 :

Lancez la console PowerShell en mode administrateur et découvrez l'interface utilisateur.

Exécutez la commande Get-Command | Measure. Indiquez le nombre de commandes renvoyées par la propriété Count

Lancez la console PowerShell Core en mode administrateur et découvrez l'interface utilisateur.

Exécutez la commande Get-Command | Measure. Indiquez le nombre de commandes renvoyées par la propriété Count.

Affichez la liste des verbes disponibles dans chaque console PowerShell. Que remarquez-vous ?

Listez les commandes utilisant le verbe New. Quelle commande avez-vous utilisée ?

Listez les commandes contenant user dans le nom. Quelle commande avez-vous utilisée ?

Indiquez la commande permettant de créer un nouvel utilisateur local.

Listez les cinq premiers utilisateurs locaux de chaque machine virtuelle.

- Utilisateurs de CD01
- Utilisateurs de CLI01

Bonus

Modifiez la description d’un utilisateur local sur « SRV01 » et « CLI01 ». Quelles commandes avez-vous utilisées ?

Depuis la machine CLI01

Affichez l’aide de la commande permettant de lister tous les services du système.

Affichez l’aide dans une nouvelle fenêtre. Indiquez la commande utilisée.

Affichez la totalité de l’aide disponible. Quelle commande avez-vous utilisée ?

Affichez l’aide en ligne de la commande permettant de lister les membres d’un groupe d’utilisateurs locaux. Quelle commande avez-vous utilisée, quels sont les avantages de l’aide en ligne ?

Mettez à jour les fichiers d’aide de votre console PowerShell.

- Vous allez effectuer la mise à jour de toutes vos commandes à partir d’un dépôt local situé sur « CD01 ».
- Voici le chemin « UNC » du dépôt : \\CD01\Partage\Depot\CLI01
- Indiquez vos remarques

Effectuez la même action mais en sélectionnant le langage « fr-FR ». Indiquez vos remarques.

Depuis la machine CLI01

Affichez les modules actuellement chargés par la console PowerShell.

- Combien de modules sont actuellement disponibles ?
- De quel module la commande Get-LocalUser est-elle issue ?

Affichez les emplacements disponibles pour déposer les fichiers contenant les modules. Quelle commande avez-vous utilisée ?

Installer le module AWSPowerShell. L’archive est disponible sur le partage \\CD01\ Partage\Modules

- Quelles commandes avez-vous utilisées ?

Vous allez obtenir un message d’erreur à l’importation du module

- Quelle commande allez-vous exécuter pour permettre l’importation du module ?
- Indiquez trois commandes disponibles dans le module AwsPowerShell

Mettez en place un profil personnel sur chaque console PowerShell.

- Vous pouvez modifier la coloration ainsi que la police.
- Affichez l’aide de la commande Get-Help à chaque ouverture de la console PowerShell.
- Quel fichier avez-vous édité ?

Bonus

Modifiez le prompt de votre console PowerShell.

- En vous basant sur le fichier \\CD01\Partage\Aplication\Prompt.ps1
- Modifiez votre prompt pour afficher l’heure ainsi que la localisation actuelle du prompt dans le système de fichier.

Vous pouvez également afficher une bannière avec le nom de l’utilisateur actuel.

## Solution

Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les ressources à télécharger.

## Suite du TP

- [Corrigé](correction-tp-01.md)
- [Cours du module](../../../modules/12-initiation-powershell/module-01.md)
