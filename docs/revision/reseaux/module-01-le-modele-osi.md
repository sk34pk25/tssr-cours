# Fiche de révision — Module 01 — Le modèle OSI

## Les sept couches dans l’ordre

| Couche | Nom | Repère |
|---|---|---|
| 7 | Application | Services réseau aux applications : HTTP/HTTPS, FTP, SMTP, DNS. |
| 6 | Présentation | Format, chiffrement et compression des données. |
| 5 | Session | Gestion du dialogue entre applications. |
| 4 | Transport | Segments, TCP/UDP et ports. |
| 3 | Réseau | Paquets, IPv4/IPv6, routage. |
| 2 | Liaison | Trames, MAC, Ethernet/Wi-Fi, commutateur. |
| 1 | Physique | Bits et signaux sur câble, fibre ou radio. |

## Le chemin des données

- Données applicatives → **segment** à la couche 4.
- Segment + informations IP → **paquet** à la couche 3.
- Paquet + informations de liaison → **trame** à la couche 2.
- Trame convertie en **bits** à la couche 1.

Une couche reçoit une **SDU**, ajoute ses informations de contrôle (**PCI**) et produit sa **PDU**. À l’arrivée, la désencapsulation retire ces informations dans l’ordre inverse.

## Les trois repères à ne pas confondre

- **MAC** : interface sur le lien local ; le commutateur l’utilise pour relayer une trame.
- **IP** : hôte et réseau ; le routeur l’utilise pour choisir le réseau suivant.
- **Port** : service ou flux à la couche transport ; exemples cités : 22/SSH, 53/DNS, 80/HTTP, 443/HTTPS.

## Observer avec Packet Tracer

Les activités du module sont des fichiers Packet Tracer. Elles ne sont pas publiées. Dans le logiciel, le mode Simulation montre le trajet couche par couche. Le mode temps réel laisse les paquets circuler.

## Questions flash

1. Quelle PDU est associée à la couche réseau ?
2. Quelle différence pratique faites-vous entre MAC, IP et port ?
3. Quelle transformation observe-t-on entre la couche transport et la couche réseau ?

Pour approfondir : [cours complet](../../modules/01-bases-reseaux/module-01-le-modele-osi.md) · [TP Packet Tracer](../../tp/reseaux/module-01/index.md) · [Kahoot](../../kahoot/bases-reseaux-m01-modele-osi.md).

## Provenance

- **Source :** notes de quiz des modules 1 et 2. Il n’y a pas de support PDF : l’onglet Cours Original indique Inexistant. Le PDF homonyme est un doublon de ces notes.
- **Structuration :** fiche de révision du module.
