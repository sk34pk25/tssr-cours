# Module 05 — Découverte de GLPI

**Séquence :** Sensibilisation ITIL et gestion de parc  
**Importance :** socle de la progression officielle  
**Sources consolidées :** 1 support(s) de cours, 0 énoncé(s), 0 correction(s)

!!! warning "Périmètre et versions"
    La progression suit principalement les publications du cycle de vie ITIL v3, complétées par une introduction à ITIL 4. Cette structure historique est conservée car elle constitue l’ordre officiel des supports.

## Objectifs et compétences

- Identifier les fonctions de parc et de centre de services.
- Se repérer dans l’interface et les recherches.
- Comprendre utilisateurs, profils, entités et objets.
- Relier GLPI aux pratiques de gestion des services.

!!! tip "Façon simple de le comprendre"
    Ce module sert à passer de la notion « Découverte de GLPI » à une méthode que l’on peut expliquer, appliquer, vérifier et dépanner.

## Méthode de travail

1. Lire les concepts dans l’ordre du support.
2. Reproduire les exemples dans un environnement de laboratoire.
3. Noter le résultat attendu avant de modifier une configuration.
4. Vérifier avec l’outil ou la commande appropriée.
5. Revenir à l’état initial si le résultat diverge.

## Module 05 - Support de cours

### Sensibilisation ITIL et

#### gestion de parc

#### Module 05 — Découverte de GLPI

- Découvrir l’outil GLPI

- Définir les différentes fonctionnalités

- Découvrir les fonctionnalités de recherche

- Découvrir son utilisation au quotidien

### avec ITIL

- GLPI : Gestion Libre de Parc Informatique

- ITSM : Information Technology Service Management conforme

- Logiciel libre sous licence GPL 100% libre

- Logiciel complet pour la gestion de parc et centre de services

- Plusieurs langues et plug-ins disponibles

- Installation possible sous Windows et Linux

- Pour les petits comme les grands systèmes d’information

#### GLPI : présentation

#### GLPI : fonctionnalités gestion de parc

#### Inventaire matériel

Vue détaillée, connexions, etc.

#### Historique sur les éléments

#### Systèmes d’exploitation

#### Informations administratives et financières

#### Composants internes

#### Composants et cartographie réseau

#### Cycle de vie des matériels

#### Réservation de matériel

#### Logiciels et licences

### à la FAQ

- Interface simplifiée

- Interface la plus restrictive

- Destinée aux utilisateurs finaux

- Permet de créer un ticket, suivre ses tickets, accéder aux réservations et

- Interface standard

- Interface principale de GLPI

- Tous les modules y sont disponibles en fonction des droits de chacun

- Utilisée pour les taches techniciens, d’administration et de configuration

- 3 vues de travail : personnelle, groupe et globale

#### GLPI : les interfaces

#### GLPI : recherche rapide

- Permet d’effectuer une recherche uniquement sur les champs

#### affichés

- Étendue de la recherche aux champs affichés par défaut de tous les

#### éléments d’inventaire

- Utilisation possible des caractères suivants (REGEX) :

- « ^ » pour symboliser le début du champ

- « $ » pour symboliser la fin du champ

- « NULL » pour rechercher les champs vides

- Utilisation conjointe de « ^ » et « $ » pour la valeur exacte d’un champ

### GLPI : gestion de parc

#### Menu parc

- Affichage par défaut des ordinateurs

- Possibilité de personnaliser les colonnes affichées

- Menu de recherche avancée

- Export possible des données sous différents formats

- Sélection du nombre d’éléments à afficher par page

- Navigation entre les pages

- Affichage possible de la corbeille

#### GLPI : gestion de parc

#### Recherche basique multicritères

- Possibilité de recherches combinant plusieurs critères

- Combinaison possible de critères à l’aide d’opérateurs logiques

- Opérateurs logiques disponibles : ET/OU — ET PAS/OU PAS

- S’applique à un grand nombre de paramètres de l’objet concerné

- Plusieurs critères de recherches selon le paramètre choisi

Contient — Est — N’est pas — Sous — Pas sous — Avant — Après, etc.

- Critères globaux de recherche possibles

#### Recherche avancée

- Possibilité d’utiliser des caractères spéciaux pour les recherches

- NULL : s’assurer qu’un champ est vide

- &lt;Nb ou &gt;Nb : utilisé dans le cas des dates, prend un nombre de mois

- ^ : tester le début d’un champ

- $ : tester la fin d’un champ

- ^$ : tester une valeur exacte pour un champ

- [Année]-[Mois]-[Jours] : tester un champ date

#### GLPI : gestion de parc

#### Recherche sauvegardée

- Possibilité de sauvegarder ses recherches

- Création d’une recherche sauvegardée

- Un nom

- Une visibilité/portée

- Entité de rattachement avec ou sans récursivité

- Comptage

- Accès à ses recherches

#### Modification massive

- Pour effectuer une modification sur un ensemble d’éléments

- Utilisé conjointement aux recherches avancées

- Généralement appliquée sur tous les éléments retournés d’une

#### recherche

- Plusieurs actions possibles

#### GLPI : gestion de parc

#### Fiche élément

- Accessible en cliquant sur un élément

- Contient toutes les informations de l’élément

- Menu de navigation vertical sur la gauche

- Certains onglets communs à tous les éléments

- Possibilité d’afficher tous les onglets sur la même page

- Navigation possible entre les fiches des éléments de la page

#### courante

## Mise en pratique

- Aucun énoncé de TP distinct n’est fourni pour ce module.
- [Fiche de révision du module](../../revision/itil/module-05-decouverte-de-glpi.md)

## Questions flash

1. Comment expliquer simplement « Découverte de GLPI » à un collègue ?
2. Quelles étapes ou notions doivent être maîtrisées avant la manipulation ?
3. Quel contrôle permet de prouver que le résultat est correct ?
4. Quel est le premier risque ou piège à écarter ?

??? success "Éléments de réponse"
    - Identifier les fonctions de parc et de centre de services.
    - Se repérer dans l’interface et les recherches.
    - Comprendre utilisateurs, profils, entités et objets.
    - Relier GLPI aux pratiques de gestion des services.

## Voir aussi

- [Présentation de la séquence](index.md)
