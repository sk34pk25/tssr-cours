# Énoncé — Module 04 — La gestion du stockage

## Contexte

Dans ce TP, vous ajoutez des supports de stockage à une VM, créez les volumes demandés avec la console de gestion des disques et avec `diskpart`, puis relevez des informations de volume sur la VM Discovery à l’aide de PowerShell.

**Durée source : 1 heure 30 minutes.**

## Environnement requis

Le scénario demande une VM Windows de laboratoire, VMware Workstation et une VM Discovery. Ajoutez **deux disques durs de 60 Go** chacun à la VM Windows, en choisissant l’option source « Store virtual disk as a single file ».

Les images, disques virtuels, archives et scripts de laboratoire ne sont pas fournis dans le dossier Drive M04 live. N’inventez pas de substitut : utilisez uniquement l’environnement remis par le formateur.

## Étapes avec la console graphique Windows

Sur le premier disque :

1. créer trois partitions principales de **15 Go** chacune, sans lettre de lecteur et sans formatage ;
2. créer une quatrième partition de **7 Go**, sans lettre de lecteur et sans formatage ;
3. formater les deux premières partitions de 15 Go en **NTFS** : nommer la première **DATA** et la seconde **TOOLS** ;
4. attribuer la lettre **D** au volume DATA et la lettre **E** au volume TOOLS ;
5. formater la partition de 7 Go en **FAT32**, la nommer **ARCHIVE** et lui attribuer une lettre de votre choix ;
6. étendre le volume DATA de **15 Go** en utilisant uniquement l’espace libre disponible sur le disque 2.

## Étapes avec `diskpart`

Sur la VM Windows :

1. formater la troisième partition de 15 Go en **NTFS** ;
2. nommer ce volume **COMMUN** et lui attribuer la lettre demandée par votre réalisation ;
3. étendre le volume COMMUN avec l’espace libre restant sur le disque 1 ;
4. supprimer le volume DATA ;
5. recréer DATA avec l’ensemble de l’espace libre des deux disques.

## Livrable

Rédigez une procédure nommée `GestionDuStockage` montrant la configuration des disques par interface graphique et avec `diskpart`. Le PDF propose l’utilisation de PSR, d’un traitement de texte ou d’un autre outil, puis l’enregistrement dans le dossier Procédures.

## Vérifications sur Discovery avec PowerShell

1. afficher le numéro, la taille et le type de table de partitionnement des disques présents ;
2. afficher la lettre, le nom et la taille totale des volumes qui possèdent un `FriendlyName` ;
3. attribuer au volume `C:` le nom **System**.

!!! warning "Opérations de stockage demandées"
    Le scénario demande de formater, étendre, supprimer et recréer des volumes. Vérifiez le disque, le volume, sa taille, son libellé et sa lettre avant chaque opération ; ne réalisez ces manipulations que dans l’environnement de laboratoire prévu.

Une fois le travail terminé : [consulter la correction](corrections.md).
