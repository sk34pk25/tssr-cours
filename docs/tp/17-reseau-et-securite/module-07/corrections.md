# Correction — TP8 — Télétravail

Titre identique, « TD8 du Module 2 ». Prérequis : avoir fait les précédents. Durée : 4 heures.

Objectif : sécuriser les connexions à distance pour le télétravail avec OpenVPN et WireGuard sur pfSense. La correction écrit « WireGard » dans l’objectif, puis « Wireguard » dans les étapes. Comprendre le fonctionnement des VPN.

OpenVPN, texte extractible :

- sur le client Windows, en binôme, pouvoir ping les adresses WAN ;
- pour les personnes en ligne, sortir le client Windows sur le réseau bridge, lui donner l’adresse de CLT-NAT, et éteindre CLT-NAT ;
- sur pfSense, si l’authentification LDAP d’un TP précédent n’est plus là : ajouter une autorité de certification, créer un certificat serveur, mettre en place l’authentification LDAP, paramétrer le serveur OpenVPN, paramétrer le client OpenVPN ;
- télécharger le fichier d’installation et de configuration client et l’envoyer au binôme ;
- échanger les fichiers, les installer sur les clients Windows, tester chacun son tour ;
- pour les personnes en ligne, installer le fichier sur le client Windows connecté au WAN.

WireGuard :

- sur pfSense, paramétrer WireGuard et le pair pour CLT-NAT ;
- sur CLT-NAT, renouveler les clés privée et publique, adapter le fichier de configuration, activer le routage, activer WireGuard, essayer une connexion SSH vers le serveur web ;
- la correction indique l’adresse `https://wireguard.how/client/debian/` pour les commandes.

Les puces sans texte sont des captures. Les pages du PDF qui ne portent que l’en-tête de formation sont des captures d’écran. Aucun texte n’y est extractible : elles ne sont pas recopiées, et aucun logo n’est repris.
