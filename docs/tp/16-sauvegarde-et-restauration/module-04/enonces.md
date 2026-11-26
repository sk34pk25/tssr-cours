# Énoncé · Utilisation du RAID

## Utilisation du raid

## TP du Module 04 – La redondance de données - RAID

Avant de démarrer ce TP, il convient d’avoir suivi les modules 1, 2, 3 et 4 et d’avoir réalisé le TP précédent.

Durée estimée

1 heure

## Objectif

- Configurer et manipuler une solution RAID.
## Énoncé

Pour des questions de ressources supprimer les serveurs existants et installer un nouveau

serveur SRV-FIC2

Système d’exploitation Windows 2019 serveur

## Disque dur                       40 Go

RAM 2048

Sur SRV-FIC2 mirroring :

- Ajouter 2 disques durs
    - o 1 disque Capacité : 5 Go
    - o 1 disque Capacité : 10 Go
- Depuis le gestionnaire de disque
    - o Initialiser les 2 disques avec une partition GPT (GUI Partition Table)
    - o Mettre en place un volume miroir
    - o Quelle est la taille de la nouvelle partition ?
    - o Générer un volume simple avec l’espace restant
    - o Peupler de fichiers et de dossiers les deux partitions
- Supprimer à chaud le disque de 5 Go
    - o Relever l’état des disques depuis le gestionnaire de disques
    - o Supprimer le disque miroir manquant
    - o Les données sont-elles toujours accessibles depuis l’explorateur ?

- o A vous de remplacer le disque manquant et de reconstruire le mirroring
Sur SRV-FIC2 RAID5 :

Sur le même principe que pour le mirroring, ajouter 5 disques durs

    - o Capacité : 5 Gb
- Mettre en place un RAID5
- Quelle est la taille de la nouvelle partition ?
    - o Peupler de fichiers et de dossiers la partition
- Supprimer à chaud un disque de 5 Gb
    - o Relever l’état des disques depuis le Gestionnaire de disques
    - o Supprimer le disque manquant
    - o Les données sont-elles toujours accessibles depuis l’explorateur ?
    - o A vous de remplacer le disque manquant et de reconstruire le RAID 5
Bonus : Sur SRV-FIC2 via le gestionnaire serveur et non plus le gestionnaire de disque,

refaire les deux étapes précédentes

- Depuis le Gestionnaire de disque
    - o Initialiser les disques
- Depuis le Gestionnaire de serveur => service de fichiers et de stockage
    - o Aller sur « pools de stockage »
    - o Sur le bloc « disques physiques », dans « tâche », sélectionner « nouveau disque virtuel »
    - o Ajouter les disques au pool de stockage
Vos disques sont-ils toujours présents dans le Gestionnaire de disque ?

A vous de mettre en place le RAID via le gestionnaire serveur

[Correction inexistante](corrections.md)
