# Énoncé — TP du module 5 — WDS

Services transverses en environnement Microsoft (RDS/WDS)

Mise en œuvre de WDS

TP du Module 5 – Windows Deployment Services (WDS)

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos des modules 4 et 5 et d’avoir

réalisé les TP du module 1.

Il est nécessaire d’avoir accès à l’ISO d’installation de Windows 10 accessible sur le

partage réseau Distrib.

Durée estimée

2h00

Objectifs

- Implémenter le service WDS et le configurer pour permettre le déploiement d’images.
Consignes

Etape 1 : Ajout du rôle WDS et d’un espace disque pour répondre aux besoins du service

- Ajouter le rôle des services de déploiement Windows sur le serveur DEPLOY.
- Ajouter un disque dur de 100 Go à ce serveur, le partitionner, le formater et lui associer
la lettre de lecteur D.

- Créer un dossier nommé WDS à la racine du lecteur D.
Etape 2 : Configuration initiale des services de déploiement

- Procéder à la configuration initiale du service.
- Le dossier de travail du service sera D:\WDS.
- Votre serveur devra répondre à tous les clients.
- Monter l’image d’installation de Windows10 dans le lecteur CD de la machine.
Etape 3 : Ajout d’images aux services de déploiement

- Ajouter au service WDS une image de démarrage basée sur le fichier boot.wim de
Windows10.

- Ajouter une image d’installation basée sur le fichier install.wim de Windows10 pour
déployer le système d’exploitation « Windows 10 Pro ».

Etape 4 : Déploiement d’un client

- Faire un test de déploiement depuis la machine virtuelle CLINVX et s’assurer que le
Services transverses en environnement Microsoft (RDS/WDS)

déploiement est bien fonctionnel.

Etape 5 : Snapshot de l’infrastructure

- Réaliser un Snapshot nommé « Atelier 4 OK » des machines virtuelles.
Solution

Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les

ressources à télécharger.

Vidéos du module citées comme prérequis : **Inexistant**.

Bases de machines, ISO, installeurs ADK, MDT, applications et pilotes du partage distrib : **Inexistant** dans ce dossier.
