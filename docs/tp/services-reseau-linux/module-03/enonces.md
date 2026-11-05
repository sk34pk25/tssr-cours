# Énoncés — Module 03 — Routage et traduction d’adresses

Les consignes suivent les scénarios des sources. Les valeurs historiques et les particularités de version sont expliquées dans le cours et les corrigés.

## TP 1 — Routage des LAN

Services réseau en environnement Linux

### Routage

Durée estimée

1 heure

### Objectifs

- Configurer l’adressage réseau sous GNU/Linux Debian.
- Activer le routage et configurer des routes par défaut sous GNU/Linux.

### Prérequis

- Toutes les VMs de l’atelier 1 doivent être opérationnelles.

### Notes

- Pour toutes les configurations réseau, vous remplacerez num\_stag par un chiffre entre 1 et 30, par exemple 10.

Services réseau en environnement Linux

### Etape 1 - Ajout de cartes réseau à la machine RouTux

- Dans les propriétés (VMware Workstation) de la machine virtuelle RouTux, lui ajouter des cartes réseau pour qu’elle dispose de 3 cartes réseau.
- Réaliser les associations de cartes réseau suivantes :

<table><tr><th>Carte</th><th>Connexion</th><th>Adresse MAC</th></tr><tr><td>Network Adapter</td><td>Custom / VMNet4</td><td></td></tr><tr><td>Network Adapter 2</td><td>Custom / VMNet6</td><td></td></tr><tr><td>Network Adapter 3</td><td>Custom / VMNet2</td><td></td></tr></table>

- Compléter le tableau précédent en renseignant les adresses MAC

### Etape 2 - Configuration IPv4 du réseau de RouTux

Nom de l interface

VMNet4

LAN Clients 172.18.num\_stag.0 / 24

VMNet2

172.30.num\_stag.0 / 24

192.168.num\_stag.0 / 24

LAN Serveurs

VMNet6

- Reporter les noms des cartes réseau sur le schéma ci-dessus.
- Configurer l’adressage IP des 3 cartes réseau de RouTux, leur affecter pour numéro d’hôte la dernière adresse d’hôte du réseau.
- S’assurer que RouTux communique bien avec tous les hôtes des réseaux du LAN Clients et LAN Serveurs.

Services réseau en environnement Linux

### Etape 3 -  Activation du routage sur RouTux

- Activer dynamiquement et durablement le paramètre noyau de routage sur RouTux.
- Configurer la passerelle par défaut des postes des réseaux LAN Client et LAN Serveur.
- Vérifier que les postes du LAN Clients communiquent bien avec les postes du LAN Serveurs

## TP 2 — Intégration de pfSense et NAT

### Intégration d’un routeur NAT sous pfSense

Durée estimée

2 heures

### Objectifs

- Intégrer une Appliance pfSense et configurer son adressage IP
- Créer des règles de filtrage sur pfSense
- Configurer des routes sous Debian et pfSense

### Prérequis

- Toutes les VMs de l’atelier 1 doivent être opérationnelles et l’atelier 2 en place.
- Télécharger l’ISO de pfSense sur le site officiel de pfSense https://www.pfsense.org/download/

### Notes

- Pour toutes les configurations réseau, vous remplacerez num\_stag par un chiffre entre 1 et 30 par exemple 10.

### Etape 1 - Ajout d’une carte VMNet2 à une VM Client

- Dans les propriétés de la machine virtuelle VM Cli-db-10, ajouter une carte réseau pour qu’elle dispose de 2 cartes réseau.
- Associer la carte Network Adapter 2 à la connexion Custom / VMNet2.
- Configurer l’adressage réseau de la nouvelle carte avec l’adresse 172.30.num\_stag.10/24

### Etape 2 - Ajout d’une machine virtuelle pfSense

- Créer une nouvelle machine virtuelle nommée pfSense.
- Configurer son adressage réseau :
- Son interface réseau LAN correspond à sa carte raccordée au réseau

VMNet2 ; utiliser la première adresse d’hôte utilisable sur ce réseau.

- Son interface WAN doit être liée à sa carte réseau Bridged.
- Utiliser comme adresse IP celle qui est disponible sur votre réseau ; le

WAN pourrait être configuré en DHCP sur votre réseau local par exemple.

- Configurer l’adresse de votre passerelle locale comme adresse de

passerelle par défaut.

- S’assurer que le serveur pfSense communique bien avec le serveur

Internet ayant l’adresse IP 9.9.9.9

- Sur le schéma, le réseau 88.44.22.0/24 correspond au réseau local de notre maquette.

88.44.22.0 / 24

172.30.num\_stag.0 / 24 Bridged

9.9.9.9

VMNet2

Passerelle FAI

88.44.22.254

- Se connecter à l’interface web pfSense depuis la VM Cli-db-10 avec l’URL https://IP\_interface\_LAN (par défaut login : admin, mot de passe : pfsense).
- Ajouter la passerelle et les routes pour joindre les réseaux LAN CLIENT et LAN SERVEUR via RouTux.
- Modifier la règle de filtrage préconfigurée pour IPv4 sur la carte LAN pour autoriser les flux provenant de toutes les sources (source : any).
- S’assurer que les postes des réseaux LAN CLIENT et LAN SERVEUR communiquent avec votre pfSense (via son adresse en 172.30.num\_stag.0/24).

### Etape 3 - Configuration du routage et de la résolution DNS client

Sur RouTux, configurer l’adresse de votre serveur pfSense comme adresse de passerelle par défaut.

Infrastructure Ecole

Cli-db-10

ftp.fr.debian.org

RouTux

LAN Clients VMNet2

9.9.9.9

LAN Serveurs

Passerelle FAI

88.44.22.254

66.55.44.33

Infrastructure Stagiaire

DNS FAI DEB-S1 DEB-S2

- Vérifier les paramétrages par défaut NAT du routeur pfSense.
- Mode Automatic outbound NAT activé
- Règles Outbound automatiques activées pour tous les sous-réseaux

sources. Quelles sont leurs fonctions ? Pour quels besoins sont-elles configurées ?

- S’assurer que les postes des réseaux LAN CLIENT et LAN SERVEUR communiquent avec le DNS FAI (adresse IP du DNS de votre FAI).
- Configurer tous vos postes sous GNU/Linux afin qu’ils soient client DNS du DNS FAI ou le 9.9.9.9 (sur notre maquette : 66.55.44.33 à remplacer par le DNS de votre FAI).
- Faire un test de liaison de chacun des postes vers ftp.fr.debian.org
- Une fois le serveur pfSense correctement configuré, vous pouvez désactiver la carte réseau connectée au VMNet2 sur la VM Cli-db-10.


[Corrigés commentés](corrections.md) · [Cours du module](../../../modules/15-services-reseau-en-environnement-linux/module-03-routage-et-traduction-d-adresses.md).
