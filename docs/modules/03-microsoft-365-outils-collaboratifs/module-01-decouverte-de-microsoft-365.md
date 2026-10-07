# Module 01 — Découverte de Microsoft 365

**Séquence :** Microsoft 365 — Outils collaboratifs  
**Rôle dans le parcours :** découvrir le modèle de service, les principaux composants de Microsoft 365 et la notion de tenant avant les modules consacrés aux outils.

## Objectifs

À l'issue du module, vous devez pouvoir :

- expliquer le principe d'une offre SaaS dans le contexte de Microsoft 365 ;
- identifier les principaux services de la plateforme et leur rôle général ;
- distinguer une famille de plans, une licence et les applications ou services mis à disposition ;
- définir un tenant Microsoft 365 et le rôle de l'administrateur global ;
- décrire les informations nécessaires à la création initiale d'un tenant.

## 1. Microsoft 365 : une plateforme de services cloud

Le support présente Microsoft 365 comme une offre de services cloud, disponible pour des publics variés et utilisable sur plusieurs plateformes. L'idée centrale n'est pas d'installer un serveur local pour chaque fonction : l'organisation souscrit un abonnement donnant accès à des services en ligne et, selon le plan choisi, à des applications clientes.

### SaaS : le modèle à retenir

Dans le modèle **Software as a Service (SaaS)**, le logiciel est hébergé sur des serveurs distants. L'utilisateur consomme le service en ligne dans le cadre d'un abonnement, au lieu d'acquérir une version installée et maintenue uniquement sur son poste.

Pour raisonner correctement, séparez trois questions :

1. **Quel besoin doit être couvert ?** Messagerie, stockage personnel, partage d'équipe, visioconférence ou production de documents.
2. **Quel service répond au besoin ?** Par exemple Exchange Online, SharePoint Online, OneDrive ou Microsoft Teams.
3. **Quel plan et quelles licences donnent accès à ce service ?** La réponse dépend de la famille de plan retenue pour l'organisation.

!!! warning "Ne pas confondre plan, service et application"
    Un plan correspond à une offre d'abonnement. Une licence ouvre des droits pour un utilisateur. Un service tel qu'Exchange Online ou SharePoint Online répond à une fonction. Une application cliente permet ensuite d'utiliser certains de ces services. Ces niveaux ne sont pas interchangeables.

## 2. Les éléments de base de la plateforme

Le support cite notamment les composants suivants :

| Élément | Finalité générale dans le support |
|---|---|
| Exchange Online | Messagerie et fonctions associées à la boîte aux lettres. |
| Microsoft Teams | Collaboration, échanges et travail en équipe. |
| SharePoint Online | Organisation, partage d'informations, utilisateurs et projets. |
| OneDrive | Espace de fichiers associé à l'utilisateur. |
| Office 365 ProPlus | Applications Office proposées dans l'offre présentée par le support. |
| Azure AD | Service d'identité cité parmi les composants de base. |

Le support évoque aussi OneNote, Yammer, Dynamics 365, Delve et Stream. Retenez surtout qu'une plateforme collaborative n'est pas un outil unique : elle réunit des services spécialisés, reliés par une même organisation et par les droits accordés aux utilisateurs.

## 3. Plans et licences : partir du contexte de l'organisation

Les offres décrites dans le support sont organisées par familles : particuliers, PME, éducation, associations, gouvernement, employés de terrain et entreprises. Elles comportent ensuite différents plans, par exemple Business Basic, Business Standard, Business Premium, A1, A3, A5, E1, E3, E5 ou F3.

La méthode attendue dans ce module est de ne pas choisir un nom de plan par réflexe. Il faut d'abord identifier le contexte de l'organisation, les usages à couvrir et les utilisateurs concernés. Le plan et les licences doivent ensuite correspondre aux services attendus.

!!! tip "Point de contrôle"
    Avant de créer ou d'attribuer quoi que ce soit, formulez le besoin sous la forme : « quel utilisateur doit accéder à quel service, pour quel usage ? ». Cette formulation aide à distinguer un besoin de messagerie, de stockage, de partage ou de collaboration.

## 4. Le tenant Microsoft 365

Un **tenant** représente l'ensemble des services de l'abonnement Microsoft 365 associés au domaine de l'organisation. C'est le périmètre dans lequel sont organisés les services et les utilisateurs de cette organisation.

Le support associe l'administrateur global à l'utilisateur ayant souscrit l'abonnement et disposant des privilèges les plus élevés sur le tenant. Ce rôle doit donc être identifié dès la création, car il porte l'administration initiale de l'environnement.

### Créer un tenant : informations attendues

Le support présente une séquence de création en cinq étapes :

1. sélectionner une famille ou un plan ;
2. fournir une adresse électronique valide ;
3. renseigner les données de l'entreprise ;
4. choisir le nom du tenant ;
5. valider et terminer l'inscription.

Le nom initial est illustré sous la forme `administrateur@domaine.onmicrosoft.com`. Le support précise que ce nom de tenant n'est pas modifiable. Pour utiliser ensuite une adresse du type `@votreentreprise.fr`, il faut disposer d'un domaine internet puis créer un domaine personnalisé dans Microsoft 365.

!!! warning "Vérification avant validation"
    Vérifiez le plan choisi, l'adresse de l'administrateur global et le nom de tenant avant la validation : le support signale explicitement le caractère non modifiable du nom de tenant.

## Synthèse de la démarche

Pour présenter Microsoft 365 à une organisation, procédez dans cet ordre :

1. identifier les besoins de collaboration ;
2. associer chaque besoin à un service de la plateforme ;
3. choisir une famille de plan et les licences cohérentes ;
4. préparer les données nécessaires au tenant ;
5. identifier l'administrateur global et contrôler les éléments avant validation.

## Mise en pratique et consolidation

Le Drive TSSR live ne contient ni énoncé, ni correction, ni TP distinct pour ce module. Le module s'appuie donc sur le support de cours et sur les activités de consolidation déjà publiées.

- [Fiche de révision du module](../../revision/microsoft-365/module-01-decouverte-de-microsoft-365.md)
- [Kahoot du module](../../kahoot/03-microsoft-365-outils-collaboratifs-01-decouverte-de-microsoft-365.md)
- [Présentation de la séquence](index.md)

## Source et provenance

- **Source A — support TSSR live :** `Module 01 - Support de cours.pdf`, Drive `1ge2dZ-8TJDb2O0oL72reWf2Z1ZXGgiqk`, SHA-256 `83fd3c99e1a0c64d3f2c3fa6fcf3db97d18ab2eb8284daed34ec0e297b922380`.
- **Structuration B :** l'ordre des sections, les tableaux, les avertissements et les formulations pédagogiques organisent les notions explicitement présentes dans le support ; ils n'ajoutent pas de source externe.
