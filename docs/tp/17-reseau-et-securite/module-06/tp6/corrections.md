# Correction — TP6 — Certificats autosignés

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
