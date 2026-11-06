# Module 04 — Les structures et variables

## Objectifs

À l’issue des activités de ce module, vous devez pouvoir manipuler des variables,
des collections et des structures de contrôle dans des scripts PowerShell de base.
Les exemples et la syntaxe ci-dessous reprennent le périmètre des sources du module.

## Variables, objets et types présentés

Une affectation associe une valeur à une variable :

```powershell
$nom = 'valeur'
```

Les démonstrations utilisent également des propriétés, des méthodes et des
collections :

```powershell
$objet = Get-Date
$objet.Year
$objet.AddDays(1)
$collection = @('PC1','PC2')
$collection[0]
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

## Prévoir les types au moment de la saisie

Le support compare `$a = 1` et `$b = "1"`. Le premier est un entier, le second une chaîne. `GetType().FullName` montre le type. `Read-Host` renvoie une chaîne. Pour comparer des nombres ou des dates, convertir explicitement la saisie et prévoir le cas où elle n’est pas valide. Les guillemets doubles interpolent une variable. Les guillemets simples conservent le texte littéral.

```powershell
$a = 1
$b = '1'
$a.GetType().FullName
$b.GetType().FullName
$services = @(Get-Service)
$services[0].Name
$aujourdhui = Get-Date
$aujourdhui.ToString('yyyyMMdd')
```

Les tableaux utilisent un indice à partir de zéro. Un tableau classique possède une taille fixe. Ajouter avec `+=` crée un tableau de remplacement. L’`ArrayList` de la démonstration accepte `Add` et `Remove`. `Add` renvoie l’indice de l’élément ajouté. Si seul l’effet sur la liste vous intéresse, `[void]` écarte ce résultat.

```powershell
[System.Collections.ArrayList]$machines = @('PC1','PC2','PC3')
[void]$machines.Add('PC4')
$machines.Remove('PC1')
$machines[0]
```

## Choisir la bonne condition d’arrêt

| Structure | Moment du test | Résultat à prévoir |
| --- | --- | --- |
| `if`, `elseif`, `else` | Avant la branche | La première condition vraie choisit la branche |
| `while` | Avant chaque tour | Zéro tour si la condition est fausse au début |
| `do ... while` | Après le corps | Au moins un tour, puis reprise tant que la condition est vraie |
| `do ... until` | Après le corps | Au moins un tour, puis arrêt dès que la condition devient vraie |
| `foreach` | Pour chaque élément | Un élément courant, ses propriétés et ses méthodes |
| `switch` | À chaque correspondance | Les cas correspondants peuvent s’exécuter, `break` quitte le switch |

```mermaid
flowchart TB
    A["Lire le choix"] --> B{"Choix reconnu ?"}
    B -->|Oui| C["Exécuter l’action choisie"]
    B -->|Non| D["Afficher une erreur de saisie"]
    C --> E{"Quitter ?"}
    D --> A
    E -->|Non| A
    E -->|Oui| F["Fin"]
```

*Schéma pédagogique externe au cours.*

```powershell
do {
    $choix = Read-Host '1 pour afficher les services, Q pour quitter'
    switch ($choix) {
        '1' { Get-Service | Select-Object -First 5 Name,Status }
        'Q' { 'Fin du menu' }
        default { 'Choix inconnu' }
    }
} until ($choix -eq 'Q')
```

`continue` passe à l’itération suivante et `break` quitte la structure de boucle courante. Dans une structure imbriquée, repérer la paire d’accolades et la boucle visée. `foreach ($element in $collection)` et `ForEach-Object` parcourent tous deux des éléments, mais l’un est une structure du langage et l’autre une commande de pipeline. Une variable utilisée dans une boucle doit être mise à jour au bon endroit pour atteindre la condition de sortie.

## Vérifier les exercices du TP

L’index d’un événement et sa position dans le tableau sont deux valeurs distinctes. Les nombres relevés dans le journal système de la maquette varient selon la machine. Contrôler que le tableau possède au moins 21 entrées avant d’accéder à `[20]`. Les deux collections d’utilisateurs se répartissent selon `Enabled`, puis leurs nombres se lisent avec `Count`. Pour le menu, vérifier chaque action et le retour à la saisie après une valeur inconnue.

Le script fourni pour la dernière consigne réinitialise le mot de passe des utilisateurs sélectionnés puis réactive les comptes inactifs. Sa valeur de démonstration est neutralisée dans Original. La variante pédagogique de la correction utilise une saisie sécurisée et une OU de laboratoire explicite pour rendre la portée de l’exercice vérifiable.

## TP guidé

### Contrôler le journal et les bornes du tableau

En Windows PowerShell dans la maquette, prendre un instantané du journal. Les positions 10 et 20 nécessitent au moins 21 entrées. Relever l’objet à la position 10, sa propriété `Index` puis additionner les deux valeurs demandées.

```powershell
$events = @(Get-EventLog -LogName System)
if ($events.Count -lt 21) {
    throw 'Le journal ne contient pas 21 entrées.'
}
$events[10] | Select-Object Index,TimeGenerated
$sommeIndex = $events[10].Index + $events[20].Index
$sommeIndex
```

### Faire converger la devinette

Choisir le format `yyyy-MM-dd` et convertir les saisies avant de les comparer. Traiter la saisie invalide dans un bloc distinct et compter uniquement les essais valides pour le bonus. La condition d’arrêt teste l’égalité des dates.

```powershell
$culture = [Globalization.CultureInfo]::InvariantCulture
$cible = [datetime]::ParseExact((Read-Host 'Date cible yyyy-MM-dd'), 'yyyy-MM-dd', $culture)
$essais = 0
$trouve = $false
do {
    $saisie = Read-Host 'Proposer une date yyyy-MM-dd'
    try {
        $date = [datetime]::ParseExact($saisie, 'yyyy-MM-dd', $culture)
    } catch {
        Write-Host 'Date invalide'
        continue
    }
    $essais++
    if ($date -lt $cible) {
        Write-Host 'La date proposée est antérieure'
    } elseif ($date -gt $cible) {
        Write-Host 'La date proposée est postérieure'
    } else {
        $trouve = $true
        Write-Host "Bravo, date trouvée en $essais essai(s)."
    }
} until ($trouve)
```

### Vérifier les collections et le menu AD

Sur l’OU du TP, relever une seule liste d’utilisateurs, puis répartir les objets dans `$UserActif` et `$UserInactif` avec `if` et `foreach`. Utiliser un tableau même quand aucune valeur ne correspond. Contrôler que les deux nombres additionnés correspondent à la taille de la liste de départ.

```powershell
$ou = Read-Host "DN de l’OU de laboratoire"
if ([string]::IsNullOrWhiteSpace($ou)) {
    throw "Préciser l’OU du TP."
}
$users = @(Get-ADUser -Filter * -SearchBase $ou -ErrorAction Stop)
$UserActif = @()
$UserInactif = @()
foreach ($user in $users) {
    if ($user.Enabled) {
        $UserActif += $user
    } else {
        $UserInactif += $user
    }
}
[pscustomobject]@{
    Total = $users.Count
    Actifs = $UserActif.Count
    Inactifs = $UserInactif.Count
}
```

| Choix du menu | Action attendue | Contrôle |
| --- | --- | --- |
| 1 | Interroger les ordinateurs du domaine | Vérifier que la commande renvoie les machines prévues |
| 2 | Interroger les groupes de portée DomainLocal | Contrôler le champ `GroupScope` |
| 3 | Lire le CSV d’utilisateurs et préparer l’import | Contrôler le chemin, les colonnes, les doublons et l’OU avant toute création |
| 4 | Quitter la boucle | Vérifier que le menu n’est pas réaffiché |
| Autre saisie | Afficher l’erreur et reproposer le menu | Tester une chaîne vide et un choix hors limites |

Pour la dernière consigne, limiter les comptes aux objets inactifs identifiés dans l’OU du TP. Faire relire la liste avant toute réinitialisation ou réactivation. La correction propose une saisie sécurisée et explique comment vérifier `Enabled` après une intervention autorisée.

## À retenir

Vérifier le type d’une saisie avant sa comparaison et la taille d’un tableau avant son indexation. Dans un menu, tester une entrée valide, une entrée inconnue et la sortie. Pour Active Directory, contrôler la sélection avant d’appliquer les changements.

## Mini-quiz

1. Combien de tours minimum effectue `do ... until` ?
2. Quelle différence entre `$events[10]` et `$events[10].Index` ?
3. Pourquoi une comparaison numérique après `Read-Host` demande-t-elle de vérifier le type ?
4. Que renvoie `ArrayList.Add()` ?
5. Quel contrôle valide la séparation des utilisateurs actifs et inactifs ?

??? success "Réponses commentées"
    1. Un tour.
    2. Le premier est l’objet à la position 10. Le second est la propriété `Index` de cet objet.
    3. La saisie arrive comme chaîne.
    4. L’indice de l’élément ajouté.
    5. Additionner les deux `Count` et les comparer au nombre total d’objets sélectionnés dans la même interrogation de départ.

## Travaux pratiques et révision

- [TP et correction du module](../../tp/12-initiation-powershell/module-04/index.md)
- [Fiche de révision](../../revision/12-initiation-powershell/module-04.md)
- [Sommaire du cours](index.md)
