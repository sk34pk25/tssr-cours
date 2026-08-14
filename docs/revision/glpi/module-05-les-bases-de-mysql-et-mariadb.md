# Fiche de révision — Module 05 — Les bases de MySQL et MariaDB

## À connaître absolument

- Se connecter à la base GLPI avec un compte autorisé.
- Afficher bases, tables et structure.
- Écrire des SELECT avec filtres, tris et agrégats.
- Sauvegarder avant toute requête de modification.

## Méthode express

1. Identifier le besoin ou le symptôme.
2. Relever l’état actuel sans le modifier.
3. Appliquer une seule action contrôlée.
4. Mesurer le résultat.
5. Documenter et, si nécessaire, revenir en arrière.

## Commandes à reconnaître

```text
MariaDB
mysql —u root -p
mysql&gt;SHOW databases;
mysql&gt;CONNECT glpidata;
mysql&gt;SHOW tables;
mysql&gt;DROP database glpidata;
mysql&gt;SELECT * FROM clients;
mysql&gt;SELECT Nom, Ville FROM clients;
mysql&gt;SELECT Prénom, Nom FROM clients WHERE Ville='Caen';
mysql&gt;SELECT Prénom, Nom FROM clients WHERE ID &gt; 3;
```

## Pièges fréquents

- Confondre l’objectif attendu avec l’action réalisée.
- Modifier plusieurs paramètres avant d’effectuer un test.
- Oublier les différences de version ou de droits.
- Valider uniquement à l’écran sans test fonctionnel.

## Checklist de maîtrise

- [ ] Se connecter à la base GLPI avec un compte autorisé.
- [ ] Afficher bases, tables et structure.
- [ ] Écrire des SELECT avec filtres, tris et agrégats.
- [ ] Sauvegarder avant toute requête de modification.
- [ ] Je sais expliquer la vérification et le retour arrière.

## Questions flash

1. Quels sont les concepts indispensables de « Les bases de MySQL et MariaDB » ?
2. Quelle preuve technique montre que le résultat est conforme ?
3. Quelle action serait risquée sans sauvegarde ou instantané ?

Pour approfondir : [cours complet](../../modules/07-administration-glpi/module-05-les-bases-de-mysql-et-mariadb.md).
