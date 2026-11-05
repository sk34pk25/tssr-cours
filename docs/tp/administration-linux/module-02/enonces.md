# Énoncés — Module 02 — Installation d’une distribution Debian

**Reprise structurée des consignes et explications de la source.** Les figures utiles restent isolées et les commandes transcrites restent littérales. Les écarts de version et les corrections techniques sont signalés séparément.

## M02TP01 - Enoncé - Installation de Debian AVEC interface graphique

### Installation de Debian 11 AVEC interface graphique

Une solution de virtualisation doit être installée sur votre machine

Durée estimée

30 à 45 minutes

### I. Récupérer l’image source d’installation

Copier localement le fichier debian-11.x.x-adm64-netinst.iso depuis le serveur de l’\[organisme de formation\]. (avec 11.x.x = la version disponible sur le serveur)

### II. Création de la machine virtuelle

Créer une nouvelle machine virtuelle avec les paramètres suivant :

- Interface réseau permettant l'accès au réseau internet (Bridged)  - Disque dur de 40 Go de taille dynamique  - 4096 Mo de mémoire vive  - Démarrer la machine virtuelle en mappant le fichier ISO comme CDROM.

### III. Installation de Debian

1) Choisir les options suivantes :  - Installer Debian en mode graphique  - Choix de la langue : French - Français  - Emplacement géographique : France  - Clavier : France  - Nom de la machine : définir un nom  - Nom de domaine : laboratoire.example  - Utilisateurs :

- Indiquer un mot de passe pour le compte root
- Créer un utilisateur à votre nom

2) Partitionnement des disques :  - Méthode de partitionnement : choisir Manuel  - Sélectionner le disque détecté puis « continuer »  - Configurer le gestionnaire de volume logique LVM  - Créer un groupe de volumes puis les volumes logiques indiqués ci-dessous :   Type Taille Système de fichiers

<table><tr><th>Type</th><th>Taille</th><th>Système de fichiers</th><th>Point de montage</th></tr><tr><td>LVM</td><td>2048 MB</td><td>SWAP</td><td></td></tr><tr><td>LVM</td><td>20 GB</td><td>ext4</td><td>/</td></tr><tr><td>LVM</td><td>5 GB</td><td>FAT32</td><td>/windows</td></tr><tr><td>LVM</td><td>L’espace restant</td><td>ext4</td><td>/home</td></tr></table>

3) Configurer l'outil de gestion des paquets :  - Analyser un autre CD ou DVD : Non  - Pays du miroir de l’archive Debian : France  - Miroir de l’archive Debian : ftp.fr.debian.org - Ne pas utiliser de mandataire (proxy)  - Popularity contest : Non 4) Choisir et installer des logiciels :  - Logiciels à installer : sélectionner

- environnement de bureau Debian
- utilitaires usuels du système

5) Installer le programme de démarrage GRUB :  - Installer le programme : Oui  - Périphérique où sera installé le programme : /dev/sda   Terminer l'installation  Redémarrer

## M02TP02 - Enoncé - Installation de Debian SANS interface graphique

### Installation de Debian 11 SANS interface graphique

Une solution de virtualisation doit être installée sur votre machine

Ce TP et les suivants seront à faire sur la machine mise à votre disposition par l’\[organisme de formation\].

Durée estimée

45mn à 1 heure

### I. Récupérer l’image source d’installation

Copier localement le fichier debian-11.x.x-amd64-dvd.iso depuis le serveur de l’\[organisme de formation\]. (avec 11.x.x = la version disponible sur le serveur)

### II. Création de la machine virtuelle

Créer une nouvelle machine virtuelle avec les paramètres suivant :

- Interface réseau permettant l'accès au réseau de la salle (Bridged)  - Disque dur de 10 Go de taille dynamique  - 2048 Mo de mémoire vive  - Démarrer la machine virtuelle en mappant le fichier ISO comme CDROM.

### III. Installation de Debian

1) Choisir les options suivantes :  - Installer Debian en mode graphique (mode par défaut)  - Choix de la langue : French - Français  - Emplacement géographique : France  - Disposition du clavier : Français  - Nom de la machine : définir un nom  - Nom de domaine : laboratoire.example  - Utilisateurs :

- Indiquer un mot de passe pour le compte root
- Créer un utilisateur

- 2) Partitionner les disques :  - Méthode de partitionnement : Assisté - utiliser tout un disque avec LVM  - Disque à partitionner : sélectionner le disque SCSI  - Schéma de partitionnement : Partitions /home, /var et /tmp séparées    3) Configurer l'outil de gestion des paquets :  - Analyser un autre CD ou DVD : Non  - PAS D’UTILISATION DES MIROIRS  - Popularity contest : Non  4) Choisir et installer des logiciels :  - Logiciels à installer : sélectionner
- serveur SSH
- utilitaires usuels du système
- 5) Installer le programme de démarrage GRUB :  - Installer le programme : Oui  - Périphérique où sera installé le programme : /dev/sda  Terminer l'installation Redémarrer

## Clarifications et contrôles — complément pédagogique

L’interface de l’installeur et le bureau installé sont deux choix distincts. Le profil « Debian 10.x » de certaines captures appartient à l’hyperviseur ; relever aussi la version réellement installée. Contrôler le mode BIOS/UEFI et les points de montage. Les doublons d’énoncés sont conservés dans l’onglet Original, mais les consignes identiques ne sont présentées qu’une fois ci-dessous.

Pour les justifications et références officielles, lire le [cours optimisé](../../../modules/05-administration-debian-gnu-linux/module-02-installation-d-une-distribution-debian.md).

## Compte rendu attendu

- État de départ et cible précise de la manipulation.
- Commandes ou paramètres appliqués, avec les valeurs réellement utilisées.
- Résultats observés et contrôles qui les établissent.
- Différences entre l’environnement actuel et celui des captures.

[Retour au TP](index.md) · [Énoncés](enonces.md) · [Corrigés](corrections.md).
