# Module 02 — Configuration du pare-feu pfSense

Semaine **1/2**. Énoncé titré TD2, 3 h. Correction « TD2 du Module 1 », 3-4 h. Le document écrit « Pfsense ».

[Énoncé](../../tp/17-reseau-et-securite/module-02/enonces.md) · [Correction](../../tp/17-reseau-et-securite/module-02/corrections.md) · [Révision](../../revision/17-reseau-et-securite/module-02.md) · [Kahoot préparé](../../kahoot/17-reseau-et-securite-module-02.md)

Support de cours : **Inexistant**. Le dossier ne contient que l’énoncé et la correction.

=== "Cours Original"

    Titre imprimé : « Configuration du pare-feu Pfsense », libellé TD2. Durée estimée : 3 heures. Prérequis : avoir fait le TP1. Récupérer sur « distrib » l’archive `TSSR170-Réseau&Sécurité.7z`. Les bundles, OVF et OVA cités ne sont pas dans le dossier. Fichiers : **Inexistant**.

    Objectif : créer l’infrastructure et y transcrire la matrice de flux du TP1 dans pfSense. Le schéma de la page 1 n’a pas de texte hors titre. Les pages du PDF qui ne portent que l’en-tête de formation sont des captures d’écran. Aucun texte n’y est extractible : elles ne sont pas recopiées, et aucun logo n’est repris.

    Installation de SRV-CD :

    - utiliser `Win-SRV.ovf` pour déployer le serveur Windows ;
    - lui attribuer l’adresse IP et la passerelle du schéma ;
    - le connecter sur le VMnet 11 ;
    - renommer la VM SRV-CD ;
    - installer les rôles AD DS et DNS ; le nom de domaine sera `votrenom.eni` ;
    - ouvrir PowerShell en administrateur, se placer dans `E:/scirpts`, puis exécuter dans l’ordre : `OU.ps1`, puis, après avoir modifié `Users.csv` et `Groups.csv` avec le nom de domaine, `Users.ps1`, `Groups.ps1`, `AdduseronGroups.ps1` ;
    - créer un redirecteur DNS avec l’IP du DNS de la salle.

    Installation de SRV-MBR : même fichier `Win-SRV.ovf`, le renommer SRV-MBR, adresse et passerelle du schéma, VMnet 11, joindre le domaine, installer le rôle DHCP et préparer une étendue pour le LAN client.

    Routeur pfSense : fichier `Routeur.ovf`, mot de passe par défaut. Modifier les IP du réseau, vérifier les VMnet du schéma, modifier le domaine et le DNS dans les paramètres généraux, ajouter le relais DHCP du LAN client.

    Client Windows 10 ou 11, ISO sur Distrib : RAM 3 Go, CPU 2, stockage par défaut, réseau VMnet10. Vérifier l’adresse du DHCP, puis faire une réservation avec l’adresse du schéma. Désactiver le pare-feu Windows.

    Client Debian 12, ISO sur Distrib : RAM 2 Go, CPU 1, stockage par défaut, réseau VMnet10. Même contrôle DHCP et même réservation.

    Sur pfSense : mettre les règles de pare-feu du TP1 côté LANCLIENT et LANSERVER. Les autres règles seront faites plus tard. Tester. L’énoncé écrit « par-feu ».

    Client Windows 11 : le joindre au domaine.

    L’énoncé dit qu’un PDF commenté est disponible dans les ressources à télécharger. Ces ressources ne sont pas dans le dossier : **Inexistant**.

=== "Cours Optimisé IA"

    Ordre du laboratoire, uniquement avec les étapes écrites. Quand l’énoncé et la correction divergent, les deux noms de fichiers sont cités. Aucun des fichiers n’est publié.

    1. Avoir fini le TP1.
    2. Déployer SRV-CD sur VMnet 11, AD DS et DNS, domaine `votrenom.eni`.
    3. Lancer les scripts dans l’ordre du document suivi. Correction : `Install-DNS-ADDS.ps1`, `DNS-Zone-Inversées.ps1`, `OU.ps1`, puis les CSV adaptés, `Users.ps1`, `Groups.ps1`, `AdduseronGroups.ps1`. Énoncé : cet ordre sans les deux premiers, et le dossier `E:/scirpts`.
    4. Redirecteur DNS vers le DNS de la salle.
    5. Déployer SRV-MBR sur VMnet 11, le joindre, rôle DHCP et étendue du LAN client.
    6. Déployer pfSense, aligner IP et VMnet, domaine, DNS, relais DHCP.
    7. Clients Windows et Debian sur VMnet10, réservation DHCP, pare-feu Windows désactivé.
    8. Règles du TP1 sur LAN client et LAN serveurs seulement. Tester. Joindre le client Windows au domaine.

    Contrôles : le client reçoit une adresse du DHCP ; la réservation correspond au schéma ; le redirecteur pointe vers le DNS de la salle. Les copies d’écran de la correction ne remplacent pas ces contrôles : elles n’ont pas de texte.
