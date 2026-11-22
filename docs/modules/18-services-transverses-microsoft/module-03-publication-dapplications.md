# Module 03 — Publication d’applications

Semaine du 16 au 20 novembre 2026. Les vidéos citées par les énoncés sont **Inexistant**.

[Travaux](../../tp/18-services-transverses-microsoft/module-03/index.md) · [Révision](../../revision/18-services-transverses-microsoft/module-03.md) · [Kahoot — 20 questions](../../kahoot/18-services-transverses-microsoft-module-03.md)

=== "Cours Original"

    ## Objectifs

    - Publier des applications via les services de Bureau à distance.
    - Gérer les connexions à distance.

    ## Principe de la publication d’applications

    La publication d’applications fait partie des services pris en charge par RDS. La solution RemoteApp rend transparent pour l’utilisateur le lancement d’applications depuis un serveur RDS. Le schéma de la diapositive est titré « Applications publiées ».

    ## Étapes de mise en œuvre

    Depuis le Gestionnaire de serveur, sur le rôle RDS / Collections, cibler la collection souhaitée. Dans la partie PROGRAMMES REMOTEAPP, choisir la tâche Publier des programmes RemoteApp.

    Depuis l’assistant, sélectionner dans la liste les programmes à publier. Le bouton Ajouter permet d’aller chercher un exécutable non listé.

    ![Visuel externe : assistant de sélection des programmes RemoteApp](../../assets/images/services-transverses-microsoft/m3s-p03-01.webp)

    ## Mise à disposition des programmes publiés

    Côté utilisateur, plusieurs méthodes peuvent être utilisées pour accéder à une application publiée :

    - depuis un navigateur via le portail Accès Bureau à distance par le Web (RD Web Access) ;
    - depuis le menu Démarrer avec le composant Connexions RemoteApp et Bureau à distance situé dans le panneau de configuration.

    ## Accès Bureau à distance par le Web

    Le service Accès Bureau à distance par le web (RDS-Web-Access) doit être installé. Il s’appuie sur IIS pour son fonctionnement. Une fois le service installé, l’accès du client au portail se fait via une connexion à `https://nom_du_serveur/RDWeb`. Une fois authentifié, l’utilisateur peut ensuite lancer l’application souhaitée.

    ## Connexions RemoteApp et Bureau à distance

    Lancer la console depuis le menu Démarrer ou le Panneau de configuration. Configurer l’URL de connexion avec la fonction Accéder aux programmes RemoteApp et aux services Bureau à distance :

    `https://nom_FQDN_du_serveur/RDWeb/Feed/webfeed.aspx`

    ![Visuel externe : saisie de l’URL de connexion RemoteApp](../../assets/images/services-transverses-microsoft/m3s-p04-02.webp)

    Les raccourcis RemoteApp apparaissent dans un répertoire Work Resources dans le menu Démarrer. Attention : pour que cela soit fonctionnel, le certificat serveur doit avoir été déployé sur le client.

    ## Démonstration

    Utilisation des RemoteApp.

    ## Configuration avancée des collections

    La configuration globale des applications publiées est accessible depuis les propriétés de la collection. Dans ces paramètres sont configurables :

    - les utilisateurs autorisés ;
    - les paramètres de session ;
    - les paramètres de connexion ;
    - les disques de profil utilisateur.

    Chaque application dispose également de ses propres propriétés.

    ![Visuel externe : propriétés générales d’une collection de sessions](../../assets/images/services-transverses-microsoft/m3s-p06-03.webp)

    ## Filtrage et restrictions

    - Depuis les propriétés de la collection pour configurer un ensemble de programmes.
    - Depuis les propriétés de publication du programme.

    ![Visuel externe : affectation d’utilisateurs d’un programme RemoteApp](../../assets/images/services-transverses-microsoft/m3s-p06-04.webp)

    ## TP

    Mise en œuvre des RemoteApp. Module 3 - Atelier 3.

    ## Pour aller plus loin

    Authentification unique (SSO) : configuration du serveur RDS par stratégie de domaine pour éviter la double authentification. Paramètre : Autoriser la délégation d’informations d’identification par défaut.

    Gestion de licences : des licences d’accès client (CAL) pour le service RDS sont nécessaires pour permettre aux utilisateurs de bénéficier de ce service. Cela nécessite le déploiement du rôle et l’utilisation de la console Gestionnaire de licences des services Bureau à distance.

    Rôle Passerelle des services Bureau à distance : permet l’accès à l’infrastructure RDS depuis l’extérieur via le protocole HTTPS. Rôle complémentaire à installer sur un serveur dédié. Le schéma place les clients, un pare-feu, RD Web Access, RD Gateway, un second pare-feu, le broker, les hôtes RDSH et RDVH, le stockage de fichiers, Active Directory et le serveur de licences.

    Rôle Service Broker pour les connexions Bureau à distance : suit les sessions utilisateurs d’un ensemble de serveurs RDS. Permet la répartition de charges et la reconnexion des utilisateurs à leur session existante.

    ## Conclusion

    - Vous savez mettre à disposition des applications avec les RemoteApps.
    - Vous êtes en mesure d’appliquer une restriction d’utilisation des RemoteApps (filtrage).

=== "Cours Optimisé IA"

    Les parties ci-dessous reprennent le cours original, dans le même ordre. Les encadrés et les schémas répètent ses formulations.

    ## Parcours de lecture

    1. Objectifs
    2. Principe de la publication d’applications
    3. Étapes de mise en œuvre
    4. Mise à disposition des programmes publiés
    5. Accès Bureau à distance par le Web
    6. Connexions RemoteApp et Bureau à distance
    7. Démonstration
    8. Configuration avancée des collections
    9. Filtrage et restrictions
    10. TP
    11. Pour aller plus loin
    12. Conclusion

    **Visuel externe**

    ```mermaid
    flowchart TD
        N1["Objectifs"]
        N2["Principe de la publication d’applications"]
        N3["Étapes de mise en œuvre"]
        N4["Mise à disposition des programmes publiés"]
        N5["Accès Bureau à distance par le Web"]
        N6["Connexions RemoteApp et Bureau à distance"]
        N7["Démonstration"]
        N8["Configuration avancée des collections"]
        N9["Filtrage et restrictions"]
        N10["TP"]
        N11["Pour aller plus loin"]
        N12["Conclusion"]
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
        Publier des applications via les services de Bureau à distance.

    - Publier des applications via les services de Bureau à distance.
    - Gérer les connexions à distance.

    ## Principe de la publication d’applications

    !!! note "À retenir"
        La publication d’applications fait partie des services pris en charge par RDS.

    La publication d’applications fait partie des services pris en charge par RDS. La solution RemoteApp rend transparent pour l’utilisateur le lancement d’applications depuis un serveur RDS. Le schéma de la diapositive est titré « Applications publiées ».

    ## Étapes de mise en œuvre

    !!! note "À retenir"
        Depuis le Gestionnaire de serveur, sur le rôle RDS / Collections, cibler la collection souhaitée.

    Depuis le Gestionnaire de serveur, sur le rôle RDS / Collections, cibler la collection souhaitée. Dans la partie PROGRAMMES REMOTEAPP, choisir la tâche Publier des programmes RemoteApp.

    Depuis l’assistant, sélectionner dans la liste les programmes à publier. Le bouton Ajouter permet d’aller chercher un exécutable non listé.

    ![Visuel externe : assistant de sélection des programmes RemoteApp](../../assets/images/services-transverses-microsoft/m3s-p03-01.webp)

    ## Mise à disposition des programmes publiés

    !!! note "À retenir"
        Côté utilisateur, plusieurs méthodes peuvent être utilisées pour accéder à une application publiée : depuis un navigateur via le portail Accès Bureau à distance par le Web (RD Web Access) ; depuis le menu Démarrer avec le composant Connexions RemoteApp et Bureau à distance situé dans le panneau de configuration.

    Côté utilisateur, plusieurs méthodes peuvent être utilisées pour accéder à une application publiée :

    - depuis un navigateur via le portail Accès Bureau à distance par le Web (RD Web Access) ;
    - depuis le menu Démarrer avec le composant Connexions RemoteApp et Bureau à distance situé dans le panneau de configuration.

    ## Accès Bureau à distance par le Web

    !!! note "À retenir"
        Le service Accès Bureau à distance par le web (RDS-Web-Access) doit être installé.

    Le service Accès Bureau à distance par le web (RDS-Web-Access) doit être installé. Il s’appuie sur IIS pour son fonctionnement. Une fois le service installé, l’accès du client au portail se fait via une connexion à `https://nom_du_serveur/RDWeb`. Une fois authentifié, l’utilisateur peut ensuite lancer l’application souhaitée.

    ## Connexions RemoteApp et Bureau à distance

    !!! note "À retenir"
        Lancer la console depuis le menu Démarrer ou le Panneau de configuration.

    !!! warning "Attention"
        Attention : pour que cela soit fonctionnel, le certificat serveur doit avoir été déployé sur le client.

    Lancer la console depuis le menu Démarrer ou le Panneau de configuration. Configurer l’URL de connexion avec la fonction Accéder aux programmes RemoteApp et aux services Bureau à distance :

    `https://nom_FQDN_du_serveur/RDWeb/Feed/webfeed.aspx`

    ![Visuel externe : saisie de l’URL de connexion RemoteApp](../../assets/images/services-transverses-microsoft/m3s-p04-02.webp)

    Les raccourcis RemoteApp apparaissent dans un répertoire Work Resources dans le menu Démarrer. Attention : pour que cela soit fonctionnel, le certificat serveur doit avoir été déployé sur le client.

    ## Démonstration

    Utilisation des RemoteApp.

    ## Configuration avancée des collections

    !!! note "À retenir"
        La configuration globale des applications publiées est accessible depuis les propriétés de la collection.

    **Visuel externe**

    ```mermaid
    flowchart LR
        N1["les utilisateurs autorisés ;"]
        N2["les paramètres de session ;"]
        N3["les paramètres de connexion ;"]
        N4["les disques de profil utilisateur."]
        N1 --> N2
        N2 --> N3
        N3 --> N4
    ```

    La configuration globale des applications publiées est accessible depuis les propriétés de la collection. Dans ces paramètres sont configurables :

    - les utilisateurs autorisés ;
    - les paramètres de session ;
    - les paramètres de connexion ;
    - les disques de profil utilisateur.

    Chaque application dispose également de ses propres propriétés.

    ![Visuel externe : propriétés générales d’une collection de sessions](../../assets/images/services-transverses-microsoft/m3s-p06-03.webp)

    ## Filtrage et restrictions

    - Depuis les propriétés de la collection pour configurer un ensemble de programmes.
    - Depuis les propriétés de publication du programme.

    ![Visuel externe : affectation d’utilisateurs d’un programme RemoteApp](../../assets/images/services-transverses-microsoft/m3s-p06-04.webp)

    ## TP

    Mise en œuvre des RemoteApp. Module 3 - Atelier 3.

    ## Pour aller plus loin

    Authentification unique (SSO) : configuration du serveur RDS par stratégie de domaine pour éviter la double authentification. Paramètre : Autoriser la délégation d’informations d’identification par défaut.

    Gestion de licences : des licences d’accès client (CAL) pour le service RDS sont nécessaires pour permettre aux utilisateurs de bénéficier de ce service. Cela nécessite le déploiement du rôle et l’utilisation de la console Gestionnaire de licences des services Bureau à distance.

    Rôle Passerelle des services Bureau à distance : permet l’accès à l’infrastructure RDS depuis l’extérieur via le protocole HTTPS. Rôle complémentaire à installer sur un serveur dédié. Le schéma place les clients, un pare-feu, RD Web Access, RD Gateway, un second pare-feu, le broker, les hôtes RDSH et RDVH, le stockage de fichiers, Active Directory et le serveur de licences.

    Rôle Service Broker pour les connexions Bureau à distance : suit les sessions utilisateurs d’un ensemble de serveurs RDS. Permet la répartition de charges et la reconnexion des utilisateurs à leur session existante.

    ## Conclusion

    - Vous savez mettre à disposition des applications avec les RemoteApps.
    - Vous êtes en mesure d’appliquer une restriction d’utilisation des RemoteApps (filtrage).

    ## Fiche de synthèse

    Les lignes reprennent les titres du cours et la première phrase de chaque partie.

    | Partie | Repère du cours |
    | --- | --- |
    | Objectifs | Publier des applications via les services de Bureau à distance. |
    | Principe de la publication d’applications | La publication d’applications fait partie des services pris en charge par RDS. |
    | Étapes de mise en œuvre | Depuis le Gestionnaire de serveur, sur le rôle RDS / Collections, cibler la collection souhaitée. |
    | Mise à disposition des programmes publiés | Côté utilisateur, plusieurs méthodes peuvent être utilisées pour accéder à une application publiée : depuis un navigateur via le portail Accès Bureau à distance par le Web (RD W… |
    | Accès Bureau à distance par le Web | Le service Accès Bureau à distance par le web (RDS-Web-Access) doit être installé. |
    | Connexions RemoteApp et Bureau à distance | Lancer la console depuis le menu Démarrer ou le Panneau de configuration. |
    | Configuration avancée des collections | La configuration globale des applications publiées est accessible depuis les propriétés de la collection. |
    | Filtrage et restrictions | Depuis les propriétés de la collection pour configurer un ensemble de programmes. |
    | Pour aller plus loin | Authentification unique (SSO) : configuration du serveur RDS par stratégie de domaine pour éviter la double authentification. |
    | Conclusion | Vous savez mettre à disposition des applications avec les RemoteApps. |
