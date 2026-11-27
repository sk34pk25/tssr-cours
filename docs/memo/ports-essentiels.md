# Mémo — Ports essentiels

**Source : Bases des réseaux, notes des modules 1-2 (couche Transport, « Exemples de ports »).** Texte repris tel quel.

TCP (Transmission Control Protocol) : Protocole orienté connexion, garantissant la livraison fiable des données dans le bon ordre. Il utilise des mécanismes comme le contrôle de flux et la gestion des erreurs.

UDP (User Datagram Protocol) : Protocole non orienté connexion, plus rapide mais sans garantie de livraison des données (utilisé pour les flux audio/vidéo en temps réel).

| Port | Service (texte du cours) |
|---:|---|
| 22 | SSH (Secure Shell) pour l'administration distante sécurisée. |
| 25 | SMTP (Simple Mail Transfer Protocol) pour l'envoi d'emails. |
| 53 | DNS (Domain Name System) pour la résolution de noms de domaine. |
| 67 et 68 | DHCP (Dynamic Host Configuration Protocol) pour l'attribution d'adresses IP dynamiques. |
| 80 | HTTP pour le web. |
| 443 | HTTPS pour les communications web sécurisées. |
| 143 | IMAP (Internet Message Access Protocol) pour la gestion des emails sur un serveur distant. |
| 389 | LDAP (Lightweight Directory Access Protocol) pour les services d'annuaire. |
| 3389 | RDP (Remote Desktop Protocol) pour la prise en main à distance de bureaux Windows. |
| 161 et 162 | SNMP (Simple Network Management Protocol) pour la gestion des équipements réseau (161 pour les requêtes, 162 pour les notifications). |

[Cours — Le modèle OSI](../modules/01-bases-reseaux/module-01-le-modele-osi.md)
