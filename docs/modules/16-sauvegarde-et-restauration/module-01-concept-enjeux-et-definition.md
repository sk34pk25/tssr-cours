# Module 01 — Concept, enjeux et définition

Support « Sauvegarde, restauration, disponibilité », module 1, et énoncé de création de l’infrastructure. Durée indiquée du TP : 1 heure.

La transcription du support et l’aide pédagogique sont séparées pour rendre leur provenance explicite.

=== "Cours Original"

    ## Sommaire du support

    Le sommaire annonce : concept et enjeux, bonnes pratiques, sauvegarde et archivage, restauration, règle 3-2-1, PCA / PRA / plan de sauvegarde, éditeurs de solution de sauvegarde.

    Deux puces se suivent : « Veritas Backup EXE » puis « Veritas Backup Exec ». La graphie EXE est conservée. C’est un doublon du nom Backup Exec développé plus loin. Veeam Backup & Replication est la dernière puce du sommaire.

    La rubrique **Sauvegarde et archivage** figure au sommaire. Aucune diapositive ne développe ce titre. Contenu de cette rubrique : **Inexistant**.

    ## Concept d’une sauvegarde

    L’objectif des sauvegardes est de :

    - garantir la pérennité des données ;
    - assurer la récupération des informations indispensables au fonctionnement du système d’information à la suite d’un incident ou d’un sinistre ;
    - répondre aux demandes de disponibilité des données.

    ## Enjeux d’une sauvegarde

    - Prévenir la perte de données.
    - Avoir un plan de secours en cas de défaillance matérielle ou logicielle.
    - Garantir la rétention des données réglementaires.
    - Avoir une protection contre les cyberattaques.
    - Prévenir l’intrusion, l’incendie.

    ## Bonnes pratiques

    - Créer un compte dédié à la sauvegarde sur l’annuaire :
        - plus sécurisé, aucune permission NTFS sur les dossiers à sauvegarder ;
        - en cas de problème, il procure une meilleure traçabilité dans les journaux.
    - Pour les clients Windows, utiliser le groupe Opérateurs de sauvegarde.
    - Renseigner et générer un plan de sauvegarde.

    ## Restauration

    La restauration de données en informatique est la récupération de fichiers, données ou logiciels perdus, endommagés ou inaccessibles depuis des supports de stockage suite à une panne, une suppression ou une catastrophe. Ce processus vise à restaurer les données à un état utilisable, réduisant la perte d’informations et les interruptions d’activité.

    ## Règle 3-2-1

    | Repère | Énoncé du support |
    |---|---|
    | ×3 | Trois copies de données. Ce lot comporte les données originales que l’on souhaite sécuriser, et au minimum deux sauvegardes. |
    | ×2 | Deux types de stockage différents. Les données sauvegardées doivent être conservées sur deux supports de stockage distincts pour minimiser les risques de défaillance. |
    | ×1 | Une copie hors site. Conserver au moins une copie des données en dehors de l’entreprise. Prévention contre les sinistres, un acte de malveillance (cyberattaque, ransomware) ou encore une erreur humaine. |

    ## PCA — Plan de continuité d’activité

    Le PCA regroupe les processus mis en place avant, pendant et après une situation de crise. Il concerne :

    - le rétablissement du système d’information ;
    - la gestion de la communication interne et externe ;
    - le repli physique des utilisateurs ;
    - la gestion de la sécurité et des risques sanitaires ;
    - la gouvernance de la gestion de crise.

    Une note manuscrite de la diapositive précise : « Un PCA englobe toute l’entreprise pas seulement le SI ! »

    ## PRA — Plan de reprise d’activité

    Le PRA regroupe l’ensemble des procédures et moyens nécessaires à la continuité du système d’information. Il comprend :

    - la politique ou plan de sauvegarde ;
    - la gestion du stockage des éléments nécessaires à la restauration ;
    - la procédure de restauration du système et des données ;
    - les licences des différentes applications utilisées.

    Le support ajoute : le plan de reprise d’activité n’est qu’une des composantes du plan de continuité d’activité.

    ## Plan de sauvegarde

    Procédure qui détaille les données qui doivent être sauvegardées, l’infrastructure de sauvegarde, le calendrier des copies à réaliser et les méthodes de récupération et restauration. Il intègre a minima :

    - le périmètre (liste des ressources à sauvegarder) ;
    - les contraintes ;
    - les différents types de sauvegarde ;
    - la fréquence et la périodicité des sauvegardes ;
    - les informations de stockage ;
    - les procédures de test de restauration ;
    - la destruction des supports ayant contenu les sauvegardes.

    ## Éditeurs cités

    Les éditeurs de solutions de sauvegarde sont nombreux, avec des solutions gratuites ou payantes. Noms tels qu’écrits sur la diapositive :

    | Colonne de gauche | Colonne de droite |
    |---|---|
    | ARCSERVE Unified Data Protection | DELL EMC Data Protection Suite |
    | ATEMPO Time Navigator | HYCU Backup & recovery |
    | COHESIT DataPlateform | SPECTRUM Protect |
    | COMMVAULT complete Backup & recovery | RUBRIK Cloud Data Management |
    | STORAGECRAFT OneXafe / ShadowXafe | VEEAM Backup and Replication |

    La diapositive isole ensuite : **Veritas Netbackup / Backup Exec** (solution utilisée pour la suite du module).

    Les graphies « COHESIT DataPlateform », « COMMVAULT complete », « SPECTRUM Protect » sans éditeur devant, et « Backup EXE » du sommaire sont celles du support.

    ## Présentation de Veritas Backup Exec

    Veritas Backup Exec est un logiciel de sauvegarde et restauration de données. Il fournit des fonctionnalités de sauvegarde et de restauration.

    La capture d’interface est une illustration d’écran, non reproduite ici. Les légendes lisibles sont :

    | Zone légendée | Place sur la capture |
    |---|---|
    | Bouton Backup Exec | Coin supérieur gauche |
    | Ruban commandes | Bandeau sous le bouton |
    | Volet de sélection | Colonne de gauche |
    | Volet d’informations | Zone centrale basse |
    | Onglets | Partie supérieure droite |
    | Gestion des travaux | Colonne de droite |
    | Barre d’état | Bas de la fenêtre |

    ## Présentation de Veeam Backup & Replication

    - Veeam Backup & Replication est un logiciel de sauvegarde des données et de reprise d’activité pour les machines virtuelles VMware vSphere et Microsoft Hyper-V.
    - Prise en charge du protocole VSS pour la sauvegarde de bases de données Microsoft.
    - De nombreuses fonctionnalités de sauvegarde sont prises en charge.
    - Veeam permet de faire de la sauvegarde complète de VM et ensuite d’implémenter une restauration soit full (VM complète) soit granulaire (données issues de la VM).

    Le schéma de cette diapositive relie **SRV-ESX**, **SRV-VEEAM** et **SRV-NAS**. Des blocs « Vm » sont dessinés de part et d’autre de SRV-VEEAM. Le sens dessiné va de l’hyperviseur vers Veeam, puis de Veeam vers le NAS.

    ## Réplication

    - La réplication est une solution de récupération d’urgence en cas de défaillance matérielle ou de crash système.
    - Elle permet une remise en état rapide du service en démarrant le réplica de la machine impactée.
    - Les réplicas devront obligatoirement être stockés sur un datastore ESXi ou Hyper-V monté.
    - La taille du réplica est identique à celle de la VM.
    - Un réplica ne doit pas être démarré manuellement mais uniquement via la console Veeam Backup & Replication.
    - Cette fonctionnalité est un élément clé dans les calculs de RTO.
    - Une fois la VM endommagée remise en état, on peut « merger » les 2 VM pour éviter la perte de données.

    La diapositive de l’avertissement montre une capture de la console, non reproduite. Le texte d’alerte ci-dessus est celui de la diapositive.

    ## Référentiels, modes et travaux

    Avant toute chose, il faudra définir les différents supports de stockage dans la partie Backup Repositories et les assigner :

    - disques locaux ;
    - partages CIFS / SMB / NFS ;
    - disques durs externes.

    Il est possible de :

    - sauvegarder l’intégralité des VM ;
    - exclure certains disques ;
    - choisir le mode de sauvegarde : incrémental ou reverse incremental.

    La mise en place des jobs permet de gérer la planification des travaux de sauvegarde et restauration.

    La configuration des alertes mail permet d’envoyer des rapports pour les backups et réplications.

    Les diapositives intitulées seulement « Travaux pratiques n°1 — Mise en place de l’environnement » ne détaillent pas les gestes. Le détail est dans l’énoncé ci-dessous.

    ## Énoncé — Création de l’infrastructure

    TP du module 01, concepts, enjeux et définitions. Avant de démarrer, avoir suivi le module 1. L’accès au gestionnaire Hyper-V est nécessaire sur la machine de salle. L’accès au partage distrib est requis.

    Le document source nomme la machine de salle par l’organisme de formation. Cette transcription garde le rôle de la machine et ne cite pas cet organisme.

    Durée estimée : 1 heure.

    Objectifs :

    - installer le rôle Hyper-V sur le poste de salle ;
    - déployer l’infrastructure sous Hyper-V pour l’exécution des ateliers.

    Énoncé : en se basant sur les informations fournies, importer l’environnement de maquettage via les bundles disponibles dans :

    `R:\Distrib\Bundles\TSSR\RES24_0160B - Sauvegarde & restauration`

    Import des machines virtuelles :

    - créer une arborescence de stockage de machine virtuelle sur le disque `D:\` de la machine de salle ; chaque machine virtuelle sera stockée dans un dossier dédié ;
    - importer les machines suivantes ;
    - les machines SRV-AD1 et SRV-FIC1 ne sont pas à importer : elles sont intégrées au serveur SRV-HyperV.

    | Nom | Type systèmes | Domaine | Login | Mot de passe |
    |---|---|---|---|---|
    | Srv-backup | Windows Serveur 2019 | Mondomaine.local | Administrateur | Pa$$w0rd |
    | SRV-Nas | Freebsd – truenas | Mondomaine.local | admin | * |
    | Routeur | Freebsd - pfsense | Mondomaine.local | admin | * |
    | SRV-HyperV | Windows Serveur 2019 | WORKGROUP | Administrateur | * |
    | SRV-AD1 | Windows Serveur 2019 | Mondomaine.local | Administrateur | * |
    | SRV-FIC1 | Windows Serveur 2019 | Mondomaine.local | Administrateur | * |

    La colonne mot de passe du tableau vaut `Pa$$w0rd` pour Srv-backup et `*` pour les autres lignes. La graphie « Windows Serveur » et « Freebsd » est celle du tableau.

    ### Schéma de l’infrastructure

    La figure n’a pas de tableau. Les adresses lisibles sont :

    | Élément | Adresse | VLAN | Lecture de la figure |
    |---|---|---|---|
    | SRV-HyperV | 192.168.10.250 | VLAN 1 | Cadre qui contient Srv-ad1 et SRV-FIC1 |
    | Srv-ad1 | 192.168.10.1 | VLAN 1 | Dans le cadre SRV-HyperV |
    | SRV-FIC1 | 192.168.10.2 | VLAN 1 | Dans le cadre SRV-HyperV |
    | Routeur | 192.168.10.254 | VLAN 1 | Interface vers ce cadre, après un commutateur dessiné |
    | Routeur | 192.168.20.254 | VLAN 2 | Interface vers le serveur de sauvegarde |
    | Sauvegarde Srv | 192.168.20.1 | VLAN 2 | Après un second commutateur dessiné |
    | Routeur | 192.168.30.254 | VLAN 3 | Interface vers le NAS |
    | NAS | 192.168.30.1 | VLAN 3 | Légende « Partage ISCSI » |
    | Nuage WAN | non chiffrée | — | Légendes « Ip passerelle », « Réseau salle », « DHCP », « Bridged » |

    ### Vérification après import

    L’objectif est de contrôler que l’infrastructure est opérationnelle et de finaliser certaines configurations. Allumer toutes les VM.

    - Ouvrir une session sur toutes les VM : Administrateur / Pa$$w0rd.
    - Depuis srv-backup, vérifier la connectivité vers SRV-AD1, SRV-Fic1 et SRV-NAS, et ajuster les pare-feu Windows au besoin.
    - Préparation du NAS depuis SRV_Backup.
    - Ouvrir Chrome et vérifier que le portail web du NAS est opérationnel.
        - URL : `https://192.168.30.1`
        - Login : admin / Pa$$w0rd
        - Menu « paramètres systèmes » puis « Console » : exécuter `sudo wbinfo -t` pour vérifier que l’intégration à l’annuaire est correcte.
        - Menu « service » : activer le service « ISCSI ».
    - Sur srv-fic1, se connecter (Administrateur / Pa$$w0rd) et effectuer les pings vers srv-ad1, srv-backup et truenas.

    Correction de ce TP : **Inexistant**.

=== "Cours Optimisé IA"

    ## Objectifs

    - Expliquer pourquoi une sauvegarde existe et ce qu’elle ne remplace pas.
    - Appliquer la règle 3-2-1 et distinguer PCA et PRA.
    - Lister le contenu minimal d’un plan de sauvegarde.
    - Situer Backup Exec et Veeam dans la maquette, sans confondre sauvegarde et réplica.
    - Importer l’infrastructure du TP et prouver la connectivité avant le module suivant.

    ## 1. Ce qu’une sauvegarde doit garantir

    Le support relie trois objectifs : les données durent, le système d’information peut être reconstruit après un incident, et la disponibilité demandée est tenue. Les enjeux ajoutent la rétention réglementaire, la défaillance matérielle ou logicielle, les cyberattaques, l’intrusion et l’incendie.

    | Besoin | Réponse attendue du plan | Ce que le support ne détaille pas ici |
    |---|---|---|
    | Pérennité | Copies conservées sur la durée utile | Durée chiffrée : **Inexistant** dans ce module |
    | Après sinistre | Récupération de l’indispensable | Procédure nominative : renvoyée au plan de sauvegarde |
    | Disponibilité | Délai compatible avec l’activité | Chiffres de RTO : seulement cités plus loin pour le réplica |
    | Réglementaire | Rétention des données concernées | Liste des textes : **Inexistant** |
    | Malveillance | Copie hors d’atteinte de l’incident | Produit nommé : non imposé à ce stade |

    !!! success "À retenir"
        Une sauvegarde sert à revenir à un état utilisable. Le support le répète au module 2 : on ne constate pas un problème de sauvegarde, on constate un problème de restauration.

    ## 2. Compte de sauvegarde

    Le support demande un compte dédié, sans permission NTFS sur les dossiers à sauvegarder, pour la traçabilité. Sur les clients Windows, il cite le groupe Opérateurs de sauvegarde. Le plan de sauvegarde doit être rédigé, pas seulement pensé.

    ## 3. Règle 3-2-1

    **Illustration IA / externe au cours — lecture de la règle 3-2-1 du support.**

    ```mermaid
    flowchart LR
        O["Données d’origine"] --> C1["Copie 1"]
        O --> C2["Copie 2"]
        C1 --> S1["Support A"]
        C2 --> S2["Support B"]
        C2 --> H["Une copie hors site"]
    ```

    Les trois copies comptent l’original. Les deux supports doivent être de types distincts. La copie hors site couvre le sinistre du site, la malveillance et l’erreur humaine. Le module 3 rappellera cette règle au moment de choisir une sauvegarde locale ou distante.

    ## 4. PCA et PRA

    | | PCA | PRA |
    |---|---|---|
    | Portée lue sur le support | Avant, pendant et après la crise, y compris hors système d’information | Continuité du système d’information |
    | Contenu cité | SI, communication, repli des personnes, sécurité, risques sanitaires, gouvernance | Plan de sauvegarde, stockage des éléments à restaurer, procédure, licences |
    | Rapport | Englobe l’entreprise, pas seulement le SI | Une composante du PCA |

    La note manuscrite « Un PCA englobe toute l’entreprise pas seulement le SI ! » est le bon garde-fou : un PRA réussi ne suffit pas si personne ne sait où se replier ni comment communiquer.

    ## 5. Plan de sauvegarde

    Le support en fait une procédure, pas une intention. Sept rubriques minimales : périmètre, contraintes, types, fréquence, stockage, tests de restauration, destruction des supports. Le test de restauration est déjà annoncé ici ; le module 2 le rend obligatoire.

    ## 6. Deux produits annoncés pour la suite

    Le support énumère des éditeurs puis retient Veritas Backup Exec pour la suite du module, et présente Veeam juste après. Les noms sont recopiés dans l’onglet Cours Original, y compris les graphies inhabituelles. Cette fiche ne corrige pas ces noms.

    | Produit | Rôle dans ce cours | Limite dite par le support |
    |---|---|---|
    | Backup Exec | Sauvegarde et restauration, interface à sept zones | Le détail des jobs est au module 2 |
    | Veeam Backup & Replication | VM vSphere et Hyper-V, VSS Microsoft, restauration full ou granulaire | Les réplicas vivent sur un datastore ESXi ou Hyper-V |

    **Illustration IA / externe au cours — schéma Veeam reconstruit d’après la diapositive SRV-ESX / SRV-VEEAM / SRV-NAS.**

    ```mermaid
    flowchart LR
        E["SRV-ESX · VM"] --> V["SRV-VEEAM"]
        V --> N["SRV-NAS"]
        V --> R["Restauration full ou granulaire"]
    ```

    Un réplica n’est pas une sauvegarde allégée : le support dit que sa taille est celle de la VM, qu’il se stocke sur un datastore monté, et qu’il ne se démarre pas à la main. Le démarrage passe par la console, parce que le RTO se calcule sur cette action. Après réparation de la VM d’origine, le support propose de fusionner les deux VM.

    Les modes cités avant les jobs : intégralité des VM ou exclusion de disques, incrémental ou reverse incremental. Les dépôts : disques locaux, CIFS, SMB, NFS, disques externes. Les jobs planifient. Les alertes mail rendent compte des sauvegardes et des réplications.

    Les diapositives de démonstration de ce module ne contiennent pas de pas-à-pas. Démonstration filmée ou détaillée : **Inexistant**.

    ## 7. TP guidé — Importer la maquette

    Le pas-à-pas suit l’énoncé. Les valeurs d’accès sont celles du document de formation, à utiliser seulement dans cette maquette. Correction fournie : **Inexistant**.

    1. Installer le rôle Hyper-V sur le poste de salle si le gestionnaire n’est pas déjà disponible.
    2. Créer sur `D:\` un dossier par machine virtuelle.
    3. Importer les bundles depuis `R:\Distrib\Bundles\TSSR\RES24_0160B - Sauvegarde & restauration`. Ne pas importer SRV-AD1 ni SRV-FIC1 : ils sont déjà dans SRV-HyperV.
    4. Contrôler le tableau des comptes. Seul Srv-backup a un mot de passe écrit dans la grille (`Pa$$w0rd`). Les autres cellules affichent `*`. Plus loin, l’énoncé demande malgré tout la session Administrateur / Pa$$w0rd sur toutes les VM, et admin / Pa$$w0rd sur le portail du NAS. Choix de lecture : appliquer les valeurs écrites dans la section « Vérification », et traiter l’astérisque du tableau comme une cellule non renseignée, pas comme un mot de passe littéral.
    5. Allumer toutes les VM et ouvrir les sessions demandées.
    6. Depuis srv-backup, joindre SRV-AD1, SRV-Fic1 et SRV-NAS. Ajuster le pare-feu Windows seulement si le test de connectivité échoue.
    7. Depuis srv-backup, ouvrir `https://192.168.30.1`, session admin / Pa$$w0rd. Dans paramètres systèmes puis Console, `sudo wbinfo -t` doit confirmer l’intégration à l’annuaire. Activer le service ISCSI.
    8. Depuis srv-fic1, ping vers srv-ad1, srv-backup et truenas.

    **Illustration IA / externe au cours — plan d’adresses relevé sur la figure du TP.**

    ```mermaid
    flowchart TB
        W["WAN · passerelle salle · DHCP · pont"] --> R["Routeur"]
        subgraph v1["VLAN 1 · 192.168.10.0"]
            H["SRV-HyperV · .250"]
            A["Srv-ad1 · .1"]
            F["SRV-FIC1 · .2"]
        end
        subgraph v2["VLAN 2 · 192.168.20.0"]
            B["Sauvegarde Srv · .1"]
        end
        subgraph v3["VLAN 3 · 192.168.30.0"]
            N["NAS · .1 · iSCSI"]
        end
        H --- R
        B --- R
        N --- R
        R --- W
    ```

    Les interfaces du routeur lues sur la figure sont `.254` dans chaque VLAN : `192.168.10.254`, `192.168.20.254`, `192.168.30.254`. Le nom du routeur dans le tableau des VM est « Routeur », système Freebsd - pfsense. Le NAS du tableau est « SRV-Nas », Freebsd – truenas.

    ## À retenir

    Trois copies, deux supports, une copie dehors. Le PCA dépasse le système d’information. Le PRA en est le volet informatique, avec licences et tests. Backup Exec et Veeam arrivent ensuite. La maquette n’est prête que si le NAS répond, le service iSCSI est actif et les pings du serveur de fichiers réussissent.

    ## Mini-quiz — 5 questions {#mini-quiz}

    1. Les trois copies de la règle 3-2-1 incluent-elles les données d’origine ?
    2. Quelle note de la diapositive empêche de réduire le PCA au système d’information ?
    3. Pourquoi le support interdit-il de démarrer un réplica Veeam à la main ?
    4. Quelles machines du tableau ne doivent pas être importées, et pourquoi ?
    5. Quelle commande du portail NAS vérifie l’intégration à l’annuaire ?

    ??? success "Réponses commentées"

        1. Oui. Le support compte les données originales et au minimum deux sauvegardes.
        2. « Un PCA englobe toute l’entreprise pas seulement le SI ! »
        3. Le démarrage fait partie du calcul de RTO et doit passer par la console Veeam Backup & Replication.
        4. SRV-AD1 et SRV-FIC1 : l’énoncé dit qu’elles sont intégrées à SRV-HyperV.
        5. `sudo wbinfo -t`, dans paramètres systèmes puis Console.

    ## Anomalies et choix

    - Rubrique « Sauvegarde et archivage » du sommaire : **Inexistant**.
    - « Veritas Backup EXE » et « Veritas Backup Exec » : doublon de graphie, les deux sont conservés dans l’onglet Cours Original.
    - Astérisques du tableau des comptes, puis mot de passe écrit dans la vérification : lecture retenue dans le pas-à-pas.
    - Démonstrations et correction : **Inexistant**.

## Pour pratiquer et réviser

- [Fiche de révision](../../revision/16-sauvegarde-et-restauration/module-01.md)
- [Kahoot — 20 questions](../../kahoot/16-sauvegarde-et-restauration-module-01.md)
- [Sommaire du cours](index.md)
