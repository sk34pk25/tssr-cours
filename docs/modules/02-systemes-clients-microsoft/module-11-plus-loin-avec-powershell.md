# Module 11 — Plus loin avec PowerShell

**Séquence :** Systèmes clients Microsoft  
**Importance :** socle de la progression officielle  
**Sources consolidées :** 1 support(s) de cours, 1 énoncé(s), 1 correction(s)

!!! warning "Périmètre et versions"
    Le support enseigne Windows 10. Windows 10 a atteint sa fin de support général le 14 octobre 2025 ; les manipulations restent utiles pour le laboratoire et les environnements hérités, mais un déploiement neuf doit viser une édition Windows encore prise en charge. Référence : [Cycle de vie Windows 10](https://learn.microsoft.com/en-us/lifecycle/products/windows-10-home-and-pro).

## Objectifs et compétences

- Comprendre les flux et la redirection.
- Chaîner des objets dans le pipeline.
- Filtrer avec Where-Object et sélectionner avec Select-Object.
- Formater uniquement en fin de pipeline.

!!! tip "Façon simple de le comprendre"
    Ce module sert à passer de la notion « Plus loin avec PowerShell » à une méthode que l’on peut expliquer, appliquer, vérifier et dépanner.

## Méthode de travail

1. Lire les concepts dans l’ordre du support.
2. Reproduire les exemples dans un environnement de laboratoire.
3. Noter le résultat attendu avant de modifier une configuration.
4. Vérifier avec l’outil ou la commande appropriée.
5. Revenir à l’état initial si le résultat diverge.

## Commandes repérées dans les supports

```text
Get-Date
Get-Date | Select DayOfYear
Get-EventLog -LogName Security
Get-EventLog -LogName Security | Where EventID -eq 4624
Get-EventLog -LogName Security | Where EventID -eq 4624 | Select
Get-NetFirewallRule | Where Enabled -like 'True'
Get-NetFirewallRule -Enabled True
Get-NetFirewallRule | Where Enabled -like 'true' | Select
Get-Volume
Get-Volume | Where SizeRemaining -gt "8GB"
Get-Volume | Where SizeRemaining -gt 8589934592
Get-Volume | Where Size -lt '25GB'
Get-Wolume | where Size -lt 26843545600
Get-Volume | Where -Filterscript {$_.sizeremaining -gt '8GB' -and $_.size -lt
Get-Service | Where -FilterScript {$_.Status -like "Running" -and $_.StartType -
Get-LocalGroupMember L_HA_Ventes | Select Name,SID
Get-SMBShare | Select Name,Path | Where Name -like *$
Get-Volume | Where -FilterScript {$_.DriveType -eq 'CD-ROM' -and $_.HealthStatus
```

!!! warning
    Une commande extraite d’un support n’est pas à exécuter aveuglément. Vérifier la version, les droits, la cible et l’existence d’une sauvegarde avant toute action destructive.

## Module 11 - Support de cours

### Systèmes clients Microsoft

#### Module 11 — Plus loin avec PowerShell

#### Objectifs • Savoir rediriger les flux des cmdlets

- Utiliser le pipeline
- Filtrer puis formater le résultat

### Redirection

- Redirection de flux
- Le pipeline
- Filtrer l'affichage d'un résultat
- Une cmdlet :
- Reçoit des paramètres par l'entrée standard (stdin:0) par défaut le clavier
- Fournit des résultats sur la sortie standard (stdout:1) par défaut l'écran
- Affiche éventuellement les erreurs sur la sortie standard (stderr:2) par défaut l'écran

#### Entrée

#### standard

#### Stdin:0

#### (clavier)

#### cmdlet

#### Sortie

#### erreur

#### Stderr:2

#### (écran)

#### Sortie

#### standard

#### Stdout:1

#### (écran)

#### Redirection du flux de sortie standard

#### Cmdlet &gt; fichier

#### Cmdlet 1&gt;fichier Redirige le flux de sortie standard vers ‘fichier’

#### Cmdlet &gt;&gt; fichier

Cmdlet 1&gt;&gt; fichier Redirige le flux de sortie standard à la fin de ‘fichier’

#### Redirection du flux de sortie d'erreur

Cmdlet 2&gt; fichier .err Redirige le flux de sortie d'erreur vers fichier .err Cmdlet 2&gt;&gt; fichier .err Redirige le flux de sortie d'erreur à la fin de fichier .err

#### Redirection des flux

Cmdlet &gt; fichier 2&gt;&1 Redirige le flux de sortie standard et le flux de sortie d'erreur dans ‘fichier’

#### Cmdlet 2&gt;$null Redirige le flux de sortie d'erreur "dans le vide"

#### Redirection

- Exemple de redirection dans un fichier
- Get-LocalUser &gt; c:\temp\LocalUserList.txt
- Lecture du fichier
- Get-Content c:\temp\LocalUserList.txt

### Démonstration

#### Pipeline

- Déjà utilisé avec Select-Object, le pipeline transmet le résultat de la sortie standard d'une

#### cmdlet dans l'entrée standard d'une autre cmdlet

- Enchaînement de cmdlet possible

#### cmdlet1 cmdlet2

#### stdout stdin

#### cmdlet3

#### stdout stdin

### Pipeline

- Utilisé pour fournir un jeu restreint de propriétés
- exemple avec Get-NetAdapter (sans paramètre ni argument) qui affiche certaines propriétés
- Get-NetAdapter | Select Name,Status,LinkSpeed

#### Démonstration

### Filtrage

- Les objets fournis par le pipeline sont parfois nombreux
- Mettre en place le filtrage pour ne garder que les propriétés nécessaires
- Prérequis : connaître les opérateurs de comparaisons
- Par défaut insensible à la casse
- Les préfixer de "c" pour les rendre sensibles...
- … Get-Help About_Comparison_Operator …

#### Filtrage

#### Comparaison Insensibilité à la casse Sensibilité à la casse

#### Egalité -eq -ceq

#### Inégalité -ne -cne

#### Supérieur à -gt -cgt

#### Supérieur ou égal à -ge -cge

#### Inférieur à -lt -clt

#### Inférieur ou égal à -le -cle

#### Comparaison d'égalité d'expression -like -clike

#### Comparaison d'inégalité d'expression -notlike -cnotlike

### Filtrage basique

- Ne peut filtrer qu'une seule propriété
- Nécessite la cmdlet Where-Object
- Exemple Get-NetAdapter | select Name,Status,LinkSpeed
- Get-Netadapter | Select Name,Status,LinkSpeed | Where Status —like Up

#### Démonstration

### Filtrage

#### Le filtrage avancé

- Pour filtrer plusieurs propriétés
- Nécessite aussi la cmdlet Where-Object
- Nécessite un script de filtrage —FilterScript {} dans la cmdlet Where-Object
- Possibilité d'utiliser la variable $PSITEM (ou $_) pour être plus productif
- $_ contient tous les objets transmis à Where-Object

#### Filtrage

- Exemple Get-NetAdapter | select Name,Status,LinkSpeed
- Get-NetAdapter | select Name,Status,LinkSpeed | Where —FilterScript

#### {$_.Status —like "Up" —and $_.LinkSpeed —gt "100 Mbps"}

### Démonstration

#### Formatage

- Par défaut, PowerShell "formate" les résultats des cmdlets avant de les afficher à l'écran
- Le format des résultats peut être modifié à l'aide des cmdlets
- Format-List
- Format-Table
- Format-Wide
- Les cmdlets Format-* sont à réaliser en dernier lieu, "après avoir terminé le travail"

### Formatage

- Affichage sous forme de liste
- Get-Service | format-List
- Get-Service | format-List —Property *
- Get-service | FL —Property Name,Status,DisplayName
- Équivalent à Get-Service | select Name,Status,DisplayName | FL
- Affichage sous forme de tableau
- Get-TimeZone | Format-Table
- Get-TimeZone | Format-Table —Property *
- Get-TimeZone | FT —Property StandardName,BaseUtcOffset -autosize

#### Formatage

- Affichage sous forme de liste élargie
- Afficher une liste sur une ou plusieurs colonnes
- Une seule propriété de la collection d'objets est sélectionnée
- Get-Process | Format-Wide
- Get-Process | Format-Wide —Property ID
- Get-Process | FW —Property ID —column 5
- Get-Process | FW —Property ID -autosize

### Démonstration

#### TP

### Conclusion

- Maîtriser PowerShell, l’essence même d’un

#### technicien moderne

- Aller plus loin, être curieux
- S’éveiller au scripting PowerShell

## Mise en pratique

- [Travaux pratiques du module](../../tp/systemes-clients/module-11/index.md)
- [Fiche de révision du module](../../revision/systemes-clients/module-11-plus-loin-avec-powershell.md)

## Questions flash

1. Comment expliquer simplement « Plus loin avec PowerShell » à un collègue ?
2. Quelles étapes ou notions doivent être maîtrisées avant la manipulation ?
3. Quel contrôle permet de prouver que le résultat est correct ?
4. Quel est le premier risque ou piège à écarter ?

??? success "Éléments de réponse"
    - Comprendre les flux et la redirection.
    - Chaîner des objets dans le pipeline.
    - Filtrer avec Where-Object et sélectionner avec Select-Object.
    - Formater uniquement en fin de pipeline.

## Voir aussi

- [Présentation de la séquence](index.md)
