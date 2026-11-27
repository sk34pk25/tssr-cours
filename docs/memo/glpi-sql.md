# Mémo GLPI et SQL

| Notion | Règle à retenir |
|---|---|
| Entité | Portée administrative des objets et habilitations |
| Lieu | Implantation géographique d’un utilisateur ou matériel |
| Habilitation | Profil+entité, récursivité éventuelle |
| Gabarit inventaire | Valeurs communes avant création d’exemplaires |
| Gabarit de ticket | Champs obligatoires, masqués ou prédéfinis du formulaire |
| Règle métier | Critères puis actions ; vérifier ET/OU et concurrence |
| SLA | Délai de prise en charge ou résolution calculé avec calendrier |
| Escalade | Modification à un instant relatif à une échéance |
| Inventaire | Identifier, rapprocher puis mettre à jour sans doublon |

```sql
SELECT * FROM nom_de_la_table
SELECT nom_de_l’attribut, nom_d’un_deuxième_attribut FROM nom_de_la_table
WHERE …          -- permet de mettre une condition à notre recherche
ORDER BY colonne -- tri en fonction de la colonne choisie
LIMIT nombre_de_ligne OFFSET à_partir_de_quelle_ligne
SELECT * FROM table_A INNER JOIN table_B ON table_A.clé = table_B.clé
```

`IS NULL` sélectionne une absence de valeur ; `COUNT(*)` compte les lignes, `COUNT(colonne)` les valeurs non NULL. `MIN` et `MAX` donnent les bornes, `AVG` la moyenne des valeurs renseignées. Une jointure interne relie les clés par `ON`.

Les erreurs principales du support sont `= NULL`, `MIN` décrit comme maximum, accents dans les noms de tables, apostrophes courbes et noms de base incohérents. Les Originaux les conservent ; les [corrections du TP 05](../tp/glpi/module-05/corrections.md) les distinguent des requêtes utilisables.

[Retour au cours](../modules/07-administration-glpi/index.md)
