# Énoncés — Module 04 — Le routage

## Enoncé du TP 1 - Le routeur

### Services réseau en environnement Microsoft Le routeur

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 4.

30 minutes à 1 heure

Prérequis :

Déployer la machine virtuelle CLI-01-TP8-OK.

### Identifiant : AdminFormation - Mot de passe : [valeur fournie par le formateur]

Déployer la machine virtuelle RTR-01-TP8-OK sur VMware Workstation.

### Identifiant : admin - Mot de passe : [valeur fournie par le formateur]

Création des VMs.

Une VM Windows 10 nommée CLI-00 qui fera office de poste client. Une VM routeur pfSense nommée RTR-00.

Connectivité :

Configurer le poste client CLI-00.

- Carte réseau : VMNET10 o Adresse IP : 192.168.0.10/24.

Configurer le routeur RTR-00.

- 1ère carte réseau : Bridge. o Adresse IP : utiliser l’adressage dynamique. o 2ème carte réseau : Bridge. o Utiliser l’adresse IP 172.16.0.1/16

- 3ème carte réseau : VMNET10 o Adresse IP : utiliser la dernière adresse d’hôte du réseau privé défini précédemment.

Vérifier la connectivité des machines :

- Du poste CLI-00 vers le routeur RTR-00. o Du routeur RTR-01 vers le routeur RTR-00. o Du poste CLI-00 vers le poste CLI-01.

Routes

Indiquer ci-dessous les opérations que vous avez réalisées sur votre routeur pfSense :

Documentation

· Vous réaliserez un schéma et reporterez les paramètres IP de chacun de vos postes.

### Preuves attendues

Joindre les passerelles, puis le routeur voisin et l’autre client. Dessiner interfaces, préfixes, prochains sauts et sens de retour.

## Enoncé du TP 2 - Le réseau global

### Le réseau global

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 4 et réalisé le TP précédent.

1 à 2 heures

Prérequis :

- Avoir réalisé le TP précédent du Module 04.

Création des VM.

- Deux VM Windows 10 nommées CLI-00 et CLI-01 qui feront office de postes clients.
- Trois VM routeurs pfSense nommée RTR-00, RTR-01, RTR-02. Connectivité :

- Configurer le poste client CLI-00.

- Carte réseau : BRIDGE o Adresse IP : Utiliser la deuxième IP disponible du réseau. • Configurer le poste client CLI-01.

- Carte réseau : BRIDGE o Adresse IP : Utiliser la deuxième IP disponible du réseau.

- Configurer le routeur RTR-00.

- 1ère carte réseau : Bridge o Adresse IP : utiliser la première adresse du réseau. o 2ème carte réseau : Bridge o Adresse IP : utiliser la première adresse du réseau.

- Configurer le routeur RTR-01.

- 1ère carte réseau : Bridge o Adresse IP : utiliser la dernière adresse du réseau. o 2ème carte réseau : Bridge o Adresse IP : utiliser la première adresse du réseau. o • Configurer le routeur RTR-02.

- 1ère carte réseau : Bridge o Adresse IP : utiliser la dernière adresse du réseau.

- 2ème carte réseau : Bridge o Adresse IP : utiliser la première adresse du réseau.

- Vérifiez la connectivité des machines : Finalisation

- L’ensemble des routeurs et des clients doivent pouvoir communiquer entre eux.
- Votre routeur devra contenir le moins possible de routes dans sa table de routage.

### Preuves attendues

Documenter l’adresse de chaque interface, la passerelle des deux clients et le minimum de routes ajouté. Tester les deux sens.

- [Activités du module](index.md)
- [Cours](../../../modules/09-services-reseaux-en-environnement-microsoft/module-04-module-04.md)
