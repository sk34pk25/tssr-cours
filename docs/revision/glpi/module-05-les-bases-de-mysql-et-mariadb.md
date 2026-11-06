# Fiche de révision — Module 05 — Les bases de MySQL et MariaDB

Lire la base du laboratoire et expliquer la sélection, le tri et le comptage demandés.

## Repères du laboratoire

Le sujet réutilise les calendriers, utilisateurs, catégories, commutateurs et niveaux de service des TP précédents. Se connecter avec le compte autorisé et vérifier le nom de la base avant d’interroger les tables.

## Contrôles à savoir réaliser

| Contrôle | Preuve à relever |
| --- | --- |
| Contexte | Vérifier la base active, les tables et les colonnes avant de sélectionner les données. |
| Filtrage | Distinguer NULL, égalité d’une chaîne et condition sur la catégorie. Identifier le modèle de switch dans les données de son laboratoire. |
| Comptage et tri | Distinguer les lignes et les valeurs renseignées, puis rendre la sélection reproductible avec un tri lorsque l’ordre importe. |

## Retenir puis vérifier

**La requête doit refléter les lignes et les valeurs demandées. Vérifier le résultat avec les données réellement présentes.**

**1. Quelle condition retrouve les lignes où l’âge est absent ?**

??? success "Réponse expliquée"
    `Age IS NULL`. Une comparaison `Age = NULL` ne teste pas l’absence de valeur.

**2. Pourquoi le modèle de switch du corrigé peut-il avoir un autre identifiant chez vous ?**

??? success "Réponse expliquée"
    L’identifiant est attribué dans la base de laboratoire. Rechercher le modèle par sa référence avant de reprendre le filtre.

**3. Quelle différence entre `COUNT(*)` et `COUNT(colonne)` ?**

??? success "Réponse expliquée"
    La première forme compte toutes les lignes du résultat. La seconde compte les lignes où cette colonne contient une valeur non NULL.

## Pour pratiquer

- [Cours complet](../../modules/07-administration-glpi/module-05-les-bases-de-mysql-et-mariadb.md)
- [Travaux pratiques](../../tp/glpi/module-05/index.md)
- [Commandes MariaDB et GLPI](../../commandes/mariadb-glpi.md)
- [Mémo GLPI et SQL](../../memo/glpi-sql.md)
