# Atelier 1 — Installation VMware Workstation

## Cadre

**Durée estimée :** 1 heure.

**Objectif source :** déployer une machine virtuelle Windows Server 2019.

**Prérequis source :** la machine physique de laboratoire est déployée sous Windows
Server 2019. L’adressage IP est assuré par le service DHCP du contexte de formation.

Les ressources citées dans l’atelier — VMware Workstation 16, image ISO Windows Server
2019, partage de distribution et VMware Tools — ne sont pas fournies dans le dossier
Drive M02.

## Consignes de l’atelier

1. Contrôler la présence de VMware Workstation 16.
2. Créer, sur le volume de données du laboratoire, le dossier de stockage prévu pour les
   machines virtuelles.
3. Créer une VM Windows Server 2019 sous le nom de scénario
   `<vm-de-laboratoire>`.
4. Appliquer les paramètres de laboratoire : 2 processeurs, 1 cœur par processeur,
   2 Go de mémoire, disque de 60 Go en fichier unique et carte réseau Bridged.
5. Activer l’option de virtualisation processeur indiquée par la source.
6. Récupérer l’image ISO depuis `<partage-de-laboratoire>` et l’utiliser pour le CD/DVD
   de la VM.
7. Installer Windows Server 2019 avec expérience utilisateur dans la VM.
8. Installer VMware Tools.
9. Nommer la machine selon le scénario de laboratoire, puis l’arrêter.
10. Créer le snapshot final demandé par l’atelier.

## Vérifications attendues

- les paramètres de processeur, mémoire, disque, média et réseau correspondent au
  scénario de laboratoire ;
- l’état final du réseau est **Bridged** ;
- la VM est arrêtée avant la création du snapshot final ;
- le snapshot porte le libellé prévu par le scénario, sans reproduire sa valeur de
  laboratoire dans cette page.

!!! warning "Actions de laboratoire à impact"

    La création de dossier et de VM, les réglages matériels, l’installation de l’invité,
    l’installation de VMware Tools, l’arrêt et le snapshot modifient l’environnement de
    laboratoire. Aucune de ces actions ne constitue une instruction pour l’environnement
    réel du lecteur.

## Divergence documentaire conservée

Le support M02 montre une création avec installation différée. La solution affiche une
sélection d’ISO et le mécanisme Easy Install. L’énoncé demande d’utiliser l’ISO et
d’installer Windows Server 2019 ; cette divergence entre support et solution est
conservée, sans choisir silencieusement une méthode canonique.

## Provenance

Contenu A : énoncé de l’Atelier n°1 consulté dans Drive TSSR en lecture seule. Les
placeholders neutralisent les données de laboratoire ; aucun identifiant, mot de passe,
chemin complet ou nom de machine source n’est reproduit.
