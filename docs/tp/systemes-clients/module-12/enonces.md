# Énoncés — Module 12 — Introduction à la capture et au déploiement d’image

!!! danger "Avant une manipulation destructive"
    Vérifier la cible, créer une sauvegarde ou un instantané et préparer le retour arrière. Les adresses et noms de machines du support appartiennent au laboratoire de formation.

## Énoncé Module-Module 12-Atelier 15-Capture&Deploy

### 1/2 ©ENI Ecole Informatique

#### ENI École Informatique

#### Travaux pratiques 15

#### Cursus : TSSR Cours : Windows Client

#### Sujet TP - Introduction à la capture et au

#### déploiement

#### Version : 2021-01

#### Objectifs :

- Connaitre les principes de capture et de déploiement d'image Windows

#### Prérequis :

- Avoir terminé l'atelier 13 - Maintenance

#### Principales tâches à réaliser :

#### Préparation du poste de référence Win10-XX

Activez le compte utilisateur Administrateur et fixez-lui un mot de passe. Fermez votre session actuelle et ouvrez une session avec le compte Administrateur. Assurez-vous d'avoir un snapshot récent disponible avant de faire les prochaines manipulations. Dans le doute, faites-en un.  ................................................................................................................................... Supprimez les utilisateurs que vous avez créés lors de l'atelier 08 qui traitait des utilisateurs et des groupes. Supprimez l'utilisateur que vous avez créé lors de l'installation de cette VM. Supprimez aussi leurs profils.  ................................................................................................................................... Procédez à un sysprep généralisé en mode OOBE suivi d'une extinction de votre machine

#### Win10-XX

 ...................................................................................................................................

### 2/2 ©ENI Ecole Informatique

#### Création d'un clone de la machine de référence

#### Créez un dossier Win10-XX-Clone dans votre dossier VMs-WorkStation

#### Utilisez la fonctionnalité de clonage de WorkStation

  - Créez un "Full Clone" de Win10-XX depuis son état actuel
  - Cette nouvelle VM sera hébergée dans le dossier Win10 -XX-Clone créé

#### précédemment

 ...................................................................................................................................

#### Configuration / observation du clone

#### Allumez la VM Win10-XX et appliquez le dernier snapshot

Allumez la VM Win 10-XX-Clone dès qu'elle est disponible et procédez à sa configuration

#### initiale

#### Remplissez le tableau ci-dessous

#### Win10-XX Win10-XX-Clone

#### Vmware Tools pre sents ?

#### Nom de la machine configure

#### dans l'OS

#### Nb de volumes

#### Nb de users dans la base SAM

#### Adresse IP

#### Date et heure du premier log

#### dans le journal syste me

#### Nb de points de restaurations

#### Compte administrateur active ?

#### Pilote de l'imprimante HP

#### LaserJet pre sent ?

#### Re gle entrante ICMP

Une fois le travail terminé : [consulter les corrections](corrections.md).
