# Démonstrations — Module 04 — Le routage

## Fiche démo 1 - Démarrage et configuration initiale du pare-feu

### Démarrage et configuration initiale du pare-feu

### Démonstration 01 du module 04

Cette démonstration décrit les différentes étapes d’installation du pare-feu sous pfSense

### Déroulement

- Prérequis

Disposer d’un fichier .iso pfSense disponible sous Distrib ou sur https://www.pfSense.org/download/

Disposer d’une machine virtuelle avec une carte réseau VmNet10.

- Création de la machine virtuelle

Créer une nouvelle machine virtuelle avec les prérequis suivants :

### - 2 CPU

### - 20 Go de disque

### - 2 interfaces

- 1 en mode bridge

- 1 en mode VmNet10

La création de la machine virtuelle se fera de la même manière que lors des démonstrations précédentes.

- Configuration du pfSense

Au premier lancement de la machine virtuelle, l’utilitaire d’installation se lance. Appuyer sur la touche [Entrée]. Appuyer de nouveau sur la touche [Entrée]. Sélectionner le clavier français, puis appuyer sur la touche [Entrée]. Appuyer sur la touche [Entrée] pour valider le choix du clavier. Appuyer sur la touche [Entrée] afin de valider la configuration des disques. Appuyer sur la touche [Entrée] afin de finaliser le processus d’installation. Enfin, appuyer sur la touche [Entrée] afin de procéder au redémarrage de la machine virtuelle.

### Étapes illustrées dans le support

1. Accepter l’écran d’accueil et choisir Install pfSense.
2. Sélectionner la disposition de clavier French et continuer avec cette disposition.
3. Dans le partitionnement, sélectionner Auto (UFS). Une fois l’installation terminée, choisir No lorsque l’installateur propose une intervention manuelle, puis Reboot.

- Configuration des interfaces réseau

Lors du démarrage de la machine virtuelle, cet écran apparaît (1). Pour assigner des interfaces (indiquer à la machine virtuelle quelle est l’interface bridgée par exemple), appuyer sur la touche [ 1 ], puis appuyer sur la touche [Entrée]. Appuyer sur la touche [ n ], puis appuyer sur la touche [Entrée] pour indiquer qu’il n’y a pas de VLANs à configurer. Indiquer le nom de l’interface WAN (bridge), ici « em0 » puis appuyer sur la touche [Entrée]. Indiquer le nom de l’interface LAN (VmNet10), ici « em1 » puis appuyer sur la touche [Entrée]. Enfin appuyer sur les touches [ y ] et [Entrée] pour indiquer que la configuration des interfaces est bonne.

- Configuration des adresses IP des cartes réseau

Pour configurer les adresses réseau des cartes sur la machine virtuelle, appuyer sur la touche [ 2 ], puis appuyer sur la touche [Entrée]. Indiquer le nom de l’interface puis appuyer sur la touche [Entrée] (1). La configuration ne se fera pas en DHCP (ici), appuyer sur [ n ] puis sur la touche [Entrée]. Indiquer l’adresse IP à affecter à l’interface (2) ainsi que le masque en notation CIDR (3), puis appuyer sur la touche [Entrée]. Appuyer sur la touche [Entrée]. Appuyer de nouveau sur la touche [Entrée]. Appuyer sur la touche [ n ] puis sur [Entrée]

N. B. la méthodologie sera utilisée pour la configuration de la carte LAN em1.

- Accès à la console web du routeur

L’accès au portail web se fait via l’adresse IP configurée précédemment (adresse de l’interface LAN).

Dans cet exemple, l’adresse IP utilisée est 192.168.1.253. L’adresse est trouvable sur la page d’accueil du pfSense (1) ou lors de la configuration de l’interface LAN (2).

Sur le client, ouvrir un navigateur puis indiquer dans la barre URL l’adresse IP du routeur (3). Lors de la première connexion, les informations sont les suivantes :

### - Username : admin

### - Password : [valeur fournie par le formateur]

Cliquer sur le bouton Next (4). Cliquer sur le bouton Next (5). Indiquer le nom du routeur dans la combo-box Hostname (6) puis cliquer sur le bouton Next (7). Indiquer un nom de serveur NTP (8) ainsi que la bonne région pour la timezone (9), puis cliquer sur le bouton Next (10). Décocher la checkbox Block private networks from entering via WAN (11) puis cliquer sur le bouton Next (12). Cliquer sur le bouton Next (13). Indiquer un nouveau mot de passe pour se connecter à la console (14), puis cliquer sur le bouton Next (15). Enfin, cliquer sur le bouton Reload (16) pour finaliser la configuration.

### Étapes illustrées dans le support

1. Dans le Wizard / pfSense Setup, avancer depuis l’accueil puis l’écran de support.
2. Renseigner le nom de l’équipement. La capture montre Routeur, le serveur de temps 0.pfsense.pool.ntp.org et le fuseau Europe/Paris.
3. Configurer les réseaux privés sur le WAN selon le scénario, puis le LAN 192.168.1.253/24 dans l’exemple.
4. Saisir le secret d’administration fourni par le formateur, confirmer, puis recharger la configuration.

- [Activités du module](index.md)
- [Cours](../../../modules/09-services-reseaux-en-environnement-microsoft/module-04-module-04.md)
