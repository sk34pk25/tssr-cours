# Révision — Module additionnel : Workstation

## Virtualisation

- L'hôte est l'ordinateur physique qui fournit ses ressources.
- La machine virtuelle est un système invité avec son propre système d'exploitation.
- L'hyperviseur relie l'hôte et les VM, puis gère et partage les ressources disponibles.

## Ressources de la VM

| Ressource | À retenir |
|---|---|
| CPU | La VM reçoit des ressources processeur. |
| Mémoire | Elle est attribuée au démarrage et configurable. |
| Disque | C'est un fichier dont la taille dynamique et maximale sont configurables. |
| Réseau | La VM se connecte à un switch virtuel. |

## Réseaux virtuels cités

- Host-Only ;
- VMnet ;
- LAN Segment ;
- Bridge ;
- NAT, présenté comme une translation d'adresse.

## Périphériques et manipulation

Le support cite les médias CD/DVD, USB et disquette. Une VM capture par défaut clavier et souris : `Ctrl` + `Alt` redonne la main à l'hôte ; `Ctrl` + `Alt` + `Inser` est cité pour transmettre `Ctrl` + `Alt` + `Suppr` à la VM.

## Import et export

- Importer : utiliser une VM existante depuis son répertoire d'accueil ou une archive `.ovf` / `.ova`.
- Exporter : sauvegarder l'état actuel de la VM par copie de son répertoire d'accueil ou dans une archive `.ovf` / `.ova`.

## Avantages et limites cités

Le support cite la pause, les snapshots, le clonage, les dossiers partagés et les possibilités liées aux VMware Tools. Il rappelle aussi que l'outil est prévu pour des maquettes simples, est propriétaire VMware et nécessite un temps d'adaptation.

## Liens utiles

- [Cours Workstation](../../modules/02-systemes-clients-microsoft/module-additionnel-workstation.md)
- [Kahoot Workstation](../../kahoot/02-systemes-clients-microsoft-additionnel-workstation.md)
