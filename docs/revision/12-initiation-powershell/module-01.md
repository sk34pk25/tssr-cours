# Révision — Initiation à PowerShell — Module 01

## Repères du support

Le support présente Windows PowerShell et PowerShell Core dans un contexte
historique. Les versions, plateformes et limites citées sont celles du support
de formation ; elles ne doivent pas être considérées comme un état actuel.

## Cmdlet, paramètre et argument

- Une cmdlet est présentée sous la forme **Verbe-Nom**.
- Un paramètre commence par `-`.
- La valeur transmise au paramètre est un argument.
- `Get-Verb` affiche les verbes disponibles.

## Découvrir et compter les commandes

```powershell
Get-Command
Get-Command | Measure
Get-Command -Name *-Service
Get-Command -Verb Stop
Get-Command -Verb New
Get-Command -Noun *User*
Get-command -Noun *localuser*
```

Les comptages dépendent de la console et de l'environnement du scénario.

## Consulter l'aide

```powershell
Get-Help -Name Get-Service
Get-Help -Name Get-Service -Full
Get-Help -Name Get-Service -Examples
Get-Help -Name Get-Service -Online
Get-Help -Name Get-Service -ShowWindow
Update-Help
Save-Help
```

L'aide peut dépendre de la langue, de la disponibilité des fichiers d'aide, de
l'accès Internet et de la source de laboratoire indiquée dans le TP.

## Protection et modules

```powershell
Get-ExecutionPolicy
Set-ExecutionPolicy
Get-Module
$env:PSModulePath
Import-Module
Get-Command -Module
```

Les sources indiquent que la modification d'une stratégie d'exécution et la
mise à jour de l'aide requièrent une console élevée. Les modules `.PSM1`, leurs
emplacements et leurs commandes doivent être vérifiés dans l'environnement
concerné.

## Profil et console

```powershell
New-Item -Path $Profile -Type File -Force
$PSVersionTable
```

Le support associe le profil à l'utilisateur courant et à l'ouverture de la
console. La police, la taille et les couleurs peuvent être personnalisées via
les propriétés de la console.

## Points à garder distincts

- Les nombres de cmdlets, de verbes et de commandes de module vus dans le TP
  sont des observations de laboratoire.
- Les variantes `SourcePath`, `Sourcepath` et `SourcePatch` restent une
  divergence documentaire à signaler.
- Les variantes du nom du module AWS et la divergence sur l'aide des groupes
  locaux restent `NEEDS_REVIEW`.
- Les ressources de laboratoire et les données d'accès ne sont pas publiées.

## Liens

- [Cours M01](../../modules/12-initiation-powershell/module-01.md)
- [TP 01 — Premières commandes](../../tp/12-initiation-powershell/module-01/index.md)
