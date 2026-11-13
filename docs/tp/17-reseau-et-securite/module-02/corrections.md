# Correction — TP2 — Configuration du pare-feu Pfsense


Configuration du pare-feu
Pfsense
TD2 du Module 1

 Avant de démarrer ce TP, il convient d’avoir fait le TP1. Récupérer le Bundles sur distrib le
 fichier BundlesStagiaires.7z

             Durée estimée

              3-4 heures

Énoncé

Objectifs:

Création de l’infrastructure ci-dessous et y transcrire la politique de la matrice de flux du
TP1 dans pfSense.

![TP2, correction, page 1](../../../assets/images/reseau-et-securite/tp2/correction-p01-01.png)

![TP2, correction, page 1](../../../assets/images/reseau-et-securite/tp2/correction-p01-02.png)

Texte visible sur la capture :

```text
192.168.150.100/24
VMnet10
VMnet12
VMnet11
```

Installation de l’infrastructure
Installation du serveur SRV-CD

       Utiliser le fichier Base-SRV-WIN2022.ovf pour deployer votre serveur Windows.

       Attribuer lui, l’adresse IP ainsi que sa passerelle définis sur le schema.
       Connectez-le sur le VMnet 11

       Renomer votre VM par SRV-CD

       Votre nom de domaine sera votre nom.eni
       Utiliser les scripts suivants :

       Ouvrir Powershell en tant qu’Administeur de vous déplacer sur D:/scirpts puis
       exécutez les scripts dans l’ordre suivant:

![TP2, correction, page 2](../../../assets/images/reseau-et-securite/tp2/correction-p02-04.png)

![TP2, correction, page 2](../../../assets/images/reseau-et-securite/tp2/correction-p02-05.png)

Install-DNS-ADDS.ps1

       DNS-Zone-Inversées.ps1

![TP2, correction, page 3](../../../assets/images/reseau-et-securite/tp2/correction-p03-07.png)

![TP2, correction, page 3](../../../assets/images/reseau-et-securite/tp2/correction-p03-08.png)

![TP2, correction, page 3](../../../assets/images/reseau-et-securite/tp2/correction-p03-09.png)

![TP2, correction, page 3](../../../assets/images/reseau-et-securite/tp2/correction-p03-10.png)

![TP2, correction, page 3](../../../assets/images/reseau-et-securite/tp2/correction-p03-11.png)

OU.ps1

      Attention modifier les fichiers Users.csv et Groups.csv avec votre nom de domaine
avant d’éxecuter les scripts suivants.
      Users.ps1

![TP2, correction, page 4](../../../assets/images/reseau-et-securite/tp2/correction-p04-13.png)

Texte visible sur la capture :

```text
Entrez le réseau (ex: 192.168.1.0): 172.20.9.0
Entrez le masque de sous-réseau (ex: 255.255.255.0): 255.255.255.0
```

![TP2, correction, page 4](../../../assets/images/reseau-et-securite/tp2/correction-p04-14.png)

![TP2, correction, page 4](../../../assets/images/reseau-et-securite/tp2/correction-p04-15.png)

![TP2, correction, page 4](../../../assets/images/reseau-et-securite/tp2/correction-p04-16.png)

./

![TP2, correction, page 5](../../../assets/images/reseau-et-securite/tp2/correction-p05-18.png)

![TP2, correction, page 5](../../../assets/images/reseau-et-securite/tp2/correction-p05-19.png)

Groups.ps1

       AdduseronGroups.ps1

![TP2, correction, page 6](../../../assets/images/reseau-et-securite/tp2/correction-p06-21.png)

![TP2, correction, page 6](../../../assets/images/reseau-et-securite/tp2/correction-p06-22.png)

![TP2, correction, page 6](../../../assets/images/reseau-et-securite/tp2/correction-p06-23.png)

![TP2, correction, page 6](../../../assets/images/reseau-et-securite/tp2/correction-p06-24.png)

Faites un redirecteur dans le gestionnaire DNS avec l’IP le DNS de votre salle

![TP2, correction, page 7](../../../assets/images/reseau-et-securite/tp2/correction-p07-26.png)

![TP2, correction, page 7](../../../assets/images/reseau-et-securite/tp2/correction-p07-27.png)

Installation du serveur SRV-MBR

       Utiliser également le fichier Base-SRV-WIN2022.ovf

       Renomer votre serveur par: SRV-MBR
       Attribuer lui, l’adresse IP ainsi que sa passerelle définis sur le schema.

       Connectez-le sur le VMnet 11

       Joindre ce serveur à votre domaine avec l’utilisatrice Alma Ninja.

![TP2, correction, page 8](../../../assets/images/reseau-et-securite/tp2/correction-p08-29.png)

![TP2, correction, page 8](../../../assets/images/reseau-et-securite/tp2/correction-p08-30.png)

Installer en tant qu’administrateur du domaine sur ce serveur, le rôle DHCP et
préparez une etendue pour le LAN client.

Installation du routeur Pfsense

       Utiliser le fichier Routeur-Stagiaire.ovf le mot de passe par défaut

       Modifier les IP correspondant à votre réseau et vérifier que les différentes cartes
sont sur les bons VMnet comme indiqué sur le schéma.

![TP2, correction, page 9](../../../assets/images/reseau-et-securite/tp2/correction-p09-32.png)

![TP2, correction, page 9](../../../assets/images/reseau-et-securite/tp2/correction-p09-33.png)

Texte visible sur la capture :

```text
PS D:\Scripts> .\InstaLlationDHCP+Etendueps1
Entrez l'adresse IP de début de plage: 172.20.9.10
Entrez l'adresse IP de fin de plage: 172.20.9.100
Entrez le masque de sous-réseau (ex: 255.255.255.0): 255.255.255.128
Entrez l'adresse IP du serveur DNS: 172.20.9.150
Entrez l'adresse IP de la passerelle par défaut: 172.20.9.126
```

Modifier dans les paramètres générales votre domaine et votre DNS

       Ajouter le relay DHCP pour votre LAN client.

![TP2, correction, page 10](../../../assets/images/reseau-et-securite/tp2/correction-p10-35.png)

Texte visible sur la capture :

```text
http://172.28.9.254/
LANCLIENT Clan) -> emt => ud: 172.28.9.126/25
LANSERUER (opti) -> em2 172.28.9.198/26
LANDMZ Copt2)  -> em3 172.28.9.254/26
3) Reset webConfigurator password 12) PHP shell + pfSense tools
```

![TP2, correction, page 10](../../../assets/images/reseau-et-securite/tp2/correction-p10-36.png)

Texte visible sur la capture :

```text
Système / Routage / Passerelles
Passerelles Routes statiques Groupes de passerelle
Nom Par défaut Interface Passerelle IP surveillée Description
og  wanew2 Default (IPv4)  WAN 192.168.150.100 192.168.150.100 Interface wan Gateway
```

![TP2, correction, page 10](../../../assets/images/reseau-et-securite/tp2/correction-p10-37.png)

Installation du client Windows 10

       Récupérer l’ISO sur Distrib puis mettre les caractéristiques suivantes :

       RAM : 3Go

       CPU : 2

       Stockage : laisser par défaut

       Réseau : VMnet10

      Vérifier que vous récupérer une adresse IP du serveur DHCP. Retourner sur votre
serveur DHCP puis faites une réservation avec l’adresse IP indiqué sur le schéma.

![TP2, correction, page 11](../../../assets/images/reseau-et-securite/tp2/correction-p11-39.png)

Désactiver le pare-feu Windows

Installation du client Debian 12

Récupérer l’ISO sur Distrib puis mettre les caractéristiques suivantes :

       RAM : 2Go

       CPU : 1

       Stockage : laisser par défaut

       Réseau : VMnet10

      Vérifier que vous récupérer une adresse IP du serveur DHCP. Retourner sur votre
serveur DHCP puis faites une réservation avec l’adresse IP indiqué sur le schéma.

![TP2, correction, page 12](../../../assets/images/reseau-et-securite/tp2/correction-p12-41.png)

Sur routeur Pfsense

      Mettre en place les règles de pare-feu côté LANCLIENT, LANSERVER
déterminées au TP1, les autres règles seront effectuées plus tard puis tester le bon
fonctionnement.

![TP2, correction, page 13](../../../assets/images/reseau-et-securite/tp2/correction-p13-43.png)

Texte visible sur la capture :

```text
Passerelle par défaut IPv4
Passerelle par défaut IPv6
```

![TP2, correction, page 13](../../../assets/images/reseau-et-securite/tp2/correction-p13-44.png)

Texte visible sur la capture :

```text
GRPSRVWIN Hôte(s) 172.20.9.150, 172.20.9.152 GRP-SRV-WIN gOt
PCAdmin Hôte(s) 172.20.9.10, 172.20.9.11 PC-Admin PA
SRVDC1 Hôte(s) 172.20.9.150 SRV-DC1 #00
SRVMBR Hôte(s) 172.20.9.152 SRV-MBR PA
```

![TP2, correction, page 14](../../../assets/images/reseau-et-securite/tp2/correction-p14-46.png)

![TP2, correction, page 14](../../../assets/images/reseau-et-securite/tp2/correction-p14-47.png)

Texte visible sur la capture :

```text
Flottant(e) WireGuard WAN LANCLIENT LANSERVER LANDMZ LANSTAGIAIRE IPsec
oO Etats Protocole Source Port Destination Port Passerelle d'attente Ordonnancement Description Actions
```

![TP2, correction, page 14](../../../assets/images/reseau-et-securite/tp2/correction-p14-48.png)

Client Windows 11

       Le joindre au domaine

Solution
Une solution est proposée pour ce TP sous la forme d'un PDF commenté.

![TP2, correction, page 15](../../../assets/images/reseau-et-securite/tp2/correction-p15-50.png)

Texte visible sur la capture :

```text
Flottant(e) WireGuard WAN LANCLIENT LANSERVER LANDMZ LANSTAGIAIRE
IPsec
0 États Protocole Source Port Destination Port Passerelle File d'attente Ordonnancement Description
```

![TP2, correction, page 15](../../../assets/images/reseau-et-securite/tp2/correction-p15-51.png)

Note : l’énoncé nomme l’archive TSSR170-Réseau&Sécurité.7z, l’OVF Win-SRV.ovf, le routeur Routeur.ovf et le dossier E:/scirpts. Cette correction nomme BundlesStagiaires.7z, Base-SRV-WIN2022.ovf, Routeur-Stagiaire.ovf et D:/scirpts, et ajoute Install-DNS-ADDS.ps1 puis DNS-Zone-Inversées.ps1.
