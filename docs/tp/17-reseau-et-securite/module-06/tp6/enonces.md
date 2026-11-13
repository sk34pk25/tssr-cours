# Énoncé — TP6 — La gestion des certificats autosignés


La gestion des certificats
autosignés
TD5

 Avant de démarrer ce TP, .

            Durée estimée

              4 heures

Énoncé

Objectifs:

Mise en place de certificats autosignés

![TP6, énoncé, page 1](../../../../assets/images/reseau-et-securite/tp6/enonce-p01-01.png)

![TP6, énoncé, page 1](../../../../assets/images/reseau-et-securite/tp6/enonce-p01-02.png)

Valeurs de la capture :

- Routeur formateur : 88.66.44.1
- WAN : 88.66.44.X, bridge
- LAN CLT : 172.20.X.0/24, VMnet10
- LAN DMZ : VMnet12
- LAN SRV : 192.168.X.0/24, VMnet11
- SRV-CD : 192.168.X.100/24, Active Directory, DNS
- SRV-MBR : 192.168.X.102/24, DHCP, IIS
- SRV-Apache : 172.20.X.200/24


Sur SRV-MBR
Installer le rôle IIS et créer un certificat autosigné

Faire un enristrement DNS vers intranet.votredomaine.eni

Sur SRV-MBR
Installer le Apache2 et créer un certificat autosigné

Faire un enristrement DNS vers extranet.votredomaine.eni

Sur le routeur PFsense
Activer le https avec le certificat autosigné existant

Faire un enristrement DNS vers routeur.votredomaine.eni

Solution
Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les ressources à télécharger (voir la page [Correction](corrections.md)).
