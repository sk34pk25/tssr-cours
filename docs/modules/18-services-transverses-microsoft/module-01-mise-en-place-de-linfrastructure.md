# Module 01 — Mise en place de l’infrastructure

Semaine du 16 au 20 novembre 2026. Les vidéos citées par les énoncés sont **Inexistant**.

[Travaux](../../tp/18-services-transverses-microsoft/module-01/index.md) · [Révision](../../revision/18-services-transverses-microsoft/module-01.md) · [Kahoot préparé](../../kahoot/18-services-transverses-microsoft-module-01.md)

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

    Le support pose le socle, puis renvoie à l’atelier 1. Aucun composant n’est ajouté.

    1. RDS et WDS / MDT supposent ADDS, DNS et DHCP.
    2. Retenir le vocabulaire : forêt, domaine, site, zone, enregistrement, bail, étendue, réservation.
    3. Un domaine partage une base et des règles. Le contrôleur héberge cette base et authentifie. Le schéma cite aussi le poste en WorkGroup, le poste client, le serveur autonome, CD1 et le serveur membre.
    4. Le bail DHCP transmis au client contient une durée, d’autres paramètres, une adresse IP et un masque.
    5. L’étendue d’exemple s’appelle LAN_Serveurs, exclut 192.168.0.5 à 192.168.0.10, couvre 192.168.0.1 à 192.168.0.254 /24, et dure 2 jours.
    6. Le DNS résolveur interroge d’autres serveurs et ne gère pas d’espace de noms. Le DNS hébergeur fait autorité sur les espaces qu’il gère.
    7. Les OU de l’exemple se créent sous `_Entreprise`, puis Groupes, Utilisateurs et Ordinateurs.

    ```powershell
    New-ADOrganizationalUnit _Entreprise
    $base = Get-ADOrganizationalUnit -Filter { name -like "_Ent*" }
    New-ADOrganizationalUnit Groupes -Path $base
    New-ADOrganizationalUnit Utilisateurs -Path $base
    New-ADOrganizationalUnit Ordinateurs -Path $base
    Get-ADOrganizationalUnit -filter * -SearchBase $base | ft name,DistinguishedName -AutoSize
    ```

    La conclusion du support : le socle est en place, les services de bureau à distance et de déploiement peuvent être installés.
