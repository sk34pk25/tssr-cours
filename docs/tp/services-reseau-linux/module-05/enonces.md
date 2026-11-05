# Énoncés — Module 05 — DNS résolveur

Les consignes suivent les scénarios des sources. Les valeurs historiques et les particularités de version sont expliquées dans le cours et les corrigés.

## TP 1 — Résolveur BIND sur DEB-S2

### Configurer un serveur DNS résolveur

Durée estimée

1 heure

### Objectifs

- Intégrer un service DNS résolveur dans une infrastructure réseau existante.
- Faire des tests de résolution DNS.

### Prérequis

- Les ateliers précédents doivent être fonctionnels

### Notes

- Pour toutes les configurations réseau, vous remplacerez num\_stag par un chiffre entre 1 et 30, par exemple 10.

### Etape 1 - Installation et configurer le service DNS Bind9 sur DEB-S2

- Installer le service Bind9.
- Depuis les options de configuration du service, désactiver DNSSEC et autoriser les requêtes provenant des réseaux LAN Clients et LAN Serveurs.
- Redémarrer le service pour prendre en compte les modifications apportées.

### Etape 2 - Modification de la configuration cliente DNS des postes

- Installer le paquet dnsutils sur le poste Cli-db-10.
- Modifier la configuration cliente DNS de la machine Cli-db-10 afin qu’il interroge DEB- S2.
- Modifier la configuration cliente DNS des serveurs DEB-S1, DEB-S2 et RouTux afin qu’ils interrogent DEB-S2.

### Etape 3 - Test de résolution depuis le client

- Depuis votre machine physique, tester la résolution de l’hôte www.isc.org et yahoo.fr.

Ces tests ont-ils abouti ? Quelles sont les adresses IP des hôtes requêtés ?

- Depuis le poste Cli-db-10, réitérer les tests de résolution effectués précédemment :

www.isc.org

www.yahoo.fr

### D’après vous, quel mécanisme votre serveur utilise-t-il actuellement pour résoudre les noms d’hôtes publics ?

### Etape 4 - Configuration de Bind9 pour faire appel aux services de redirecteur

- Sur DEB-S2, modifier la configuration du service Bind9 afin qu’il fasse appel au redirecteur FAI (ou l’adresse IP d’un forwarder extérieur) pour résoudre les noms d’hôte publics.
- Refaire les tests de résolution précédents.


[Corrigés commentés](corrections.md) · [Cours du module](../../../modules/15-services-reseau-en-environnement-linux/module-05-dns-resolveur.md).
