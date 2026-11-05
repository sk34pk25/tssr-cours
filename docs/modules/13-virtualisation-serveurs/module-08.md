# Module 08 — Gestion du datacenter

## Objectifs et contexte

Administrer les éléments du datacenter et limiter les privilèges des utilisateurs.
Le support distingue les actions sur hôtes autonomes et celles du contexte vCenter.
Il couvre ressources, modèles, utilisateurs et migrations. Ses capacités, versions,
ports et formulations historiques restent attachés aux sources.

## Ressources et pools

Le cours présente la possibilité d’affecter aux VM plus de ressources que celles
physiquement disponibles, puis le risque de ne pas pouvoir démarrer une VM
prioritaire. La réservation peut concerner une VM, un ensemble de ressources ou
un cluster. Le pool est un objet logique auquel sont affectées des ressources CPU
et RAM ; il sert à réserver des ressources pour certains usages et à limiter
celles d’autres environnements, notamment les tests.

## vCenter et datacenter

vCenter regroupe des hôtes dans une entité de gestion et donne accès aux objets et
services du datacenter. Le support présente les migrations à chaud et évoque les
clusters et leur haute disponibilité, sans les développer. Il recommande dans
son contexte un vCenter hébergé sur une VM hautement disponible.

Le tableau historique oppose VCSA et installation de vCenter sur Windows Server
64 bits. Il donne pour VCSA cinq hôtes et cinquante VM, contre mille hôtes et dix
mille VM pour l’autre colonne. **Point de vigilance.** ces valeurs et cette opposition
ne sont pas présentées comme capacités ou modes de déploiement actuels. Le schéma d’accès associe HTTPS sur 5480 à l’administration de l’appliance et 9443 ou 443 à vSphere. L’atelier utilise 5480 puis 443.

## Modèles de VM

| Modèle ou action | Rôle présenté |
| --- | --- |
| OVF | Format d’échange pour importer et exporter une VM entre environnements compatibles. |
| OVA | Regroupement des éléments OVF dans une archive ; le support la qualifie de compressée, formulation historique à revoir. |
| VMTX | Modèle utilisé dans le contexte datacenter vSphere pour déployer de nouvelles VM. |
| Conversion | Transformer une VM en modèle ou l’inverse. |
| Clonage / déploiement | Conserver l’original et créer une nouvelle VM ou un nouveau modèle. |

Un modèle VMTX peut inclure OS, pilotes, applications et correctifs. Le support
prépare une VM de référence, installe les outils VMware puis convertit la VM en
modèle. La personnalisation optionnelle porte notamment sur nom, adresse IP et
identifiant de sécurité. Il cite VMware Tools et, selon le système invité,
Sysprep intégré ou à fournir au vCenter ; ces indications restent versionnées.

## Utilisateurs, rôles et privilèges

La source distingue les comptes gérés au niveau ESXi et au niveau vCenter. Les
permissions portent sur les objets d’inventaire : datacenter, cluster, banque,
hôte ou VM. Un contexte SSO peut utiliser des utilisateurs et groupes d’un domaine
d’authentification selon la configuration présentée.

La méthode du cours est de créer utilisateurs et groupes, définir les rôles et
leurs privilèges, puis associer groupes et rôles aux objets concernés. Le support
privilégie les groupes, le minimum de privilèges nécessaire et l’héritage depuis
les objets de niveau supérieur. Un rôle trop large peut être dupliqué et réduit.

## Migrations

**vMotion** déplace à chaud les ressources de calcul d’une VM entre hôtes ;
**Storage vMotion** déplace à chaud ses fichiers entre banques de données.
Dans son scénario, le support demande l’activation de vMotion aux deux extrémités,
des adresses dans le même domaine de diffusion et un stockage accessible aux deux
hôtes. Ce cadre documentaire ne constitue pas une liste universelle pour toute
version ou tout type de migration.

Les obstacles cités sont une image ISO attachée, l’absence du groupe de ports
sur la destination et une incompatibilité des instructions CPU. Aucun correctif
externe ou réglage supplémentaire n’est inventé.

## Deux ateliers sources

- **Atelier n°6, une heure :** exporter la VM du premier ESXi en OVF, conserver
  les fichiers `.mf`, `.ovf` et `.vmdk` sans `.nvram`, puis importer une seconde
  VM sur l’autre ESXi dans la banque iSCSI partagée et contrôler son démarrage.
- **Atelier n°7, deux à trois heures :** préparer DNS, déployer une appliance
  vCenter dans Workstation, configurer SSO et un datacenter avec les deux ESXi,
  puis étudier les déplacements de calcul et de stockage.

!!! warning "divergences des ateliers"

    La solution OVF affiche une erreur d’image disque requise manquante puis
    demande de poursuivre. Elle ne justifie pas ce contournement : il est documenté
    comme anomalie, sans consigne générale d’ignorer une erreur d’import.

    L’énoncé datacenter vise une VM non définie dans ses prérequis et son stockage
    vers iSCSI, puis un déplacement d’hôte. La solution utilise les deux VM
    préparées, migre le calcul de la seconde vers le premier ESXi et les fichiers
    de la première du stockage local vers NFS. Ces deux scénarios restent séparés,
    à arbitrer avant exécution.

    Les masques et réseaux de laboratoire, le domaine DNS, les noms d’objets et
    comptes sont neutralisés. Les variantes de notation des adresses ne sont pas
    résolues par invention. L’exemple de mot de passe du PDF est exclu. Les alertes
    de certificat restent des observations à examiner dans le laboratoire.

## Préparer le datacenter et vérifier les migrations

Une **réservation** garantit une quantité de ressources, une **limite** fixe un maximum et les **parts** hiérarchisent les usages en cas de contention. Choisir les valeurs d’un pool après avoir distingué CPU et mémoire disponibles et les besoins de démarrage des VM prioritaires.

Une permission associe un utilisateur ou un groupe, un rôle et un objet d’inventaire. Vérifier le périmètre d’héritage et tester avec un compte du groupe. Pour l’atelier, l’inventaire utilise `DCPROD`, les deux ESXi et le domaine SSO `vsphere.local`.

| Opération | Contrôle |
| --- | --- |
| Export OVF | Depuis `SRV-1`, vérifier le descripteur `.ovf`, le manifeste `.mf` et les fichiers `.vmdk`. Le scénario exclut la NVRAM. |
| Import OVF | Créer `SRV-2` sur ESXi2 dans `DS-ISCSI`. Examiner les tâches et démarrer la VM. Si un disque requis manque, vérifier les fichiers et les références avant de continuer. |
| Déploiement vCenter | Vérifier les enregistrements A des hôtes et de `vcenter.vmwareXX.lab`. Utiliser HTTPS 5480 pour l’administration de l’appliance et HTTPS 443 pour l’inventaire. |
| vMotion | Vérifier l’interface VMkernel, la compatibilité CPU, le groupe de ports de destination et, dans ce lab, l’accès commun au stockage. Relever l’hôte source puis l’hôte de destination. |
| Storage vMotion | Relever la banque source, la banque cible, la capacité et l’état de la VM avant et après. |

OVA regroupe les fichiers d’un paquet OVF dans une archive unique. L’archive peut être empaquetée sans compression. Les anciens modes d’installation et seuils d’hôtes du support doivent être lus avec les versions du document.

Dans le TP Datacenter, la consigne nomme `W7-CL-003`, alors que les ateliers préparent `SRV-1` et `SRV-2`. Le corrigé migre le calcul de la seconde VM puis le stockage de la première vers NFS. Identifier avec le formateur les objets et destinations du scénario retenu avant de commencer.

## Question de révision

La VM doit garder son hôte et changer de datastore. Quelle opération sélectionner ?

??? success "Correction"

    Choisir une migration de stockage. Contrôler l’espace cible, la tâche de migration et la nouvelle banque de la VM tout en vérifiant son état de fonctionnement.

[Fiche de révision](../../revision/13-virtualisation-serveurs/module-08.md) · [Atelier et correction](../../tp/13-virtualisation-serveurs/module-08/index.md)

## Kahoot

- [TSSR-Virtualisation de serveurs-Module-08](../../kahoot/13-virtualisation-serveurs-module-08.md)

## Provenance

A : support M08 et deux paires énoncé/solution, cinq PDF du Drive TSSR en lecture
seule. B : restructuration web fidèle après lecture du texte et des images.
Les VM, exports et appliance OVA ne sont pas fournis par ces PDF. Aucune action de
laboratoire, commande ou ressource externe ajoutée.
