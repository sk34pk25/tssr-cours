# Module 04 — La redondance de données et le RAID

Support « La redondance de données - RAID », sept pages, et énoncé d’utilisation du RAID. Durée indiquée : 1 heure.

La transcription du support et l’aide pédagogique sont séparées pour rendre leur provenance explicite.

=== "Cours Original"

    REDONDANCE DE DONNÉES

    Module 04 La redondance de données - RAID

    SOMMAIRE La redondance de données

    Le Raid

    Le Raid 0

    Le Raid 1

    Le Raid 5

    Le Raid 10

    ## LA REDONDANCE

    Consiste à dupliquer des composants ou des données essentielles

    ## DE DONNÉES

    d'un système, avec pour objectif d'améliorer sa fiabilité.

    Fonctionnement :

    - Peut être définie via une configuration matérielle ou logicielle.
    - L'objectif est de pouvoir reconstruire les données en cas de défaillance du système.

    ## LA REDONDANCE

    - Disques durs : technologie Raid, on répartit les données sur un
    ## DE DONNÉES

    ensemble de disques durs organisés en grappe, permettant de pallier une défaillance de l’un des disques.

    - Serveurs : réplication en temps réel des données entre deux serveurs ou clustering. Si l’un des serveurs tombe en panne, il est possible de s’appuyer sur l’autre.
    - Multisite : effectuer la redondance sur plusieurs sites pour pallier un incident majeur d’un site.

    ## RAID

    RAID : Redundant Array of Independent Disks Technique de partition des données sur plusieurs disques durs pour augmenter :

    - la tolérance aux pannes,
    - la sécurité,
    - la répartition et la cohérence de ces données.
    Le système RAID peut être logiciel ou matériel.

    ## RAID

    RAID : Logiciel Le contrôle du RAID est assuré à 100 % par une couche logicielle du système d'exploitation.

    Avantages

    - Technique la moins onéreuse.
    - Souplesse d'administration.
    - Compatibilité entre toutes les machines équipées du même contrôleur RAID (OS).

    ## RAID 0

    Le RAID 0 est aussi appelé Striping ou Entrelacement.

    - Constitué d'un minimum de 2 disques durs.                      RAID 0
    - Consiste à diviser les données en blocs et                     Striping à répartir ces blocs sur l’intégralité des disques durs que compte la grappe.
    - L’utilisation simultanée des disques permet au RAID 0 de fournir de bonnes                            A1                A2 performances en Lecture / Écriture,                      A3                 A4 mais il n’y a aucune tolérance aux pannes                A5                 A6 de disques durs.                                         A7                 A8

    ## RAID 1

    Le RAID 1 est aussi appelé Mirroring.

    - Il se constitue sur 2 disques durs et consiste                 RAID 1 à répliquer les données pour les écrire sur                    Mirroring les deux disques durs.
    - Cette opération de réplication a pour conséquence de rendre modérées les performances de Lecture / Écriture.                       A1                A1
    - On obtient toutefois une tolérance                        A2                A2 à la panne d’un disque dur.

    RAID 5 RAID 5

    - Le RAID 5 se constitue sur un minimum de 3 disques durs.
    - L’utilisation simultanée des disques durs en grappe rend les performances bonnes en Lecture et modérées en Écriture.
    - La répartition de la parité en cascade permet une tolérance à la panne d’un disque dur. RAID 5
    A1 A2 Ap B1 Bp B2 Cp C1 C2 D1 D2 Dp E1 Ep E2 Fp F1 F2 Disque 1 Disque 2 Disque 3

    ## RAID 10

    RAID 10

    - Le RAID 10 se constitue d'un minimum de 4 disques durs.
    - Lier des grappes RAID 1 sous une grappe RAID 0.
    - Bonne performance en Lecture / Écriture.
    - Tolérance de panne de 1 disque dur par sous grappe RAID 1.

    ## RAID 10

    RAID 0

    RAID 1 RAID 1

    A1 A1 B1 B1 A2 A2 B2 B2 A3 A3 B3 B3 A4 A4 B4 B4 A5 A5 B5 B5 A6 A6 B6 B6 Disque 1 Disque 2 Disque 3 Disque 4

    ## SYNTHESE

    Synthèse sur la technologie RAID

    RAID 0 RAID 1 RAID 5 RAID 10 Nbr minimum 2 2 3 4 de disques Tolérance de Pas de Panne 1 disque Panne 1 disque par sous grappe panne protection (0) Performances élevées élevées élevées élevées en lecture Performances élevées moyenne faible élevées en écriture Utilisation de 100% 50% 67%-94% 50% la capacité

    TRAVAUX REDONDANCE DEPRATIQUES DONNÉES

    TRAVAUX TRAVAUX PRATIQUES PRATIQUES N°5 Gestion du RAID


    ## Utilisation du raid

    ## TP du Module 04 – La redondance de données - RAID

    Avant de démarrer ce TP, il convient d’avoir suivi les modules 1, 2, 3 et 4 et d’avoir réalisé le TP précédent.

    Durée estimée

    1 heure

    ## Objectif

    - Configurer et manipuler une solution RAID.
    ## Énoncé

    Pour des questions de ressources supprimer les serveurs existants et installer un nouveau

    ## serveur SRV-FIC2

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

    ## refaire les deux étapes précédentes

    - Depuis le Gestionnaire de disque
        - o Initialiser les disques
    - Depuis le Gestionnaire de serveur => service de fichiers et de stockage
        - o Aller sur « pools de stockage »
        - o Sur le bloc « disques physiques », dans « tâche », sélectionner « nouveau disque virtuel »
        - o Ajouter les disques au pool de stockage
    Vos disques sont-ils toujours présents dans le Gestionnaire de disque ?

    A vous de mettre en place le RAID via le gestionnaire serveur

=== "Cours Optimisé IA"

    Les parties ci-dessous reprennent le cours original, dans le même ordre. Les encadrés et les schémas répètent ses formulations.

    ## Parcours de lecture

    1. LA REDONDANCE
    2. DE DONNÉES
    3. LA REDONDANCE
    4. DE DONNÉES
    5. RAID
    6. RAID
    7. RAID 0
    8. RAID 1
    9. RAID 10
    10. RAID 10
    11. SYNTHESE
    12. Utilisation du raid
    13. TP du Module 04 – La redondance de données - RAID
    14. Objectif
    15. Énoncé
    16. serveur SRV-FIC2
    17. Disque dur                       40 Go
    18. refaire les deux étapes précédentes

    **Visuel externe**

    ```mermaid
    flowchart TD
        N1["LA REDONDANCE"]
        N2["DE DONNÉES"]
        N3["LA REDONDANCE"]
        N4["DE DONNÉES"]
        N5["RAID"]
        N6["RAID"]
        N7["RAID 0"]
        N8["RAID 1"]
        N9["RAID 10"]
        N10["RAID 10"]
        N11["SYNTHESE"]
        N12["Utilisation du raid"]
        N1 --> N2
        N2 --> N3
        N3 --> N4
        N4 --> N5
        N5 --> N6
        N6 --> N7
        N7 --> N8
        N8 --> N9
        N9 --> N10
        N10 --> N11
        N11 --> N12
    ```

    REDONDANCE DE DONNÉES

    Module 04 La redondance de données - RAID

    SOMMAIRE La redondance de données

    Le Raid

    Le Raid 0

    Le Raid 1

    Le Raid 5

    Le Raid 10

    ## LA REDONDANCE

    !!! note "À retenir"
        Consiste à dupliquer des composants ou des données essentielles

    Consiste à dupliquer des composants ou des données essentielles

    ## DE DONNÉES

    !!! note "À retenir"
        d'un système, avec pour objectif d'améliorer sa fiabilité.

    d'un système, avec pour objectif d'améliorer sa fiabilité.

    Fonctionnement :

    - Peut être définie via une configuration matérielle ou logicielle.
    - L'objectif est de pouvoir reconstruire les données en cas de défaillance du système.

    ## LA REDONDANCE

    !!! note "À retenir"
        Disques durs : technologie Raid, on répartit les données sur un

    - Disques durs : technologie Raid, on répartit les données sur un

    ## DE DONNÉES

    !!! note "À retenir"
        ensemble de disques durs organisés en grappe, permettant de pallier une défaillance de l’un des disques.

    ensemble de disques durs organisés en grappe, permettant de pallier une défaillance de l’un des disques.

    - Serveurs : réplication en temps réel des données entre deux serveurs ou clustering. Si l’un des serveurs tombe en panne, il est possible de s’appuyer sur l’autre.
    - Multisite : effectuer la redondance sur plusieurs sites pour pallier un incident majeur d’un site.

    ## RAID

    !!! note "À retenir"
        RAID : Redundant Array of Independent Disks Technique de partition des données sur plusieurs disques durs pour augmenter : la tolérance aux pannes, la sécurité, la répartition et la cohérence de ces données.

    **Visuel externe**

    ```mermaid
    flowchart LR
        N1["la tolérance aux pannes,"]
        N2["la sécurité,"]
        N3["la répartition et la cohérence de ces données."]
        N1 --> N2
        N2 --> N3
    ```

    RAID : Redundant Array of Independent Disks Technique de partition des données sur plusieurs disques durs pour augmenter :

    - la tolérance aux pannes,
    - la sécurité,
    - la répartition et la cohérence de ces données.
    Le système RAID peut être logiciel ou matériel.

    ## RAID

    !!! note "À retenir"
        RAID : Logiciel Le contrôle du RAID est assuré à 100 % par une couche logicielle du système d'exploitation.

    **Visuel externe**

    ```mermaid
    flowchart LR
        N1["Technique la moins onéreuse."]
        N2["Souplesse d'administration."]
        N3["Compatibilité entre toutes les machines équipées du même contrôleur RAID (OS)."]
        N1 --> N2
        N2 --> N3
    ```

    RAID : Logiciel Le contrôle du RAID est assuré à 100 % par une couche logicielle du système d'exploitation.

    Avantages

    - Technique la moins onéreuse.
    - Souplesse d'administration.
    - Compatibilité entre toutes les machines équipées du même contrôleur RAID (OS).

    ## RAID 0

    !!! note "À retenir"
        Le RAID 0 est aussi appelé Striping ou Entrelacement.

    Le RAID 0 est aussi appelé Striping ou Entrelacement.

    - Constitué d'un minimum de 2 disques durs.                      RAID 0
    - Consiste à diviser les données en blocs et                     Striping à répartir ces blocs sur l’intégralité des disques durs que compte la grappe.
    - L’utilisation simultanée des disques permet au RAID 0 de fournir de bonnes                            A1                A2 performances en Lecture / Écriture,                      A3                 A4 mais il n’y a aucune tolérance aux pannes                A5                 A6 de disques durs.                                         A7                 A8

    ## RAID 1

    !!! note "À retenir"
        Il se constitue sur 2 disques durs et consiste RAID 1 à répliquer les données pour les écrire sur Mirroring les deux disques durs.

    Le RAID 1 est aussi appelé Mirroring.

    - Il se constitue sur 2 disques durs et consiste                 RAID 1 à répliquer les données pour les écrire sur                    Mirroring les deux disques durs.
    - Cette opération de réplication a pour conséquence de rendre modérées les performances de Lecture / Écriture.                       A1                A1
    - On obtient toutefois une tolérance                        A2                A2 à la panne d’un disque dur.

    RAID 5 RAID 5

    - Le RAID 5 se constitue sur un minimum de 3 disques durs.
    - L’utilisation simultanée des disques durs en grappe rend les performances bonnes en Lecture et modérées en Écriture.
    - La répartition de la parité en cascade permet une tolérance à la panne d’un disque dur. RAID 5
    A1 A2 Ap B1 Bp B2 Cp C1 C2 D1 D2 Dp E1 Ep E2 Fp F1 F2 Disque 1 Disque 2 Disque 3

    ## RAID 10

    **Visuel externe**

    ```mermaid
    flowchart LR
        N1["Le RAID 10 se constitue d'un minimum de 4 disques durs."]
        N2["Lier des grappes RAID 1 sous une grappe RAID 0."]
        N3["Bonne performance en Lecture / Écriture."]
        N4["Tolérance de panne de 1 disque dur par sous grappe RAID 1."]
        N1 --> N2
        N2 --> N3
        N3 --> N4
    ```

    RAID 10

    - Le RAID 10 se constitue d'un minimum de 4 disques durs.
    - Lier des grappes RAID 1 sous une grappe RAID 0.
    - Bonne performance en Lecture / Écriture.
    - Tolérance de panne de 1 disque dur par sous grappe RAID 1.

    ## RAID 10

    RAID 0

    RAID 1 RAID 1

    A1 A1 B1 B1 A2 A2 B2 B2 A3 A3 B3 B3 A4 A4 B4 B4 A5 A5 B5 B5 A6 A6 B6 B6 Disque 1 Disque 2 Disque 3 Disque 4

    ## SYNTHESE

    Synthèse sur la technologie RAID

    RAID 0 RAID 1 RAID 5 RAID 10 Nbr minimum 2 2 3 4 de disques Tolérance de Pas de Panne 1 disque Panne 1 disque par sous grappe panne protection (0) Performances élevées élevées élevées élevées en lecture Performances élevées moyenne faible élevées en écriture Utilisation de 100% 50% 67%-94% 50% la capacité

    TRAVAUX REDONDANCE DEPRATIQUES DONNÉES

    TRAVAUX TRAVAUX PRATIQUES PRATIQUES N°5 Gestion du RAID

    ## Utilisation du raid

    ## TP du Module 04 – La redondance de données - RAID

    Avant de démarrer ce TP, il convient d’avoir suivi les modules 1, 2, 3 et 4 et d’avoir réalisé le TP précédent.

    Durée estimée

    1 heure

    ## Objectif

    - Configurer et manipuler une solution RAID.

    ## Énoncé

    Pour des questions de ressources supprimer les serveurs existants et installer un nouveau

    ## serveur SRV-FIC2

    Système d’exploitation Windows 2019 serveur

    ## Disque dur                       40 Go

    **Visuel externe**

    ```mermaid
    flowchart LR
        N1["Ajouter 2 disques durs"]
        N2["Depuis le gestionnaire de disque"]
        N3["Supprimer à chaud le disque de 5 Go"]
        N4["o A vous de remplacer le disque manquant et de reconstruire le mirroring"]
        N5["Mettre en place un RAID5"]
        N6["Quelle est la taille de la nouvelle partition ?"]
        N7["Supprimer à chaud un disque de 5 Gb"]
        N1 --> N2
        N2 --> N3
        N3 --> N4
        N4 --> N5
        N5 --> N6
        N6 --> N7
    ```

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

    ## refaire les deux étapes précédentes

    - Depuis le Gestionnaire de disque
        - o Initialiser les disques
    - Depuis le Gestionnaire de serveur => service de fichiers et de stockage
        - o Aller sur « pools de stockage »
        - o Sur le bloc « disques physiques », dans « tâche », sélectionner « nouveau disque virtuel »
        - o Ajouter les disques au pool de stockage
    Vos disques sont-ils toujours présents dans le Gestionnaire de disque ?

    A vous de mettre en place le RAID via le gestionnaire serveur

    ## Fiche de synthèse

    Les lignes reprennent les titres du cours et la première phrase de chaque partie.

    | Partie | Repère du cours |
    | --- | --- |
    | LA REDONDANCE | Consiste à dupliquer des composants ou des données essentielles |
    | DE DONNÉES | d'un système, avec pour objectif d'améliorer sa fiabilité. |
    | LA REDONDANCE | Disques durs : technologie Raid, on répartit les données sur un |
    | DE DONNÉES | ensemble de disques durs organisés en grappe, permettant de pallier une défaillance de l’un des disques. |
    | RAID | RAID : Redundant Array of Independent Disks Technique de partition des données sur plusieurs disques durs pour augmenter : la tolérance aux pannes, la sécurité, la répartition e… |
    | RAID | RAID : Logiciel Le contrôle du RAID est assuré à 100 % par une couche logicielle du système d'exploitation. |
    | RAID 0 | Le RAID 0 est aussi appelé Striping ou Entrelacement. |
    | RAID 1 | Il se constitue sur 2 disques durs et consiste RAID 1 à répliquer les données pour les écrire sur Mirroring les deux disques durs. |
    | RAID 10 | RAID 10 Le RAID 10 se constitue d'un minimum de 4 disques durs. |
    | RAID 10 | RAID 0 RAID 1 RAID 1 A1 A1 B1 B1 A2 A2 B2 B2 A3 A3 B3 B3 A4 A4 B4 B4 A5 A5 B5 B5 A6 A6 B6 B6 Disque 1 Disque 2 Disque 3 Disque 4 |
    | SYNTHESE | Synthèse sur la technologie RAID RAID 0 RAID 1 RAID 5 RAID 10 Nbr minimum 2 2 3 4 de disques Tolérance de Pas de Panne 1 disque Panne 1 disque par sous grappe panne protection (… |
    | TP du Module 04 – La redondance de données - RAID | Avant de démarrer ce TP, il convient d’avoir suivi les modules 1, 2, 3 et 4 et d’avoir réalisé le TP précédent. |
    | Objectif | Configurer et manipuler une solution RAID. |
    | Énoncé | Pour des questions de ressources supprimer les serveurs existants et installer un nouveau |
    | serveur SRV-FIC2 | Système d’exploitation Windows 2019 serveur |
    | Disque dur                       40 Go | RAM 2048 Sur SRV-FIC2 mirroring : Ajouter 2 disques durs - o 1 disque Capacité : 5 Go - o 1 disque Capacité : 10 Go Depuis le gestionnaire de disque - o Initialiser les 2 disque… |
    | refaire les deux étapes précédentes | Depuis le Gestionnaire de disque - o Initialiser les disques Depuis le Gestionnaire de serveur => service de fichiers et de stockage - o Aller sur « pools de stockage » - o Sur… |
