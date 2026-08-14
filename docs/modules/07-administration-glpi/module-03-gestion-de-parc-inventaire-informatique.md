# Module 03 — Gestion de parc — Inventaire informatique

**Séquence :** Administration GLPI  
**Importance :** socle de la progression officielle  
**Sources consolidées :** 1 support(s) de cours, 2 énoncé(s), 1 correction(s)

!!! warning "Périmètre et versions"
    Le laboratoire cible GLPI 9.5, PHP 7.4 et FusionInventory. Pour GLPI 10 et 11, l’inventaire est natif et FusionInventory n’est plus pris en charge ; les déploiements actuels doivent suivre la documentation GLPI et utiliser GLPI Agent. Référence : [Documentation GLPI](https://help.glpi-project.org/documentation), [FAQ inventaire GLPI](https://help.glpi-project.org/faq/glpi/inventory).

## Objectifs et compétences

- Construire une nomenclature de parc.
- Créer ordinateurs, composants, logiciels, licences et équipements réseau.
- Utiliser des gabarits cohérents.
- Représenter baies, ports et connexions.

!!! tip "Façon simple de le comprendre"
    Ce module sert à passer de la notion « Gestion de parc — Inventaire informatique » à une méthode que l’on peut expliquer, appliquer, vérifier et dépanner.

## Méthode de travail

1. Lire les concepts dans l’ordre du support.
2. Reproduire les exemples dans un environnement de laboratoire.
3. Noter le résultat attendu avant de modifier une configuration.
4. Vérifier avec l’outil ou la commande appropriée.
5. Revenir à l’état initial si le résultat diverge.

## Du matériel au service rendu

```mermaid
flowchart LR
    A["Actif inventorié<br/>poste, écran, imprimante"] --> C["CI dans GLPI<br/>identité et caractéristiques"] --> R["Relations<br/>utilisateur, lieu, contrat"] --> T["Tickets et interventions"] --> H["Historique et cycle de vie"]
```

<p class="tssr-caption">L’inventaire devient utile quand l’actif est relié à son utilisateur, son emplacement, ses contrats et ses tickets : ces relations donnent le contexte de support.</p>

## Module 03 - Support de cours

### Administration GLPI

#### Module 03 — Gestion de parc — Inventaire informatique

- Découvrir la notion d’inventaire dans GLPI
- L’importance d’un plan de nommage
- L’ordinateur, un assemblage de composants
- Le logiciel, un item qui associe une licence
- Connecter un équipement au réseau
- Gérer les consommables avec GLPI
- Création d’un gabarit d’inventaire

### Les éléments d'inventaire

#### Fonctionnalités gestion de parc

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

### Type Service

#### Organisation

#### Date achat Index

#### PC DIR 202203 012

#### Ordinateur fixe Direction Mars 2022 N° 012

#### Élaborer un plan de nommage

- Un plan de nommage est une nomenclature
- Définir l’information importante pour retrouver un item
- Se gèrent depuis le menu Parc =&gt; ordinateurs
- Utilisables pour les ordinateurs fixes, portables, serveurs, etc.
- Champ « type » très important pour les différencier
- Utilisation possible des gabarits
- Utilisation possible d’un outil d’inventaire automatique

#### Élément ordinateur

- Ne sont pas des intitulés
- Doivent être créés depuis configuration =&gt; composants
- Sont caractérisés par plusieurs champs qui eux sont des intitulés
- La liste des différents composants est fixe
- Peuvent être gérés dynamiquement par un outil d’inventaire
- Portée limitée à l’entité de création, récursivité possible

#### Ordinateur : composants

- Gérer quels sont les logiciels installés sur l’ordinateur
- Triés par catégories et caractérisés par un nom, leur version

#### et le statut

- Possibilité de choisir la catégorie à afficher
- Possibilité de définir si une licence a été installée sur le poste

### Ordinateur : logiciels

#### Créer une catégorie

de logiciel.

#### Exemple :

#### bureautique

Créer le logiciel.

#### Exemple : Office

#### Associer ce logiciel

#### à un éditeur et

à une catégorie. À partir du logiciel, créer la version.

#### Exemple :

#### 365 ProPlus

#### Renseigner le système

d’exploitation. Créer les licences. Renseigner le nombre, le logiciel et l’éditeur.

#### Puis affecter la licence

à un ordinateur.

- Va permettre de gérer les connexions directes avec d’autres

#### éléments

- Représentation de la liaison physique (USB, série, HDMI…)

#### entre un ordinateur et un autre élément

- Connexion possible : imprimantes, périphériques, moniteurs

#### et téléphones

#### Ordinateur : connexion

### élément matériel

- Connexions réseau entre les différents éléments
- Modélisation de la sortie d’une interface réseau sur un
- Plusieurs types : Ethernet, wifi, fibre, agrégation, etc.
- L’ajout de plusieurs ports en même temps est possible
- Il est caractérisé par un nom et un numéro (convention de

#### nommage)

- Peut être associé à un composant de type carte réseau
- Information réseau (@IP , domaine, nom et vlan)

#### Ordinateur : port réseau

- Connecter les ports réseau des éléments va permettre une

#### représentation physique de tout son réseau

- Connexion réseau possible à tout autre élément disposant d’un

#### port réseau

- Le raccordement préalable à une prise réseau pourra être renseigné
- Les intitulés « prises réseau » seront associés à un lieu

#### Ordinateur : connexion d'un port réseau

#### Le port réseau « 1 » de mon ordinateur est raccordé à la prise « p001 »

en S331 qui ensuite est raccordée au port réseau « eth01 » d’un switch cisco

- Système d’exploitation
- Contrats
- Volumes
- Virtualisation
- Antivirus
- Liens externes
- Certificats

#### Ordinateur : les autres onglets

- Informations de gestion de l’élément (responsable, statut, lieu, etc.)
- Caractéristiques générales (fabricant, modèle, type, etc.)
- Usagers du moniteur (connu ou non, groupes, etc.)
- Spécifications techniques (taille, connectiques, etc.)
- Son type de gestion : globale ou unitaire

#### Élément moniteur

### et route le réseau entre plusieurs autres éléments matériels

- Permettre la représentation de tout matériel qui gère, transmet
- Ils devront être différenciables par l’intitulé type
- Switch, routeur, firewall, borne wifi, etc.
- Utilisation possible d’un gabarit
- Grand nombre de paramètres communs aux autres éléments
- Ports réseau importants pour les connexions réseau avec les

#### autres éléments

#### Élément matériel réseau

- Représenter toutes les imprimantes présentes sur le parc

#### informatique

- Utilisation possible d’un gabarit
- Champs : caractéristiques générales, gestion, usagers et

#### spécifications

- Gestion unitaire ou globale
- Connexion directe ou réseau
- Gestion des cartouches installées

#### Élément imprimante

- Définitions des modèles
- Importation en masse
- Modèles d’imprimantes compatibles
- Installation sur les imprimantes
- Fin de vie des cartouches
- Seuils d’alerte (avec supervision)

#### Élément cartouches et consommables

#### Gérer les cartouches

#### Créer un modèle

d’imprimante.

#### Exemple :

#### imprimante USB HP

#### Créer un modèle

de cartouche.

#### Exemple :

Cart-impr-HP .

#### Puis associer le

#### modèle de cartouche

#### à votre modèle

d’imprimante.

#### Ajouter des

#### cartouches à votre

modèle.

#### Exemple :

#### 50 cartouches neuves

#### Installer la ou les

#### cartouches sur votre

imprimante.

#### L’imprimante doit

#### être du même

#### modèle d’imprimante

que les cartouches.

- Fixe, portable, combiné
- Spécifications
- Usagers
- Gestion des composants
- Connexion directe et réseau
- Associable à un ticket

#### Élément téléphones

- Tout ce qui n’est pas implémenté nativement dans GLPI
- Connexion directe et réseau
- Réservation possible
- Usagers
- Associable à un ticket

#### Élément périphérique

### Élément centre de données

- Représentation de ses centres de données (Datacenters)
- Salles serveur
- Baie
- Équipements
- Onduleurs (PDU)

#### Datacenter

#### Salle 1 Salle 2

#### Baie

- Un grand nombre d’éléments peuvent être réservés

#### Réservations

- Rendre un élément réservableAutoriser les réservations
- Plus de nouvelles réservations possiblesRendre indisponible
- Rétablir la possibilité de réserverRendre disponible
- Désactiver les réservationsNe pas autoriser

### Les gabarits

- Applicables à plusieurs éléments
- Définition d’un élément standard, généralement identifié

#### par son modèle

- Pré-remplissage de certains champs communs à un même

#### modèle d’élément

- Simplifie l’ajout de plusieurs éléments de même modèle

#### Le gabarit

- Certains champs peuvent bénéficier d’un système d’incrémentation
- Champs identifiables par une baguette
- Le champ est rempli automatiquement selon un format défini
- Format sous la forme &lt;XXX####&gt;
- &lt; et &gt; pour indiquer le début et la fin d’un format à interpréter
- X pour un caractère quelconque fixe
- # pour un numéro à incrémenter. Nombre de chiffres égaux

#### au nombre de #

- \Y pour y inscrire l’année courante sur 4 chiffres
- \y pour l’année sur 2 chiffres
- \m pour le mois
- \d pour le jour

#### Le gabarit

- Peu importe l’élément d’inventaire, plusieurs champs sont identiques
- Intitulés du champ à créer en amont ou « sur place »
- Liste des principaux
- Nom
- Lieu
- Statut
- Type
- Fabricant
- Modèle
- Numéro d’inventaire
- Responsable et groupe techniques
- Utilisateur et groupe
- Commentaire

#### Champs récurrents

#### Le permet l’ajout d’un intitulé sans

#### quitter la fiche de l’élément

### Les différentes étapes

#### Étapes de création d'un Datacenter

#### Créer un centre de

données.

#### Exemple :

Datacenter L.A.

#### Créer une salle

#### serveur dans votre

#### datacenter

#### Puis indiquer la taille

#### de l’emplacement

pour la baie.

#### Exemple :

#### 2 colonnes

#### 2 lignes

#### Créer la baie dans

#### votre salle serveur

#### puis indiquer le

#### nombre d’unités

#### Exemple :

#### 42 U

#### Créer le matériel avec

#### les images dans le

modèle de matériel.

## Mise en pratique

- [Travaux pratiques du module](../../tp/glpi/module-03/index.md)
- [Fiche de révision du module](../../revision/glpi/module-03-gestion-de-parc-inventaire-informatique.md)

## Questions flash

1. Comment expliquer simplement « Gestion de parc — Inventaire informatique » à un collègue ?
2. Quelles étapes ou notions doivent être maîtrisées avant la manipulation ?
3. Quel contrôle permet de prouver que le résultat est correct ?
4. Quel est le premier risque ou piège à écarter ?

??? success "Éléments de réponse"
    - Construire une nomenclature de parc.
    - Créer ordinateurs, composants, logiciels, licences et équipements réseau.
    - Utiliser des gabarits cohérents.
    - Représenter baies, ports et connexions.

## Voir aussi

- [Présentation de la séquence](index.md)
