# Commandes Windows et PowerShell

```powershell
Get-Help Get-Service -Full
Get-Command *NetIP*
Get-Process | Where-Object CPU -gt 10 | Sort-Object CPU -Descending
Get-Service | Where-Object Status -eq 'Running'
Get-LocalUser
Get-LocalGroupMember -Group 'Administrateurs'
Get-Disk
Get-Volume
Get-NetIPConfiguration
Get-WinEvent -LogName System -MaxEvents 50
```

!!! tip
    Dans PowerShell, filtrer et sélectionner les objets avant d’utiliser `Format-Table` ou `Format-List`. Les cmdlets de formatage produisent des objets destinés à l’affichage, pas à la suite d’un traitement.
