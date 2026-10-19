# Correction — TP 01 : Premières commandes

## Périmètre de la correction

Cette correction reprend les commandes et observations du document source. Les
résultats chiffrés, les noms locaux, les modules installés et les chemins de
partage dépendent de l'environnement de laboratoire et ne doivent pas être
généralisés. Les données d'accès présentes dans la source sont volontairement
exclues.

## 1. Découverte et comptage

```powershell
Get-Command | Measure
Get-Verb
Get-Command -Verb New
Get-Command -Noun *User*
Get-command -Noun *localuser*
```

La correction source relève des comptes et nombres de verbes différents selon
les consoles et le niveau d'exécution. Il s'agit d'observations de laboratoire,
non de valeurs stables à réutiliser hors scénario.

## 2. Utilisateurs locaux

```powershell
Get-LocalUser | select -first 5
Set-LocalUser -Name "<utilisateur-du-scénario>" -Description "<description-du-scénario>"
Get-LocalUser -Name "<utilisateur-du-scénario>"
```

Les valeurs de scénario sont remplacées ici par des repères neutres. La logique
attendue reste : modifier une description locale, puis vérifier l'objet ciblé.

## 3. Aide PowerShell

```powershell
Get-Help Get-Service
Get-Help Get-Service -showwindow
Get-Help Get-Service -full
```

La correction comporte deux formes documentaires pour l'aide relative aux
groupes locaux :

```powershell
Get-Help Get-LocalGroup -Online
Get-LocalGroupMember -Online
```

!!! warning "NEEDS_REVIEW — aide des groupes locaux"
    L'énoncé vise la commande permettant de lister les membres d'un groupe
    local, alors que la correction présente les deux formes ci-dessus. Cette
    divergence est conservée telle quelle : aucune commande n'est corrigée ou
    remplacée silencieusement.

## 4. Mise à jour de l'aide

La correction source utilise une source de laboratoire et les cultures `EN-US`
et `fr-FR`. Les chemins de laboratoire ne sont pas publiés ici.

```powershell
Update-Help -SourcePath "<source-de-laboratoire>" -UICulture EN-US
Update-Help -SourcePath "<source-de-laboratoire>" -UICulture fr-FR
```

La source note que certains modules peuvent ne pas disposer d'aide ou de fichier
d'aide traduit. Cette remarque dépend de la ressource et du laboratoire utilisés.

!!! warning "NEEDS_REVIEW — nom du paramètre"
    Les documents emploient les variantes `SourcePath`, `Sourcepath` et une
    forme visuelle semblant être `SourcePatch`. Elles sont conservées comme
    divergence documentaire et ne sont pas harmonisées silencieusement.

## 5. Modules et origine de `Get-LocalUser`

```powershell
Get-Module
Get-Module -all
Get-Module | measure
get-command get-localuser
get-command get-localuser | ft wrap
get-command get-localuser | select module
$env:PSModulePath
```

La correction identifie un module de comptes locaux dans l'environnement source.
Les emplacements affichés par `$env:PSModulePath` restent propres à la machine
du laboratoire.

Pour le module AWS du scénario, la correction contient notamment :

```powershell
Import-Module AWSPowserShell
```

!!! warning "NEEDS_REVIEW — nom du module AWS"
    `AWSPowerShell`, `AwsPowerShell` et `AWSPowserShell` apparaissent dans les
    documents. Le module, son archive et sa source de laboratoire ne sont pas
    fournis dans Drive M01 ; aucune variante n'est normalisée ici.

## 6. Profil personnel et prompt

La correction source identifie un fichier de profil propre à l'environnement
PowerShell. Le bonus de prompt dépend d'un script fourni dans le laboratoire,
absent de Drive M01. Utiliser seulement les ressources fournies par le formateur
et ne pas inventer le script, son chemin ou son contenu.

## Contrôles

- vérifier chaque résultat dans la console réellement utilisée ;
- conserver les variations de consoles comme des observations ;
- ne pas exposer de donnée d'accès, de partage ou d'identifiant du laboratoire ;
- signaler les divergences documentaires au lieu de les corriger silencieusement.

→ [Retour à l'énoncé](tp-01-premieres-commandes.md)
