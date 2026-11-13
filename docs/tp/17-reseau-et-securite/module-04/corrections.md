# Correction — TP4 — Services hébergés dans une DMZ


Solutions-Services hébergés
dans une DMZ
TD4 Module 1

 Avant de démarrer ce TP,avoir réalisé les précédents.

            Durée estimée

             2-3 heures

Énoncé

Objectifs: Explorer les aspects essentiels de la mise en place et de la gestion de solutions
                    et services hébergés dans une DMZ (Demilitarized Zone)

![TP4, correction, page 1](../../../assets/images/reseau-et-securite/tp4/correction-p01-01.png)

![TP4, correction, page 1](../../../assets/images/reseau-et-securite/tp4/correction-p01-02.png)

Texte visible sur la capture :

```text
192.168.150.100/24
VMnet10
VMnet12
VMnet11
```

Installation du serveur WEB
Récupérer le bundle SRV-WEB.ovf

       Le mot de passe de root est P@ssw0rd

       Attribuer lui, l’adresse IP ainsi que sa passerelle définis sur le schema.

        Connectez-le sur le VMnet 12.
        Modifier les fichiers /etc/hosts et /etc/resolv.conf avec les informations de votre
infrastructure.

![TP4, correction, page 2](../../../assets/images/reseau-et-securite/tp4/correction-p02-04.png)

Texte visible sur la capture :

```text
source /etc/netuark/interfaces.d/x
address 172.20.9.200/26
gateway 172.20.9.254
```

![TP4, correction, page 2](../../../assets/images/reseau-et-securite/tp4/correction-p02-05.png)

Texte visible sur la capture :

```text
inet 127.0.0.1/8 scope host lo
inet 172.20.9.200/26 brd 172.20.3.255 scope global ens33
```

![TP4, correction, page 2](../../../assets/images/reseau-et-securite/tp4/correction-p02-06.png)

Texte visible sur la capture :

```text
nameserver 172.20.9.150
nameserver 10.176.9.3
```

Sur le SRV-DC

Il faut faire un enregistrement DNS sur extra.votrenom.eni
Exécuter le script D:/scripts/AddDnsZone.ps1 et entrer la nouvelle adresse IP du SRV-Apache

       Tester l’URL https://extra.votrenom.eni

Sur du routeur Pfsense

Faites un alias URLs pour extra.votrenom.eni

Et ensuite une redirection NAT depuis le WAN pour accèder on site WEB depuis l’extérieur.
Attention aux règles de pare-feu

![TP4, correction, page 3](../../../assets/images/reseau-et-securite/tp4/correction-p03-08.png)

![TP4, correction, page 3](../../../assets/images/reseau-et-securite/tp4/correction-p03-09.png)

Texte visible sur la capture :

```text
PS D:\Scripts> .\AddDnsZone.ps1
Entrez l'adresse IP pour l'enregistrement ‘extra’: 172.20.9.200
```

![TP4, correction, page 3](../../../assets/images/reseau-et-securite/tp4/correction-p03-10.png)

Depuis votre machine hôte ou depuis le VM CLT-NAT

       Tester l’accès au serveur WEB avec l’@IP de votre WAN entre binôme

Client Windows

       Tester l’accès au serveur WEB avec le FQDN en interne

Solution
Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les

![TP4, correction, page 4](../../../assets/images/reseau-et-securite/tp4/correction-p04-12.png)

Texte visible sur la capture :

```text
GRPSRVWIN Hôte(s) 172.20.9.150, 172.20.9.152 GRP-SRV-WIN gon
PCAdmin Hôte(s) 172.20.9.10, 172.20.9.11 PC-Admin #00
SRVDC1 Hôte(s) 172.20.9.150 SRV-DC1 PA
SRVMBR Hôte(s) 172.20.9.152 SRV-MBR #00
```

![TP4, correction, page 4](../../../assets/images/reseau-et-securite/tp4/correction-p04-13.png)

![TP4, correction, page 4](../../../assets/images/reseau-et-securite/tp4/correction-p04-14.png)

ressources à télécharger.

Note : l’énoncé déploie SRV-Apache.ova et le script Script-TP3-AddDnsZone.ps1. Cette correction déploie SRV-WEB.ovf et le script AddDnsZone.ps1. L’URL testée est la même.
