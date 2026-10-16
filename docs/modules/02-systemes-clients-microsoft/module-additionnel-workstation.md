# Module additionnel — Workstation

## Objectifs du module

Le support présente la virtualisation, les ressources d'une machine virtuelle, ses connexions réseau, ainsi que l'import et l'export de machines virtuelles.

## Principe de virtualisation

La virtualisation permet de faire cohabiter plusieurs systèmes invités, isolés et indépendants, à partir des ressources d'un ordinateur physique appelé **hôte**.

- L'**hôte** est l'ordinateur physique, serveur ou PC client, qui possède les ressources.
- Une **machine virtuelle** (VM) possède son propre système d'exploitation, utilise les ressources de l'hôte et est définie par un ensemble de fichiers dans un répertoire d'accueil.
- L'**hyperviseur** est le lien entre l'hôte et les VM. Il peut être un logiciel ou un système d'exploitation ; il propose, gère, partage et priorise les ressources disponibles lorsque les VM en ont besoin.

## Ressources d'une machine virtuelle

| Ressource | Repère issu du support |
|---|---|
| Processeur | Des ressources CPU sont attribuées à la VM. |
| Mémoire vive | Elle est attribuée au démarrage et reste configurable. |
| Disque | Le disque virtuel est un fichier ; sa taille dynamique et sa taille maximale sont configurables. |
| Carte réseau | Elle relie la VM à un switch virtuel afin de communiquer avec son environnement. |

Le support cite aussi les lecteurs DVD, les stockages externes, la carte graphique, la carte son et le firmware.

## Réseaux virtuels attestés

Le support présente les switches virtuels suivants : **Host-Only**, **VMnet**, **LAN Segment**, **Bridge** et **NAT** (translation d'adresse).

Une VM peut communiquer avec des VM de son réseau ou de réseaux différents, l'hôte, d'autres machines physiques et, selon le raccordement choisi, le monde extérieur. Les noms d'adaptateurs et topologies illustrés dans le support sont des exemples de démonstration, pas une prescription de configuration.

## Avantages et limites

Les avantages cités sont une interface épurée, la pause, les snapshots, le clonage, les dossiers partagés entre l'hôte et la VM, ainsi que le glisser-déposer et d'autres possibilités liées aux VMware Tools.

Le support présente aussi des limites : l'outil est prévu pour des maquettes simples, il s'agit d'un logiciel propriétaire VMware et sa prise en main demande une adaptation aux notions de virtualisation des systèmes, du stockage et des réseaux.

## Périphériques amovibles

Les médias CD/DVD, USB et disquette sont gérés. La VM capture par défaut clavier et souris : `Ctrl` + `Alt` permet de reprendre la main, et `Ctrl` + `Alt` + `Inser` est cité pour transmettre `Ctrl` + `Alt` + `Suppr` à la VM.

## Importer et exporter une VM

Importer permet d'utiliser une VM existante depuis son répertoire d'accueil ou une archive `.ovf` ou `.ova`. Exporter consiste à sauvegarder l'état actuel de la VM pour la réutiliser plus tard, soit en copiant son répertoire d'accueil, soit dans une archive `.ovf` ou `.ova`.

Le support situe cette démonstration dans la préparation de maquettes d'apprentissage ou de test avant production. Il ne fournit ni VM, ni archive, ni procédure de laboratoire à exécuter dans ce module.

## Synthèse

Une VM s'appuie sur les ressources de l'hôte sous le contrôle d'un hyperviseur. CPU, mémoire, disque et réseau sont des ressources configurées pour la VM. Les switches virtuels, les périphériques amovibles et l'import/export complètent cette première vue de Workstation.

## Liens utiles

- [Fiche de révision Workstation](../../revision/systemes-clients/module-additionnel-workstation.md)
- [Kahoot Workstation](../../kahoot/02-systemes-clients-microsoft-additionnel-workstation.md)
- [Présentation de la formation](index.md)

## Provenance

Contenu A : `Module additionnel - Support de cours.pdf` consulté dans Drive TSSR en lecture seule. Contenu B : reformulation et organisation pédagogique web, sans ajout de procédure de virtualisation externe.
