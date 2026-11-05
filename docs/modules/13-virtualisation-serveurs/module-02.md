# Module 02 — Les applications de virtualisation d’environnements sur un poste de travail

## Objectifs

À l’issue du module, les sources visent à permettre de :

- comprendre le fonctionnement d’une application de virtualisation de serveurs ;
- configurer et mettre en place une machine virtuelle avec **VMware Workstation**.

## Repères historiques du module

Le support présente **VMware Workstation 16**. Les captures documentaires citent aussi
Workstation 16 Pro et une compatibilité 16.2.x. Ces références sont des repères
historiques des sources TSSR : elles ne décrivent pas une version actuelle du produit.

## Prérequis matériels et installation

Le support cite les prérequis suivants :

- un processeur Intel VT-x ou AMD-V, avec l’attention portée aux réglages BIOS/UEFI ;
- une quantité de mémoire vive et un espace disque adaptés ;
- l’installation de VMware Workstation avec les paramètres par défaut.

Le support rappelle également un point de compatibilité : une VM d’ancienne version
fonctionne avec une version plus récente de Workstation, tandis qu’une VM de nouvelle
version ne fonctionne qu’avec cette version. Cette formulation est conservée au niveau
du support, sans ajout de règle externe.

## Console et gestion des machines virtuelles

La console VMware Workstation présentée par le support :

- affiche la liste des machines virtuelles dans la *Library* ;
- permet d’ajouter, de créer ou de mentionner l’import d’une machine virtuelle ;
- donne accès au démarrage et aux réglages matériels de la VM sélectionnée ;
- affiche le système virtualisé lorsque la VM est démarrée.

Le support ne fournit pas de procédure complète d’import dans ce module.

## Matériel virtuel et stockage

Une machine virtuelle peut être paramétrée avec des ressources de processeur, de
mémoire, de disque, de CD/DVD, de réseau et de périphériques. La fonction
`Virtual Machine Settings` est présentée comme le point d’accès aux paramètres initiaux,
à l’ajout ou à la suppression de matériel et, pour certains composants, à des réglages à
chaud.

Pour le disque virtuel, le support indique que l’espace est utilisé au fur et à mesure des
besoins. Il présente aussi le stockage dans un fichier unique dans un contexte de
performance. Dans l’atelier, ce choix appartient aux paramètres du scénario de
laboratoire ; ce n’est pas une recommandation générale.

## Interaction avec l’hôte

Les éléments suivants sont décrits par le support :

- gestion des médias CD/DVD, USB et disquette ;
- capture par défaut du clavier et de la souris par la VM, avec `Ctrl` + `Alt` pour
  reprendre la main ;
- transmission de `Ctrl` + `Alt` + `Suppr` à la VM avec `Ctrl` + `Alt` + `Inser` ;
- installation possible de composants additionnels pour améliorer l’interaction ;
- fonction *Shared Folder* pour mapper un dossier de l’hôte dans la VM comme lecteur
  réseau.

## Réseaux virtuels présentés

Le support décrit des cartes réseau virtuelles et les modes suivants :

| Mode ou composant | Rôle présenté dans le support |
| --- | --- |
| VMnet1 / Host-only | Réseau privé avec accès à l’hôte. |
| VMnet8 / NAT | Accès à Internet par l’hôte. |
| VMware DHCP Service | Gestion de l’adressage du réseau privé. |
| VMware NAT Service | Gestion du réseau NAT. |
| Bridged | Mode pont, équivalent à une connexion au réseau physique. |
| LAN segment | Segments spécifiques et indépendants, à déclarer dans Workstation. |

Ces modes sont décrits par le support comme indépendants et servant à isoler des VM
dans des réseaux spécifiques. L’atelier utilise **Bridged** comme état final. La solution
montre d’abord un état NAT intermédiaire, puis son passage explicite en Bridged : NAT ne
doit donc pas être interprété comme le résultat final de l’atelier.

## Création d’une VM : ce que montrent les sources

Le support présente les choix relatifs à l’architecture, au nom et à l’emplacement de la
VM, à la taille et au stockage du disque, au matériel, au média d’installation et au
réseau. Il montre une création avec installation différée, formulée par « I will install
… later ».

L’atelier demande une VM Windows Server 2019 avec des paramètres de scénario : deux
processeurs, un cœur par processeur, 2 Go de mémoire, un disque de 60 Go stocké dans un
fichier unique, une carte Bridged et l’option de virtualisation processeur indiquée dans
le document. Ces valeurs sont propres au laboratoire.

!!! warning "Divergence documentaire conservée"

    Le support montre une installation différée. La solution visuelle sélectionne une
    image ISO et fait apparaître le mécanisme Easy Install. Les deux éléments sont
    conservés comme documents sources distincts : aucune méthode n’est substituée à
    l’autre dans cette page.

## Atelier, outils invités et snapshot

L’atelier demande, dans son environnement de laboratoire, de relier une image ISO
Windows Server 2019, d’installer le système avec expérience utilisateur, puis
d’installer VMware Tools. L’ISO, le partage de distribution, l’installateur Workstation
et VMware Tools ne sont pas fournis dans le dossier Drive M02.

Le résultat demandé comprend l’arrêt préalable de la VM puis la création d’un snapshot
final. Le module ne présente ni retour arrière, ni suppression, ni stratégie de
sauvegarde par snapshot.

## Points de vigilance issus du support

Le support mentionne notamment le démarrage sur un média CD/DVD, les difficultés réseau
après des paramétrages fréquents, l’espace disque insuffisant côté hôte ou invité et le
dimensionnement initial. Ces situations sont rapportées comme cas du support ; elles ne
constituent pas une méthode universelle de diagnostic.


## Vérifier le résultat de l’atelier

| Réglage | Valeur de l’atelier 1 |
| --- | --- |
| VM | `SRV_2K19` |
| Processeur | 2 processeurs, 1 cœur chacun. Exposer VT-x/EPT ou AMD-V/RVI à l’invité pour l’atelier Hyper-V. |
| Mémoire et disque | 2 Go de RAM et 60 Go dans un seul fichier de disque. |
| Réseau final | Bridged. Le mode NAT visible au milieu du corrigé correspond à un état intermédiaire. |
| Système et outils | Windows Server 2019 avec expérience utilisateur et VMware Tools. |
| État de fin | VM arrêtée, snapshot `Fin Atelier 1`. |

Le réseau Host-only utilise classiquement VMnet1 et le NAT VMnet8 dans la configuration montrée. En NAT, le réseau privé peut utiliser un service DHCP distinct du service de traduction d’adresses. Le mode pont place la VM sur le segment auquel le pont la rattache. Un LAN segment relie les VM qui y sont connectées. Vérifier le segment et la carte physique avant de conclure à un problème dans l’invité.

Un snapshot sert à retrouver un état de la VM. Une sauvegarde exploitable doit permettre la restauration même après la perte de l’hôte ou du stockage des snapshots. En cas de déplacement de VM entre postes, vérifier la version du matériel virtuel et la compatibilité de la version de Workstation de destination.

## Question de révision

L’invité a une adresse dans VMnet8 et le TP attend Bridged. Quel réglage contrôler en premier ?

??? success "Correction"

    Ouvrir les paramètres de la carte virtuelle et confirmer le mode de connexion. Vérifier ensuite l’interface physique choisie et l’adressage dans Windows.

[Fiche de révision](../../revision/13-virtualisation-serveurs/module-02.md) · [Atelier et correction](../../tp/13-virtualisation-serveurs/module-02/index.md)
