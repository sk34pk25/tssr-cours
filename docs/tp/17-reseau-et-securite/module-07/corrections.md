# Correction — TP8 — Connecter les collaborateurs pour le télétravail


Connecter les
collaborateurs pour le
télétravail
 TD8 du Module 2

 Avant de démarrer ce TP. Il faut avoir fait les précédents

            Durée estimée

              4 heures

Énoncé

Objectifs:

Cette mis en pratique, vous permettra de sécuriser efficacement les connexions à
distance pour le télétravail en utilisant OpenVPN et WireGard sur pfSense. Vous
comprendrez le fonctionnement des VPN.

![TP8, correction, page 1](../../../assets/images/reseau-et-securite/tp8/correction-p01-01.png)

![TP8, correction, page 1](../../../assets/images/reseau-et-securite/tp8/correction-p01-02.png)


Openvpn
Sur le poste Client Windows:

   •   En binôme, assurez-vous que depuis vos clients windows, vous pouvez ping vos
       adresses WAN.
   •   Pour les CEL, sortez votre client Windows sur le reseau bridge et lui attribuer l’@IP de
       CLT-NAT qu’il faudra éteindre.

Sur le poste « PFsense » :
Si vous n’avez plus l’authentification LDAP d’un TP précédent alors:
    • Ajouter et paramétrer une autorité de certification
    • Création d’un certificat serveur
    • Mettre en place l’authentification LDAP

   •
   •   Paramétrer OpenVPN server

   •

![TP8, correction, page 2](../../../assets/images/reseau-et-securite/tp8/correction-p02-04.png)

![TP8, correction, page 2](../../../assets/images/reseau-et-securite/tp8/correction-p02-05.png)


•

   •

   •

![TP8, correction, page 3](../../../assets/images/reseau-et-securite/tp8/correction-p03-07.png)


![TP8, correction, page 3](../../../assets/images/reseau-et-securite/tp8/correction-p03-08.png)

![TP8, correction, page 3](../../../assets/images/reseau-et-securite/tp8/correction-p03-09.png)


•
   •

   •

![TP8, correction, page 4](../../../assets/images/reseau-et-securite/tp8/correction-p04-11.png)


![TP8, correction, page 4](../../../assets/images/reseau-et-securite/tp8/correction-p04-12.png)


•

   •
   •   Paramétrer OpenVPN client

![TP8, correction, page 5](../../../assets/images/reseau-et-securite/tp8/correction-p05-14.png)


![TP8, correction, page 5](../../../assets/images/reseau-et-securite/tp8/correction-p05-15.png)

•
   •   Télécharger le fichier d’installation et de configuration client et l’envoyer à son
       binôme.

   •

Sur le poste Client Windows
    • Vous échangerez vos fichiers d’installation entre binôme et vous installerez ce
        fichier sur vos clients Windows.
    • Vous testerez la bonne connexion chacun votre tour.
    • Pour les CEL, vous installerez le fichier d’installation sur votre client Windows
        connecté sur le reseau WAN.

![TP8, correction, page 6](../../../assets/images/reseau-et-securite/tp8/correction-p06-17.png)


![TP8, correction, page 6](../../../assets/images/reseau-et-securite/tp8/correction-p06-18.png)


•

Wireguard
Sur le poste « PFsense » :
    • Paramétrer WireGuard et le peers pour CLT-NAT
Sur CLT-NAT
    • Renouveler les clés privée et publique.
    • Puis paramétrer le fichier de configuration pour l’adapter à votre nouvelle
        configuration.
    • Activer le routage
    • Activer WireGuard et essayez de vous connecter à votre serveur WEB en ssh.

Info sur les commandes wireguard
https://wireguard.how/client/debian/

![TP8, correction, page 7](../../../assets/images/reseau-et-securite/tp8/correction-p07-20.png)


Solution
Une solution est proposée pour ce TP sous la forme d'un PDF commenté (correction reproduite ci-dessous).
