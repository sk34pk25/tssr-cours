# Corrections expliquées — Module 05 — Le service DHCP

## Solution du TP 1 - Le service DHCP

Les options 003, 006 et 015 définissent la passerelle, les DNS et le suffixe. L’option 12 désigne le nom d’hôte. Comparer l’adresse, le serveur DHCP et la durée reçue avant et après `ipconfig /renew`, puis après `ipconfig /release` et une nouvelle demande.

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

statique).

Paramétrage des clients :

- Adapter les paramètres clients :

- Configurer une réservation pour le 2ème poste client avec la 1ère adresse IP de

la plage d’adresses définie.

- Sur un poste client, utiliser la commande ipconfig pour :

- Renouveler le bail DHCP (sans perdre l’adresse IP obtenue). o Relâcher et obtenir une nouvelle adresse IP.

## Solution du TP 2 - Le service DHCP et les réseaux

Relayer sur le réseau client vers le serveur joignable. Vérifier sur `ipconfig /all` l’IP du serveur qui a répondu. Les réseaux `.0.0/24` et `.1.0/24` ont chacun leur passerelle `.254`. Une adresse obtenue dans la mauvaise plage indique un mauvais rattachement ou une mauvaise étendue.

### Le service DHCP et les réseaux

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 5 et terminé le TP précédent.

1 à 2 heures

Prérequis :

- Avoir réalisé le TP précédent du Module 04.

- Avoir les deux machines virtuelles RTR-00 et RTR-01.

Pouvoir distribuer des adresses IP dans un autre domaine de diffusion.

- Paramétrer le serveur d’un domaine de diffusion pour fournir des adresses IP à plusieurs domaines de diffusion.
- Créer sur le serveur SRV-2K19-0 une étendue DHCP pour fournir des adresses IP dans le domaine de diffusion du serveur.
- Créer également une étendue pour le second domaine de diffusion hébergé sur le routeur RTR-01.

- Faire la même opération sur le second réseau.

- Faire la mise en place d’un client en adressage automatique. o Faire la mise en place d’un serveur Windows. o Configurer deux étendues DHCP sur le serveur afin de pouvoir fournir

des adresses IP dans les deux domaines de diffusion.

- Tester le bon fonctionnement.

- Vérifier l’obtention d’une adresse IP sur les postes clients de chaque réseau. o Tester la connectivité entre les clients de chaque réseau.

- Mettre en place un service de relai DHCP sur les routeurs de chaque domaine de diffusion afin de pallier la défaillance d’un serveur DHCP.

- Arrêter l’un des deux serveurs DHCP et vérifier l’obtention et la connectivité

des postes clients.

## Solution du TP 3 - Disponibilité du service DHCP

La relation de failover du corrigé associe deux serveurs, avec répartition de charge 50/50 dans l’exemple. Distinguer un client conservant un bail déjà valide d’un client ayant obtenu ou renouvelé un bail depuis le partenaire.

### Disponibilité du service DHCP

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 5 et terminé le TP précédent.

1 à 2 heures

Prérequis :

- Avoir réalisé le TP précédent du Module 05.

Définition des paramètres :

- Définir le plan d’adressage et les paramètres pour :

- Fournir à vos postes clients des adresses IP dans votre réseau VmNet10.

- Permettre au serveur du réseau 192.168.1.0/24 de fournir les adresses IP de

```text
votre réseau en cas de défaillance de votre serveur. 
o Utiliser la fonction FailOver
```

Il faut utiliser la fonction Failover pour partager la zone créée sur le premier serveur DHCP vers le serveur DHCP du second réseau.

### Étapes illustrées dans le support

1. Dans Configure Failover sur l’étendue VNET10 (192.168.0.0), choisir le serveur partenaire.
2. Dans Add Server, saisir 192.168.1.67 dans This server puis valider.

### Étapes illustrées dans le support

1. Créer la relation de basculement avec le partenaire 192.168.1.67.
2. L’exemple affiche un délai maximum de prise en charge du client de 1 heure et le mode Load balance. La répartition est de 50 % pour le serveur local et 50 % pour le partenaire.
3. L’intervalle de basculement et l’authentification des messages sont des options distinctes. Le champ Shared Secret est vide dans la capture. Choisir Next.

Configuration pour les clients du 1er réseau:

- Configurer les plages adaptées sur les deux serveurs DHCP. Il faut suivre la procédure indiquée sur la première phase du TP pour créer les plages DHCP.

- Configurer le relais DHCP sur le routeur adapté.

- Tester le bon fonctionnement.

- Si le serveur DHCP du 1er réseau est arrêté.

Le relai DHCP du réseau VNET10 doit renvoyer les requêtes sur le serveur DHCP du réseau vnet11.

- Si le serveur DHCP du 1er réseau est relancé.

### Le relai DHCP du réseau VNET11 doit renvoyer les requêtes sur le serveur DHCP du réseau

vnet10.

- Vérifier la connectivité avec le réseau VmNet10 du VmNet11. Configuration pour les clients du 2ème réseau :

- Configurer les plages adaptées sur les deux serveurs DHCP.

- Configurer le relais DHCP sur le routeur adapté.

- Tester le bon fonctionnement.

- Si le serveur DHCP du 2ème réseau est arrêté.

Le relai DHCP du réseau VNET10 doit renvoyer les requêtes sur le serveur DHCP du réseau vnet11.

- Si le serveur DHCP du 2ème réseau est relancé.

Le relai DHCP du réseau VNET11 doit renvoyer les requêtes sur le serveur DHCP du réseau vnet10.

- Vérifier la connectivité avec le réseau VmNet11 du VmNet10.

- [Activités du module](index.md)
- [Cours](../../../modules/09-services-reseaux-en-environnement-microsoft/module-05-module-05.md)
