# Révision — Module 05 — Les bases de MySQL et MariaDB

## Lire une requête

SELECT colonnes FROM table WHERE filtre ORDER BY tri LIMIT quantité OFFSET décalage.

## À expliquer sans le support

`IS NULL` teste l’absence de valeur ; `COUNT(*)` compte les lignes ; `COUNT(colonne)` ignore NULL ; `MIN` donne le minimum. Une jointure utiliseON pour relier les clés. `GROUP BY` explicite un comptage par gabarit.

## Mise en situation

Reprendre le TP du module et expliquer la fonction de chaque objet ou commande. Avant chaque manipulation, annoncer le résultat attendu, puis montrer la preuve obtenue. Pour une erreur, indiquer quelle couche ou quel critère est en cause.

## Question rapide

Age=NULL sélectionne-t-il les absences d’âge ?

??? success "Réponse"
    Non. Utiliser `Age IS NULL`.

- [Cours](../../modules/07-administration-glpi/module-05-les-bases-de-mysql-et-mariadb.md)
- [TP](../../tp/glpi/module-05/index.md)
