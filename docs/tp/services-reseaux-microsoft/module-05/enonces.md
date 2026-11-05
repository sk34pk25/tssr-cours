# Énoncés — Module 05 — Le service DHCP

## Enoncé du TP 1 - Le service DHCP

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 5.

1 à 2 heures

Prérequis :

- Avoir réalisé le TP précédent du Module 04.

Création des machines virtuelles :

- Une machine virtuelle cliente Windows 10 sur le réseau VmNet10.
- Une machine virtuelle serveur Windows 2019 Standard sur le réseau VmNet10. Installation du service DHCP

- Définir un nouveau plan d’adressage pour votre réseau VmNet10 avec :

- Une plage de 100 adresses pour les postes clients. o Les adresses statiques pour les serveurs. • Configurer le service DHCP sur le nouveau serveur Windows 2019 Standard pour :

- Fournir des adresses IP sur les postes clients. o Fournir l’ensemble des paramètres IP nécessaires aux postes clients. o Ne pas fournir les adresses IP prévues pour les serveurs (configuration

statique). Un schéma de l’infrastructure devra être réalisé. Paramétrage des clients :

- Adapter les paramètres clients :

- Configurer une réservation pour le 2e poste client avec la 1re adresse IP de la

plage d’adresses définie.

- Sur un poste client, utiliser la commande ipconfig pour :

- Renouveler le bail DHCP (sans perdre l’adresse IP obtenue). o Relâcher et obtenir une nouvelle adresse IP.

### Preuves attendues

Conserver le plan d’adressage, la plage de 100 adresses, les options, l’exclusion des adresses statiques, la réservation et les sorties des deux essais de bail.

## Enoncé du TP 2 - Le service DHCP et les réseaux

### Le service DHCP et les réseaux

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 5 et terminé le TP précédent.

1 à 2 heures

Prérequis :

- Avoir réalisé le TP précédent du Module 04.

- Avoir les deux machines virtuelles RTR-00 et RTR-01.

Pouvoir distribuer des adresses IP dans un autre domaine de diffusion.

### Nom : RTR-00 Adresse IP : 192.168.0.254 Nom : CLI-00 Adresse IP : AUTO

### Nom : SRV-2K19-0 Adresse IP : 192.168.0.1

### Carte Réseau

### Réseau 192.168.0.0/24

VNET10

- Paramétrer le serveur d’un domaine de diffusion pour fournir des adresses IP à plusieurs domaines de diffusion.
- Créer sur le serveur SRV-2K19-0 une étendue DHCP pour fournir des adresses IP dans le domaine de diffusion du serveur.
- Créer également une étendue pour le second domaine de diffusion hébergé sur le routeur RTR-01.

- Faire la même opération sur le second réseau.

- Faire la mise en place d’un client en adressage automatique. o Faire la mise en place d’un serveur Windows. o Configurer deux étendues DHCP sur le serveur afin de pouvoir fournir

### Nom : RTR-01 Adresse IP : 192.168.1.254 Nom : CLI-01 Adresse IP : AUTO

### Nom : SRV-2K19-1 Adresse IP : 192.168.1.1

des adresses IP dans les deux domaines de diffusion.

### Carte Réseau

### Réseau 192.168.1.0/24

VNET11

- Tester le bon fonctionnement.

- Vérifier l’obtention d’une adresse IP sur les postes clients de chaque réseau. o Tester la connectivité entre les clients de chaque réseau.

- Mettre en place un service de relai DHCP sur les routeurs de chaque domaine de diffusion afin de pallier la défaillance d’un serveur DHCP.

- Arrêter l’un des deux serveurs DHCP et vérifier l’obtention et la connectivité

des postes clients.

### Preuves attendues

Vérifier un bail par réseau, les paramètres propres à chaque étendue, la connectivité croisée et l’obtention d’un bail avec un serveur arrêté.

## Enoncé du TP 3 - Disponibilité du service DHCP

### Disponibilité du service DHCP

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 5 et terminé le TP précédent.

1 à 2 heures

Prérequis :

- Avoir réalisé le TP précédent du Module 05.

Définition des paramètres :

- Définir le plan d’adressage et les paramètres pour :

- Fournir à vos postes clients des adresses IP dans votre réseau VmNet10. o Fournir aux postes client du réseau 192.168.1.0/24 des adresses IP de votre

serveur en cas de défaillance du serveur. Vous configurerez les serveurs avec la fonction de FailOver. Configuration pour les clients du 1er réseau :

- Configurer les plages adaptées sur les deux serveurs DHCP.
- Configurer le relais DHCP sur le routeur adapté.
- Tester le bon fonctionnement.

- Si le serveur DHCP du 1er réseau est arrêté. o Si le serveur DHCP du 1er réseau est relancé. o Vérifier la connectivité avec le réseau VmNet10 du VmNet11. Configuration pour les clients du 2e réseau :

- Configurer les plages adaptées sur les deux serveurs DHCP.
- Configurer le relais DHCP sur le routeur adapté.
- Tester le bon fonctionnement.

- Si le serveur DHCP du 2e réseau est arrêté. o Si le serveur DHCP du 2e réseau est relancé. o Vérifier la connectivité avec le réseau VmNet11 du VmNet10.

### Preuves attendues

Tester l’arrêt puis le redémarrage du service pour chacun des deux réseaux et consigner état de la relation, serveur qui fournit le bail et communication avec l’autre réseau.

- [Activités du module](index.md)
- [Cours](../../../modules/09-services-reseaux-en-environnement-microsoft/module-05-module-05.md)
