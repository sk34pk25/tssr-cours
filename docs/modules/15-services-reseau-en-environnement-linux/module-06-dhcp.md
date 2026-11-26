# Module 06 — Le DHCP

Les parties ci-dessous reprennent le cours original, dans le même ordre. Les encadrés et les schémas répètent ses formulations.

## Parcours de lecture

1. Support · Module 06 - Support de cours · 10 pages transcrites
2. Services réseau en environnement Linux
3. Fonctionnement du service
4. DHCP
5. Mise en place d’un serveur
6. DHCP
7. Mise en place d’un relai DHCP
8. Énoncé · M06 - Enonc‚ du TP1 - Configurer le serveur DHCP avec isc-dhcp-server · 2 pages transcrites
9. Configurer le serveur DHCP avec isc-dhcp-server
10. Énoncé
11. RouTux DEB-S1 IPv4 :
12. Correction · M06 - Solution du TP1 - Configurer le serveur DHCP avec isc-dhcp-server · 3 pages transcrites
13. Configurer le serveur DHCP avec isc-dhcp-server
14. Solution
15. RouTux DEB-S1 IPv4 :

**Visuel externe**

```mermaid
flowchart TD
    N1["Support · Module 06 - Support de cours · 10 pages transcrites"]
    N2["Services réseau en environnement Linux"]
    N3["Fonctionnement du service"]
    N4["DHCP"]
    N5["Mise en place d’un serveur"]
    N6["DHCP"]
    N7["Mise en place d’un relai DHCP"]
    N8["Énoncé · M06 - Enonc‚ du TP1 - Configurer le serveur DHCP avec isc-dhcp-server · 2 page…"]
    N9["Configurer le serveur DHCP avec isc-dhcp-server"]
    N10["Énoncé"]
    N11["RouTux DEB-S1 IPv4 :"]
    N12["Correction · M06 - Solution du TP1 - Configurer le serveur DHCP avec isc-dhcp-server ·…"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
    N5 --> N6
    N6 --> N7
    N7 --> N8
    N8 --> N9
    N9 --> N10
    N10 --> N11
    N11 --> N12
```

SOURCE DRIVE · TRANSCRIPTION DU SUPPORT

Le contenu des documents du dossier TSSR est transcrit ci-dessous, page par page. Les textes et tableaux sont intégrés à la page Web. Aucun fichier PDF, aucune diapositive entière ni aucune reproduction de page n’est affiché. Seuls des croquis ou visuels isolés et vérifiés peuvent accompagner la transcription. Les versions et les consignes restent celles des supports de formation. Les compléments IA sont conservés dans leur onglet distinct.

## Support · Module 06 - Support de cours · 10 pages transcrites

!!! note "À retenir"
    Les noms et chemins de formation portant le nom de l’éditeur ont été neutralisés.

Les noms et chemins de formation portant le nom de l’éditeur ont été neutralisés. Les adresses numériques et les consignes restent celles de la source.

## Services réseau en environnement Linux

Module 06 - Le DHCP

### Le DHCP

### Objectifs

!!! note "À retenir"
    Comprendre le fonctionnement du service DHCP Mise en place d'un service DHCP Mise en place d'un relai DHCP

**Visuel externe**

```mermaid
flowchart LR
    N1["Comprendre le fonctionnement du service DHCP"]
    N2["Mise en place d'un service DHCP"]
    N3["Mise en place d'un relai DHCP"]
    N1 --> N2
    N2 --> N3
```

- Comprendre le fonctionnement du service DHCP
- Mise en place d'un service DHCP
- Mise en place d'un relai DHCP

### Le DHCP

## Fonctionnement du service

## DHCP

### Fonctionnement du service DHCP

### Fonctionnement DHCP

!!! note "À retenir"
    Le DHCP permet de fournir des configurations IP aux équipements qui l'utilisent Normalisé par une série de RFC Centralise la configuration de l'adresse IP Optimisation de l'utilisation des plages IP Propage les mises à jour de configuration

**Visuel externe**

```mermaid
flowchart LR
    N1["Le DHCP permet de fournir des configurations IP aux équipements qui l'utilisent"]
    N2["Normalisé par une série de RFC"]
    N3["Centralise la configuration de l'adresse IP"]
    N4["Optimisation de l'utilisation des plages IP"]
    N5["Propage les mises à jour de configuration"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
```

- Le DHCP permet de fournir des configurations IP aux équipements qui l'utilisent
- Normalisé par une série de RFC
- Centralise la configuration de l'adresse IP
- Optimisation de l'utilisation des plages IP
- Propage les mises à jour de configuration

### Fonctionnement du service DHCP

#### Les requêtes DHCP (en IPv4)

![Séquence DHCPv4 Discover, Offer, Request, Ack](../../assets/course-sources/isolated/f934c07341c3f053/linux-net-vector-6.webp)

Séquence DHCPv4 Discover, Offer, Request, Ack

1. DHCP DISCOVER : le client broadcast sur le réseau pour demander une configuration IP
2. DHCP OFFER : le serveur DHCP fait une proposition de configuration (toujours en broadcast)
3. DHCP REQUEST : le client accepte l'offre
4. DHCP ACK : le serveur prend acte de l'acceptation et envoi le bail DHCP

### Fonctionnement du service DHCP

### Les serveurs DHCP

!!! note "À retenir"
    Pour mettre en place un service DHCP on a les serveurs suivants : isc-dhcp-server : + service répondu + facile à mettre en œuvre - n'évolue plus kea : + nouveau produit - moins utilisé - plus compliqué à configurer

**Visuel externe**

```mermaid
flowchart LR
    N1["Pour mettre en place un service DHCP on a les serveurs suivants :"]
    N2["isc-dhcp-server :"]
    N3["+ service répondu"]
    N4["+ facile à mettre en œuvre"]
    N5["- n'évolue plus"]
    N6["kea :"]
    N7["+ nouveau produit"]
    N8["- moins utilisé"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
    N5 --> N6
    N6 --> N7
    N7 --> N8
```

- Pour mettre en place un service DHCP on a les serveurs suivants :
- isc-dhcp-server :
- + service répondu
- + facile à mettre en œuvre
- - n'évolue plus
- kea :
- + nouveau produit
- - moins utilisé
- - plus compliqué à configurer

### Fonctionnement du service DHCP

### Les serveurs DHCP

!!! note "À retenir"
    Les deux produits sont soutenus par l’ISC.

- Les deux produits sont soutenus par l’ISC.
- Pour ce cours, le travail sera fait sur isc-dhcp-server.

### Le DHCP

## Mise en place d’un serveur

## DHCP

### Mise en place serveur DHCP

### Caractéristiques serveur DHCP

| Nom du paquet | isc-dhcp-server |
| --- | --- |
| Fichiers de configuration | /etc/default/isc-dhcp-server /etc/dhcp/dhcpd.conf |
| Fichier de baux | /var/lib/dhcp/dhcpd.leases |
| Nom du service | isc-dhcp-server |
| Fichier journal | /var/log/syslog |

### Mise en place serveur DHCP

### Le fichier /etc/default/isc-dhcp-server

!!! note "À retenir"
    Le fichier /etc/default/isc-dhcp-server permet de définir sur quelle(s) interface(s) va écouter le service DHCP.

- Le fichier /etc/default/isc-dhcp-server permet de définir sur quelle(s) interface(s) va écouter le service DHCP.

Transcription du détail du support.

```
# vi /etc/default/isc-dhcp-server

INTERFACESv4="ens35"
INTERFACESv6=""
```

### Mise en place serveur DHCP

### Configuration serveur DHCP

!!! note "À retenir"
    La configuration se fera dans le fichier /etc/dhcp/dhcpd.conf Transcription du détail du support.

- La configuration se fera dans le fichier /etc/dhcp/dhcpd.conf

Transcription du détail du support.

```
# vi /etc/dhcp/dhcpd.conf

option domain-name "demo.example";
option domain-name-servers 172.16.17.18;
# 6H 6m 6s = 21966s
default-lease-time 21966;
max-lease-time 42000;

ddns-update-style none;

authoritative;
log-facility local7;

subnet 192.168.42.0 netmask 255.255.255.0 {
}

subnet 172.19.0.0 netmask 255.255.0.0 {
    range 172.19.2.0 172.19.9.255;
    option routers 172.19.1.1;
}

host wifi-hp-04 {
    hardware ethernet 08:00:07:26:c0:a5;
    fixed-address 172.20.0.2;
}
```

### Mise en place serveur DHCP

### Configuration serveur DHCP

!!! note "À retenir"
    option domain-name et option domain-name-servers : définition du nom de domaine et du serveur DNS default-lease-time et max-lease-time : définition du bail par défaut et du bail maximum ddns-update-style : permet de définir l'interaction entre le DNS et le DHCP ici aucune

- option domain-name et option domain-name-servers : définition du nom de domaine et du serveur DNS
- default-lease-time et max-lease-time : définition du bail par défaut et du bail maximum
- ddns-update-style : permet de définir l'interaction entre le DNS et le DHCP ici aucune

### Mise en place serveur DHCP

### Configuration serveur DHCP

**Visuel externe**

```mermaid
flowchart LR
    N1["authoritative : serveur DHCP autoritaire"]
    N2["subnet : définition des paramètres pour un réseau :"]
    N3["range : fourchette d’IP affectables"]
    N4["option router : paramétrage de la gateway"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
```

- authoritative : serveur DHCP autoritaire
- subnet : définition des paramètres pour un réseau :
- range : fourchette d’IP affectables
- option router : paramétrage de la gateway

### Mise en place serveur DHCP

### Configuration serveur DHCP

- host : affectation d'une adresse IP pour une machine :
- hardware ethernet : son adresse MAC
- fixed-address : l'adresse IP
- La commande dhcp -t permet de tester la configuration

### Mise en place serveur DHCP

### Configuration serveur DHCP

- Il faut ensuite redémarrer le service :
- Soit avec la commande

```
systemctl (status|stop|start|restart) isc-dhcp-server
```

- Soit en mode debug

```
dhcpd -d
```

### Le DHCP

## Mise en place d’un relai DHCP

### Mise en place relai DHCP

### Relai DHCP

- La mise en place d'un relai DHCP est nécessaire si le serveur DHCP est en dehors du domaine de diffusion des clients.
- Paquet à mettre en place : isc-dhcp-relay
- Paramètres à mettre en place :
- SERVERS : pour définir le ou les serveurs DHCP
- INTERFACES : les interfaces d'écoute du service

### Mise en place relai DHCP

### Relai DHCP

Transcription du détail du support.

```
# vi /etc/default/isc-dhcp-relay

# Defaults for isc-dhcp-relay initscript

# What servers should the DHCP relay forward requests to?
SERVERS="192.168.42.2"

# On what interfaces should the DHCP relay (dhrelay) serve DHCP requests?
INTERFACES="ens33 ens35"

# Additional options that are passed to the DHCP relay daemon?
OPTIONS=""
```

Référence du document : 1knV_w8hId0Rb7jH43kvBj_VUl9X2_a-o · SHA-256 f934c07341c3f053…

## Énoncé · M06 - Enonc‚ du TP1 - Configurer le serveur DHCP avec isc-dhcp-server · 2 pages transcrites

Le nom du fichier Drive présente une anomalie historique d’encodage. Son nom est conservé ; le titre interne est transcrit dans le document. Les noms et chemins de formation portant le nom de l’éditeur ont été neutralisés. Les adresses numériques et les consignes restent celles de la source.

Services réseau en environnement Linux

## Configurer le serveur DHCP avec isc-dhcp-server

### TP 01 du Module 06 – DHCP

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos des modules 1 à 6 et d’avoir réalisé les TP proposés.

Durée estimée

1 heure

## Énoncé

### Objectifs

- Installer et configurer le service relais DHCP de l’ISC
- Installer et configurer le service isc-dhcp-server
- Analyser les échanges entre un client DHCP, un relais DHCP et un serveur DHCP
- Gérer le lancement des composantes DHCP via leur binaire ou en tant que service

### Prérequis

- Les ateliers précédents doivent être fonctionnels.

### Notes

- Pour toutes les configurations réseau, vous remplacerez num_stag par un chiffre entre 1 et 30, par exemple 10.

### Etape 1 - Installation du relais DHCP sur RouTux

- Rechercher le paquet d’installation du service relais DHCP de l’ISC puis l’installer

Ne pas répondre aux questions de l’assistant d’installation

- Identifier le nom des interfaces réseau de RouTux raccordées aux réseaux LAN Clients et LAN Serveurs.
- Faire un test de communication entre RouTux et DEB-S1.
- Relancer l’assistant de configuration pour le paquet précédemment installé au moyen de la commande suivante :

```
# dpkg-reconfigure nom-du-paquet
```

Répondez aux questions concernant les interfaces de travail et saisissez l’adresse IP de DEB- S1 comme adresse du serveur DHCP.

Services réseau en environnement Linux

## RouTux DEB-S1 IPv4 :

LAN Serveurs LAN Clients

172.18.num_stag.0 / 24

Nom de l interface

### Etape 2 - Configuration du service isc-dhcp-server sur DEB-S1

- Installer le service isc-dhcp-server sur DEB-S1
- Configurer le service pour qu’il écoute sur l’interface réseau du serveur
- Configurer le service en respectant les contraintes suivantes :
- Durée de validité des baux par défaut de 4J et maximum de 8J
- Adresse du serveur DNS : adresse IP de DEB-S2
- Adresse de passerelle par défaut à fournir
- Plage d’adresse pour le réseau LAN CLIENT :

de 172.18.num_stag.100 à 172.18. num_stag.200

### Etape 3 - Analyse en mode Debug des échanges client <=> relais <=> serveur

- Avec la commande systemctl appropriée, vérifier :
- Sur RouTux que le service relais DHCP est bien arrêté
- Sur DEB-S1 que le service serveur DHCP est bien arrêté
- Lancer le relais via son binaire, en mode Debug.
- Lancer le service DHCP via son binaire en mode Debug.
- En cas de problème sur le prochain point de consigne, vous analyserez les requêtes échangées entre les différents éléments.
- Configurer Cli-db-10 clients DHCP et s’assurer qu’il a bien obtenu un adressage IP, une adresse de passerelle par défaut et l’adresse du serveur DNS de votre infrastructure.
- Arrêter les processus résultants du lancement des binaires du relais et serveur DHCP.
- Utiliser la commande systemctl appropriée pour démarrer normalement les services relais et serveur DHCP.
- S’assurer que les services relais et serveur DHCP sont bien configurés pour être automatiquement lancés au démarrage des serveurs. Au besoin, faire le nécessaire pour qu’ils le soient.

Référence du document : 14nx0kllUnUYxzjgeZi2RIx4rmD_XI39R · SHA-256 22334c81f63f993f…

## Correction · M06 - Solution du TP1 - Configurer le serveur DHCP avec isc-dhcp-server · 3 pages transcrites

Les noms et chemins de formation portant le nom de l’éditeur ont été neutralisés. Les adresses numériques et les consignes restent celles de la source.

Correction originale : à consulter après avoir tenté l’exercice.

Services réseau en environnement Linux

## Configurer le serveur DHCP avec isc-dhcp-server

### TP 01 du Module 06 – DHCP

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos des modules 1 à 6 et d’avoir réalisé les TP proposés.

Durée estimée

1 heure

## Solution

### Etape 1 - Installation du relais DHCP sur RouTux

## RouTux DEB-S1 IPv4 :

LAN Serveurs LAN Clients

172.18.num_stag.0 / 24

Nom de l interface

Sur RouTux chercher le paquet : # apt search ^isc-dhcp

```
Installation :
# apt install isc-dhcp-relay
```

```
Lister les interfaces :
# ip  a
  ens33 = LAN Clients
  ens36 = LAN Serveurs
```

```
Reconfigurer le paquet :
# dpkg-reconfigure isc-dhcp-server
```

### Etape 2 - Configuration du service isc-dhcp-server sur DEB-S1

##### Installation du serveur DHCP

```
# aptitude install isc-dhcp-server
```

##### Configuration du service

```
# vi /etc/default/is-dhcp-server
 INTERFACESv4=’’ens33’’
```

##### Configuration de dhcpd.conf

```
 # vi /etc/dhcp/dhcpd.conf
 # Options serveur
 option domain-name-servers 192.168.X.12;
 # Parametres generaux
 default-lease-time 345600;
 max-lease-time 691200;
 ddns-update-style none;
 log-facility local7;
 authoritative;

 # Plage LAN Clients
 subnet 172.18.30.0 netmask 255.255.255.0 {
         range 172.18.30.100 172.18.30.200;
         option routers 172.18.30.254;
 }

 # Ecoute sur le LAN Serveurs
 subnet 192.168.30.0  netmask 255.255.255.0 {}

NB pour configurer rsyslog :

Fichier /etc/rsyslog.conf

 #Modif :  *.*;auth,authpriv.none           -/var/log/syslog
 *.*;local07,auth,authpriv.n one          -/var/log/syslog
 #ajout :
 local07.*                        /var/log/dhcpd.log

 Relance des service :
 # systemctl restart rsyslog isc-dhcp-server
```

### Etape 3 - Analyse en mode Debug des échanges client <=> relais <=> serveur

##### Arrêt des services

```
 # systemctl stop isc-dhcp-relay.service
 # systemctl status isc-dhcp-relay.service
```

##### Démarrage du relais DHCP en mode debug

```
# dhcrelay -d -iu ens36 -id  ens33 192.168.30.12
```

Services réseau en environnement Linux

Sur le serveur dhcp : # dhcpd -d

Configurer le client pour passer en DHCP et vérifier les requêtes sur le relai et sur le serveur DHCP Redémarrer les services : Sur deb-s2 # systemctl start isc-dhcp-server

Si erreur au démarrage, vérifier l’existence du fichier /var/run/dhcpd.pid (suite au lancement en mode debug). Le supprimer si nécessaire. Sur routux : # systemctl start isc-dhcp-relay

Référence du document : 1QKukILzDYo1_g60_BIdhNuNuzoQEm9ZX · SHA-256 bc760acf7f894ae4…

## Fiche de synthèse

Les lignes reprennent les titres du cours et la première phrase de chaque partie.

| Partie | Repère du cours |
| --- | --- |
| Support · Module 06 - Support de cours · 10 pages transcrites | Les noms et chemins de formation portant le nom de l’éditeur ont été neutralisés. |
| Énoncé · M06 - Enonc‚ du TP1 - Configurer le serveur DHCP avec isc-dhcp-server · 2 pages transcrites | Le nom du fichier Drive présente une anomalie historique d’encodage. |
| RouTux DEB-S1 IPv4 : | LAN Serveurs LAN Clients 172.18.num_stag.0 / 24 Nom de l interface |
| Correction · M06 - Solution du TP1 - Configurer le serveur DHCP avec isc-dhcp-server · 3 pages transcrites | Les noms et chemins de formation portant le nom de l’éditeur ont été neutralisés. |
| RouTux DEB-S1 IPv4 : | LAN Serveurs LAN Clients 172.18.num_stag.0 / 24 Nom de l interface Sur RouTux chercher le paquet : # apt search ^isc-dhcp |
