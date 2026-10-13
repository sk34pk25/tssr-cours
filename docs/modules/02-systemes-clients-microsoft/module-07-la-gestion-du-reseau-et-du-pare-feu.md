# Module 07 — La gestion du réseau et du pare-feu

**Séquence :** Systèmes clients Microsoft

## Objectifs

À l’issue du module, vous devez pouvoir :

- situer le rôle de la passerelle, de la table de routage et du cache ARP dans le scénario étudié ;
- configurer une carte réseau Windows et identifier son emplacement réseau ;
- renseigner une configuration IPv4 statique ou reconnaître une configuration dynamique ;
- vérifier une communication, un chemin réseau et une résolution de noms avec les outils du TP ;
- adapter le pare-feu Windows aux profils et aux flux demandés par le scénario.

## 1. Un rappel réseau utile au poste Windows

Le support rappelle qu’un poste compare la destination à son réseau local. Si elle appartient à un autre réseau, le poste transmet le paquet à sa **passerelle par défaut**. Le routeur consulte alors sa **table de routage** pour choisir le saut suivant.

Dans cette démonstration, le **cache ARP** permet d’associer une adresse IP à l’adresse MAC nécessaire à l’envoi de la trame sur le réseau local. À chaque routeur, la trame de couche 2 est retirée, l’adresse IP de destination est examinée, puis une nouvelle trame est construite pour l’interface ou le saut suivant.

Ce rappel explique les tests demandés dans le TP. Il ne constitue pas un cours général de routage : les adresses, routes et adresses MAC du support sont des valeurs de démonstration du scénario source.

## 2. Carte réseau et emplacement réseau

Le **Centre Réseau et partage** donne accès aux informations de connectivité, aux connexions détectées et aux profils réseau. Il permet aussi d’atteindre les paramètres de partage et les cartes réseau. La commande `ncpa.cpl` ouvre directement les connexions réseau.

Une carte réseau est associée à un emplacement réseau qui influence le comportement du pare-feu :

- un poste autonome peut être placé sur un réseau **privé** ;
- un poste joint à un domaine utilise l’emplacement de domaine détecté ;
- un réseau **public** s’applique notamment lorsqu’aucune passerelle n’est définie, lorsqu’un domaine n’est pas détecté ou lorsque le poste ne doit pas être visible sur le réseau.

## 3. Configurer IPv4

Une configuration IPv4 comprend les éléments suivants :

| Paramètre | Rôle dans le scénario |
| --- | --- |
| Adresse IP | Identifie l’interface sur le réseau configuré. |
| Masque de sous-réseau | Détermine la partie réseau et la partie hôte de l’adresse. |
| Passerelle par défaut | Permet d’atteindre les réseaux autres que le réseau local. |
| Serveur DNS préféré ou auxiliaire | Sert à la résolution des noms d’hôtes. |

Le TP demande d’utiliser une adresse fixe dont la partie réseau reprend celle de l’environnement de laboratoire et dont la partie hôte est calculée selon la consigne fournie. Ces valeurs sont propres au laboratoire : elles ne sont pas des recommandations de configuration universelles.

## 4. Adressage dynamique, DHCP et APIPA

Le support distingue deux modes d’adressage :

- **statique**, lorsque les paramètres sont saisis manuellement ;
- **dynamique**, lorsque les paramètres sont fournis par DHCP ou, dans le cas décrit par le support, par APIPA si aucun serveur DHCP n’est joignable.

Une adresse APIPA appartient au réseau `169.254.0.0/16` dans le support. Elle autorise une communication temporaire sur le réseau local, mais elle signale dans le scénario qu’il faut vérifier la possibilité de joindre le service DHCP.

## 5. Commandes utilisées dans le TP

| Commande | Rôle attesté par le support et le TP |
| --- | --- |
| `ipconfig` | Afficher la configuration de l’interface ; la correction l’utilise pour identifier une adresse et le réseau associé. |
| `ipconfig /all` | Relever notamment la configuration réseau, la passerelle par défaut et le serveur DNS du laboratoire. |
| `ping` | Tester la connectivité vers la passerelle, une machine du laboratoire ou un hôte demandé. Le support précise que le pare-feu Windows peut bloquer le ping par défaut. |
| `tracert` | Observer le chemin emprunté par les paquets TCP/IP dans les tests demandés. |
| `nslookup` | Vérifier et diagnostiquer la résolution d’un nom d’hôte par le service DNS. |

Les hôtes, adresses publiques, noms DNS et nombres de sauts figurant dans l’énoncé ou la correction sont des observations historiques du laboratoire. Ils doivent être testés dans l’environnement prévu, sans être présentés comme des résultats permanents.

## 6. Pare-feu Windows

Le pare-feu Windows limite les flux réseau autorisés en entrée et en sortie. Le support le présente comme un élément de la stratégie de sécurité du poste, adapté à l’emplacement réseau détecté.

Trois niveaux de configuration sont décrits :

1. l’activation ou la désactivation du pare-feu depuis son interface ;
2. l’autorisation d’une application au moyen de règles génériques ;
3. la console **Pare-feu Windows Defender avec fonctions avancées de sécurité**, qui donne accès aux règles actives et à leur paramétrage détaillé.

Dans le TP, le Bureau à distance est autorisé pour le profil privé seulement. La règle prédéfinie **Partage de fichiers et d’imprimantes (Demande d’écho — Trafic entrant ICMPv4)** est activée sur le profil concerné afin de permettre le test `ping` entre les postes du scénario.

## 7. Vérifier la configuration

La méthode de vérification suit les contrôles réellement demandés par le TP :

1. relever la configuration de l’interface et vérifier l’adresse, le masque, la passerelle et le DNS ;
2. tester la passerelle et la machine du laboratoire avec `ping` ;
3. comparer le chemin observé avec `tracert` ;
4. interroger la résolution des noms demandés avec `nslookup` ;
5. vérifier l’état du pare-feu pour chaque profil puis tester la règle ICMPv4 depuis le poste prévu.

Un résultat dépendant du réseau de laboratoire — résolution DNS, route ou réponse d’un hôte distant — doit être interprété comme une observation du moment, pas comme une valeur attendue universelle.

## Synthèse

La gestion réseau du poste Windows associe la configuration de l’interface, le profil réseau et le filtrage du pare-feu. La passerelle relie le poste aux autres réseaux, le DNS permet d’interroger les noms d’hôtes et les commandes du module donnent des moyens de contrôle ciblés. Le TP relie ces notions à une configuration IPv4 et à l’autorisation contrôlée d’un flux ICMPv4.

## Mise en pratique

- [TP — présentation](../../tp/systemes-clients/module-07/index.md)
- [Énoncé du TP](../../tp/systemes-clients/module-07/enonces.md)
- [Correction du TP](../../tp/systemes-clients/module-07/corrections.md)
- [Fiche de révision](../../revision/systemes-clients/module-07-la-gestion-du-reseau-et-du-pare-feu.md)
- [Kahoot du module](../../kahoot/02-systemes-clients-microsoft-07-la-gestion-du-reseau-et-du-pare-feu.md)
- [Présentation de la formation](index.md)

## Source et provenance

- **Sources A — TSSR Drive live :** support `Module 07 - Support de cours.pdf`, énoncé `Enoncé du TP - Gestion du réseau.pdf` et correction `Solution du TP - Gestion du réseau.pdf`.
- **Structuration B :** organisation pédagogique web, tableaux et articulation entre le support, l’énoncé et la correction, sans ajout de source externe.
