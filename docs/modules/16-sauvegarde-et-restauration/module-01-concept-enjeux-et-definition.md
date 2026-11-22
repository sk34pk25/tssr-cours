# Module 01 — Concept, enjeux et définition

Support « Sauvegarde, restauration, disponibilité », module 1, et énoncé de création de l’infrastructure. Durée indiquée du TP : 1 heure.

La transcription du support et l’aide pédagogique sont séparées pour rendre leur provenance explicite.

=== "Cours Original"

    Module 1 Concept, enjeux et définition

    ## SOMMAIRE

    Concept et enjeux

    Bonnes pratiques

    Sauvegarde et archivage

    ## Sauvegarde et archivage

    Inexistant

    Restauration

    Règle 3-2-1

    PCA / PRA / Plan de sauvegarde

    Éditeur de solution de sauvegarde

    - Veritas Backup EXE Veritas Backup Exec
    - VEEAM Backup & Réplication

    ## CONCEPT D’UNE

    L’objectif des sauvegardes est de :

    SAUVEGARDE

    - Garantir la pérennité des données.
    - Assurer la récupération des informations indispensables au fonctionnement du système d’information à la suite d’un incident ou d’un sinistre.
    - Répondre aux demandes de disponibilité des données.

    ## ENJEUX D’UNE

    - Prévenir la perte de données. SAUVEGARDE
    - Avoir un plan de secours en cas de défaillance matérielle ou logicielle.
    - Garantir la rétention des données réglementaires.
    - Avoir une protection contre les cyberattaques.
    - Prévenir l'intrusion, l'incendie...

    ## BONNES

    - Créer un compte dédié à la sauvegarde sur votre AD :
    ## PRATIQUES

    - Plus sécurisé, aucune permission NTFS sur les dossiers à sauvegarder.
    ## POUR UNE

    - En cas de problème, il procure une meilleure traçabilité dans les logs.
    ## SAUVEGARDE

    - Pour les clients Windows, utiliser le groupe opérateur de sauvegarde.
    - Renseigner et générer un plan de sauvegarde.

    RESTAURATION

    - La restauration de données en informatique est la récupération de fichiers, données ou logiciels perdus, endommagés ou inaccessibles depuis des supports de stockage suite à une panne, suppression ou catastrophe. Ce processus vise à restaurer les données à un état utilisable, réduisant la perte d'informations et les interruptions d'activité.

    ## RÈGLE 3-2-1

    Trois copies de données : Ce lot de copies comporte les données originales que x3 l’on souhaite sécuriser, et au minimum deux sauvegardes.

    Deux types de stockage différents : Les données sauvegardées doivent être conservées sur deux x2 supports de stockage distincts pour minimiser les risques de défaillance.

    Une copie hors site : Conserver au moins une copie des données en dehors de l’entreprise. x1 Prévention contre les sinistres, un acte de malveillance (cyberattaque, ransomware…) ou encore une erreur humaine.

    ## PCA ET PRA

    PCA - Plan de Continuité d'Activité

    Regroupe les processus mis en place avant, pendant et après une situation de crise, il concerne :

    - Le rétablissement du système d'information.
    - La gestion de la communication interne et externe.
    - Le repli physique des utilisateurs.
    - La gestion de la sécurité et des risques sanitaires.
    - La gouvernance de la gestion de crise.

    ## PCA ET PRA

    PRA - Plan de Reprise d'Activité

    Regroupe l'ensemble des procédures et moyens nécessaires à la continuité du système d'information, il comprend :

    - La politique ou plan de sauvegarde.
    - La gestion du stockage des éléments nécessaires à la restauration.
    - La procédure de restauration du système et des données.
    - Les licences des différentes applications utilisées.
    - Le plan de reprise d'activité n'est qu'une des composantes du plan de continuité d'activité.

    ## PLAN DE

    Procédure qui détaille les données qui doivent être sauvegardées,

    ## SAUVEGARDE

    l'infrastructure de sauvegarde, le calendrier des copies à réaliser et les méthodes de récupération et restauration. Il intègre a minima les éléments suivants :

    - Le périmètre (liste des ressources à sauvegarder)
    - Les contraintes
    - Les différents types de sauvegarde
    - La fréquence/périodicité des sauvegardes
    - Les informations de stockage
    - Les procédures de test de restauration
    - La destruction des supports ayant contenu les sauvegardes

    ## ÉDITEURS DE

    Les éditeurs de solutions de sauvegarde sont nombreux sur le marché avec des solutions gratuites

    ## SOLUTIONS DE

    ou payantes. SAUVEGARDE ARCSERVE Unified Data Protection DELL EMC Data Protection Suite

    ATEMPO Time Navigator HYCU Backup & recovery

    COHESIT DataPlateform SPECTRUM Protect

    COMMVAULT complete Backup & recovery RUBRIK Cloud Data Management

    STORAGECRAFT OneXafe / ShadowXafe VEEAM Backup and Replication

    Veritas Netbackup / Backup Exec (solution utilisée pour la suite du module)

    ## PRÉSENTATION

    Veritas Backup Exec est un logiciel de sauvegarde et restauration de

    ## DE VERITAS

    données. Il fournit des fonctionnalités de sauvegarde et de restauration.

    ## BACKUP EXEC

    Bouton Backup Exec

    Ruban commandes Gestion Volet de travaux sélection

    Volet d'informations

    ## PRÉSENTATION

    - Veeam Backup & Replication est un logiciel de sauvegarde
    ## DE VEEAM

    des données et de reprise d’activité pour les machines virtuelles VMware vSphere et Microsoft Hyper−V. BACKUP &

    ## RÉPLICATION

    - Prise en charge du protocole VSS pour la sauvegarde de bases de données Microsoft.
    - De nombreuses fonctionnalités de sauvegarde sont prises en charge.

    ## PRÉSENTATION

    - Veeam permet de faire de la sauvegarde complète de VM
    ## DE VEEAM

    et ensuite implémenter une restauration soit full (VM complète) soit granulaire (données issues de la VM). BACKUP &

    ## RÉPLICATION

    SRV−ESX

    SRV−VEEAM

    ## PRÉSENTATION

    - La réplication est une solution de récupération d’urgence
    ## DE VEEAM

    en cas de défaillance matérielle ou de crash système.

    ## BACKUP &

    - Elle permet une remise en état rapide du service
    ## RÉPLICATION

    en démarrant le réplica de la machine impactée.

    - Les réplicas devront obligatoirement être stockés sur un datastore ESXi ou Hyper−V monté.
    - La taille du réplica est identique à celle de la VM.

    ## PRÉSENTATION

    Un réplica ne doit pas être démarré manuellement mais

    ## DE VEEAM

    uniquement via la console Veeam Backup & Replication.

    ## BACKUP &

    - Cette fonctionnalité est
    ## RÉPLICATION

    un élément clé dans les calculs de RTO.

    - Une fois la VM endommagée remise en état, on peut « merger » les 2 VM pour éviter la perte de données.

    ## PRÉSENTATION

    - Avant toute chose, il faudra définir les différents supports
    ## DE VEEAM

    de stockage dans la partie Backup Repositories et les assigner.

    - Disques locaux
    ## BACKUP &

    - Partages CIFS / SMB / NFS
    ## RÉPLICATION

    - Disques durs externes…
    - Il est possible de :
    - Sauvegarder l’intégralité des VM
    - Exclure certains disques
    - Choisir le mode de Backup
    - Incrémental
    - Reverse Incremental

    ## PRÉSENTATION

    - Mise en place des Jobs permet de gérer la planification
    ## DE VEEAM

    des travaux de sauvegarde et restauration. BACKUP & RÉPLICATION

    ## PRÉSENTATION

    - La configuration des alertes mail permet d’envoyer des rapports pour les backups et réplications. DE VEEAM BACKUP & RÉPLICATION

    TRAVAUX TRAVAUX PRATIQUES Mise en place PRATIQUES

    ## N°1

    de l’environnement


    ## Création de l'infrastructure

    ## TP du Module 01 – Concepts, enjeux et définitions

    Avant de démarrer ce TP, il convient d’avoir suivi le module 1. Pour ce module l’accès au gestionnaire Hyper-V est nécessaire sur votre machine de salle. Vous devez avoir accès au partage distrib.

    ## Durée estimée

    ## 1 heure

    ## Objectifs

    - Installer le rôle HyperV sur le poste de salle
    - Déployer l’infrastructure sous HyperV pour l’exécution des ateliers
    ## Énoncé

    En vous basant sur les informations fournies ci-dessous, vous importerez l’environnement de maquettage via les bundles disponible dans : R:\Distrib\Bundles\TSSR\RES24_0160B - Sauvegarde & restauration

    Import des machines virtuelles dans l’environnement Hyper-V:

    - Créez une arborescence de stockage de machine virtuelle sur le disque D:\ de votre machine de salle. Chaque machine virtuelle sera stockée dans un dossier dédié.
    - Importez les machines virtuelles suivantes (voir lien ci-dessus) :
    - Les machines SRV-AD1 et SRV-FIC1 ne sont pas à importer, elles sont intégrées au serveur SRV-HyperV
    Mot de Nom Type systèmes Domaine Login passe Windows Serveur Srv-backup Mondomaine.local Administrateur Pa$$w0rd SRV-Nas Freebsd – truenas Mondomaine.local admin *

    Routeur Freebsd - pfsense Mondomaine.local admin * Windows Serveur SRV-HyperV WORKGROUP Administrateur *

    Windows Serveur SRV-AD1 Mondomaine.local Administrateur * Windows Serveur SRV-FIC1 Mondomaine.local Administrateur *

    | Nom | Type systèmes | Domaine | Login | Mot de passe |
    |---|---|---|---|---|
    | Srv-backup | Windows Serveur 2019 | Mondomaine.local | Administrateur | Pa$$w0rd |
    | SRV-Nas | Freebsd – truenas | Mondomaine.local | admin | * |
    | Routeur | Freebsd - pfsense | Mondomaine.local | admin | * |
    | SRV-HyperV | Windows Serveur 2019 | WORKGROUP | Administrateur | * |
    | SRV-AD1 | Windows Serveur 2019 | Mondomaine.local | Administrateur | * |
    | SRV-FIC1 | Windows Serveur 2019 | Mondomaine.local | Administrateur | * |

    Schéma de l’infrastructure :

    ![schema-infrastructure-1.png](../../assets/images/sauvegarde/module-01/schema-infrastructure-1.png)

    ![schema-infrastructure-2.png](../../assets/images/sauvegarde/module-01/schema-infrastructure-2.png)

    Vérification après import : L’objectif est de contrôler que notre infrastructure est opérationnelle et de finaliser certaines configurations.

    Allumer toutes les VM de notre infrastructure.

    - Ouvrir une session sur toutes vos VM :
        - o Administrateur / Pa$$w0rd

    - Depuis srv-backup
        - o Vérifier la connectivité vers les serveurs suivants et ajuster les pare-feu Windows au besoin : ▪ SRV-AD1 ▪ SRV- Fic1 ▪ SRV-NAS
        - o Préparation du NAS depuis SRV_Backup
        - o Ouvrir chrome, vérifier que le portail web du serveur NAS est opérationnel ▪ URL : https://192.168.30.1 ▪ Login : admin / Pa$$w0rd ▪ Dans le menu « paramètres systèmes » - « Console » effectuer la commande « sudo wbinfo -t » pour vérifier que l’intégration AD est ok. ▪ Aller sur le menu « service » et activer le service « ISCSI ».
    - Sur srv-fic1
        - o Se connecter sur la VM : ▪ Administrateur ▪ Pa$$w0rd
        - o Effectuer les pings suivants : ▪ srv-ad1 ▪ srv-backup ▪ truenas

=== "Cours Optimisé IA"

    Les parties ci-dessous reprennent le cours original, dans le même ordre. Les encadrés et les schémas répètent ses formulations.

    ## Parcours de lecture

    1. SOMMAIRE
    2. Sauvegarde et archivage
    3. CONCEPT D’UNE
    4. ENJEUX D’UNE
    5. BONNES
    6. PRATIQUES
    7. POUR UNE
    8. SAUVEGARDE
    9. RÈGLE 3-2-1
    10. PCA ET PRA
    11. PCA ET PRA
    12. PLAN DE
    13. SAUVEGARDE
    14. ÉDITEURS DE
    15. SOLUTIONS DE
    16. PRÉSENTATION
    17. DE VERITAS
    18. BACKUP EXEC
    19. PRÉSENTATION
    20. DE VEEAM
    21. RÉPLICATION
    22. PRÉSENTATION
    23. DE VEEAM
    24. RÉPLICATION
    25. PRÉSENTATION
    26. DE VEEAM
    27. BACKUP &
    28. RÉPLICATION
    29. PRÉSENTATION
    30. DE VEEAM
    31. BACKUP &
    32. RÉPLICATION
    33. PRÉSENTATION
    34. DE VEEAM
    35. BACKUP &
    36. RÉPLICATION
    37. PRÉSENTATION
    38. DE VEEAM
    39. PRÉSENTATION
    40. N°1
    41. Création de l'infrastructure
    42. TP du Module 01 – Concepts, enjeux et définitions
    43. Durée estimée
    44. 1 heure
    45. Objectifs
    46. Énoncé

    **Visuel externe**

    ```mermaid
    flowchart TD
        N1["SOMMAIRE"]
        N2["Sauvegarde et archivage"]
        N3["CONCEPT D’UNE"]
        N4["ENJEUX D’UNE"]
        N5["BONNES"]
        N6["PRATIQUES"]
        N7["POUR UNE"]
        N8["SAUVEGARDE"]
        N9["RÈGLE 3-2-1"]
        N10["PCA ET PRA"]
        N11["PCA ET PRA"]
        N12["PLAN DE"]
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

    Module 1 Concept, enjeux et définition

    ## SOMMAIRE

    !!! note "À retenir"
        Concept et enjeux Bonnes pratiques Sauvegarde et archivage

    Concept et enjeux

    Bonnes pratiques

    Sauvegarde et archivage

    ## Sauvegarde et archivage

    !!! note "À retenir"
        Inexistant Restauration Règle 3-2-1 PCA / PRA / Plan de sauvegarde Éditeur de solution de sauvegarde Veritas Backup EXE Veritas Backup Exec VEEAM Backup & Réplication

    Inexistant

    Restauration

    Règle 3-2-1

    PCA / PRA / Plan de sauvegarde

    Éditeur de solution de sauvegarde

    - Veritas Backup EXE Veritas Backup Exec
    - VEEAM Backup & Réplication

    ## CONCEPT D’UNE

    !!! note "À retenir"
        L’objectif des sauvegardes est de : SAUVEGARDE Garantir la pérennité des données.

    L’objectif des sauvegardes est de :

    SAUVEGARDE

    - Garantir la pérennité des données.
    - Assurer la récupération des informations indispensables au fonctionnement du système d’information à la suite d’un incident ou d’un sinistre.
    - Répondre aux demandes de disponibilité des données.

    ## ENJEUX D’UNE

    !!! note "À retenir"
        SAUVEGARDE Avoir un plan de secours en cas de défaillance matérielle ou logicielle.

    **Visuel externe**

    ```mermaid
    flowchart LR
        N1["Prévenir la perte de données. SAUVEGARDE"]
        N2["Avoir un plan de secours en cas de défaillance matérielle ou logicielle."]
        N3["Garantir la rétention des données réglementaires."]
        N4["Avoir une protection contre les cyberattaques."]
        N5["Prévenir l'intrusion, l'incendie..."]
        N1 --> N2
        N2 --> N3
        N3 --> N4
        N4 --> N5
    ```

    - Prévenir la perte de données. SAUVEGARDE
    - Avoir un plan de secours en cas de défaillance matérielle ou logicielle.
    - Garantir la rétention des données réglementaires.
    - Avoir une protection contre les cyberattaques.
    - Prévenir l'intrusion, l'incendie...

    ## BONNES

    !!! note "À retenir"
        Créer un compte dédié à la sauvegarde sur votre AD :

    - Créer un compte dédié à la sauvegarde sur votre AD :

    ## PRATIQUES

    !!! note "À retenir"
        Plus sécurisé, aucune permission NTFS sur les dossiers à sauvegarder.

    - Plus sécurisé, aucune permission NTFS sur les dossiers à sauvegarder.

    ## POUR UNE

    !!! note "À retenir"
        En cas de problème, il procure une meilleure traçabilité dans les logs.

    - En cas de problème, il procure une meilleure traçabilité dans les logs.

    ## SAUVEGARDE

    !!! note "À retenir"
        Pour les clients Windows, utiliser le groupe opérateur de sauvegarde.

    - Pour les clients Windows, utiliser le groupe opérateur de sauvegarde.
    - Renseigner et générer un plan de sauvegarde.

    RESTAURATION

    - La restauration de données en informatique est la récupération de fichiers, données ou logiciels perdus, endommagés ou inaccessibles depuis des supports de stockage suite à une panne, suppression ou catastrophe. Ce processus vise à restaurer les données à un état utilisable, réduisant la perte d'informations et les interruptions d'activité.

    ## RÈGLE 3-2-1

    Trois copies de données : Ce lot de copies comporte les données originales que x3 l’on souhaite sécuriser, et au minimum deux sauvegardes.

    Deux types de stockage différents : Les données sauvegardées doivent être conservées sur deux x2 supports de stockage distincts pour minimiser les risques de défaillance.

    Une copie hors site : Conserver au moins une copie des données en dehors de l’entreprise. x1 Prévention contre les sinistres, un acte de malveillance (cyberattaque, ransomware…) ou encore une erreur humaine.

    ## PCA ET PRA

    **Visuel externe**

    ```mermaid
    flowchart LR
        N1["Le rétablissement du système d'information."]
        N2["La gestion de la communication interne et externe."]
        N3["Le repli physique des utilisateurs."]
        N4["La gestion de la sécurité et des risques sanitaires."]
        N5["La gouvernance de la gestion de crise."]
        N1 --> N2
        N2 --> N3
        N3 --> N4
        N4 --> N5
    ```

    PCA - Plan de Continuité d'Activité

    Regroupe les processus mis en place avant, pendant et après une situation de crise, il concerne :

    - Le rétablissement du système d'information.
    - La gestion de la communication interne et externe.
    - Le repli physique des utilisateurs.
    - La gestion de la sécurité et des risques sanitaires.
    - La gouvernance de la gestion de crise.

    ## PCA ET PRA

    **Visuel externe**

    ```mermaid
    flowchart LR
        N1["La politique ou plan de sauvegarde."]
        N2["La gestion du stockage des éléments nécessaires à la restauration."]
        N3["La procédure de restauration du système et des données."]
        N4["Les licences des différentes applications utilisées."]
        N1 --> N2
        N2 --> N3
        N3 --> N4
    ```

    PRA - Plan de Reprise d'Activité

    Regroupe l'ensemble des procédures et moyens nécessaires à la continuité du système d'information, il comprend :

    - La politique ou plan de sauvegarde.
    - La gestion du stockage des éléments nécessaires à la restauration.
    - La procédure de restauration du système et des données.
    - Les licences des différentes applications utilisées.
    - Le plan de reprise d'activité n'est qu'une des composantes du plan de continuité d'activité.

    ## PLAN DE

    Procédure qui détaille les données qui doivent être sauvegardées,

    ## SAUVEGARDE

    **Visuel externe**

    ```mermaid
    flowchart LR
        N1["Le périmètre (liste des ressources à sauvegarder)"]
        N2["Les contraintes"]
        N3["Les différents types de sauvegarde"]
        N4["La fréquence/périodicité des sauvegardes"]
        N5["Les informations de stockage"]
        N6["Les procédures de test de restauration"]
        N7["La destruction des supports ayant contenu les sauvegardes"]
        N1 --> N2
        N2 --> N3
        N3 --> N4
        N4 --> N5
        N5 --> N6
        N6 --> N7
    ```

    l'infrastructure de sauvegarde, le calendrier des copies à réaliser et les méthodes de récupération et restauration. Il intègre a minima les éléments suivants :

    - Le périmètre (liste des ressources à sauvegarder)
    - Les contraintes
    - Les différents types de sauvegarde
    - La fréquence/périodicité des sauvegardes
    - Les informations de stockage
    - Les procédures de test de restauration
    - La destruction des supports ayant contenu les sauvegardes

    ## ÉDITEURS DE

    Les éditeurs de solutions de sauvegarde sont nombreux sur le marché avec des solutions gratuites

    ## SOLUTIONS DE

    ou payantes. SAUVEGARDE ARCSERVE Unified Data Protection DELL EMC Data Protection Suite

    ATEMPO Time Navigator HYCU Backup & recovery

    COHESIT DataPlateform SPECTRUM Protect

    COMMVAULT complete Backup & recovery RUBRIK Cloud Data Management

    STORAGECRAFT OneXafe / ShadowXafe VEEAM Backup and Replication

    Veritas Netbackup / Backup Exec (solution utilisée pour la suite du module)

    ## PRÉSENTATION

    Veritas Backup Exec est un logiciel de sauvegarde et restauration de

    ## DE VERITAS

    données. Il fournit des fonctionnalités de sauvegarde et de restauration.

    ## BACKUP EXEC

    Bouton Backup Exec

    Ruban commandes Gestion Volet de travaux sélection

    Volet d'informations

    ## PRÉSENTATION

    - Veeam Backup & Replication est un logiciel de sauvegarde

    ## DE VEEAM

    des données et de reprise d’activité pour les machines virtuelles VMware vSphere et Microsoft Hyper−V. BACKUP &

    ## RÉPLICATION

    - Prise en charge du protocole VSS pour la sauvegarde de bases de données Microsoft.
    - De nombreuses fonctionnalités de sauvegarde sont prises en charge.

    ## PRÉSENTATION

    - Veeam permet de faire de la sauvegarde complète de VM

    ## DE VEEAM

    et ensuite implémenter une restauration soit full (VM complète) soit granulaire (données issues de la VM). BACKUP &

    ## RÉPLICATION

    SRV−ESX

    SRV−VEEAM

    ## PRÉSENTATION

    - La réplication est une solution de récupération d’urgence

    ## DE VEEAM

    en cas de défaillance matérielle ou de crash système.

    ## BACKUP &

    - Elle permet une remise en état rapide du service

    ## RÉPLICATION

    en démarrant le réplica de la machine impactée.

    - Les réplicas devront obligatoirement être stockés sur un datastore ESXi ou Hyper−V monté.
    - La taille du réplica est identique à celle de la VM.

    ## PRÉSENTATION

    Un réplica ne doit pas être démarré manuellement mais

    ## DE VEEAM

    uniquement via la console Veeam Backup & Replication.

    ## BACKUP &

    - Cette fonctionnalité est

    ## RÉPLICATION

    un élément clé dans les calculs de RTO.

    - Une fois la VM endommagée remise en état, on peut « merger » les 2 VM pour éviter la perte de données.

    ## PRÉSENTATION

    - Avant toute chose, il faudra définir les différents supports

    ## DE VEEAM

    de stockage dans la partie Backup Repositories et les assigner.

    - Disques locaux

    ## BACKUP &

    - Partages CIFS / SMB / NFS

    ## RÉPLICATION

    - Disques durs externes…
    - Il est possible de :
    - Sauvegarder l’intégralité des VM
    - Exclure certains disques
    - Choisir le mode de Backup
    - Incrémental
    - Reverse Incremental

    ## PRÉSENTATION

    - Mise en place des Jobs permet de gérer la planification

    ## DE VEEAM

    des travaux de sauvegarde et restauration. BACKUP & RÉPLICATION

    ## PRÉSENTATION

    - La configuration des alertes mail permet d’envoyer des rapports pour les backups et réplications. DE VEEAM BACKUP & RÉPLICATION

    TRAVAUX TRAVAUX PRATIQUES Mise en place PRATIQUES

    ## N°1

    de l’environnement

    ## Création de l'infrastructure

    ## TP du Module 01 – Concepts, enjeux et définitions

    Avant de démarrer ce TP, il convient d’avoir suivi le module 1. Pour ce module l’accès au gestionnaire Hyper-V est nécessaire sur votre machine de salle. Vous devez avoir accès au partage distrib.

    ## Durée estimée

    ## 1 heure

    ## Objectifs

    - Installer le rôle HyperV sur le poste de salle
    - Déployer l’infrastructure sous HyperV pour l’exécution des ateliers

    ## Énoncé

    En vous basant sur les informations fournies ci-dessous, vous importerez l’environnement de maquettage via les bundles disponible dans : R:\Distrib\Bundles\TSSR\RES24_0160B - Sauvegarde & restauration

    Import des machines virtuelles dans l’environnement Hyper-V:

    - Créez une arborescence de stockage de machine virtuelle sur le disque D:\ de votre machine de salle. Chaque machine virtuelle sera stockée dans un dossier dédié.
    - Importez les machines virtuelles suivantes (voir lien ci-dessus) :
    - Les machines SRV-AD1 et SRV-FIC1 ne sont pas à importer, elles sont intégrées au serveur SRV-HyperV
    Mot de Nom Type systèmes Domaine Login passe Windows Serveur Srv-backup Mondomaine.local Administrateur Pa$$w0rd SRV-Nas Freebsd – truenas Mondomaine.local admin *

    Routeur Freebsd - pfsense Mondomaine.local admin * Windows Serveur SRV-HyperV WORKGROUP Administrateur *

    Windows Serveur SRV-AD1 Mondomaine.local Administrateur * Windows Serveur SRV-FIC1 Mondomaine.local Administrateur *

    | Nom | Type systèmes | Domaine | Login | Mot de passe |
    |---|---|---|---|---|
    | Srv-backup | Windows Serveur 2019 | Mondomaine.local | Administrateur | Pa$$w0rd |
    | SRV-Nas | Freebsd – truenas | Mondomaine.local | admin | * |
    | Routeur | Freebsd - pfsense | Mondomaine.local | admin | * |
    | SRV-HyperV | Windows Serveur 2019 | WORKGROUP | Administrateur | * |
    | SRV-AD1 | Windows Serveur 2019 | Mondomaine.local | Administrateur | * |
    | SRV-FIC1 | Windows Serveur 2019 | Mondomaine.local | Administrateur | * |

    Schéma de l’infrastructure :

    ![schema-infrastructure-1.png](../../assets/images/sauvegarde/module-01/schema-infrastructure-1.png)

    ![schema-infrastructure-2.png](../../assets/images/sauvegarde/module-01/schema-infrastructure-2.png)

    Vérification après import : L’objectif est de contrôler que notre infrastructure est opérationnelle et de finaliser certaines configurations.

    Allumer toutes les VM de notre infrastructure.

    - Ouvrir une session sur toutes vos VM :
        - o Administrateur / Pa$$w0rd

    - Depuis srv-backup
        - o Vérifier la connectivité vers les serveurs suivants et ajuster les pare-feu Windows au besoin : ▪ SRV-AD1 ▪ SRV- Fic1 ▪ SRV-NAS
        - o Préparation du NAS depuis SRV_Backup
        - o Ouvrir chrome, vérifier que le portail web du serveur NAS est opérationnel ▪ URL : https://192.168.30.1 ▪ Login : admin / Pa$$w0rd ▪ Dans le menu « paramètres systèmes » - « Console » effectuer la commande « sudo wbinfo -t » pour vérifier que l’intégration AD est ok. ▪ Aller sur le menu « service » et activer le service « ISCSI ».
    - Sur srv-fic1
        - o Se connecter sur la VM : ▪ Administrateur ▪ Pa$$w0rd
        - o Effectuer les pings suivants : ▪ srv-ad1 ▪ srv-backup ▪ truenas

    ## Fiche de synthèse

    Les lignes reprennent les titres du cours et la première phrase de chaque partie.

    | Partie | Repère du cours |
    | --- | --- |
    | SOMMAIRE | Concept et enjeux Bonnes pratiques Sauvegarde et archivage |
    | Sauvegarde et archivage | Inexistant Restauration Règle 3-2-1 PCA / PRA / Plan de sauvegarde Éditeur de solution de sauvegarde Veritas Backup EXE Veritas Backup Exec VEEAM Backup & Réplication |
    | CONCEPT D’UNE | L’objectif des sauvegardes est de : SAUVEGARDE Garantir la pérennité des données. |
    | ENJEUX D’UNE | SAUVEGARDE Avoir un plan de secours en cas de défaillance matérielle ou logicielle. |
    | BONNES | Créer un compte dédié à la sauvegarde sur votre AD : |
    | PRATIQUES | Plus sécurisé, aucune permission NTFS sur les dossiers à sauvegarder. |
    | POUR UNE | En cas de problème, il procure une meilleure traçabilité dans les logs. |
    | SAUVEGARDE | Pour les clients Windows, utiliser le groupe opérateur de sauvegarde. |
    | RÈGLE 3-2-1 | Trois copies de données : Ce lot de copies comporte les données originales que x3 l’on souhaite sécuriser, et au minimum deux sauvegardes. |
    | PCA ET PRA | PCA - Plan de Continuité d'Activité Regroupe les processus mis en place avant, pendant et après une situation de crise, il concerne : Le rétablissement du système d'information. |
    | PCA ET PRA | PRA - Plan de Reprise d'Activité Regroupe l'ensemble des procédures et moyens nécessaires à la continuité du système d'information, il comprend : La politique ou plan de sauvega… |
    | PLAN DE | Procédure qui détaille les données qui doivent être sauvegardées, |
    | SAUVEGARDE | l'infrastructure de sauvegarde, le calendrier des copies à réaliser et les méthodes de récupération et restauration. |
    | ÉDITEURS DE | Les éditeurs de solutions de sauvegarde sont nombreux sur le marché avec des solutions gratuites |
    | SOLUTIONS DE | SAUVEGARDE ARCSERVE Unified Data Protection DELL EMC Data Protection Suite ATEMPO Time Navigator HYCU Backup & recovery COHESIT DataPlateform SPECTRUM Protect COMMVAULT complete… |
    | PRÉSENTATION | Veritas Backup Exec est un logiciel de sauvegarde et restauration de |
    | DE VERITAS | Il fournit des fonctionnalités de sauvegarde et de restauration. |
    | BACKUP EXEC | Bouton Backup Exec Ruban commandes Gestion Volet de travaux sélection Volet d'informations |
    | PRÉSENTATION | Veeam Backup & Replication est un logiciel de sauvegarde |
    | DE VEEAM | des données et de reprise d’activité pour les machines virtuelles VMware vSphere et Microsoft Hyper−V. |
    | RÉPLICATION | Prise en charge du protocole VSS pour la sauvegarde de bases de données Microsoft. |
    | PRÉSENTATION | Veeam permet de faire de la sauvegarde complète de VM |
    | DE VEEAM | et ensuite implémenter une restauration soit full (VM complète) soit granulaire (données issues de la VM). |
    | PRÉSENTATION | La réplication est une solution de récupération d’urgence |
    | DE VEEAM | en cas de défaillance matérielle ou de crash système. |
    | BACKUP & | Elle permet une remise en état rapide du service |
    | RÉPLICATION | en démarrant le réplica de la machine impactée. |
    | PRÉSENTATION | Un réplica ne doit pas être démarré manuellement mais |
    | DE VEEAM | uniquement via la console Veeam Backup & Replication. |
    | RÉPLICATION | Une fois la VM endommagée remise en état, on peut « merger » les 2 VM pour éviter la perte de données. |
    | PRÉSENTATION | Avant toute chose, il faudra définir les différents supports |
    | DE VEEAM | de stockage dans la partie Backup Repositories et les assigner. |
    | RÉPLICATION | Disques durs externes… Il est possible de : Sauvegarder l’intégralité des VM Exclure certains disques Choisir le mode de Backup Incrémental Reverse Incremental |
    | PRÉSENTATION | Mise en place des Jobs permet de gérer la planification |
    | DE VEEAM | des travaux de sauvegarde et restauration. |
    | PRÉSENTATION | La configuration des alertes mail permet d’envoyer des rapports pour les backups et réplications. |
    | TP du Module 01 – Concepts, enjeux et définitions | Avant de démarrer ce TP, il convient d’avoir suivi le module 1. |
    | Objectifs | Installer le rôle HyperV sur le poste de salle Déployer l’infrastructure sous HyperV pour l’exécution des ateliers |
    | Énoncé | En vous basant sur les informations fournies ci-dessous, vous importerez l’environnement de maquettage via les bundles disponible dans : R:\Distrib\Bundles\TSSR\RES24_0160B - Sa… |
