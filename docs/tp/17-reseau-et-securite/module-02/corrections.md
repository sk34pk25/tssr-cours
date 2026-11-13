# Correction — TP2 — Configuration du pare-feu pfSense

La correction est titrée « TD2 du Module 1 ». Durée estimée : 3-4 heures. Prérequis : TP1 fait, et récupérer `BundlesStagiaires.7z` sur « distrib ». Ce n’est pas le même nom d’archive que l’énoncé. Les bundles, OVF et OVA cités ne sont pas dans le dossier. Fichiers : **Inexistant**.

Objectif identique : créer l’infrastructure et transcrire la matrice du TP1 dans pfSense.

Écarts écrits par rapport à l’énoncé :

- le serveur Windows se déploie depuis `Base-SRV-WIN2022.ovf`, pas `Win-SRV.ovf` ;
- les scripts sont dans `D:/scirpts`, et deux scripts précèdent les autres : `Install-DNS-ADDS.ps1` puis `DNS-Zone-Inversées.ps1`, avant `OU.ps1` ;
- le domaine reste « votre nom.eni » ;
- SRV-MBR rejoint le domaine « avec l’utilisatrice Alma Ninja » ;
- le routeur vient de `Routeur-Stagiaire.ovf` ;
- le client Windows est décrit comme Windows 10, puis une section plus loin dit « Client Windows 11 » et demande de le joindre au domaine ;
- les règles pfSense concernent LANCLIENT et LANSERVER, le reste plus tard.

Caractéristiques inchangées : Windows RAM 3 Go, CPU 2, VMnet10 ; Debian 12 RAM 2 Go, CPU 1, VMnet10 ; réservation DHCP à l’adresse du schéma ; pare-feu Windows désactivé.

La plupart des pages de la correction sont des captures. Les pages du PDF qui ne portent que l’en-tête de formation sont des captures d’écran. Aucun texte n’y est extractible : elles ne sont pas recopiées, et aucun logo n’est repris. La dernière page répète qu’une solution est un PDF commenté, sans autre texte de corrigé.

[Retour](index.md)
