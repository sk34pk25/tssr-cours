# Révision — Module 06 : gestion du réseau

## Repères du support

| Notion | Rôle décrit |
| --- | --- |
| VLAN / 802.1Q | Segmentation logique et marquage des trames. |
| Access / trunk | Un VLAN sur le port terminal / transport de plusieurs VLAN autorisés. |
| VSS | Commutateur géré séparément sur chaque hôte. |
| VDS | Commutateur commun à plusieurs hôtes, administré depuis vCenter. |
| Groupe de ports pour VM | Réseau des machines virtuelles. |
| VMkernel | Besoins réseau de l’infrastructure. |
| VMNIC / pNIC | Objet vSphere / carte physique de l’hôte. |
| vNIC | Carte présentée à une VM. |

Le tag 802.1Q du schéma occupe quatre octets ; le support donne les VLAN ID de
1 à 4094 et les priorités de 0 à 7. Une carte physique est liée à un seul vSwitch ;
plusieurs cartes peuvent être liées au même vSwitch.

## Teaming et séparation des flux

Le cours présente l’actif-actif, l’actif-passif, des répartitions par port de VM,
par MAC ou selon les adresses source/destination, et l’ordonnancement pour bascule
en cas de panne. L’inventaire des besoins distingue VM, gestion, migration,
stockage et très haute disponibilité.

**NEEDS_REVIEW :** les formulations du support sur le débit cumulé, l’absence
d’interruption avec VDS et l’impossibilité de communiquer entre groupes de ports
distincts restent à contextualiser ; elles ne suffisent pas à garantir performances,
disponibilité ou isolation pour toute configuration. La mention Enterprise Plus
pour VDS appartient au contexte historique du document.

## Atelier n°4

Chaque ESXi reçoit trois cartes bridgées supplémentaires : vmnic0 pour la gestion,
vmnic1 et vmnic2 pour le commutateur des VM, vmnic3 pour le VMkernel de
stockage/vMotion. Les deux adresses VMkernel sont distinctes dans le même réseau
/24 de laboratoire. Les VLAN restent inchangés. La vNIC invitée est déplacée avant
retrait de son ancien groupe de ports.

La solution montre une terminaison forcée malgré la consigne d’arrêt propre :
divergence à faire revoir. Le laboratoire prépare des réseaux ; aucune migration
ni configuration iSCSI complète n’est démontrée.

[Cours](../../modules/13-virtualisation-serveurs/module-06.md) ·
[Atelier et correction](../../tp/13-virtualisation-serveurs/module-06/index.md)

Provenance A : trois PDF M06 du Drive TSSR en lecture seule ; B : synthèse fidèle.
Aucune question, ressource binaire ou association Kahoot ajoutée.
