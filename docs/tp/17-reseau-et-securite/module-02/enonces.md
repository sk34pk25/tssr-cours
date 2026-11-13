# Énoncé — TP2 — Configuration du pare-feu Pfsense


Configuration du pare-feu
Pfsense
TD2

 Avant de démarrer ce TP, il convient d’avoir fait le TP1. Récupérer le Bundle sur distrib
 TSSR170-Réseau&Sécurité.7z

            Durée estimée

              3 heures

Énoncé

Objectifs:

Création de l’infrastructure ci-dessous et y transcrire la politique de la matrice de flux du
TP1 dans pfSense.

![TP2, énoncé, page 1](../../../assets/images/reseau-et-securite/tp2/enonce-p01-01.png)

![TP2, énoncé, page 1](../../../assets/images/reseau-et-securite/tp2/enonce-p01-02.png)

Texte visible sur la capture :

```text
Routeur formafeur 88.66.44.1
VMnet 10 LAN CLT
VMnet12 LAN DMZ
VMnet11 LAN SRV
```

Installation de l’infrastructure
Installation du serveur SRV-CD

       Utiliser le fichier Win-SRV.ovf pour deployer votre serveur Windows.

       Attribuer lui, l’adresse IP ainsi que sa passerelle définis sur le schema.
       Connectez-le sur le VMnet 11
       Renomer votre VM par SRV-CD
       Installer les rôles AD DS et le DNS, votre nom de domaine sera votre nom.eni

      Ouvrir Powershell en tant qu’Administeur de vous déplacer sur E:/scirpts puis
      exécutez les scripts dans l’ordre suivant:
      OU.ps1
      Attention modifier les fichiers Users.csv et Groups.csv avec votre nom de domaine
avant d’éxecuter les scripts suivants.
      Users.ps1
      Groups.ps1
      AdduseronGroups.ps1

       Faites un redirecteur dans le gestionnaire DNS avec l’IP le DNS de votre salle

Installation du serveur SRV-MBR

       Utiliser également le fichier Win-SRV.ovf

       Renomer votre serveur par: SRV-MBR
       Attribuer lui, l’adresse IP ainsi que sa passerelle définis sur le schema.
       Connectez-le sur le VMnet 11

       Joindre ce serveur à votre domaine.

       Installer le role DHCP et préparez une etendue pour le LAN client.

Installation du routeur Pfsense

       Utiliser le fichier Routeur.ovf, le mot de passe par défaut

       Modifier les IP correspondant à votre réseau et vérifier que les différentes cartes
sont sur les bons VMnet comme indiqué sur le schéma.

       Modifier dans les paramètres générales votre domaine et votre DNS

       Ajouter le relay DHCP pour votre LAN client.

Installation du client Windows 10 ou 11

       Récupérer l’ISO sur Distrib puis mettre les caractéristiques suivantes :

       RAM : 3Go

CPU : 2

       Stockage : laisser par défaut

       Réseau : VMnet10

      Vérifier que vous récupérer une adresse IP du serveur DHCP. Retourner sur votre
serveur DHCP puis faites une réservation avec l’adresse IP indiqué sur le schéma.

Désactiver le pare-feu Windows

Installation du client Debian 12

Récupérer l’ISO sur Distrib puis mettre les caractéristiques suivantes :

       RAM : 2Go

       CPU : 1

       Stockage : laisser par défaut

       Réseau : VMnet10

      Vérifier que vous récupérer une adresse IP du serveur DHCP. Retourner sur votre
serveur DHCP puis faites une réservation avec l’adresse IP indiqué sur le schéma.

Sur routeur Pfsense

      Mettre en place les règles de par-feu côté LANCLIENT, LANSERVER
déterminées au TP1, les autres règles seront effectuées plus tard puis tester le bon
fonctionnement.

Client Windows 11

       Le joindre au domaine

Solution
Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les
ressources à télécharger.
