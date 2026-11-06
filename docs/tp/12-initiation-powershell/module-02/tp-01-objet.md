# Énoncé — L’objet

Le document fourni décrit le travail demandé et les résultats à relever dans la maquette. Les valeurs d’accès du laboratoire sont indiquées comme « fourni par le formateur ». Les adresses de messagerie personnelles utilisent example.com.

## Initiation à PowerShell L’objet

TP du Module 02

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 2 de ce cours.

Durée estimée

30 minutes

## Préparer le travail et le compte rendu

Choisir le service et le compte de test prévus. Noter leur état initial avant toute modification et prévoir le rétablissement demandé dans la maquette.

| Étape | Preuve à relever |
| --- | --- |
| Service | Type, propriétés et signatures de méthodes, puis état avant et après l’arrêt demandé. |
| Compte local | Nom de la cible et description avant et après la modification autorisée. |
| Bonus | Date d’expiration relue et écart avec l’heure de contrôle. |

## Énoncé

Objectifs :

Comprendre le langage objet.

Utiliser les commandes de gestion de l’objet.

Consignes :

Depuis la machine CLI01 :

Utilisez la commande Get-Member pour afficher les propriétés et méthodes de l’objet System.ServiceProcess.ServiceController

Quelle commande avez-vous utilisée ?

Indiquez deux propriétés de type String

Indiquez une méthode de type Bool et une de type int.

Affichez les propriétés du service Spooler.

Quelle commande avez-vous utilisée ?

Quelles propriétés avez-vous affichées ?

Indiquez les valeurs de chaque propriété.

Affichez les propriétés de l’utilisateur local Adara Mcintyre.

Quelle commande avez-vous utilisée ?

Quelles propriétés avez-vous affichées ?

Indiquez les valeurs de chaque propriété.

Modifiez la valeur de la propriété de Description en Administrateur. Quelle commande avez-vous utilisée ?

Affichez le statut du service Spooler.

Utilisez la méthode pour arrêter le service Spooler. Quelle commande avez-vous utilisée ?

Vérifier à nouveau le statut du service.

Bonus

Utilisez la méthode de l’objet Get-Date pour renseigner la valeur de la propriété AccountExpires du compte de l’utilisateur Axel Rios.

Testez la mise à jour de la propriété avec la commande Get-LocalUser «Axel Rios » | select *

La valeur de la propriété AccountExpires doit être, au minimum, de 48 heures supérieure

à la date actuelle.

## Solution

Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les ressources à télécharger.

## Suite du TP

- [Corrigé](correction-tp-01.md)
- [Cours du module](../../../modules/12-initiation-powershell/module-02.md)
