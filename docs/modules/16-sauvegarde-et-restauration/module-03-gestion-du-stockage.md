# Module 03 — Gestion du stockage

Support « Gestion du stockage », neuf pages, et énoncé Veeam. Durée indiquée du TP : 1 heure.

La transcription du support et l’aide pédagogique sont séparées pour rendre leur provenance explicite.

=== "Cours Original"

    GESTION DU STOCKAGE

    Module 03 Gestion du stockage

    SOMMAIRE Critères à respecter

    Solution DAS

    Solution NAS

    Solution SAN

    Exécution des sauvegardes

    ## INFRASTRUCTURE

    Pour mettre en place une sauvegarde, une infrastructure logicielle

    ## DE SAUVEGARDE

    et matérielle est nécessaire.

    La partie matérielle

    - Les supports de sauvegarde.
    - Les lecteurs et la robotique de sauvegarde.
    La partie logicielle

    - Le logiciel de sauvegarde.
    - Le logiciel chargé de lancer les sauvegardes, appelé ordonnanceur.

    ## LES SUPPORTS

    Il y a plusieurs critères à prendre en compte pour choisir

    ## DE SAUVEGARDE

    le ou les supports de sauvegarde les mieux adaptés au périmètre de la sauvegarde données :

    - La capacité de stockage.
    - La fiabilité du support.
    - Le temps d'accès en lecture / écriture.
    - La consommation électrique.
    - La sécurité.

    ## LES SUPPORTS

    Support Atouts Limites

    ## DE SAUVEGARDE

    CD / DVD • Peu encombrant

    - Peu coûteux BLU-RAY                                            •   Durée de vie faible
    - Simplicité d'utilisation Disque dur HDD                                          •   Sensibilité aux chocs
    - Peu coûteux
    - Simplicité d'utilisation Disque dur SSD        •   Prix en baisse                •   Plus coûteux qu’un HDD
    - Resistance au choc
    - Résistance au choc Clé USB                                            •   Capacité de stockage limitée
    - Coût faible
    Carte mémoire • Résistance aux chocs • Capacité de stockage faible

    ## LES SUPPORTS

    Support Atouts Limites

    ## DE SAUVEGARDE

    Bandes magnétiques

    - Durée de vie élevé
    - Large gamme de choix
    Technologie RDX • Simplicité d'utilisation

    - Simplicité de mise en œuvre NAS                                               • Encombrement du réseau
    - Redondance via le RAID
    - Sécurisation des données          • Problèmes d'interopérabilité SAN
    - Simplicité d'administration       • Complexité de mise en œuvre
    - Fichiers accessibles à tout Cloud                 moment
    - Données protégées

    ## DAS

    SOLUTION DAS : Direct Attached Storage

    - Les solutions de stockage de type DAS consistent à connecter directement un périphérique au serveur ou à la station de travail.
    - Il s'agit principalement d'un lecteur de bandes magnétiques mais d'autres solutions peuvent être envisagées, comme le support optique ou les disques.
    Système de Application fichier

    LES SUPPORTS

    ## DE SAUVEGARDE

    La bande magnétique

    - Support utilisé depuis 1950 pour le stockage d’informations numériques.
    - Deux types de bandes : hélicoïdale et linéaire.
    Avantages

    - Capacité de stockage importante.
    - Automatisation avec les robots de sauvegarde qui acceptent plusieurs bandes magnétiques dont le chargement est automatisé.

    LES SUPPORTS

    ## DE SAUVEGARDE

    Sauvegarde sur bande magnétique

    - DDS - DAT : DDS (Digital Data Storage) est le nom officiel de la DAT (Digital Audio Tape).
    - DLT – SDLT : Digital Linear Tape (DLT, anciennement nommée CompacTape).
    - LTO : Linear Tape-Open (ou LTO) est une technique de stockage sur bande magnétique au format ouvert.

    LES SUPPORTS DE SAUVEGARDE

    Capacité bande magnétique LES SUPPORTS DE SAUVEGARDE natif​ compressé​ natif​ compressé​ DAT DDS3​ 12​ Go 24​ Go LTO 12​ 192 To 480 To​ DAT DDS4​ 20​ Go 40​ Go LTO 11​ 96 To​ 240 To​ DAT 72​ 36​ Go 72​ Go LTO 10​ 48 To​ 120 To​ DAT 160​ 80​ Go 160​ Go LTO 9​ 18 To​ 45 To​ DLT-Tape VS1​ 80​ Go 160​ Go LTO 8​ 12 To​ 30 To​ SDLT 1​ 160​ Go 320​ Go LTO 7​ 6 To 15 To​ SDLT 2​ 300​ Go 600​ Go LTO 6​ 2,5 To​ 6,25 To​ SDLT 3 / DLT-S4​ 800​ Go 1600 Go LTO 5​ 1,5 To​ 3 To​

    ## SAN

    SOLUTION SAN : Storage Area Network

    - Réseau dédié de dispositifs de stockage, permet aux serveurs d'accéder à des espaces de stockage centralisés, comme s'ils étaient des disques durs locaux.
    - Dans un SAN, c’est le serveur qui gère le système de fichier sur les espaces de stockage auxquels il a accès.
    Application SAN de

    ## NAS

    SOLUTION NAS : Network Attached Storage

    - Appareil de stockage connecté à un réseau qui permet aux utilisateurs de sauvegarder et partager des fichiers au sein d'un réseau local.
    - Un périphérique NAS possède son propre système de fichier, généralement du CIFS (Common Internet File System) pour le monde Windows ou du NFS (Network File System) OU SAMBA pour le monde Unix/Linux.
    Système Application de LAN fichier

    ## LES SUPPORTS

    SAN NAS

    ## DE SAUVEGARDE

    Signification Storage Area Network Network Attached Storage Protocoles SCSI, Fibre Channel ou SATA. Serveur de fichiers, NFS ou CIFS. Partage de Le partage de fichier repose l’information sur le système d’exploitation. Identification Identifie les données par Adresse les données par le nom des données bloc de disque. de fichier et l’offset de l’octet. Périphériques de classe Périphérique connecté au réseau Eligibilité au serveurs dotés du canal local, doté des protocoles NFS, dispositif Fibre Channel SCSI. CIFS/SMB, HTTP ou HTTPS. Coût et Cher et plus complexe. Rentable et moins compliqué. complexité

    ## EXÉCUTION DES

    Sauvegarde locale

    ## SAUVEGARDES

    Directement réalisée sur le site d'exploitation, sur un support local, les données ne sortent pas du réseau interne de l'entreprise.

    - Serveur de stockage disponible sur le réseau.                 RAPPEL
    - Disque dur.                                                 REGLE 3–2–1
    - Bande magnétique (externalisation du support physique). Sauvegarde distante ou externalisée Réalisée en dehors du site d'exploitation, vers un site distant ou sur Internet via une connexion sécurisée, les données sortent du réseau interne de l'entreprise.

    Création de job DÉMONSTRATION

    Gestion du stockage

    Restauration du Job DÉMONSTRATION

    TRAVAUX GESTION DUPRATIQUES

    TRAVAUX TRAVAUX PRATIQUES VEEAM Sauvegarde et PRATIQUES

    ## N°4

    restauration de VM


    ![schema-stockage.png](../../assets/images/sauvegarde/module-03/schema-stockage.png)

    ![cartouche.png](../../assets/images/sauvegarde/module-03/cartouche.png)

    ## Sauvegarde et restauration

    ## VEEAM

    ## TP du Module 03 – Gestion du stockage

    Avant de démarrer ce TP, il convient d’avoir suivi les modules 1, 2 et 3 et d’avoir réalisé le TP précédent.

    Durée estimée

    1 heure

    ## Objectifs

    - Installer la solution de sauvegarde Veeam Backup & Replication
    - Sauvegarder des VM
    - Restaurer une VM
    ## Énoncé

    Sur SRV-HyperV :

    Ne pas oublier d’ouvrir le port 445 (Service Accès réseau (NP-in))

    Sur Srv-backup:

    - Désinstaller Backup Exec
    - Installer VEEAM 12 backup & replication
    - Dans Veeam menu « Inventory » ajouter le serveur HyperV : « Add Server »
    ## Name                             SRV-HyperV

    Type Microsoft Hyper-V Server (Standalone) Crédential « Add… » « SRV-HyperV\administrateur »

    ## Review                           Task limit : 4

    - Une fois l’ajout effectué, vérifier sur le serveur SRV-HyperV la présence des serveurs :
        - o SRV-AD1
        - o SRV-FIC1
    - Créer un job de sauvegarde pour le serveur srv-Fic1

    - o Menu « Home »
        - o « Backup job »
        - o «Virtual Machine »
    ## Name                            SVGD-FIC1

    ## Virtual Machine                 « Add… » « Srv-Fic1 »

    Storage Default Backup Repository

    ## Review                          Task limit : 4

        - o Exécution immédiate
    - Après vérification de la sauvegarde complète srv-fic1
        - o S'il n’y a pas d’erreur lors de la sauvegarde
        - o Supprimer le serveur srv-fic1 depuis SRV-HYPERV
        - o Depuis VEEAM effectuer une restauration complète de la VM srv-fic1
        - o Une fois la restauration terminée vérifier que tous les paramètres du serveur sont bons et opérationnels

=== "Cours Optimisé IA"

    ## Objectifs

    - Choisir un support avec les cinq critères du module, pas seulement la capacité.
    - Distinguer DAS, NAS et SAN par l’endroit où vit le système de fichiers.
    - Lire le tableau des bandes sans le « moderniser ».
    - Remplacer Backup Exec par Veeam 12 dans la maquette et restaurer une VM entière.

    ## 1. Matériel, logiciel, ordonnanceur

    Le support sépare les supports et la robotique, d’un côté, le logiciel de sauvegarde et l’ordonnanceur, de l’autre. Un disque sans logiciel ne constitue pas l’infrastructure décrite. Un logiciel sans support non plus.

    ## 2. Choisir le support

    Capacité, fiabilité, temps d’accès, consommation électrique, sécurité. Les tableaux détaillent ensuite chaque famille. Les optiques ont une durée de vie et une capacité faibles. Le HDD craint les chocs, le SSD moins, pour un coût encore supérieur dans le support. La clé et la carte tiennent aux chocs et manquent de place. La bande dure et se robotise, mais se manipule mal. Le RDX est simple et fragile. Le NAS redonde par le RAID et charge le réseau. Le SAN sécurise et se complique. Le cloud reste accessible et fait sortir la maîtrise des données, avec une vitesse liée au lien.

    La diapositive des cartouches DLT et LTO n’ajoute aucun chiffre. Les chiffres sont uniquement ceux du tableau. La ligne LTO 9 est surlignée : 18 To natifs, 45 To compressés. Les lignes LTO 10, 11 et 12 sont recopiées telles quelles. Cette fiche ne les remplace pas par une génération plus récente.

    ## 3. Où est le système de fichiers

    **Illustration IA / externe au cours — les trois rattachements décrits par les schémas.**

    ```mermaid
    flowchart TB
        subgraph das["DAS"]
            AD["Application et système de fichiers sur la machine"] --> DD["Disque ou lecteur de bandes branché dessus"]
        end
        subgraph san["SAN"]
            AS["Application sur le serveur"] --> SN["Réseau SAN"] --> FS["Système de fichiers géré par le serveur"] --> DK["Disques"]
        end
        subgraph nas["NAS"]
            AN["Application"] --> LN["LAN"] --> NF["Système de fichiers du NAS · CIFS, NFS ou Samba"]
        end
    ```

    | Question | DAS | SAN | NAS |
    |---|---|---|---|
    | Qui porte le système de fichiers ? | La machine à laquelle le périphérique est branché | Le serveur qui a accès aux blocs | Le NAS lui-même |
    | Unité vue | Périphérique local, souvent une bande | Bloc | Fichier, plus un offset d’octet |
    | Réseau | Aucun dans le schéma | Réseau de stockage dédié | LAN |
    | Protocoles du tableau | Non listés dans le schéma DAS | SCSI, Fibre Channel ou SATA | NFS, CIFS/SMB, HTTP ou HTTPS |
    | Coût dit par le support | Non chiffré | Cher et plus complexe | Rentable et moins compliqué |

    Le DAS du support est d’abord un lecteur de bandes, puis éventuellement l’optique ou les disques. Le partage SAN dépend du système d’exploitation du serveur. Le NAS est présenté comme plus partageable entre Unix et NT.

    ## 4. Locale ou distante, et la règle 3-2-1

    Une sauvegarde locale reste dans le réseau interne : serveur, disque, ou bande que l’on peut ensuite sortir physiquement. Une sauvegarde distante sort du site, vers un autre site ou vers Internet, par une connexion que le support veut sécurisée. Le rappel 3-2-1 sur cette diapositive sert à ne pas compter deux copies dans la même salle comme une stratégie complète.

    ## 5. TP guidé — Veeam à la place de Backup Exec

    Durée annoncée : 1 heure. Les installateurs ne sont pas publiés. Correction : **Inexistant**. Les démonstrations du support n’ont pas de pas-à-pas.

    1. Sur SRV-HyperV, ouvrir le port 445, règle « Accès réseau (NP-in) », avant d’ajouter l’hôte.
    2. Sur srv-backup, désinstaller Backup Exec. Le module précédent a servi ; ce TP change d’outil sur la même machine.
    3. Installer Veeam Backup & Replication 12.
    4. Inventory, Add Server. Nom `SRV-HyperV`, type Microsoft Hyper-V Server (Standalone), compte `SRV-HyperV\administrateur`, limite de tâches 4.
    5. Vérifier que SRV-AD1 et SRV-FIC1 apparaissent sur cet hôte. S’ils manquent, l’import du module 1 n’est pas terminé : ne pas lancer le job.
    6. Home, Backup job, Virtual Machine. Nom `SVGD-FIC1`, VM `Srv-Fic1`, dépôt Default Backup Repository, limite de tâches 4. Lancer tout de suite.
    7. Si la complète n’a pas d’erreur, supprimer la VM srv-fic1 dans Hyper-V, puis la restaurer entièrement depuis Veeam.
    8. Contrôler que le serveur restauré répond et que ses paramètres sont ceux d’avant la suppression. L’énoncé ne liste pas ces paramètres : les relever avant la suppression.

    Le nom du job `SVGD-FIC1` et le nom de VM `Srv-Fic1` ne s’écrivent pas de la même façon dans l’énoncé. Les deux graphies sont gardées, chacune dans son champ.

    ## À retenir

    Le DAS colle le stockage à la machine. Le SAN livre des blocs et laisse le système de fichiers au serveur. Le NAS livre des fichiers sur le LAN. La bande se choisit pour la durée et le volume, avec le risque de manipulation. Veeam, dans ce TP, sauvegarde puis reconstruit une VM entière après sa suppression.

    ## Mini-quiz — 5 questions {#mini-quiz}

    1. Qui gère le système de fichiers dans le SAN du support ?
    2. Quel protocole de fichier le support associe-t-il au monde Windows sur un NAS ?
    3. Quelle ligne de capacité est surlignée ?
    4. Pourquoi ouvrir le port 445 avant d’ajouter Hyper-V dans Veeam ?
    5. Que doit-on désinstaller sur srv-backup avant Veeam 12 ?

    ??? success "Réponses commentées"

        1. Le serveur qui accède aux espaces de stockage.
        2. CIFS, Common Internet File System. NFS ou Samba sont cités pour Unix et Linux.
        3. LTO 9, 18 To natifs et 45 To compressés.
        4. L’énoncé le demande explicitement : service Accès réseau (NP-in).
        5. Backup Exec.

    ## Anomalies et choix

    - « Resistance » et « Résistance », « Eligibilité », « Crédential » : graphies du support, conservées.
    - Cartouches DLT et LTO : description seulement, photos non publiées.
    - Capacités LTO 10 à 12 : celles du tableau, non corrigées.
    - Démonstrations et correction : **Inexistant**.

## Pour pratiquer et réviser

- [Fiche de révision](../../revision/16-sauvegarde-et-restauration/module-03.md)
- [Kahoot — 20 questions](../../kahoot/16-sauvegarde-et-restauration-module-03.md)
- [Sommaire du cours](index.md)
