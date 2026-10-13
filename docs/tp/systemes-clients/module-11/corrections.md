# Corrections — Module 11 — Plus loin avec PowerShell

Les exemples suivants restituent les méthodes indiquées dans la correction TSSR. Les noms d’objets, résultats et observations dépendent du laboratoire.

## 1. Date et évènements

| Besoin | Cmdlet et pipeline source | Contrôle |
| --- | --- | --- |
| Date du jour | `Get-Date` | la date s’affiche |
| Quantième de l’année | `Get-Date \| Select DayOfYear` | la propriété `DayOfYear` est affichée |
| Journal Security | `Get-EventLog -LogName Security` | la liste peut être importante |
| Évènement 4624 | `Get-EventLog -LogName Security \| Where EventID -eq 4624` | seuls les évènements demandés restent |
| Propriétés utiles | `Get-EventLog -LogName Security \| Where EventID -eq 4624 \| Select EventID,TimeWritten,Message` | les trois propriétés demandées sont visibles |

## 2. Règles de pare-feu

```powershell
Get-NetFirewallRule | Where Enabled -like 'True'
# ou
Get-NetFirewallRule -Enabled True

Get-NetFirewallRule | Where Enabled -like 'true' |
    Select DisplayName,Profile,Direction,Action
```

Le contrôle consiste à retrouver les règles activées et les quatre propriétés demandées.

## 3. Volumes : filtrer, sélectionner, formater

```powershell
Get-Volume
Get-Volume | Where SizeRemaining -gt '8GB'
Get-Volume | Where SizeRemaining -gt 8589934592
Get-Volume | Where Size -lt '25GB'
Get-Volume | Where -FilterScript {
    $_.SizeRemaining -gt '8GB' -and $_.Size -lt '25GB'
} | Select FileSystemLabel,DriveLetter,FileSystem | Format-List
```

La correction précise que `8589934592` correspond à `8 x 1024 x 1024 x 1024`. Le dernier formatage intervient après le filtre et la sélection.

!!! note "NEEDS_REVIEW — divergence documentaire"
    Une alternative de la correction écrit `Get-Wolume`, tandis que le support et les autres exemples écrivent `Get-Volume`. La divergence est conservée comme telle ; elle n’est pas corrigée silencieusement.

## 4. Services, groupe et partages

```powershell
Get-Service | Where -FilterScript {
    $_.Status -like 'Running' -and $_.StartType -like 'Automatic'
} | Select Name,Status

Get-LocalGroupMember L_HA_Ventes | Select Name,SID
Get-SMBShare | Select Name,Path | Where Name -like '*$' | Format-List
```

Vérifiez que le résultat conserve uniquement les services, membres ou partages correspondant au besoin exprimé.

## 5. Volume CD-ROM et imprimante

```powershell
Get-Volume | Where -FilterScript {
    $_.DriveType -eq 'CD-ROM' -and $_.HealthStatus -like 'Healthy'
} | Select DriveLetter,DriveType,HealthStatus

Get-Printer -Name 'HP LaserJet' |
    Select Name,Type,DriverName,ShareName | Format-List
```

Le nom d’imprimante et les objets consultés relèvent du scénario source. Interprétez le résultat dans cet environnement, sans le généraliser.

## Méthode réutilisée dans l’atelier

Pour chaque exercice : partir de la cmdlet adaptée, ajouter le pipeline nécessaire, filtrer, sélectionner les propriétés attendues, formater uniquement à la fin si la consigne le demande, puis vérifier le résultat affiché.

## Provenance pédagogique

- **A — Source TSSR :** correction du TP M11.
- **B — Structuration pédagogique :** regroupement par besoin, sans modification des formes `Where` / `Where-Object` ni des noms du scénario.
