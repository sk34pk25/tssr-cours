# Module 06 — Gestion du réseau vSphere

## Objectif

Configurer le réseau d’un ESXi pour répondre à des besoins ciblés. Le support
présente les VLAN, les composants réseau vSphere et la séparation des flux.
L’atelier poursuit le laboratoire ESXi imbriqué sous VMware Workstation.

## VLAN, marquage et ports

Le support définit un VLAN comme un réseau logique indépendant et présente la
segmentation comme un moyen d’isoler des contextes, de limiter les domaines de
diffusion et d’organiser les flux. Elle suppose des commutateurs compatibles et
une configuration adaptée. La source classe l’affectation selon le port, l’adresse
MAC ou l’adresse IP ; ce classement est celui du document.

Le marquage **802.1Q** ajoute un champ de quatre octets à la trame Ethernet. Le
schéma distingue le TPID `0x8100`, la priorité sur trois bits, un bit nommé CFI
dans ce support historique et le VLAN ID sur douze bits. Le cours donne les
identifiants 1 à 4094 et les priorités 0 à 7, associées à 802.1p.

| Port ou réglage | Présentation du support |
| --- | --- |
| Access | Un VLAN pour la liaison à un équipement terminal. |
| Trunk | Plusieurs VLAN autorisés, notamment pour les liaisons entre commutateurs. |
| Marquage actif | Le tag est propagé à la sortie. |
| Marquage inactif | Le tag est supprimé avant remise de la trame. |

Le support mentionne VLAN 1 comme VLAN par défaut. Il présente aussi les
équipements terminaux capables de gérer 802.1Q, notamment les systèmes, pilotes
réseau et téléphones IP, avec un raccordement trunk dans le scénario décrit.

## Composants du réseau vSphere

| Composant | Fonction décrite |
| --- | --- |
| VSS, vSphere Standard Switch | Commutateur géré indépendamment sur chaque ESXi. |
| VDS, vSwitch distribué | Objet commun à plusieurs hôtes, administré depuis vCenter. |
| Groupement de ports pour VM | Raccordement réseau des machines virtuelles. |
| VMkernel | Réseau des besoins de l’infrastructure de virtualisation. |
| VMNIC / pNIC | Objet vSphere associé à une carte physique / carte physique de l’hôte. |
| vNIC | Carte réseau présentée à une VM. |

Le commutateur standard créé par défaut sert dans le support à la gestion de
l’ESXi et aux VM. Un VSS peut avoir plusieurs groupements de ports et plusieurs
cartes physiques. Une carte physique ne peut être liée qu’à un seul vSwitch,
alors que plusieurs cartes peuvent être liées au même vSwitch.

Le cours associe le VDS à Enterprise Plus dans son contexte de licence historique.
Il présente la segmentation VLAN au niveau du commutateur physique, des
groupements de ports ou des vNIC. Si l’hyperviseur affecte les VLAN, le raccordement
physique doit transporter les VLAN nécessaires selon le scénario du support.

## Regroupement de cartes et flux

Le teaming regroupe plusieurs cartes d’un ESXi, avec au moins deux VMNIC raccordées
au commutateur virtuel dans la présentation du cours. La source distingue
l’actif-actif, associé au débit cumulé, et l’actif-passif, associé à la tolérance
de panne. Elle présente des répartitions par port de VM, par MAC source ou selon
les adresses source et destination. L’ordonnancement de cartes est décrit comme
une bascule en cas de défaillance, sans répartition de charge.

L’inventaire des besoins sépare trafic des VM, gestion, déplacements de VM,
stockage iSCSI et très haute disponibilité. Le support invite à décider quels
flux regrouper et lesquels isoler avant de répartir les cartes.

!!! warning "NEEDS_REVIEW — portée de certaines affirmations"

    Le support affirme que deux groupements de ports distincts d’un même vSwitch
    ne communiquent pas et qu’un VDS évite toute interruption lors d’une migration.
    Il présente aussi le teaming actif-actif comme un débit cumulé. Ces formulations
    restent à contextualiser selon la configuration ; elles ne sont pas transformées
    ici en garanties générales ni en règles d’isolation suffisantes à elles seules.

## Cadre de l’atelier n°4

L’atelier d’une heure suppose les deux ESXi fonctionnels de l’atelier précédent.
Trois cartes bridgées supplémentaires sont ajoutées à chaque hyperviseur. Le
réseau de gestion conserve sa carte ; un second commutateur porte les VM avec deux
cartes ; un troisième porte une interface VMkernel dédiée à iSCSI et vMotion avec
la dernière carte. Les identifiants VLAN ne doivent pas être modifiés.

La solution documente le rattachement de la vNIC de la VM existante au nouveau
groupe avant suppression de son ancien groupe de ports. Les adresses VMkernel
des deux hôtes sont distinctes sur le réseau /24 du laboratoire, neutralisé ici.

!!! warning "NEEDS_REVIEW — arrêt des VM"

    L’énoncé demande un arrêt propre. La solution montre une option de terminaison
    forcée des VM avant arrêt de l’hôte. Cette divergence est conservée ; l’option
    forcée n’est pas reprise comme procédure normale. La couverture de la solution
    décrit surtout le premier hôte puis demande de reproduire sur le second.

## Kahoot

- [TSSR-Virtualisation de serveurs-Module-06](../../kahoot/13-virtualisation-serveurs-module-06.md)

## Provenance

A : support M06, énoncé et solution de gestion réseau, Drive TSSR en lecture seule.
B : restructuration web fidèle, données de laboratoire neutralisées. Le support
contient 21 diapositives sur 11 pages, l’énoncé trois pages et la solution 11 pages.
Aucun laboratoire exécuté, ressource binaire ou commande ajouté.
Cette page reste autonome et ne dépend pas d’un objet encore non publié.
