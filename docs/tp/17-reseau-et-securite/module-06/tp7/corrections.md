# Correction — TP7 — Certificat d’une PKI privée ADCS

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
