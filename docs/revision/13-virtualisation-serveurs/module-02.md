# Révision M02 — Applications de virtualisation sur un poste de travail

## Repères du module

Le module présente VMware Workstation 16 comme référence historique et vise à comprendre
une application de virtualisation de serveurs ainsi qu’à configurer une VM dans le cadre
de l’atelier.

## À retenir du support

| Sujet | Repères attestés |
| --- | --- |
| Prérequis | VT-x ou AMD-V, réglages BIOS/UEFI, mémoire et espace disque adaptés. |
| Console | Library, ajout, création, import mentionné, démarrage et réglages matériels. |
| Matériel virtuel | CPU, mémoire, disque, CD/DVD, réseau et périphériques. |
| Stockage | Espace utilisé au fur et à mesure ; fichier unique présenté dans le contexte du support et de l’atelier. |
| Interaction | CD/DVD, USB, disquette, capture clavier/souris, raccourcis cités et Shared Folder. |

## Réseaux virtuels

- **VMnet1 / Host-only** : réseau privé avec accès à l’hôte.
- **VMnet8 / NAT** : accès à Internet par l’hôte.
- **VMware DHCP Service** : service cité pour le réseau privé.
- **VMware NAT Service** : service cité pour le réseau NAT.
- **Bridged** : mode pont équivalent à une connexion au réseau physique.
- **LAN segment** : segments spécifiques et indépendants déclarés dans Workstation.

Dans l’atelier, **Bridged** est l’état final. NAT visible dans une capture de correction
est un état intermédiaire avant son remplacement explicite.

## Paramètres de l’Atelier 1

Les valeurs suivantes sont des paramètres de scénario de laboratoire, pas des règles
générales : 2 processeurs, 1 cœur par processeur, 2 Go de mémoire, disque de 60 Go en
fichier unique, réseau Bridged et Windows Server 2019 invité.

L’atelier demande également l’usage d’une ISO, l’installation de VMware Tools, l’arrêt
de la VM et la création d’un snapshot final. ISO, partage de distribution, installateur
Workstation et VMware Tools restent des ressources référencées mais absentes du Drive
M02.

## Points de vigilance documentaires

- Le support montre une installation différée ; la solution montre une ISO et Easy
  Install. Cette divergence est conservée.
- Les versions Workstation 16, Workstation 16 Pro et 16.2.x, ainsi que Windows Server
  2019, sont des repères historiques des sources.
- Le module ne fournit pas de stratégie de snapshot, de retour arrière, de sauvegarde ou
  de gestion avancée des réseaux virtuels.

## Provenance

Contenu A : support, énoncé et solution M02 consultés dans Drive TSSR en lecture seule.
Contenu B : synthèse web limitée aux sources.
