# Module 05 — DNS résolveur

Les parties ci-dessous reprennent le cours original, dans le même ordre. Les encadrés et les schémas répètent ses formulations.

## Parcours de lecture

1. Support · Module 05 - Support de cours · 10 pages transcrites
2. Services réseau en environnement Linux
3. Fonctionnement du service
4. DNS
5. Le DNS résolveur
6. Mise en place serveur
7. DNS résolveur
8. Énoncé · M05 - Enonc‚ du TP1 - Configurer un serveur DNS resolveur · 2 pages transcrites
9. Configurer un serveur DNS résolveur
10. Énoncé
11. Correction · M05 - Solution du TP1 - Configurer un serveur DNS resolveur · 2 pages transcrites
12. Configurer un serveur DNS résolveur
13. Solution

**Visuel externe**

```mermaid
flowchart TD
    N1["Support · Module 05 - Support de cours · 10 pages transcrites"]
    N2["Services réseau en environnement Linux"]
    N3["Fonctionnement du service"]
    N4["DNS"]
    N5["Le DNS résolveur"]
    N6["Mise en place serveur"]
    N7["DNS résolveur"]
    N8["Énoncé · M05 - Enonc‚ du TP1 - Configurer un serveur DNS resolveur · 2 pages transcrites"]
    N9["Configurer un serveur DNS résolveur"]
    N10["Énoncé"]
    N11["Correction · M05 - Solution du TP1 - Configurer un serveur DNS resolveur · 2 pages tran…"]
    N12["Configurer un serveur DNS résolveur"]
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

## Support · Module 05 - Support de cours · 10 pages transcrites

## Services réseau en environnement Linux

Module 05 – DNS Résolveur

### DNS Partie 1

### Objectifs

!!! note "À retenir"
    Comprendre le fonctionnement du service DNS Mettre en place un serveur DNS résolveur

- Comprendre le fonctionnement du service DNS
- Mettre en place un serveur DNS résolveur

### DNS Partie 1

## Fonctionnement du service

## DNS

### Fonctionnement du service DNS

### Fonctionnement DNS

!!! note "À retenir"
    Le service DNS va, entre autres, permettre : De faire la correspondance entre un FQDN et une adresse IP Et inversement, d'indiquer le nom d'hôte à partir d'une IP De connaître les serveurs de messagerie d'un domaine Service essentiel au fonctionnement d'Internet Protocole standardisé par l'IETF

**Visuel externe**

```mermaid
flowchart LR
    N1["Le service DNS va, entre autres, permettre :"]
    N2["De faire la correspondance entre un FQDN et une adresse IP"]
    N3["Et inversement, d'indiquer le nom d'hôte à partir d'une IP"]
    N4["De connaître les serveurs de messagerie d'un domaine"]
    N5["Service essentiel au fonctionnement d'Internet"]
    N6["Protocole standardisé par l'IETF"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
    N5 --> N6
```

- Le service DNS va, entre autres, permettre :
- De faire la correspondance entre un FQDN et une adresse IP
- Et inversement, d'indiquer le nom d'hôte à partir d'une IP
- De connaître les serveurs de messagerie d'un domaine
- Service essentiel au fonctionnement d'Internet
- Protocole standardisé par l'IETF

### Fonctionnement du service DNS

### Fonctionnement DNS

!!! note "À retenir"
    Toute machine (client, serveur, mobile, etc.) va constamment faire des requêtes sur le serveur DNS associé pour obtenir des IP.

!!! example "Exemple"
    Requête DNS et réponse IPv4 de l’exemple source L’exemple du support demande l’adresse de www.baidu.com.

Toute machine (client, serveur, mobile, etc.) va constamment faire des requêtes sur le serveur DNS associé pour obtenir des IP.

![Requête DNS et réponse IPv4 de l’exemple source](../../assets/course-sources/isolated/e323a04269a38662/linux-net-vector-4.webp)

Requête DNS et réponse IPv4 de l’exemple source

L’exemple du support demande l’adresse de www.baidu.com. Le serveur répond 103.235.46.39.

@IP de www.baidu.com . ?

@IP de www.baidu.com .

= 103.235.46.39

### Fonctionnement du service DNS

### Fonctionnement DNS

!!! note "À retenir"
    La structure de nommage du DNS est arborescente.

**Visuel externe**

```mermaid
flowchart LR
    N1["La structure de nommage du DNS est arborescente."]
    N2["Le séparateur de « niveau » est le point."]
    N3["Les domaines dits TLD (Top Level Domain) sont gérés par l'IANA."]
    N1 --> N2
    N2 --> N3
```

- La structure de nommage du DNS est arborescente.
- Une URL va se lire de la droite vers la gauche pour descendre l'arborescence DNS.
- Le séparateur de « niveau » est le point.
- Les domaines dits TLD (Top Level Domain) sont gérés par l'IANA.

### Fonctionnement du service DNS

#### Nom d’hôte pleinement qualifié

!!! note "À retenir"
    Le schéma affiche `https://www.indiatimes.com.`.

Le schéma affiche `https://www.indiatimes.com.`. Les repères (1), (2) et (3) identifient les points expliqués dans le tableau.

| Élément | Signification |
| --- | --- |
| . (1) | Le point par lequel se termine tout nom de domaine représente la racine de l’espace de nom DNS. |
| com. | Nom de domaine, sous-domaine du domaine racine |
| . (2) | Point / caractère de séparation entre domaines |
| indiatimes.com. | Nom de domaine, sous-domaine du domaine « com. » |
| . (3) | Point / caractère de séparation entre le nom du domaine et le nom d’un hôte de ce domaine |
| www.indiatimes.com. | Nom d’hôte pleinement qualifié |

#### Noms de domaine internes et publics

!!! note "À retenir"
    Le protocole DNS peut aussi être utilisé pour des domaines non résolvables sur Internet pour des réseaux internes.

- Le protocole DNS peut aussi être utilisé pour des domaines non résolvables sur Internet pour des réseaux internes.
- On utilise alors des suffixes non publics.

| Domaine | Utilité |
| --- | --- |
| masuperentreprise.bzh | Nom de domaine utilisé pour référencer les services de mon entreprise accessibles depuis l’Internet |
| enigmes.corp | Nom de domaine propre à mon entreprise dans lequel sont référencées les ressources hébergées et accessibles uniquement localement dans l’entreprise |

### Fonctionnement du service DNS

### Fonctionnement DNS

!!! note "À retenir"
    On distingue deux « types » de résolution DNS : Résoudre les requêtes clientes relatives à tout domaine => résolveur DNS complet Être source d'information pour un ou plusieurs domaines ciblés => DNS faisant autorité

- On distingue deux « types » de résolution DNS :
- Résoudre les requêtes clientes relatives à tout domaine => résolveur DNS complet
- Être source d'information pour un ou plusieurs domaines ciblés => DNS faisant autorité

### DNS Partie 1

## Le DNS résolveur

### Le DNS résolveur

### Rôle

**Visuel externe**

```mermaid
flowchart LR
    N1["Un serveur DNS résolveur complet doit répondre aux requêtes des clients."]
    N2["Pour y répondre, il doit faire appel à d'autres serveurs DNS."]
    N3["Il n'est pas source d'information de domaines."]
    N1 --> N2
    N2 --> N3
```

- Un serveur DNS résolveur complet doit répondre aux requêtes des clients.
- Pour y répondre, il doit faire appel à d'autres serveurs DNS.
- Il n'est pas source d'information de domaines.

![Interrogations du résolveur vers les autres serveurs DNS](../../assets/course-sources/isolated/e323a04269a38662/linux-net-vector-5.webp)

Interrogations du résolveur vers les autres serveurs DNS

1. Le client adresse sa requête au résolveur. 2. Le résolveur interroge les autres serveurs DNS.

1 2

### Le DNS résolveur

### Fonctionnement

**Visuel externe**

```mermaid
flowchart LR
    N1["Un serveur DNS résolveur complet interroge avec des requêtes itératives :"]
    N2["Les serveurs DNS racines"]
    N3["Les serveurs DNS faisant autorité sur les TLD"]
    N4["Les serveurs DNS faisant autorité sur le domaine"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
```

- Un serveur DNS résolveur complet interroge avec des requêtes itératives :
- Les serveurs DNS racines
- Les serveurs DNS faisant autorité sur les TLD
- Les serveurs DNS faisant autorité sur le domaine
- Il peut utiliser un serveur DNS « redirecteur » (forwarder) pour limiter les requêtes qu'il va faire.

### Le DNS résolveur

### Fonctionnement

- On parle de redirecteur inconditionnel quand un serveur DNS lui adresse des requêtes récursives pour résoudre TOUTES les requêtes des clients.
- On parle de redirecteur conditionnel pour indiquer pour un espace de nom donné le serveur à qui adresser la requête récursive de résolution.
- Les deux peuvent être complémentaires.

### Le DNS résolveur

### Fonctionnement

- Les serveurs DNS gardent les réponses des requêtes en cache.
- La durée de conservation en cache est définie par les serveurs faisant autorité sur l'enregistrement.

### DNS Partie 1

## Mise en place serveur

## DNS résolveur

### Mise en place serveur DNS résolveur

### Mise en place

- Le serveur DNS utilisé est bind9

| Nom du paquet | bind9 |
| --- | --- |
| Fichier de configuration | /etc/bind/named.conf (découpé en plusieurs fichiers inclus) |
| Nom du service | bind9 |
| Commandes | named-checkconf named-checkzone rndc |
| Fichier journal | /var/log/syslog |

### Mise en place serveur DNS résolveur

### Mise en place

- Le fichier de configuration inclut d'autres fichiers :

### /etc/bind/named.conf

| Instruction | Rôle |
| --- | --- |
| include /etc/bind/named.conf.options ; | Configuration des options |
| include /etc/bind/named.conf.local ; | Configuration des zones hébergées localement |
| include /etc/bind/named.conf.default-zones ; | Configuration des zones par défaut |

### Mise en place serveur DNS résolveur

### DNS résolveur

- Fichier /etc/bind/named.conf
- définition d’ACLs et des includes

Transcription du détail du support.

```
// rsxclts = réseaux des postes clients de l’entreprise
acl rsxclts { 127.0.0.0/8; 192.168.53.0/24; 192.168.1.0/24; };

include /etc/bind/named.conf.options ;
include /etc/bind/named.conf.local;
include /etc/bind/named.conf.default-zones ;
```

### Mise en place serveur DNS résolveur

### DNS résolveur

- Fichier /etc/bind/named.conf.options

Transcription du détail du support.

```
options {
    // Répertoire de travail de Bind9
    directory "/var/cache/bind";

    // Redirection exclusive (pas d’appel aux racines en cas d’indisponibilité)
    // vers les serveurs quad9
    forward only;
    forwarders { 9.9.9.9; };

    // Restriction des hôtes auxquels répond le serveur
    allow-query { rsxclts; };

    // Restriction des hôtes autorisés à adresser des requêtes récursives
    allow-recursion { rsxclts; };

    // Communication DNSSEC désactivée
    dnssec-enable no;
    dnssec-validation no;

    // Information de version non communiquée
    version none;
};
```

### Mise en place serveur DNS résolveur

### DNS résolveur

- Fichier /etc/bind/named.conf.default-zones
- Définit les zones par défaut
- Définit les adresses des serveurs racines
- Aucun changement à appliquer
- Fichier /etc/bind/named.conf.local sera vu dans la seconde partie sur le DNS

Référence du document : 1FH2JveLw64dsNm5dgFXqMSiz7DAdCg9P · SHA-256 e323a04269a38662…

## Énoncé · M05 - Enonc‚ du TP1 - Configurer un serveur DNS resolveur · 2 pages transcrites

Le nom du fichier Drive présente une anomalie historique d’encodage. Son nom est conservé ; le titre interne est transcrit dans le document. Les noms et chemins de formation portant le nom de l’éditeur ont été neutralisés. Les adresses numériques et les consignes restent celles de la source.

## Configurer un serveur DNS résolveur

### TP 01 du Module 05 – DNS résolveur

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos des modules 1 à 5 et d’avoir réalisé les TP proposés.

Durée estimée

1 heure

## Énoncé

### Objectifs

- Intégrer un service DNS résolveur dans une infrastructure réseau existante.
- Faire des tests de résolution DNS.

### Prérequis

- Les ateliers précédents doivent être fonctionnels

### Notes

- Pour toutes les configurations réseau, vous remplacerez num_stag par un chiffre entre 1 et 30, par exemple 10.

### Etape 1 - Installation et configurer le service DNS Bind9 sur DEB-S2

- Installer le service Bind9.
- Depuis les options de configuration du service, désactiver DNSSEC et autoriser les requêtes provenant des réseaux LAN Clients et LAN Serveurs.
- Redémarrer le service pour prendre en compte les modifications apportées.

### Etape 2 - Modification de la configuration cliente DNS des postes

- Installer le paquet dnsutils sur le poste Cli-db-10.
- Modifier la configuration cliente DNS de la machine Cli-db-10 afin qu’il interroge DEB- S2.
- Modifier la configuration cliente DNS des serveurs DEB-S1, DEB-S2 et RouTux afin qu’ils interrogent DEB-S2.

### Etape 3 - Test de résolution depuis le client

- Depuis votre machine physique, tester la résolution de l’hôte www.isc.org et yahoo.fr.

Ces tests ont-ils abouti ? Quelles sont les adresses IP des hôtes requêtés ?

- Depuis le poste Cli-db-10, réitérer les tests de résolution effectués précédemment :

www.isc.org

www.yahoo.fr

### D’après vous, quel mécanisme votre serveur utilise-t-il actuellement pour résoudre les noms d’hôtes publics ?

### Etape 4 - Configuration de Bind9 pour faire appel aux services de redirecteur

- Sur DEB-S2, modifier la configuration du service Bind9 afin qu’il fasse appel au redirecteur FAI (ou l’adresse IP d’un forwarder extérieur) pour résoudre les noms d’hôte publics.
- Refaire les tests de résolution précédents.

Référence du document : 1kfMjKNds6yO0dYORj33pnaXthVCdKnzz · SHA-256 56291e922b65c321…

## Correction · M05 - Solution du TP1 - Configurer un serveur DNS resolveur · 2 pages transcrites

Les noms et chemins de formation portant le nom de l’éditeur ont été neutralisés. Les adresses numériques et les consignes restent celles de la source.

Correction originale : à consulter après avoir tenté l’exercice.

## Configurer un serveur DNS résolveur

### TP 01 du Module 05 – DNS résolveur

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos des modules 1 à 5 et d’avoir réalisé les TP proposés.

Durée estimée

1 heure

## Solution

### Etape 1 - Installation et configurer le service DNS Bind9 sur DEB-S2

- Installer le service Bind9 :

```
# apt install bind9
```

```
Configuration dans /etc/bind/named.conf.local

 dnssec-validation no ;
 allow-recursion {
                 172.18.X.0/24;
                 192.168.X.0/24;
 };
```

Test et reload de la configuration

```
 # named-checkconf
```

```
 # rndc reload
```

### Etape 2 - Modification de la configuration cliente DNS des postes

- Installer le paquet dnsutils sur le poste Cli-db-10 :

```
# apt install dnsutils
```

Sur deb-s1 et les autres :

```
 # vi /etc/resolv.conf
```

```
 nameserver 192.168.X.12
```

### Etape 3 - Test de résolution depuis le client

D’après vous, quel mécanisme votre serveur utilise-t-il actuellement pour résoudre les noms d’hôtes publics ?

Les Serveurs racines via configuration par défaut

Fichier /usr/share/dns/root.hints chargé dans named.conf.default-zones

Pour tester, il est possible d’utiliser soit :

- la commande ping
- la commande dig

A tester :

www.isc.org

www.yahoo.fr

### Etape 4 - Configuration de Bind9 pour faire appel aux services de redirecteur

```
Rajouter le ou les forwarders :

# vi  /etc/bind/named.conf.options
 forwarders {
                 66.55.44.33;
 };
```

Tester et relancer : # named-checkconf # rndc reload # rndc flush => pour vider le cache serveur

Référence du document : 1ctD0FWwFAWraAtkhNLLyRctR3gZuILaS · SHA-256 530e0fdccc58a38c…

## Fiche de synthèse

Les lignes reprennent les titres du cours et la première phrase de chaque partie.

| Partie | Repère du cours |
| --- | --- |
| Énoncé · M05 - Enonc‚ du TP1 - Configurer un serveur DNS resolveur · 2 pages transcrites | Le nom du fichier Drive présente une anomalie historique d’encodage. |
| Correction · M05 - Solution du TP1 - Configurer un serveur DNS resolveur · 2 pages transcrites | Les noms et chemins de formation portant le nom de l’éditeur ont été neutralisés. |
