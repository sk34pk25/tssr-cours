# Module 08 — Gestion du datacenter

Les parties ci-dessous reprennent le cours original, dans le même ordre. Les encadrés et les schémas répètent ses formulations.

## Parcours de lecture

1. Support · Module 08 - Support de cours · 13 pages transcrites
2. Énoncé · TSSR110-Virtualisation_Mise en Situation - Module 8 - Gestion des Modeles · 2 pages transcrites
3. Énoncé · TSSR110-Virtualisation_Mise en Situation - Module 8.2 - DataCenter · 4 pages transcrites
4. Correction · TSSR110-Virtualisation_Mise en Situation - Module 8 - Gestion des Modeles - Solution · 6 pages transcrites
5. Correction · TSSR110-Virtualisation_Mise en Situation - Module 8.2 - DataCenter - Solution · 18 pages transcrites

**Visuel externe**

```mermaid
flowchart TD
    N1["Support · Module 08 - Support de cours · 13 pages transcrites"]
    N2["Énoncé · TSSR110-Virtualisation_Mise en Situation - Module 8 - Gestion des Modeles · 2…"]
    N3["Énoncé · TSSR110-Virtualisation_Mise en Situation - Module 8.2 - DataCenter · 4 pages t…"]
    N4["Correction · TSSR110-Virtualisation_Mise en Situation - Module 8 - Gestion des Modeles…"]
    N5["Correction · TSSR110-Virtualisation_Mise en Situation - Module 8.2 - DataCenter - Solut…"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
```

SOURCE DRIVE · TRANSCRIPTION DU SUPPORT

Le contenu des documents du dossier TSSR est transcrit ci-dessous, page par page. Les textes et tableaux sont intégrés à la page Web. Aucun fichier PDF, aucune diapositive entière ni aucune reproduction de page n’est affiché. Seuls des croquis ou visuels isolés et vérifiés peuvent accompagner la transcription. Les versions et les consignes restent celles des supports de formation. Les compléments IA sont conservés dans leur onglet distinct.

## Support · Module 08 - Support de cours · 13 pages transcrites

#### Module 08 – Gestion du datacenter

Gestion du datacenter

#### Objectifs

!!! note "À retenir"
    Administrer les éléments du datacenter Augmenter la sécurité en limitant les privilèges des utilisateurs Gestion du datacenter

- Administrer les éléments du datacenter
- Augmenter la sécurité en limitant les privilèges des utilisateurs

Gestion du datacenter

#### Contexte et actions de gestion

!!! note "À retenir"
    Dans ce chapitre seront abordées les principales tâches de gestion d’un environnement vSphere Certaines tâches sont réalisables sur des hôtes autonomes, d’autres nécessitent que les hôtes soient dans un contexte de datacenter (vCenter requis) Gestion du datacenter La gestion des ressources La gestion des ressources

- Dans ce chapitre seront abordées les principales tâches de gestion d’un environnement vSphere
- Certaines tâches sont réalisables sur des hôtes autonomes, d’autres nécessitent que les hôtes soient dans un contexte de datacenter (vCenter requis)

| Tâche | Disponibilité sur des hôtes autonomes | Disponibilité dans un contexte de datacenter |
| --- | --- | --- |
| Gestion des ressources et pools de ressources | Oui | Oui |
| Utilisation du web client vSphere | Non | Oui |
| Utilisation de vMotion et Storage vMotion | Non | Oui |
| Gestion de modèles VMTX | Non | Oui |
| Gestion des rôles, utilisateurs et privilèges | Oui | Oui |

Gestion du datacenter

La gestion des ressources

La gestion des ressources

#### La réservation de ressources

**Visuel externe**

```mermaid
flowchart LR
    N1["Pour répondre à cette problématique, il est possible de réserver des ressources"]
    N2["Pour des machines virtuelles"]
    N3["Pour des ensembles de ressources*"]
    N4["Pour le cluster"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
```

- Il est possible d’affecter à l’ensemble des VM d’un hôte plus de ressources que celles dont il dispose réellement (toutes les VM n’étant pas en fonctionnement en même temps)
- La problématique se pose si une VM « plus importante » qu’une autre ne peut être démarrée faute de ressources
- Pour répondre à cette problématique, il est possible de réserver des ressources

Hôte

- Pour des machines virtuelles
- Pour des ensembles de ressources*
- Pour le cluster

RAM

CPU

* Point abordé dans la diapositive suivante

Réservé pour environnement

de production

VM PROD

La gestion des ressources

#### Gestion des pools de ressources

**Visuel externe**

```mermaid
flowchart LR
    N1["Il permet :"]
    N2["De réserver des ressources en fonction de leur utilisation"]
    N3["De restreindre les ressources matérielles de certains environnements (tests)"]
    N1 --> N2
    N2 --> N3
```

- Le pool de ressources : objet logique auquel est affectée une partie des ressources physiques (CPU et RAM) réelles
- Il permet :
- De réserver des ressources en fonction de leur utilisation
- De restreindre les ressources matérielles de certains environnements (tests)
- La configuration de pools peut permettre de garantir la disponibilité de ressources pour les besoins les plus cruciaux pour l’entreprise

Gestion du datacenter

vCenter et le contexte

de datacenter

vCenter et le contexte de datacenter

#### vCenter et le datacenter

- L’ajout d’un vCenter à une infrastructure va permettre :
- De créer un datacenter et de lui affecter des hôtes afin de les regrouper au sein d’une même entité de gestion
- De disposer d’objets (réseau et stockage) uniques et utilisables sur tous les hôtes du datacenter
- D’utiliser les fonctionnalités de déplacement de VM à chaud (vMotion)
- De créer un contexte de cluster (non abordé ici) et de bénéficier des fonctionnalités de haute disponibilité associées
- vCenter est un élément indispensable à la mise en œuvre et au fonctionnement d’un ensemble de services
- Il est recommandé qu’il soit installé sur une machine virtuelle hautement disponible de l’infrastructure

vCenter et le contexte de datacenter

#### vCenter Serveur VS VCSA

!!! note "À retenir"
    vCenter est un outil de la suite vSphere soumis à licence.

**Visuel externe**

```mermaid
flowchart LR
    N1["vCenter est un outil de la suite vSphere soumis à licence."]
    N2["Deux types d’implémentations sont possibles :"]
    N3["Utiliser l’appliance VCSA fournie par VMware"]
    N4["Installer l’outil sur un OS serveur Microsoft en 64 bits"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
```

- vCenter est un outil de la suite vSphere soumis à licence.
- Deux types d’implémentations sont possibles :
- Utiliser l’appliance VCSA fournie par VMware
- Installer l’outil sur un OS serveur Microsoft en 64 bits

|  | VCSA | vCenter Serveur |
| --- | --- | --- |
| Nb d’hôtes maximum | 5 ESXi | 1000 ESXi |
| Nb VM maximum | 50 VM | 10 000 VM |
| Avantages | Simplicité de mise en œuvre | Capacité de prise en charge supérieures |
| Inconvénients | Limites de prise en charge | Mise en œuvre plus complexe et coûteuse |

vCenter et le contexte de datacenter

#### Méthodes d’accès à l’appliance vCenter

!!! note "À retenir"
    Les actions de gestion du vCenter sont réalisées depuis le client Web vSphere (via un navigateur) Les actions propres à la gestion du VCSA peuvent être effectuées via une connexion HTTPS au port 5480 Gestion du datacenter Les modèles de machines virtuelles Les modèles de machines virtuelles

- Les actions de gestion du vCenter sont réalisées depuis le client Web vSphere (via un navigateur)

| Port | Protocole | Outil |
| --- | --- | --- |
| 5480 | HTTPS | Gestion du VCSA |
| 9443 | HTTPS | Gestion vSphere |
| 443 | HTTPS | Gestion vSphere |

- Les actions propres à la gestion du VCSA peuvent être effectuées via une connexion HTTPS au port 5480

Gestion du datacenter

Les modèles de machines

virtuelles

Les modèles de machines virtuelles

#### Les modèles

!!! note "À retenir"
    Un fichier OVA est une archive compressée qui contient les éléments du dossier OVF Les modèles de machines virtuelles

|  | Modèle OVF | Modèle VMTX |
| --- | --- | --- |
| Prise en charge | Toutes les solutions VMware (Player, Workstation, vSphere), VirtualBox, XenServer | Suite VMware vSphere dans un contexte de datacenter |
| Action possibles | Possibilité d’import / export de l’élément | Cloner VM vers Template. Dupliquer VM vers Template. Déployer VM depuis Template. Possibilité de customisation. |
| Contexte d’utilisation | Pour toute mise à disposition d’une machine virtuelle | Base utilisée pour la mise en œuvre de l’OS et ses correctifs sur de nouvelles VM |

OVF ou OVA ? Un fichier OVA est une archive compressée qui contient les éléments du dossier OVF

Les modèles de machines virtuelles

#### Les modèles VMTX

**Visuel externe**

```mermaid
flowchart LR
    N1["Ils peuvent intégrer :"]
    N2["Un système d’exploitation"]
    N3["Des pilotes"]
    N4["Des applications"]
    N5["Des correctifs et mises à jour"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
```

- Les modèles VMTX sont des images de machines virtuelles qui sont utilisées pour permettre un déploiement optimisé de nouvelles machines virtuelles dans l’infrastructure vSphere
- Ils peuvent intégrer :
- Un système d’exploitation
- Des pilotes
- Des applications
- Des correctifs et mises à jour
- Ils sont généralement personnalisés pour leur utilisation dans le contexte de l’entreprise

Les modèles de machines virtuelles

#### Gestion des modèles VMTX

- Les tâches de gestion peuvent être initiées :
- Depuis la catégorie « VM et modèles » de l’inventaire
- Depuis le composant « Modèle » des actions proposées sur une machine virtuelle
- Deux types d’action peuvent être entreprises :

Convert to template

VM

Modèle

- La conversion permet de transformer une VM en modèle ou inversement

Convert to VM

VM

Modèle

Modèle

#### +

!!! note "À retenir"
    Clone to template VM VM Le clonage conserve l’élément original

Clone to template

VM

VM

- Le clonage conserve l’élément original

#### et le duplique en modèle ou VM

#### +

!!! note "À retenir"
    Deploy VM from this template VM Modèle Modèle Les modèles de machines virtuelles

Deploy VM from this template

VM

Modèle

Modèle

Les modèles de machines virtuelles

#### Personnalisation des modèles

- La personnalisation du système post déploiement permet d’automatiser les tâches de :
- Renommage de la machine pour son système d’exploitation
- Modification de son adressage IP
- Régénération de son identifiant de sécurité
- Prérequis de personnalisation :
- Les outils d’intégration VMware doivent être installés sur la VM
- SYSPREP doit être implémenté sur le vCenter s’il ne l’est pas nativement sur le SE invité

SYSPREP non intégré

SYSPREP intégré

Les modèles de machines virtuelles

#### Étapes de mise en œuvre de templates VMTX

!!! note "À retenir"
    Préparer la machine virtuelle de référence Y installer les outils d’intégration (vmtools) Convertir cette machine virtuelle en modèle

- Préparer la machine virtuelle de référence
- Y installer les outils d’intégration (vmtools)
- Convertir cette machine virtuelle en modèle

#### Processus de personnalisation - optionnel

intégrer au besoin sysprep au serveur vCenter

depuis l’assistant personnalisation, fournir les informations nécessaires à la personnalisation

l’assistant personnalisation génère un fichier de personnalisation qui peut être importé / exporté

Les modèles de machines virtuelles

#### Les modèles OVF

- Le format de modèle OVF (Open Virtual machine Format) est proposé comme format standard de modèle de machines virtuelles
- Il facilite les actions d’import et d’export de machines virtuelles
- Les fichiers modèles ainsi générés peuvent facilement être intégrés au sein d’autres environnements et solutions de virtualisation
- Prise en charge de ce format :
- Sur les environnements de virtualisation VMware (Player, Workstation, vSphere)
- Par les solutions de virtualisation VirtualBox, et XenServer
- Des outils permettent son import pour Hyper-V, QEMU / KVM

Fichiers OVF

Gestion du datacenter

Utilisateurs et privilèges

Utilisateurs et privilèges

#### Gestion des utilisateurs, groupes et privilèges

- La gestion des utilisateurs et groupes peut être réalisée au niveau du vCenter ou au niveau de l’ESXi.

#### SSO et contexte de domaine

Si l’on est dans un contexte de domaine d’authentification, le SSO peut être configuré afin d’utiliser des utilisateurs et groupes du domaine.

vCenter

ESXi

Possibilité d’affectation de

privilèges VM

- Les permissions peuvent être accordées sur tous les objets de l’inventaire : vCenter, datacenter, cluster, datastore, ESXi, VM […]

Les utilisateurs créés sur le vCenter pourront disposer de privilèges sur toute l’infrastructure vSphere. Les utilisateurs créés sur l’ESXi pourront disposer de privilèges uniquement sur cet ESXi ou sur des VM qu’il héberge.

Utilisateurs et privilèges

#### Méthodologie d’affectation des utilisateurs

- Créer les utilisateurs
- Créer les groupes et leur affecter des utilisateurs
- Créer des rôles, leur affecter les privilèges détaillés souhaités
- Sélectionner l’objet d’inventaire sur lequel affecter les privilèges ; lui associer les groupes et rôles correspondants

Utilisateurs et privilèges

#### Privilèges d’accès – Bonnes pratiques

- Utiliser des groupes plutôt que des utilisateurs
- Ne pas affecter plus de privilèges que nécessaire : si un rôle offre plus de privilèges que nécessaire, il pourra être dupliqué et modifié
- Définir ses règles sur les éléments de plus haut niveau, l’héritage permettra leur propagation à l’ensemble d’éléments enfants

Gestion du datacenter

Déplacement de machines

virtuelles

Déplacement de machines virtuelles

#### Les actions de migration / Déplacement

- Une machine virtuelle a besoin pour son fonctionnement d’un ensemble de ressources
- Ces ressources lui sont mises à disposition par l’hôte qui l’héberge
- Certaines de ses ressources lui sont propres : CPU, RAM, réseau
- D’autres, tel que le stockage peuvent être externes et accessibles à un ensemble d’hôtes

Hôte

Configuration

Configuration

RAM

RAM

Stockage

VM

VM

CPU

CPU

Disque

Réseau

Réseau

Disque

Les fonctionnalités abordées dans les diapositives suivantes permettent le

déplacement des deux ensembles d’éléments présentés ici.

Déplacement de machines virtuelles

#### Les actions de migration

Les actions de migration accessibles sur les VM d’un datacenter utilisent :

- vMotion pour permettre le

#### déplacement à chaud d’une

#### machine virtuelle d’un hôte vers

un autre hôte

vMotion

Hôte

Configuration

RAM

Stockage

VM

CPU

Réseau

Disque

Hôte

Configuration

- Storage vMotion pour permettre le déplacement à chaud du

#### stockage d’une VM d’un datastore

vers un autre datastore

RAM

Stockage

VM

CPU

Réseau

Disque

Déplacement de machines virtuelles

#### vMotion / Storage vMotion – Mise en œuvre

Prérequis de mise en œuvre :

- La fonctionnalité vMotion doit être active sur au moins un vSwitch de l’hôte source et de destination
- L’adressage des hôtes sources et destination utilisée par la fonctionnalité doit être du même domaine de diffusion
- L’emplacement de stockage des VM à déplacer doit être accessible aux 2 hôtes

Déplacement :

- Dans le contexte du datacenter, choisir l’action de déplacement proposée sur la VM
- L’assistant permet alors de déplacer :
- La VM vers un autre hôte
- Le stockage de la VM vers un autre point de stockage

Quelques cas de problématiques de déplacement de VM : une image iso est présente dans la machine virtuelle ; le groupement de port de raccordement est inexistant sur l’hôte de destination ; le niveau de support d’instructions CPU ne concorde pas entre les deux hôtes.

Référence du document : 1lJwBs-wuJ3ZNnzcz-StT_e0Q41z8Be4D · SHA-256 b63201f3c1f1a2bc…

## Énoncé · TSSR110-Virtualisation_Mise en Situation - Module 8 - Gestion des Modeles · 2 pages transcrites

#### Énoncé :

#### Atelier N°6

TP du Module 08 – Gestion de modèles OVF

Avant de démarrer ce TP, il convient d’avoir suivi les prérequis du Module 8.

Durée estimée

1 heure

#### Objectif :

Exporter et importer une machine virtuelle sous forme de modèle OVF d’un hyperviseur vers un autre

#### Prérequis :

Disposer de deux hyperviseurs ESXi1 et ESXi2

Disposer d’une machine virtuelle SRV-1 hébergée sur ESXi1 (Atelier 3 réalisé)

#### Énoncé :

Cet atelier a pour objectif d’illustrer l’exportation d’une machine virtuelle depuis l’hyperviseur ESXi1 sous forme d’un modèle OVF. Dans un deuxième temps, un import de ce modèle sera réalisée vers l’hyperviseur ESXi2.

- Se connecter à l’hyperviseur ESXi1 avec un navigateur Internet (Firefox ou Chrome)

Sur l’hyperviseur ESXi1

- Depuis le menu « Machines virtuelles », cliquer droit sur la VM « SRV-1 » et sélectionner « Exporter ». au format OVF la machine virtuelle « SRV_1 »
- Dans la boite de dialogue qui s’affiche, cocher tous les choix possibles sauf le dernier (« nvram »).

Le téléchargement doit commencer dans votre navigateur, les fichiers seront stockés localement sur votre système.

- Après quelques minutes, observer à l’emplacement de stockage par défaut, l’apparition des fichiers « .mf », « .ovf » et « .vmdk ».
- Se connecter à l’hyperviseur ESXi2 avec un navigateur Internet

Sur l’hyperviseur ESXi2

- Importer les fichiers précédemment récupérés sur votre système sous un nouveau nom « SRV-2 », en cliquant sur le lien « Créer/Enregistrer une machine virtuelle ».
- Les fichiers relatifs à la machine virtuelle SRV-2 seront placés dans la banque de données « DS-ISCSI ».

Pour observer l’avancement du processus, cliquer tout en bas du navigateur sur « Tâches récentes » si cela n’a pas déjà été fait.

- A l’issue de l’opération, une nouvelle machine virtuelle doit faire son apparition dans l’inventaire d’ESXi2. Démarrer cette VM pour contrôler son bon fonctionnement.

Référence du document : 1aEQ65iX_cHIEDDyrYFM1jf07rL3XOmtU · SHA-256 37512ad40c70e5b4…

## Énoncé · TSSR110-Virtualisation_Mise en Situation - Module 8.2 - DataCenter · 4 pages transcrites

#### Énoncé :

#### Atelier N°7

TP du Module 08 – Les composants d’une infrastructure vSphere

Avant de démarrer ce TP, il convient d’avoir suivi les prérequis du Module 8.

Durée estimée

2 à 3 heures

#### Objectif :

Déployer une VM vCenter sous forme d’appliance

Géré un Datacenter vSphere

Utiliser les fonctionnalités fournies par vCenter, notamment la migration vMotion et Storage vMotion

#### Prérequis :

Disposer de deux hyperviseurs ESXi1 et ESXi2 configurés (Atelier 3, 4 et 5 réalisé)

Disposer de la machine virtuelle SRV_2K19 (Atelier 1 réalisé)

Disposer des machines virtuelles SRV-1 et SRV-2 hébergées sur ESXi1 et ESXi2 (Atelier 6 réalisé)

Page sans consigne dans le document.

#### Énoncé :

Dans cet atelier, il s’agira de déployer une appliance vCenter (vCSA) permettant de gérer une infrastructure vSphere composée de nos 2 hyperviseurs. Pour cela un centre de données sera créé permettant [phrase incomplète dans le support].

I - Phases préparatoires à l’intégration du vCSA

Sur la machine virtuelle SRV_2K19

- Ajouter une deuxième carte réseau et configurer la comme suit :
- Adresse IP statique : 10.5.XX.21 / 16.
- Adresse du serveur DNS : 10.5.XX.21
- Installer le rôle de serveur DNS.
- Avec la console Gestion DNS, créer une nouvelle zone nommée vmwareXX.lab, créer les enregistrements DNS « A » d’ESXi1, ESXi2 et vCenter (voir sa configuration au point suivant) afin de résoudre leurs noms en adresses IPs .

Sur les hyperviseurs ESXi1, ESXi2

- Modifier les configurations IP via leur console locale (touche « F2 » sur les VMs) :
- Adresse du serveur DNS => 10.5.XX.21
- Suffixe du domaine => vmwareXX.lab

II - Intégration de vCenter à l’infrastructure vSphere

- Récupérer sur le partage « iso\virtualisation\vSphere 7 » sur distrib, l’appliance vCenter (VMware-vCenter-Server-Appliance*.ova)
- Une fois récupéré, double cliquer sur le fichier et l’ouvrir avec Workstation
- Déployer l’appliance en mode « Tiny server with embedded PSC »
- Fournir à l’assistant graphique à minima les points de configuration suivants : BIEN LIRE LES INDICATIONS !!!
- Attribuer comme adresse statique : 10.YY.XX.10 / 16
- Indiquer la passerelle de la salle 10.YY.255.254
- Saisir l’adresse IP de votre serveur DNS (10.YY.XX.21)
- Allouer le nom d’hôte vcenter.vmwareXX.lab

Attendre quelques minutes que l’écran noir et bleu s’affiche. Cela peut-être un peu long….

- Définir le mot de passe root (attention ! Le clavier est en qwerty ! Utilisez des touches communes ! (par exemple « [valeur fournie par le formateur] »)

Configuration du vCSA (port 5480)

- Lancez un navigateur Internet depuis un système utilisant votre contrôleur de domaine en tant que solveur DNS, puis saisissez le nom FQDN du vCSA, en précisant le port 5480.
- Continuer le paramétrage en cliquant sur « configurer », puis suivre l’assistant. Vous créerez un nouveau domaine SSO, en conservant le nom par défaut (vsphere.local).

Si vous constatez que la configuration « boucle » et ne progresse pas, actualisez votre navigateur et recommencez du début.

Configuration de l’infra vSphere (port 443)

- Depuis votre navigateur, changez le port en 443
- Créer un nouveau datacenter DCPROD et lui ajouter les 2 ESXi comme hôtes

Déplacement à chaud de VM et stockage Sur ESXi2

- Relever l’espace occupé / disponible sur DS-iSCSI
- S’assurer que la machine virtuelle W7-CL-003 est bien démarrée. Sans l’arrêter, procéder à son déplacement vers la banque de donnée DS-iSCSI
- Contrôler l’impact de ce déplacement sur DS-iSCSI S’assurer que la VM W7-CL-003 est en fonctionnement puis la déplacer vers ESXi1. Contrôler le bon déroulement de l’opération

Référence du document : 1mJ95hF2dWIBzbogKPWvXWc_QVAWxZljr · SHA-256 1bb70675fe14d805…

## Correction · TSSR110-Virtualisation_Mise en Situation - Module 8 - Gestion des Modeles - Solution · 6 pages transcrites

Correction originale : à consulter après avoir tenté l’exercice.

Solutions :

#### Atelier N°6

TP du Module 08 – Gestion des Modèles

Avant de démarrer ce TP, il convient d’avoir suivi les prérequis du Module 8.

Durée estimée

1 heure

#### Objectif :

Exporter et importer une machine virtuelle sous forme de modèle OVF d’un hyperviseur vers un autre

#### Prérequis :

Disposer de deux hyperviseurs ESXi1 et ESXi2

Disposer d’une machine virtuelle SRV-1 hébergée sur ESXi1 (Atelier 3 réalisé)

#### Énoncé :

Cet atelier a pour objectif d’illustrer l’exportation d’une machine virtuelle depuis l’hyperviseur ESXi1 sous forme d’un modèle OVF. Dans un deuxième temps, un import de ce modèle sera réalisée vers l’hyperviseur ESXi2.

- Se connecter à l’hyperviseur ESXi1 avec un navigateur Internet (Firefox ou Chrome)

Sur l’hyperviseur ESXi1

- Depuis le menu « Machines virtuelles », cliquer droit sur la VM « SRV-1 » et sélectionner « Exporter ». au format OVF la machine virtuelle « SRV_1 »
- Dans la boite de dialogue qui s’affiche, cocher tous les choix possibles sauf le dernier (« nvram »).

![Capture isolée du support, page 2](../../assets/course-sources/isolated/11683951f3c6d059/v13-d04-p02-i2.webp)

Capture isolée du support, page 2

Le téléchargement doit commencer dans votre navigateur, les fichiers seront stockés localement sur votre système.

- Après quelques minutes, observer à l’emplacement de stockage par défaut, l’apparition des fichiers « .mf », « .ovf » et « .vmdk ».
- Se connecter à l’hyperviseur ESXi2 avec un navigateur Internet

Sur l’hyperviseur ESXi2

- Importer les fichiers précédemment récupérés sur votre système sous un nouveau nom « SRV-2 », en cliquant sur le lien « Créer/Enregistrer une machine virtuelle ».

![Capture isolée du support, page 3](../../assets/course-sources/isolated/11683951f3c6d059/v13-d04-p03-i3.webp)

Capture isolée du support, page 3

- Les fichiers relatifs à la machine virtuelle SRV-2 seront placés dans la banque de données « DS-ISCSI ».

![Capture isolée du support, page 4](../../assets/course-sources/isolated/11683951f3c6d059/v13-d04-p04-i3.webp)

Capture isolée du support, page 4

- Ignorer le message d’erreur et lancer tout de même l’importation.

Pour observer l’avancement du processus, cliquer tout en bas du navigateur sur « Tâches récentes » si cela n’a pas déjà été fait.

- A l’issue de l’opération, une nouvelle machine virtuelle doit faire son apparition dans l’inventaire d’ESXi2. Démarrer cette VM pour contrôler son bon fonctionnement.

Référence du document : 1EOuhufWKq38m1yt7098jgIZGjnkTXK2t · SHA-256 11683951f3c6d059…

## Correction · TSSR110-Virtualisation_Mise en Situation - Module 8.2 - DataCenter - Solution · 18 pages transcrites

Correction originale : à consulter après avoir tenté l’exercice.

Solutions :

#### Atelier N°7

TP du Module 08 – Les composants d’une infrastructure vSphere

Avant de démarrer ce TP, il convient d’avoir suivi les prérequis du Module 8.

Durée estimée

2 à 3 heures

#### Objectif :

Déployer une VM vCenter sous forme d’appliance

Géré un Datacenter vSphere

Utiliser les fonctionnalités fournies par vCenter, notamment la migration vMotion et Storage vMotion

#### Prérequis :

Disposer de deux hyperviseurs ESXi1 et ESXi2 configurés (Atelier 3, 4 et 5 réalisé)

Disposer de la machine virtuelle SRV_2K19 (Atelier 1 réalisé)

Disposer des machines virtuelles SRV-1 et SRV-2 hébergées sur ESXi1 et ESXi2 (Atelier 6 réalisé)

#### Énoncé :

Dans cet atelier, il s’agira de déployer une appliance vCenter (vCSA) permettant de gérer une infrastructure vSphere composée de nos 2 hyperviseurs. Pour cela un centre de données sera créé permettant [phrase incomplète dans le support].

I - Phases préparatoires à l’intégration du vCSA

Sur la machine virtuelle SRV_2K19

- Ajouter une deuxième carte réseau et configurer la comme suit :
- Adresse IP statique : 10.5.XX.21 / 16.
- Adresse du serveur DNS : 10.5.XX.21

#### Informations dans les visuels du support

- Dans Virtual Machine Settings, sélectionner Network Adapter 2, cocher Connect at power on et choisir Bridged.
- Dans les connexions réseau de Windows, ouvrir les propriétés IPv4 d’Ethernet1. Renseigner 10.YY.XX.21 et le masque 255.255.0.0.
- La capture laisse la passerelle vide et indique 10.YY.XX.21 comme serveur DNS préféré.

- Renommer le serveur afin de lui ajouter le suffixe DNS principal vmwareXX.lab
- Installer le rôle de serveur DNS.
- Avec la console Gestion DNS, créer une nouvelle zone nommée vmwareXX.lab, créer les enregistrements DNS « A » d’ESXi1, ESXi2 et vCenter (voir sa configuration au point suivant) afin de résoudre leurs noms en adresses IPs .

![Capture isolée du support, page 4](../../assets/course-sources/isolated/21623aba4c39c4b0/v13-d11-p04-i3.webp)

Capture isolée du support, page 4

- L’assistant de création d’une nouvelle zone s’affiche. Choisir zone principale
- Définir le nom de la nouvelle zone

- Conserver tous les paramètres par défaut jusqu’à parvenir à la fin de l’assistant.
- Configurer les enregistrements DNS avec les noms d’ESXi1, ESXi2 et vCenter et leurs

adresses IP respectives

- Une fois les enregistrements configurés, voici ce que cela doit donner (hormis les

adresses IP qui seront différentes)

Sur les hyperviseurs ESXi1, ESXi2

- Modifier les configurations IP des hyperviseurs via leur console locale (touche « F2 » sur les VMs) :
- Adresse du serveur DNS => 10.5YY.XX.21
- Suffixe du domaine => vmwareXX.lab

- Appuyer sur la touche [Echap], puis confirmer les modifications
- Faire les mêmes manipulations sur l’hyperviseur ESXi2

II - Intégration de vCenter à l’infrastructure vSphere

- Récupérer sur le partage « iso\virtualisation\vSphere 7 » sur distrib, l’appliance vCenter (VMware-vCenter-Server-Appliance*.ova)

![Capture isolée du support, page 8](../../assets/course-sources/isolated/21623aba4c39c4b0/v13-d11-p08-i4.webp)

Capture isolée du support, page 8

- Une fois récupéré, double cliquer sur le fichier et l’ouvrir avec Workstation
- Déployer l’appliance en mode « Tiny server with embedded PSC »
- Fournir à l’assistant graphique à minima les points de configuration suivants : BIEN LIRE LES INDICATIONS !!!
- Attribuer comme adresse statique : 10.YY.XX.10 / 16
- Indiquer la passerelle de la salle 10.YY.255.254
- Saisir l’adresse IP de votre serveur DNS (10.YY.XX.21)
- Allouer le nom d’hôte vcenter.vmwareXX.lab

Attendre quelques minutes que l’écran noir et bleu s’affiche. Cela peut-être un peu long….

- Définir le mot de passe root (attention ! Le clavier est en qwerty ! Utilisez des touches communes ! (par exemple « [valeur fournie par le formateur] »)

Configuration du vCSA (port 5480)

- Lancez un navigateur Internet depuis le serveur SRV_2K19. En effet, c’est le seul système avec interface graphique qui utilise comme résolveur DNS, le serveur DNS que vous avez configuré précédemment. Dans la barre d’URL saisir le nom FQDN du vCSA, en précisant le port 5480.

- Continuer le paramétrage en cliquant sur « configurer », puis suivre l’assistant. Vous créerez un nouveau domaine SSO, en utilisant le nom par défaut (vsphere.local).
- L’authentification en tant que root vous est demandé :
- Ne pas fermer la fenetre : attendre la fin de la configuration.

Si vous constatez que la configuration « boucle » et ne progresse pas, actualisez votre navigateur et recommencez du début.

Configuration de l’infra vSphere (port 443)

- Depuis votre navigateur Internet, toujours sur la VM SRV_2K19, enlever le numéro de port et se connecter en HTTPS sur vcenter.
- Cet écran de bienvenue doit alors s’afficher :
- S’authentifier avec le compte administrator@vsphere.local

- Une fois connecté, créer un nouveau datacenter nommé Dataprod

et lui ajouter les 2 ESXi comme hôtes.

- Ajout des Hotes ESXi-1 & ESXi-2 par clic droit sur le datacenter

- Pour ajouter les hôtes, vous devez fournir les mots de passe root configurés sur ceux-

ci (et non pas celui de vcenter).

- Répondre « oui » à l’alerte de sécurité
- Conserver le sparamètres restant par défaut jusqu’à la fin de l’assistant.
- Puis, intégrer ESXi-2 de la meme manière.

III – Utilisation de la fonctionnalité vMotion offerte par vCenter

- S’assurer que la machine virtuelle SRV-2 est bien démarrée. Sans l’arrêter, procéder au déplacement des ressources de calculs vers l’hôte ESXi1.
- Situation intiale :

- Lancement de la migration vers ESXi1 :
- Un assistant s’éxécute alors, conserver le choix par défaut :

- Sélectionner l’hyperviseur de destination (ESXi1 ici) :
- Conserver le choix du groupement de port GRP-VMNET par défaut :
- Puis conserver les paramètres par défaut jusque la fin de l’assistant.
- Démarrer la VM SRV-1 si elle n’est pas en cours de fonctionnement. Déplacer les fichiers de la VM actuellement stockés sur la banque de données DS-Local vers DS-NFS.
- Clic droit sur la VM SRV-1

- Choisir la deuxième case à cocher :
- Enfin, choisir la destination du stockage de la VM

![Capture isolée du support, page 17](../../assets/course-sources/isolated/21623aba4c39c4b0/v13-d11-p17-i2.webp)

Capture isolée du support, page 17

- Contrôler l’impact des déplacements dans les banques de données. Contrôler le bon déroulement des opérations, les VM sont-elles toujours fonctionnelles ?
- Les fichiers de la VM SRV-1 sont désormais sur la banque de données DS-NFS
- La VM SRV-2 utilise maintenant les ressources de l’hyperviseur ESXi1 :

Référence du document : 1aqFok0ywJG-uHa1MMBbH0rdXW7BdvaoY · SHA-256 21623aba4c39c4b0…

## Fiche de synthèse

Les lignes reprennent les titres du cours et la première phrase de chaque partie.

| Partie | Repère du cours |
| --- | --- |
| Correction · TSSR110-Virtualisation_Mise en Situation - Module 8 - Gestion des Modeles - Solution · 6 pages transcrites | Correction originale : à consulter après avoir tenté l’exercice. |
| Correction · TSSR110-Virtualisation_Mise en Situation - Module 8.2 - DataCenter - Solution · 18 pages transcrites | Correction originale : à consulter après avoir tenté l’exercice. |
