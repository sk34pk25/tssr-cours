# Module 05 — Les utilisateurs et les groupes

**Séquence :** Systèmes clients Microsoft  
**Importance :** socle de la progression officielle  
**Sources consolidées :** 2 support(s) de cours, 1 énoncé(s), 1 correction(s)

!!! warning "Périmètre et versions"
    Le support enseigne Windows 10. Windows 10 a atteint sa fin de support général le 14 octobre 2025 ; les manipulations restent utiles pour le laboratoire et les environnements hérités, mais un déploiement neuf doit viser une édition Windows encore prise en charge. Référence : [Cycle de vie Windows 10](https://learn.microsoft.com/en-us/lifecycle/products/windows-10-home-and-pro).

## Objectifs et compétences

- Comprendre compte, SID, profil et groupe local.
- Créer et administrer utilisateurs et groupes.
- Appliquer les droits par groupes plutôt qu’individuellement.
- Expliquer l’élévation de privilèges et l’UAC.

!!! tip "Façon simple de le comprendre"
    Ce module sert à passer de la notion « Les utilisateurs et les groupes » à une méthode que l’on peut expliquer, appliquer, vérifier et dépanner.

## Méthode de travail

1. Lire les concepts dans l’ordre du support.
2. Reproduire les exemples dans un environnement de laboratoire.
3. Noter le résultat attendu avant de modifier une configuration.
4. Vérifier avec l’outil ou la commande appropriée.
5. Revenir à l’état initial si le résultat diverge.

## Commandes repérées dans les supports

```text
net user
net user pdupond Pa$$w0rd /add
net localgroup Administrateurs pdupond /add
whoami /all
Get-LocalUser
New-LocalUser -Name "pdupond" -AccountNeverExpires
Add-LocalGroupMember -Group "Administrateurs" -Member "pdupond"
net user francois
net localgroup administrateurs
net user Romain * /add
net localgroup L_Responsables Romain /add
whoami /user
whoami /groups
Get-LocalUser | select Name,SID,Description
Get-LocalUser -Name james | Select FullName,description,ObjectClass,LastLogon
Set-LocalUser -Name adm -description "Compte générique administrateur de secours"
Get-LocalGroupMember -Name L_SupportInfo | Select Name,SID
```

!!! warning
    Une commande extraite d’un support n’est pas à exécuter aveuglément. Vérifier la version, les droits, la cible et l’existence d’une sauvegarde avant toute action destructive.

## Synthèse Module 5 - Gestion des Utilisateurs, Groupes et UAC V2

### Synthèse - Module 5 : Les Utilisateurs, les Groupes et le Contrôle de Comptes (UAC) (V2)

### 1. Concept d'Utilisateur et de Profil

Dans Windows 10, chaque collaborateur est identifié par un compte d'utilisateur associé à un identifiant de sécurité unique (SID - Security Identifier).

Utilisateur Local : Enregistré dans la base de données locale SAM (Security Account Manager) du poste.

Utilisateur de Domaine : Enregistré dans l'annuaire Active Directory pour un accès centralisé.

### 2. Gestion des Groupes et Autorisations

Les groupes permettent de simplifier l'attribution des droits et privilèges. Un utilisateur hérite des permissions accordées aux groupes auxquels il appartient.

### 3. Contrôle de Compte d'Utilisateur (UAC) et Administration

L'UAC (User Account Control) empêche les modifications système non autorisées en imposant une confirmation ou une saisie de mot de passe administrateur (élévation de privilèges symbolisée par le bouclier).

#### Commandes de Gestion CLI et PowerShell

:: Gestion des utilisateurs et groupes locaux (cmd.exe)

`net user`

`net user pdupond Pa$$w0rd /add`

`net localgroup Administrateurs pdupond /add`

`whoami /all`

:: Lancement des consoles de gestion MMC

lusrmgr.msc

compmgmt.msc

secpol.msc

#### Cmdlets PowerShell de gestion des utilisateurs locaux

`Get-LocalUser`

`New-LocalUser -Name "pdupond" -AccountNeverExpires`

`Add-LocalGroupMember -Group "Administrateurs" -Member "pdupond"`

Disable-LocalUser -Name "Guest"

| Type de Groupe | Exemples / Rôle |
| --- | --- |
| Administrateurs | Contrôle total sur l'ordinateur et le système. Compte administrateur désactivé par défaut. |
| Utilisateurs | Membres standards autorisés à exécuter des applications sans modifier le système. |
| Invités (Guests) | Accès très restreint, désactivé par défaut. |
| Entités intégrées | Tout le monde, Utilisateurs authentifiés (gérées automatiquement par l'OS). |

## Module 05 - Support de cours

### Systèmes clients Microsoft

#### Module 05 — Les utilisateurs et les groupes

- Prendre conscience de l'importance de la notion d'utilisateur
- Distinguer les utilisateurs et leurs profils
- Gérer les utilisateurs et les groupes
- Découvrir les outils de gestion
- Assimiler le fonctionnement de l'UAC

### Les objets utilisateurs et groupes

- Notion d'utilisateurs
- Les profils d'utilisateurs
- Les groupes
- Le contrôle de compte utilisateurs

#### La notion d’utilisateur

- Le système d'exploitation client Windows est une porte ouverte sur le

#### système d'information de l'entreprise

- Êtes-vous une personne de confiance ?
- Identifiant ?
- Mot de passe ?
- Accès en lecture ? En modification ? À quelques fichiers ? À l'ensemble du réseau ?
- Simple utilisateur ? Technicien informatique ? Administrateur de l'entreprise ?

### La notion d’utilisateur

- 1 collaborateur de l'entreprise = 1 utilisateur du système d'information
- Accès au SI validé par :
- Le couple Identifiant + Mot de passe
- Biométrie (Windows Hello)
- Objet tiers (carte à puce, badge…)
- 2de authentification possible dans certains contextes spécifiques (SMS, lien de validation,

#### etc.)

#### Gestion des utilisateurs

#### Utilisateur local

- Propre à chaque ordinateur
- Stocké dans la base de données locale SAM (Base Security Account Manager)
- L'utilisateur ne peut exploiter que les ressources de l'ordinateur source

### Gestion des utilisateurs

#### Utilisateur du domaine

- Stocké dans une base de données commune (annuaire Active Directory)
- Sur un serveur de l'entreprise (contrôleur de domaine)
- Externalisé chez un prestataire (Microsoft Azure ou autre)
- Authentification Kerberos sécurisée par le réseau
- Un utilisateur peut ouvrir une session sur tous les ordinateurs du domaine
- Un utilisateur (local, de domaine) est identifié par le système grâce à son SID (Security

#### IDentifier)

#### Gestion des utilisateurs

#### Ouverture de session

- Pour les utilisateurs locaux
- Utiliser un compte présent dans la base SAM
- Sont affichés par défaut sur l'écran d'accueil
- Pour les utilisateurs du domaine
- Jonction du poste au domaine de l'entreprise indispensable au

#### préalable

- Domaine sélectionné par défaut

#### Possibilité de s'authentifier grâce à l'annuaire d'un autre domaine

### Les catégories d’utilisateurs

- Standard
- Pour utiliser les ressources de l'ordinateur
- Être membre du groupe Utilisateurs
- Administrateur
- Pour utiliser et modifier les ressources de l'ordinateur
- Être membre du groupe Administrateurs
- L'utilisateur créé à l'installation du système est membre du groupe Administrateurs
- Le compte administrateur est désactivé par défaut
- Le compte Invité
- Pour une utilisation restreinte des ressources de l'ordinateur
- Pas besoin de mot de passe pour accéder aux ressources
- Ce compte est désactivé par défaut

#### La gestion des profils

#### Un utilisateur ouvre une session pour la première

#### fois, un profil personnel est créé

- Dans le dossier C:\Users
- Propre à chaque utilisateur
- Contient tous les paramètres et données de l'utilisateur
- Documents
- Téléchargement
- Bureau
- Images…

### La gestion des profils

Un utilisateur ouvre une session pour la première fois,

#### un profil personnel est créé

- Dans le dossier C:\Users
- Propre à chaque utilisateur
- Contient tous les paramètres et données de l'utilisateur
- Documents
- Téléchargement
- Bureau
- Images…
- Profil public : commun à tous les utilisateurs
- Profil par défaut (caché) : modèle pour la création d'un

#### nouveau profil

#### La gestion des profils

#### Comment gérer les profils ?

- La gestion manuelle des profils dans le dossier

#### c:\Users est à proscrire !

- sysdm.cpl onglet Paramètres systèmes avancés
- Supprimer des profils
- Modifier le type du profil
- Gestion du profil par défaut

### Gestion des groupes

- Tout utilisateur doit appartenir à au moins un groupe
- Un groupe est identifié par le système grâce à son SID (Security IDentifier)
- Le SID du groupe s'ajoute au jeton d'accès de l'utilisateur
- Groupes locaux
- Pour configurer les autorisations d'accès aux ressources
- Pour configurer les privilèges d'administration
- Groupes prédéfinis
- Présent nativement
- Pour configurer les privilèges et la délégation d’administration (Administrateurs, Opérateurs de sauvegarde…)
- Entités intégrées de sécurité
- Non visibles dans les consoles
- Affectation automatique
- Utilisés par le système pour la gestion des permissions (Tout le monde, Utilisateurs authentifiés…)

#### Gestion des utilisateurs et des groupes

#### Configuration

- Graphiquement grâce aux consoles MMC
- lusrmgr.msc (gestion des utilisateurs et groupes locaux)
- compmgmt.msc (gestion de l'ordinateur)
- Menu Comptes d'utilisateurs dans le panneau de

#### configuration (orienté utilisateur)

- En ligne de commande
- net user (net help user pour l'aide détaillée)
- net localgroup (net help localgroup)

### Gestion des utilisateurs et des groupes

- Configuration en PowerShell
- Manipulation des groupes et de leurs membres avec les cmdlets
- {Get | Set | New | Remove}-LocalGroup et {Get | Set | Remove}-LocalGroupMember

#### Description verbe -nom

#### Affiche la liste des utilisateurs locaux Get

#### -LocalUser

#### Créer un nouvel utilisateur dans la base SAM New

#### Modifier un utilisateur local existant Set

#### Renommer un utilisateur Rename

Activer l'utilisateur, il pourra de ce fait utiliser les ressources de l'ordinateur Enable

#### Désactiver un utilisateur Disable

#### Supprimer un utilisateur de la base SAM Remove

#### Démonstration

### Contrôle de comptes d’utilisateur (UAC)

Sans action particulière, le système loge tous les utilisateurs à la même enseigne

#### … même les administrateurs !

- Par l'intermédiaire de l'UAC, le système n'accorde les privilèges que lorsque c'est nécessaire
- Élévation de pouvoir symbolisée par le « bouclier »
- Validation requise pour un administrateur
- Authentification requise pour un utilisateur

#### Contrôle de comptes d’utilisateur (UAC)

- Pourquoi ces contrôles ?
- Lutter contre les actions des programmes malveillants
- Avertir face à un paramètre sensible du système
- Comment le configurer ?
- Via le panneau de configuration
- À l'aide de la stratégie de sécurité locale
- secpol.msc
- Stratégies locales &gt; Options de sécurité
- Valeurs Contrôle de compte d'utilisateur

#### Pour certaines actions, il est nécessaire de demander l’élévation

- Graphiquement avec la fonction Exécuter en tant qu’administrateur

#### Récapitulatif

#### Un utilisateur est associé à :

- Un nom d’ouverture de session et un mot de passe
- Un profil local
- Généré à la première ouverture de session
- Contient les données personnelles et les paramètres de l'utilisateur
- Un identifiant unique (SID)
- Des appartenances de groupe définies dans l’onglet

#### Membre de

- L'ensemble des SID constituent le jeton d'accès, ouvrant

#### des accès et accordant des privilèges

- Les informations du jeton d'accès sont consultables avec la

#### commande whoami

### Démonstration

#### TP

### Conclusion

- Un collaborateur = un utilisateur
- A chacun son métier
- A chacun ses données
- Le système est protégé
- L’identification est la clé de la sécurité

## Mise en pratique

- [Travaux pratiques du module](../../tp/systemes-clients/module-05/index.md)
- [Fiche de révision du module](../../revision/systemes-clients/module-05-les-utilisateurs-et-les-groupes.md)

## Questions flash

1. Comment expliquer simplement « Les utilisateurs et les groupes » à un collègue ?
2. Quelles étapes ou notions doivent être maîtrisées avant la manipulation ?
3. Quel contrôle permet de prouver que le résultat est correct ?
4. Quel est le premier risque ou piège à écarter ?

??? success "Éléments de réponse"
    - Comprendre compte, SID, profil et groupe local.
    - Créer et administrer utilisateurs et groupes.
    - Appliquer les droits par groupes plutôt qu’individuellement.
    - Expliquer l’élévation de privilèges et l’UAC.

## Voir aussi

- [Présentation de la séquence](index.md)
