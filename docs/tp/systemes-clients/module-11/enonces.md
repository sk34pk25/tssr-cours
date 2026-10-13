# Énoncés — Module 11 — Plus loin avec PowerShell

## Objectif de l’atelier

Répondre aux consignes en traduisant le besoin exprimé en commande PowerShell. Utilisez `Get-Command` pour rechercher une cmdlet et `Get-Help` pour comprendre son emploi. Lorsque des propriétés sont demandées, placez `Select` après le pipeline. Lorsque des valeurs sont précisées, utilisez `Where` et, si plusieurs critères sont nécessaires, la syntaxe de filtrage avancé. Utilisez un formatage seulement si la consigne le demande.

**Durée estimée : 2 heures.**

## 1. Recherche, aide et sélection

Sur `Win10-XX`, affichez la date du jour puis, avec la même commande, le quantième de l’année.

Dans le journal `Security`, affichez les évènements enregistrés, puis ceux dont l’`EventID` vaut `4624`. Pour cette dernière liste, n’affichez que l’identifiant d’évènement, la date d’écriture et le message.

## 2. Règles de pare-feu

Affichez les règles de pare-feu activées. Parmi elles, n’affichez que le nom, le profil réseau, la direction et l’action qui autorise ou bloque l’accès.

## 3. Volumes et filtrage à plusieurs critères

Sur `Discovery` :

1. affichez les volumes ;
2. affichez ceux qui possèdent plus de 8 Go d’espace libre ;
3. affichez ceux dont la taille maximale ne dépasse pas 25 Go ;
4. combinez les deux critères ;
5. pour le résultat combiné, affichez uniquement le nom, la lettre de lecteur et le type de système de fichiers, sous forme de liste.

## 4. Services, groupes, partages et imprimante

1. Affichez les noms et statuts des services démarrés automatiquement au lancement du système.
2. Affichez les membres et leur SID du groupe `L_HA_Ventes`.
3. Affichez, sous forme de liste, le nom et le chemin des partages administratifs.
4. Affichez la lettre de lecteur, le type et l’état de santé des volumes sains de type CD-ROM.
5. Affichez, sous forme de liste, le nom, le type, le pilote et le nom du partage de l’imprimante HP LaserJet.

Les noms et valeurs appartiennent au scénario de laboratoire : ils ne constituent pas des valeurs universelles. Une fois vos essais terminés, consultez la [correction](corrections.md).

## Provenance pédagogique

- **A — Source TSSR :** énoncé du TP M11.
- **B — Structuration pédagogique :** titres et listes permettant de restituer les consignes sans les modifier.
