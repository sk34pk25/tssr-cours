# Module 02 — Authentification AD et habilitations

Les parties ci-dessous reprennent le cours original, dans le même ordre. Les encadrés et les schémas répètent ses formulations.

## Parcours de lecture

1. Support · Module 02 - Support de cours · 9 pages transcrites
2. Énoncé · M2 - Enoncé du TP - Liaison LDAP et ajout dutilisateurs · 6 pages transcrites
3. Correction · M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs · 9 pages transcrites

**Visuel externe**

```mermaid
flowchart TD
    N1["Support · Module 02 - Support de cours · 9 pages transcrites"]
    N2["Énoncé · M2 - Enoncé du TP - Liaison LDAP et ajout dutilisateurs · 6 pages transcrites"]
    N3["Correction · M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs · 9 pages transc…"]
    N1 --> N2
    N2 --> N3
```

SOURCE DRIVE · TRANSCRIPTION DU SUPPORT

Le contenu des documents du dossier TSSR est transcrit ci-dessous, page par page. Les textes et tableaux sont intégrés à la page Web. Aucun fichier PDF, aucune diapositive entière ni aucune reproduction de page n’est affiché. Seuls des croquis ou visuels isolés et vérifiés peuvent accompagner la transcription. Les versions et les consignes restent celles des supports de formation. Les compléments IA sont conservés dans leur onglet distinct.

## Support · Module 02 - Support de cours · 9 pages transcrites

#### Administration GLPI

#### Module 02 – Authentification AD - Habilitations

#### Objectifs

!!! note "À retenir"
    Les entités dans GLPI et la visibilité des items par récursivité Les interfaces de GLPI et les profils des utilisateurs Les intitulés et les lieux : la nomenclature de GLPI Création d’un compte local à GLPI Ajout d’une source externe d’identification (Active Directory) Gérer les habilitations des utilisateurs

**Visuel externe**

```mermaid
flowchart LR
    N1["Les entités dans GLPI et la visibilité des items par récursivité"]
    N2["Les interfaces de GLPI et les profils des utilisateurs"]
    N3["Les intitulés et les lieux : la nomenclature de GLPI"]
    N4["Création d’un compte local à GLPI"]
    N5["Ajout d’une source externe d’identification (Active Directory)"]
    N6["Gérer les habilitations des utilisateurs"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
    N5 --> N6
```

- Les entités dans GLPI et la visibilité des items par récursivité
- Les interfaces de GLPI et les profils des utilisateurs

- Les intitulés et les lieux : la nomenclature de GLPI
- Création d’un compte local à GLPI
- Ajout d’une source externe d’identification (Active Directory)
- Gérer les habilitations des utilisateurs

#### Les entités GLPI

!!! note "À retenir"
    Notion clé dans GLPI Permet de segmenter les domaines d’administration de l’application Intéressant pour une entreprise dont la gestion est hiérarchique Cloisonnement étanche entre les entités, sauf en cas de récursivité Cas d’une société gérant plusieurs clients avec filiales : une entité par client

**Visuel externe**

```mermaid
flowchart LR
    N1["Notion clé dans GLPI"]
    N2["Permet de segmenter les domaines d’administration de l’application"]
    N3["Intéressant pour une entreprise dont la gestion est hiérarchique"]
    N4["Cloisonnement étanche entre les entités, sauf en cas de récursivité"]
    N5["Cas d’une société gérant plusieurs clients avec filiales : une entité par client"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
```

- Notion clé dans GLPI
- Permet de segmenter les domaines d’administration de l’application
- Intéressant pour une entreprise dont la gestion est hiérarchique
- Cloisonnement étanche entre les entités, sauf en cas de récursivité

- Cas d’une société gérant plusieurs clients avec filiales : une entité par client

#### Filiale A

#### Client1

#### Filiale B

#### Société

#### Client2 Filiale A

#### La récursivité

**Visuel externe**

```mermaid
flowchart LR
    N1["Consiste à rendre visible un objet dans les sous-entités"]
    N2["Permet de traiter la problématique des objets globaux et locaux"]
    N3["Exemple d’utilisation : un objet de type fournisseur"]
    N1 --> N2
    N2 --> N3
```

- Consiste à rendre visible un objet dans les sous-entités
- Permet de traiter la problématique des objets globaux et locaux

- Exemple d’utilisation : un objet de type fournisseur
- Un fournisseur global à toutes les entités sera déclaré dans l’entité la plus haute avec l’option de récursivité
- Un fournisseur local ne sera déclaré que dans l’entité à laquelle il se rattache, sans option de récursivité

![Visuel isolé — Module 02 - Support de cours](../../assets/course-sources/isolated/1b131977058f7c60/g07-d11-p02-i1.webp)

Visuel isolé — Module 02 - Support de cours

![Visuel isolé — Module 02 - Support de cours](../../assets/course-sources/isolated/1b131977058f7c60/g07-d11-p02-i2.webp)

Visuel isolé — Module 02 - Support de cours

#### Les interfaces

**Visuel externe**

```mermaid
flowchart LR
    N1["Interface simplifiée"]
    N2["Interface la plus restrictive"]
    N3["Destinée aux utilisateurs finaux"]
    N4["Interface standard"]
    N5["Interface principale d’un technicien de GLPI"]
    N6["Tous les modules y sont disponibles en fonction du profil"]
    N7["Utilisée pour les tâches de techniciens, d’administration et de configuration"]
    N8["3 vues de travail : personnelle, groupe et globale"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
    N5 --> N6
    N6 --> N7
    N7 --> N8
```

- Interface simplifiée
- Interface la plus restrictive
- Destinée aux utilisateurs finaux
- Permet de créer un ticket, suivre ses tickets, accéder aux réservations et à la FAQ
- Interface standard
- Interface principale d’un technicien de GLPI
- Tous les modules y sont disponibles en fonction du profil
- Utilisée pour les tâches de techniciens, d’administration et de configuration
- 3 vues de travail : personnelle, groupe et globale

#### Les profils GLPI

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
- Self-Service : profil par défaut, interface simplifiée, permet de créer un ticket, suivre ses tickets, accéder aux réservations et à la FAQ

Attention, si le profil super-admin est supprimé ou s’il est configuré avec l’interface simplifiée, vous ne pourrez plus configurer GLPI.

#### La création de profils dans GLPI

- On peut donner des droits sur différentes fonctionnalités :
- Parc – gestion de l’inventaire
- Assistance – gestion des tickets
- Cycles de vie – gestion du suivi des tickets
- Gestion – gestion des licences, fournisseurs, budgets…
- Outils – gestion des rapports, de la base de connaissance, des projets, des tâches…
- Administration – gestion des différentes règles d’automatisation, des entités, des groupes…
- Configuration – gestion de la configuration globale de GLPI, les lieux, les intitulés, les calendriers...

- Il existe différents droits :
- Lecture
- Mettre à jour
- Créer
- Supprimer
- Purger
- …

#### Les intitulés

- Deux formats :
- Liste de valeurs à plat
- Liste de valeurs arborescente : hiérarchie entre les intitulés
- Il existe une liste par défaut, mais beaucoup de listes propres à GLPI sont paramétrables :

- Les lieux
- Les statuts de matériels
- Les fournisseurs
- Les constructeurs
- Les catégories de tickets
- Les noms de logiciels
- Les prises réseau
- Les calendriers
- …

![Visuel isolé — Module 02 - Support de cours](../../assets/course-sources/isolated/1b131977058f7c60/g07-d11-p04-i1.webp)

Visuel isolé — Module 02 - Support de cours

![Visuel isolé — Module 02 - Support de cours](../../assets/course-sources/isolated/1b131977058f7c60/g07-d11-p04-i2.webp)

Visuel isolé — Module 02 - Support de cours

#### Les lieux

!!! note "À retenir"
    Ils permettent de placer géographiquement les différents éléments d’inventaire et les utilisateurs Liste de valeurs arborescente Une convention de nommage est OBLIGATOIRE

!!! warning "Attention"
    Ils permettent de placer géographiquement les différents éléments d’inventaire et les utilisateurs Liste de valeurs arborescente Une convention de nommage est OBLIGATOIRE

- Ils permettent de placer géographiquement les différents éléments d’inventaire et les utilisateurs
- Liste de valeurs arborescente
- Une convention de nommage est OBLIGATOIRE

#### Authentification AD

!!! note "À retenir"
    Attention, ne pas confondre les lieux et les entités.

!!! warning "Attention"
    Attention, ne pas confondre les lieux et les entités.

Attention, ne pas confondre les lieux et les entités.

Les noms de sites du centre de formation présents dans les captures ne sont pas reproduits ; leur fonction est d’illustrer une arborescence géographique.

#### Les utilisateurs – Base de comptes

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

#### Serveur d'authentification Active Directory

- Configuration => Authentification => Annuaires LDAP => +

- Choisir la préconfiguration ActiveDirectory

- Configuration automatique d’un filtre d’exclusion des utilisateurs désactivés

- Configuration obligatoire :

- Nom
- @ip du serveur AD
- Base DN : DistinguishedName du domaine au format :

- DC=mondomaine,DC=monTLD
- DN du compte : DistinguishedName du compte utilisé par GLPI auprès du contrôleur de domaine pour l’interroger (au minimum, un compte administrateur du domaine) au format :

- CN=administrateur,OU=administrateurs,OU,service_Active_Directory,OU=service_informatique,OU= les_utilisateurs,OU=_monentreprise,DC=mondomaine,DC=monTLD
- Mot de passe du compte précédemment renseigné

#### Authentification AD - Habilitations Serveur d'authentification Active Directory

#### Attention : Non

#### actif par défaut @IP du serveur

#### À cliquer pour avoir

#### ADDS

#### Attention : Non par défaut

#### les bons filtres

#### Info dans l’éditeur d’attribut ADDS du

#### compte

#### mondomaine.TLD

#### 192.168.1.1

#### Mot de passe de l’admin du domaine

#### DC=mondomaine,DC=TLD

#### CN=compte_admin_du_domaine,OU=OU_ou_se_trouve_le_compte,DC=mondomaine,DC=TLD

#### Les habilitations

- Vont déterminer les droits et leurs portées dont dispose un utilisateur
- Une habilitation est composée d’un profil (droits) et d’une entité

- Récursivité sur les entités enfants possible
- Plusieurs habilitations possibles pour un même utilisateur
- Se gèrent de manière statique ou dynamique à l’aide de règle d’habilitation

![Visuel isolé — Module 02 - Support de cours](../../assets/course-sources/isolated/1b131977058f7c60/g07-d11-p07-i1.webp)

Visuel isolé — Module 02 - Support de cours

#### Les habilitations statiques

!!! note "À retenir"
    Ajout manuel depuis l’application GLPI Aucune centralisation de la gestion des droits Maintenance compliquée / risque d’erreurs accru S’ajoutent pour chaque utilisateur

- Ajout manuel depuis l’application GLPI
- Aucune centralisation de la gestion des droits
- Maintenance compliquée / risque d’erreurs accru
- S’ajoutent pour chaque utilisateur

#### Les habilitations dynamiques

- Attribution automatique d’habilitations
- Utilisation des « règles d’affectation d’habilitations à un utilisateur »

- Toutes les règles sont lues à chaque connexion d’un utilisateur
- L’ordre de création n’a pas d’importance
- Une règle pour une habilitation
- Les critères : globaux internes GLPI ou LDAP
- Les actions : un profil, une entité, récursivité, refus d’import, etc.

![Visuel isolé — Module 02 - Support de cours](../../assets/course-sources/isolated/1b131977058f7c60/g07-d11-p08-i1.webp)

Visuel isolé — Module 02 - Support de cours

#### Les habilitations dynamiques - Critères - Actions

- Les critères :
- Gestion des droits GLPI centralisée dans l’Active Directory
- Utilisation d’appartenance à des groupes AD
- Critère « (LDAP) MemberOf »
- Utilisation de la condition « Contient », moins contraignante que « est »
- Les actions :
- Deux actions minimum pour constituer une habilitation
- Sont exécutées si le(s) critère(s) sont vérifiés
- Comportement en fonction de l’opérateur logique (ET/OU)

#### Les habilitations – Mise en œuvre

#### 4 Création des règles

#### 5 Vérification

#### Identification des différents droits des

#### d’affectation d’habilitations à un

#### Création des groupes AD pour les

utilisateurs.

utilisateur.

#### Exemple : vérifier le

habilitations.

#### Création des utilisateurs AD, assignation des groupes en fonction

du besoin.

#### Exemple : un technicien sur

#### Exemple : critère membre de

#### l’entité du client

#### GG_GLPI_technician

#### profil et l’entité des techniciens après import

#### Exemple : groupe global GG_GLPI_technician

#### pour le profil

#### dans GLPI

#### technician

#### Exemple : GG_technicien dans GG_GLPI_technician

#### action profil technician

#### entité client

!!! note "À retenir"
    Référence du document : 1cksNrO_IqX1i2ytZUujL-VyNtaXAM75Q · SHA-256 1b131977058f7c60…

Référence du document : 1cksNrO_IqX1i2ytZUujL-VyNtaXAM75Q · SHA-256 1b131977058f7c60…

## Énoncé · M2 - Enoncé du TP - Liaison LDAP et ajout dutilisateurs · 6 pages transcrites

#### Liaison LDAP et ajout d'utilisateurs

#### TP du Module 2 – Authentification AD – Habilitations

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos des modules 1 à 2 et d’avoir réalisé les TP proposés.

#### Énoncé

#### Objectifs

- Utiliser l’ADDS avec GLPI et utiliser le moteur de règle d’habilitations. Prérequis

- AD et GLPI fonctionnels. Principales tâches à réaliser

#### Structure AD et utilisateurs

- Créez les utilisateurs en fonction de l’annexe 1 (cf. fin du document).

Adoptez une convention de nommage adaptée.

- Créez les groupes globaux suivant le tableau en annexe 1.

- Créez les groupes globaux GLPI.

- Créez des modèles d’utilisateurs, dans les groupes puis les utilisateurs.

- Créez ces OU dans l’Active Directory d’Olympus en organisant convenablement sa structure en fonction de l’annexe 2.

#### Configuration de GLPI

- Création d’un compte local d’administration.

- Créez un utilisateur à votre nom disposant des droits maximums sur GLPI (profil

le plus haut). C’est depuis ce compte que seront effectuées toutes les manipulations qui suivront.

- Création des lieux en fonction de l’annexe 3.

- Ajout de l’annuaire LDAP

- Ajoutez le contrôleur de domaine d’Olympus comme source d’authentification LDAP.

- Vous utiliserez le compte « Administrateur » pour l’authentification auprès de

l’AD.

#### Règles d’habilitation

- Faites en sorte que quand un utilisateur du domaine se connecte sur GLPI, il lui soit automatiquement attribué le/les profils GLPI sur les bonnes entités du groupe (les bonnes habilitations).

Vous passerez par l’appartenance à des groupes AD pour l’attribution des habilitations.

Par ex. : si le groupe GG d’un utilisateur appartient au groupe GG_GLPI-Supervisor, alors il aura le profil Supervisor dans GLPI.

- Importez tous les utilisateurs et les mettre dans le bon lieu.

- Importez tous les groupes.

- Désactivez les utilisateurs : normal, post-only et tech.

#### Annexe 1

| SERVICE / FONCTION | Prénom / Nom | LOGIN | PROFIL GLPI | Groupe GG_ADDS | Lieu |
| --- | --- | --- | --- | --- | --- |
| Direction | Mr Ze US | Zeus | Observer | GG_dir ; GG_GLPI_observer | Temple de Zeus |
| Secrétaires de direction | Mr Heph AISTOS | Hephaistos | Sefl-service | GG_secretaires_dir | Temple de Zeus |
| Secrétaires de compta | Mme Arte MIS | artemis | Sefl-service | GG_secretaires | Temple d’Héra |
| Experts-comptables | Mme Her A | Hera | Observer | GG_experts-compta ; GG_compta ; GG_GLPI_observer | Temple d’Héra |
| comptables | Mr Her MES | Hermes | Self-service | GG_compta | Temple d’Héra |
| Stagiaires comptables | Mr Apo LLON | Apollon | Self-service | GG_stag_compta | Temple d’Héra |
| Directrice commerciale | Mme Aphro DITE | Aphrodite | Self-service | GG_dir_comm ; GG_comm | Hôtellerie |
| Commercial | Mr Ar ES | Ares | Self-service | GG_comm | Hôtellerie |
| Administrateurs informatiques | Mme Athé NA | Athena | Super-Admin | GG_admin ; GG_GLPI_Super-Admin | Salle des trésors |
| Admin AD informatique | Mme ou Mr vous | Vous | Super-Admin | GG_admin ; GG_admin_ad ; GG_GLPI_Super-Admin | Salle des trésors |
| Techniciens informatiques | Mr Po SEIDON | Poseidon | Technician | GG_techniciens ; GG_GLPI_Technician | Salle des trésors |
| Stagiaires informatiques | Mr Dio NYSOS | Dionysos | hotliner | GG_stagiaires_info ; GG_GLPI_hotliner | Salle des trésors |

#### Annexe 2

```
_Olympus
├── Les_utilisateurs
│   ├── Direction
│   ├── Service_compta / comptables
│   ├── Service_commercial / commerciaux
│   ├── secretaires
│   └── Service_info
│       ├── Administrateurs
│       ├── Administrateurs AD
│       ├── Techniciens
│       └── stagiaires
├── Les_materiels
│   ├── Les_ordis
│   │   ├── Direction
│   │   ├── Service_compta / comptables
│   │   ├── Service_commercial / commerciaux
│   │   ├── secretaires
│   │   └── Service_info
│   │       ├── Administrateurs AD
│   │       ├── Administrateurs
│   │       ├── Techniciens
│   │       └── stagiaires
│   └── Les_imprimantes
└── Les_groupes
    ├── Groupes_GLPI
    ├── Groupes_GG
    └── Groupes_DL
```

![Visuel isolé — M2 - Enoncé du TP - Liaison LDAP et ajout dutilisateurs](../../assets/course-sources/isolated/e2105de696bc150a/g07-ldap-ou-enonce.webp)

Visuel isolé — M2 - Enoncé du TP - Liaison LDAP et ajout dutilisateurs

#### Annexe 3

![Visuel isolé — M2 - Enoncé du TP - Liaison LDAP et ajout dutilisateurs](../../assets/course-sources/isolated/e2105de696bc150a/g07-d02-p05-i1.webp)

Visuel isolé — M2 - Enoncé du TP - Liaison LDAP et ajout dutilisateurs

![Visuel isolé — M2 - Enoncé du TP - Liaison LDAP et ajout dutilisateurs](../../assets/course-sources/isolated/e2105de696bc150a/g07-d02-p05-i2.webp)

Visuel isolé — M2 - Enoncé du TP - Liaison LDAP et ajout dutilisateurs

#### Solution

Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les ressources à télécharger, accompagnée de captures d’écran pour vous guider.

Référence du document : 16RxZGU-ytyKgIgpN68GnA4D10FkfTHBv · SHA-256 e2105de696bc150a…

## Correction · M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs · 9 pages transcrites

Correction originale : à consulter après avoir tenté l’exercice.

#### Liaison LDAP et ajout d'utilisateurs

#### TP du Module 2 – Authentification AD – Habilitations

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos des modules 1 à 2 et d’avoir réalisé les TP proposés.

#### Solution

#### Objectifs

- Utiliser l’ADDS avec GLPI et utiliser le moteur de règle d’habilitations. Prérequis

- AD et GLPI fonctionnels.

#### Principales tâches à réaliser

#### Structure AD et utilisateurs

- Créez les utilisateurs en fonction de l’annexe 1 (cf. fin du document).

- Créez les groupes globaux suivant le tableau en annexe 1.

- Les groupes globaux dans l’AD

![Visuel isolé — M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs](../../assets/course-sources/isolated/f9f302f3087b7b30/g07-d07-p01-i1.webp)

Visuel isolé — M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs

- Créez les groupes globaux GLPI.
  - Les groupes GLPI dans l’AD
    ![Les groupes GLPI dans l’AD](../../assets/course-sources/isolated/f9f302f3087b7b30/g07-d07-p02-i1.webp)
    Les groupes GLPI dans l’AD
  - Membres du groupe GG_GLPI_Observer
    ![Membres du groupe GG_GLPI_Observer](../../assets/course-sources/isolated/f9f302f3087b7b30/g07-d07-p02-i2.webp)
    Membres du groupe GG_GLPI_Observer
  - Membres du groupe GG_GLPI_Super_Admin
    ![Membres du groupe GG_GLPI_Super_Admin](../../assets/course-sources/isolated/f9f302f3087b7b30/g07-d07-p02-i3.webp)
    Membres du groupe GG_GLPI_Super_Admin
  - Membres du groupe GG_GLPI_Technician
    ![Membres du groupe GG_GLPI_Technician](../../assets/course-sources/isolated/f9f302f3087b7b30/g07-d07-p02-i4.webp)
    Membres du groupe GG_GLPI_Technician

- Membres du groupe GG_GLPI_Hotliner
  ![Membres du groupe GG_GLPI_Hotliner](../../assets/course-sources/isolated/f9f302f3087b7b30/g07-d07-p03-i1.webp)
  Membres du groupe GG_GLPI_Hotliner

- Créez des modèles d’utilisateurs, dans les groupes puis les utilisateurs.

- Créez ces OU dans l’Active Directory d’Olympus en organisant convenablement sa structure en fonction de l’annexe 2.

#### Configuration de GLPI

- Création d’un compte local d’administration.

- Créez un utilisateur à votre nom disposant des droits maximums sur GLPI (profil le plus haut). C’est depuis ce compte que seront effectuées toutes les manipulations qui suivront.

- Création des lieux en fonction de l’annexe 3.

- Ajout de l’annuaire LDAP

- Ajoutez le contrôleur de domaine d’Olympus comme source d’authentification LDAP.

- Vous utiliserez le compte « Administrateur » pour l’authentification auprès de l’AD.

- Obtenir le DN de l’administrateur
  ![Obtenir le DN de l’administrateur](../../assets/course-sources/isolated/f9f302f3087b7b30/g07-d07-p03-i2.webp)
  Obtenir le DN de l’administrateur

- Paramétrage de la liaison AD dans GLPI

#### Règles d’habilitation

- Faites en sorte que quand un utilisateur du domaine se connecte sur GLPI, il lui soit automatiquement attribué le/les profils GLPI sur les bonnes entités du groupe (les bonnes habilitations).

- Règle d’importation observer

- Règle d’importation Super_Admin

![Visuel isolé — M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs](../../assets/course-sources/isolated/f9f302f3087b7b30/g07-d07-p04-i1.webp)

Visuel isolé — M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs

![Visuel isolé — M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs](../../assets/course-sources/isolated/f9f302f3087b7b30/g07-d07-p04-i2.webp)

Visuel isolé — M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs

![Visuel isolé — M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs](../../assets/course-sources/isolated/f9f302f3087b7b30/g07-d07-p04-i3.webp)

Visuel isolé — M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs

![Visuel isolé — M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs](../../assets/course-sources/isolated/f9f302f3087b7b30/g07-d07-p04-i4.webp)

Visuel isolé — M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs

- Règle d’importation technicien

- Règle d’importation hotliner

![Visuel isolé — M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs](../../assets/course-sources/isolated/f9f302f3087b7b30/g07-d07-p05-i1.webp)

Visuel isolé — M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs

![Visuel isolé — M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs](../../assets/course-sources/isolated/f9f302f3087b7b30/g07-d07-p05-i2.webp)

Visuel isolé — M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs

![Visuel isolé — M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs](../../assets/course-sources/isolated/f9f302f3087b7b30/g07-d07-p05-i3.webp)

Visuel isolé — M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs

![Visuel isolé — M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs](../../assets/course-sources/isolated/f9f302f3087b7b30/g07-d07-p05-i4.webp)

Visuel isolé — M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs

![Visuel isolé — M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs](../../assets/course-sources/isolated/f9f302f3087b7b30/g07-d07-p05-i5.webp)

Visuel isolé — M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs

- Importez tous les utilisateurs et les mettre dans le bon lieu.

- Importez tous les groupes.

- Désactivez les utilisateurs : normal, post-only et tech.

![Visuel isolé — M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs](../../assets/course-sources/isolated/f9f302f3087b7b30/g07-d07-p06-i1.webp)

Visuel isolé — M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs

![Visuel isolé — M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs](../../assets/course-sources/isolated/f9f302f3087b7b30/g07-d07-p06-i2.webp)

Visuel isolé — M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs

La désactivation s’effectue à partir de chaque compte utilisateurs.

#### Annexe 1

| SERVICE / FONCTION | Prénom / Nom | LOGIN | PROFIL GLPI | Groupe GG_ADDS | Lieu |
| --- | --- | --- | --- | --- | --- |
| Direction | Mr Ze US | Zeus | Observer | GG_dir ; GG_GLPI_observer | Temple de Zeus |
| Secrétaires de direction | Mr Heph AISTOS | Hephaistos | Sefl-service | GG_secretaires_dir | Temple de Zeus |
| Secrétaires de compta | Mme Arte MIS | artemis | Sefl-service | GG_secretaires | Temple d’Héra |
| Experts-comptables | Mme Her A | Hera | Observer | GG_experts-compta ; GG_compta ; GG_GLPI_observer | Temple d’Héra |
| comptables | Mr Her MES | Hermes | Self-service | GG_compta | Temple d’Héra |
| Stagiaires comptables | Mr Apo LLON | Apollon | Self-service | GG_stag_compta | Temple d’Héra |
| Directrice commerciale | Mme Aphro DITE | Aphrodite | Self-service | GG_dir_comm ; GG_comm | Hôtellerie |
| Commercial | Mr Ar ES | Ares | Self-service | GG_comm | Hôtellerie |
| Administrateurs informatiques | Mme Athé NA | Athena | Super-Admin | GG_admin ; GG_GLPI_Super-Admin | Salle des trésors |
| Admin AD informatique | Mme ou Mr vous | Vous | Super-Admin | GG_admin ; GG_admin_ad ; GG_GLPI_Super-Admin | Salle des trésors |
| Techniciens informatiques | Mr Po SEIDON | Poseidon | Technician | GG_techniciens ; GG_GLPI_Technician | Salle des trésors |
| Stagiaires informatiques | Mr Dio NYSOS | Dionysos | hotliner | GG_stagiaires_info ; GG_GLPI_hotliner | Salle des trésors |

#### Annexe 2

```
_Olympus
├── Les_utilisateurs
│   ├── Direction
│   ├── Service_compta / comptables
│   ├── Service_commercial / commerciaux
│   ├── secretaires
│   └── Service_info
│       ├── Administrateurs
│       ├── Administrateurs AD
│       ├── Techniciens
│       └── stagiaires
├── Les_materiels
│   ├── Les_ordis
│   │   ├── Direction
│   │   ├── Service_compta / comptables
│   │   ├── Service_commercial / commerciaux
│   │   ├── secretaires
│   │   └── Service_info
│   │       ├── Administrateurs AD
│   │       ├── Administrateurs
│   │       ├── Techniciens
│   │       └── stagiaires
│   └── Les_imprimantes
└── Les_groupes
    ├── Groupes_GLPI
    ├── Groupes_GG
    └── Groupes_DL
```

![Visuel isolé — M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs](../../assets/course-sources/isolated/f9f302f3087b7b30/g07-ldap-ou-solution.webp)

Visuel isolé — M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs

#### Annexe 3

![Visuel isolé — M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs](../../assets/course-sources/isolated/f9f302f3087b7b30/g07-d07-p09-i1.webp)

Visuel isolé — M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs

![Visuel isolé — M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs](../../assets/course-sources/isolated/f9f302f3087b7b30/g07-d07-p09-i2.webp)

Visuel isolé — M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs

Référence du document : 1Gx4uxzUmeWv1LdGU0cHmHK2OUsLHCWZN · SHA-256 f9f302f3087b7b30…

## Fiche de synthèse

Les lignes reprennent les titres du cours et la première phrase de chaque partie.

| Partie | Repère du cours |
| --- | --- |
| Correction · M2 - Solution du TP - Liaison LDAP et ajout dutilisateurs · 9 pages transcrites | Correction originale : à consulter après avoir tenté l’exercice. |
