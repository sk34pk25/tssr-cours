# Fiche de révision — Module 01 — Présentation de l’environnement — Installation de GLPI

## À connaître absolument

- Comprendre l’architecture Apache, PHP et MariaDB.
- Préparer une base et un compte SQL dédiés.
- Installer les fichiers GLPI avec des permissions adaptées.
- Finaliser l’assistant, supprimer les comptes par défaut et sécuriser l’accès.

## Méthode express

1. Identifier le besoin ou le symptôme.
2. Relever l’état actuel sans le modifier.
3. Appliquer une seule action contrôlée.
4. Mesurer le résultat.
5. Documenter et, si nécessaire, revenir en arrière.

## Commandes à reconnaître

```text
mysql&gt;create database glpidata;
mysql&gt;grant all privileges on glpidata.* to root@localhost identified by ‘MotDePass’;
```

## Pièges fréquents

- Confondre l’objectif attendu avec l’action réalisée.
- Modifier plusieurs paramètres avant d’effectuer un test.
- Oublier les différences de version ou de droits.
- Valider uniquement à l’écran sans test fonctionnel.

## Checklist de maîtrise

- [ ] Comprendre l’architecture Apache, PHP et MariaDB.
- [ ] Préparer une base et un compte SQL dédiés.
- [ ] Installer les fichiers GLPI avec des permissions adaptées.
- [ ] Finaliser l’assistant, supprimer les comptes par défaut et sécuriser l’accès.
- [ ] Je sais expliquer la vérification et le retour arrière.

## Questions flash

1. Quels sont les concepts indispensables de « Présentation de l’environnement — Installation de GLPI » ?
2. Quelle preuve technique montre que le résultat est conforme ?
3. Quelle action serait risquée sans sauvegarde ou instantané ?

Pour approfondir : [cours complet](../../modules/07-administration-glpi/module-01-presentation-de-l-environnement-installation-de-glpi.md).
