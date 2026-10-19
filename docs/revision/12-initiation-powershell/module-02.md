# Révision — Initiation à PowerShell — Module 02

## Objet et membres

- PowerShell est présenté dans le support comme un langage orienté objet.
- Un objet est décrit par des propriétés et des méthodes.
- `Get-Member` permet d'observer le type, les propriétés et les méthodes d'un
  objet.
- `TypeName`, `MemberType` et `Definition` sont les repères affichés dans les
  démonstrations.

```powershell
Get-Service | Get-Member
Get-LocalUser | Get-Member
Get-Date | Get-Member
```

!!! note "Formulation du support — NEEDS_REVIEW"
    Le support indique que `Get-Member` s'utilise exclusivement après une
    commande dont le verbe est `Get`. Cette formulation est conservée comme
    assertion documentaire du module, non comme règle universelle.

## Propriété, valeur et type

Les propriétés sont définies par le type d'objet. Les types de valeurs cités
dans le support sont : `String`, `Int`, `Bool`, `Array` et `Object`.

```powershell
Get-Service -Name Spooler | Get-Member -MemberType Property
Get-Service -Name Spooler
```

Les propriétés, valeurs et états affichés dans le scénario sont des
observations de laboratoire.

## Méthode

Une méthode réalise une action sur l'objet ou sur la valeur d'une propriété.
Les exemples source utilisent l'objet retourné entre parenthèses, puis un
point suivi de la méthode :

```powershell
(get-date).adddays(1)
(Get-Service -Name Spooler).stop()
```

La seconde commande relève du scénario du TP ; son résultat dépend de
l'environnement. Les dates et états de service ne sont pas des résultats
stables.

## Points du TP

- identifier les propriétés et méthodes d'un objet de service ;
- examiner les propriétés du service Spooler ;
- examiner puis modifier `Description` pour `<utilisateur-de-laboratoire>` ;
- contrôler l'état du service après l'appel de la méthode demandée ;
- renseigner et vérifier `AccountExpires` avec une date à au moins 48 heures.

Les identités, le nom de machine, les identifiants de sécurité et les valeurs
de session du laboratoire sont exclus.

## Liens

- [Cours M02](../../modules/12-initiation-powershell/module-02.md)
- [TP 01 — L'objet](../../tp/12-initiation-powershell/module-02/index.md)
