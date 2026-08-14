# Module 02 — Authentification AD — Habilitations

**Séquence :** Administration GLPI  
**Importance :** socle de la progression officielle  
**Sources consolidées :** 1 support(s) de cours, 1 énoncé(s), 1 correction(s)

!!! warning "Périmètre et versions"
    Le laboratoire cible GLPI 9.5, PHP 7.4 et FusionInventory. Pour GLPI 10 et 11, l’inventaire est natif et FusionInventory n’est plus pris en charge ; les déploiements actuels doivent suivre la documentation GLPI et utiliser GLPI Agent. Référence : [Documentation GLPI](https://help.glpi-project.org/documentation), [FAQ inventaire GLPI](https://help.glpi-project.org/faq/glpi/inventory).

## Objectifs et compétences

- Comprendre entités, profils et récursivité.
- Déclarer une source LDAP/Active Directory.
- Importer ou synchroniser les utilisateurs.
- Tester les habilitations avec plusieurs profils.

!!! tip "Façon simple de le comprendre"
    Ce module sert à passer de la notion « Authentification AD — Habilitations » à une méthode que l’on peut expliquer, appliquer, vérifier et dépanner.

## Méthode de travail

1. Lire les concepts dans l’ordre du support.
2. Reproduire les exemples dans un environnement de laboratoire.
3. Noter le résultat attendu avant de modifier une configuration.
4. Vérifier avec l’outil ou la commande appropriée.
5. Revenir à l’état initial si le résultat diverge.

## Module 02 - Support de cours

### Administration GLPI

#### Module 02 — Authentification AD - Habilitations

- Les entités dans GLPI et la visibilité des items par récursivité
- Les interfaces de GLPI et les profils des utilisateurs
- Les intitulés et les lieux : la nomenclature de GLPI
- Création d’un compte local à GLPI
- Ajout d’une source externe d’identification (Active Directory)
- Gérer les habilitations des utilisateurs

### Authentification AD - Habilitations

- Notion clé dans GLPI
- Permet de segmenter les domaines d’administration de l’application
- Intéressant pour une entreprise dont la gestion est hiérarchique
- Cloisonnement étanche entre les entités, sauf en cas de récursivité
- Cas d’une société gérant plusieurs clients avec filiales : une entité

#### par client

#### Les entités GLPI

#### Société

#### Client1

#### Filiale A

#### Filiale B

#### Client2 Filiale A

#### Authentification AD - Habilitations

- Consiste à rendre visible un objet dans les sous-entités
- Permet de traiter la problématique des objets globaux et locaux
- Exemple d’utilisation : un objet de type fournisseur
- Un fournisseur global à toutes les entités sera déclaré dans l’entité la plus

#### haute avec l’option de récursivité

- Un fournisseur local ne sera déclaré que dans l’entité à laquelle il se

#### rattache, sans option de récursivité

#### La récursivité

- Interface simplifiée
- Interface la plus restrictive
- Destinée aux utilisateurs finaux
- Permet de créer un ticket, suivre ses tickets, accéder aux réservations

#### et à la FAQ

- Interface standard
- Interface principale d’un technicien de GLPI
- Tous les modules y sont disponibles en fonction du profil
- Utilisée pour les tâches de techniciens, d’administration

#### et de configuration

- 3 vues de travail : personnelle, groupe et globale

#### Les interfaces

#### Authentification AD - Habilitations

- Détermine le type d’interface (standard ou simplifiée)
- Détermine les droits sur l’application
- Propre à une entité : récursivité possible
- Plusieurs profils possibles pour un même utilisateur
- Plusieurs profils prédéfinis :
- Super-Admin : tous les droits sur GLPI (profil de l’utilisateur GLPI)
- Admin : tous les droits d’administration
- Technician : accès en lecture à l’inventaire et à la gestion de ticket
- Hotliner : saisi et suivi de ticket, mais pas d’en être attribué
- Observer : accès en lecture à l’inventaire et à la gestion
- Self-Service : profil par défaut, interface simplifiée, permet de créer un

#### ticket, suivre ses tickets, accéder aux réservations et à la FAQ

#### Les profils GLPI

- On peut donner des droits sur différentes fonctionnalités :
- Parc — gestion de l’inventaire
- Assistance — gestion des tickets
- Cycles de vie — gestion du suivi des tickets
- Gestion — gestion des licences, fournisseurs, budgets…
- Outils — gestion des rapports, de la base de connaissance, des projets, des tâches…
- Administration — gestion des différentes règles d’automatisation, des entités, des groupes…
- Configuration — gestion de la configuration globale de GLPI, les lieux, les intitulés,

les calendriers...

- Il existe différents droits :
- Lecture
- Mettre à jour
- Créer
- Supprimer
- Purger
- …

#### La création de profils dans GLPI

#### Authentification AD - Habilitations

- Deux formats :
- Liste de valeurs à plat
- Liste de valeurs arborescente : hiérarchie entre les intitulés
- Il existe une liste par défaut, mais beaucoup de listes propres

#### à GLPI sont paramétrables :

- Les lieux
- Les statuts de matériels
- Les fournisseurs
- Les constructeurs
- Les catégories de tickets
- Les noms de logiciels
- Les prises réseau
- Les calendriers
- …

#### Les intitulés

- Ils permettent de placer géographiquement les

#### différents éléments d’inventaire et les utilisateurs

- Liste de valeurs arborescente
- Une convention de nommage est OBLIGATOIRE

#### Les lieux

#### Authentification AD - Habilitations

#### Authentification AD

- Base de comptes interne à GLPI : stockée dans la base de données
- Base de compte externe : authentification dynamique et centralisée
- LDAP
- LDAP Active Directory
- Messagerie : comptes pop/imap
- Certificats X509
- Base de compte externe : nécessite l’ajout d’un serveur d’authentification
- Import manuel possible des utilisateurs en amont
- Import automatique de l’utilisateur à la première connexion
- Champs utilisateur GLPI automatiquement alimentés depuis les attributs AD

#### Les utilisateurs — Base de comptes

#### Authentification AD - Habilitations

- Configuration =&gt; Authentification =&gt; Annuaires LDAP =&gt; +
- Choisir la préconfiguration ActiveDirectory
- Configuration automatique d’un filtre d’exclusion des utilisateurs désactivés
- Configuration obligatoire :
- Nom
- @ip du serveur AD
- Base DN : DistinguishedName du domaine au format :
- DC=mondomaine,DC=monTLD
- DN du compte : DistinguishedName du compte utilisé par GLPI auprès

#### du contrôleur de domaine pour l’interroger (au minimum, un compte

#### administrateur du domaine) au format :

- CN=administrateur,OU=administrateurs,OU,service_Active_Directory,OU=service_informatique,OU=

#### les_utilisateurs,OU=_monentreprise,DC=mondomaine,DC=monTLD

- Mot de passe du compte précédemment renseigné

#### Serveur d'authentification Active Directory

#### À cliquer pour avoir

#### les bons filtres

192.168.1.1

#### mondomaine.TLD

#### DC=mondomaine,DC=TLD

CN=compte_admin_du_domaine,OU=OU_ou_se_trouve_le_compte,DC=mondomaine,DC=TLD

#### Mot de passe de

#### l’admin du domaine

#### Info dans l’éditeur

#### d’attribut ADDS du

#### compte

#### Attention : Non par défaut

#### Attention : Non

#### actif par défaut

#### @IP du serveur

#### ADDS

#### Présentation de l'environnement — Installation de GLPI

- Vont déterminer les droits et leurs portées dont dispose un utilisateur
- Une habilitation est composée d’un profil (droits) et d’une entité
- Récursivité sur les entités enfants possible
- Plusieurs habilitations possibles pour un même utilisateur
- Se gèrent de manière statique ou dynamique à l’aide de règle

#### d’habilitation

#### Les habilitations

### Présentation de l'environnement — Installation de GLPI

- Ajout manuel depuis l’application GLPI
- Aucune centralisation de la gestion des droits
- Maintenance compliquée / risque d’erreurs accru
- S’ajoutent pour chaque utilisateur

#### Les habilitations statiques

#### Présentation de l'environnement — Installation de GLPI

- Attribution automatique d’habilitations
- Utilisation des « règles d’affectation d’habilitations à un utilisateur »
- Toutes les règles sont lues à chaque connexion d’un utilisateur
- L’ordre de création n’a pas d’importance
- Une règle pour une habilitation
- Les critères : globaux internes GLPI ou LDAP
- Les actions : un profil, une entité, récursivité, refus d’import, etc.

#### Les habilitations dynamiques

- Les critères :
- Gestion des droits GLPI centralisée dans l’Active Directory
- Utilisation d’appartenance à des groupes AD
- Critère « (LDAP) MemberOf »
- Utilisation de la condition « Contient », moins contraignante que « est »
- Les actions :
- Deux actions minimum pour constituer une habilitation
- Sont exécutées si le(s) critère(s) sont vérifiés
- Comportement en fonction de l’opérateur logique (ET/OU)

#### Les habilitations dynamiques - Critères - Actions

#### Présentation de l'environnement — Installation de GLPI

#### Les habilitations — Mise en œuvre

#### Identification des

#### différents droits des

utilisateurs.

#### Exemple :

#### un technicien sur

#### l’entité du client

#### pour le profil

#### technician

#### Création des

#### groupes AD pour les

habilitations.

#### Exemple :

#### groupe global

#### GG_GLPI_technician

#### Création des

utilisateurs AD,

#### assignation des

#### groupes en fonction

du besoin.

#### Exemple :

#### GG_technicien dans

#### GG_GLPI_technician

#### Création des règles

#### d’affectation

#### d’habilitations à un

utilisateur.

#### Exemple :

#### critère → membre de

#### GG_GLPI_technician

#### action →

#### profil technician

#### entité client

#### Vérification

#### Exemple :

#### vérifier le

#### profil et

#### l’entité des

#### techniciens

#### après import

#### dans GLPI

## Mise en pratique

- [Travaux pratiques du module](../../tp/glpi/module-02/index.md)
- [Fiche de révision du module](../../revision/glpi/module-02-authentification-ad-habilitations.md)

## Questions flash

1. Comment expliquer simplement « Authentification AD — Habilitations » à un collègue ?
2. Quelles étapes ou notions doivent être maîtrisées avant la manipulation ?
3. Quel contrôle permet de prouver que le résultat est correct ?
4. Quel est le premier risque ou piège à écarter ?

??? success "Éléments de réponse"
    - Comprendre entités, profils et récursivité.
    - Déclarer une source LDAP/Active Directory.
    - Importer ou synchroniser les utilisateurs.
    - Tester les habilitations avec plusieurs profils.

## Voir aussi

- [Présentation de la séquence](index.md)
