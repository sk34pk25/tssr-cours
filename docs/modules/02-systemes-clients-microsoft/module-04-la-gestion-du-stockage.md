# Module 04 — La gestion du stockage

## Objectifs

À l’issue du module, vous devez pouvoir expliquer la chaîne qui mène d’un disque à un volume utilisable, puis réaliser et contrôler les opérations demandées dans le laboratoire.

- découvrir le partitionnement ;
- initialiser le stockage ;
- installer un système de fichiers ;
- utiliser les outils de gestion du stockage.

> Les notions et exemples de cette page reprennent les supports TSSR du module. Ils décrivent le contexte pédagogique Windows du laboratoire ; ils ne constituent pas une mise à jour de documentation produit.

## Du disque au volume utilisable

Le support distingue plusieurs niveaux qu’il faut nommer avant d’agir :

| Élément | Rôle présenté dans le module |
|---|---|
| Disque | Support de stockage à préparer et à gérer. Dans le TP, deux disques sont ajoutés à la VM de laboratoire. |
| Table de partitionnement | « Sommaire » du disque : elle détermine les caractéristiques de ses partitions. |
| Partition ou lecteur logique | Portion logique créée sur le disque. |
| Système de fichiers | Structure installée par le formatage pour organiser les données. |
| Volume | Dans le vocabulaire du support, une partition ou un lecteur logique formaté devient un volume ; un disque dynamique emploie aussi ce terme. |

La démarche source est donc : ajouter ou repérer le disque, l’initialiser, créer la structure demandée, formater le volume, puis lui attribuer la lettre prévue. Chaque étape produit un état à vérifier avant de passer à la suivante.

## MBR et GPT dans le support

Le support présente deux formats de table de partitionnement.

| Format | Repères enseignés |
|---|---|
| MBR | Format historique, lu par le BIOS ; le support indique quatre partitions au maximum et le recours à une partition étendue et à des lecteurs logiques pour aller au-delà. |
| GPT | Format GUID lu par l’UEFI, conçu pour lever les limites présentées pour MBR ; le support indique 128 partitions et une copie des informations de table sur plusieurs secteurs. |

Dans la correction du TP, les deux nouveaux disques sont initialisés en GPT. Elle documente également le cas MBR : trois partitions principales et une partition étendue contenant un lecteur logique. Ces deux chemins ne sont pas interchangeables ; le compte rendu doit préciser celui effectivement utilisé.

## Systèmes de fichiers et volumes

Après le partitionnement, le formatage installe un système de fichiers. Le support présente notamment :

- **NTFS**, système de fichiers Microsoft présenté avec des mécanismes de sécurité, chiffrement, compression et des fonctions supplémentaires ;
- **FAT16/FAT32**, formats historiques cités par le support ;
- **ReFS**, présenté comme une évolution de NTFS ;
- d’autres systèmes de fichiers, dont ext4, VMFS et UDF, simplement cités à titre de repères.

Le scénario du TP emploie NTFS et FAT32 avec des tailles, lettres et libellés précis. Ces valeurs sont des consignes de laboratoire : elles ne définissent pas une configuration universelle.

## VHD et VHDX

Le support introduit les formats **VHD** et **VHDX** comme des disques durs virtuels. Ils peuvent être à taille fixe ou dynamique, être utilisés par des machines virtuelles et être manipulés comme des fichiers. Le module les situe aussi dans le contexte Hyper-V.

Cette présentation ne remplace pas les disques ajoutés dans le TP VMware : aucun fichier VHD, VHDX ou disque virtuel téléchargeable n’est fourni dans le dossier Drive M04 live.

## Administrer le stockage

Le module présente trois moyens d’administration. Ils servent au même objectif pédagogique, mais les contrôles et le chemin suivi dépendent de l’outil choisi.

| Outil | Usage attesté |
|---|---|
| Interface graphique | Ouvrir la gestion des disques, initialiser les disques et créer ou modifier les volumes prévus par le TP. |
| `diskpart` | Réaliser les opérations de ligne de commande demandées sur le volume ciblé. |
| PowerShell | Relever les disques et les volumes de la VM Discovery ; le TP utilise notamment `Get-Disk` et `Get-Volume`. |

### Vérifier plutôt que supposer

La vérification fait partie de chaque opération :

1. relever le numéro, la taille et le type de table de partitionnement du disque concerné ;
2. vérifier la lettre, le nom et la taille des volumes demandés ;
3. après une opération en ligne de commande, relister les disques ou volumes ciblés ;
4. conserver la procédure demandée par le TP avec les contrôles observés.

Les valeurs affichées par la VM Discovery sont propres au laboratoire. Elles ne doivent pas être généralisées à une autre machine.

## Manipulations à risque dans le scénario

Le TP demande notamment du formatage, de l’extension et de la suppression de volumes. Ces opérations sont légitimes dans le laboratoire, mais elles modifient réellement la structure de stockage visée.

!!! warning "Identifier la cible avant une opération de stockage"
    Avant de formater, supprimer ou étendre un volume, vérifier le disque, le volume, sa taille, son libellé et sa lettre. Réaliser uniquement les opérations prévues dans l’environnement de laboratoire : une mauvaise cible peut rendre des données ou une configuration indisponibles.

## Synthèse

Le module entraîne à relier une structure de disque à une opération vérifiable : choisir le modèle de partitionnement indiqué, créer et formater les volumes demandés, leur attribuer les repères prévus, puis relever l’état final avec l’outil adapté.

## Pour pratiquer et réviser

- [Présentation du TP](../../tp/systemes-clients/module-04/index.md)
- [Énoncé du TP](../../tp/systemes-clients/module-04/enonces.md)
- [Correction du TP](../../tp/systemes-clients/module-04/corrections.md)
- [Fiche de révision](../../revision/systemes-clients/module-04-la-gestion-du-stockage.md)
- [Kahoot du module](../../kahoot/02-systemes-clients-microsoft-04-la-gestion-du-stockage.md)
- [Présentation de la formation](index.md)
