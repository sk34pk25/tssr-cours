# Module 05 — Les composantes d’une infrastructure vSphere

## Objectif et versions des sources

Décrire les composantes d’une infrastructure **vSphere 6.x**. Le support de cours
présente ce contexte historique ; l’atelier utilise **ESXi 7** dans VMware
Workstation 16. Ces deux cadres restent distingués, sans recommandation de version
actuelle. Le support souligne que les versions des différents éléments doivent
concorder.

## Composantes et administration

| Élément | Nom employé dans le support |
| --- | --- |
| Solution de virtualisation | vSphere |
| Hyperviseur | ESXi / ESX |
| Client d’administration | Client vSphere / vSphere Web Client |
| Regroupement d’hyperviseurs | vCenter |

Le schéma du cours relie le client à vCenter, puis vCenter à plusieurs hôtes ESXi
hébergeant les VM. Dans la transition présentée de vSphere 5 à 6, le support cite
la disparition d’ESX et de sa Service Console, la disparition du client lourd,
vCenter disponible en appliance virtuelle et le client web lié à vCenter.

## Fonctionnalités présentées

| Fonctionnalité | Rôle décrit par la source |
| --- | --- |
| vMotion | Déplacer une VM d’un hôte à un autre. |
| Storage vMotion | Déplacer le stockage d’une VM entre banques de données. |
| DRS | Automatiser le déplacement des VM vers un hôte disposant de davantage de ressources. |
| Storage DRS | Automatiser le déplacement vers un datastore disposant de davantage de ressources. |
| DPM | Automatiser l’entrée et la sortie de veille des hyperviseurs selon la charge du cluster. |
| HA | Redémarrer les VM ciblées sur un autre hôte du cluster après la défaillance d’un hôte. |
| FT | Protéger les VM ciblées d’une défaillance d’hôte ; le support présente cette protection comme sans interruption de service. |

La formulation sur FT est celle du support, dans son contexte, sans garantie
générale ajoutée. vMotion et Storage vMotion sont annoncés comme abordés au module 8 ;
aucune procédure de migration n’est ajoutée ici.

## Licences : repères historiques

Le comparatif est daté du **16 août 2021**. Il présente ESXi seul comme gratuit avec
un compte VMware, puis les offres Essentials, Essentials Plus, Standard,
Enterprise Plus et Platinum. Il indique notamment six licences CPU pour trois
serveurs de deux processeurs au maximum dans le kit Essentials, avec vCenter Server
Essentials. Ce sont des indications historiques du document, sans conseil d’achat
ni affirmation sur les offres actuelles.

Le dernier tableau ne renseigne pas clairement plusieurs cellules relatives à la
couverture des licences, à vCenter Foundation et à la RAM maximale par hôte.
Ces valeurs ne sont pas complétées. Le support situe la fin des pools vRAM à
vSphere 5.5.

## Cadre de l’atelier n°3

L’atelier d’une heure demande d’installer deux hyperviseurs ESXi et de configurer
leur accès. Le laboratoire du centre de formation simule deux serveurs physiques avec deux VM
imbriquées sous Workstation 16. Le texte demande pour chaque hyperviseur deux CPU
d’un cœur, 6 Go de RAM, une carte réseau bridgée, un disque de 40 Go et un disque
SCSI supplémentaire de 200 Go.

Après installation sur le disque de 40 Go, l’adresse obtenue sert à ouvrir la
console web depuis l’hôte Windows. Le stockage de 200 Go devient une banque VMFS.
L’atelier y importe un ISO Windows Server 2019 et crée une VM invitée avec un CPU
d’un cœur, 2 Go de RAM et un disque de 32 Go, puis demande l’installation du système
et des VMware Tools.

!!! warning "paramètres contradictoires"

    Le texte demande 6 Go de RAM par hyperviseur ; les schémas récapitulatifs de
    l’énoncé et de la solution indiquent 8 Go. Cet écart reste à arbitrer avant
    l’exécution. Le schéma mentionne également un accès HTTP : il ne constitue pas
    une consigne générale sur le protocole ou les avertissements de certificat.

## De l’installation à la VM fonctionnelle

L’atelier utilise deux hôtes imbriqués `ESXi1` et `ESXi2`. Le texte demande deux processeurs d’un cœur, 6 Go de mémoire, le réseau ponté, un disque système de 40 Go et un disque SCSI de 200 Go. Les schémas indiquent 8 Go. Faire trancher le dimensionnement du laboratoire avant de créer les hôtes. L’ISO nommée par l’énoncé est `VMware-VMvisor-Installer-7.0U3-18644231.x86_64`. Le corrigé illustre aussi une autre version.

Sur ESXi1, ouvrir le **Host Client** pour créer `DS-Local` en VMFS sur le disque de 200 Go. Charger l’ISO Windows Server 2019 dans cette banque et créer `SRV-1` avec un CPU, un cœur, 2 Go et un disque de 32 Go. Vérifier la console, le système et VMware Tools. Le **vSphere Client** relié à vCenter servira ensuite à administrer l’inventaire regroupé.

| Besoin | Service à identifier |
| --- | --- |
| Changer d’hôte ou de stockage | vMotion pour le calcul et Storage vMotion pour les fichiers. |
| Équilibrer la charge | DRS pour les hôtes et Storage DRS pour les datastores. |
| Adapter la capacité active du cluster | DPM dans le contexte présenté. |
| Reprendre après perte d’un hôte | HA redémarre les VM éligibles. FT vise la continuité pour des VM compatibles et configurées. |

Les prix, éditions et conditions de licence présentés dans l’original portent sur le 16 août 2021. Le TP mêle un cours vSphere 6.x et une installation ESXi 7.0.

## Question de révision

Quel disque choisir pour installer ESXi et lequel pour créer DS-Local ?

??? success "Correction"

    Installer ESXi sur le disque de 40 Go, puis sélectionner le disque SCSI de 200 Go dans l’assistant de création de la banque VMFS.

[Fiche de révision](../../revision/13-virtualisation-serveurs/module-05.md) · [Atelier et correction](../../tp/13-virtualisation-serveurs/module-05/index.md)

## Kahoot

- [TSSR-Virtualisation de serveurs-Module-05](../../kahoot/13-virtualisation-serveurs-module-05.md)

## Provenance et limites

Contenu A : support M05 et documents de mise en situation vSphere, énoncé et
solution, du dossier TSSR Drive en lecture seule. Contenu B : restructuration web
fidèle, avec neutralisation des adresses, noms et chemins propres au laboratoire.
Les ISO, logiciels et fichiers de VM ne sont pas fournis par ces PDF. Les captures
privées ne sont pas republiées. Aucun TP, commande ou complément
externe n’est inventé. Cette page ne dépend d’aucun objet encore non publié.
