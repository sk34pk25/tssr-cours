# Module 03 — Manipuler des objets

## Objectifs

- Sélectionner, trier, filtrer et mesurer des objets sans perdre les propriétés utiles.
- Préparer un affichage et un export à partir des mêmes données structurées.
- Vérifier les colonnes, les unités et les doublons avant une importation AD.

Le module suit le trajet des objets depuis la commande de départ jusqu’au résultat affiché ou exporté. Les démonstrations couvrent le pipeline, la sélection, la mesure, le tri, le filtrage, les formats d’affichage, les conversions, la lecture de fichiers et les propriétés calculées.

```mermaid
flowchart LR
    A["Get-Service ou Get-ADUser"] --> B["Where-Object<br/>retenir des objets"]
    B --> C["Select-Object<br/>choisir des propriétés"]
    C --> D["Sort-Object ou Measure-Object"]
    D --> E["Format-* pour l’écran"]
    D --> F["Export-* pour réutiliser les données"]
```

*Schéma pédagogique externe au cours.*

## Suivre les objets dans le pipeline

Le caractère `|` transmet les objets d’une commande à la suivante. Dans un bloc exécuté pour chaque objet, `$_` et `$PSItem` désignent l’élément en cours. Si le filtre a besoin de `Id`, conservez cette propriété jusqu’au filtre. `Get-Member` permet de savoir quelles propriétés et méthodes sont disponibles.

```powershell
Get-Service | Get-Member
Get-Process | Where-Object { $_.Id -gt 1500 -and $_.Id -lt 2000 } |
    Select-Object Name,Id
Get-Process | Where-Object { $PSItem.Name -like 'Power*' } |
    Select-Object Name,Id
```

## Sélectionner et mesurer

`Select-Object -Property` compose un résultat à partir de propriétés. `-First` et `-Last` limitent le nombre d’objets selon leur ordre d’arrivée. `-Unique` conserve des résultats distincts dans la sélection. `-ExpandProperty` renvoie la valeur de la propriété sélectionnée. Si `Name` est une chaîne, l’élément transmis ensuite est une chaîne.

```powershell
Get-Service | Select-Object -Property Name,Status
Get-Service | Select-Object -First 5
Get-Service | Select-Object -Last 5
Get-Process | Select-Object -Property Name -Unique
Get-Service | Select-Object -ExpandProperty Name
Get-Process | Measure-Object
Get-Process | Measure-Object -Property Id -Average -Minimum -Maximum
Get-ChildItem -LiteralPath 'C:\Windows' -File |
    Measure-Object -Property Length -Sum -Average -Minimum -Maximum
```

La mesure par défaut compte les éléments. Les propriétés de sortie `Count`, `Average`, `Sum`, `Minimum` et `Maximum` dépendent des options demandées. `Length` représente ici une taille en octets. Une mesure moyenne ou minimale suppose une propriété exploitable comme nombre.

## Trier et filtrer

`Sort-Object -Property Status,Name` trie d’abord selon le statut, puis selon le nom au sein du même statut. `-Descending` inverse le sens du tri. Les valeurs numériques sont triées selon leur type. Les nombres importés sous forme de chaînes doivent être convertis pour obtenir un tri numérique.

```powershell
Get-Service | Sort-Object -Property Status,Name
Get-Process | Sort-Object -Property Id -Descending | Select-Object -First 5 Name,Id
Get-Service | Where-Object -Property Status -EQ Running
Get-Process | Where-Object { $_.Name -like 'Power*' -or $_.Name -like 'pwsh*' }
```

| Comparaison | Forme insensible à la casse pour le texte | Forme sensible à la casse |
| --- | --- | --- |
| Égalité | `-eq` | `-ceq` |
| Inégalité | `-ne` | `-cne` |
| Supérieur ou supérieur ou égal | `-gt`, `-ge` | `-cgt`, `-cge` |
| Inférieur ou inférieur ou égal | `-lt`, `-le` | `-clt`, `-cle` |
| Motif avec caractères génériques | `-like`, `-notlike` | `-clike`, `-cnotlike` |

`-and` exige que les deux expressions soient vraies. `-or` accepte une des deux. Les parenthèses rendent lisible une condition qui mêle les deux opérateurs. Dans les exemples AD, la propriété `Enabled` est booléenne. Le filtre AD s’exécute côté annuaire avec `Get-ADUser -Filter`. `Where-Object` filtre ensuite les objets reçus par la console.

```powershell
Get-ADUser -Filter * -Properties City,Department |
    Where-Object { $_.Enabled -and $_.Name -like 'A*' } |
    Select-Object GivenName,Name,Enabled,Department,City
```

## Choisir l’affichage final

`Format-Table` affiche plusieurs colonnes. `-AutoSize` adapte leur largeur, `-Wrap` laisse le texte se poursuivre sur plusieurs lignes, `-HideTableHeaders` retire les titres et `-GroupBy` sépare les groupes d’une propriété. Pour grouper proprement les éléments, trier d’abord sur cette propriété. `Format-Wide` affiche une seule propriété par objet en plusieurs colonnes. `Format-List` affiche une propriété par ligne et peut montrer toutes les propriétés avec `*`.

```powershell
Get-Service | Sort-Object Status | Format-Table Name,Status -GroupBy Status -Wrap
Get-Service | Format-Wide Name -Column 5
Get-Service -Name Spooler | Format-List -Property *
```

Ces commandes produisent des instructions d’affichage. Conservez la sélection d’objets pour un export CSV. Une façon de vérifier la différence consiste à comparer `Get-Member` après `Select-Object` et après `Format-Table`.

## Exporter, convertir et importer

CSV stocke des lignes et des colonnes. Choisissez un séparateur cohérent lors de l’export et de l’import. `-NoTypeInformation` supprime l’en-tête de type dans les exemples historiques Windows PowerShell. `-Append` ajoute des lignes dont les propriétés doivent correspondre à la structure attendue. CLIXML représente les propriétés d’objets sérialisés. Un objet importé peut perdre les méthodes de l’objet vivant initial.

```powershell
$services = Get-Service | Select-Object Name,Status,DisplayName
$services | Export-Csv -Path '.\services.csv' -Delimiter ';' -NoTypeInformation
$services | Export-Clixml -Path '.\services.xml'
$services | ConvertTo-Html | Out-File -FilePath '.\services.html'
$services | ConvertTo-Json | Out-File -FilePath '.\services.json'
Get-Content -LiteralPath '.\services.csv' -Tail 5
Import-Csv -Path '.\services.csv' -Delimiter ';'
Import-Clixml -Path '.\services.xml'
```

`Get-Content` lit le texte du fichier. `Import-Csv` crée un objet par ligne dont les noms de propriétés viennent des en-têtes. Les redirections `>` et `>>` et `Out-File` écrivent du texte. `>` et `Out-File` sans `-Append` remplacent un fichier de sortie existant. `Out-File -Width` agit sur la largeur utilisée pour formater le texte.

Dans l’exemple de création d’utilisateurs, le CSV doit exposer des propriétés compatibles avec les paramètres de `New-ADUser`. Renommer une colonne dans la sélection permet de réparer une correspondance. Contrôler l’OU cible, le champ `SamAccountName` et l’existence d’un compte avant une création. Le message « user already exists » indique un conflit à traiter par compte.

## Ajouter une propriété calculée

Une propriété calculée associe un nom à un bloc qui calcule la valeur pour chaque objet. Elle permet de renommer une colonne, d’arrondir une taille ou de calculer plusieurs mesures sans changer l’objet source.

```powershell
Get-ChildItem -File | Select-Object Name,@{
    Name = 'Taille (Kio)'
    Expression = { [math]::Round($_.Length / 1KB, 2) }
}

Get-Volume | Select-Object DriveLetter,@{
    Name = 'Taille (Gio)'
    Expression = { [math]::Round($_.Size / 1GB, 2) }
},@{
    Name = 'Libre (Gio)'
    Expression = { [math]::Round($_.SizeRemaining / 1GB, 2) }
}
```

## Vérifier le TP de bout en bout

1. Choisir les propriétés des utilisateurs AD et relever les cinq premiers résultats.
2. Filtrer par nom, ville, service et état du compte, puis mesurer le résultat.
3. Comparer les fichiers d’un partage selon leur taille, relever leur minimum, leur maximum et leur moyenne.
4. Construire un affichage en colonnes, une liste de groupes et une vue des ordinateurs regroupés par système.
5. Exporter les utilisateurs, ajouter les ordinateurs selon la consigne et comparer les colonnes avant de réimporter.
6. Calculer les tailles lisibles du partage et expliquer le résultat du test d’un doublon AD.

Le corrigé contient des exemples historiques qui dépendent de l’annuaire, du partage et du journal de la maquette. `Get-EventLog` appartient à Windows PowerShell. Pour vérifier le résultat de chaque étape, conserver le nombre d’objets ainsi qu’un exemple de propriété avant le formatage.

## TP guidé

### Obtenir les attributs AD avant les opérations

Demander les propriétés supplémentaires à l’annuaire, puis conserver les objets avant toute mise en forme. Vérifier la différence entre une propriété non chargée et une valeur réellement vide. Afficher cinq lignes, trier par ville puis par service, et appliquer les critères de nom et d’état avant le comptage.

```powershell
$users = @(Get-ADUser -Filter * -Properties Department,City)
$colonnes = 'GivenName', 'Name', 'Enabled', 'Department', 'City'
$users | Select-Object -First 5 -Property $colonnes
$users | Sort-Object City,Department | Select-Object -Property $colonnes
$users | Sort-Object Department -Descending | Select-Object -Property $colonnes
$users | Where-Object { $_.Name -like '*r*' } | Sort-Object City,Department
$users | Where-Object { $_.Enabled -and ($_.Name -like 'A*' -or $_.Name -like 'F*') }
$users | Group-Object -Property Enabled | Select-Object Name,Count
```

Pour le bonus de désactivation, afficher les comptes commençant par D dans l’OU de test, puis contrôler les identités avant toute simulation. Le filtrage sur le nom seul est trop large pour lancer une action sur tout le domaine.

### Mesurer le partage et construire les vues

```powershell
$fichiers = Get-ChildItem -LiteralPath '\\CD01\Partage' -File
$fichiers | Measure-Object -Property Length -Average -Minimum -Maximum
$fichiers | Where-Object { $_.Length -gt 10MB -and $_.Length -lt 100MB } |
    Sort-Object Name -Descending | Select-Object Name,Length,Mode
$fichiers | Select-Object Name,@{Name='Taille (Gio)'; Expression={
    [math]::Round($_.Length / 1GB, 3)
}}
```

En console, afficher les noms sur cinq colonnes avec `Format-Wide Name -Column 5` et les comptes actifs avec `Format-Table`. Pour les groupes, demander `Description` et `whenCreated`, trier sur `GroupCategory` puis utiliser `Format-Table -GroupBy GroupCategory`. Pour les ordinateurs, demander `OperatingSystem` et `IPv4Address`, trier sur `OperatingSystem` et afficher les quatre propriétés demandées avec `Format-List`. Pour le journal Système du support, choisir `TimeGenerated`, `Index` et `Message` puis lire le message dans une liste ou un tableau avec `-Wrap`.

### Exporter des objets et valider l’import avant création

1. Préparer le dossier d’export autorisé et conserver la sélection d’objets séparée de son formatage. Écrire une vue CSV avec un séparateur explicite puis une vue HTML. Relire les noms de colonnes et le nombre de lignes avec `Import-Csv`.
2. Essayer l’ajout des ordinateurs sur une **copie** du CSV. Si les propriétés diffèrent, l’ajout échoue normalement. `-Force` peut écarter des propriétés. Pour conserver les deux types, choisir un schéma partagé, par exemple `Name` et `TypeObjet`, avant les deux exports. Garder le fichier d’import utilisateurs distinct du fichier mixte.
3. Après changement de l’en-tête `Name`, afficher le résultat de la projection qui le rétablit. Vérifier l’identité, l’OU de test et les doublons avant une éventuelle simulation de création. La commande de suppression de tous les utilisateurs citée par l’Original reste un cas à analyser. Pour le contrôle du doublon, rechercher uniquement le compte visé et expliquer le conflit.

```powershell
$export = $users | Select-Object -Property $colonnes
$export | Export-Csv -Path '.\utilisateurs.csv' -Delimiter ';' -NoTypeInformation
$export | ConvertTo-Html | Out-File -FilePath '.\utilisateurs.html'
Import-Csv -Path '.\utilisateurs.csv' -Delimiter ';' |
    Select-Object -First 5 -Property $colonnes
```

Si l’en-tête a été renommé `Nom`, la projection `Select-Object @{Name='Name'; Expression={$_.Nom}}` recrée la propriété attendue sans toucher au fichier. Ajouter explicitement les autres propriétés requises après avoir inspecté le CSV. Une absence d’erreur d’import de fichier ne prouve pas que l’annuaire accepterait la création. [Référence de Export-Csv](https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/export-csv)

## À retenir

Garder les objets structurés jusqu’à l’export. Demander les attributs AD avant de filtrer. Vérifier le schéma CSV, les unités de taille et l’identité précise des comptes concernés avant toute écriture.

## Mini-quiz

1. Quel objet circule après `Select-Object -ExpandProperty Name` ?
2. Où placer le filtre s’il utilise `City`, une propriété absente du résultat final ?
3. Pourquoi `Format-Table` gêne-t-il un export CSV de données ?
4. Quel nombre utilise-t-on pour convertir des octets en Kio ?
5. Pourquoi tester l’ajout des ordinateurs sur une copie du CSV ?

??? success "Réponses commentées"
    1. La valeur de `Name`, souvent une chaîne.
    2. Avant la sélection qui retire `City`.
    3. La commande transmet des instructions d’affichage.
    4. `1KB` vaut 1024 en PowerShell. La colonne se nomme donc Kio.
    5. Leurs propriétés peuvent différer des colonnes d’utilisateurs. Une copie permet de constater l’écart et de contrôler un schéma commun sans perdre le fichier d’import.

## Travaux pratiques et révision

- [TP et correction du module](../../tp/12-initiation-powershell/module-03/index.md)
- [Fiche de révision](../../revision/12-initiation-powershell/module-03.md)
- [Sommaire du cours](index.md)
