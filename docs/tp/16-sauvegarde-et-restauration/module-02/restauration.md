# Énoncé · Sauvegarde et restauration Backup Exec

## Sauvegarde et restauration

## Backup Exec

## TP du Module 02 – Types de sauvegarde

Avant de démarrer ce TP, il convient d’avoir suivi les modules 1 et 2 d’avoir réalisé le TP précédent.

Durée estimée

1 heure

## Objectifs

- Restaurer un utilisateur de l’AD
- Créer un partage NTFS pour y stocker les sauvegardes
- Créer une sauvegarde dupliquée
## Énoncé

- Après vérification de la sauvegarde complète srv-ad1 du TP précédent
    - o S'il n’y a pas d’erreur lors de la sauvegarde
    - o Se connecter sur le serveur srv-ad1 ▪ Supprimer l’utilisateur généré au début du TP précédent
    - o Depuis backup Exec effectuer une restauration granulaire en ne restaurant que l’utilisateur supprimé
    - o Une fois restauré faire directement un test de connexion avec cet utilisateur
- Sur srv-fic1 ajouter un hdd de 45go
    - o Sur ce disque créer un dossier partagé nommé “backup-fic1” que vous partagerez
- Sur srv-backup
    - o Ajouter le partage “backup-fic1” au pool de stockage de backup-exec
    - o Modifier le job de sauvegarde du serveur srv-ad1 pour lui ajouter les caractéristiques suivantes : ▪ Après l’exécution d’une sauvegarde complète, le job doit effectuer une duplication de la sauvegarde vers le partage “backup-fic1” ▪ Après l’exécution d’une sauvegarde incrémentale, le doit job doit effectuer une duplication de la sauvegarde vers le partage “backup-fic1”
    - o Avec l’ajout du stockage vous ferez attention aux paramètres de stockage des jobs

o Vous lancerez de nouveau l’exécution d’une sauvegarde complète à la fin de la

## modification du job

[Correction inexistante](corrections-restauration.md)
