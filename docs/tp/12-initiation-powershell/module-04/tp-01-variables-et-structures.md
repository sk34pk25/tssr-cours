# Énoncé — Variables et structures

Le document fourni décrit le travail demandé et les résultats à relever dans la maquette. Les valeurs d’accès du laboratoire sont indiquées comme « fourni par le formateur ». Les adresses de messagerie personnelles utilisent example.com.

## Initiation à PowerShell Variables et structures

TP du Module 04

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 4 de ce cours.

Durée estimée

4 heures

## Énoncé

Objectifs :

Utiliser les variables dans le langage de commande PowerShell

Intégrer les structures de commandes dans des scripts de base

Consignes :

Depuis la machine CLI01

```text
Stocker dans une variable le résultat de la commande Get-EventLog system.
```

Quelle commande avez-vous utilisée ?

Affichez l’entrée de journal numéro 10.

Quelle est la valeur de l’Index du journal ?

Créer une variable qui stockera l’addition de l’index de journal numéro 10 et 20. Quelles commandes avez-vous utilisées ?

Pour répondre au besoin, vous utiliserez les structures If et DoWhile.

Créer un script qui dans un premier temps demande la saisie de la date de naissance d’un utilisateur, puis dans un second temps demande à l’utilisateur de trouver cette date de naissance en indiquant si la valeur saisie est supérieure ou inférieure.

Si la date saisie est correcte, la boucle s’arrête et l’utilisateur est félicité.

BONUS : indiquez le nombre d’essais effectués par l’utilisateur.

Pour répondre au besoin, vous utiliserez les structures If et ForEach.

```text
Créer un script qui générera deux variables de tableaux $UserActif et $SUserInactif ;
```

dans chacune sera stockée la liste des utilisateurs actifs et inactifs de votre serveur Active Directory.

Indiquez le nombre d’utilisateurs actif et inactif.

Utilisation de While / If ou Switch

Réalisez un menu à choix multiples, voici l'affichage attendu :

Bienvenue dans l'outil d'inventaire, faites votre choix parmi les menus suivants : 1) Affichage des ordinateurs du domaine. 2) Affichage des groupes de domaines locaux 3) Importation des utilisateurs « AD » à partir d’un fichier « CSV » 4) Quitter

Entrez votre choix :

Si la saisie de l'utilisateur est incorrecte, la saisie doit être proposée à nouveau en indiquant l'erreur.

Indiquez les lignes de commandes utilisées.

Chargez dans une variable les objets utilisateurs Active Directory.

Pour chaque utilisateur, réinitialisez le mot de passe puis vérifiez si l’utilisateur est inactif. Activer leurs comptes.

Quelles commandes avez-vous utilisées ?

## Solution

Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les ressources à télécharger.

## Suite du TP

- [Corrigé](correction-tp-01.md)
- [Cours du module](../../../modules/12-initiation-powershell/module-04.md)
