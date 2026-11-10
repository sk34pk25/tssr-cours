# Module 03 — Gestion du stockage

Support « Gestion du stockage », neuf pages, et énoncé Veeam. Durée indiquée du TP : 1 heure.

La transcription du support et l’aide pédagogique sont séparées pour rendre leur provenance explicite.

=== "Cours Original"

    ## Sommaire du support

    Critères à respecter, solution DAS, solution NAS, solution SAN, exécution des sauvegardes. Le corps ajoute les familles de supports, la bande magnétique et un tableau de capacités.

    ## Infrastructure de sauvegarde

    Une infrastructure logicielle et matérielle est nécessaire.

    Partie matérielle :

    - les supports de sauvegarde ;
    - les lecteurs et la robotique de sauvegarde.

    Partie logicielle :

    - le logiciel de sauvegarde ;
    - le logiciel chargé de lancer les sauvegardes, appelé ordonnanceur.

    ## Critères de choix d’un support

    - La capacité de stockage.
    - La fiabilité du support.
    - Le temps d’accès en lecture et en écriture.
    - La consommation électrique.
    - La sécurité.

    ## Tableau des supports — première planche

    | Support | Atouts | Limites |
    |---|---|---|
    | CD / DVD | Peu encombrant | Durée de vie faible. Capacité de stockage faible. |
    | Blu-ray | Peu coûteux | Durée de vie faible. |
    | Disque dur HDD | Simplicité d’utilisation. Peu coûteux. | Sensibilité aux chocs. |
    | Disque dur SSD | Simplicité d’utilisation. Prix en baisse. Résistance au choc. | Plus coûteux qu’un HDD. |
    | Clé USB | Résistance au choc. Coût faible. | Capacité de stockage limitée. |
    | Carte mémoire | Résistance aux chocs. | Capacité de stockage faible. |

    Le support écrit « Resistance » sans accent pour le SSD et « Résistance » pour la clé et la carte. Les deux graphies sont conservées. La ligne Blu-ray ne porte pas d’atout dans la même cellule que le CD sur la diapositive : « Peu coûteux » est l’atout associé au Blu-ray dans la lecture du tableau.

    ## Tableau des supports — seconde planche

    | Support | Atouts | Limites |
    |---|---|---|
    | Bandes magnétiques | Durée de vie élevée. Large gamme de choix. | Risque d’erreur de manipulation. |
    | Technologie RDX | Simplicité d’utilisation. | Risque d’erreur de manipulation. Fragilité. |
    | NAS | Simplicité de mise en œuvre. Redondance via le RAID. | Encombrement du réseau. |
    | SAN | Sécurisation des données. Simplicité d’administration. | Problèmes d’interopérabilité. Complexité de mise en œuvre. |
    | Cloud | Fichiers accessibles à tout moment. Données protégées. | Performance dépendant de la connexion. Perte de contrôle sur les données. Vitesse de transfert réduite. |

    ## DAS — Direct Attached Storage

    Les solutions DAS consistent à connecter directement un périphérique au serveur ou à la station de travail. Il s’agit principalement d’un lecteur de bandes magnétiques. D’autres solutions peuvent être envisagées, comme le support optique ou les disques.

    Le schéma place l’application et le système de fichier côte à côte, sans réseau entre eux.

    ## Bande magnétique

    - Support utilisé depuis 1950 pour le stockage d’informations numériques.
    - Deux types de bandes : hélicoïdale et linéaire.
    - Capacité de stockage importante.
    - Automatisation avec les robots de sauvegarde qui acceptent plusieurs bandes dont le chargement est automatisé.

    Familles :

    - DDS - DAT : DDS (Digital Data Storage) est le nom officiel de la DAT (Digital Audio Tape).
    - DLT – SDLT : Digital Linear Tape (DLT, anciennement nommée CompacTape).
    - LTO : Linear Tape-Open, technique de stockage sur bande magnétique au format ouvert.

    La diapositive suivante montre deux cartouches, l’une marquée DLT et l’autre LTO, sans phrase supplémentaire. Photographies non reproduites.

    ### Capacités du tableau

    La ligne LTO 9 est surlignée sur la diapositive. Unités telles qu’écrites, « Go » ou « To ».

    | Support | Natif | Compressé | Support | Natif | Compressé |
    |---|---|---|---|---|---|
    | DAT DDS3 | 12 Go | 24 Go | LTO 12 | 192 To | 480 To |
    | DAT DDS4 | 20 Go | 40 Go | LTO 11 | 96 To | 240 To |
    | DAT 72 | 36 Go | 72 Go | LTO 10 | 48 To | 120 To |
    | DAT 160 | 80 Go | 160 Go | LTO 9 | 18 To | 45 To |
    | DLT-Tape VS1 | 80 Go | 160 Go | LTO 8 | 12 To | 30 To |
    | SDLT 1 | 160 Go | 320 Go | LTO 7 | 6 To | 15 To |
    | SDLT 2 | 300 Go | 600 Go | LTO 6 | 2,5 To | 6,25 To |
    | SDLT 3 / DLT-S4 | 800 Go | 1600 Go | LTO 5 | 1,5 To | 3 To |

    ## SAN — Storage Area Network

    Réseau dédié de dispositifs de stockage. Il permet aux serveurs d’accéder à des espaces de stockage centralisés comme s’ils étaient des disques locaux. Dans un SAN, c’est le serveur qui gère le système de fichier sur les espaces auxquels il a accès.

    Le schéma se lit : Application, puis SAN, puis Système de fichier, puis les disques.

    ## NAS — Network Attached Storage

    Appareil de stockage connecté à un réseau. Il permet de sauvegarder et de partager des fichiers dans un réseau local. Un NAS possède son propre système de fichier, généralement du CIFS (Common Internet File System) pour le monde Windows, ou du NFS (Network File System) ou Samba pour le monde Unix et Linux.

    Le schéma se lit : Application, Système de fichier, LAN.

    ## SAN et NAS face à face

    | | SAN | NAS |
    |---|---|---|
    | Signification | Storage Area Network | Network Attached Storage |
    | Protocoles | SCSI, Fibre Channel ou SATA | Serveur de fichiers, NFS ou CIFS |
    | Partage de l’information | Repose sur le système d’exploitation | Partage plus important entre les systèmes d’exploitation (Unix et NT) |
    | Identification des données | Par bloc de disque | Par le nom de fichier et l’offset de l’octet |
    | Éligibilité | Périphériques de classe serveurs dotés du canal Fibre Channel SCSI | Périphérique connecté au réseau local, protocoles NFS, CIFS/SMB, HTTP ou HTTPS |
    | Coût et complexité | Cher et plus complexe | Rentable et moins compliqué |

    Le support écrit « Eligibilité » sans accent. La graphie est conservée.

    ## Exécution des sauvegardes

    Sauvegarde locale : directement sur le site d’exploitation, sur un support local. Les données ne sortent pas du réseau interne.

    - Serveur de stockage disponible sur le réseau.
    - Disque dur.
    - Bande magnétique, avec externalisation du support physique.

    Le support rappelle ici la règle 3-2-1.

    Sauvegarde distante ou externalisée : en dehors du site, vers un site distant ou sur Internet via une connexion sécurisée. Les données sortent du réseau interne.

    ## Démonstrations

    Deux diapositives : « Création de job » et « Restauration du Job ». Aucun geste n’est écrit. Pas-à-pas : **Inexistant**.

    La diapositive de TP n°4 annonce « VEEAM Sauvegarde et restauration de VM ». Le détail est dans l’énoncé.

    ## Énoncé — Sauvegarde et restauration Veeam

    Avoir suivi les modules 1, 2 et 3 et réalisé le TP précédent. Durée estimée : 1 heure.

    Objectifs : installer Veeam Backup & Replication ; sauvegarder des VM ; restaurer une VM.

    Sur SRV-HyperV : ne pas oublier d’ouvrir le port 445, service Accès réseau (NP-in).

    Sur Srv-backup :

    - désinstaller Backup Exec ;
    - installer VEEAM 12 backup & replication ;
    - menu Inventory, ajouter le serveur Hyper-V, « Add Server ».

    | Champ | Valeur |
    |---|---|
    | Name | SRV-HyperV |
    | Type | Microsoft Hyper-V Server (Standalone) |
    | Credential | Add… puis `SRV-HyperV\administrateur` |
    | Review | Task limit : 4 |

    Le support écrit « Crédential ». La graphie est conservée.

    Une fois l’ajout effectué, vérifier sur SRV-HyperV la présence de SRV-AD1 et de SRV-FIC1.

    Créer un job pour srv-Fic1 : menu Home, Backup job, Virtual Machine.

    | Champ | Valeur |
    |---|---|
    | Name | SVGD-FIC1 |
    | Virtual Machine | Add… puis Srv-Fic1 |
    | Storage | Default Backup Repository |
    | Review | Task limit : 4 |

    Exécution immédiate.

    Après vérification de la sauvegarde complète de srv-fic1, s’il n’y a pas d’erreur : supprimer le serveur srv-fic1 depuis SRV-HYPERV, restaurer complètement la VM depuis Veeam, puis vérifier que tous les paramètres du serveur sont bons et opérationnels.

    Correction : **Inexistant**.

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
