# Module 01 — Mise en place de l’infrastructure

Semaine du 16 au 20 novembre 2026. Les vidéos citées par les énoncés sont **Inexistant**.

[Travaux](../../tp/18-services-transverses-microsoft/module-01/index.md) · [Révision](../../revision/18-services-transverses-microsoft/module-01.md) · [Kahoot — 20 questions](../../kahoot/18-services-transverses-microsoft-module-01.md)

Active Directory, DNS et DHCP. Cinq machines sur Vmnet 10.

=== "Cours Original"

    ## Objectifs

    - Identifier les prérequis logiciels indispensables à la mise en œuvre des services RDS et WDS / MDT.
    - Mise en place du socle ADDS / DHCP / DNS.

    ## Des composants de base

    - Active Directory pour la gestion centralisée des utilisateurs et ressources.
    - DNS pour la résolution des noms en adresses IP.
    - DHCP pour la fourniture d’adresses IP.

    Un vocabulaire à maîtriser :

    | Composant | Termes |
    |---|---|
    | Active Directory | Forêt, domaine, site, utilisateurs, groupes, stratégies, … |
    | DNS | Résolution directe, résolution inverse, enregistrements, zones, … |
    | DHCP | Bail, étendue, réservation, … |

    ## Les composantes du domaine

    Le schéma oppose un poste en WorkGroup et un domaine Active Directory. Il nomme un poste client, un serveur autonome, le contrôleur de domaine CD1, le rôle ADDS et un serveur membre.

    Un domaine Active Directory est un ensemble d’ordinateurs en réseau qui partagent une base de données commune. Un domaine est administré comme un ensemble, régi par des règles et procédures communes.

    ### Le contrôleur de domaine

    Les contrôleurs d’un domaine AD sont les serveurs qui assurent la gestion du domaine. Ils assurent les tâches d’hébergement et de gestion de la base AD, ainsi que l’authentification.

    ## Le bail DHCP

    Ensemble des informations qu’un serveur DHCP transmet à son client. Le schéma indique qu’il contient :

    - une durée ;
    - d’autres paramètres ;
    - une adresse IP ;
    - un masque.

    ## L’étendue DHCP

    L’exemple du support caractérise l’étendue par un nom, des exclusions, une plage d’adresses et une durée.

    | Élément | Valeur écrite |
    |---|---|
    | Nom | LAN_Serveurs |
    | Exclusions | 192.168.0.5 à 192.168.0.10 |
    | Plage d’adresses | 192.168.0.1 à 192.168.0.254 /24 |
    | Durée du bail | 2 jours |

    ## Le rôle du DNS résolveur

    C’est le partenaire désigné des équipements clients du service de résolution de noms. Il effectue des requêtes auprès d’autres serveurs DNS afin de résoudre les requêtes de ses clients. Il ne gère pas d’espace de noms.

    ## Le rôle du DNS hébergeur

    Il gère un ou plusieurs espaces de noms. Il a pour mission de répondre aux requêtes relatives à l’espace de nom qu’il gère. Il fait autorité pour le ou les espace(s) de nom(s) qu’il gère.

    ## Outils de gestion

    Des outils graphiques, et des commandes PowerShell.

    ```powershell
    # Création des OU pour objets
    New-ADOrganizationalUnit _Entreprise
    ## Variable localisation chemin dans AD
    $base = Get-ADOrganizationalUnit -Filter { name -like "_Ent*" }
    New-ADOrganizationalUnit Groupes -Path $base
    New-ADOrganizationalUnit Utilisateurs -Path $base
    New-ADOrganizationalUnit Ordinateurs -Path $base
    Get-ADOrganizationalUnit -filter * -SearchBase $base | ft name,DistinguishedName -AutoSize
    ```

    ## TP

    Active Directory. Module 1 – Atelier 1.

    ## Conclusion

    - Les prérequis sont maintenant présents et fonctionnels dans notre infrastructure.
    - Les services de bureau à distance et de déploiement vont pouvoir être installés.

=== "Cours Optimisé IA"

    Les parties ci-dessous reprennent le cours original, dans le même ordre. Les encadrés et les schémas répètent ses formulations.

    ## Parcours de lecture

    1. Objectifs
    2. Des composants de base
    3. Les composantes du domaine
    4. Le bail DHCP
    5. L’étendue DHCP
    6. Le rôle du DNS résolveur
    7. Le rôle du DNS hébergeur
    8. Outils de gestion
    9. TP
    10. Conclusion

    **Visuel externe**

    ```mermaid
    flowchart TD
        N1["Objectifs"]
        N2["Des composants de base"]
        N3["Les composantes du domaine"]
        N4["Le bail DHCP"]
        N5["L’étendue DHCP"]
        N6["Le rôle du DNS résolveur"]
        N7["Le rôle du DNS hébergeur"]
        N8["Outils de gestion"]
        N9["TP"]
        N10["Conclusion"]
        N1 --> N2
        N2 --> N3
        N3 --> N4
        N4 --> N5
        N5 --> N6
        N6 --> N7
        N7 --> N8
        N8 --> N9
        N9 --> N10
    ```

    ## Objectifs

    !!! note "À retenir"
        Identifier les prérequis logiciels indispensables à la mise en œuvre des services RDS et WDS / MDT.

    - Identifier les prérequis logiciels indispensables à la mise en œuvre des services RDS et WDS / MDT.
    - Mise en place du socle ADDS / DHCP / DNS.

    ## Des composants de base

    !!! note "À retenir"
        Active Directory pour la gestion centralisée des utilisateurs et ressources.

    **Visuel externe**

    ```mermaid
    flowchart LR
        N1["Active Directory pour la gestion centralisée des utilisateurs et ressources."]
        N2["DNS pour la résolution des noms en adresses IP."]
        N3["DHCP pour la fourniture d’adresses IP."]
        N1 --> N2
        N2 --> N3
    ```

    - Active Directory pour la gestion centralisée des utilisateurs et ressources.
    - DNS pour la résolution des noms en adresses IP.
    - DHCP pour la fourniture d’adresses IP.

    Un vocabulaire à maîtriser :

    | Composant | Termes |
    |---|---|
    | Active Directory | Forêt, domaine, site, utilisateurs, groupes, stratégies, … |
    | DNS | Résolution directe, résolution inverse, enregistrements, zones, … |
    | DHCP | Bail, étendue, réservation, … |

    ## Les composantes du domaine

    !!! note "À retenir"
        Le schéma oppose un poste en WorkGroup et un domaine Active Directory.

    Le schéma oppose un poste en WorkGroup et un domaine Active Directory. Il nomme un poste client, un serveur autonome, le contrôleur de domaine CD1, le rôle ADDS et un serveur membre.

    Un domaine Active Directory est un ensemble d’ordinateurs en réseau qui partagent une base de données commune. Un domaine est administré comme un ensemble, régi par des règles et procédures communes.

    ### Le contrôleur de domaine

    !!! note "À retenir"
        Les contrôleurs d’un domaine AD sont les serveurs qui assurent la gestion du domaine.

    Les contrôleurs d’un domaine AD sont les serveurs qui assurent la gestion du domaine. Ils assurent les tâches d’hébergement et de gestion de la base AD, ainsi que l’authentification.

    ## Le bail DHCP

    !!! note "À retenir"
        Ensemble des informations qu’un serveur DHCP transmet à son client.

    **Visuel externe**

    ```mermaid
    flowchart LR
        N1["une durée ;"]
        N2["d’autres paramètres ;"]
        N3["une adresse IP ;"]
        N4["un masque."]
        N1 --> N2
        N2 --> N3
        N3 --> N4
    ```

    Ensemble des informations qu’un serveur DHCP transmet à son client. Le schéma indique qu’il contient :

    - une durée ;
    - d’autres paramètres ;
    - une adresse IP ;
    - un masque.

    ## L’étendue DHCP

    !!! note "À retenir"
        L’exemple du support caractérise l’étendue par un nom, des exclusions, une plage d’adresses et une durée.

    L’exemple du support caractérise l’étendue par un nom, des exclusions, une plage d’adresses et une durée.

    | Élément | Valeur écrite |
    |---|---|
    | Nom | LAN_Serveurs |
    | Exclusions | 192.168.0.5 à 192.168.0.10 |
    | Plage d’adresses | 192.168.0.1 à 192.168.0.254 /24 |
    | Durée du bail | 2 jours |

    ## Le rôle du DNS résolveur

    !!! note "À retenir"
        C’est le partenaire désigné des équipements clients du service de résolution de noms.

    C’est le partenaire désigné des équipements clients du service de résolution de noms. Il effectue des requêtes auprès d’autres serveurs DNS afin de résoudre les requêtes de ses clients. Il ne gère pas d’espace de noms.

    ## Le rôle du DNS hébergeur

    !!! note "À retenir"
        Il gère un ou plusieurs espaces de noms.

    Il gère un ou plusieurs espaces de noms. Il a pour mission de répondre aux requêtes relatives à l’espace de nom qu’il gère. Il fait autorité pour le ou les espace(s) de nom(s) qu’il gère.

    ## Outils de gestion

    Des outils graphiques, et des commandes PowerShell.

    ```powershell
    # Création des OU pour objets
    New-ADOrganizationalUnit _Entreprise

    ## Variable localisation chemin dans AD

    $base = Get-ADOrganizationalUnit -Filter { name -like "_Ent*" }
    New-ADOrganizationalUnit Groupes -Path $base
    New-ADOrganizationalUnit Utilisateurs -Path $base
    New-ADOrganizationalUnit Ordinateurs -Path $base
    Get-ADOrganizationalUnit -filter * -SearchBase $base | ft name,DistinguishedName -AutoSize
    ```

    ## TP

    Active Directory. Module 1 – Atelier 1.

    ## Conclusion

    - Les prérequis sont maintenant présents et fonctionnels dans notre infrastructure.
    - Les services de bureau à distance et de déploiement vont pouvoir être installés.

    ## Fiche de synthèse

    Les lignes reprennent les titres du cours et la première phrase de chaque partie.

    | Partie | Repère du cours |
    | --- | --- |
    | Objectifs | Identifier les prérequis logiciels indispensables à la mise en œuvre des services RDS et WDS / MDT. |
    | Des composants de base | Active Directory pour la gestion centralisée des utilisateurs et ressources. |
    | Les composantes du domaine | Le schéma oppose un poste en WorkGroup et un domaine Active Directory. |
    | Le bail DHCP | Ensemble des informations qu’un serveur DHCP transmet à son client. |
    | L’étendue DHCP | L’exemple du support caractérise l’étendue par un nom, des exclusions, une plage d’adresses et une durée. |
    | Le rôle du DNS résolveur | C’est le partenaire désigné des équipements clients du service de résolution de noms. |
    | Le rôle du DNS hébergeur | Il gère un ou plusieurs espaces de noms. |
    | Outils de gestion | Des outils graphiques, et des commandes PowerShell. |
    | Variable localisation chemin dans AD | $base = Get-ADOrganizationalUnit -Filter ｛ name -like "_Ent*" ｝ New-ADOrganizationalUnit Groupes -Path $base New-ADOrganizationalUnit Utilisateurs -Path $base New-ADOrganization… |
    | Conclusion | Les prérequis sont maintenant présents et fonctionnels dans notre infrastructure. |
