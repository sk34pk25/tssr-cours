# Énoncé — TP2 — Configuration du pare-feu pfSense

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

[Retour](index.md)
