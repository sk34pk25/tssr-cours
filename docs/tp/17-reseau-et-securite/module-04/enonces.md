# Énoncé — TP4 — Services hébergés dans une DMZ


Services hébergés dans
une DMZ
TD

 Avant de démarrer ce TP, il convient d’avoir fait le TP2.

            Durée estimée

              1 heures

Énoncé

Objectifs:

Gestion de la DMZ.

![TP4, énoncé, page 1](../../../assets/images/reseau-et-securite/tp4/enonce-p01-01.png)

![TP4, énoncé, page 1](../../../assets/images/reseau-et-securite/tp4/enonce-p01-02.png)

Valeurs de la capture :

- Routeur formateur : 88.66.44.1
- WAN : 88.66.44.X, bridge
- LAN CLT : 172.20.X.0/24, VMnet10
- LAN DMZ : VMnet12
- LAN SRV : 192.168.X.0/24, VMnet11
- SRV-CD : 192.168.X.100/24, Active Directory, DNS
- SRV-MBR : 192.168.X.102/24, DHCP
- SRV-Apache : 172.20.X.200/24


Installation du serveur WEB
Récupérer le bunble SRV-Apache.ova

       Le mot de passe de root est P@ssw0rd

        Attribuer lui, l’adresse IP ainsi que sa passerelle définis sur le schema.
        Connectez-le sur le VMnet 12.
        Modifier les fichiers /etc/hosts et /etc/resolv.conf avec les informations de votre
infrastructure.

       Faites son enregistrement DNS sur votre serveur SRV-CD

Sur le SRV-DC

       Exécuter le script D:/scripts/Script-TP3-AddDnsZone.ps1 et entrer la nouvelle adresse
IP du SRV-Apache
       Tester l’URL https://extra.votrenom.eni

Sur du routeur Pfsense

       Faites un alias URLs pour extra.votrenom.eni

Et ensuite une redirection NAT depuis le WAN pour accèder on site WEB A voir si fessable
       Attention aux règles de pare-feu

Depuis votre machine hôte

       Tester l’accès au serveur WEB avec l’ip de votre WAN

Client Windows

       Tester l’accès au serveur WEB avec le FQDN

Solution
Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les ressources à télécharger (voir la page [Correction](corrections.md)).
