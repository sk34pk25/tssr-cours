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
mille VM pour l’autre colonne. **NEEDS_REVIEW :** ces valeurs et cette opposition
ne sont pas présentées comme capacités ou modes de déploiement actuels. Le schéma
d’accès cite HTTPS sur 5480 pour la gestion VCSA et 9443/443 pour vSphere ;
l’atelier utilise 5480 puis 443.

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

!!! warning "NEEDS_REVIEW — divergences des ateliers"

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

## Kahoot

- [TSSR-Virtualisation de serveurs-Module-08](../../kahoot/13-virtualisation-serveurs-module-08.md)

## Provenance

A : support M08 et deux paires énoncé/solution, cinq PDF du Drive TSSR en lecture
seule. B : restructuration web fidèle après lecture du texte et des images.
Les VM, exports et appliance OVA ne sont pas fournis par ces PDF. Aucune action de
laboratoire, commande ou ressource externe ajoutée.
Cette page ne dépend pas des objets d’atelier encore non publiés.
