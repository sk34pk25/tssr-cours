# Énoncé · Installation et configuration de Backup Exec

## Installation et configuration

## Backup Exec

## TP du Module 02 – Types de sauvegarde

Avant de démarrer ce TP, il convient d’avoir suivi les modules 1 et 2 et d’avoir réalisé le TP précédent.

Durée estimée

3 heures

## Objectifs

- Installer la solution de sauvegarde Veritas Backup Exec
- Créer un partage iSCSI pour y stocker les sauvegardes
- Créer une sauvegarde d’un contrôleur de domaine et d’un serveur de fichiers
## Énoncé

Partie 1 :

## Sur srv-ad1

- Créer un utilisateur dans l’AD
    - o Vérifier que celui-ci est opérationnel (ouverture de session)
## Sur srv-backup

- Lancer l’installation de backup exec (setup fournis par le formateur).
    - o Prendre en compte les paramètres suivants pour l’installation :
## Langue                          Français

## Installation produit            Backup exec

## Type d’installation             Personnalisée

Menu Installation locale – le logiciel et des fonctions backup exec Vérification environnement Faire suivant même si des warnings sont présents Ajout de licence Faire suivant – valider infobulle Configurer les options • Valeur par défaut

- Advanced Disk-based backup feature

- Fonction NDMP
## Compte de service               Admin du domaine

Sql server Créer une instance locale de SQL Express

## Le temps de l’installation sur srv-backup

- Connecter le partage iSCSI du NAS depuis le serveur srv-backup :
    - o Ouvrir l’application « initiateur iSCSI » depuis srv-backup.
    - o Allez sur l’onglet « découverte » ➔ « découvrir un portail… » ➔ ajouter l’adresse IP du serveur NAS (192.168.30.1) et laisser le port 3260 par défaut.
    - o Allez ensuite sur l’onglet « cible » puis sur « connexion », laissez les paramètres par défaut et valider.
    - o Une fois sur le statut « connecté » fermer l’application « initiateur iSCSI ».
    - o Ouvrir le gestionnaire de disque de srv-backup et formater le nouveau disque de 80 Go.
- Ouvrir l’application Backup exec.
    - o Allez sur l’onglet « stockage » / « configurer le stockage » :
Type de stockage Stockage basé sur disque Type de stockage sur disque Stockage sur disque Nom et description Nom : backup Description : backup sur nas Emplacement périphérique sur disque Sélectionnez le disque partagé iSCSI

## Écriture simultanée                             4

    - o Allez sur l’onglet « Sauvegarde et restauration » / « serveurs et hôtes virtuelles » / « Ajouter » / « Ajouter un serveur » :
## Ajout de serveur                              Srv-ad1

Type de serveur Ordinateur et serveur Microsoft Windows

## Mise à niveau de Backup exec Agent            Oui

    - o Créer un job de sauvegarde pour le serveur srv-ad1 :
Type de sauvegarde Stockage basé sur disque Méthode de sauvegarde Sauvegarde basée sur agent Nom et description Nom : srv-ad1 job Description : Type de sauvegarde Complète puis incrémentale Modification Pour la sauvegarde complète “effectuer une sauvegarde complète initiale en plus de la planification sélectionnée” Création du job Valider la création du job et vérifier que la tâche de sauvegarde complète démarre juste après la création

- o Allez sur l’onglet « Sauvegarde et restauration » / « serveurs et hôtes virtuelles » / « Ajouter » / « Ajouter un serveur » :
## Ajout de serveur                              Srv-fic1

Type de serveur Ordinateur et serveur Microsoft Windows

## Mise à niveau de Backup exec Agent            Oui

Info : si pendant l’installation de l’agent vous obtenez l’erreur « Erreur finale : 0xe00086ce », suivre cette procédure : - Copier le dossier « C:\Program Files\Veritas\Backup Exec\Agents » depuis « srv-backup » - Coller le dossier à la racine du lecteur C: sur le serveur cible (utiliser le partage administratif c$) - Sur le serveur cible exécuter « C:\Agents\RAWSX64\setup.exe » - Une fois l’installation effectuer sur le serveur cible refaire l’ajout d’un nouveau serveur depuis SRV-Backup

    - o Créer un job de sauvegarde pour le serveur srv-fic1 :
Type de sauvegarde Stockage basé sur disque Méthode de sauvegarde Sauvegarde basée sur agent Nom et description Nom : srv-fic1 job Description : Type de sauvegarde Complète Modification Pour la sauvegarde complète “effectuer une sauvegarde complète initiale en plus de la planification sélectionnée” Création du job Valider la création du job et vérifier que la tâche de sauvegarde complète démarre juste après la création

[Correction inexistante](corrections-installation.md)
