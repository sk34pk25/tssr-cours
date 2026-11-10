# Module 02 — Types de sauvegarde

Support « Sauvegarde, restauration, disponibilité — Types de sauvegarde », treize pages, et deux énoncés Backup Exec. Durées indiquées : 3 heures puis 1 heure.

La transcription du support et l’aide pédagogique sont séparées pour rendre leur provenance explicite.

=== "Cours Original"

    ## Sommaire du support

    Sauvegarde à chaud et à froid, méthode d’archivage et bit d’archivage, sauvegarde complète, sauvegarde différentielle, sauvegarde incrémentale. Le corps du support ajoute la rotation des supports, les bases de données, une synthèse, puis les méthodes de restauration. Deux diapositives de démonstration ne portent qu’un titre.

    ## Rotation des supports — GPF / GFS

    Scénario traditionnel GPF (Grand-père / Père / Fils). En anglais : GFS (Grand-father / Father / Son).

    - La rotation Grand-père / Père / Fils est la planification de rotation des médias la plus couramment utilisée.
    - Support quotidien : Fils.
    - Support hebdomadaire : Père.
    - Support mensuel : Grand-Père.
    - Une stratégie GFS sur 5 jours nécessite environ 21 bandes par an.
    - Une stratégie sur 7 jours nécessite environ 23 bandes par an, soit deux bandes quotidiennes de plus.
    - Pour ces deux planifications, le nombre de médias varie selon les critères de conservation et le volume de données sauvegardées.

    La diapositive suivante est un schéma « Rotation standard avec GFS sur 5 jours (21 bandes) ». En-têtes : bandes fils quotidiennes (4 jours puis recyclées), bandes père hebdomadaires (5 semaines puis recyclées), bandes grand-père mensuelles (12 mois puis recyclées).

    Lecture du schéma, semaines 1 à 8. Les fils 1, 2, 3 et 4 reviennent chaque semaine. Les autres numéros sont ceux des cases père et grand-père :

    | Semaine | Fils | Père | Grand-père |
    |---|---|---|---|
    | 1 | 1, 2, 3, 4 | 5 | 8 et 11 |
    | 2 | 1, 2, 3, 4 | 6 | 12 |
    | 3 | 1, 2, 3, 4 | 7 | 13 et 14 |
    | 4 | 1, 2, 3, 4 | — | 15 et 16 |
    | 5 | 1, 2, 3, 4 | 9 | 17 |
    | 6 | 1, 2, 3, 4 | 10 | 18 et 19 |
    | 7 | 1, 2, 3, 4 | 5 | 20 et 21 |
    | 8 | 1, 2, 3, 4 | — | — |

    Les numéros 1 à 21 sont tous présents une fois dans cette lecture, le 5 revenant en semaine 7. C’est la lecture retenue du schéma ; les deux colonnes mensuelles ne sont pas étiquetées une à une sur la diapositive.

    ## Sauvegarde à chaud et à froid

    Lors du processus de sauvegarde, les données peuvent être accessibles aux utilisateurs ou non.

    | | À chaud | À froid |
    |---|---|---|
    | Définition | Les données sont sauvegardées en même temps qu’elles sont utilisées. | L’utilisateur n’a pas accès aux données durant tout le processus. |
    | Atouts écrits en vert | Immédiatement accessibles. Facilement modifiables. | Mise en œuvre simple. Facile à restaurer. |
    | Limite écrite en rouge | Mise en œuvre complexe. | Interruption du service le temps de la sauvegarde. |

    ## Méthodes et attributs

    Il existe plusieurs méthodes. Chacune fonctionne avec des attributs de fichiers spécifiques : attribut d’archive pour Microsoft et attribut date pour Unix.

    Système de date : beaucoup plus simple que le bit d’archivage. Une comparaison est réalisée entre la date de création ou de modification et la date de la dernière sauvegarde.

    Attribut d’archive Microsoft, bit d’archivage. Le schéma se lit ainsi :

    | Étape | Bit d’archive |
    |---|---|
    | Fichier d’origine | 0 |
    | Création, modification ou fermeture | 1 |
    | Après la sauvegarde | 0 |

    ## Trois méthodes

    Sauvegarde complète : copie l’ensemble des fichiers et dossiers d’un système. Impact sur le stockage important.

    Sauvegarde différentielle : elle effectue d’abord une sauvegarde complète. Chaque sauvegarde suivante prend en compte les modifications depuis la dernière sauvegarde complète.

    Sauvegarde incrémentale : elle effectue d’abord une copie complète. Chaque copie suivante prend en compte les modifications depuis la copie précédente.

    ### Complète

    Sauvegarde la totalité des fichiers, modifiés ou non. Elle est la base de toute solution de sauvegarde.

    - Elle ne se base pas sur l’attribut pour savoir quoi sauvegarder : elle sauvegarde tout.
    - Elle modifie l’attribut en fin de sauvegarde pour marquer le fichier.

    Le calendrier lun–ven de la diapositive est entièrement en sauvegarde complète.

    Avantages : restauration rapide et simple ; sauvegarde la plus fiable ; permet de supprimer très facilement les anciennes sauvegardes.

    Inconvénients : très gourmand en espace si l’on souhaite garder les anciennes sauvegardes ; les fichiers non modifiés seront sauvegardés plusieurs fois.

    ### Différentielle

    Aussi appelée cumulative ou T1. Sauvegarde les données modifiées ou ajoutées depuis la dernière sauvegarde complète, appelée « base différentielle ».

    - Prend tous les fichiers dont l’attribut Archive vaut 1.
    - Après la sauvegarde, l’attribut n’est pas remis à 0. Méthode dite cumulative.

    Le calendrier montre une complète, puis des différentielles des fichiers créés ou modifiés.

    Avantages : restauration simple et rapide ; temps de sauvegarde modéré ; plus fiable qu’une sauvegarde incrémentielle.

    Inconvénients : plus lente et plus coûteuse qu’une sauvegarde incrémentielle ; pas de rémanence sur les fichiers si un seul support de sauvegarde est utilisé.

    La diapositive écrit « incrémentielle » ici, et « incrémentale » dans le titre de la méthode suivante. Les deux graphies sont conservées.

    ### Incrémentale

    Sauvegarde les données modifiées ou ajoutées depuis la dernière sauvegarde complète puis incrémentale.

    - Prend tous les fichiers dont l’attribut Archive vaut 1.
    - Après la sauvegarde, l’attribut est remis à 0.

    Avantages : espace de stockage, temps de sauvegarde, consommation de la bande passante.

    Inconvénients : temps, complexité et fiabilité de la restauration des données.

    ## Sauvegarde d’une base de données

    - Une base de données est un ensemble structuré de données stockées de manière à être efficacement consultées et mises à jour.
    - Elle est gérée par un SGBD.
    - Elle permet d’assurer l’intégrité, la disponibilité et la sécurité des données.
    - Exemples cités : bases relationnelles comme PostgreSQL ou MySQL, bases NoSQL comme MongoDB, systèmes distribués comme Cassandra.
    - Ces bases peuvent être déployées localement, sur des serveurs dédiés, ou dans le cloud.

    Il n’y a pas de règle : chaque type de base dispose d’une ou plusieurs méthodes qui lui sont propres.

    - Base SQL Server : sauvegarde via SQL Server Management Studio.
    - Base MySQL : sauvegarde via la création d’un fichier DUMP.sql. La ligne du support est : `mysqldump -u username -p` puis les options, le nom de base, le nom de table, et la redirection `> dumpfilename.sql`. Le support place un mot « password » entre guillemets comme exemple d’invite. Cette page ne recopie pas cet exemple sous la forme d’une affectation.
    - Base Oracle : utilisation de RMAN. La ligne du support est `rman> backup incremental level 0 section size 512m database plus archivelog;`

    ## Synthèse du support

    | Méthode | Données | Temps de sauvegarde | Temps de restauration | Espace disque | Atouts | Limites |
    |---|---|---|---|---|---|---|
    | Complète | Toutes | Lent | Rapide | Élevé | Fiabilité | Espace de stockage important |
    | Incrémentale | Uniquement les données modifiées par rapport à la précédente sauvegarde | Rapide | Modéré / long | Le plus faible | Volume de sauvegarde réduit | Nécessite toutes les sauvegardes |
    | Différentielle | Uniquement les données modifiées depuis la précédente sauvegarde complète | Modéré | Rapide | Modéré | Restauration à partir de la dernière sauvegarde | Sauvegarde volumineuse |

    ## Démonstration — création de job

    La diapositive ne contient que le titre « Création de job ». Pas-à-pas de la démonstration : **Inexistant**. Les gestes demandés sont dans l’énoncé d’installation.

    ## Restauration

    La restauration d’un fichier, d’une application, d’une base ou d’un système complet est la finalité de tout plan de sauvegarde. Phrase mise en avant : « On n’a jamais de problème de sauvegarde, que des problèmes de restauration ! »

    Les sauvegardes doivent obligatoirement être testées à intervalle régulier. Un plan de sauvegarde ne sera considéré comme complet qu’après ces tests.

    ### Restauration à la demande

    Concerne des fichiers perdus, effacés ou altérés.

    - Restaurer sur l’original, avec risque de perte des données actuelles.
    - Restaurer sur un emplacement différent du même système : protection contre l’écrasement, le plus couramment utilisé.
    - Restaurer sur un autre système : contrôle avant retour en production, palier des problèmes de stockage, restauration complète de machines virtuelles.
    - Restaurer une ancienne version via le versionning.

    ### Restauration du système complet

    Les solutions utilisant une méthode appelée Bare-Metal-Recovery permettent la reconstruction d’un système complet à partir d’une nouvelle unité de disques.

    1. Architecture cible identique à l’architecture source.
    2. Restauration de l’image de sauvegarde.
    3. Restauration des données correspondant au delta entre la création de l’image source et la date de la restauration.

    ### Restauration d’une base

    Il n’y a pas de règle. Chaque type de base a une ou plusieurs méthodes.

    - SQL Server : restauration via SQL Server Management Studio.
    - MySQL : restauration via l’import d’un fichier DUMP.sql. Le support montre `mysql` avec un utilisateur et une option de mot de passe, puis `< fichier_source.sql`.
    - Oracle : restauration des fichiers depuis une sauvegarde à froid ; import datapump ; utilisation de RMAN.

    ## Démonstration — restauration

    La diapositive ne contient que le titre « Restauration ». Pas-à-pas : **Inexistant**.

    La diapositive de travaux pratiques n°3 annonce « Restauration Backup Exec » et « Duplication ». Le détail est dans le second énoncé.

    ## Énoncé — Installation et configuration de Backup Exec

    TP du module 02. Avoir suivi les modules 1 et 2 et réalisé le TP précédent. Durée estimée : 3 heures.

    Objectifs : installer Veritas Backup Exec ; créer un partage iSCSI pour y stocker les sauvegardes ; créer une sauvegarde d’un contrôleur de domaine et d’un serveur de fichiers.

    ### Partie 1 — annuaire et installation

    Sur srv-ad1 : créer un utilisateur dans l’annuaire et vérifier qu’il est opérationnel par une ouverture de session.

    Sur srv-backup : lancer l’installation de Backup Exec. Le setup est fourni par le formateur. Paramètres :

    | Paramètre | Valeur de l’énoncé |
    |---|---|
    | Langue | Français |
    | Installation produit | Backup exec |
    | Type d’installation | Personnalisée |
    | Menu | Installation locale – le logiciel et des fonctions backup exec |
    | Vérification environnement | Faire suivant même si des avertissements sont présents |
    | Ajout de licence | Faire suivant – valider l’infobulle |
    | Configurer les options | Valeur par défaut ; Advanced Disk-based backup feature ; Fonction NDMP |
    | Compte de service | Admin du domaine |
    | SQL Server | Créer une instance locale de SQL Express |

    ### Partie iSCSI, pendant l’installation

    Depuis srv-backup :

    1. Ouvrir l’initiateur iSCSI.
    2. Onglet découverte, découvrir un portail, ajouter l’adresse du NAS `192.168.30.1`, laisser le port 3260.
    3. Onglet cible, connexion, paramètres par défaut, valider.
    4. Au statut « connecté », fermer l’initiateur.
    5. Ouvrir le gestionnaire de disque et formater le nouveau disque de 80 Go.

    ### Stockage et job du contrôleur

    Onglet stockage, configurer le stockage :

    | Paramètre | Valeur |
    |---|---|
    | Type de stockage | Stockage basé sur disque |
    | Type de stockage sur disque | Stockage sur disque |
    | Nom | backup |
    | Description | backup sur nas |
    | Emplacement | Disque partagé iSCSI |
    | Écriture simultanée | 4 |

    Puis sauvegarde et restauration, serveurs et hôtes virtuels, ajouter un serveur :

    | Paramètre | Valeur |
    |---|---|
    | Ajout de serveur | Srv-ad1 |
    | Type | Ordinateur et serveur Microsoft Windows |
    | Mise à niveau de l’agent Backup Exec | Oui |

    Job de srv-ad1 :

    | Paramètre | Valeur |
    |---|---|
    | Type de sauvegarde | Stockage basé sur disque |
    | Méthode | Sauvegarde basée sur agent |
    | Nom | srv-ad1 job |
    | Description | vide dans l’énoncé |
    | Type | Complète puis incrémentale |
    | Modification | Pour la sauvegarde complète, effectuer une sauvegarde complète initiale en plus de la planification sélectionnée |
    | Création | Valider et vérifier que la tâche complète démarre juste après |

    ### Serveur de fichiers

    Même chemin d’ajout :

    | Paramètre | Valeur |
    |---|---|
    | Ajout de serveur | Srv-fic1 |
    | Type | Ordinateur et serveur Microsoft Windows |
    | Mise à niveau de l’agent | Oui |

    Si l’installation de l’agent renvoie « Erreur finale : 0xe00086ce » :

    - copier `C:\Program Files\Veritas\Backup Exec\Agents` depuis srv-backup ;
    - coller le dossier à la racine de `C:` sur le serveur cible, via le partage administratif `c$` ;
    - sur la cible, exécuter `C:\Agents\RAWSX64\setup.exe` ;
    - une fois l’installation faite, refaire l’ajout du serveur depuis SRV-Backup.

    Job de srv-fic1 : stockage basé sur disque, méthode basée sur agent, nom `srv-fic1 job`, description vide, type complète, même option de complète initiale, et vérifier le démarrage immédiat.

    ## Énoncé — Sauvegarde et restauration Backup Exec

    Avoir suivi les modules 1 et 2 et réalisé le TP précédent. Durée estimée : 1 heure.

    Objectifs : restaurer un utilisateur de l’annuaire ; créer un partage NTFS pour y stocker les sauvegardes ; créer une sauvegarde dupliquée.

    - Après vérification de la sauvegarde complète srv-ad1 : s’il n’y a pas d’erreur, se connecter sur srv-ad1, supprimer l’utilisateur créé au début du TP précédent, puis depuis Backup Exec effectuer une restauration granulaire de cet utilisateur seulement. Tester ensuite une connexion avec cet utilisateur.
    - Sur srv-fic1, ajouter un disque de 45 Go. Y créer un dossier partagé nommé `backup-fic1`.
    - Sur srv-backup, ajouter le partage `backup-fic1` au pool de stockage. Modifier le job srv-ad1 : après une sauvegarde complète, dupliquer vers `backup-fic1` ; après une sauvegarde incrémentale, dupliquer aussi vers `backup-fic1`. L’énoncé écrit : « le doit job doit effectuer une duplication ». La phrase est conservée. Avec l’ajout du stockage, faire attention aux paramètres de stockage des jobs. Relancer une sauvegarde complète à la fin de la modification.

    Corrections des deux TP : **Inexistant**.

=== "Cours Optimisé IA"

    ## Objectifs

    - Choisir une complète, une différentielle ou une incrémentale en connaissant le prix de la restauration.
    - Lire une rotation GFS de 21 bandes sans inventer de bande manquante.
    - Installer Backup Exec sur la maquette, poser le disque iSCSI et lancer les deux jobs.
    - Restaurer un seul utilisateur, puis dupliquer les jeux vers un second stockage.

    ## 1. Chaud ou froid

    | Question utile | À chaud | À froid |
    |---|---|---|
    | Les utilisateurs continuent-ils ? | Oui | Non, le service est interrompu |
    | Mise en œuvre | Complexe | Simple |
    | Restauration | Le support ne la dit pas « facile » | Facile, selon le support |
    | Données pendant la copie | Accessibles et modifiables | Inaccessibles |

    Le choix se fait avant le produit. Une base ouverte relève plutôt du cas « à chaud » : le module renvoie alors à l’outil du SGBD, pas à une copie de fichiers au hasard.

    ## 2. Le bit qui décide

    **Illustration IA / externe au cours — cycle du bit d’archive décrit par le support.**

    ```mermaid
    flowchart LR
        A["Fichier d’origine · bit 0"] --> B["Création, modification ou fermeture · bit 1"]
        B --> C["Sauvegarde"]
        C --> D["Complète ou incrémentale · bit remis à 0"]
        C --> E["Différentielle · bit laissé à 1"]
    ```

    | Méthode | Ce qu’elle prend | Bit après la copie | Restauration |
    |---|---|---|---|
    | Complète | Tout, sans consulter le bit pour choisir | Remis à 0 | La plus simple et la plus fiable |
    | Différentielle, cumulative, T1 | Bit à 1 depuis la dernière complète | Laissé à 1 | Complète + dernière différentielle |
    | Incrémentale | Bit à 1 depuis la dernière copie | Remis à 0 | Complète + toutes les incrémentales, dans l’ordre |

    Le système de date du support compare création ou modification à la date de la dernière sauvegarde. Il le présente comme plus simple que le bit. Il ne donne pas de commande Unix dans ce module.

    La synthèse du support dit la différentielle « volumineuse » et l’incrémentale « la plus faible » en espace, mais « modérée / longue » à restaurer. La différentielle est « plus fiable » que l’incrémentale. Si un seul support sert à la différentielle, le support signale l’absence de rémanence.

    ## 3. Vingt et une bandes

    Fils : quatre bandes quotidiennes recyclées. Père : hebdomadaire, cinq semaines. Grand-père : mensuel, douze mois. Le support annonce environ 21 bandes pour cinq jours, et environ 23 pour sept jours. Le schéma légendé « 21 bandes » est celui du tableau de l’onglet Cours Original. La bande 5 revient en père à la semaine 7 : c’est le recyclage dessiné, pas une bande oubliée.

    ## 4. Bases de données

    Le support refuse une méthode unique. Il cite SQL Server Management Studio, un export MySQL vers `DUMP.sql`, et RMAN pour Oracle avec une incrémentale de niveau 0, des sections de 512 Mo et les archives de journalisation. PostgreSQL, MongoDB et Cassandra sont des exemples de familles, sans commande.

    Complément de lecture, externe au support : les commandes exactes de `mysqldump` et de l’import MySQL dépendent du compte et du mode d’authentification du serveur. Le support montre des exemples de syntaxe ; cette fiche ne transforme pas ces exemples en secret de connexion. [mysqldump dans la documentation MySQL](https://dev.mysql.com/doc/refman/8.4/en/mysqldump.html)

    ## 5. Restaurer, c’est le test

    La phrase du support est la consigne de laboratoire : une sauvegarde non restaurée n’est pas un plan complet.

    | Destination | Intérêt dit par le support | Risque |
    |---|---|---|
    | Emplacement d’origine | Retour direct | Écrase les données actuelles |
    | Autre dossier du même système | Le plus courant, protège de l’écrasement | Il faut ensuite recopier ce qui est validé |
    | Autre système | Contrôle, manque de place, VM complète | L’architecture doit rester compatible |
    | Ancienne version | Versionning | Le support ne décrit pas l’outil |

    Bare metal, dans l’ordre du support : même architecture, image, puis le delta entre l’image et la date voulue. Le mot « palier » de la diapositive est conservé pour le problème de stockage : le support l’emploie ainsi.

    ## 6. TP guidé — Backup Exec

    Durée annoncée : 3 heures. Setup fourni par le formateur, non publié sur ce site. Correction : **Inexistant**.

    1. Sur srv-ad1, créer un utilisateur de test et ouvrir une session avec lui. Noter le nom : le TP suivant le supprime.
    2. Sur srv-backup, installation personnalisée, locale, en français. Passer la vérification même avec des avertissements. Passer l’ajout de licence et valider l’infobulle. Options : valeurs par défaut, Advanced Disk-based Backup, fonction NDMP. Compte de service : admin du domaine. SQL Express local.
    3. Pendant l’installation, initiateur iSCSI vers `192.168.30.1` port `3260`, connexion par défaut, puis formater le disque de 80 Go.
    4. Stockage sur disque, nom `backup`, description `backup sur nas`, emplacement iSCSI, 4 écritures simultanées.
    5. Ajouter Srv-ad1, agent à mettre à niveau, job `srv-ad1 job`, complète puis incrémentale, avec une complète initiale en plus de la planification. La complète doit démarrer tout de suite.
    6. Ajouter Srv-fic1 de la même façon. En cas de `0xe00086ce`, copier le dossier Agents vers `C:\` de la cible par `c$`, lancer `C:\Agents\RAWSX64\setup.exe`, puis recommencer l’ajout depuis srv-backup.
    7. Job `srv-fic1 job`, complète seulement, complète initiale, démarrage immédiat.

    ## 7. TP guidé — restauration granulaire et duplication

    Durée annoncée : 1 heure. Correction : **Inexistant**.

    1. Contrôler que la complète de srv-ad1 n’a pas d’erreur. Sinon, ne pas supprimer l’utilisateur.
    2. Supprimer l’utilisateur de test sur srv-ad1.
    3. Restauration granulaire Backup Exec de cet utilisateur seul, puis ouverture de session pour prouver le retour.
    4. Sur srv-fic1, disque de 45 Go et partage `backup-fic1`.
    5. Ajouter ce partage au pool. Le job srv-ad1 doit dupliquer après la complète et après l’incrémentale. L’énoncé répète « doit » : « le doit job doit ». Lire la consigne comme une duplication après chaque type.
    6. Vérifier que les jobs pointent encore vers le bon stockage après l’ajout du second espace.
    7. Relancer une complète.

    ## À retenir

    La complète remet le bit à zéro et simplifie la restauration. La différentielle laisse le bit à 1 et se restaure avec la dernière complète. L’incrémentale remet le bit à 0 et exige toute la chaîne. Le laboratoire Backup Exec enchaîne une complète et une incrémentale sur le contrôleur, une complète sur le serveur de fichiers, puis une restauration d’un seul compte et une duplication.

    ## Mini-quiz — 5 questions {#mini-quiz}

    1. Quel bit laisse la différentielle après la copie ?
    2. Pourquoi le support juge-t-il l’incrémentale moins fiable à la restauration ?
    3. Combien de bandes le schéma GFS sur 5 jours annonce-t-il ?
    4. Quel port iSCSI l’énoncé laisse-t-il par défaut ?
    5. Que faire si l’agent Backup Exec renvoie `0xe00086ce` ?

    ??? success "Réponses commentées"

        1. Il le laisse à 1. Seules la complète et l’incrémentale le remettent à 0.
        2. La restauration demande toutes les sauvegardes de la chaîne. Le support cite le temps, la complexité et la fiabilité.
        3. Environ 21 bandes. Le schéma est légendé « 21 bandes ».
        4. 3260, vers 192.168.30.1.
        5. Copier le dossier Agents sur `C:\` de la cible, lancer `RAWSX64\setup.exe`, puis refaire l’ajout depuis srv-backup.

    ## Anomalies et choix

    - Graphies « incrémentale » et « incrémentielle » conservées.
    - « le doit job doit » conservé dans l’onglet Cours Original, lu comme une duplication obligatoire.
    - Descriptions de jobs vides dans l’énoncé : laissées vides.
    - Démonstrations et corrections : **Inexistant**.
    - Alignement des deux colonnes grand-père : lecture du schéma, signalée dans le tableau.
