# Administration GLPI

Installer le serveur, relier AD, organiser l’inventaire, traiter les tickets puis exploiter SQL et les extensions. La progression compte six modules réels, accompagnés de leurs supports, énoncés et corrections.

## Périmètre du laboratoire

Les supports utilisent Debian 10, GLPI 9.5 et FusionInventory, avec PHP 7.3 dans le TP et 7.4 dans le cours. Les versions et incohérences historiques restent visibles dans Original ; Optimisé explique les commandes et choix à adapter. Pour un déploiement récent, consulter la [documentation GLPI](https://help.glpi-project.org/documentation) et son [inventaire natif](https://www.glpi-project.org/en/discover-native-glpi-inventory/).

## Progression officielle

| Module | Compétence | Accès |
|---|---|---|
| 01 | Présentation de l’environnement — Installation de GLPI | [Cours](module-01-presentation-de-l-environnement-installation-de-glpi.md) · [TP](../../tp/glpi/module-01/index.md) |
| 02 | Authentification AD — Habilitations | [Cours](module-02-authentification-ad-habilitations.md) · [TP](../../tp/glpi/module-02/index.md) |
| 03 | Gestion de parc — Inventaire informatique | [Cours](module-03-gestion-de-parc-inventaire-informatique.md) · [TP](../../tp/glpi/module-03/index.md) |
| 04 | Assistance — Traitements automatisés des tickets | [Cours](module-04-assistance-traitements-automatises-des-tickets.md) · [TP](../../tp/glpi/module-04/index.md) |
| 05 | Les bases de MySQL et MariaDB | [Cours](module-05-les-bases-de-mysql-et-mariadb.md) · [TP](../../tp/glpi/module-05/index.md) |
| 06 | Plug-ins et inventaire | [Cours](module-06-plug-ins-et-inventaire.md) · [TP](../../tp/glpi/module-06/index.md) |

## Utiliser les deux versions du cours

| Étape | Ressource | But |
| --- | --- | --- |
| 1 | **Cours Original** | Lire le support, les consignes, les annexes et les corrections dans leur ordre. |
| 2 | **Cours Optimisé IA** | Suivre la méthode et distinguer les choix actuels des paramètres du laboratoire historique. |
| 3 | [Travaux pratiques](../../tp/glpi/index.md) | Réaliser les étapes, consigner les preuves, puis comparer avec le corrigé. |
| 4 | [Fiches de révision](../../revision/glpi/index.md) | Répondre aux questions et retrouver les contrôles. |

Ce cours complète [Sensibilisation ITIL et gestion de parc](../06-sensibilisation-itil-gestion-parc/index.md). Le TP 03 donne accès à la transcription du manuel Aruba pour vérifier les caractéristiques du matériel.

## Accès complémentaires

- [Installation guidée](../../tutoriels/installer-glpi.md)
- [Dépannage d’un accès GLPI](../../troubleshooting/glpi-inaccessible.md)
- [Commandes MariaDB et GLPI](../../commandes/mariadb-glpi.md)
- [Mémo GLPI et SQL](../../memo/glpi-sql.md)
