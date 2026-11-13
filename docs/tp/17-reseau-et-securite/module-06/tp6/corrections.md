# Correction — TP6 — La gestion des certificats autosignés


La gestion des certificats
autosignés
TD6 Module 2

 Avant de démarrer ce TP, d’être arrivé au moins au TP4 .

             Durée estimée

               4 heures

Énoncé

Objectifs:

Vous comprendrez le fonctionnement des serveurs web sous Apache et IIS et mettrez en
place des certificats autosignés pour active le HTTPS. La mise en place de certificats
autosignés sur Apache, IIS et pfSense a pour objectif de sécuriser les communications en
chiffrant le trafic entre clients et serveurs.

![TP6, correction, page 1](../../../../assets/images/reseau-et-securite/tp6/correction-p01-01.png)

![TP6, correction, page 1](../../../../assets/images/reseau-et-securite/tp6/correction-p01-02.png)

Texte visible sur la capture :

```text
192.168.150.100/24
VMnet10 VMnet12
VMnet11
```

Sur SRV-MBR

Ajout de règles

   •

   •
   •
   •
   •
   •   Ajouter une deuxième IP 172.20.X.153/26 sur l’interface Ethernet0

![TP6, correction, page 2](../../../../assets/images/reseau-et-securite/tp6/correction-p02-04.png)

Texte visible sur la capture :

```text
WireGuard
Port Passerelle d'attente Ordonnancement Descri Actions
```

![TP6, correction, page 2](../../../../assets/images/reseau-et-securite/tp6/correction-p02-05.png)

Texte visible sur la capture :

```text
Flottant(e) WireGuard WAN LANCLIENT LANSERVER LANDMZ
oO Etats Protocole Source Port Destination Port Passerelle d'attente Ordonnancement Description Actions
```

•

   •   Installer le rôle IIS

   •   Configurer et publier 2 sites nommés:
             www.votrenom.eni:80

               intranet.votrenom.eni sur l’IP172.20.X.153

![TP6, correction, page 3](../../../../assets/images/reseau-et-securite/tp6/correction-p03-07.png)

Texte visible sur la capture :

```text
1.208.152 255.255.255.192
_| 1.208.183 255.255.255.192
au tot Passerelles par défaut
q Passerelle Métrique
```

![TP6, correction, page 3](../../../../assets/images/reseau-et-securite/tp6/correction-p03-08.png)

![TP6, correction, page 4](../../../../assets/images/reseau-et-securite/tp6/correction-p04-10.png)

![TP6, correction, page 4](../../../../assets/images/reseau-et-securite/tp6/correction-p04-11.png)

•   Tester l’accès aux différents sites à partir des postes clients

   •   Créer un certificat autosigné pour vos 2 sites

   •   Puis modifier les sites avec le certificat

   •

![TP6, correction, page 5](../../../../assets/images/reseau-et-securite/tp6/correction-p05-13.png)

![TP6, correction, page 5](../../../../assets/images/reseau-et-securite/tp6/correction-p05-14.png)

![TP6, correction, page 5](../../../../assets/images/reseau-et-securite/tp6/correction-p05-15.png)

•

   •   Tester le bon fonctionnement depuis les clients

   •

Sur SRV-WEB
   •   Ajouter une IP à l'interface ens33 : 172.20.X.202/26

![TP6, correction, page 6](../../../../assets/images/reseau-et-securite/tp6/correction-p06-17.png)

![TP6, correction, page 6](../../../../assets/images/reseau-et-securite/tp6/correction-p06-18.png)

![TP6, correction, page 6](../../../../assets/images/reseau-et-securite/tp6/correction-p06-19.png)

•

   •   Installer le navigateur lynx

   •   Configurer et publier 2 sites WEB nommés :
       intra.votrenom.eni sur n'importe quelle IP
       internet.votrenom.eni sur l'IP 172.20.X.202

![TP6, correction, page 7](../../../../assets/images/reseau-et-securite/tp6/correction-p07-21.png)

Texte visible sur la capture :

```text
GNU nano 7.2 /etc/network,
source /etc/network/interfaces.d/*
address 172.20.9.200/26
gateway 172.20.9.254
address 172.20.9.202/26
```

•   Tester l'accès aux différents sites à partir de SRV-WEB avec la commande lynx et
       depuis les postes clients dans les navigateurs.

   •   Créer des certificats auto-signés pour vos 2 sites

   •

   •

![TP6, correction, page 8](../../../../assets/images/reseau-et-securite/tp6/correction-p08-23.png)

![TP6, correction, page 8](../../../../assets/images/reseau-et-securite/tp6/correction-p08-24.png)

![TP6, correction, page 8](../../../../assets/images/reseau-et-securite/tp6/correction-p08-25.png)

![TP6, correction, page 8](../../../../assets/images/reseau-et-securite/tp6/correction-p08-26.png)

•
   •
   •   Cd ..
   •
   •   Puis modifier les fichiers de configuration des sites avec les certificats

   •   Tester le bon fonctionnement depuis les clients

   •

![TP6, correction, page 9](../../../../assets/images/reseau-et-securite/tp6/correction-p09-28.png)

![TP6, correction, page 9](../../../../assets/images/reseau-et-securite/tp6/correction-p09-29.png)

![TP6, correction, page 9](../../../../assets/images/reseau-et-securite/tp6/correction-p09-30.png)

•

Sur le routeur PFsense
   •   Faites en sorte de vous connecter en https avec le certificate adequate en utilisant
       le FQDN routeur.votrenom.eni.

   •

![TP6, correction, page 10](../../../../assets/images/reseau-et-securite/tp6/correction-p10-32.png)

![TP6, correction, page 10](../../../../assets/images/reseau-et-securite/tp6/correction-p10-33.png)

![TP6, correction, page 11](../../../../assets/images/reseau-et-securite/tp6/correction-p11-35.png)

Solution
Une solution est proposée pour ce TP sous la forme d'un PDF commenté.
