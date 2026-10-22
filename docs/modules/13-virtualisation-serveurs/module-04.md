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
imbrication est imposée par l’environnement ENI ; il situe l’installation sur un
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
Aucune procédure externe, ressource binaire, question ou association Kahoot n’est ajoutée.
Les supports d’installation et les fichiers de VM du laboratoire ne sont pas fournis
par les trois PDF. Cette page ne dépend d’aucun objet pédagogique encore non publié.
