# TP — Module 01 — Présentation de l’environnement — Installation de GLPI

## Objectif du laboratoire

Préparer le réseau Olympus puis installer une application accessible depuis le poste client du laboratoire.

## Préparer et réaliser l’atelier

Le sujet prévoit VMware Workstation, les supports d’installation des systèmes et quatre machines de laboratoire. Relever le plan IP, le serveur DNS et les versions avant de configurer les services.

1. [Lire l’énoncé complet](enonces.md).
2. Réaliser les étapes dans le laboratoire et relever les preuves.
3. [Comparer avec la correction](corrections.md), puis reprendre la [fiche de révision](../../../revision/glpi/module-01-presentation-de-l-environnement-installation-de-glpi.md).

| Contrôle | Preuve à relever |
| --- | --- |
| Réseau et nom | Vérifier l’adresse, la passerelle et le DNS côté client. Contrôler que le nom du site résout vers le serveur GLPI. |
| Chaîne web et SQL | Vérifier le VirtualHost, Apache et PHP, puis le service MariaDB et les droits du compte utilisé par l’application. |
| Installation | Contrôler les dossiers de configuration, données et journaux, puis tester la connexion au portail depuis le client. |

## Liens

- [Cours du module](../../../modules/07-administration-glpi/module-01-presentation-de-l-environnement-installation-de-glpi.md)
- [Tous les ateliers GLPI](../index.md)
- [Installation guidée](../../../tutoriels/installer-glpi.md)
- [Dépannage de l’accès à GLPI](../../../troubleshooting/glpi-inaccessible.md)
