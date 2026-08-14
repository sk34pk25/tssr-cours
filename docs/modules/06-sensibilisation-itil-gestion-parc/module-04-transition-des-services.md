# Module 04 — Transition des services

**Séquence :** Sensibilisation ITIL et gestion de parc  
**Importance :** socle de la progression officielle  
**Sources consolidées :** 1 support(s) de cours, 1 énoncé(s), 1 correction(s)

!!! warning "Périmètre et versions"
    La progression suit principalement les publications du cycle de vie ITIL v3, complétées par une introduction à ITIL 4. Cette structure historique est conservée car elle constitue l’ordre officiel des supports.

## Objectifs et compétences

- Définir changement, version et élément de configuration.
- Comprendre la CMDB et la gestion des connaissances.
- Évaluer risque, impact, plan de retour arrière et validation.
- Transférer un service vers l’exploitation de façon contrôlée.

!!! tip "Façon simple de le comprendre"
    Ce module sert à passer de la notion « Transition des services » à une méthode que l’on peut expliquer, appliquer, vérifier et dépanner.

## Méthode de travail

1. Lire les concepts dans l’ordre du support.
2. Reproduire les exemples dans un environnement de laboratoire.
3. Noter le résultat attendu avant de modifier une configuration.
4. Vérifier avec l’outil ou la commande appropriée.
5. Revenir à l’état initial si le résultat diverge.

## Module 04 - Support de cours

### Sensibilisation ITIL et

#### gestion de parc

#### Module 04 — Transition des services

- Connaitre le rôle de la transition des services
- Identifier les différents processus
- Définir un changement
- Définir un CI (Configuration Item)
- Identifier les outils
- Définir la connaissance

#### Les publications centrales « T ransition des services»

### Les publications centrales « T ransition des services »

#### Les publications centrales

#### « T ransition des services »

#### Les publications centrales « T ransition des services»

- Objectif
- Mise en production des services (nouveaux ou améliorés)
- Son rôle
- Mettre en production en respectant les livrables produits par la conception

#### des services ainsi que les coûts

- Réalisation, construction, test, validation et déploiement des services
- Prévoir et gérer les ressources nécessaires
- Produire la documentation
- Surveiller et améliorer les services
- Respecter les critères de qualité, de sécurité et les délais dans la délivrance

#### des services

- Prendre en compte et améliorer la perception client

#### La transition des services

### Les publications centrales « T ransition des services»

- Dans la phase de transition, tout commence par le processus de

#### gestion des changements avec une RFC Request For Change

#### La transition des services

#### Gestion des changements

#### RFC

#### Gestion des actifs de services et des configurations

#### Gestion de la planification et support à la transition

#### Gestion de l’évaluation des changements La validation et les tests

#### Gestion des déploiements et des mises en production

#### Gestion de la connaissance

#### Les publications centrales « T ransition des services»

- Ses objectifs
- S’assurer que les procédures et les méthodes pour traiter les changements

#### sont efficaces, voire efficientes

- S’assurer que les modifications des CI (Configuration Item) sont bien

#### enregistrées dans le CMS (Content Managment System)

- Répondre aux évolutions exprimées par les clients en minimisant les risques

#### d’interruption de service et en maximisant la valeur fournie

- Définition d’un changement
- Ajout, modification, ou retrait d’un ou plusieurs CI du système

#### d’information ou d’un ou plusieurs services fournis par ce système

#### d’information

#### La gestion des changements

- Les « 7 R » de la gestion des

#### changements

- Raised : qui a fait la demande ?
- Reason : pour quelle raison ?
- Return : quel est le retour attendu ?
- Risks : quels sont les risques ?
- Resources : quelles seront les ressources ?
- Responsible : qui est le responsable ?
- Relationship : quelles sont les relations

#### avec les autres changements ?

#### La gestion des changements

#### Raised

#### Risks

#### Reason

#### Return

#### Les

#### « 7 R »

#### Resources

#### Responsible

#### Relationship

#### Les publications centrales « T ransition des services»

- Les origines d’un changement
- Les correctifs (événement, incident, problème…)
- La législation
- L’organisation
- Des directives ou des standards
- Des évolutions des services existants
- Des nouveaux services
- Un nouveau modèle de sourcing
- Une innovation technologique…

#### La gestion des changements

- La demande de changement
- Tous les clients sont habilités à émettre une demande de changement, mais

cela ne veut pas dire qu’elle sera acceptée.

- Toute demande de changement doit être formalisée par une RFC.
- RFC (Request For Change) est une formalisation d’une modification d’un ou

plusieurs éléments de configuration (CI).

- Une RFC doit contenir :
- Un identifiant unique
- Une date de demande
- Le nom du demandeur
- Une proposition de priorité de changement (priorité = impact x urgence)
- Une description du changement
- Les risques durant l’implémentation du changement
- Les dates de mise en place du changement
- Une estimation des ressources nécessaires (humaine, matériels…)

#### La gestion des changements

#### Les publications centrales « T ransition des services»

- La gestion de la priorité d’une demande de changement

#### La gestion des changements

#### Code de priorité

#### Urgence

#### Elevée Moyenne Faible

#### Impact

#### Elevé 1 2 3

#### Moyen 2 3 4

#### Faible 3 4 5

#### Code de

#### priorité Description Dans GLPI Priorité de

#### changement

#### 1 Critique Très haute Urgent / Critique

#### 2 Elevée Haute Urgent

#### 3 Moyen Moyenne Normal

#### 4 Faible Basse Normal

#### 5 Très faible Très basse Standard / Planifié

- Le changement standard
- Actions connues, documentées, déjà réalisées et testées
- Les risques sont faibles et bien maîtrisés
- Changement préapprouvé, maîtrisé et associé à des procédures établies
- Référencé dans un mini-catalogue de changements préautorisés
- Le changement normal
- Il nécessite une évaluation complète et une autorisation avant sa réalisation

#### par le CAB

- Le changement urgent
- L’urgence est exceptionnelle et devra être validée et autorisée par l’ECAB
- Court-circuitage des procédures (réalisation, mise en œuvre, documentation

#### et tests)

#### Les types de changement

#### Les publications centrales « T ransition des services»

#### Cycle de vie d’un changement

#### Demandeur Gestion des

#### changements

#### Gestion de la mise

#### en production

#### Gestion des actifs et

#### des configurations

#### Clôture

#### Request For

#### Change

#### Filtrage

#### Classification

#### Priorisation

#### Préparation

#### Script de

#### procédure

#### Test

#### Exploitabilité

#### Utilisabilité

#### Bilan de test

#### CAB

#### Bilan de

#### préparation

#### Mise en

#### production

#### Accepté

#### P I R

#### MAJ de la CMDB

#### ReportAbandon

#### Abandon

- CI - Configuration Item : composant du système d’information qui

#### va contribuer à la fourniture d’un ou plusieurs services

- CMS - Content Managment System : logiciel de gestion des CI, de

#### la base connaissance…

- CAB - Change Advisory Board : comité consultatif qui évalue et

#### donne un avis sur la mise en œuvre des changements dits

#### normaux

- ECAB - Emergency Change Advisory Board : comité qui donne

#### l’autorisation de traiter le changement en urgence

- PIR - Post Implementation Review : comité qui analyse les

#### résultats des mises en production des changements

#### La gestion des changements : terminologie

#### Les publications centrales « T ransition des services»

- Son objectif
- Identifier, contrôler et enregistrer les actifs de services et les éléments de

#### configuration

#### (CI - Configuration Item, les « baselines »)

- Éditer des rapports sur l’état des actifs de services et des éléments de

#### configuration

- Auditer et vérifier les actifs de services et les éléments de configuration
- Protéger l’intégrité des actifs de services et des éléments de configuration
- Gérer un système de gestion de configuration (CMS ou Configuration

#### Management System)

#### La gestion des actifs de services et des configurations

- Élément de configuration
- Un élément de configuration, dénommé CI, est un composant du

#### système d’information qui va contribuer à la fourniture d’un ou

#### plusieurs services

- Identifiable par un type et un ensemble d’attributs pour le décrire
- Relation possible avec d’autres CI : situation, physique et

#### fonctionnelle

#### La gestion des actifs de services et des configurations

#### Les publications centrales « T ransition des services»

#### La gestion des actifs de services et des configurations

#### Composants matériels

#### Composants logiciels

#### Équipements réseau

#### Équipements téléphoniques

#### Contrats de service

#### Composants d’infrastructure

#### Ressources utilisateurs

#### Éléments environnementaux

#### Documentations

#### Procédures d’exploitation

#### Exemples

#### d’élément de

#### configuration

- Activités : planification initiale
- Définir le périmètre, la stratégie, la politique de gestion des éléments

#### de configuration

- Connaître les outils et les données des différents composants existants

#### (véracité et mise à jour) : analyse de l’existant

- Sélection, configuration et modélisation du CMS/CMDB (type de CI,

#### attributs, relations)

- Chargement initial
- Nomination du propriétaire, des acteurs clés avec leurs rôles et

#### responsabilités

- Formation des collaborateurs
- Activités : planification itérative
- Chargement des CMDB
- Ajustement des procédures, rôles et responsabilités

#### La gestion des actifs de services et des configurations

#### Les publications centrales « T ransition des services»

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
- Référence pour tous les logiciels : contient les médias, documentations et

#### clés de licence associées

#### La gestion des actifs de services et des configurations

#### Identification

- Sélectionner, identifier et définir les CI : attributs, relations, etc.
- Définir le niveau de granularité d’enregistrement des CI et leurs baselines
- Etiqueter les composants physiques

#### Contrôle des CI

- S’assurer que seuls les CI autorisés et identifiables sont enregistrés
- CI accompagnés d’une documentation (ses relations, attributs, liens)

#### Gestion des états

- Production de rapports sur l’état des différents CI

#### Vérifications et

#### audits

- Vérifier l’adéquation des activités avec celles définies par le processus
- S’assurer de la fraîcheur des informations saisies
- S’assurer de la bonne disponibilité des données

#### Les publications centrales « T ransition des services»

- La gestion des mises en production et des déploiements
- Valide, organise et planifie le déploiement des services (nouveaux ou mis à

jour) de façon « industrielle », en garantissant la valeur apportée, dans le respect des SLA.

- Crée et fournit le document à l’exploitation des services
- S’assure que les utilisateurs ont reçu les informations et sont formés pour

#### utiliser les nouveaux services

- Gestion des versions, convention de nommage, le R.A.C.I, les délais…

#### La gestion des mises en production et des déploiements

#### Fonction 1 Fonction 2 Fonction 3

#### Activité 1 A R, C C

#### Activité 2 A, I R C

#### Activité 3 A R C

#### Activité 4 A R C, I

#### Activité 5 A R C, I

#### R — Responsible — qui réalise la tâche

#### A — Accountable — qui est le responsable, celui qui valide

#### C — Consulted — qui est consulté comme expert

#### I — Informed — qui doit être forcément informé

- Les différents modes de déploiement

#### La gestion des mises en production et des déploiements

Manuel : déploiement avec l’aide du personnel de la DSI avec contrôles et surveillance. Automatique : fortement conseillé, déploiement sans l’aide du personnel de la DSI. Mode Push : le déploiement est à l’initiative d’un centre vers les sites utilisateurs cibles. Déploiement d’une mise à jour sur l’ensemble des utilisateurs concernés. Mode Pull : le déploiement est mis à disposition des utilisateurs sur un serveur. Les utilisateurs vont initier le déploiement à leur convenance. Big bang : le déploiement est effectué en une seule opération vers tous les utilisateurs. Par phase : le déploiement s’effectue selon un plan en tenant compte des périmètres définis par le client.

#### Les publications centrales « T ransition des services»

- La gestion de l’évaluation des changements
- Mesure l’impact des changements, en évaluant les effets et les risques
- Crée la revue de post-implémentation (PIR)
- Indépendante de la gestion des changements
- La validation et les tests
- Garant du bon fonctionnement des services (nouveaux et mise à jour ) et de la

#### gestion des erreurs découvertes pendant les phases d’intégration, de

#### préproduction et de post-mise en production

- Création de procès-verbaux de recette (fonctionnelle, performance,

#### d’exploitabilité, de service régulier)

- La gestion de la planification et le support à la transition
- Organise le ou les changements de services (nouveaux ou mise à jour) et gère

#### les ressources nécessaires (humaines et matérielles)

#### Les autres processus de la transition des services

- Ses objectifs
- Donner de l’information à un collaborateur avec la granularité dont il a

#### besoin

- Fournir une information compréhensible et fiable
- Permettre une prise de décision à tous les instants du cycle de vie
- Permettre d’optimiser et de fiabiliser les prises de décision (efficience)
- Permettre d’enregistrer les situations déjà connues
- Mettre en place et faire vivre un système de gestion de la connaissance
- Gérer l’information
- S’assurer de la bonne utilisation de la base de connaissances
- SKMS - Service Knowledge Management System

#### La gestion de la connaissance

#### Les publications centrales « T ransition des services»

- Gestion de l’information
- Identifier les exigences, les contraintes, les spécifications des données

#### traitées

- Définir une architecture permettant de supporter ces données
- Définir des outillages appropriés pour mettre en œuvre cette architecture
- Écrire les procédures qui vont faire vivre ces données
- Effectuer une analyse précise de l’état des lieux en matière de gestion de la

#### connaissance

- Appréhender cette spécificité pour mieux bâtir une solution adaptée
- Évaluer la performance des bases de connaissances et être force de

#### propositions pour l’amélioration des bases

#### La gestion de la connaissance

- Bonne utilisation de la base
- Savoir si ce que l’on a mis en place sert à quelque chose ou si des

#### collaborateurs l’utilisent

- Comprendre qui partage la connaissance, qui capitalise la connaissance de

#### l’entreprise

- L’important n’est pas une base de connaissances contenant beaucoup

#### d’informations, mais une base de connaissances qui est utilisée

- Gérer la promotion, l’information, la formation sur les bases de

#### connaissances

#### La gestion de la connaissance

## Mise en pratique

- [Travaux pratiques du module](../../tp/itil/module-04/index.md)
- [Fiche de révision du module](../../revision/itil/module-04-transition-des-services.md)

## Questions flash

1. Comment expliquer simplement « Transition des services » à un collègue ?
2. Quelles étapes ou notions doivent être maîtrisées avant la manipulation ?
3. Quel contrôle permet de prouver que le résultat est correct ?
4. Quel est le premier risque ou piège à écarter ?

??? success "Éléments de réponse"
    - Définir changement, version et élément de configuration.
    - Comprendre la CMDB et la gestion des connaissances.
    - Évaluer risque, impact, plan de retour arrière et validation.
    - Transférer un service vers l’exploitation de façon contrôlée.

## Voir aussi

- [Présentation de la séquence](index.md)
