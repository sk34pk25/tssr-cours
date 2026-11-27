# MariaDB : lire les données GLPI

Le TP05 porte sur des extractions. Se connecter avec le compte autorisé sans écrire son secret dans la ligne :

```bash
mysql -u root -p
```

```sql
SHOW DATABASES;
CONNECT glpidata;
SHOW TABLES;
SELECT name, firstname FROM glpi_users;
SELECT name FROM glpi_users WHERE language = 'en_GB';
SELECT name, completename FROM glpi_itilcategories WHERE completename <> name;
SELECT COUNT(*) AS nb_de_SLMs FROM glpi_slms;
```

Le point-virgule termine une instruction ; `mysql>` est un prompt à ne pas recopier. Le nom de base doit correspondre à celui choisi à l’installation. Les apostrophes de chaînes sont droites. `glpi_itilcategories` ne porte pas l’accent apparu dans le corrigé PDF.

Pour filtrer les commutateurs du modèle 24 ports, vérifier d’abord l’identifiant du modèle. Le `2` du TP est une valeur locale :

```sql
SELECT name
FROM glpi_networkequipments
WHERE is_template = 0 AND networkequipmentmodels_id = 2;
```

Sauvegarde d’une base MySQL : voir [Commandes Sauvegarde et restauration](sauvegarde-restauration.md) (`mysqldump`, support du module Sauvegarde).

[Requêtes complètes et bonus](../tp/glpi/module-05/corrections.md)
