# Module 04 — Découverte d’Hyper-V

## Objectifs et contexte documentaire

Le module vise la découverte d’**Hyper-V 2019** et des menus de configuration de
l’hyperviseur Microsoft. Le support emploie également des repères plus anciens :
Hyper-V v2 sous Windows Server 2008 R2, Hyper-V v3 sous Windows 8/Windows Server 2012.
Ces versions décrivent le contexte historique du cours, sans recommandation de
version actuelle.

## Prérequis et installation présentés

Le support cite un processeur 64 bits Intel VT-x ou AMD-V, les réglages BIOS/UEFI
correspondants, ainsi que des ressources CPU, RAM et disque adaptées. Pour le
logiciel, il mentionne Windows Server à partir de 2008 et Windows 8 Pro 64 bits avec
SLAT (*Second Level Address Translation*).

Sur serveur, Hyper-V est présenté comme un rôle à installer depuis le Gestionnaire
de serveur ; sur le client Windows 8, comme une fonctionnalité à activer. Le support
historique indique deux redémarrages afin de démarrer l’hyperviseur en mode natif,
de type 1. Cette indication n’est pas étendue à toutes les versions de Windows.

## Console, matériel et interaction

La console de gestion rassemble les serveurs, la liste et l’état des VM, les
informations de la VM sélectionnée et les actions de gestion du serveur ou de la VM.
Une machine peut être affichée dans une console séparée. **Fermer sa fenêtre
n’arrête pas la VM.**

Le support présente les paramètres matériels, les services d’intégration selon la
compatibilité des systèmes, les captures instantanées, l’importation et l’exportation.
Il décrit un outil orienté administration et des fichiers de VM difficiles à
manipuler manuellement. Il mentionne aussi l’absence de gestion des médias USB
amovibles avec Hyper-V v2 ; cette limite reste attachée à la version citée.

Les raccourcis documentés sont `Ctrl` + `Alt` + `Gauche` pour la bascule et
`Ctrl` + `Alt` + `Fin` pour transmettre `Ctrl` + `Alt` + `Suppr` dans la VM.

## Réseaux virtuels

| Réseau du support | Portée décrite |
| --- | --- |
| Privé | Communication entre les invités uniquement. |
| Interne | Communication entre les VM et avec l’hôte, rapprochée de Host-only. |
| Externe | Connexion au réseau physique, rapprochée de Bridged. |
| Externe dédié | Association exclusive à une carte physique de l’hôte. |

Le support mentionne l’identification des LAN par VLAN pour les réseaux internes et
externes. Les réseaux virtuels sont à créer selon les besoins dans l’outil de gestion
réseau du volet droit. Il indique un seul réseau externe par carte réseau hôte.

## Création et stockage d’une VM

L’assistant `Nouveau > Ordinateur virtuel` sert à définir le stockage et le matériel.
Le support précise que le disque d’amorçage d’une VM de **première génération** se
trouve sur une interface IDE. L’atelier de ce module demande une **génération 2** :
les deux contextes ne doivent pas être confondus.

Dans le laboratoire, les fichiers des VM et les disques virtuels sont rangés dans
des emplacements distincts, nommés `VMs` et `VHDs` sur un volume de données. Le
disque demandé pour la VM de l’atelier est au format **VHDX**, de 32 Go ; la
présentation d’export du support évoque aussi des disques **VHD**.

## Exportation et importation : repères du support

Le support décrit l’export avant duplication ou déplacement, la nécessité de
disposer des fichiers de configuration et la sélection du dossier contenant tous
les fichiers. Dans son exemple historique, il propose d’exporter dans un emplacement
dédié, de copier le répertoire voulu puis d’importer sans « Dupliquer les fichiers ».
Il signale également le risque de rassembler les copies de disques dans un même
emplacement avec l’autre option.

L’atelier suit une autre consigne explicite : importer avec **Copy the virtual
machine** et choisir des sous-dossiers distincts pour la seconde VM. La procédure de
l’atelier et l’exemple du support restent distingués.

## Cadre de l’atelier n°2

L’atelier d’une heure utilise la VM Windows Server 2019 préparée au module 2 comme
hôte Hyper-V à l’intérieur de VMware Workstation. Le document précise que cette
imbrication est imposée par l’environnement du centre de formation ; il situe l’installation sur un
serveur physique dans son scénario d’entreprise.

Le travail demandé couvre la préparation du stockage, l’installation du rôle, la
création d’une VM, l’installation du système, Sysprep avec généralisation et arrêt,
l’export puis l’import d’une seconde VM, et un contrôle de communication. Les valeurs
de mémoire et de disque de l’atelier sont des paramètres de laboratoire.

!!! warning "Limites documentaires conservées"

    La capture finale de la solution montre un ping vers l’adresse également affichée
    comme passerelle ; elle ne suffit pas à prouver la liaison entre les deux VM
    demandée par l’énoncé. L’énoncé demande enfin un snapshot VMware de la VM qui
    héberge Hyper-V ; la solution fournie ne documente pas cette dernière étape.

## Périmètre et provenance

Contenu A : `Module 04 - Support de cours.pdf` et les documents de mise en situation
Hyper-V du module 4, énoncé et solution, dans Drive TSSR en lecture seule. Contenu B :
restructuration web limitée aux notions et aux limites observées dans ces sources.
Aucune procédure externe ni ressource binaire n’est ajoutée.
Les supports d’installation et les fichiers de VM du laboratoire ne sont pas fournis
par les trois PDF. Cette page ne dépend d’aucun objet pédagogique encore non publié.

## Relier les paramètres aux contrôles

| Étape | Valeur ou contrôle |
| --- | --- |
| Hôte Hyper-V du TP | `SRV_2K19`, 8 Go et un deuxième disque SCSI de 100 Go. |
| Volume de données | `DATA`, dossiers `VMs` et `VHDs`. |
| Réseau | Commutateur externe associé à l’interface Intel de l’hôte imbriqué. La migration dynamique reste désactivée pour ce TP. |
| Premier invité | `SRV_2K19-HV1`, génération 2, 2048 Mo fixes et VHDX 32 Go. |
| Copie | Sysprep avec Generalize et Shutdown, export, puis import en mode Copy the virtual machine et nouveau nom `SRV_2K19-HV2`. |
| Vérification | Démarrage des deux invités, ping vers l’adresse de l’autre invité et snapshot Workstation `Fin atelier 2`. |

La génération 1 utilise un disque d’amorçage IDE dans le cas décrit. La génération 2 utilise UEFI et un disque d’amorçage SCSI. La génération se choisit à la création en fonction du système invité et de son mode d’amorçage. [Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/plan/Should-I-create-a-generation-1-or-2-virtual-machine-in-hyper-v)

Le support indique deux redémarrages dans son contexte historique. À l’issue de l’installation, contrôler que le rôle a démarré et que le gestionnaire Hyper-V peut créer la VM. Vérifier les emplacements du second invité et son identité après l’import.

## Question de révision

Quel mode d’import choisir pour garder simultanément l’original et la copie ?

??? success "Correction"

    Copy the virtual machine crée un nouvel identifiant. Placer les fichiers de la copie dans des emplacements séparés, puis renommer et vérifier la nouvelle VM.

[Fiche de révision](../../revision/13-virtualisation-serveurs/module-04.md) · [Atelier et correction](../../tp/13-virtualisation-serveurs/module-04/index.md)

## Kahoot

- [TSSR-Virtualisation de serveurs-Module-04](../../kahoot/13-virtualisation-serveurs-module-04.md)
