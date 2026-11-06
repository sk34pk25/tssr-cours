# Fiche de révision — Module 01 — Présentation de l’environnement — Installation de GLPI

Préparer le réseau Olympus puis installer une application accessible depuis le poste client du laboratoire.

## Repères du laboratoire

Le sujet prévoit VMware Workstation, les supports d’installation des systèmes et quatre machines de laboratoire. Relever le plan IP, le serveur DNS et les versions avant de configurer les services.

## Contrôles à savoir réaliser

| Contrôle | Preuve à relever |
| --- | --- |
| Réseau et nom | Vérifier l’adresse, la passerelle et le DNS côté client. Contrôler que le nom du site résout vers le serveur GLPI. |
| Chaîne web et SQL | Vérifier le VirtualHost, Apache et PHP, puis le service MariaDB et les droits du compte utilisé par l’application. |
| Installation | Contrôler les dossiers de configuration, données et journaux, puis tester la connexion au portail depuis le client. |

## Retenir puis vérifier

**Une page Apache et un nom DNS correct prouvent des étapes distinctes. Tester ensuite l’application et sa connexion à la base.**

**1. Quel test faire si le nom du site ne se résout pas ?**

??? success "Réponse expliquée"
    Vérifier le DNS du client et les enregistrements A et CNAME du laboratoire, puis retester la résolution.

**2. Pourquoi une page Apache ne suffit-elle pas à valider le TP ?**

??? success "Réponse expliquée"
    Le serveur web répond, mais le VirtualHost peut encore servir la mauvaise racine ou l’application peut échouer sur PHP ou MariaDB.

**3. Quel nom de base reprendre dans l’assistant ?**

??? success "Réponse expliquée"
    Le nom réellement créé et autorisé. Le support alterne deux noms dans certains passages, à distinguer lors de la saisie.

## Pour pratiquer

- [Cours complet](../../modules/07-administration-glpi/module-01-presentation-de-l-environnement-installation-de-glpi.md)
- [Travaux pratiques](../../tp/glpi/module-01/index.md)
- [Installation guidée](../../tutoriels/installer-glpi.md)
- [Dépannage de l’accès à GLPI](../../troubleshooting/glpi-inaccessible.md)
