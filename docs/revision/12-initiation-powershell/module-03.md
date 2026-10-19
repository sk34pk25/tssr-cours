# Révision — Module 03 : manipulation des objets

## Chaîner les objets

- `|` transmet des objets à la commande suivante.
- `$PSItem` désigne l’objet courant ; `$_` est la forme raccourcie rencontrée dans les sources.

## Sélectionner, mesurer, trier, filtrer

- `Select-Object` : `-Property`, `-First`, `-Last`, `-Unique`, `-ExpandProperty`.
- `Measure-Object` : comptage par défaut, puis `-Property`, `-Average`, `-Minimum`, `-Maximum`, `-Sum`.
- `Sort-Object` : propriété, plusieurs propriétés, `-Descending`.
- `Where-Object` : `-Property`, `-FilterScript`, `$PSItem`, `$_`.

Opérateurs attestés : `-eq`, `-ceq`, `-ne`, `-cne`, `-gt`, `-cgt`, `-ge`, `-cge`, `-lt`, `-clt`, `-le`, `-cle`, `-like`, `-clike`, `-notlike`, `-cnotlike`, `-match`, `-and`, `-or`.

Formes courtes attestées : `Select`, `sort`, `where`, `measure`.

## Formater à la fin de la chaîne

- `Format-Table` : `-Property`, `-HideTableHeaders`, `-GroupBy`, `-Wrap`.
- `Format-Wide` : `-AutoSize`, `-Column`, `-Property`.
- `Format-List` : `-Property`.

Les formes courtes `fl` et `fw` sont attestées. Formater après avoir sélectionné, filtré ou trié.

## Exporter, convertir, relire et importer

- `Export-Csv` : `-Path`, `-Delimiter`, `-NoTypeInformation`, `-Append`.
- CliXML : uniquement comme format d’export cité par les sources.
- `ConvertTo-Html`, `ConvertTo-Json`, `Out-File`, `Out-File -Append`, `-Width`.
- `Get-Content -Tail`.
- `Import-Csv -Delimiter`.

## Propriétés calculées

```powershell
@{
  n = 'Label'
  e = { ... }
}
```

Les propriétés calculées servent dans les sources à renommer, adapter ou transformer une valeur et à construire plusieurs propriétés de sortie.

## À garder en tête pour le TP

Les résultats dépendent des objets de laboratoire et ne sont pas des valeurs universelles. La suppression d’un utilisateur présente dans le scénario est destructive : elle ne s’exécute que dans le laboratoire prévu.

Les divergences de filtrage, de désactivation, de tailles, d’export, d’import et de forme `Get-Content` restent à relire dans les documents sources.
