# Révision — Module 08 : datacenter

## Objets et administration

- Les réservations et pools répartissent des ressources CPU/RAM entre usages.
- vCenter regroupe les hôtes dans le datacenter et fournit les services de gestion.
- Les rôles rassemblent les privilèges ; les permissions les associent aux groupes
  ou utilisateurs sur les objets d’inventaire. Le cours privilégie les groupes,
  les droits nécessaires et l’héritage.
- Les comptes locaux d’ESXi et ceux de vCenter n’ont pas le même périmètre.

Le tableau de capacités VCSA/serveur Windows, les ports 9443/443 du support et les
prérequis de personnalisation appartiennent au contexte historique des PDF.
Les ateliers utilisent 5480 pour VCSA puis 443 pour vSphere.

## Modèles

OVF sert aux échanges de VM ; l’atelier exporte `.mf`, `.ovf`, `.vmdk` sans `.nvram`.
La solution sélectionne OVF et VMDK pour l’import. VMTX sert de modèle dans le
datacenter. La conversion transforme l’objet ; le clonage conserve l’original.
La personnalisation peut porter sur nom, IP et identifiant de sécurité, avec les
prérequis VMware Tools/Sysprep cités par le support.

Un fichier OVA regroupe les éléments d’un paquet OVF. La compression dépend du mode de préparation du paquet.
manquante : sa consigne de poursuivre n’est pas une preuve d’intégrité de l’import.

## Migrations

| Action | Élément déplacé |
| --- | --- |
| vMotion | Ressources de calcul d’une VM entre hôtes. |
| Storage vMotion | Fichiers de la VM entre banques de données. |

Le support cite l’activation de vMotion, les réseaux des hôtes et l’accès au
stockage dans son scénario, ainsi que des obstacles liés à ISO, groupes de ports
ou instructions CPU. Cette liste n’est pas généralisée à toute version.

**Point de vigilance.** l’énoncé datacenter demande une migration vers iSCSI puis un
déplacement d’hôte d’une VM non définie dans les prérequis. La solution déplace
le calcul de la seconde VM vers le premier ESXi puis les fichiers de la première
du stockage local vers NFS. Les deux parcours restent à distinguer et à arbitrer.

[Cours](../../modules/13-virtualisation-serveurs/module-08.md) ·
[Deux ateliers et corrections](../../tp/13-virtualisation-serveurs/module-08/index.md)

Provenance A : cinq PDF M08 du Drive TSSR en lecture seule ; B : synthèse fidèle,
données de laboratoire neutralisées. Aucun quiz, commande ou lien Kahoot inventé.

## Question de révision

1. Quelles preuves distinguent migration de calcul et migration de stockage ?
2. Pourquoi vérifier les dépendances d’un déploiement depuis un modèle ?
3. Que relever avant l’export OVF et après l’import dans ESXi2 ?

??? success "Réponses commentées"

    1. Comparer l’hôte d’exécution et la banque de données avant et après. Selon l’opération, l’un ou l’autre change.
    2. Le nouvel invité doit avoir les ressources, le réseau, le stockage et l’identité attendus. Vérifier aussi les droits sur le bon objet.
    3. Noter l’état, les paramètres et la destination, puis vérifier la nouvelle entrée d’inventaire, son réseau et ses disques avant démarrage.

[Revenir au cours](../../modules/13-virtualisation-serveurs/module-08.md)
