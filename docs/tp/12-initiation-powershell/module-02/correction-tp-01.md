# Correction — TP 01 : L'objet

## Périmètre de la correction

Cette correction reprend les commandes et les contrôles documentés dans les
sources M02. Les identités locales, le nom de la machine, les identifiants de
sécurité et les valeurs de session du laboratoire sont volontairement exclus.
Les sorties de service, les dates et les membres observés dépendent de
l'environnement source.

## 1. Membres d'un objet de service

```powershell
Get-Service | Get-Member
```

La sortie source permet d'identifier le type de l'objet, ainsi que ses
propriétés et méthodes. Les deux propriétés de type `String` et les méthodes
de type `Bool` et `int` sont à relever dans la sortie du laboratoire.

## 2. Propriétés du service Spooler

```powershell
Get-Service -Name Spooler | Get-Member -MemberType Property
Get-Service -Name Spooler
```

La première commande limite l'affichage aux propriétés. La seconde affiche les
valeurs visibles dans le scénario source. Elles restent dépendantes de la
machine de laboratoire.

!!! note "NEEDS_REVIEW — forme du paramètre"
    Les démonstrations emploient `-ServiceName`, alors que la correction du TP
    emploie `-Name`. Les deux formes sont conservées dans leur contexte
    documentaire, sans correction silencieuse.

## 3. Propriétés d'un utilisateur local

```powershell
Get-LocalUser -Name <utilisateur-de-laboratoire>
Set-LocalUser -Name <utilisateur-de-laboratoire> -Description "Administrateur"
```

La correction source utilise un compte local propre au laboratoire. Son
identité est remplacée ici par `<utilisateur-de-laboratoire>`. La modification
porte sur la propriété `Description` demandée par l'énoncé.

## 4. Méthode du service Spooler

```powershell
Get-Service -Name Spooler
(Get-Service -Name Spooler).stop()
Get-Service -Name Spooler
```

La dernière commande contrôle l'état observé après l'appel de la méthode. Ne
généralisez pas le résultat de statut : il dépend du service et de
l'environnement du laboratoire.

## Bonus — `AccountExpires`

```powershell
Set-LocalUser -Name <utilisateur-de-laboratoire> -AccountExpires (get-date).adddays(2)
Get-LocalUser -Name <utilisateur-de-laboratoire> | select *
```

La source demande une date au moins 48 heures postérieure à la date actuelle.
Les dates affichées restent dynamiques.

!!! warning "NEEDS_REVIEW — forme de contrôle source"
    La correction contient aussi la forme `Set-LocalUser ... | select *` dans
    une étape de contrôle. Elle est conservée comme forme documentaire
    problématique et n'est pas remplacée silencieusement par une autre
    commande.

!!! warning "NEEDS_REVIEW — identité du bonus"
    L'identité de compte mentionnée dans l'énoncé et celle utilisée dans la
    correction diffèrent. Elles sont toutes deux exclues de cette page ; la
    divergence est conservée pour le suivi documentaire.

→ [Retour à l'énoncé](tp-01-objet.md)
