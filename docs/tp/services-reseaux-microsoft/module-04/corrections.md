# Corrections expliquées — Module 04 — Le routage

## Solution du TP 1 - Le routeur

Sur VMNet10, la dernière adresse d’hôte est `192.168.0.254/24`. Associer la carte et le réseau corrects avant de créer des règles. Observer le chemin par `tracert`, puis contrôler filtrage, traduction éventuelle et retour.

### Le routeur

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 4.

30 minutes à 1 heure

Prérequis :

- Déployer la machine Virtuelle CLI-01-TP8-OK.

- Identifiant : AdminFormation - Mot de passe : [valeur fournie par le formateur]

- Déployer la machine virtuelle RTR-01-TP8-OK sur VMware Workstation.

- Identifiant : admin - Mot de passe : [valeur fournie par le formateur]

### Création des VM

- Une VM Windows 10 nommée CLI-00 qui fera office de poste client.
- Une VM routeur pfSense nommée RTR-00. Connectivité

- Configurer le poste client CLI-00.

- Carte réseau : VMnet 10 o Adresse IP : 192.168.0.10/24.

- Configurer le routeur RTR-00.

- 1ère carte réseau : Bridge. o Adresse IP : utiliser l’adressage dynamique. o 2ème carte réseau : Bridge. o Utiliser l’adresse IP 172.16.0.1/16 o 3ème carte réseau : VMNET10

- Adresse IP : utiliser la dernière adresse d’hôte du réseau privé défini

précédemment.

- Vérifier la connectivité des machines :

- Du poste CLI-00 vers le routeur RTR-00.

- Du routeur RTR-01 vers le routeur RTR-00

- Du poste CLI-00 vers le poste CLI-01.

Routes

- Indiquer ci-dessous les opérations que vous avez réalisées sur votre routeur PfSense :

1. Mise en place d’une adresse IP fixe sur l’interface WAN du PfSense (la même adresse que celle obtenue via le DHCP). 2. Mise en place d’une adresse IP fixe sur l’interface LAN. 3. Connexion sur l’interface web PfSense depuis le client Windows 10 (NB : par défaut le login est admin et le mot de passe [secret fourni par le formateur]). 4. Désactivation du « Block private networks and loopback adresses » pour les interfaces WAN et LAN :

5. Suppression des règles superflues :

6. Suppression et création de la gateway adéquate (par où vous souhaitez passer pour atteindre le réseau cible).

7. Création de la route vers le réseau distant en passant par la Gateway créée

## Solution du TP 2 - Le réseau global

Les routeurs de bord utilisent une route par défaut vers RTR-00. RTR-00 utilise une route vers chacun des réseaux clients. Le tableau vérifié dans l’Original donne les préfixes et prochains sauts. Pour un `/30`, la première et la dernière adresse utilisables sont les deux hôtes entre réseau et diffusion.

### Le réseau global

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 4 et réalisé le TP précédent.

1 à 2 heures

Prérequis :

- Avoir réalisé le TP précédent du Module 04.

### Création des VM

- Deux VM Windows 10 nommées CLI-00 et CLI-01 qui feront office de postes clients.
- Trois VM routeur pfSense nommée RTR-00, RTR-01, RTR-02. Connectivité :

- Configurer le poste client CLI-00.

- Carte réseau : BRIDGE o Adresse IP : Utiliser la deuxième IP disponible du réseau.

- Configurer le poste client CLI-01.

- Carte réseau : BRIDGE o Adresse IP : utiliser la deuxième IP disponible du réseau.

- Configurer le routeur RTR-00.

- 1ère carte réseau : Bridge o Adresse IP : utiliser la première adresse du réseau. o 2ème carte réseau : Bridge o Adresse IP : utiliser la première adresse du réseau.

- Configurer le routeur RTR-01.

- 1ère carte réseau : Bridge o Adresse IP : utiliser la dernière adresse du réseau. o 2ème carte réseau : Bridge o Adresse IP : utiliser la première adresse du réseau.

- Configurer le routeur RTR-02.

- 1ère carte réseau : Bridge o Adresse IP : utiliser la dernière adresse du réseau. o 2ème carte réseau : Bridge o Adresse IP : utiliser la première adresse du réseau.

- Vérifiez la connectivité des machines : Finalisation

- L’ensemble des routeurs et des clients doivent pouvoir communiquer entre eux.
- Votre routeur devra contenir le moins possible de routes dans sa table de routage.

Réseau de destination Masque réseau de destination Adresse de tronçon suivant 172.16.200.96 255.255.255.248 4.4.4.6 192.168.0.96 255.255.255.248 8.8.8.10 RTR-02

| Routeur | Réseau de destination | Masque réseau de destination | Adresse de tronçon suivant |
| --- | --- | --- | --- |
| RTR-01 | 0.0.0.0 | 0.0.0.0 | 4.4.4.5 |
| RTR-00 | 172.16.200.96 | 255.255.255.248 | 4.4.4.6 |
| RTR-00 | 192.168.0.96 | 255.255.255.248 | 8.8.8.10 |
| RTR-02 | 0.0.0.0 | 0.0.0.0 | 8.8.8.9 |

- [Activités du module](index.md)
- [Cours](../../../modules/09-services-reseaux-en-environnement-microsoft/module-04-module-04.md)
