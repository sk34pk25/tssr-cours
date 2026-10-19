# Module 01 — Initiation à PowerShell

## Objectifs

À l'issue de ce module, vous devez pouvoir repérer la structure d'une cmdlet,
rechercher une commande, consulter son aide et identifier les modules et le
profil utilisés par une console PowerShell. Les comparaisons entre consoles et
les résultats chiffrés restent liés au scénario de laboratoire du TP.

## Repères historiques issus du support de formation

Le support situe PowerShell v1.0 en 2006 et évoque notamment Windows XP SP2,
Vista et Windows Server 2003 SP1. Il présente également PowerShell 5.1 sur
Windows 10 et Windows Server 2019, ainsi que des références à PowerShell Core
3.0 et 7.0. Ces repères sont des informations historiques issues du support de
formation : ils ne décrivent pas nécessairement l'état actuel des produits.

Le support distingue Windows PowerShell et PowerShell Core. Il associe à Core
une prise en charge multiplateforme et signale, dans le contexte historique
décrit, des différences possibles concernant certaines commandes, certains
alias, le remoting, la casse sous Linux et la compatibilité de scripts Windows.

## Les cmdlets : verbe, nom, paramètres et arguments

Le support présente une cmdlet sous la forme **Verbe-Nom**. Parmi les exemples
figurent `Get-ChildItem`, `Get-Service`, `Get-Volume`, `Get-Process`,
`Get-Item` et `Get-SMBShare`.

Un paramètre est introduit par un tiret ; la valeur fournie à ce paramètre est
un argument. Les exemples suivants appartiennent au support :

```powershell
Get-LocalUser -Name "Nom de l’utilisateur recherché"
Get-LocalGroupMember -Group "Nom du groupe recherché" -Member "Membre du groupe recherché dans le groupe indiqué"
```

La démonstration consacrée aux cmdlets utilise aussi `Get-Verb` pour afficher
la liste des verbes disponibles.

## Rechercher des commandes avec `Get-Command`

`Get-Command` permet d'afficher les commandes disponibles. Le support illustre
une recherche sur le nom et une recherche sur le verbe :

```powershell
Get-Command -Name *-Service
Get-Command -Verb Stop
```

Le TP demande notamment de comparer des environnements PowerShell, de compter
les commandes retournées et de rechercher les commandes utilisant `New` ou
contenant `User`. Les nombres observés dépendent de l'environnement de
laboratoire ; ils ne constituent pas des valeurs générales.

```powershell
Get-Command | Measure
Get-Command -Verb New
Get-Command -Noun *User*
Get-command -Noun *localuser*
Get-LocalUser | select -first 5
```

## Comprendre une commande avec `Get-Help`

Le support présente l'aide d'une cmdlet et plusieurs niveaux d'affichage :

```powershell
Get-Help -Name Get-Service
Get-Help -Name Get-Service -Full
Get-Help -Name Get-Service -Examples
Get-Help -Name Get-Service -Online
Get-Help -Name Get-Service -ShowWindow
```

L'aide affichée peut varier selon la langue du système, la mise à jour des
fichiers d'aide et la commande interrogée. L'aide en ligne suppose un navigateur
et un accès Internet autorisé.

!!! note "Formes documentaires à conserver"
    Le TP et sa correction emploient aussi `Get-Help Get-Service -showwindow`
    et `Get-Help Get-Service -full`. Une divergence persiste pour l'aide liée
    aux groupes locaux ; elle reste documentée dans la correction du TP plutôt
    que corrigée silencieusement ici.

## Mettre à jour l'aide

La source présente `Update-Help` pour rechercher des fichiers d'aide depuis
Windows Update ou depuis une source locale ou réseau. `Save-Help` est cité dans
la démonstration comme commande d'export des fichiers d'aide. Le support indique
qu'une console avec droits d'administration est nécessaire pour `Update-Help`.

```powershell
Update-Help
Update-Help -SourcePath D:\PowerShell
Update-Help -SourcePath D:\PowerShell -UICulture En-US
Save-Help
```

Dans le TP, la mise à jour s'appuie sur une ressource de laboratoire fournie par
le formateur et peut être répétée avec une culture sélectionnée. Cette ressource
ne fait pas partie des fichiers Drive M01.

## Exécution de scripts et protection

La démonstration présente `Get-ExecutionPolicy` et `Set-ExecutionPolicy`. Le
support énumère les niveaux `Restricted`, `AllSigned`, `RemoteSigned`,
`Unrestricted`, `Bypass`, `Default` et `Undefined`, et montre la forme suivante :

```powershell
Set-ExecutionPolicy -ExecutionPolicy Unrestricted
```

Ces commandes et leurs niveaux de protection sont présentés selon le support de
formation. Elles nécessitent les droits administrateur et ne constituent pas
une consigne générale de modification de sécurité.

## Modules PowerShell

Le support indique qu'une cmdlet provient d'un module et associe les modules à
l'extension `.PSM1`. Les emplacements de modules sont consultés avec la variable
d'environnement suivante :

```powershell
Get-Module
$env:PSModulePath
Import-Module -Name "nom du dossier contenant le module"
Get-Command -Module "nom du module"
```

Le TP emploie un module AWS dans son scénario de laboratoire. Le module,
l'archive et le partage de laboratoire cités ne sont pas disponibles dans le
dossier Drive M01. Les variantes documentaires de son nom sont conservées dans
la correction, sans normalisation.

## Profil et personnalisation de la console

La console peut être personnalisée par ses propriétés graphiques, notamment la
police, la taille et les couleurs. Le support montre la création d'un profil :

```powershell
New-Item -Path $Profile -Type File -Force
```

Le support décrit ce profil comme un fichier créé dans le dossier Documents de
l'utilisateur actuel et exécuté à l'ouverture de la console. Le TP demande de
mettre en place un profil et comporte un bonus de personnalisation du prompt à
partir d'un script de laboratoire non fourni dans Drive M01.

## Vérifications issues du TP

- comparer les résultats entre les consoles présentes dans le scénario, sans
  transformer les valeurs observées en règle générale ;
- relever les commandes, modules et emplacements effectivement affichés par
  l'environnement de laboratoire ;
- vérifier l'aide demandée avec la forme de commande indiquée par le TP ;
- utiliser les identifiants fournis dans l'environnement de laboratoire lorsque
  le scénario demande une connexion.

## Synthèse

M01 introduit PowerShell par ses cmdlets, la découverte des commandes et de
l'aide, les modules, la stratégie d'exécution et la personnalisation de la
console. Les versions, compatibilités et limites citées dans les documents
restent des repères historiques du support de formation.

## Aller plus loin dans le module

- [TP — Premières commandes](../../tp/12-initiation-powershell/module-01/index.md)
- [Énoncé du TP](../../tp/12-initiation-powershell/module-01/tp-01-premieres-commandes.md)
- [Correction du TP](../../tp/12-initiation-powershell/module-01/correction-tp-01.md)
- [Fiche de révision](../../revision/12-initiation-powershell/module-01.md)
