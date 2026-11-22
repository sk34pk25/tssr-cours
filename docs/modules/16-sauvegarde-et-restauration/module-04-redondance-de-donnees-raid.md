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

    ## Objectifs

    - Situer le RAID parmi les autres redondances : serveurs et sites.
    - Dessiner RAID 0, 1, 5 et 10 comme les schémas du support.
    - Conduire le TP miroir puis RAID 5, y compris la panne à chaud, sans inventer le corrigé des questions ouvertes.

    ## 1. Trois échelles, un seul but

    La redondance duplique pour reconstruire. Le support la veut matérielle ou logicielle, puis la décline : disques en grappe, deux serveurs ou un cluster, plusieurs sites. Le RAID ne couvre pas l’incendie du bâtiment. Le module 1 demandait déjà une copie hors site. Les deux se complètent : le RAID tient pendant la panne d’un disque, la sauvegarde tient quand la grappe entière ou le site est perdu.

    ## 2. Logiciel ou matériel

    Le RAID logiciel du support est entièrement dans le système d’exploitation. Il coûte moins, s’administre avec souplesse, et le support le dit compatible entre machines qui ont le même « contrôleur » entre parenthèses : l’OS. Le support ne décrit pas, dans ce module, une carte RAID matérielle au-delà de l’alternative « logiciel ou matériel ».

    ## 3. Quatre organisations

    **Illustration IA / externe au cours — répartition des blocs telle que les schémas la dessinent.**

    ```mermaid
    flowchart TB
        subgraph r0["RAID 0 · 2 disques · aucune panne tolérée"]
            D1["Disque 1 · A1 A3 A5…"]
            D2["Disque 2 · A2 A4 A6…"]
        end
        subgraph r1["RAID 1 · 2 disques · 1 panne"]
            M1["Disque 1 · A1…A6"]
            M2["Disque 2 · mêmes blocs"]
        end
        subgraph r5["RAID 5 · 3 disques · 1 panne · parité tournante"]
            P1["A1 A2 Ap"]
            P2["B1 Bp B2"]
            P3["Cp C1 C2"]
        end
        subgraph r10["RAID 10 · 4 disques · 1 panne par miroir"]
            G1["Miroir A"]
            G2["Miroir B"]
        end
    ```

    | Niveau | Lecture utile du schéma | Écriture selon la synthèse | Capacité utile annoncée |
    |---|---|---|---|
    | 0 | Bandes alternées, tout l’espace | Élevée | 100 % |
    | 1 | Chaque bloc deux fois | Moyenne dans la synthèse, « modérées » dans le texte | 50 % |
    | 5 | Une parité par ligne, colonne qui change | Faible | 67 % à 94 % |
    | 10 | Deux miroirs réunis par un entrelacement | Élevée | 50 % |

    Le texte du RAID 0 promet de bonnes lectures et écritures, et zéro tolérance. Le texte du RAID 1 dit les performances modérées à cause de la réplication, alors que la synthèse marque la lecture « élevée » et l’écriture « moyenne ». Les deux formulations sont gardées : la synthèse ne contredit pas une lecture rapide, elle précise l’écriture. Le RAID 5 lit bien et écrit de façon modérée dans le texte, « faible » dans la synthèse. Même choix : les deux lignes restent visibles dans l’onglet Cours Original.

    La plage 67 %–94 % est celle du tableau. Le support ne la démontre pas. Pour trois disques, une parité sur trois laisse deux tiers utiles, soit environ 67 %. La borne 94 % suppose davantage de disques. Le TP demandera cinq disques : le corrigé chiffré de la taille est **Inexistant**. On peut raisonner, ce n’est pas la réponse officielle du dossier.

    ## 4. TP guidé — miroir inégal, puis cinq disques

    Durée annoncée : 1 heure. Les serveurs précédents sont supprimés pour libérer la machine. Nouveau serveur SRV-FIC2 : Windows 2019 serveur, disque 40 Go, 2048 de RAM. Correction : **Inexistant**.

    1. Créer SRV-FIC2 avec ces trois valeurs, après avoir retiré les VM qui occupaient les ressources.
    2. Ajouter un disque de 5 Go et un disque de 10 Go.
    3. Les initialiser en GPT. L’énoncé écrit « GUI Partition Table ». Le gestionnaire de disques propose GPT, table de partition GUID. Choix retenu : initialiser en GPT, et conserver la graphie GUI dans l’énoncé transcrit.
    4. Créer le volume miroir. La question « quelle est la taille ? » reste ouverte. Le support dit 50 % lorsque les disques se correspondent. Ici ils font 5 Go et 10 Go. Un miroir ne peut pas dépasser le plus petit disque. L’espace au-delà sert au volume simple demandé ensuite. La valeur exacte affichée par le gestionnaire est le relevé du TP, pas un corrigé absent.
    5. Peupler les deux volumes, puis retirer à chaud le disque de 5 Go. Noter l’état « manquant », retirer le miroir manquant, et vérifier dans l’explorateur si les fichiers répondent. Remettre un disque et lancer la reconstruction.

    Puis le RAID 5 :

    1. Ajouter cinq disques. L’énoncé passe de « 5 Go » à « 5 Gb ». Choix retenu : prendre la même unité que le reste du TP, le gigaoctet du gestionnaire de disques, et signaler le changement de symbole. Ne pas créer cinq disques d’un gibibit.
    2. Créer le RAID 5, noter la taille affichée, peupler, retirer un disque à chaud, noter l’état, retirer le manquant, tester l’accès, remplacer et reconstruire.
    3. Bonus : réinitialiser les disques, puis dans le gestionnaire de serveur, fichiers et stockage, pools de stockage, créer un disque virtuel depuis les disques physiques. Répondre à la question du TP : ces disques apparaissent-ils encore dans le gestionnaire de disque ? Terminer le RAID par le gestionnaire de serveur.

    Le support ne dit pas si un pool Storage Spaces et un volume miroir du gestionnaire de disques sont le même objet. Le bonus les fait refaire séparément. Ne pas conclure qu’ils se voient l’un l’autre sans le constat à l’écran.

    ## À retenir

    RAID 0 accélère et ne protège pas. RAID 1 copie tout et tient un disque. RAID 5 disperse la parité et tient un disque, au prix de l’écriture. RAID 10 aligne des miroirs sous un entrelacement et tient un disque par miroir. Aucun de ces niveaux ne remplace la copie hors site du module 1.

    ## Mini-quiz — 5 questions {#mini-quiz}

    1. Combien de disques au minimum pour un RAID 10, et quelle panne est tolérée ?
    2. Où se trouve le bloc Ap sur le schéma RAID 5 ?
    3. Pourquoi le RAID 0 utilise-t-il 100 % de la capacité ?
    4. Que demande l’énoncé avant de créer SRV-FIC2 ?
    5. La correction donne-t-elle la taille du miroir 5 Go + 10 Go ?

    ??? success "Réponses commentées"

        1. Quatre disques. Une panne par sous-grappe RAID 1.
        2. Troisième colonne de la première ligne, avec A1 et A2. La parité change de colonne à chaque ligne.
        3. Il n’y a pas de copie ni de parité. Le support indique 100 %.
        4. Supprimer les serveurs existants, pour une question de ressources.
        5. Non. Correction : **Inexistant**. La taille se lit dans le gestionnaire pendant le TP.

    ## Anomalies et choix

    - « GUI Partition Table » : geste GPT, graphie conservée.
    - « 5 Go » puis « 5 Gb » : même ordre de grandeur en gigaoctets, symbole signalé.
    - Écart lecture / écriture entre le texte et la synthèse RAID 1 et RAID 5 : les deux sont conservés.
    - Questions ouvertes et correction : **Inexistant**.

## Pour pratiquer et réviser

- [Fiche de révision](../../revision/16-sauvegarde-et-restauration/module-04.md)
- [Kahoot — 20 questions](../../kahoot/16-sauvegarde-et-restauration-module-04.md)
- [Sommaire du cours](index.md)
