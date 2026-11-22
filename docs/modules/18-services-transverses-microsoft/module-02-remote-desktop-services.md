# Module 02 — Remote Desktop Services

Semaine du 16 au 20 novembre 2026. Les vidéos citées par les énoncés sont **Inexistant**.

[Travaux](../../tp/18-services-transverses-microsoft/module-02/index.md) · [Révision](../../revision/18-services-transverses-microsoft/module-02.md) · [Kahoot — 20 questions](../../kahoot/18-services-transverses-microsoft-module-02.md)

=== "Cours Original"

    ## Objectifs

    - Identifier les composants et protocoles associés aux services de bureau à distance.
    - Mettre en œuvre les services de bureau à distance.

    ## Principe de fonctionnement

    Dans le modèle client lourd, les applications sont installées sur les postes de travail des utilisateurs.

    - La puissance de ceux-ci impacte le fonctionnement de l’application.
    - La gestion des applications est à faire sur les postes.

    Le schéma de l’infrastructure décentralisée place la gestion, les traitements et applications, et les ressources sur les postes.

    Dans le modèle client léger, les utilisateurs peuvent travailler depuis de simples terminaux.

    - L’installation, la configuration et la gestion des applications sont réalisées sur les serveurs les hébergeant.
    - La puissance nécessaire est fournie par les serveurs.

    Le schéma de l’infrastructure centralisée relie des terminaux / clients légers aux traitements et applications, à la gestion et aux ressources.

    ## Échanges de flux

    Dans une infrastructure client léger :

    - une partie et/ou la totalité des outils sont déportées vers les serveurs ;
    - le support de transmission utilisé est le réseau ;
    - le protocole utilisé pour les échanges de flux dépend de la solution choisie.

    Le schéma oppose les périphériques d’entrée (clavier/souris) et de sortie (écran), reliés par le réseau.

    ## Avantages du client léger

    - Pour réduire les coûts : coût d’acquisition du matériel et de maintenance, consommation énergétique.
    - Pour un meilleur service : simplification du support et du déploiement.
    - En réponse à des contraintes spécifiques : desserte réseau limitée, milieux hostiles.
    - Accroître la sécurité de l’infrastructure : limite les données locales et la propagation des virus.

    ## Limites d’une infrastructure centralisée

    - Attention à la criticité des serveurs : l’incidence de l’indisponibilité de serveurs peut être accrue.
    - Dépendance d’une desserte réseau disponible et fiable.
    - Non adapté aux applications utilisées par un seul utilisateur.
    - Attention à l’impact sur l’environnement de travail des utilisateurs. Un accompagnement est nécessaire.

    ## Services apportés par RDS

    Le service RDS permet de mettre à disposition des utilisateurs :

    - un environnement de bureau complet ou des applications déportées ;
    - une ou plusieurs machines virtuelles hébergées (VDI).

    ## Caractéristiques du service

    Le service RDS est un service multisession et multi-utilisateurs. Il permet des accès multiples à des environnements dédiés.

    | Sigle | Sens écrit dans le support |
    |---|---|
    | RDS | Remote Desktop Services : les services d’accès distant. Rôle à installer sur un serveur Microsoft afin de fournir à de multiples utilisateurs des environnements de travail. |
    | RDP | Remote Desktop Protocol : protocole d’accès distant. Protocole utilisé afin de véhiculer via le réseau des informations entre un serveur d’accès distant et ses clients. |

    ## Principales solutions

    Lorsque la décision de mise en place d’une architecture client léger est prise, il reste à déterminer sur quels outils celle-ci s’appuiera. Parmi les solutions disponibles sur le marché :

    | Solution | Éditeur |
    |---|---|
    | Citrix Virtual Apps and Desktops | Citrix |
    | Remote Desktop Services | Microsoft |
    | Parallels Remote Application Server | Parallels |
    | VMware Horizon | VMware |

    ## Réflexion préalable à l’installation

    Avant de procéder à l’installation du service, la connaissance des étapes et éléments prenant part au processus est indispensable. Les diapositives suivantes illustrent le type et le scénario de déploiement, puis les rôles et services de rôles RDS. Avant tout déploiement vous devez avoir déterminé quels serveurs RDS fourniront quels services.

    ## Type et scénario de déploiement

    | Type | Usage écrit |
    |---|---|
    | Déploiement standard | Utilisé pour déployer le service RDS sur un ensemble de serveurs (permet le ciblage des services de rôle sur les serveurs souhaités). |
    | Démarrage rapide | Utilisé pour déployer les services RDS sur un serveur unique. |

    | Scénario | Usage écrit |
    |---|---|
    | Déploiement de bureaux basés sur une session | Le service RDS ainsi configuré permettra l’utilisation de bureaux virtuels publiés et d’applications publiées. |
    | Déploiement de bureaux basés sur un ordinateur virtuel | Permet de mettre en place une solution de VDI afin de mettre à disposition des utilisateurs des machines virtuelles complètes via le service RDS. |

    ## Services de rôle RDS

    Le rôle RDS est réparti sur cinq services. Ces services de rôles peuvent être assurés par un même serveur RDS ou répartis sur plusieurs serveurs RDS. Les quatre sélectionnés sont nécessaires au fonctionnement d’une infrastructure RDS de bureaux virtuels et d’applications.

    ## Processus d’installation

    - Installer sur les serveurs de l’infrastructure RDS le rôle des services de bureau à distance, ainsi que les services de rôle souhaités.
    - À l’issue des installations, sélectionner un type de déploiement (standard ou rapide) puis définir un scénario de déploiement.

    ## Démonstration

    Installation du rôle RDS.

    ## Outils de gestion du service

    Depuis Windows Server 2012, les composants graphiques de gestion du rôle sont intégrés au gestionnaire de serveur.

    ![Visuel externe : vue d’ensemble du déploiement RDS dans le gestionnaire de serveur](../../assets/images/services-transverses-microsoft/m2s-p08-01.webp)

    Le module RemoteDesktop permet la gestion exhaustive du service RDS dans l’environnement PowerShell. Principales cmdlets pour le déploiement et la configuration du service :

    | Cmdlet | Rôle écrit |
    |---|---|
    | `New-RDSessionDeployment` | Déploiement et configuration des services de rôle RDS pour les bureaux basés sur une session. |
    | `New-RDSessionCollection` | Création d’une collection. |
    | `New-RDRemoteApp` | Publication d’une application RemoteApp. |

    Ces deux derniers éléments sont détaillés dans les diapositives suivantes.

    ## Création d’une collection

    À l’issue du processus d’installation, la création d’une collection permet de regrouper un ensemble de serveurs fournissant des services ciblés. La configuration de collection est nécessaire pour la fourniture du service de bureaux distants et pour la publication d’applications. Elle peut se configurer depuis le Gestionnaire de serveur.

    ## Client d’accès

    Il existe différents clients d’accès. L’outil Connexion Bureau à distance est intégré directement aux systèmes Microsoft. Le bouton Afficher les options permet de configurer notamment l’utilisation de ressources locales et l’utilisation d’écrans multiples.

    ![Visuel externe : Connexion Bureau à distance, options générales](../../assets/images/services-transverses-microsoft/m2s-p10-02.webp)

    ## Gestion des connexions

    Depuis le Gestionnaire de serveur, sur le rôle RDS / Collections, cibler la collection souhaitée. Dans la partie CONNEXIONS, les utilisateurs connectés sont listés. Des actions sont possibles via le clic droit sur un utilisateur.

    ## Démonstration

    Utilisation du bureau à distance.

    ## TP

    Mise en œuvre d’un bureau à distance. Module 2 - Atelier 2.

    ## Conclusion

    - Vous connaissez les composants d’une infrastructure de services de Bureau à distance.
    - Vous savez déployer les rôles RDS essentiels et les gérer via les interfaces dédiées.
    - Vous maîtrisez le concept de COLLECTION, élément indispensable avant tout déploiement d’une session à distance.

=== "Cours Optimisé IA"

    Les parties ci-dessous reprennent le cours original, dans le même ordre. Les encadrés et les schémas répètent ses formulations.

    ## Parcours de lecture

    1. Objectifs
    2. Principe de fonctionnement
    3. Échanges de flux
    4. Avantages du client léger
    5. Limites d’une infrastructure centralisée
    6. Services apportés par RDS
    7. Caractéristiques du service
    8. Principales solutions
    9. Réflexion préalable à l’installation
    10. Type et scénario de déploiement
    11. Services de rôle RDS
    12. Processus d’installation
    13. Démonstration
    14. Outils de gestion du service
    15. Création d’une collection
    16. Client d’accès
    17. Gestion des connexions
    18. Démonstration
    19. TP
    20. Conclusion

    **Visuel externe**

    ```mermaid
    flowchart TD
        N1["Objectifs"]
        N2["Principe de fonctionnement"]
        N3["Échanges de flux"]
        N4["Avantages du client léger"]
        N5["Limites d’une infrastructure centralisée"]
        N6["Services apportés par RDS"]
        N7["Caractéristiques du service"]
        N8["Principales solutions"]
        N9["Réflexion préalable à l’installation"]
        N10["Type et scénario de déploiement"]
        N11["Services de rôle RDS"]
        N12["Processus d’installation"]
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

    ## Objectifs

    !!! note "À retenir"
        Identifier les composants et protocoles associés aux services de bureau à distance.

    - Identifier les composants et protocoles associés aux services de bureau à distance.
    - Mettre en œuvre les services de bureau à distance.

    ## Principe de fonctionnement

    !!! note "À retenir"
        Dans le modèle client lourd, les applications sont installées sur les postes de travail des utilisateurs.

    **Visuel externe**

    ```mermaid
    flowchart LR
        N1["La puissance de ceux-ci impacte le fonctionnement de l’application."]
        N2["La gestion des applications est à faire sur les postes."]
        N3["La puissance nécessaire est fournie par les serveurs."]
        N1 --> N2
        N2 --> N3
    ```

    Dans le modèle client lourd, les applications sont installées sur les postes de travail des utilisateurs.

    - La puissance de ceux-ci impacte le fonctionnement de l’application.
    - La gestion des applications est à faire sur les postes.

    Le schéma de l’infrastructure décentralisée place la gestion, les traitements et applications, et les ressources sur les postes.

    Dans le modèle client léger, les utilisateurs peuvent travailler depuis de simples terminaux.

    - L’installation, la configuration et la gestion des applications sont réalisées sur les serveurs les hébergeant.
    - La puissance nécessaire est fournie par les serveurs.

    Le schéma de l’infrastructure centralisée relie des terminaux / clients légers aux traitements et applications, à la gestion et aux ressources.

    ## Échanges de flux

    !!! note "À retenir"
        Dans une infrastructure client léger : une partie et/ou la totalité des outils sont déportées vers les serveurs ; le support de transmission utilisé est le réseau ; le protocole utilisé pour les échanges de flux dépend de la solution choisie.

    **Visuel externe**

    ```mermaid
    flowchart LR
        N1["une partie et/ou la totalité des outils sont déportées vers les serveurs ;"]
        N2["le support de transmission utilisé est le réseau ;"]
        N3["le protocole utilisé pour les échanges de flux dépend de la solution choisie."]
        N1 --> N2
        N2 --> N3
    ```

    Dans une infrastructure client léger :

    - une partie et/ou la totalité des outils sont déportées vers les serveurs ;
    - le support de transmission utilisé est le réseau ;
    - le protocole utilisé pour les échanges de flux dépend de la solution choisie.

    Le schéma oppose les périphériques d’entrée (clavier/souris) et de sortie (écran), reliés par le réseau.

    ## Avantages du client léger

    !!! note "À retenir"
        Pour réduire les coûts : coût d’acquisition du matériel et de maintenance, consommation énergétique.

    - Pour réduire les coûts : coût d’acquisition du matériel et de maintenance, consommation énergétique.
    - Pour un meilleur service : simplification du support et du déploiement.
    - En réponse à des contraintes spécifiques : desserte réseau limitée, milieux hostiles.
    - Accroître la sécurité de l’infrastructure : limite les données locales et la propagation des virus.

    ## Limites d’une infrastructure centralisée

    !!! note "À retenir"
        Attention à la criticité des serveurs : l’incidence de l’indisponibilité de serveurs peut être accrue.

    !!! warning "Attention"
        Attention à la criticité des serveurs : l’incidence de l’indisponibilité de serveurs peut être accrue.

    - Attention à la criticité des serveurs : l’incidence de l’indisponibilité de serveurs peut être accrue.
    - Dépendance d’une desserte réseau disponible et fiable.
    - Non adapté aux applications utilisées par un seul utilisateur.
    - Attention à l’impact sur l’environnement de travail des utilisateurs. Un accompagnement est nécessaire.

    ## Services apportés par RDS

    !!! note "À retenir"
        Le service RDS permet de mettre à disposition des utilisateurs : un environnement de bureau complet ou des applications déportées ; une ou plusieurs machines virtuelles hébergées (VDI).

    Le service RDS permet de mettre à disposition des utilisateurs :

    - un environnement de bureau complet ou des applications déportées ;
    - une ou plusieurs machines virtuelles hébergées (VDI).

    ## Caractéristiques du service

    !!! note "À retenir"
        Le service RDS est un service multisession et multi-utilisateurs.

    Le service RDS est un service multisession et multi-utilisateurs. Il permet des accès multiples à des environnements dédiés.

    | Sigle | Sens écrit dans le support |
    |---|---|
    | RDS | Remote Desktop Services : les services d’accès distant. Rôle à installer sur un serveur Microsoft afin de fournir à de multiples utilisateurs des environnements de travail. |
    | RDP | Remote Desktop Protocol : protocole d’accès distant. Protocole utilisé afin de véhiculer via le réseau des informations entre un serveur d’accès distant et ses clients. |

    ## Principales solutions

    Lorsque la décision de mise en place d’une architecture client léger est prise, il reste à déterminer sur quels outils celle-ci s’appuiera. Parmi les solutions disponibles sur le marché :

    | Solution | Éditeur |
    |---|---|
    | Citrix Virtual Apps and Desktops | Citrix |
    | Remote Desktop Services | Microsoft |
    | Parallels Remote Application Server | Parallels |
    | VMware Horizon | VMware |

    ## Réflexion préalable à l’installation

    Avant de procéder à l’installation du service, la connaissance des étapes et éléments prenant part au processus est indispensable. Les diapositives suivantes illustrent le type et le scénario de déploiement, puis les rôles et services de rôles RDS. Avant tout déploiement vous devez avoir déterminé quels serveurs RDS fourniront quels services.

    ## Type et scénario de déploiement

    | Type | Usage écrit |
    |---|---|
    | Déploiement standard | Utilisé pour déployer le service RDS sur un ensemble de serveurs (permet le ciblage des services de rôle sur les serveurs souhaités). |
    | Démarrage rapide | Utilisé pour déployer les services RDS sur un serveur unique. |

    | Scénario | Usage écrit |
    |---|---|
    | Déploiement de bureaux basés sur une session | Le service RDS ainsi configuré permettra l’utilisation de bureaux virtuels publiés et d’applications publiées. |
    | Déploiement de bureaux basés sur un ordinateur virtuel | Permet de mettre en place une solution de VDI afin de mettre à disposition des utilisateurs des machines virtuelles complètes via le service RDS. |

    ## Services de rôle RDS

    Le rôle RDS est réparti sur cinq services. Ces services de rôles peuvent être assurés par un même serveur RDS ou répartis sur plusieurs serveurs RDS. Les quatre sélectionnés sont nécessaires au fonctionnement d’une infrastructure RDS de bureaux virtuels et d’applications.

    ## Processus d’installation

    - Installer sur les serveurs de l’infrastructure RDS le rôle des services de bureau à distance, ainsi que les services de rôle souhaités.
    - À l’issue des installations, sélectionner un type de déploiement (standard ou rapide) puis définir un scénario de déploiement.

    ## Démonstration

    Installation du rôle RDS.

    ## Outils de gestion du service

    Depuis Windows Server 2012, les composants graphiques de gestion du rôle sont intégrés au gestionnaire de serveur.

    ![Visuel externe : vue d’ensemble du déploiement RDS dans le gestionnaire de serveur](../../assets/images/services-transverses-microsoft/m2s-p08-01.webp)

    Le module RemoteDesktop permet la gestion exhaustive du service RDS dans l’environnement PowerShell. Principales cmdlets pour le déploiement et la configuration du service :

    | Cmdlet | Rôle écrit |
    |---|---|
    | `New-RDSessionDeployment` | Déploiement et configuration des services de rôle RDS pour les bureaux basés sur une session. |
    | `New-RDSessionCollection` | Création d’une collection. |
    | `New-RDRemoteApp` | Publication d’une application RemoteApp. |

    Ces deux derniers éléments sont détaillés dans les diapositives suivantes.

    ## Création d’une collection

    À l’issue du processus d’installation, la création d’une collection permet de regrouper un ensemble de serveurs fournissant des services ciblés. La configuration de collection est nécessaire pour la fourniture du service de bureaux distants et pour la publication d’applications. Elle peut se configurer depuis le Gestionnaire de serveur.

    ## Client d’accès

    Il existe différents clients d’accès. L’outil Connexion Bureau à distance est intégré directement aux systèmes Microsoft. Le bouton Afficher les options permet de configurer notamment l’utilisation de ressources locales et l’utilisation d’écrans multiples.

    ![Visuel externe : Connexion Bureau à distance, options générales](../../assets/images/services-transverses-microsoft/m2s-p10-02.webp)

    ## Gestion des connexions

    Depuis le Gestionnaire de serveur, sur le rôle RDS / Collections, cibler la collection souhaitée. Dans la partie CONNEXIONS, les utilisateurs connectés sont listés. Des actions sont possibles via le clic droit sur un utilisateur.

    ## Démonstration

    Utilisation du bureau à distance.

    ## TP

    Mise en œuvre d’un bureau à distance. Module 2 - Atelier 2.

    ## Conclusion

    - Vous connaissez les composants d’une infrastructure de services de Bureau à distance.
    - Vous savez déployer les rôles RDS essentiels et les gérer via les interfaces dédiées.
    - Vous maîtrisez le concept de COLLECTION, élément indispensable avant tout déploiement d’une session à distance.

    ## Fiche de synthèse

    Les lignes reprennent les titres du cours et la première phrase de chaque partie.

    | Partie | Repère du cours |
    | --- | --- |
    | Objectifs | Identifier les composants et protocoles associés aux services de bureau à distance. |
    | Principe de fonctionnement | Dans le modèle client lourd, les applications sont installées sur les postes de travail des utilisateurs. |
    | Échanges de flux | Dans une infrastructure client léger : une partie et/ou la totalité des outils sont déportées vers les serveurs ; le support de transmission utilisé est le réseau ; le protocole… |
    | Avantages du client léger | Pour réduire les coûts : coût d’acquisition du matériel et de maintenance, consommation énergétique. |
    | Limites d’une infrastructure centralisée | Attention à la criticité des serveurs : l’incidence de l’indisponibilité de serveurs peut être accrue. |
    | Services apportés par RDS | Le service RDS permet de mettre à disposition des utilisateurs : un environnement de bureau complet ou des applications déportées ; une ou plusieurs machines virtuelles hébergée… |
    | Caractéristiques du service | Le service RDS est un service multisession et multi-utilisateurs. |
    | Principales solutions | Lorsque la décision de mise en place d’une architecture client léger est prise, il reste à déterminer sur quels outils celle-ci s’appuiera. |
    | Réflexion préalable à l’installation | Avant de procéder à l’installation du service, la connaissance des étapes et éléments prenant part au processus est indispensable. |
    | Services de rôle RDS | Le rôle RDS est réparti sur cinq services. |
    | Processus d’installation | Installer sur les serveurs de l’infrastructure RDS le rôle des services de bureau à distance, ainsi que les services de rôle souhaités. |
    | Outils de gestion du service | Depuis Windows Server 2012, les composants graphiques de gestion du rôle sont intégrés au gestionnaire de serveur. |
    | Création d’une collection | À l’issue du processus d’installation, la création d’une collection permet de regrouper un ensemble de serveurs fournissant des services ciblés. |
    | Client d’accès | L’outil Connexion Bureau à distance est intégré directement aux systèmes Microsoft. |
    | Gestion des connexions | Depuis le Gestionnaire de serveur, sur le rôle RDS / Collections, cibler la collection souhaitée. |
    | Conclusion | Vous connaissez les composants d’une infrastructure de services de Bureau à distance. |
