# Déplace le dossier de spool vers D:\Spool. Exécuter en administrateur.
$Spool = 'D:\Spool'
Stop-Service Spooler -Force
New-Item -ItemType Directory -Path $Spool -Force | Out-Null
icacls $Spool /inheritance:r | Out-Null
icacls $Spool /grant:r '*S-1-5-18:(OI)(CI)F' '*S-1-5-32-544:(OI)(CI)F' | Out-Null
Set-ItemProperty -Path 'HKLM:\SYSTEM\CurrentControlSet\Control\Print\Printers' -Name 'DefaultSpoolDirectory' -Value $Spool
Start-Service Spooler
Get-ItemProperty -Path 'HKLM:\SYSTEM\CurrentControlSet\Control\Print\Printers' -Name 'DefaultSpoolDirectory'
