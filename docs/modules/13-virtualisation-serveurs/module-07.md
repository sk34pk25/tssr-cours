# Module 07 — Gestion du stockage

## Objectif et modes d’accès

Configurer un stockage local ou partagé. Le support distingue la connectique,
le protocole et le mode d’accès, ainsi que stockage dédié à un hôte et stockage
mutualisé. Les services dépendent de données ; les contraintes de stockage ont
donc des conséquences sur leur fonctionnement.

| Notion | Présentation du support |
| --- | --- |
| Mode bloc | Données organisées en blocs, accessibles notamment par des commandes SCSI. |
| SAN | Réseau de stockage donnant accès à des ressources en mode bloc, par exemple via Fibre Channel ou iSCSI. |
| NAS | Service de fichiers partagé sur le réseau, notamment via NFS ou CIFS/SMB. |
| iSCSI | Transport réseau de commandes SCSI et de données pour l’accès en mode bloc. |
| Initiateur iSCSI | Élément qui accède au stockage proposé. |
| Cible iSCSI | Élément qui met l’espace de stockage à disposition. |
| LUN | Unité logique de stockage présentée par la baie dans le schéma. |
| HBA | Adaptateur permettant l’accès aux espaces de stockage après configuration. |

Le support présente comme limites du stockage local les contraintes matérielles,
la répartition de la tolérance aux pannes entre serveurs, l’effet des sauvegardes
sur les performances et la distance entre serveur et stockage. La mutualisation
est la réponse étudiée, avec un choix entre modes bloc et fichier.

## Adaptateurs et banques de données

Les **adaptateurs de stockage** relient les solutions aux hôtes. Les **banques de
données**, ou datastores, sont les conteneurs utilisés pour héberger leurs données.
Le choix dépend du partage entre hôtes, du protocole, du support, du mode d’accès
et du système de fichiers.

Le support présente les disques locaux, HBA/CNA matériels et adaptateurs logiciels
iSCSI ou FCoE. Il associe ces derniers à une charge sur l’hôte ; cette comparaison
reste celle du document, sans recommandation matérielle actuelle ajoutée.

Pour iSCSI, il recommande un réseau dédié et si possible redondant. Il mentionne
un MTU de 9000 **uniquement sous condition de prise en charge de bout en bout**.
Cette recommandation du support ne devient pas une étape imposée de l’atelier,
dont les captures conservent le réseau préparé précédemment.

## Datastores et gestion

Le cours présente VMFS, RDM avec VMFS et NFS. Il décrit VMFS comme permettant
l’accès concurrent en lecture et écriture par plusieurs hôtes. Son tableau
historique compare VMFS 2, 3, 5 et 6, avec VMFS 6 associé à vSphere 6.5 et supérieur.
Les cellules fusionnées ou peu explicites ne sont pas reconstituées.

Les besoins sont à inventorier par usage : production, tests, modèles et ISO, avec
des attentes de performances, de tolérance aux pannes et de criticité. Les tâches
présentées sont création/formatage, suivi d’utilisation, extension dynamique,
parcours/import/export et démontage. Le support cite `ls` en console ou après
connexion SSH pour voir des fichiers masqués par l’explorateur ; aucune connexion
ni commande n’est exécutée ici.

## Disques des VM et provisionnement

Le support distingue les fichiers **VMDK** et le mappage direct **RDM**. Il cite
pour RDM certains besoins liés au SAN ou aux services de cluster Microsoft.

| Provisionnement | Description du support | Point de vigilance cité |
| --- | --- | --- |
| Thick | Réservation statique de tout l’espace indiqué dès la création. | Temps de création. |
| Thin | Allocation à la demande jusqu’au maximum indiqué. | Surallocation possible du datastore. |

!!! warning "NEEDS_REVIEW — limites et performances historiques"

    Le document affirme une limite VMDK de 2 To et présente le thick comme plus
    performant. Ces formulations sont conservées comme indications du support
    historique à contextualiser, sans limite universelle ni classement de
    performances ajouté pour les versions actuelles.

## Cadre de l’atelier n°5

L’atelier dure deux à trois heures. Il utilise les deux ESXi et leurs réseaux
préparés aux ateliers 3 et 4, plus une VM Windows Server 2019 restaurée au snapshot
de fin d’atelier 1. Cette restauration modifie l’état du laboratoire.

Le serveur reçoit un disque de 150 Go et fournit deux services : une cible iSCSI
associée à un disque virtuel de **80 Go**, puis un partage **NFS 3**. Chaque ESXi
accède à la même banque VMFS iSCSI et monte le partage NFS. Le texte parle d’une
« cible de 80 Go » ; les captures distinguent le disque virtuel et sa cible.

!!! warning "NEEDS_REVIEW — périmètre du laboratoire"

    Les paramètres NFS demandés sont sans authentification serveur, avec accès
    des utilisateurs non mappés et autorisation des deux hyperviseurs en lecture/
    écriture par adresse. Ils appartiennent au scénario de laboratoire et ne
    constituent pas une politique de production. Les adresses, noms et chemins
    internes sont neutralisés. La solution cite le module 6 dans son bandeau,
    contre le module 7 dans l’énoncé. Le mot « Bonus » final ne contient aucun
    exercice exploitable ; aucun bonus n’est créé.

## Kahoot

- [TSSR-Virtualisation de serveurs-Module-07](../../kahoot/13-virtualisation-serveurs-module-07.md)

## Provenance

A : support M07, énoncé de quatre pages et solution de 17 pages, Drive TSSR en
lecture seule. B : restructuration fidèle avec lecture des captures, sans
republication de données internes. Aucun TP exécuté ou ressource binaire ajouté. Cette page reste indépendante des objets non publiés.
