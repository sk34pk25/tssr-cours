# Module 06 — Plug-ins et inventaire

**Séquence :** Administration GLPI  
**Importance :** socle de la progression officielle  
**Sources consolidées :** 1 support(s) de cours, 1 énoncé(s), 1 correction(s)

!!! warning "Périmètre et versions"
    Le laboratoire cible GLPI 9.5, PHP 7.4 et FusionInventory. Pour GLPI 10 et 11, l’inventaire est natif et FusionInventory n’est plus pris en charge ; les déploiements actuels doivent suivre la documentation GLPI et utiliser GLPI Agent. Référence : [Documentation GLPI](https://help.glpi-project.org/documentation), [FAQ inventaire GLPI](https://help.glpi-project.org/faq/glpi/inventory).

## Objectifs et compétences

- Installer et gérer un plug-in compatible.
- Comprendre l’ancien flux FusionInventory du laboratoire.
- Utiliser GLPI Agent et l’inventaire natif dans les versions actuelles.
- Importer des données avec Data Injection et contrôler le rapport.

!!! tip "Façon simple de le comprendre"
    Ce module sert à passer de la notion « Plug-ins et inventaire » à une méthode que l’on peut expliquer, appliquer, vérifier et dépanner.

## Méthode de travail

1. Lire les concepts dans l’ordre du support.
2. Reproduire les exemples dans un environnement de laboratoire.
3. Noter le résultat attendu avant de modifier une configuration.
4. Vérifier avec l’outil ou la commande appropriée.
5. Revenir à l’état initial si le résultat diverge.

## Remontée d’inventaire

```mermaid
flowchart LR
    P["Poste ou serveur"] --> A["GLPI Agent<br/>collecte matérielle et logicielle"] --> H["HTTP/HTTPS"] --> G["Inventaire natif GLPI"] --> C["CI mis à jour<br/>règles et rapprochement"]
```

<p class="tssr-caption">Dans un déploiement actuel, GLPI Agent alimente l’inventaire natif de GLPI. Le support historique FusionInventory est conservé pour le laboratoire ancien, avec son avertissement de version.</p>

## Commandes repérées dans les supports

```text
cp /home/debyann/ fusioninventory -9.5.0+1.0.tar.bz2
cd /var/www/glpi/plugins
tar xvjf fusioninventory-9.5.0+1.0.tar.bz2
chown -R www-data /var/www/glpi/plugins
```

!!! warning
    Une commande extraite d’un support n’est pas à exécuter aveuglément. Vérifier la version, les droits, la cible et l’existence d’une sauvegarde avant toute action destructive.

## Module 06 - Support de cours

### Administration GLPI

#### Module 06 — Présentation des plug-ins — Inventaire avec

#### FusionInventory

- Comment ajouter/gérer des plugins avec GLPI

- Exploration du site https://plugins.glpi-project.org/

- Comment installer le plugin FusionInventory pour GLPI

- Installation d’un agent FusionInventory sous Windows

- Savoir modifier la configuration de l’agent FusionInventory

- Comment forcer un inventaire depuis un agent

- Installer le plugin Data-Injection en vue d’importer des données

- Paramétrer un modèle d’importation Data-Injection

#### Présentation des plug-ins — Inventaire avec FusionInventory

### Présentation des plug-ins

#### Présentation des plug-ins — Inventaire avec FusionInventory

- Étendre les possibilités de GLPI sans modification du

#### produit de base

- Catalogue: « https://plugins.glpi-project.org »

- Depuis la version 9.5, il est possible d’utiliser le Marketplace

#### (inscription sur le site obligatoire)

- Principaux domaines :

- Rapports / Graphiques

- Inventaire *

- Réseau

- Gestion administrative

- HelpDesk *

- Import

#### Les plug-ins : présentation

#### * Domaines traités

#### Présentation des plug-ins — Inventaire avec FusionInventory

### « Configuration =&gt; Plugins »

- Récupération des sources au format Gzip ou Bzip2

- Extraction des plug-ins : « GlpiInstallationDir/plugins »

- Installation et activation depuis l’interface graphique :

- Chemin d’accès de configuration du plugin : va dépendre

#### du plugin

#### Les plug-ins : installation manuelle

- Une version de plugin pour une version ou plus de GLPI

- La mise à jour de GLPI peut nécessiter une mise à jour

#### du plugin

#### Présentation des plug-ins — Inventaire avec FusionInventory

- Inscription gratuite sur le site https://services.glpi-

#### network.com/register afin de récupérer une clé d’enregistrement

- Puis la coller dans la section Configuration→Générale de GLPI :

#### Paramétrage du Marketplace

#### Présentation des plug-ins — Inventaire avec FusionInventory

### Présentation des plug-ins — Inventaire avec FusionInventory

#### Les plug-ins : installation par le Marketplace

#### Présentation des plug-ins — Inventaire avec FusionInventory

#### Plugin FusionInventory

#### Présentation des plug-ins — Inventaire avec FusionInventory

### Windows/Linux/macOS/Android

- Plugins dans GLPI =&gt; la partie serveur

- Les clients FusionInventory agents :

- Permettre un inventaire automatique des équipements

- Déploiement en mode Push / Pull d’applications

- Collecte de données

- Inventaire distant SNMP

- Découverte réseau

- Wake-on-LAN

#### FusionInventory

#### Présentation des plug-ins — Inventaire avec FusionInventory

- Modèle client / serveur

- Le client communique à intervalle régulier avec son serveur

- Le serveur peut réveiller le client pour une communication

#### anticipée

- Données d’inventaire, remontée d’information de collecte, etc.

- Protocole HTTP : documents XML

#### FusionInventory : vue d'ensemble

#### Présentation des plug-ins — Inventaire avec FusionInventory

### de clients

- Nécessité de préparer la partie serveur avant toute importation

- Comment gérer l’affectation des lieux et entités aux objets

#### inventoriés ?

- Comment maintenir une relation cohérente

#### utilisateur &lt;=&gt; ordinateur

- Inventaire automatique par défaut très volumineux =&gt; limitation

#### nécessaire

- Définition d’une liste noire

#### FusionInventory : préparation inventaire

#### Dictionnaires

Administration =&gt;

#### Dictionnaires

#### Règles fusion

Administration =&gt; Fusion =&gt;

#### Règles

#### Présentation des plug-ins — Inventaire avec FusionInventory

- « Règles d’informations d’ordinateur »

- À chaque update, modifier des informations ordinateur en fonction d’information de

#### collecte

- « Règles de lieu »

- Permettre l’affectation et modification automatique du lieu des équipements importés

#### par Fusion

- « Règles sur l’entité ordinateur »

- Permettre l’affectation et modification automatique de l’entité de rattachement

- « Règles d’import et de liaison des matériels »

- Liste fixe — Identification précise des machines à mettre à jour ou importer — éviter les

#### doublons

- « Matériels ignorés durant l’import »

- Liste des équipements n’ayant pas pu être importés suite à une découverte réseau

#### FusionInventory : règles

#### Présentation des plug-ins — Inventaire avec FusionInventory

### Plugin Data Injection

#### Pour aller plus loin :

#### Présentation des plug-ins — Inventaire avec FusionInventory

- Il permet d’injecter des données depuis un fichier .csv

- Comme dans la création à la main, l’ordre de création est important

- Par exemple, création d’un fabricant, puis d’un composant et enfin l’ordinateur

- Attention :

- Aux droits des utilisateurs qui utilisent l’injection

- Si l’utilisateur n’a pas le droit de créer un composant, il ne sera pas créé

- Si vous utilisez FusionInventory, est-il indispensable d’injecter vos données ?

#### Data Injection

#### Présentation des plug-ins — Inventaire avec FusionInventory

### Data Injection

- Ce qu’on peut importer

- Ce qu’on ne peut pas importer

- Ordinateur

- Écran

- Imprimante

- Matériel

#### réseau

- Téléphone

- Périphériques

- Composants

- Utilisateur

- Groupe

- Entité

- Contrat

- Fournisseur

- Contact

- Informations

#### financières

- Ports réseau

- Type de cartouche

- Type de

#### consommable

- Documents

- Logiciel

- Versions de logiciels

- Licences

- Données relations au helpdesk

#### (catégories, tickets)

- Données relatives à la base de

#### connaissance

#### Présentation des plug-ins — Inventaire avec FusionInventory

- Étape 1 — La création d'un modèle

#### Data Injection

#### Présentation des plug-ins — Inventaire avec FusionInventory

- Étape 2 — Injecter un fichier au format .csv avec vos en-têtes de colonne

- UTF-8 pour un fichier venant de Linux

- ISO8859-1 pour un fichier venant de

#### Windows

#### Présentation des plug-ins — Inventaire avec FusionInventory

- Étape 3 - Correspondance de vos en-têtes de colonne avec les

#### champs des différentes tables

#### Data Injection

#### Présentation des plug-ins — Inventaire avec FusionInventory

- Étape 4 - Procéder à l’importation avec votre fichier rempli

#### Présentation des plug-ins — Inventaire avec FusionInventory

## Mise en pratique

- [Travaux pratiques du module](../../tp/glpi/module-06/index.md)
- [Fiche de révision du module](../../revision/glpi/module-06-plug-ins-et-inventaire.md)

## Questions flash

1. Comment expliquer simplement « Plug-ins et inventaire » à un collègue ?
2. Quelles étapes ou notions doivent être maîtrisées avant la manipulation ?
3. Quel contrôle permet de prouver que le résultat est correct ?
4. Quel est le premier risque ou piège à écarter ?

??? success "Éléments de réponse"
    - Installer et gérer un plug-in compatible.
    - Comprendre l’ancien flux FusionInventory du laboratoire.
    - Utiliser GLPI Agent et l’inventaire natif dans les versions actuelles.
    - Importer des données avec Data Injection et contrôler le rapport.

## Voir aussi

- [Présentation de la séquence](index.md)
