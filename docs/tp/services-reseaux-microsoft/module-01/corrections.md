# Corrections expliquées — Module 01 — Administration Windows

## Solution du TP 1 - Installation et configuration initiale

Le masque `/16` correspond au préfixe `172.28.0.0/16`. Conserver les adresses `172.28.10.1`, `.2` et `.11`. `mstsc /?` affiche l’aide. Tester avec l’IP ou le nom de W19-SRV1 et un compte autorisé.

### Installation et configuration initiale

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 1.

1 à 2 heures

Prérequis :

- Copiez le fichier image ISO « Windows Server 2019 Standard » depuis le partage Réseau vers votre lecteur local.

Création des machines virtuelles :

### Nom de la machine virtuelle Caractéristiques supplémentaires

- Windows Server 2019
- 1 disque dur : 32Go
- Mémoire vive : 2Go
- Carte réseau : mode « bridge »

- Windows 10
- 1 disque dur : 32Go

- Mémoire vive : 2Go
- Carte réseau : mode « bridge »

### Les VM seront stockées sous D:\Machines_Virtuelles\Modeles\Nom_de_la_VM

Les systèmes seront hébergés sur la totalité du disque. Au fur et à mesure de l’avancée du

| Nom de la machine virtuelle | Système | Disque dur | Mémoire vive | Carte réseau |
| --- | --- | --- | --- | --- |
| VM_Modele_2019 | Windows Server 2019 | 32 Go | 2 Go | Bridge |
| VM_Modele_W10 | Windows 10 | 32 Go | 2 Go | Bridge |

cours, nous serons amenés à ajouter des disques supplémentaires.

Une fois les systèmes installés :

- Installez les VMware Tools.

- Procédez à un sysprep des OS puis éteignez-les.

- Créez un Folder nommé VM MODELES – A NE PAS DEMARRER dans le volet Library de Workstation puis glissez-déplacez vos VM_Modele dedans.

Ces VM seront utiles pour faire évoluer l’infrastructure au fur et à mesure des modules, mais aussi en cas de perte éventuelle d’un serveur ou d’un client. Ces modèles ne doivent pas être démarrés et devront être conservés durant l’ensemble des modules du cours Service Réseau Microsoft. Création de l’infrastructure :

- Clonez VM_Modele_2019 en W19-CD1 ainsi qu’en W19-SRV1.
- Clonez VM_Modele_W10 en W10-CLI1.
- Les dossiers d’accueil de ces VM seront situés dans D:\Machines_Virtuelles\Nom_De_La_VM

Configuration réseau :

- Les machines auront un adressage IPv4 statique.
- Le réseau sera 172.28.10.0/16.
- Les systèmes d’exploitation porteront le même nom que les VM.

### Nom : W19-CD1 Adresse IP : 172.28.10.1

### Nom : W19-SRV1 Adresse IP : 172.28.10.2 Nom : W10-CLI1 Adresse IP : 172.28.10.11

### Réseau salle 172.28.10.0/16

Rôle et fonctionnalités :

- Installez sur le serveur le service Web IIS et l’outil de Sauvegarde Windows Server.

- Pour tester le bon fonctionnement du service IIS, vérifiez l’accès à l’URL http://localhost depuis le navigateur web du serveur (une image IIS doit s’afficher).

- Autorisez l’utilisation du bureau à distance pour l’administration à distance du serveur et du client.

Testez l’administration du serveur depuis W10-CLI1 :

- Avec l’outil graphique Connexion Bureau à distance

- Avec l’outil en ligne de commande mstsc (si besoin, afficher l’aide avec la commande mstsc / ?)

## Solution du TP 2 - Gestion du stockage

Données et INFO-TOOLS doivent rester accessibles si un seul disque de chaque ensemble redondant est perdu. Database en bandes peut devenir indisponible. Remplacer le disque, reconstruire la redondance et ouvrir les fichiers témoins. Les captures p7 montrent l’ajout du miroir sur le disque 3.

### Gestion du stockage

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 1 et réalisé le TP précédent.

30 minutes à 1 heure

Prérequis :

- Disposer des machines virtuelles installées dans le TP précédent.

- Modifier la lettre du lecteur CD en L:\.

Ajout de disques au serveur :

Ajouter trois disques SCSI de 10 Go chacun au serveur W19-SRV1.

Besoins de stockage :

- Modifier la lettre du lecteur CD en L:\.

En vue de stocker les documents de travail des utilisateurs, créez un volume en RAID-5 pouvant héberger environ 6 Go de données appelé « Données » et accessible depuis le lecteur D:\

Les membres du service informatique doivent pouvoir accéder à tout moment aux outils d’administration du système. Créez un volume miroir de 4 Go monté dans C:\INFO-TOOLS et reposant sur les disques 1 et 3.

Une base de données SQL Server d’une taille maximale de 8 Go sera hébergée sur le serveur. Créez un volume optimisé pour les performances en lecture/écriture, nommé Database et accessible via le lecteur E:\.

Ces partitions n’hébergeront pas de système d’exploitation.

Configuration du stockage sur le serveur :

- Créez les volumes correspondant aux besoins depuis la console de Gestion des disques.
- Stockez des fichiers quelconques sur l’ensemble de vos lecteurs. Simulation de panne : Depuis les paramètres VMware Workstation, supprimez le disque SCSI n°3 puis observez les changements dans la console de Gestion des disques.

```text
1. Pouvez-vous accéder aux données stockées sur Données ?  Oui   □ Non
```

Le comportement peut différer en fonction du disque retiré.

Sur un RAID-5 il est possible de retirer un disque sans incidence sur l’accès aux données.

```text
2. Pouvez-vous accéder aux données stockées dans C:\INFO-TOOLS ?  Oui   □ Non
```

Pourquoi ? Le comportement peut différer en fonction du disque retiré. Sur un RAID-1 il est possible de retirer un disque sans incidence sur l’accès aux données. Réparation des volumes défectueux :

- Ajoutez un disque supplémentaire via la console VMware Workstation puis réparez les volumes défectueux depuis la console Gestion des disques.
- Retirez un disque pour simuler une panne.
- Ajoutez un disque via la console VMware Workstation puis réparez les volumes défectueux depuis la console Gestion des disques.

### Étapes illustrées dans le support

1. Dans Gestion des disques, sélectionner le volume INFO-TOOLS et choisir Ajouter un disque miroir.
2. Dans la fenêtre Ajouter un disque miroir, choisir le disque 3 pour la copie miroir, puis valider.

- [Activités du module](index.md)
- [Cours](../../../modules/09-services-reseaux-en-environnement-microsoft/module-01-module-01.md)
