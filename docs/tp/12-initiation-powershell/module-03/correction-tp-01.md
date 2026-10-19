# Correction — TP 01 Manipuler des objets

## Méthode générale du scénario

Les corrections source enchaînent une commande qui retourne des objets avec les opérations nécessaires : sélectionner, filtrer, trier, mesurer, mettre en forme ou exporter. Les noms, chemins, comptes, SID, partages, services, volumes, événements et sorties spécifiques au laboratoire ne sont pas reproduits.

## Sélection, filtre et tri

- `Select-Object` utilise `-Property`, `-First`, `-Last`, `-Unique` et `-ExpandProperty` selon l’activité.
- `Where-Object` est montré avec `-Property`, `-FilterScript`, `$PSItem` et `$_`.
- Les comparaisons, recherches de motif et combinaisons logiques emploient les opérateurs attestés du cours.
- `Sort-Object` trie sur une ou plusieurs propriétés ; `-Descending` inverse l’ordre lorsque le scénario le demande.

## Mesure et affichage

`Measure-Object` fournit le comptage par défaut ou, avec `-Property`, une moyenne, une somme, un minimum ou un maximum. Le résultat est ensuite présenté, selon l’activité, au moyen de `Format-Table`, `Format-Wide` ou `Format-List`.

## Fichiers, événements et représentations

Les activités de fichiers, tailles et événements font appel aux objets retournés par les commandes du scénario. Les exports et conversions source utilisent `Export-Csv`, CliXML, `ConvertTo-Html`, `ConvertTo-Json`, `Out-File`, `Get-Content` et `Import-Csv`. Les données et résultats de laboratoire restent non publiés.

## Propriétés calculées

La forme source est :

```powershell
@{
  n = 'Label'
  e = { ... }
}
```

Elle sert à produire une propriété renommée, adaptée ou calculée à partir de l’objet courant.

## Contrôles et divergences conservées

Vérifier le résultat avec les objets de l’environnement de laboratoire, sans transformer une observation locale en règle générale.

Les documents comportent volontairement les points suivants à revoir, sans correction silencieuse :

- motifs de filtrage et variantes de désactivation divergents ;
- tailles exprimées sous des formes ou unités différentes ;
- export HTML demandé mais variante CSV montrée dans une partie de la correction ;
- import CSV direct dépendant de la correspondance des en-têtes ;
- consigne finale en GB et variante de correction en KB ;
- forme `Get-Content` dégradée dans certaines sources ;
- paramètres, tirets, espaces ou commandes concaténées ambigus.

## Commande destructive

La suppression d’un utilisateur apparaît dans le scénario source. Elle est destructive, strictement limitée au laboratoire et ne doit pas être exécutée ici. L’identité source est volontairement remplacée par `<utilisateur-de-laboratoire>`.
