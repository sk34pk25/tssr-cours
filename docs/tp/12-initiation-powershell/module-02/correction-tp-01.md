# Correction — L’objet

La solution fournie est reprise dans son ordre. Les valeurs observées concernent la maquette du document. Les valeurs d’accès du laboratoire sont indiquées comme « fourni par le formateur ». Les adresses de messagerie personnelles utilisent example.com.

## L’objet

TP du Module 02

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 2 de ce cours.

Durée estimée

30 minutes

## Énoncé

Objectifs :

- Comprendre le langage objet.
- Utiliser les commandes de gestion de l’objet.

Consignes :

Depuis la machine CLI01 :

- Utilisez la commande Get-Member pour afficher les propriétés et méthodes de l’objet System.ServiceProcess.ServiceController

Quelle commande avez-vous utilisée ?

```text
Get-Service | Get-Member
```

- Indiquez deux propriétés de type String

```text
DisplayName               Property      string DisplayName {get;set;}
MachineName               Property      string MachineName {get;set;}
```

- Indiquez une méthode de type Bool et une de type int.

```text
Equals                    Method        bool Equals(System.Object obj)
GetHashCode               Method        int GetHashCode()
```

La méthode de type Bool est Equals la méthode de type Int est GetHashCode

- Affichez les propriétés du service Spooler.

Quelle commande avez-vous utilisée ?

```text
get-service -name spooler | get-member -MemberType Property
```

Quelles propriétés avez-vous affichées ?

```text
Get-Service -Name Spooler
```

Les propriétés affichées par défaut sont :

```text
Status Name DisplayName
```

- Indiquez les valeurs de chaque propriété.

Running Spooler Print Spooler

- Affichez les propriétés de l’utilisateur local Adara Mcintyre.

Quelle commande avez-vous utilisée ?

```text
Get-LocalUser -Name
```

Quelles propriétés avez-vous affichées ?

```text
Name Enabled Description
```

Indiquez les valeurs de chaque propriété.

Adara Mcintyre True Technician

Modifiez la valeur de la propriété de Description en Administrateur. Quelle commande avez-vous utilisée ?

```text
Set-LocalUser -Name "adara mcintyre"-Description "Administrateur"
Get-LocalUser -Name "adara mcintyre"
```

- Affichez le statut du service Spooler.

Utilisez la Cmdlet pour arrêter le service Spooler. Quelle commande avez-vous utilisée ?

```text
(Get-Service -Name Spooler).stop()
```

Vérifier à nouveau le statut du service.

```text
Get-Service -Name Spooler
```

Bonus

Utilisez la méthode de l’objet Get-Date pour renseigner la valeur de la propriété AccountExpires du compte de l’utilisateur Axel Rios.

- Testez la mise à jour de la propriété avec la commande Get-LocalUser «Axel Rios » | select *

La valeur de la propriété AccountExpires doit être, au minimum, de 48 heures supérieure à la date actuelle.

```text
Set-LocalUser -Name "adara mcintyre"-AccountExpires (get-date).adddays(2)
Set-LocalUser -Name "adara mcintyre"| select *
```
## Contrôler les objets avant et après l’action

`Get-Member -MemberType Property` montre les propriétés. La syntaxe peut également accepter une abréviation de paramètre non ambiguë. Retenir le nom complet dans une procédure. Les noms et descriptions du compte local sont des valeurs de la maquette. Le bonus et la correction emploient des identités différentes. Relire le nom demandé dans l’énoncé avant de choisir le compte.

```powershell
$service = Get-Service -Name Spooler
$service | Get-Member -MemberType Property
$service | Select-Object Name,Status,DisplayName
```

Le corrigé appelle `Stop()` sur le spouleur. Interroger de nouveau le service après l’action pour vérifier son état. La capture du bonus utilise `(Get-Date).AddDays(2)` pour `AccountExpires`. Vérifier la propriété après la modification et distinguer l’expiration du compte de celle du mot de passe.


- [Retour à l’énoncé](tp-01-objet.md)
- [Cours du module](../../../modules/12-initiation-powershell/module-02.md)
