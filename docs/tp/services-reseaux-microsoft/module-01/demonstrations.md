# Démonstrations — Module 01 — Administration Windows

## Fiche démo 1 - Installation du système

### Installation du système Windows Server

### Démonstration 01 du module 01

Cette démonstration décrit les différentes étapes relatives à l’installation du système Microsoft Server, en mode graphique.

### Déroulement

- Prérequis

- Disposer d’une ISO Windows Server (ici en_windows_server_2019_x64).

- Disposer d’un logiciel de virtualisation (ici VMware Workstation 15.5.2 Pro)

- Créer votre machine virtuelle Windows Server

- Démarrer votre VM

Il faut démarrer la nouvelle machine virtuelle en sélectionnant votre machine virtuelle puis en cliquant sur la flèche verte.

- Booter sur le CD afin de lancer le processus d’installation du système d’exploitation

Il faut appuyer sur n’importe quelle touche du clavier afin de démarrer le processus d’installation de votre système d’exploitation (ici la touche « espace » sera utilisée).

- Choisir sa région puis continuer le processus.

Il convient ici de choisir la région afin de continuer le processus.

Ici :

- La langue d’installation sera l’Anglais

- Le fuseau horaire sera celui de Paris

- Les préférences du clavier seront Françaises

- Lancement de l’installation du système d’exploitation

Ici, cliquer sur le bouton Install now (1) afin de passer à l’étape suivante.

- Passer outre l’activation du système

Ici, cliquer sur le texte I don’t have a product key (1) pour passer à l’étape suivante.

- Choisir la version du système d’exploitation que vous souhaitez installer.

C’est ici que s’opère le choix de la version du système d’exploitation. Ici, nous choisirons Windows Server 2019 Standard (Desktop Experince)(1) puis cliquer sur le bouton « Next » (2) pour passer à l’étape suivante.

Attention : Ssi Windows Server 2019 est sélectionné, seule la version Core sera installée (sans interface graphique).

- Validation du contrat de licence Microsoft

Pour passer à l’étape suivante, il faut accepter le contrat de licence de Microsoft en cochant la case (1) puis en cliquant sur le bouton Next (2) pour passer à la suite.

- Choix du type d’installation

Choisir Custom: Install Windows only (advanced) (1) afin de passer à la suite.

- Localisation de l’installation du système d’exploitation

Par défaut, nous n’avons qu’un seul disque dans notre VM (1). Cliquer sur le bouton Next (2).

- Démarrage de l’installation

### L’installation a démarré

- Modification du mot de passe Administration

Une fois l’installation terminée, la VM redémarrera automatiquement. Sur cet écran, il faudra customiser le mot de passe administrateur (1) puis cliquer sur le bouton Finish afin de finaliser le processus de configuration.

- Finalisation de l’installation

À la suite de la modification du mot de passe Administrateur, la page de connexion au serveur

apparaît.

- Test de connexion au serveur

Sur la mire de connexion appuyer sur les touches de votre clavier « Ctrl » « Alt » » Inser » simultanément afin de pouvoir renseigner le login et mot de passe (1) puis appuyer sur la touche « Entrée » du clavier pour accéder au bureau du serveur.

- Installation des VMware Tools

Pour finaliser l’installation et faciliter un certain nombre d’actions (presse-papier par exemple)

l’installation des VMware Tools est nécessaire.

Faites un clic droit sur l’onglet portant le nom de la VM (1) puis cliquer sur Install VMware Tools… (2)

- Lancement de l’installation de VMware Tools

Ouvrir l’explorateur de document (1) puis double cliquer sur le DVD Drive (D :) VMware Tools (2)

- Installation de VMware Tools

Cliquer sur le bouton Suivant (1) pour démarrer l’installation. Cliquer sur le bouton Suivant (2) afin de

### continuer l’installation. Cliquer sur le bouton Suivant pour engager l’installation (3)

Cliquer sur le bouton Terminer (4) pour finaliser l’installation.

- Redémarrage VM suite installation VMware Tools

Cliquer sur le bouton Oui (1) afin de redémarrer la VM et la prise en compte des paramètres des VMware Tools nouvellement installés.

## Fiche démo 2 - Ajout de rôles et de fonctionnalités via le gestionnaire de serveur

### Ajout de rôles et de fonctionnalités via le gestionnaire de serveur

### Démonstration 02 du module 01

Cette démonstration décrit les différentes étapes relatives à l’ajout de rôle et de fonctionnalités via le gestionnaire de serveur sous Microsoft Server.

### Déroulement

- Prérequis

- Avoir suivi la démonstration 1 du module 1.

- Avoir installé et configuré une VM Windows Server.

- Démarrer la machine virtuelle

Sélectionner la VM utilisée lors de la précédente démonstration (1) (ici W2019), puis cliquer sur le bouton démarrer (2).

- Se connecter à la VM

Utiliser le compte Administrateur ainsi que le mot de passe associé (1).

- Accès à la console d’installation.

Lors de l’accès à la session du serveur, le Gestionnaire de Serveur ou «Serveur Manager se lance automatiquement.

Pour lancer la console permettant l’ajout d’un rôle, cliquer sur Manage ou Gérer (1) puis sur Add Roles and Features ou Ajout de Rôles et Fonctionnalités (2).

- Choix du rôle à installer.

Cliquer sur le bouton Next (1), puis encore une fois sur le bouton Next (2). Sur l’écran Select destination server, cliquer sur le bouton Next (3). Sur l’écran Select server roles, cocher la case Windows Déployment Services (4). Sur la fenêtre contextuelle qui vient d’apparaître, cliquer sur le bouton Add Features (5), puis sur le bouton Next (6).

- Choix de la fonctionnalité à installer.

Cocher la case Windows Server Backup (1) puis cliquer sur le bouton Next (2). Sur l’écran Web Server Role (IIS), cliquer sur le bouton Next (3). Sur l’écran Select role services, cliquer sur le bouton Next (4). Sur l’écran WDS, cliquer sur le bouton Next (5). Sur l’écran Select role services, cliquer sur le bouton Next (6).

- Confirmation de l’installation

Cocher la case Restart the destination serveur automatically if required (1) puis cliquer sur le bouton Yes (2) de la fenêtre contextuelle. Enfin, cliquer sur le bouton Install (3). Enfin, quand le processus d’installation est terminé, cliquer sur le bouton Close (4).

### Étapes illustrées dans le support

1. Dans Confirm installation selections, cocher Restart the destination server automatically if required.
2. Confirmer le redémarrage automatique avec Yes.
3. Contrôler la liste des composants sélectionnés, puis choisir Install.
4. Attendre la fin de l’installation, vérifier le message Installation succeeded puis choisir Close.

## Fiche démo 3 - Le formatage sous Windows Server

### Le formatage sous Windows Server

### Démonstration 03 du module 01

Cette démonstration décrit les différentes étapes relatives au formatage avec les outils Windows

### Déroulement

- Prérequis

- Avoir suivi la démonstration 2 du module 1.

- Avoir installé et configuré une VM Windows Server.

- Éditer la VM afin de pouvoir lui ajouter des disques.

Sélectionner la VM utilisée lors de la précédente démonstration (1) (ici W2019), puis cliquer sur Edit virtual machine settings (2).

- Ajout des disques depuis les Settings de la VM (à répéter 3 fois).

Cliquer sur le bouton Add (1). Vérifier que la ligne Hard Disk est correctement sélectionnée, puis cliquer sur le bouton Next (3). Vérifier que le bouton radio SCSI est coché, puis cliquer sur le bouton Next (4). Vérifier que le bouton radio Create a new virtual disk est coché, puis cliquer sur le bouton Next (5). Dans l’input box Maximum disk size (GB) : (6), choisir la taille du disque souhaité (ici 20GB). Ici, nous sélectionnons Split virtual disk into multiple files, puis cliquer sur le bouton Next (7). Enfin, cliquer sur le bouton Finish (8) pour finaliser l’ajout du disque sur votre VM.

- Vérification de l’ajout des 3 disques sur la VM.

À la fin du processus de rajout des disques sur la VM. Il doit apparaître 4 lignes Hard Disk dans les propriétés Devices de la VM. Sélectionner la VM modifiée puis vérifier que les 3 nouveaux disques sont bien présents (1).

- Démarrer la machine virtuelle

Sélectionner la VM utilisée lors de la précédente démonstration (1) (ici W2019), puis cliquer sur le bouton démarrer (2).

- Se connecter à la VM

Utiliser le compte Administrateur ainsi que le mot de passe associé (1).

- Accès à la console de gestion des disques.

Lors de l’accès à la session du serveur, le Gestionnaire de Serveur ou Serveur Manager se lance automatiquement.

Pour lancer la console permettant la gestion des disques, cliquer sur Tools (1), puis sur Computer Management (2).

### Management des disques

Sur la console Computer Manager, cliquer sur Disk management (1) situé dans le menu Storage.

- Mise en ligne des disques (à répéter sur les 3 nouveaux disques).

La première étape pour pouvoir utiliser les disques nouvellement installés sur la VM est la mise en ligne de ces derniers.

Pour ce faire, sélectionner le premier disque Disk 1 (1), puis faire un clic droit sur ce dernier afin de pouvoir cliquer sur la ligne Online (2).

- Initialisations des disques

La deuxième étape pour pouvoir utiliser les disques nouvellement installés sur la VM est l’initialisation de ces éléments.

Pour ce faire, sélectionner le premier disque Disk 1 (1), puis faire un clic droit sur ce dernier afin de pouvoir cliquer sur la ligne Initialize Disk (2).

Vérifier que les 3 disques soient bien sélectionnés (3) ainsi que le bouton radio GPT (4). Enfin, cliquer sur le bouton OK (5).

- Création d’un volume fractionné

Sélectionner le Disk 1 (1), puis faire un clic droit afin de pouvoir cliquer sur la ligne New Spanned Volume (2).

Cliquer sur le bouton Next (3).

Dans la colonne Available (4), sélectionner le Disk 2 (5), puis cliquer sur le bouton Add (6).

Dans l’input box Select the amount of space in MB, nous indiquerons « 5000 » pour les deux disques (7), puis cliquer sur le bouton Next (8).

Sélectionner la lettre de lecteur F : (9), puis cliquer sur le bouton Next (10).

Dans l’input box Volume label, indiquer « Volume Fractionné » (11), puis cliquer sur le bouton Next (12).

Enfin, cliquer sur le bouton Finish (13), puis sur le bouton Yes (14) pour finaliser la configuration du nouveau Volume.

- Vérification du volume fractionné

Une fois la configuration terminée, votre volume doit apparaître à l’écran.

- Création d’un RAID-0

Sélectionner le Disk 1 (1), puis faire un clic droit afin de pouvoir cliquer sur la ligne New Striped Volume (2).

Cliquer sur le bouton Next (3).

Dans la colonne Available (4), sélectionner le Disk 2 (5), puis cliquer sur le bouton Add (6).

Dans l’input box Select the amount of space in MB, nous indiquerons « 5000 » (7), puis cliquer sur le bouton Next (8).

Sélectionner la lettre de lecteur G : (9), puis cliquer sur le bouton Next (10).

Dans l’input box Volume label, indiquer « RAID0 » (11), puis cliquer sur le bouton Next (12).

Enfin, cliquer sur le bouton Finish (13) pour finaliser la configuration du nouveau Volume.

- Vérification du RAID0

Une fois la configuration terminée, votre volume doit apparaître à l’écran.

- Création d’un RAID-1

Sélectionner le Disk 1 (1), puis faire un clic droit afin de pouvoir cliquer sur la ligne New Striped Volume (2).

Cliquer sur le bouton Next (3).

Dans la colonne Available (4), sélectionner le Disk 2 (5), puis cliquer sur le bouton Add (6).

Dans l’input box Select the amount of space in MB, nous indiquerons « 2000 » (7), puis cliquer sur le bouton Next (8).

Sélectionner la lettre de lecteur H : (9), puis cliquer sur le bouton Next (10).

Dans l’input box Volume label, indiquer « RAID1 » (11), puis cliquer sur le bouton Next (12).

Enfin, cliquer sur le bouton Finish (13) pour finaliser la configuration du nouveau Volume.

- Vérification du RAID1

Une fois la configuration terminée, votre volume doit apparaître à l’écran.

- Création d’un RAID-5

Sélectionner le Disk 1 (1), puis faire un clic droit afin de pouvoir cliquer sur la ligne New RAID-5 Volume (2).

Cliquer sur le bouton Next (3).

Dans la colonne Available (4), sélectionner le Disk 2 et 3 (5), puis cliquer sur le bouton Add (6).

Dans l’input box Select the amount of space in MB, nous indiquerons « 8462 » (7), puis cliquer sur le bouton Next (8).

Sélectionner la lettre de lecteur E : (9), puis cliquer sur le bouton Next (10).

Dans l’input box Volume label, indiquer RAID5 (11), puis cliquer sur le bouton Next (12).

Enfin, cliquer sur le bouton Finish (13), puis sur le bouton Yes (14) pour finaliser la configuration du nouveau Volume.

- Vérification du RAID5

Une fois la configuration terminée, votre volume doit apparaître à l’écran.

- [Activités du module](index.md)
- [Cours](../../../modules/09-services-reseaux-en-environnement-microsoft/module-01-module-01.md)
