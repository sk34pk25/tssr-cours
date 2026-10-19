# Module 02 — PowerShell : langage objet

## Objectifs

À l'issue de ce module, vous devez pouvoir reconnaître un objet PowerShell,
repérer ses membres et distinguer ses propriétés de ses méthodes. Le TP
utilise des objets de service, d'utilisateur local et de date dans un
environnement de laboratoire.

## PowerShell : un langage orienté objet

Le support présente PowerShell comme un langage orienté objet. Un objet est
défini par un ensemble de **propriétés** et de **méthodes**. Les exemples du
module utilisent notamment les objets retournés par `Get-Service`,
`Get-LocalUser` et `Get-Date`.

Les objets observés, leurs membres et les résultats affichés dépendent de
l'environnement historique du laboratoire. Ils servent ici d'exemples du
support, pas d'inventaire universel.

## Examiner les membres avec `Get-Member`

`Get-Member` permet de visualiser les informations d'un objet PowerShell. Les
sources mettent en avant les colonnes suivantes :

- `TypeName` : le type de l'objet traité ;
- `MemberType` : la nature du membre affiché ;
- `Definition` : la définition connue du membre.

```powershell
Get-Service | Get-Member
Get-LocalUser | Get-Member
Get-Date | Get-Member
```

!!! note "Formulation du support — NEEDS_REVIEW"
    Le support affirme que `Get-Member` s'utilise exclusivement après une
    commande dont le verbe est `Get`. Cette formulation est conservée comme
    indication documentaire du support ; elle n'est pas présentée ici comme
    une règle universelle.

La démonstration rappelle également les commandes suivantes, déjà utilisées
dans le parcours, pour rechercher une commande puis consulter son aide :

```powershell
Get-Command -name *-service
Get-Help Get-Command
```

## Propriétés et valeurs

Les propriétés d'un objet sont définies par son type. Le support indique que
leurs valeurs peuvent avoir différents types : `String`, `Int`, `Bool`,
`Array` et `Object`.

Dans le TP, l'observation des propriétés d'un service passe notamment par :

```powershell
Get-Service -Name Spooler | Get-Member -MemberType Property
Get-Service -Name Spooler
```

Les noms de comptes, valeurs de propriétés et sorties propres au laboratoire
ne sont pas publiés. Utilisez les valeurs fournies dans l'environnement de
formation lorsque le TP les demande.

!!! note "Formes documentaires à conserver"
    Certaines démonstrations emploient `-ServiceName`, alors que la correction
    emploie `-Name`. Cette divergence est documentée dans la correction du TP
    et n'est pas harmonisée silencieusement.

## Méthodes

Le support distingue les méthodes des propriétés : les méthodes réalisent des
actions sur l'objet, sur la valeur d'une ou plusieurs propriétés, ou des
conversions. Les propriétés sont, elles, décrites comme « statiques » dans la
démonstration.

Pour appliquer une méthode, les sources encadrent la commande qui retourne
l'objet, ajoutent un point puis la méthode et ses parenthèses :

```powershell
(get-date).adddays(1)
(Get-Service -Name Spooler).stop()
```

La seconde commande appartient au scénario du TP : elle modifie l'état du
service ciblé. Les états, dates et membres affichés dans les captures sont des
observations historiques ou dynamiques de laboratoire.

## Vérifications issues du TP

- identifier le type, les propriétés et les méthodes affichés pour l'objet
  demandé ;
- relever les propriétés et les valeurs observées dans le scénario ;
- vérifier l'état du service après l'appel de la méthode demandée ;
- contrôler une date d'expiration de compte après la mise à jour demandée,
  avec les identifiants fournis dans le laboratoire.

## Synthèse

M02 introduit l'objet PowerShell par ses propriétés, ses méthodes, son type et
la lecture de ses membres avec `Get-Member`. Les objets de service,
d'utilisateur local et de date servent de supports de pratique source-faithful
dans le TP unique « L'objet ».

## Mettre en pratique

Le TP 01 « L'objet », son énoncé, sa correction et la fiche de révision sont
proposés séparément dans l'écosystème du module. Ils ne font pas partie de
cette proposition de page de cours.
