# Correction documentaire — Atelier n°4

Restitution de la solution M06, 11 pages, comparée à l’énoncé de trois pages.
Les captures documentent un laboratoire historique ; elles ne prouvent aucune
configuration actuelle. Les adresses, noms internes et captures ne sont pas publiés.

## Cartes et gestion

Les pages 2 et 3 ajoutent trois cartes bridgées à chaque VM hyperviseur dans
Workstation. **NEEDS_REVIEW :** la consigne générale demande un arrêt propre,
mais le détail illustré sélectionne une terminaison forcée des VM. Cette opération
impactante n’est pas reprise comme mode normal d’arrêt.

Les pages 4 et 5 montrent le renommage du groupe de gestion existant, sans changer
son commutateur. Le scénario conserve la première carte pour la gestion.

## Réseaux des VM et du stockage

Les pages 6 et 7 créent deux commutateurs standard. Le premier nouveau commutateur
reçoit **vmnic1 et vmnic2** ; la capture agrandie de la page 7 confirme les deux
liaisons montantes actives. Le second reçoit **vmnic3**. Le tableau et le schéma
final concordent avec cette répartition.

La page 8 crée le groupe de ports des VM et le rattache au premier nouveau
commutateur. La page 9 ajoute une interface VMkernel sur le commutateur de
stockage/vMotion : IPv4 statique sur le réseau /24 du laboratoire et service
**vMotion coché**. L’identifiant VLAN reste inchangé ; l’atelier ne demande pas
de plan VLAN supplémentaire. Cette interface ne constitue pas à elle seule une
configuration iSCSI complète.

## Retrait de l’ancien groupe des VM

La page 10 constate que la vNIC de la VM invitée utilise encore son ancien groupe.
La solution la rattache au nouveau groupe des VM avant de supprimer l’ancien.
Cette dépendance explique l’ordre à conserver. Le groupe de gestion reste présent.

La solution demande de reproduire la configuration sur le second hôte avec une
autre adresse VMkernel dans le même réseau /24. Le schéma de la page 11 montre
les deux hôtes, chacun avec une carte de gestion, deux cartes pour les VM et une
carte pour stockage/vMotion. Il ne fournit pas de résultat de test actuel.

## Points à revoir

- Le bandeau de la solution cite les prérequis du module 5, celui de l’énoncé le
  module 6 ; tous deux demandent l’atelier n°3 déjà réalisé.
- L’option d’arrêt forcé illustrée reste distincte de l’arrêt propre demandé.
- Les noms et adresses effectifs sont propres au laboratoire ; ils sont remplacés
  par des repères neutres dans cette adaptation.
- Aucun script, test, routage, plan VLAN ou commande non présent dans les sources
  n’est ajouté.

[Énoncé](tp-01.md) · [Retour à l’atelier](index.md)

Provenance A : solution M06 et énoncé ; B : restitution fidèle et neutralisée.
