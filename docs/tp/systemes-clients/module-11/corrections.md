# Corrections — Module 11 — Plus loin avec PowerShell

!!! warning
    Une correction décrit le contexte du laboratoire. Comparer la logique et les contrôles avant de reprendre une valeur, une version ou un chemin dans un autre environnement.

## Solution du TP - PowerShell redirection, pipeline, filtrage, formatage

### Systèmes Clients Microsoft

Redirection, pipeline,

#### filtrage, formatage

#### TP du Module 11 — Plus loin avec Powershell

Sur Win10-XX, recherchez les commandes adaptées pour les besoins suivants

- Affichez la date du jour, puis, à l'aide de la même commande, affichez le quantième

#### de l'année (le numéro du jour de l’année)

`Get-Date`

`Get-Date | Select DayOfYear`

- Affichez la liste des évènements ayant été enregistrés dans le journal security

`Get-EventLog -LogName Security`

#### Et il y en a beaucoup !

- À l'aide de la commande précédente, affichez les évènements dont l'EventID est 4624

`Get-EventLog -LogName Security | Where EventID -eq 4624`

- Affichez la liste précédente en ne montrant que l’ EventID, la date d’écriture de

#### l’évènement et le message

`Get-EventLog -LogName Security | Where EventID -eq 4624 | Select`

#### EventID,TimeWritten, Message

- Affichez la liste des règles de pare-feu activées

`Get-NetFirewallRule | Where Enabled -like 'True'`

#### ou

`Get-NetFirewallRule -Enabled True`

- Parmi ces règles de pare -feu activées, n'affichez que leurs noms, le profil réseau à

laquelle elles appartiennent, leurs directions et si elles autorisent ou bloquent l'accès

`Get-NetFirewallRule | Where Enabled -like 'true' | Select`

#### DisplayName,Profile,Direction, Action

#### Afficher des propriétés selon plusieurs critères

- Sur Discovery, affichez la liste des volumes disques :

`Get-Volume`

- Affichez la liste des volumes qui possèdent plus de 8 Go d’espace libre :

`Get-Volume | Where SizeRemaining -gt "8GB"`

#### ou

`Get-Volume | Where SizeRemaining -gt 8589934592`

#### 8589934592 = 8 x 1024 x 1024 x 1024

- Affichez la liste des volumes dont la taille maximum ne dépasse pas 25 Go :

`Get-Volume | Where Size -lt '25GB'`

#### ou

`Get-Wolume | where Size -lt 26843545600`

- Affichez la liste des volumes qui possèdent plus de 8Go d'espace libre et dont la taille

#### maximale ne dépasse pas 25 Go

`Get-Volume | Where -Filterscript {$_.sizeremaining -gt '8GB' -and $_.size -lt`

#### '25GB'}

- Le résultat de la commande précédente ne devra afficher que le nom, la lettre de

#### lecteur et le type de système de fichier… le tout sous forme de liste

`Get-Volume | Where -Filterscript {$_.SizeRemaining -gt '8GB' -and $_.Size -lt`

#### '25GB'} | FL FileSystemLabel,DriveLetter,FileSystemType

- Affichez les noms et status des services qui sont actuellement démarrés et qui démarrent

automatiquement au lancement du système d’exploitation.

`Get-Service | Where -FilterScript {$_.Status -like "Running" -and $_.StartType -`

#### like "Automatic"} | Select Name,Status

- Affichez les membres (et leur SID) du groupe L_HA_Ventes.

`Get-LocalGroupMember L_HA_Ventes | Select Name,SID`

- Affichez le nom et le chemin des partages administratifs sous forme de liste

`Get-SMBShare | Select Name,Path | Where Name -like *$`

- Affichez la lettre de lecteur, le type de lecteur et l’état de santé des volumes dont l’état

#### est sain et de type CD-ROM :

`Get-Volume | Where -FilterScript {$_.DriveType -eq 'CD-ROM' -and $_.HealthStatus`

#### -eq 'Healthy'} | Select DriveLetter,DriveType,HealthStatus

- Affichez le nom, le type, le nom du pilote et le nom du partage de l’imprimante HP

LaserJet. Le résultat sera affiché sous la forme d'une liste.

`Get-Printer -Name *Laser* | FL Name,Type,DriverName,ShareName`
