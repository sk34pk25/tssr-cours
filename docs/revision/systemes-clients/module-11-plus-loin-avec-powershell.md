# Fiche de révision — Module 11 — Plus loin avec PowerShell

## Flux et redirections

| Flux | Numéro | Redirections associées |
| --- | ---: | --- |
| entrée standard | `stdin:0` | entrée de la cmdlet |
| sortie standard | `stdout:1` | `>`, `1>`, `>>`, `1>>` |
| erreur standard | `stderr:2` | `2>`, `2>>`, `2>&1`, `2>$null` |

## Pipeline et sélection

- Le pipeline `|` transmet la sortie d’une cmdlet à la suivante.
- `Select-Object` / `Select` garde les propriétés demandées.
- Construire la chaîne dans l’ordre : cmdlet, filtre, sélection, puis affichage.

## Filtrer

- Comparer avec `-eq`, `-ne`, `-gt`, `-ge`, `-lt`, `-le`, `-like` et `-notlike`.
- Les variantes précédées de `c` sont sensibles à la casse dans le support.
- Utiliser `Where-Object` ou la forme `Where` documentée dans le TP.
- Employer `-FilterScript` avec `$PSItem` ou `$_` lorsqu’il faut combiner plusieurs critères.

## Formater à la fin

- `Format-List` / `FL` : affichage détaillé.
- `Format-Table` / `FT` : affichage en colonnes.
- `Format-Wide` / `FW` : affichage condensé.

**Règle essentielle :** filtrer et sélectionner avant de formater ; `Format-*` intervient en fin de chaîne.

## Contrôler

1. Rechercher la cmdlet avec `Get-Command`.
2. Lire l’aide avec `Get-Help`.
3. Vérifier les propriétés affichées par rapport à la consigne.
4. Distinguer les objets de laboratoire (`Discovery`, groupes, partages, imprimante) des notions PowerShell générales enseignées.

- [Revenir au cours](../../modules/02-systemes-clients-microsoft/module-11-plus-loin-avec-powershell.md)
- [Faire le TP](../../tp/systemes-clients/module-11/index.md)
- [Jouer le Kahoot](../../kahoot/02-systemes-clients-microsoft-11-plus-loin-avec-powershell.md)

## Provenance pédagogique

- **A — Sources TSSR :** support, énoncé et correction M11.
- **B — Structuration pédagogique :** tableau de révision et regroupement des notions des sources.
