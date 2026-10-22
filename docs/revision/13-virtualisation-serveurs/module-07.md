# Révision — Module 07 : stockage

## Vocabulaire et chemins d’accès

| Notion | Repère |
| --- | --- |
| SAN / NAS | Stockage en mode bloc / partage de fichiers. |
| iSCSI | Commandes SCSI et blocs transportés par le réseau. |
| Initiateur / cible | Consomme / fournit l’accès au stockage. |
| LUN | Unité logique de stockage. |
| Adaptateur | Relie la solution de stockage à l’hôte. |
| Datastore | Conteneur utilisable pour héberger les données. |
| VMDK / RDM | Disque virtuel sous forme de fichier / mappage direct. |

La source présente création/formatage, suivi d’utilisation, extension, import/export
et démontage des banques. Elle conditionne le MTU 9000 à une prise en charge de
bout en bout ; ce n’est pas une étape ajoutée à l’atelier. Elle cite `ls` pour
voir en console certains fichiers masqués par l’explorateur, sans commande exécutée ici.

## Provisionnement et limites historiques

Le thick réserve l’espace à la création ; le thin l’alloue à la demande jusqu’à
la capacité prévue et expose au risque de surallocation. **NEEDS_REVIEW :** la
limite VMDK de 2 To et la supériorité de performances du thick sont des formulations
du support historique, à contextualiser sans les généraliser aux versions actuelles.

## Atelier n°5

Le serveur Windows Server 2019 restauré au snapshot d’atelier 1 reçoit un disque
de 150 Go. Un disque virtuel iSCSI de 80 Go est associé à une cible autorisant les
deux ESXi. Après détection, une banque VMFS est créée sur le premier hôte et
retrouvée sur le second, sans nouveau formatage du LUN partagé.

Le partage NFS est monté par les deux ESXi en **NFS 3**. L’absence
d’authentification serveur, les utilisateurs non mappés et les accès en
lecture/écriture par IP sont les paramètres de ce laboratoire, à faire revoir
dans leur contexte. Aucune politique de production n’en est déduite.

Les contrôles demandés sont les `ping` vers les VMkernel, l’apparition du
périphérique iSCSI, l’état connecté et la présence des banques dans l’inventaire.
Le « Bonus » vide n’est pas transformé en exercice.

[Cours](../../modules/13-virtualisation-serveurs/module-07.md) ·
[Atelier et correction](../../tp/13-virtualisation-serveurs/module-07/index.md)

Provenance A : trois PDF M07 Drive TSSR en lecture seule ; B : synthèse fidèle,
données internes neutralisées. Aucun quiz ou lien Kahoot ajouté.
