# Module 06 — Certificats autosignés et PKI privée ADCS

Semaine **2/2**. Ce module du site regroupe le TP6 et le TP7, tous deux dans le dossier Module 6. Les énoncés impriment TD5. Les corrections impriment TD6 Module 2 et TD7 Module 2.

[TP6](../../tp/17-reseau-et-securite/module-06/tp6/index.md) · [TP7](../../tp/17-reseau-et-securite/module-06/tp7/index.md) · [Révision](../../revision/17-reseau-et-securite/module-06.md) · [Kahoot préparé](../../kahoot/17-reseau-et-securite-module-06.md)

Support de cours : **Inexistant**. Le dossier ne contient que les énoncés et les corrections.

=== "Cours Original"

    ## TP6 — énoncé


    Titre : « La gestion des certificats autosignés ». Le PDF imprime TD5. La ligne « Avant de démarrer » ne précise rien. Durée : 4 heures.

    Objectif de l’énoncé : « Mise en place de certificats autosignés ».

    - Sur SRV-MBR : installer le rôle IIS et créer un certificat autosigné. Enregistrement DNS vers `intranet.votredomaine.eni`. L’énoncé écrit « enristrement ».
    - Encore sur SRV-MBR : installer Apache2 et créer un certificat autosigné. Enregistrement DNS vers `extranet.votredomaine.eni`.
    - Sur pfSense : activer HTTPS avec le certificat autosigné existant. Enregistrement DNS vers `routeur.votredomaine.eni`.

    Un PDF commenté est annoncé dans les ressources à télécharger : **Inexistant**.


    ## TP6 — correction


    Titre identique, « TD6 Module 2 ». Prérequis : être arrivé au moins au TP4. Durée : 4 heures.

    Objectif : comprendre les serveurs web Apache et IIS et mettre des certificats autosignés pour activer le HTTPS. Le but écrit est de chiffrer le trafic entre clients et serveurs, sur Apache, IIS et pfSense.

    Sur SRV-MBR, le texte extractible au milieu des captures :

    - ajouter une deuxième IP `172.20.X.153/26` sur Ethernet0 ;
    - installer le rôle IIS ;
    - publier deux sites : `www.votrenom.eni:80` et `intranet.votrenom.eni` sur l’IP `172.20.X.153` ;
    - tester depuis les postes clients ;
    - créer un certificat autosigné pour les deux sites, modifier les sites avec ce certificat, retester.

    Sur SRV-WEB :

    - ajouter `172.20.X.202/26` sur ens33 ;
    - installer le navigateur lynx ;
    - publier `intra.votrenom.eni` sur n’importe quelle IP et `internet.votrenom.eni` sur `172.20.X.202` ;
    - tester avec lynx sur SRV-WEB et avec les navigateurs des clients ;
    - créer des certificats autosignés pour les deux sites ;
    - la correction écrit la commande `Cd ..` puis demande de modifier les fichiers de configuration des sites avec les certificats et de retester.

    Sur pfSense : se connecter en HTTPS avec le certificat adéquat, en utilisant le FQDN `routeur.votrenom.eni`.

    Les puces vides des pages 2, 5, 6, 8 et 10 correspondent à des captures. Les pages du PDF qui ne portent que l’en-tête de formation sont des captures d’écran. Aucun texte n’y est extractible : elles ne sont pas recopiées, et aucun logo n’est repris.

    La correction annonce un PDF commenté, sans autre texte.


    ## TP7 — énoncé


    Titre : « Certificat émanant d'une Private-KI ADCS ». Le PDF imprime TD5. Durée : 4 heures. La ligne « Avant de démarrer » est vide. Objectif : « Mise en place ».

    - Sur SRV-CD : exécuter `D:/InstallationPKI.ps1`.
    - Sur SRV-MBR : utiliser la clé privée de SRV-CD pour sécuriser `intranet.votredomaine.eni`.
    - Sur SRV-WEB : utiliser la clé privée de SRV-CD pour sécuriser `extranet.votredomaine.eni`.
    - Sur pfSense : utiliser la clé privée du formateur `http://88.66.44.1` pour sécuriser `routeur.votredomaine.eni`. Le formateur indique les identifiants. Ces identifiants ne sont pas dans le PDF : **Inexistant**.

    Un PDF commenté est annoncé dans les ressources à télécharger : **Inexistant**.

    Le libellé « Private-KI » est celui du fichier. Il désigne, dans la correction, une PKI privée ADCS.


    ## TP7 — correction


    Titre identique, « TD7 Module 2 ». Prérequis : avoir terminé le TP6. Durée : 3 heures.

    Objectif : mettre en place une infrastructure à clés publiques sur un serveur Windows pour gérer les certificats de façon centralisée, avec des certificats signés par une autorité.

    Texte extractible :

    - sur SRV-CD, exécuter `D:/InstallationPKI.ps1` et rendre le site certsrv fiable, cadenas compris, avec son certificat ;
    - après avoir récupéré le certificat du site, exécuter « le script suivant », dont le nom n’est pas écrit ;
    - sur SRV-MBR, générer un certificat de confiance avec l’autorité de SRV-CD pour `www.votrenom.eni` ;
    - sur SRV-WEB, même démarche pour `extranet.votrenom.eni` ;
    - sur pfSense, même démarche pour `routeur.votrenom.eni`.

    L’énoncé parle de la clé privée du formateur à `http://88.66.44.1` et des URL `intranet` / `extranet` sous `votredomaine.eni`. La correction ne reprend ni cette URL ni ces noms-là pour SRV-MBR.

    La majorité des 21 pages sont des captures. Les pages du PDF qui ne portent que l’en-tête de formation sont des captures d’écran. Aucun texte n’y est extractible : elles ne sont pas recopiées, et aucun logo n’est repris. Le nom du second script et les identifiants ne sont pas écrits : **Inexistant**.

=== "Cours Optimisé IA"

    L’énoncé est court : IIS et Apache2 sur SRV-MBR, HTTPS déjà présent sur pfSense, trois noms DNS `intranet`, `extranet` et `routeur` sous `votredomaine.eni`.

    La correction, titrée TD6 du module 2 des PDF, détaille d’autres noms et d’autres machines. Il ne faut pas les fusionner :

    | Document | Où | Noms et adresses écrits |
    |---|---|---|
    | Énoncé | SRV-MBR | IIS et Apache2, `intranet.votredomaine.eni`, `extranet.votredomaine.eni` |
    | Correction | SRV-MBR | Deuxième IP `172.20.X.153/26`, IIS, `www.votrenom.eni:80` et `intranet.votrenom.eni` |
    | Correction | SRV-WEB | `172.20.X.202/26`, lynx, `intra.votrenom.eni` et `internet.votrenom.eni` |
    | Les deux | pfSense | HTTPS. Énoncé : certificat autosigné existant et `routeur.votredomaine.eni`. Correction : `routeur.votrenom.eni` |

    Les commandes exactes des captures ne sont pas dans le texte. Elles sont **Inexistant** sous forme écrite. La seule commande extraite est `Cd ..`.



    Ordre commun aux deux documents : installer la PKI par `D:/InstallationPKI.ps1` sur SRV-CD, puis protéger les sites et le routeur avec un certificat issu de cette autorité.

    Ne pas mélanger les noms :

    - énoncé : `intranet.votredomaine.eni`, `extranet.votredomaine.eni`, `routeur.votredomaine.eni`, et pour pfSense la clé du formateur à `http://88.66.44.1` ;
    - correction : site certsrv rendu fiable, puis `www.votrenom.eni`, `extranet.votrenom.eni`, `routeur.votrenom.eni`.

    Le second script de la correction n’a pas de nom écrit. Les clics des captures ne sont pas retranscrits.
