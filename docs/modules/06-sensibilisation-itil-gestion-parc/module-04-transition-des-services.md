# Module 04 — Transition des services

[Travaux pratiques](../../tp/itil/module-04/index.md)

Les parties ci-dessous reprennent le cours original, dans le même ordre. Les encadrés et les schémas répètent ses formulations.

## Parcours de lecture

1. Support · Module 04 - Support de cours · 13 pages transcrites

**Visuel externe**

```mermaid
flowchart TD
    N1["Support · Module 04 - Support de cours · 13 pages transcrites"]
```

SOURCE DRIVE · TRANSCRIPTION DU SUPPORT

Le contenu des documents du dossier TSSR est transcrit ci-dessous, page par page. Les textes et tableaux sont intégrés à la page Web. Aucun fichier PDF, aucune diapositive entière ni aucune reproduction de page n’est affiché. Seuls des croquis ou visuels isolés et vérifiés peuvent accompagner la transcription. Les versions et les consignes restent celles des supports de formation. Les compléments IA sont conservés dans leur onglet distinct.

## Support · Module 04 - Support de cours · 13 pages transcrites

!!! note "À retenir"
    Texte, tableaux et illustrations utiles retranscrits du support ; numéros de diapositives, bandeaux répétitifs, éléments de marque et décorations exclus.

Texte, tableaux et illustrations utiles retranscrits du support ; numéros de diapositives, bandeaux répétitifs, éléments de marque et décorations exclus. Les formulations historiques sont conservées ; les précisions sont placées dans le cours optimisé.

### Page 1

Sensibilisation ITIL et

gestion de parc

Module 04 – Transition des services

#### Objectifs

!!! note "À retenir"
    Connaitre le rôle de la transition des services Identifier les différents processus Définir un changement Définir un CI (Configuration Item) Identifier les outils Définir la connaissance

**Visuel externe**

```mermaid
flowchart LR
    N1["Connaitre le rôle de la transition des services"]
    N2["Identifier les différents processus"]
    N3["Définir un changement"]
    N4["Définir un CI (Configuration Item)"]
    N5["Identifier les outils"]
    N6["Définir la connaissance"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
    N5 --> N6
```

- Connaitre le rôle de la transition des services
- Identifier les différents processus
- Définir un changement
- Définir un CI (Configuration Item)
- Identifier les outils
- Définir la connaissance

### Page 2

#### Les publications centrales « Transition des services »

**Visuel externe**

```mermaid
flowchart LR
    N1["Objectif"]
    N2["Son rôle"]
    N3["Réalisation, construction, test, validation et déploiement des services"]
    N4["Prévoir et gérer les ressources nécessaires"]
    N5["Produire la documentation"]
    N6["Surveiller et améliorer les services"]
    N7["Prendre en compte et améliorer la perception client"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
    N5 --> N6
    N6 --> N7
```

La transition des services

- Objectif
  - Mise en production des services (nouveaux ou améliorés)
- Son rôle
  - Mettre en production en respectant les livrables produits par la conception des services ainsi que les coûts

- Réalisation, construction, test, validation et déploiement des services
- Prévoir et gérer les ressources nécessaires
- Produire la documentation
- Surveiller et améliorer les services
- Respecter les critères de qualité, de sécurité et les délais dans la délivrance des services
- Prendre en compte et améliorer la perception client

### Page 3

!!! note "À retenir"
    La transition des services Dans la phase de transition, tout commence par le processus de gestion des changements avec une RFC Request For Change Processus de transition des services — illustration isolée du support, page 3.

La transition des services

- Dans la phase de transition, tout commence par le processus de gestion des changements avec une RFC Request For Change

![Processus de transition des services](../../assets/course-sources/isolated/6ab33825d3402c7f/itil-p003-001.webp)

Processus de transition des services — illustration isolée du support, page 3.

La gestion des changements

- Ses objectifs
  - S’assurer que les procédures et les méthodes pour traiter les changements sont efficaces, voire efficientes
  - S’assurer que les modifications des CI (Configuration Item) sont bien enregistrées dans le CMS (Content Managment System)
  - Répondre aux évolutions exprimées par les clients en minimisant les risques d’interruption de service et en maximisant la valeur fournie
- Définition d’un changement
  - Ajout, modification, ou retrait d’un ou plusieurs CI du système d’information ou d’un ou plusieurs services fournis par ce système d’information

### Page 4

#### La gestion des changements

!!! note "À retenir"
    Les sept R du changement — illustration isolée du support, page 4.

**Visuel externe**

```mermaid
flowchart LR
    N1["Les « 7 R » de la gestion des changements"]
    N2["Raised : qui a fait la demande ?"]
    N3["Reason : pour quelle raison ?"]
    N4["Return : quel est le retour attendu ?"]
    N5["Risks : quels sont les risques ?"]
    N6["Resources : quelles seront les ressources ?"]
    N7["Responsible : qui est le responsable ?"]
    N8["Relationship : quelles sont les relations avec les autres changements ?"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
    N5 --> N6
    N6 --> N7
    N7 --> N8
```

![Les sept R du changement](../../assets/course-sources/isolated/6ab33825d3402c7f/itil-p004-002.webp)

Les sept R du changement — illustration isolée du support, page 4.

- Les « 7 R » de la gestion des changements

- Raised : qui a fait la demande ?
- Reason : pour quelle raison ?
- Return : quel est le retour attendu ?
- Risks : quels sont les risques ?
- Resources : quelles seront les ressources ?
- Responsible : qui est le responsable ?
- Relationship : quelles sont les relations avec les autres changements ?

- Les origines d’un changement
  - Les correctifs (événement, incident, problème…)
  - La législation
  - L’organisation
  - Des directives ou des standards
  - Des évolutions des services existants
  - Des nouveaux services
  - Un nouveau modèle de sourcing
  - Une innovation technologique…

### Page 5

#### La gestion des changements

!!! note "À retenir"
    La demande de changement - Tous les clients sont habilités à émettre une demande de changement, mais cela ne veut pas dire qu’elle sera acceptée.

- La demande de changement
  - Tous les clients sont habilités à émettre une demande de changement, mais cela ne veut pas dire qu’elle sera acceptée.
  - Toute demande de changement doit être formalisée par une RFC.
  - RFC (Request For Change) est une formalisation d’une modification d’un ou plusieurs éléments de configuration (CI).
  - Une RFC doit contenir :
    - Un identifiant unique
    - Une date de demande
    - Le nom du demandeur
    - Une proposition de priorité de changement (priorité = impact x urgence)
    - Une description du changement
    - Les risques durant l’implémentation du changement
    - Les dates de mise en place du changement
    - Une estimation des ressources nécessaires (humaine, matériels…)

- La gestion de la priorité d’une demande de changement

| Code de priorité | Description | Dans GLPI | Priorité de changement |
| --- | --- | --- | --- |
| 1 | Critique | Très haute | Urgent / Critique |
| 2 | Élevée | Haute | Urgent |
| 3 | Moyen | Moyenne | Normal |
| 4 | Faible | Basse | Normal |
| 5 | Très faible | Très basse | Standard / Planifié |

| Impact / urgence | Élevée | Moyenne | Faible |
| --- | --- | --- | --- |
| Élevé | 1 | 2 | 3 |
| Moyen | 2 | 3 | 4 |
| Faible | 3 | 4 | 5 |

### Page 6

**Visuel externe**

```mermaid
flowchart LR
    N1["Le changement standard"]
    N2["Le changement normal"]
    N3["Le changement urgent"]
    N1 --> N2
    N2 --> N3
```

Les types de changement

- Le changement standard
  - Actions connues, documentées, déjà réalisées et testées
  - Les risques sont faibles et bien maîtrisés
  - Changement préapprouvé, maîtrisé et associé à des procédures établies
  - Référencé dans un mini-catalogue de changements préautorisés
- Le changement normal
  - Il nécessite une évaluation complète et une autorisation avant sa réalisation par le CAB
- Le changement urgent
  - L’urgence est exceptionnelle et devra être validée et autorisée par l’ECAB
  - Court-circuitage des procédures (réalisation, mise en œuvre, documentation et tests)

Cycle de vie d’un changement

![Cycle de vie d’un changement](../../assets/course-sources/isolated/6ab33825d3402c7f/itil-p006-003.webp)

Cycle de vie d’un changement — illustration isolée du support, page 6.

### Page 7

La gestion des changements : terminologie

- CI - Configuration Item : composant du système d’information qui va contribuer à la fourniture d’un ou plusieurs services
- CMS - Content Managment System : logiciel de gestion des CI, de la base connaissance…

- CAB - Change Advisory Board : comité consultatif qui évalue et donne un avis sur la mise en œuvre des changements dits normaux
- ECAB - Emergency Change Advisory Board : comité qui donne l’autorisation de traiter le changement en urgence
- PIR - Post Implementation Review : comité qui analyse les résultats des mises en production des changements

La gestion des actifs de services et des configurations

- Son objectif
  - Identifier, contrôler et enregistrer les actifs de services et les éléments de configuration (CI - Configuration Item, les « baselines »)
  - Éditer des rapports sur l’état des actifs de services et des éléments de configuration
  - Auditer et vérifier les actifs de services et les éléments de configuration
  - Protéger l’intégrité des actifs de services et des éléments de configuration
  - Gérer un système de gestion de configuration (CMS ou Configuration Management System)

### Page 8

#### La gestion des actifs de services et des configurations

- Élément de configuration
- Un élément de configuration, dénommé CI, est un composant du système d’information qui va contribuer à la fourniture d’un ou plusieurs services

- Identifiable par un type et un ensemble d’attributs pour le décrire
- Relation possible avec d’autres CI : situation, physique et fonctionnelle

![Exemples d’éléments de configuration](../../assets/course-sources/isolated/6ab33825d3402c7f/itil-p008-004.webp)

Exemples d’éléments de configuration — illustration isolée du support, page 8.

### Page 9

#### La gestion des actifs de services et des configurations

- Activités : planification initiale
  - Définir le périmètre, la stratégie, la politique de gestion des éléments de configuration
  - Connaître les outils et les données des différents composants existants (véracité et mise à jour) : analyse de l’existant
  - Sélection, configuration et modélisation du CMS/CMDB (type de CI, attributs, relations)
  - Chargement initial
  - Nomination du propriétaire, des acteurs clés avec leurs rôles et responsabilités
  - Formation des collaborateurs
- Activités : planification itérative
  - Chargement des CMDB
  - Ajustement des procédures, rôles et responsabilités

- Les outils : la CMDB
  - Configuration Management Data Base
  - BDD de l’outil de gestion associé
  - Contient des enregistrements CI
- Les outils : le CMS
  - Configuration Management System
  - Ensemble d’outils pour gérer les données de configuration
  - Prend les données de plusieurs CMDB pour constituer une CMDB fédérée
- Les outils : la DML
  - Definitive Media Library : lieu de stockage sécurisé des CI logiciels
  - Référence pour tous les logiciels : contient les médias, documentations et clés de licence associées

### Page 10

!!! note "À retenir"
    La gestion des actifs de services et des configurations Identification, contrôle, état et audit des configurations — illustration isolée du support, page 10.

La gestion des actifs de services et des configurations

![Identification, contrôle, état et audit des configurations](../../assets/course-sources/isolated/6ab33825d3402c7f/itil-p010-005.webp)

Identification, contrôle, état et audit des configurations — illustration isolée du support, page 10.

La gestion des mises en production et des déploiements

- La gestion des mises en production et des déploiements
  - Valide, organise et planifie le déploiement des services (nouveaux ou mis à jour) de façon « industrielle », en garantissant la valeur apportée, dans le respect des SLA.
  - Crée et fournit le document à l’exploitation des services
  - S’assure que les utilisateurs ont reçu les informations et sont formés pour utiliser les nouveaux services
  - Gestion des versions, convention de nommage, le R.A.C.I, les délais…

Fonction 1 Fonction 2 Fonction 3

| Activité | Fonction 1 | Fonction 2 | Fonction 3 |
| --- | --- | --- | --- |
| Activité 1 | A | R, C | C |
| Activité 2 | A, I | R | C |
| Activité 3 | A | R | C |
| Activité 4 | A | R | C, I |
| Activité 5 | A | R | C, I |

R – Responsible – qui réalise la tâche A – Accountable – qui est le responsable, celui qui valide C – Consulted – qui est consulté comme expert I – Informed – qui doit être forcément informé

### Page 11

La gestion des mises en production et des déploiements

- Les différents modes de déploiement

| Mode de déploiement | Définition du support |
| --- | --- |
| Push | Le déploiement est à l’initiative d’un centre vers les sites utilisateurs cibles. Déploiement d’une mise à jour sur l’ensemble des utilisateurs concernés. |
| Pull | Le déploiement est mis à disposition des utilisateurs sur un serveur. Les utilisateurs vont initier le déploiement à leur convenance. |
| Big bang | Le déploiement est effectué en une seule opération vers tous les utilisateurs. |
| Par phase | Le déploiement s’effectue selon un plan en tenant compte des périmètres définis par le client. |
| Manuel | Déploiement avec l’aide du personnel de la DSI avec contrôles et surveillance. |
| Automatique | Fortement conseillé, déploiement sans l’aide du personnel de la DSI. |

Les autres processus de la transition des services

- La gestion de l’évaluation des changements
  - Mesure l’impact des changements, en évaluant les effets et les risques
  - Crée la revue de post-implémentation (PIR)
  - Indépendante de la gestion des changements
- La validation et les tests
  - Garant du bon fonctionnement des services (nouveaux et mise à jour) et de la gestion des erreurs découvertes pendant les phases d’intégration, de préproduction et de post-mise en production
  - Création de procès-verbaux de recette (fonctionnelle, performance, d’exploitabilité, de service régulier)
- La gestion de la planification et le support à la transition
  - Organise le ou les changements de services (nouveaux ou mise à jour) et gère les ressources nécessaires (humaines et matérielles)

### Page 12

#### La gestion de la connaissance

- Ses objectifs
  - Donner de l’information à un collaborateur avec la granularité dont il a besoin
  - Fournir une information compréhensible et fiable
  - Permettre une prise de décision à tous les instants du cycle de vie
  - Permettre d’optimiser et de fiabiliser les prises de décision (efficience)
  - Permettre d’enregistrer les situations déjà connues
  - Mettre en place et faire vivre un système de gestion de la connaissance
  - Gérer l’information
  - S’assurer de la bonne utilisation de la base de connaissances
  - SKMS - Service Knowledge Management System

- Gestion de l’information
  - Identifier les exigences, les contraintes, les spécifications des données traitées
  - Définir une architecture permettant de supporter ces données
  - Définir des outillages appropriés pour mettre en œuvre cette architecture
  - Écrire les procédures qui vont faire vivre ces données
  - Effectuer une analyse précise de l’état des lieux en matière de gestion de la connaissance
  - Appréhender cette spécificité pour mieux bâtir une solution adaptée
  - Évaluer la performance des bases de connaissances et être force de propositions pour l’amélioration des bases

### Page 13

La gestion de la connaissance

- Bonne utilisation de la base
  - Savoir si ce que l’on a mis en place sert à quelque chose ou si des collaborateurs l’utilisent
  - Comprendre qui partage la connaissance, qui capitalise la connaissance de l’entreprise
  - L’important n’est pas une base de connaissances contenant beaucoup d’informations, mais une base de connaissances qui est utilisée
  - Gérer la promotion, l’information, la formation sur les bases de connaissances

Référence du document : 1CH-nXTabYXiRxfIZKOiUCyEIco1T8x6q · SHA-256 6ab33825d3402c7f…

| Support · Module 04 - Support de cours · 13 pages transcrites | Texte, tableaux et illustrations utiles retranscrits du support ; numéros de diapositives, bandeaux répétitifs, éléments de marque et décorations exclus. |
