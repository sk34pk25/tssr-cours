# Commandes MariaDB et GLPI

```bash
sudo mariadb
mariadb -u glpi -p glpi
mariadb-dump -u glpi_backup -p --single-transaction glpi > glpi.sql
```

```sql
SHOW DATABASES;
USE glpi;
SHOW TABLES;
DESCRIBE glpi_users;
SELECT name, firstname FROM glpi_users LIMIT 20;
```

Ne saisir un mot de passe ni dans l’historique du shell ni dans un script. L’option `-p` sans valeur demande le secret interactivement.
