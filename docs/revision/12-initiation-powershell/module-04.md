# Révision — Module 04 : structures et variables

## Variables, objets et types

- Affectation : `$nom = valeur`.
- Éléments montrés : `$objet.propriété`, `$collection[index]` et
  `$objet.methode()`.
- Observation : `Get-Variable`, `.GetType()` et `.GetType().FullName`.
- Interaction et affichage : `Read-Host` et `Write-Host`.
- Date dans le contexte source : `(Get-Date).ToString("yyyyMMdd")`.
- Types présentés : **Int**, **String**, **Object / System.Object**, **Array**,
  **ArrayList** et **DateTime**.

## Collections

- Tableau : index, valeurs séparées par des virgules, `+`, `-`, `+=` et
  `Replace(...)` dans les exemples des sources.
- `ArrayList` : `New-Object System.Collections.ArrayList`,
  `[System.Collections.ArrayList]`, `.Add(...)` et `.Remove(...)`.

> **À revoir dans les sources.** L’`Array` est décrit comme de taille fixe mais
> un ajout avec `+=` est aussi illustré. Une ligne d’exemple ne présente pas de
> guillemet fermant visible.

## Conditions et boucles

- `If`, `ElseIf`, `Else` ; opérateurs montrés : `-eq`, `-ne`, `-gt`, `-lt`,
  `-le`.
- `While (...) { ... }` : condition testée avant le bloc.
- `Do { ... } While (...)` et `Do { ... } Until (...)` : condition testée
  après le bloc ; les sources opposent les logiques `While` et `Until`.
- Parcours :

  ```powershell
  Foreach ($i in $liste) {
    ...
  }
  ```

- `Break` et `Continue` sont présentés. `ForEach-Object` ne fait pas partie du
  périmètre de ce module.

## Choix et imbrication

- `Switch ($choix)` et `Switch -regex ($choix)`.
- `Default`, `Break`, `Continue`.
- Motifs montrés : `[a-zA-Z]`, `[0-9]` et `.`.
- L’imbrication associe un menu interactif, une boucle, une condition et un
  `Switch`.

## Vérifier sa pratique

Reprenez les cinq exercices du TP : variables/index, devinette, collections,
menu, puis objets du scénario. Les données, résultats et actions
d’administration propres au laboratoire ne doivent pas être réemployés hors de
son cadre.

## Autoévaluation

1. Quelle différence entre la position `[10]` et `.Index` ?
2. Que renvoie `Read-Host` ?
3. Quels cas valident le menu ?

??? success "Réponses commentées"
    1. `[10]` sélectionne le onzième élément du tableau. `.Index` lit une propriété du journal sur cet objet.
    2. Une chaîne par défaut. La convertir avant une comparaison de nombres ou de dates.
    3. Chaque choix prévu, une saisie inconnue qui relance le menu et la sortie qui termine la boucle.

- [Cours du module](../../modules/12-initiation-powershell/module-04.md)
- [TP et correction](../../tp/12-initiation-powershell/module-04/index.md)
