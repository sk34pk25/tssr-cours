# Module 11 — Plus loin avec PowerShell

**Séquence :** Systèmes clients Microsoft  
**Thème :** redirection, pipeline, filtrage et formatage

## Objectifs

À l’issue du module, vous devez pouvoir rediriger les flux d’une cmdlet, chaîner des objets dans un pipeline, sélectionner et filtrer les propriétés utiles, puis formater le résultat à la fin de la chaîne.

## Flux standard et redirections

Une cmdlet peut recevoir des paramètres par l’entrée standard, produire son résultat sur la sortie standard et signaler une erreur sur le flux d’erreur.

| Flux | Numéro | Rôle par défaut dans le support |
| --- | ---: | --- |
| `stdin` | `0` | clavier |
| `stdout` | `1` | écran |
| `stderr` | `2` | écran |

| Opérateur | Effet enseigné |
| --- | --- |
| `>` ou `1>` | redirige et remplace la sortie standard |
| `>>` ou `1>>` | ajoute la sortie standard à la fin du fichier |
| `2>` | redirige et remplace le flux d’erreur |
| `2>>` | ajoute le flux d’erreur à la fin du fichier |
| `2>&1` | envoie le flux d’erreur vers la même destination que la sortie standard |
| `2>$null` | écarte le flux d’erreur |

Le support illustre par exemple l’écriture de la liste des comptes locaux dans un fichier avec `Get-LocalUser > c:\temp\LocalUserList.txt`, puis sa lecture avec `Get-Content`.

## Chaîner des objets avec le pipeline

Le caractère `|` transmet la sortie d’une cmdlet à l’entrée de la suivante. Le pipeline permet de partir d’un ensemble d’objets, de sélectionner les propriétés nécessaires, de filtrer les éléments pertinents puis d’afficher le résultat.

```powershell
Get-NetAdapter | Select Name, Status, LinkSpeed
```

`Select-Object` — souvent abrégé `Select` dans les documents — sert à conserver les propriétés demandées. Dans le TP, cette logique est appliquée à des évènements, des règles de pare-feu, des volumes, des services, des membres de groupe, des partages administratifs et une imprimante. Ces objets restent des supports de pratique PowerShell propres au scénario de laboratoire.

## Comparer et filtrer

Les opérateurs suivants sont présentés dans le support :

| Comparer | Égalité | Différence | Supérieur | Supérieur ou égal | Inférieur | Inférieur ou égal |
| --- | --- | --- | --- | --- | --- | --- |
| Opérateur | `-eq` | `-ne` | `-gt` | `-ge` | `-lt` | `-le` |

`-like` et `-notlike` servent aux comparaisons avec motif. Le support présente les variantes sensibles à la casse avec le préfixe `c` : par exemple `-ceq`, `-cne`, `-cgt`, `-cge`, `-clt`, `-cle`, `-clike` et `-cnotlike`.

`Where-Object`, parfois écrit sous la forme abrégée `Where` dans le TP, filtre un objet selon une propriété. Lorsque plusieurs conditions sont nécessaires, le support emploie `-FilterScript` et les variables `$PSItem` ou `$_` :

```powershell
Get-Volume | Where -FilterScript {
    $_.SizeRemaining -gt '8GB' -and $_.Size -lt '25GB'
}
```

Dans cet exemple, les valeurs et les volumes appartiennent au contexte de laboratoire décrit par le TP.

## Formater à la fin de la chaîne

`Format-List` (`FL`), `Format-Table` (`FT`) et `Format-Wide` (`FW`) préparent l’affichage du résultat. Le support insiste sur une règle de méthode : **filtrer et sélectionner avant de formater**, et utiliser `Format-*` en fin de chaîne. Le formatage sert à présenter les objets ; il ne doit pas intervenir avant les opérations de sélection ou de filtrage.

## Méthode de vérification du TP

1. Rechercher la cmdlet adaptée avec `Get-Command`.
2. Lire son aide avec `Get-Help` avant de composer le pipeline.
3. Construire la chaîne dans l’ordre : cmdlet de départ, filtre, sélection, puis formatage si demandé.
4. Contrôler que les propriétés affichées répondent exactement à la consigne.

## Synthèse

Une commande PowerShell peut rediriger ses flux, transmettre des objets à une autre cmdlet et réduire le résultat à l’information utile. La démarche enseignée est constante : identifier les objets, filtrer, sélectionner, puis formater l’affichage final.

## Pour mettre en pratique

- [TP du module 11](../../tp/systemes-clients/module-11/index.md)
- [Énoncés](../../tp/systemes-clients/module-11/enonces.md)
- [Corrections](../../tp/systemes-clients/module-11/corrections.md)
- [Fiche de révision](../../revision/systemes-clients/module-11-plus-loin-avec-powershell.md)
- [Kahoot du module](../../kahoot/02-systemes-clients-microsoft-11-plus-loin-avec-powershell.md)

## Provenance pédagogique

- **A — Sources TSSR :** support, énoncé et correction du TP M11.
- **B — Structuration pédagogique :** organisation web, tableaux et reformulations destinés à rendre les notions des sources plus lisibles, sans ajout de contenu externe.
