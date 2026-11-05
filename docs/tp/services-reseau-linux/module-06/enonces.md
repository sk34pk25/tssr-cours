# Énoncés — Module 06 — Le DHCP

Les consignes suivent les scénarios des sources. Les valeurs historiques et les particularités de version sont expliquées dans le cours et les corrigés.

## TP 1 — Serveur DHCP et relais

Services réseau en environnement Linux

### Configurer le serveur DHCP avec isc-dhcp-server

Durée estimée

1 heure

### Objectifs

- Installer et configurer le service relais DHCP de l’ISC
- Installer et configurer le service isc-dhcp-server
- Analyser les échanges entre un client DHCP, un relais DHCP et un serveur DHCP
- Gérer le lancement des composantes DHCP via leur binaire ou en tant que service

### Prérequis

- Les ateliers précédents doivent être fonctionnels.

### Notes

- Pour toutes les configurations réseau, vous remplacerez num\_stag par un chiffre entre 1 et 30, par exemple 10.

### Etape 1 - Installation du relais DHCP sur RouTux

- Rechercher le paquet d’installation du service relais DHCP de l’ISC puis l’installer

Ne pas répondre aux questions de l’assistant d’installation

- Identifier le nom des interfaces réseau de RouTux raccordées aux réseaux LAN Clients et LAN Serveurs.
- Faire un test de communication entre RouTux et DEB-S1.
- Relancer l’assistant de configuration pour le paquet précédemment installé au moyen de la commande suivante :

```text
# dpkg-reconfigure nom-du-paquet
```

Répondez aux questions concernant les interfaces de travail et saisissez l’adresse IP de DEB- S1 comme adresse du serveur DHCP.

Services réseau en environnement Linux

### RouTux DEB-S1 IPv4 :

LAN Serveurs LAN Clients

172.18.num\_stag.0 / 24

Nom de l interface

### Etape 2 - Configuration du service isc-dhcp-server sur DEB-S1

- Installer le service isc-dhcp-server sur DEB-S1
- Configurer le service pour qu’il écoute sur l’interface réseau du serveur
- Configurer le service en respectant les contraintes suivantes :
- Durée de validité des baux par défaut de 4J et maximum de 8J
- Adresse du serveur DNS : adresse IP de DEB-S2
- Adresse de passerelle par défaut à fournir
- Plage d’adresse pour le réseau LAN CLIENT :

de 172.18.num\_stag.100 à 172.18. num\_stag.200

### Etape 3 - Analyse en mode Debug des échanges client \<=\> relais \<=\> serveur

- Avec la commande systemctl appropriée, vérifier :
- Sur RouTux que le service relais DHCP est bien arrêté
- Sur DEB-S1 que le service serveur DHCP est bien arrêté
- Lancer le relais via son binaire, en mode Debug.
- Lancer le service DHCP via son binaire en mode Debug.
- En cas de problème sur le prochain point de consigne, vous analyserez les requêtes échangées entre les différents éléments.
- Configurer Cli-db-10 clients DHCP et s’assurer qu’il a bien obtenu un adressage IP, une adresse de passerelle par défaut et l’adresse du serveur DNS de votre infrastructure.
- Arrêter les processus résultants du lancement des binaires du relais et serveur DHCP.
- Utiliser la commande systemctl appropriée pour démarrer normalement les services relais et serveur DHCP.
- S’assurer que les services relais et serveur DHCP sont bien configurés pour être automatiquement lancés au démarrage des serveurs. Au besoin, faire le nécessaire pour qu’ils le soient.


[Corrigés commentés](corrections.md) · [Cours du module](../../../modules/15-services-reseau-en-environnement-linux/module-06-dhcp.md).
