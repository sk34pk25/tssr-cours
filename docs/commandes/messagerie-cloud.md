# Commandes — Messagerie Cloud

**Source : Messagerie Cloud (supports et corrections de TP du Drive).** Lignes de commande reprises telles quelles ; seule la source de chaque bloc est indiquée. Domaines et identifiants de l’établissement masqués (`.lab`, `[masqué]`).

### M4 - Solution du TP 1 - Déploiement Office 365

```text
gpupdate /force
```

### Module 04 - Support de cours

```text
.\setup.exe /download \\SM01\office_365\Configuration.xml
.\setup.exe /configure \\SM01\office_365\Configuration.xml
.\setup.exe /download \\cd01\office_365\Configuration.xml
```

### M04-tp-solution-deploiement-office-365

```text
.\setup.exe /configure \\Serveur\partage
```

### Module 01 - Support de cours

```text
service, indisponibilités)
```

### M2 - Solution du TP 1 - Utilisateurs et groupes

```text
New-MsolUser -UserPrincipalName SachaTouille@votredomaine.lab -DisplayName
Get-MsolAccountSku
Get-MsolUser
ForEach-Object
New-MsolUser -UserPrincipalName utilisateur@votredomaine.lab -DisplayName utilisateur FirstName
Add-MsolRoleMember
Set-MsolUser
Remove-MsolUser -UserPrincipalName "Sacha@votredomaine.lab"
Restore-MsolUser -UserPrincipalName "Sacha@votredomaine.lab"
Set-MsolUserLicense
New-MsolLicenseOptions
Set-MsolUserPassword
```

### M2 - Solution du TP 2 - Azure AD Connect

```text
Install-Module AzureAD
Start-ADSyncSyncCycle Delta
```

### Module 02 - Support de cours

```text
Connect-MsolService
Connect-SPOService -Url https://$orgName-admin.sharepoint.com
Import-Module MicrosoftTeams
Connect-MicrosoftTeams
Import-Module ExchangeOnlineManagement
Connect-ExchangeOnline -UserPrincipalName $acctName -ShowProgress $true
Connect-IPPSSession -UserPrincipalName $acctName
New-MsolUser -UserPrincipalName jpetit@votredomaine.lab -DisplayName Jean Petit -FirstName Jean LastName Petit -Password [masqué] -ForceChangePassword $true -UsageLocation fr
Remove-MsolUser -UserPrincipalName "jpetit@votredomaine.lab"
Restore-MsolUser -UserPrincipalName "jpetit@votredomaine.lab"
Connect-ExchangeOnline
Set-MsolUserLicense -UserPrincipalName "jpetit@votredomaine.lab" -AddLicenses "Adatum201812345:ENTERPRISEPREMIUM"
Set-MsolUserLicense -UserPrincipalName "jpetit@votredomaine.lab" -RemoveLicenses "Adatum201812345:ENTERPRISEPREMIUM"
Get-MsolUser -all -Department Account -UsageLocation CH -UnlicensedUsersOnly | ForEachObject {Set-MsolUserLicense -UserPrincipalName $PSITEM.UserPrincipalName -AddLicenses
Get-Mailbox jpetit@votredomaine.lab | fl *quota*
Get-Mailbox jpetit@votredomaine.lab | fl *retain*
Set-Mailbox -Identity "Jean Petit" -RetainDeletedItemsFor 30
Get-Mailbox -SoftDeletedMailbox
New-Mailbox -Name "vidéoproj_1" -DiplayName "vidéoproj_1" -equipment
New-Mailbox -Shared -Name "support" -DiplayName "support" -Alias "support" | Set-Mailbox -GrantSendOnBehalfTo
Start-ADSyncSyncCycle -PolicyType Initial
Start-ADSyncSyncCycle -PolicyType Delta
Get-MsolRole
Get-MsolUserRole
```

### M03-tp-solution-utilisateurs-et-groupes

```text
Set-MsolUser -UserPrincipalName Oussama@votredomaine.lab -title "Chef
```

### M03-cours-support

```text
Get-MsolUser -all -Department Account -UsageLocation CH -UnlicensedUsersOnly | ForEach-
```

[Cours](../modules/14-messagerie-cloud/index.md)
