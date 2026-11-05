# Module 03 — La virtualisation des serveurs

Ce module présente, au niveau conceptuel, les éléments d'une infrastructure de
virtualisation de serveurs et des exemples de solutions citées dans le support.

## Objectif

Lister un ensemble de solutions de virtualisation et de services virtualisés.

## Serveurs et concentration

Le support introduit le choix du type de serveur et le volume occupé. Il
illustre une concentration de serveurs et la présence d'un châssis, sans
développer de classification ou de procédure d'architecture physique.

## La machine hôte et le support matériel

La machine hôte est le serveur physique qui dispose des ressources matérielles
nécessaires. Elle porte l'hyperviseur.

Les technologies de prise en charge matérielle citées sont les suivantes :

| Processeur | Prise en charge de la virtualisation | Prise en charge SLAT |
| --- | --- | --- |
| Intel | VT-x | EPT |
| AMD | AMD-V | NPT / RVI |

Le support les présente comme des mécanismes de prise en charge matérielle ; il
ne fournit ni procédure BIOS ni matrice de compatibilité.

## L'hyperviseur

L'hyperviseur est une solution logicielle installée sur la machine hôte. Il
gère le matériel de l'hôte et héberge des machines virtuelles.

Les exemples de solutions cités sont Hyper-V et ESX / ESXi. VMware, Xen et KVM
apparaissent également parmi les fournisseurs ou solutions illustrés. Ces noms
servent de repères documentaires : le module ne décrit pas leur installation,
leur licence, leur réseau ou leur stockage.

## L'outil de gestion : VMM

Le composant de gestion intégré à un hyperviseur est désigné dans le support
par **Virtual Machine Manager (VMM)**. Ses capacités citées sont :

- créer, gérer ou supprimer des machines virtuelles ;
- gérer le matériel et les pilotes ;
- gérer les réseaux et l'espace disque des machines virtuelles ;
- configurer des fonctionnalités de l'hyperviseur.

Ces capacités restent conceptuelles dans ce module. Elles peuvent avoir un
impact sur un environnement de laboratoire ; aucune procédure ni commande
d'exécution n'est fournie ici.

| Solution | Outil de gestion cité |
| --- | --- |
| Hyper-V | Gestionnaire Hyper-V |
| vSphere | Client Web vSphere |

## Les machines virtuelles

Les machines virtuelles sont créées et hébergées sur l'hyperviseur. Le support
cite les éléments de constitution suivants :

- un fichier de caractéristiques matérielles ;
- un fichier d'image disque par disque dur dans la machine virtuelle ;
- des ressources RAM et une image en mémoire vive ;
- des ressources CPU ;
- une ou plusieurs cartes réseau virtuelles.

Le support ne nomme pas de format de fichier, de contrôleur, de snapshot, de
template, de clone ou de mécanisme d'import/export dans ce module.

## Administration autonome ou regroupée

Les hyperviseurs peuvent être gérés de manière autonome ou regroupés dans un
même contexte de gestion. Deux exemples sont donnés : l'intégration à un
contexte de domaine AD pour des serveurs portant le rôle Hyper-V, et l'ajout de
vCenter en environnement vSphere.

Ces exemples ne décrivent pas un cluster, la haute disponibilité, la migration,
le stockage partagé ou la réplication.

## Repères documentaires

Le support, créé en 2022, cite des produits, outils et interfaces dépendants de
leur version. Ils sont conservés comme contexte historique du document, sans
actualisation ni recommandation de produit.

## Synthèse

Une infrastructure de virtualisation associe une machine hôte, un hyperviseur,
des machines virtuelles et un outil de gestion. Les exemples Hyper-V, ESX /
ESXi, vSphere et vCenter servent ici à situer ces composants, sans introduire
de procédure d'administration.

## Dimensionner un environnement virtualisé

Évaluer la densité en rack ou en châssis, les besoins CPU, mémoire, stockage et réseau, puis les possibilités de maintenance. Le nombre de serveurs qui tient dans un châssis dépend du modèle et de l’alimentation. La densité physique et la capacité de faire tourner les VM sont deux mesures à relever.

| Point à vérifier | Exemple |
| --- | --- |
| Extensions processeur exposées | VT-x pour Intel, AMD-V pour AMD. Le réglage du micrologiciel ou de l’hyperviseur extérieur peut conditionner leur disponibilité. |
| Traduction mémoire de second niveau | EPT chez Intel, NPT ou RVI chez AMD. |
| Gestion d’un hôte | Gestionnaire Hyper-V pour Hyper-V, interface web d’administration pour ESXi dans le contexte VMware. |
| Gestion regroupée | Outils Microsoft ou vCenter selon la plateforme. Un inventaire commun peut être organisé avant la mise en place du cluster. |

Le support emploie VMM comme terme générique pour la gestion des VM. Distinguer ce terme du nom de produits de gestion. Pour la disponibilité, identifier les mécanismes de reprise des VM, les réseaux et les banques accessibles aux hôtes ainsi que les points de panne communs.

## Question de révision

La console centrale voit deux hôtes. Que reste-t-il à vérifier avant d’annoncer une reprise automatique ?

??? success "Correction"

    La présence et le fonctionnement du mécanisme de disponibilité, la capacité restante et l’accès du second hôte aux fichiers et réseaux nécessaires à la VM.

[Fiche de révision](../../revision/13-virtualisation-serveurs/module-03.md)

## Kahoot

- [TSSR-Virtualisation de serveurs-Module-03](../../kahoot/13-virtualisation-serveurs-module-03.md)
