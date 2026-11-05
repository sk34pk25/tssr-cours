# Correction — Activités pour aller plus loin

L’archive TP6.7z fournit une correction Active Directory pour l’activité 1 et une correction DNS pour l’activité 2. Les scripts sont repris intégralement ci-dessous. Les valeurs d’accès du laboratoire sont neutralisées.

## Activité 1 — Lire la correction Active Directory

Repérer d’abord les paramètres de la société et la base LDAP. Suivre les OU `Groupes`, `Utilisateurs` et `Ordinateurs`, puis les modèles Direction, Informatique et Utilisateurs. Les instructions de création, les propriétés des modèles et les rattachements expliquent les rôles affectés à chaque personne. Le commentaire d’une ligne doit préciser l’objet concerné et l’effet attendu.

L’extension de la correction crée un partage SMB et ajoute des ACL NTFS. Ces opérations figurent dans le script fourni. Elles dépassent le commentaire des objets AD demandé par l’activité. Dans le compte rendu, identifier séparément la création des objets, les appartenances aux groupes, la délégation et les permissions du partage.


### Script AD fourni

[Transcription du fichier fourni](../../../assets/course-sources/2809a571726eb941/transcription-1feFTnFkBcojCBjy6y36UD3ApBv9A-KQh_member_04.html)

```powershell
############################
# Gestion des utilisateurs #
############################

# Création des OU pour objets
$societe="_Entreprise"
New-ADOrganizationalUnit $societe -ProtectedFromAccidentalDeletion $false
## Variable localisation chemin dans AD
$base = Get-ADOrganizationalUnit -Filter { name -like "_Ent*" }
New-ADOrganizationalUnit Groupes -Path $base -ProtectedFromAccidentalDeletion $false
New-ADOrganizationalUnit Utilisateurs -Path $base -ProtectedFromAccidentalDeletion $false
New-ADOrganizationalUnit Ordinateurs -Path $base -ProtectedFromAccidentalDeletion $false
Get-ADOrganizationalUnit -filter * -SearchBase $base | ft name,DistinguishedName -AutoSize

# Création des modeles et comptes
$ubase = Get-ADOrganizationalUnit -Filter { name -eq "Utilisateurs" }
$upn = "@ad30.societegb.fr"
# Modeles Direction - Informatique - Utilisateurs
New-ADUser -Name "_mod_dir" -SamAccountName "mod_dir" -Description "Modèle Direction" -City Nantes -PostalCode 44000 -Department Direction -Company "Société GB" -Path $ubase
New-ADUser -Name "_mod_info" -SamAccountName "mod_info" -Description "Modèle Informatique" -City Nantes -PostalCode 44000 -Department Informatique -Company "Société GB" -Path $ubase
New-ADUser -Name "_mod_util" -SamAccountName "mod_util" -Description "Modèle Utilisateurs" -Company "Société GB" -Path $ubase

# Configuration horaire d'acces
# D'apres http://kb.delborrell.net/2018/06/22/deploy-logon-hours-via-powershell/ - via Thomas ROUGEAULT
[byte[]]$hours = @(0,0,0,192,255,15,192,255,15,192,255,15,192,255,15,192,255,15,192,255,15)
Set-ADUser -Identity "mod_util" -Replace @{logonhours = $hours}

# Utilisation modele direction
$mdir = get-aduser -Filter { samaccountname -eq "mod_dir" } -Properties city,postalcode,department,company
$uname = "david"
new-aduser -Instance $mdir -name $uname -givenname $uname -SamAccountName $uname -UserPrincipalName $uname$upn -Path $ubase -OfficePhone "504" -Title "Directeur Comptabilités Finances"

# Utilisation modele informatique
$minf = get-aduser -Filter { samaccountname -eq "mod_info" } -Properties city,postalcode,department,company
$unames = @("isabelle","ivan")
foreach ($uname in $unames) {
    new-aduser -Instance $minf -name $uname -givenname $uname -SamAccountName $uname -UserPrincipalName $uname$upn -Path $ubase
}
## Parametrage complementaires
Set-ADUser -Identity isabelle -Title "Administratrice SR" -OfficePhone "666"
Set-ADUser -Identity ivan -title "Support Technique"

# Utilisation modele utilisateurs
$mutil = get-aduser -Filter { samaccountname -eq "mod_util" } -Properties logonhours,company
$unames = @("christelle","christophe")
foreach ($uname in $unames) {
    new-aduser -Instance $mutil -name $uname -givenname $uname -SamAccountName $uname -UserPrincipalName $uname$upn -Path $ubase
}
## Parametrages complementaires
Set-ADAccountExpiration -Identity "christophe" -DateTime "01/01/2021"

# Attribution mot de passe et activation
$unames = @("david","isabelle","christelle")
$mdp = 'fourni par le formateur'
 foreach ($uname in $unames) {
   Set-ADAccountPassword $uname -NewPassword (ConvertTo-SecureString -AsPlainText $mdp -force)
   Enable-ADAccount $uname
 }

$unames = @("ivan","christophe")
$mdp = 'fourni par le formateur'
 foreach ($uname in $unames) {
   Set-ADAccountPassword $uname -NewPassword (ConvertTo-SecureString -AsPlainText $mdp -force)
   Enable-ADAccount $uname
 }

# Création des groupes globaux
$gbase = Get-ADOrganizationalUnit -Filter { name -eq "Groupes" }
New-ADGroup G_Compta -Path $gbase -GroupScope Global -Description "Service Comptabilité"
New-ADGroup G_Direction -Path $gbase -GroupScope Global -Description "Service Direction" `
    -OtherAttributes @{'mail'='direction@societegb.fr'}
New-ADGroup G_Info -Path $gbase -GroupScope Global -Description "Service Informatique"
New-ADGroup G_Info_Tech -Path $gbase -GroupScope Global -Description "Techniciens - Service Informatique"
New-ADGroup G_Interim -Path $gbase -GroupScope Global -Description "Personnel intérimaire"
# Liste des groupes globaux
Get-ADGroup -Filter { name -like "G_*" } | Format-Table name,DistinguishedName -AutoSize

# Ajout membres aux groupes
Add-ADGroupMember G_Compta christelle,christophe
Add-ADGroupMember G_Direction david,mod_dir
Add-ADGroupMember G_Info isabelle,ivan,mod_info
Add-ADGroupMember G_Info_Tech ivan
Add-ADGroupMember G_Interim christophe

# Membres des groupes
$gg = Get-ADGroup -Filter { name -like "G_*" }
foreach ($group in $gg) {
    $group.Name
    Get-ADGroupMember $group | Format-Table name,DistinguishedName -AutoSize
    }

# Création des OU pour utilisateurs
## Variable localisation chemin objets utilisateurs dans AD
$ubase = Get-ADOrganizationalUnit -Filter { name -eq "Utilisateurs" }
New-ADOrganizationalUnit S_Direction -Path $ubase -ProtectedFromAccidentalDeletion $false
New-ADOrganizationalUnit S_Compta -Path $ubase -ProtectedFromAccidentalDeletion $false
New-ADOrganizationalUnit S_Info -Path $ubase -ProtectedFromAccidentalDeletion $false
## Liste de toutes les OU
$base = Get-ADOrganizationalUnit -Filter { name -like "_Ent*" }
Get-ADOrganizationalUnit -filter * -SearchBase $base | ft name,DistinguishedName -AutoSize
## Deplacement des objets - à préciser
#Move-ADObject

# BONUS - Extraction données dans fichier
Get-ADGroupMember G_Info | select name,distinguishedname | Out-File -Encoding utf8 "c:\ctrl_membres_informatique.txt"
Get-ADUser david | out-file -Encoding utf8 "c:\detail_user_david.txt"


###########################
# Gestion des permissions #
###########################

# Création des groupes de domaine local
$gbase = Get-ADOrganizationalUnit -Filter { name -eq "Groupes" }
New-ADGroup DL_Racine_Data_CT -Path $gbase -GroupScope DomainLocal -Description "Racine DATA en CT"
New-ADGroup DL_Racine_Data_M -Path $gbase -GroupScope DomainLocal -Description "Racine DATA en M"
New-ADGroup DL_Racine_Data_L -Path $gbase -GroupScope DomainLocal -Description "Racine DATA en L"
New-ADGroup DL_Data_Doc_CT -Path $gbase -GroupScope DomainLocal -Description "DATA Docs en CT"
New-ADGroup DL_Data_Doc_M -Path $gbase -GroupScope DomainLocal -Description "DATA Docs en M"
New-ADGroup DL_Data_Doc_L -Path $gbase -GroupScope DomainLocal -Description "DATA Docs en L"
New-ADGroup DL_Data_Doc_Refus -Path $gbase -GroupScope DomainLocal -Description "DATA Docs en refus"
New-ADGroup DL_Data_Compta_CT -Path $gbase -GroupScope DomainLocal -Description "DATA Compta en CT"
New-ADGroup DL_Data_Compta_M -Path $gbase -GroupScope DomainLocal -Description "DATA Compta en M"
New-ADGroup DL_Data_Compta_L -Path $gbase -GroupScope DomainLocal -Description "DATA Compa en L"
#
Get-ADGroup -Filter { name -like "DL_*" } | ft name,DistinguishedName -AutoSize

# Création groupes globaux supplémentaires
New-ADGroup G_Entreprise -Path $gbase -GroupScope Global -Description "Personnel de l'entreprise"
Add-ADGroupMember G_Entreprise G_Compta,G_Direction,G_Info
New-ADGroup G_Info_Adm -Path $gbase -GroupScope Global -Description "Administrateurs - Service Informatique"
Add-ADGroupMember G_Info_Adm isabelle

# Appartenances de groupes partages Documentation et Compta
Add-ADGroupMember DL_Racine_Data_CT G_Info_Adm
Add-ADGroupMember DL_Data_Doc_L G_Entreprise
Add-ADGroupMember DL_Data_Doc_Refus G_Interim
Add-ADGroupMember DL_Data_Compta_M G_Compta
# Ajout acces supplementaire pour direction
Add-ADGroupMember DL_Data_Compta_L G_Direction

# Création DL pour délégation
New-ADGroup DL_Delegu_Gestion_Comptes_Compta -Path $gbase -GroupScope DomainLocal -Description "Délégation gestion des comptes Compta"
New-ADGroup DL_Delegu_Gestion_Comptes -Path $gbase -GroupScope DomainLocal -Description "Délégation gestion des comptes entreprise - sauf Service Info"
# Création G pour délégation
New-ADGroup G_Direction_Resp -Path $gbase -GroupScope Global -Description "Responsable - Service Direction"
Add-ADGroupMember G_Direction_Resp david

# Appartenances de groupes de délégation
Add-ADGroupMember DL_Delegu_Gestion_Comptes_Compta G_Direction_Resp
Add-ADGroupMember DL_Delegu_Gestion_Comptes G_Info_Tech

########################
# BONUS Partage Public #
########################

# Création des groupes de domaine local
New-ADGroup DL_Partage_Public_CT -Path $gbase -GroupScope DomainLocal -Description "Partage Public en CT"
New-ADGroup DL_Partage_Public_L -Path $gbase -GroupScope DomainLocal -Description "Partage Public en L"
New-ADGroup DL_Partage_Public_Crea -Path $gbase -GroupScope DomainLocal -Description "Partage Public création répertoire - dossier seulement"
New-ADGroup DL_Partage_Public_Refus_Mod -Path $gbase -GroupScope DomainLocal -Description "Partage Public Refus Modifier uniquement"
# Appartenances de groupes partage Public
Add-ADGroupMember DL_Partage_Public_CT G_Info_Adm
Add-ADGroupMember DL_Partage_Public_Crea G_Entreprise
Add-ADGroupMember DL_Partage_Public_L G_Entreprise
Add-ADGroupMember DL_Partage_Public_Refus_Mod G_Interim


# Gestion des permissions - partage Public

# Installation du module NTFSsecurity
# => Nécessite l'acces Internet => paramètre proxy
install-module ntfssecurity

# Création du répertoire
$pub = "F:\Public"
mkdir $pub

# Configuration des permissions
Disable-NTFSAccessInheritance $pub
Clear-NTFSAccess $pub
Add-NTFSAccess -Path $pub -AccessRights FullControl -Account "Système","Administrateurs"
Add-NTFSAccess -Path $pub -AccessRights FullControl -Account "DL_Partage_Public_CT"
Add-NTFSAccess -Path $pub -AccessRights ReadAndExecute -Account "DL_Partage_Public_L"
Add-NTFSAccess -Path $pub -AccessRights CreateDirectories,CreateFiles -AppliesTo ThisFolderOnly -Account "DL_Partage_Public_Crea"
Add-NTFSAccess -Path $pub -AccessRights FullControl -Account "CREATEUR PROPRIETAIRE"
Add-NTFSAccess -Path $pub -AccessRights Write,Delete,DeleteSubdirectoriesAndFiles -AccessType Deny -Account "DL_Partage_Public_Refus_Mod"

Get-NTFSAccess $pub | ft -wrap

# Configuration du partage
New-SmbShare -Name Public -Path $pub -FullAccess "Utilisateurs authentifiés"


###################
# GPO - Atelier 7 #
###################

# Gestion des permissions - partage redirection
$gbase = Get-ADOrganizationalUnit -Filter { name -eq "Groupes" }
New-ADGroup DL_Base_Redir_Crea -Path $gbase -GroupScope DomainLocal -Description "Partage Redirection - Création répertoire - dossier seulement"
Add-ADGroupMember DL_Base_Redir_Crea G_Compta
```


## Activité 2 — Comparer la consigne DNS et la correction

| Dans le script de consigne | Forme utilisée dans la correction | Ce que l’on vérifie |
| --- | --- | --- |
| `Install-WindowsFeature dnsserver -IncludedManagementTools` | `Install-WindowsFeature dns -IncludeManagementTools` | Nom du rôle et paramètre réel |
| `Set-DnsClientServerAddresse -InterfaceIndex` sans valeur | `Set-DnsClientServerAddress -InterfaceIndex 6` | Orthographe et index de la carte du laboratoire |
| `Reboot-Computer` | `Restart-Computer` | Nom de commande et effet du redémarrage |
| `Add-DnsServerConditionalForwardedZone` | `Add-DnsServerConditionalForwarderZone` | Redirecteur conditionnel et serveur maître |
| `Set-DnsServerconditionalForwarder` | `Set-DnsServerForwarder` | Redirecteurs du serveur |
| `Add-DnsServerfirstZone` | `Add-DnsServerPrimaryZone` | Création de la zone primaire |
| `RessourceRecord` et `-Zone` | `ResourceRecord` et `-ZoneName` ou `-ZoneFile` selon la commande | Type d’enregistrement, zone et fichier |
| `Set-DnsServer -DynamicUpdate` incomplet | `Set-DnsServerPrimaryZone -DynamicUpdate NonsecureAndSecure` | Mise à jour dynamique de la zone dans ce scénario |

La correction ajoute des enregistrements `NS` et des adresses liées aux serveurs secondaires. Elle ne contient pas la création de leur zone secondaire. Pour compléter cet objectif, la commande `Add-DnsServerSecondaryZone` s’exécute sur le serveur secondaire de la maquette avec le nom de zone, son fichier et l’adresse d’un maître autorisé. Vérifier ensuite le type de zone et les résultats de résolution sur ce serveur. [Référence Microsoft de Add-DnsServerSecondaryZone](https://learn.microsoft.com/en-us/powershell/module/dnsserver/add-dnsserversecondaryzone).

Le parseur reconnaît la grammaire du script. Il ne résout pas les noms de commandes, les paramètres, les interfaces ni les droits DNS. Expliquer chaque différence en vérifiant l’aide des commandes du rôle installé. Les adresses et le suffixe du script sont ceux de sa maquette.


### Script DNS fourni

[Transcription du fichier fourni](../../../assets/course-sources/275ac03c4a3c630e/transcription-1feFTnFkBcojCBjy6y36UD3ApBv9A-KQh_member_03.html)

```powershell
# Installation et configuration DNS - Cours Services réseau Windows et GNU/Linux
# Gilles Brossier  - 15/03/2018
#
# Installation composant
Install-WindowsFeature dns -IncludeManagementTools

# Machine client de son service DNS
Set-DnsClientServerAddress  -InterfaceIndex 6 -ServerAddresses 172.20.0.2 -PassThru

# Configuration Suffixe DNS Principal
Set-ItemProperty “HKLM:\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters\” –Name Domain –Value "gilles.eni"
Restart-Computer

## Redirecteurs
# Redirecteur conditionnel
Add-DnsServerConditionalForwarderZone -ZoneName "gilles.eni" -MasterServers 172.20.0.1
# Redirecteur vers S1-GL et ENI
Set-DnsServerForwarder -IPAddress 10.0.0.3,10.100.0.3 -PassThru

## Zones

# Zone enfant ad.gilles.eni
Add-DnsServerPrimaryZone -Name "ad.gilles.eni" -ZoneFile "ad.gilles.eni.dns"
# Glue DNS pour le NS de la zone
Add-DnsServerResourceRecord -A -Name "s2-w-cd.gilles.eni." -IPv4Address 172.20.0.1 -ZoneName "ad.gilles.eni"
# Enregistrement dans la zone
Add-DnsServerResourceRecord -A -Name "dns1" -IPv4Address 172.20.0.2 -ZoneName "ad.gilles.eni"

#Add-DnsServerResourceRecord -CName -Name "dns2" -HostNameAlias "s3-gl.gilles.eni" -ZoneName "ad.gilles.eni"
# Lister le contenu de la zone
Get-DnsServerResourceRecord -ZoneName "ad.gilles.eni" | ft -AutoSize
# Activation de la mise à jour dynamique
Set-DnsServerPrimaryZone -name "ad.gilles.eni" -DynamicUpdate NonsecureAndSecure

# Configuration des serveurs secondaires + glue DNS
Add-DnsServerResourceRecord -NS -Name "ad.gilles.eni" -NameServer "s3-gl.gilles.eni" -ZoneName "ad.gilles.eni"
Add-DnsServerResourceRecord -A -Name "s3-gl.gilles.eni." -IPv4Address 172.20.8.3 -ZoneName "ad.gilles.eni"
## Ou
Add-DnsServerResourceRecord -NS -Name "ad.gilles.eni" -NameServer "s4-w-sm.gilles.eni" -ZoneName "ad.gilles.eni"
Add-DnsServerResourceRecord -A -Name "s4-w-sm.gilles.eni." -IPv4Address 172.20.8.4 -ZoneName "ad.gilles.eni"

# Zone inverse réseau 172.20.0.0/16
Add-DnsServerPrimaryZone -NetworkId 172.20.0.0/16 -ZoneFile 20.172.dns -DynamicUpdate NonsecureAndSecure
#Ou
#Add-DnsServerPrimaryZone -Name "20.172.in-addr.arpa" -ZoneFile 20.172.dns -DynamicUpdate NonsecureAndSecure
Add-DnsServerResourceRecordPtr -Name "1.0" -ZoneName "20.172.in-addr.arpa" -AllowUpdateAny -PtrDomainName "s1-gl.gilles.eni"
Add-DnsServerResourceRecordPtr -Name "2.0" -ZoneName "20.172.in-addr.arpa" -AllowUpdateAny -PtrDomainName "s2-w-cd.gilles.eni"
Add-DnsServerResourceRecordPtr -Name "3.8" -ZoneName "20.172.in-addr.arpa" -AllowUpdateAny -PtrDomainName "s3-gl.gilles.eni"
Add-DnsServerResourceRecordPtr -Name "4.8" -ZoneName "20.172.in-addr.arpa" -AllowUpdateAny -PtrDomainName "s4-w-sm.gilles.eni"
Add-DnsServerResourceRecordPtr -Name "254.7" -ZoneName "20.172.in-addr.arpa" -AllowUpdateAny -PtrDomainName "routeur.gilles.eni"
Add-DnsServerResourceRecordPtr -Name "254.15" -ZoneName "20.172.in-addr.arpa" -AllowUpdateAny -PtrDomainName "routeur.gilles.eni"
# Lister le contenu de la zone
Get-DnsServerResourceRecord -ZoneName "20.172.in-addr.arpa" | ft -AutoSize
```


## Activité 3 — Exemple de solution proposée pour le menu AD

Cette proposition pédagogique traite le choix « menu de gestion des utilisateurs Active Directory ». Le paramètre `SearchBase` délimite l’OU du TP. Le menu liste les comptes, crée un compte avec saisie sécurisée, active ou désactive un compte déjà présent dans cette OU, puis permet de quitter. `-WhatIf` affiche les modifications demandées sans les appliquer.

```powershell
[CmdletBinding(SupportsShouldProcess)]
param(
    [Parameter(Mandatory)]
    [ValidateNotNullOrEmpty()]
    [string]$SearchBase
)

Import-Module ActiveDirectory -ErrorAction Stop
Get-ADOrganizationalUnit -Identity $SearchBase -ErrorAction Stop | Out-Null

do {
    $choix = Read-Host '1 Lister, 2 Créer, 3 Activer, 4 Désactiver, Q Quitter'
    try {
        switch -Regex ($choix) {
            '^1$' {
                Get-ADUser -Filter * -SearchBase $SearchBase -ErrorAction Stop |
                    Select-Object SamAccountName,Name,Enabled
            }
            '^[234]$' {
                $login = Read-Host 'Identifiant du compte'
                if ($login -notmatch '^[A-Za-z0-9][A-Za-z0-9_.-]{0,19}$') {
                    throw 'Identifiant invalide'
                }
                if ($choix -eq '2') {
                    $nom = Read-Host 'Nom complet'
                    if ([string]::IsNullOrWhiteSpace($nom)) { throw 'Nom vide' }
                    if (Get-ADUser -Filter "SamAccountName -eq '$login'" -ErrorAction Stop) {
                        throw 'Le compte existe déjà'
                    }
                    if ($PSCmdlet.ShouldProcess($login,'Créer le compte du TP')) {
                        $motDePasse = Read-Host 'Mot de passe temporaire' -AsSecureString
                        New-ADUser -Name $nom -SamAccountName $login -Path $SearchBase `
                            -AccountPassword $motDePasse -Enabled $true `
                            -ChangePasswordAtLogon $true -ErrorAction Stop
                    }
                } else {
                    $compte = Get-ADUser -Filter "SamAccountName -eq '$login'" `
                        -SearchBase $SearchBase -ErrorAction Stop
                    if (-not $compte) { throw "Compte absent de l’OU du TP" }
                    $actif = $choix -eq '3'
                    if ($PSCmdlet.ShouldProcess($compte.SamAccountName,"Modifier l’état du compte")) {
                        Set-ADUser -Identity $compte -Enabled $actif -ErrorAction Stop
                    }
                }
            }
            '^q$' { 'Fin du menu' }
            default { 'Choix inconnu' }
        }
    } catch {
        Write-Warning $_.Exception.Message
    }
} until ($choix -eq 'Q')
```

Vérifier successivement une saisie invalide, un doublon, un compte hors de l’OU et un compte autorisé. Consigner le résultat de chaque branche. Pour le choix réseau, relever l’interface avec `Get-NetIPConfiguration`, définir les opérations sur l’adresse, la passerelle, le DNS et le DHCP, puis contrôler ces mêmes paramètres après l’action du script.


- [Retour à l’énoncé](tp-01-activites-pour-aller-plus-loin.md)
- [Cours du module](../../../modules/12-initiation-powershell/module-06.md)
