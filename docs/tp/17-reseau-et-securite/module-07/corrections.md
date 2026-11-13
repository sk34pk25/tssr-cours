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

Texte visible sur la capture :

```text
192.168.150.100/24
VMnet10
VMnet12
VMnet11
```

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

Texte visible sur la capture :

```text
Assistant / OpenVPN Remote Access Server Setup /
OpenVPN Remote Access Server Setup
This wizard will provide guidance through an OpenVPN Remote Access Server
```

•

   •

   •

![TP8, correction, page 3](../../../assets/images/reseau-et-securite/tp8/correction-p03-07.png)

Texte visible sur la capture :

```text
Assistant / OpenVPN Remote Access Server Setup / LDAP Server Selection
OpenVPN Remote Access Server Setup Wizard
```

![TP8, correction, page 3](../../../assets/images/reseau-et-securite/tp8/correction-p03-08.png)

![TP8, correction, page 3](../../../assets/images/reseau-et-securite/tp8/correction-p03-09.png)

Texte visible sur la capture :

```text
Assistant / OpenVPN Remote Access Server Setup / Server Certificate Selection
OpenVPN Remote Access Server Setup Wizard
```

•
   •

   •

![TP8, correction, page 4](../../../assets/images/reseau-et-securite/tp8/correction-p04-11.png)

Texte visible sur la capture :

```text
Assistant / OpenVPN Remote Access Server Setup / Server Setup
OpenVPN Remote Access Server Setup Wizard
General OpenVPN Server Information
Description | OpenVPNTPE ]
A name for this OpenVPN instance, for administrative reference. It can be set however desired, but is often used to distir
service (e.g. "Remote Technical Staff’). I is also used by OpenVPN Client Export to identify this VPN on clients
Protocol to use for OpenVPN connections. If unsure, leave this set to UDP.
The interface where OpenVPN will listen for incoming connections (typically WAN.)
```

![TP8, correction, page 4](../../../assets/images/reseau-et-securite/tp8/correction-p04-12.png)

Texte visible sur la capture :

```text
Rediriger la passerelle
172.80.9.0/24
172.20.9.0/24
```

•

   •
   •   Paramétrer OpenVPN client

![TP8, correction, page 5](../../../assets/images/reseau-et-securite/tp8/correction-p05-14.png)

Texte visible sur la capture :

```text
Assistant / OpenVPN Remote Access Server Setup / Firewall Rule Configuration
OpenVPN Remote Access Server Firewall Rules
Rules control passing or blocking network traffic as it flows through the firewall.
Rules must be added which allow traffic to reach the OpenVPN server IP address and port, as well as to allow traffic from c
OpenVPN tunnel,
The options on this step can add automatic rules to pass this traffic, or rules can be configured manually after completing
Firewall Rule ‘Add a rule to permit connections to this OpenVPN server instance from clients anywhere on the Internet.
OpenVPN rule Add a rule to allow all traffic from connected clients to pass inside the VPN tunnel
```

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

Texte visible sur la capture :

```text
Password Protect Use a password to protect the PKCS#12 file contents or key in Viscosity bundle.
Certificate Password |"
Password used to protect the certificate file contents. Confirmer
```

![TP8, correction, page 6](../../../assets/images/reseau-et-securite/tp8/correction-p06-18.png)

Texte visible sur la capture :

```text
Clients OpenVPN
À Most cent À openvPN connect (05/Anccié)
```

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

Texte visible sur la capture :

```text
arte inconnue OpenVPN Wintun :
Passerelle par défaut.
arte inconnue OpenVPN TAP-Windows6 :
-: 172.20.9.21(préféré)
: 255.255.255.128
: 172.20.9.126
172.20.9.126
172.20.9.150
: 172.30.2.4(préféré)
255.255.255.0
172.30.2.0
172.20.2.150
arte inconnue OpenVPN Data Channel Offload :
```

Solution
Une solution est proposée pour ce TP sous la forme d'un PDF commenté.
