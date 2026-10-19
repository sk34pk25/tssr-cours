# Module 01 — Des concepts de la virtualisation à leur mise en œuvre

## Objectifs

À l’issue de cette présentation, le support annonce les objectifs suivants :

- identifier les termes **mutualisation**, **consolidation** et **rationalisation** ;
- différencier un hyperviseur de type 1 d’un hyperviseur de type 2.

!!! note "Vocabulaire de cadrage"

    Le support cite mutualisation, consolidation et rationalisation comme objectifs, sans en donner de définition explicite. Cette page les conserve donc comme vocabulaire à identifier, sans leur attribuer de définition externe.

## Virtualisation et paravirtualisation

Selon le schéma du support, dans un contexte de virtualisation, les machines virtuelles s’adressent au matériel présenté par l’hyperviseur sans avoir connaissance explicite de sa présence.

La paravirtualisation est présentée comme une technique dans laquelle les machines virtuelles sont préparées pour appeler directement un hyperviseur : les appels système sont alors redirigés plutôt que traduits.

## Hyperviseurs : type 1 et type 2

| Type présenté | Positionnement dans le schéma source | Exemples cités dans le support |
|---|---|---|
| Type 1 | L’hyperviseur est placé entre le matériel et les machines virtuelles ; le schéma indique un niveau intermédiaire. Il fait office de système d’exploitation. | Hyper-V, KVM, VMware ESXi, XenServer |
| Type 2 | L’hyperviseur est installé comme une application au-dessus d’un système d’exploitation ; le schéma indique deux niveaux intermédiaires. | VirtualBox, VirtualPC, VMware Player, VMware Workstation |

Les produits cités sont des exemples documentaires de la présentation. Ils ne constituent ni une recommandation actuelle, ni un environnement imposé pour ce module.

## Usages, avantages et limites

Le support cite notamment les usages suivants :

- serveurs d’infrastructure locaux ou distants, dont le Cloud ;
- environnements de test et compatibilité ;
- scénarios de PRA, pour « Plan de Reprise d’Activité ».

| Avantages cités | Inconvénients cités |
|---|---|
| Optimisation des taux d’utilisation du matériel | Concentration et dépendance vis-à-vis d’une solution |
| Économies sur les coûts matériels et économies d’énergie | Mise en œuvre complexe avec investissement initial important |
| Gestion facilitée des systèmes, avec granularité | Contraintes d’administration spécifiques, notamment pour le déploiement et la sauvegarde |

## Acteurs, secteurs et solutions cités

### Acteurs et solutions illustrés

La présentation associe des grands éditeurs à VMware, Microsoft, Citrix, Red Hat et Oracle. Elle illustre aussi des logiciels libres avec GNU, Linux et FreeBSD, ainsi que d’autres solutions avec Parallels, Proxmox et Docker.

### Secteurs de la virtualisation

La virtualisation est présentée comme un domaine transversal couvrant plusieurs niveaux d’une infrastructure :

- environnements sur un poste de travail ;
- applications ;
- serveurs ;
- stations de travail ;
- réseau, stockage et services.

### Solutions citées par le support

| Pour le poste de travail | Pour les serveurs |
|---|---|
| VMware Player, VMware Workstation, Oracle VM VirtualBox, Windows Virtual PC, Hyper-V Client, QEMU | VMware vSphere, Hyper-V Windows Server, Xen utilisé par Citrix avec XenServer, KVM utilisé par Red Hat |

Ces listes sont des repères issus de la présentation ; elles ne décrivent pas des logiciels disponibles dans le dossier Drive M01.

## Outils et composants : vue d’ensemble

Le support présente quatre éléments d’outillage :

- l’hyperviseur ;
- la console de gestion des machines virtuelles ;
- les consoles d’accès à la machine virtuelle ;
- les composants complémentaires.

Le paramétrage matériel est évoqué au niveau de l’architecture, du BIOS, du processeur, de la mémoire et du disque. Aucune procédure de configuration n’est fournie dans cette présentation.

### Médias, réseaux et formats mentionnés

| Domaine | Éléments cités |
|---|---|
| Médias amovibles | DVD, ISO, USB, disquette aux formats FLP ou IMG |
| Réseaux virtuels | interne, NAT, pont, LAN dédié |
| Formats de disque | VHD, VMDK, VDI |
| Fichiers de configuration | XML, VMX, VBOX |

Ces éléments sont des notions citées par le support. Aucun média, image disque, configuration, réseau ou ressource de laboratoire correspondante n’est fourni dans M01.

## Repères historiques du support

Les dates ci-dessous sont des repères historiques tels qu’ils sont formulés dans la présentation ; ils ne sont pas actualisés dans ce module.

| Repère | Formulation résumée du support |
|---|---|
| Années 1960/1970 | IBM et les prémices de la virtualisation des mainframes, d’abord en test puis en production |
| Milieu des années 1990 | Apparition d’émulateurs sur micro-informatique, notamment pour Atari, Amiga, Amstrad et des consoles |
| Début des années 2000 | Développement et popularisation par VMware d’un système propriétaire de virtualisation logicielle pour les architectures x86 |
| 2006 | Prise en charge matérielle, par le CPU, des instructions de virtualisation |
| 2007 | Rachat de XenSource par Citrix ; intégration de KVM au noyau Linux ; mention des Virtual Desktop Infrastructures VMware |
| 2009 | Formulations historiques du support concernant un nombre de serveurs virtuels plus élevé que de serveurs physiques et KVM intégré au noyau Linux |

## Synthèse

Cette présentation situe la virtualisation par ses usages, ses avantages et ses limites, ses acteurs et ses secteurs d’application. Elle distingue les hyperviseurs de type 1 et de type 2, puis introduit la paravirtualisation, les composants d’un environnement virtualisé et les formats cités par le support.

## Périmètre documentaire

M01 repose sur un seul support de cours. Il ne comporte ni TP, ni énoncé, ni correction, ni fiche de révision, ni Kahoot, ni ressource téléchargeable attestée. Le PDF source reste une ressource de provenance et n’est pas republié comme téléchargement.

**Source A — Drive TSSR, lecture seule :** `Module 01 - Support de cours.pdf` — ID `1qCsojBU2zSMsawu4PupwZkXbXJSpGSaI` — SHA-256 `ea6cf1bcebe9ae208b570a9ba6b9d74d35490ecd7e344c58952920a1edc63ae2`.
