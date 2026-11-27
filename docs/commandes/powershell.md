# Commandes — Initiation à PowerShell

**Source : Initiation à PowerShell (supports et corrections de TP du Drive).** Lignes de commande reprises telles quelles ; seule la source de chaque bloc est indiquée. Domaines et identifiants de l’établissement masqués (`.lab`, `[masqué]`).

### Fiche démo 3 - Get-Command

```text
Get-Command
```

### Fiche démo 4 - Get-Help 

```text
Get-Help
```

### Fiche démo 5 - Update-Help

```text
Update-Help
commande Save-Help.
```

### Module 01 - Support de cours

```text
Get-ChildItem
Get-Service
Get-Process
Get-Volume
Get-Item
Get-SMBShare
Get-LocalUser -Name « Nom de l’utilisateur recherché »
Get-Command -Name *-Service
Get-Command -Verb Stop
Get-Help suivi du paramètre -Name
Get-Help -Name Get-Service
Get-Help -Name Get-Service -Full
Get-Help -Name Get-Service -Examples
Get-Help -Name Get-Service -ShowWindow
Update-Help -SourcePath D:\PowerShell
Update-Help -SourcePath D:\PowerShell -UICulture En-US
Set-ExecutionPolicy -ExecutionPolicy
New-Item -Path $Profile -Type File -Force
```

### Solution du TP - PremiŠres commandes

```text
Get-Verb (| measure)
Get-Command -Verb New
Get-Command -Noun *User*
Get-LocalUser | select -first 5
Set-LocalUser -Name "AxelRios" -Description "Operateur"
Get-LocalUser -Name "AxelRios"
Get-Help Get-Service
Get-Help Get-Service -showwindow
Get-Help Get-Service -full
Get-Help Get-LocalGroup - Online
Get-LocalGroupMember -Online
Update-Help -Sourcepath \\CD01\Partage\Depot\CLI01\ -UICulture EN-US
Update-Help -Sourcepath \\CD01\Partage\Depot\CLI01\ -UICulture fr-FR
Get-Module ou Get-module -all
Get-Module | measure
Get-Help about_modules -showwindow
Import-Module AWSPowserShell
```

### Fiche démo 1 - Get-Member 

```text
Get-Member
```

### Module 02 - Support de cours

```text
Get-Date
```

### Solution du TP - L'objet

```text
Get-Service | Get-Member
Get-Service -Name Spooler
Get-LocalUser -Name
Set-LocalUser -Name "adara mcintyre"-Description "Administrateur"
Get-LocalUser -Name "adara mcintyre"
Set-LocalUser -Name "adara mcintyre"-AccountExpires (get-date).adddays(2)
Set-LocalUser -Name "adara mcintyre"| select *
```

### Fiche démo 11 - Get-Content

```text
Get-Content
```

### Fiche démo 2 - Select-Object

```text
Select-Object
```

### Fiche démo 3 - Measure-Object

```text
Measure-Object
```

### Fiche démo 4 - Sort-Object

```text
Sort-Object
```

### Fiche démo 5 - Where-Object

```text
Where-Object
```

### Fiche démo 6 - Format-Table

```text
Format-Table
```

### Fiche démo 8 - Format-List

```text
Format-List
```

### Fiche démo 9 - Export-Object

```text
Export-Object
```

### Fiché démo 7 - Format-Wide

```text
Format-Wide
```

### Module 03 - Support de cours

```text
Get-EventLog
Get-EventLog -LogName « System » | Select-Object Name | Format-Table
Get-Process | Select Name,Id | Where { $PSItem.Id -gt 1500 -and $PSItem.Id -lt 2000}
Get-Service | Select-Object -Property Name
Get-Service | Select-Object -Property Name,Status
Get-Service | Select
Get-Service | Select-Object -First 5
Get-Service | Select-Object -Last 5
Get-Process | Select-Object -Unique Name
Get-Service | Select-Object -ExpandProperty Name
Get-Service | Select-Object Name,Status | Sort-Object Status
Get-Process | Select Name,id | Sort id -Descending
Get-ChildItem -Path C:\Windows -File | Sort-Object -Property Length
Get-Process | Measure-Object
Get-ChildItem -File | Measure-Object -Property Length -Average
Get-Get-ChildItem -File | Measure-Object -Property Length -Minimum -Maximum
Get-Help Measure-Object
Get-Service | Where-Object -Property
Get-Process | Where-Object -Property
Get-Process | Select Name,Id | Where -Filterscript{$PSitem.Id-gt1500
Get-Process | Select Name,Id | Where{$_.Name-like’’Power*’’-and$_.Id
Get-LocalUser | Select Name,Sid | Where-Filterscript{$PSitem.Name-eq
Get-AdUser -Filter * | Format-table-Property Enabled,Name,SamAccountName
Get-AdUser -Filter * | Format-table-GroupBy Enabled
Get-Service | Format-Table -HideTableHeaders
Get-Service | Format-Table -Wrap
Get-Service | Format-Wide -Column 10
Get-Service | Format-Wide -AutoSize
Get-AdUser -filter * | Export-CSVC:\[masqué]\ExportCSV.csv-Délimiter «;»
Get-AdUser -filter * | Export-CSVC:\[masqué]\ExportCSV.csv-Delimiter «;»
Get-Service | ConvertTo-Html | Out-File C:\[masqué]\Services.html
Get-Service | Out-File C:\[masqué]\Services.txt
Get-Service | Out-File C:\[masqué]\Services.txt -Append
Get-Service | Out-File C:\[masqué]\Services.txt -Width 42
Get-Content.
Get-Content C:\User.csv
Get-Content | C:\User.csv -Tail 1
Import-CSV C:\Users.csv -Delimiter « ; » | New -AdUser
Import-CSV C:\Users.csv -Delimiter «;»|New-AdUser -Name$_.nom
Import-CSV C:\Users.csv -Delimiter « ; » |
Select-Object GivenName,@{n=‘Name’; e={$_.nom}} |
New-AdUser -Name $_.Name
Get-ChildItem -File | Select Name,
Get-Volume | Select DriveLetter,
```

### Solution du TP - Manipuler des objets

```text
Get-AdUser
Get-Help Get-ADUser -ShowWindow
Get-AdUser -Filter * -Properties *
Get-AdUser -Filter * | Select-Object -First 5
Get-AdUser -Filter * | Select-Object City
Get-AdUser -Filter * | Select-Object Department
Get-ADUser -Filter * -Properties * | Select Name,Enabled,Department,City
Get-ADUser -Filter * | Where enabled -eq $True
Get-ADUser -Filter * | Where-object -filterscript { $PSItem.enabled -eq
Get-ADUser -Filter * | Where-Object Enabled -like $True | measure
Get-ADUser -Filter * | Where-Object Enabled -like $False | measure
Get-ChildItem \\CD01\Partage\ -File -Recurse
Get-ChildItem \\CD01\Partage\ -File -Recurse | Measure -Property length average
Get-ChildItem \\CD01\Partage\ -File -Recurse | Measure -Property length min -max
Get-ChildItem \\CD01\Partage\ -File -Recurse | Where
Get-ChildItem -path \\CD01\Partage -File -recurse | where -filterscript {
Get-ADUser -Filter * | Format-Wide -Column 5
Get-ADUser -Filter * -Properties * | Where enabled -eq $True | FormatTable name,enabled,Department,City
Get-ADGroup -Filter * -Properties * | Format-Table -Property
Get-ADComputer
Get-EventLog system | select-object time,index,message
Get-EventLog system | fl -property timewritten,index,message
Export-CSV
Import-CSV -Path \\CD01\Partage\Exports\CSV\Users.CSV -delimiter ";" |
Get-Aduser -filter * | Remove-aduser -confirm : $False
Import-CSV
```

### Fiche démo 2 - Les types de variables

```text
type System.Object)
```

### Module 04 - Support de cours

```text
Get-Variable permet d’afficher les variables actuellement déclarées
```

### Fiche démo 9 - Le Invoke-Command

```text
Le Invoke-Command
```

### Module 05 - Support de cours

```text
Get-ChildItem C:\Dossier -ErrorVariable Erreurs
Enter-PSSession -Computername DC01
Exit-PSSession
Disconnect-PSSession -Session $Session
Get-PSSession -Computername DC01
Get-PSSession -Computername DC01 | Connect-PSSession
Get-PSSession | Remove-PSSession
Get-Module -PSSession $Session -ListAvailable
Import-Module -PSSession $Session -name ActiveDirectory -Prefix DC
Help Get-DCADUser
Get-DCADUser -Filter *
Invoke-Command
Invoke-Command -Computername DC01,SRV01 -ScriptBlock {
Get-Process PowerShell* }
Get-Process $Using:Process}
```

### M01-cours-support

```text
Get-ChildItem Get-Service Get-Volume
Get-Process Get-Item Get-SMBShare
Get-Help Champ de recherche
```

### M03-tp-solution-manipuler-des-objets

```text
Get-AdUser -Filter * | Select-Object -Property
Get-ChildItem \\CD01\Partage\ -File -Recurse | Where -FilterScript
Get-ADUser -Filter * -Properties * | Where enabled -eq $True | Format-
Get-ADComputer -Filter * -Properties * | Format-List
Get-ADUser -Filter * | Export-CSV -Path
Get-ADUser -Filter * -properties * | Export-CSV -Path
Get-ADComputer -Filter * | Export-CSV -Path
Get-ChildItem -path \\CD01\Partage\ -file -recurse | Select
```

### M03-cours-support

```text
Get-Service | Select Name,Status
Get-Service | Where-Object -Property Status -eq ’’Running’’
Get-Process | Where-Object -Property Name -like ’’Power*’’
Select-Object GivenName,@{n=‘Name’; e={$_.nom}} | être récupérée
New-AdUser -Name $_.Name -GivenName $_.GivenName
```

### M02-cours-support

```text
Get-Command Get-Help Get-Member
Get-Service -ServiceName « Wsearch »
```

[Cours](../modules/12-initiation-powershell/index.md)
