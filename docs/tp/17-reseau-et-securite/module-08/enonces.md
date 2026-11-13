# Énoncé — TP9 — Connecter les collaborateurs site à site


Connecter les
collaborateurs site à site
 TD9

 Avant de démarrer ce TP, .

            Durée estimée

              4 heures

Énoncé

Objectifs:

Mise en place

![TP9, énoncé, page 1](../../../assets/images/reseau-et-securite/tp9/enonce-p01-01.png)

![TP9, énoncé, page 1](../../../assets/images/reseau-et-securite/tp9/enonce-p01-02.png)

Valeurs de la capture :

- Deux sites, Binôme 1 et Binôme 2, reliés par un tunnel
- Chaque site : routeur formateur 88.66.44.1, WAN 88.66.44.X en bridge
- LAN CLT : 172.20.X.0/24, VMnet10
- LAN DMZ : VMnet12, SRV-Apache 172.20.X.200/24
- LAN SRV : 192.168.X.0/24, VMnet11
- SRV-CD : Active Directory, DNS, PKI
- SRV-MBR : DHCP, IIS


Sur le routeur PFsense
En binôme pour salle

Mise en place d’un deuxième PFsense pour CEL

Solution
Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les ressources à télécharger (voir la page [Correction](corrections.md)).
