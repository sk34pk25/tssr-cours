# Module 04 — Les structures et variables

## Objectifs

À l’issue des activités de ce module, vous devez pouvoir manipuler des variables,
des collections et des structures de contrôle dans des scripts PowerShell de base.
Les exemples et la syntaxe ci-dessous reprennent le périmètre des sources du module.

## Variables, objets et types présentés

Une affectation associe une valeur à une variable :

```powershell
$nom = valeur
```

Les démonstrations utilisent également des propriétés, des méthodes et des
collections :

```powershell
$objet.propriété
$collection[index]
$objet.methode()
Get-Variable
```

Pour observer un type, les sources emploient `.GetType()` et
`.GetType().FullName`. Les types présentés sont **Int**, **String**,
**Object / System.Object**, **Array**, **ArrayList** et **DateTime** dans le
contexte de conversion de date. Les interactions et affichages illustrés
reposent notamment sur `Read-Host`, `Write-Host` et
`(Get-Date).ToString("yyyyMMdd")`.

## Collections : Array et ArrayList

Un tableau est présenté avec une indexation et des valeurs séparées par des
virgules. Les démonstrations montrent aussi `+`, `-`, `+=` et `Replace(...)`.
Une `ArrayList` est illustrée avec les formes suivantes :

```powershell
New-Object System.Collections.ArrayList
[System.Collections.ArrayList]
.Add(...)
.Remove(...)
```

> **Point documentaire à vérifier.** Les sources qualifient l’`Array` de taille
> fixe tout en illustrant un ajout avec `+=`. Une ligne visuelle d’exemple ne
> montre pas son guillemet fermant. Cette page ne complète pas ces éléments.

## Choisir une structure de contrôle

Les sources présentent les structures suivantes :

```powershell
If (...) {
  ...
}
ElseIf (...) {
  ...
}
Else {
  ...
}
```

Les opérateurs utilisés dans ce module sont `-eq`, `-ne`, `-gt`, `-lt` et
`-le`.

`While (...) { ... }` vérifie sa condition avant l’entrée dans le bloc. Les
formes `Do { ... } While (...)` et `Do { ... } Until (...)` testent leur
condition après l’exécution du bloc ; les sources opposent ainsi la logique de
`While` et de `Until`.

Pour parcourir une liste, la forme attestée est :

```powershell
Foreach ($i in $liste) {
  ...
}
```

`Break` et `Continue` sont présentés dans les démonstrations. `Foreach` ne doit
pas être confondu avec `ForEach-Object`, qui ne fait pas partie de ce module.

## Menus et choix

Les exemples de choix reposent sur `Switch ($choix)` et
`Switch -regex ($choix)`, avec `Default`, `Break` et `Continue`. Les motifs
montrés sont `[a-zA-Z]`, `[0-9]` et `.`. Ils servent à illustrer le menu et les
choix des sources, sans constituer un cours général sur les expressions
régulières.

L’imbrication du module associe un menu interactif, une boucle, une condition
et un `Switch` ; aucune structure plus complexe n’est introduite ici.

## Mise en pratique et vérifications

Le module comporte un seul TP « Variables et structures » de 4 heures,
organisé en cinq exercices : journal et variable/index, devinette avec `If` et
`DoWhile`, collections avec `If` et `Foreach`, menu avec `While`/`If` ou
`Switch`, puis objets utilisateurs et opérations administratives. Les données
d’un environnement de laboratoire ne sont pas des résultats universels et ne
sont pas reproduites dans cette page.

Les vérifications portent sur le comportement attendu des variables,
collections et structures employées par chaque exercice. Certaines actions
d’administration sont réservées au scénario de laboratoire : elles ne doivent
pas être exécutées hors de ce cadre.

## Synthèse

Les variables, objets, collections et structures de contrôle constituent les
éléments étudiés dans ce module. Une proposition gouvernée distincte apporte le
TP, sa correction et la fiche de révision associée lorsque ces ressources sont
disponibles dans le parcours publié.
