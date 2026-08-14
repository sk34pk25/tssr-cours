# Mémo — GLPI et SQL

```sql
SHOW DATABASES;
USE glpi;
SHOW TABLES;
DESCRIBE glpi_users;
SELECT name, firstname FROM glpi_users ORDER BY name;
SELECT COUNT(*) AS nombre FROM glpi_computers;
```

- Commencer par `SELECT`.
- Limiter les résultats lors d’une exploration.
- Sauvegarder avant `UPDATE`, `DELETE` ou modification de schéma.
- Ne pas utiliser le compte MariaDB `root` pour l’application.
