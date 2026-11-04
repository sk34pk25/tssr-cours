# Fiche de révision — Module 11 — Plus loin avec PowerShell

## Flux et redirections

| Flux | Numéro | Redirections associées |
| --- | ---: | --- |
| entrée | paramètres / pipeline | données reçues par la cmdlet |
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

!!! note "Précision externe — entrée et flux PowerShell"
    Le support utilise le repère général `stdin:0`. PowerShell numérote ses flux de sortie à partir de 1 ; son pipeline d’entrée n’est pas le flux `stdin` d’un shell natif. [Référence Microsoft : redirections](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_redirection).

## Retenir puis vérifier

**Traiter des objets : obtenir, filtrer, sélectionner, puis formater en dernier.**

1. **Comment écrire « ne dépasse pas 25 Go » ?**

??? success "Réponse expliquée"
    Avec -le 25GB. -lt 25GB exclut exactement 25 Go.

2. **Pourquoi éviter Format-Table au milieu du pipeline ?**

??? success "Réponse expliquée"
    Il produit des instructions de mise en forme, pas les objets métier attendus pour la suite du traitement.

3. **Que fait 2>&1 ?**

??? success "Réponse expliquée"
    La redirection joint le flux d’erreurs (2) au flux de réussite (1).

[Relire le cours complet](../../modules/02-systemes-clients-microsoft/module-11-plus-loin-avec-powershell.md) · [Mettre en pratique](../../tp/systemes-clients/module-11/index.md)
