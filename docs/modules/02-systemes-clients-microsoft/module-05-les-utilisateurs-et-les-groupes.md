# Module 05 — Les utilisateurs et les groupes

[Travaux pratiques](../../tp/systemes-clients/module-05/index.md)

Les parties ci-dessous reprennent le cours original, dans le même ordre. Les encadrés et les schémas répètent ses formulations.

## Parcours de lecture

1. Support · Module 05 - Support de cours · 12 pages transcrites
2. Systèmes clients Microsoft
3. Objectifs
4. Les objets utilisateurs et groupes
5. La notion d’utilisateur
6. La notion d’utilisateur
7. Gestion des utilisateurs
8. Gestion des utilisateurs
9. Gestion des utilisateurs
10. Les catégories d’utilisateurs
11. La gestion des profils
12. La gestion des profils
13. La gestion des profils
14. Gestion des groupes
15. Gestion des utilisateurs et des groupes
16. Gestion des utilisateurs et des groupes
17. Démonstration
18. Contrôle de comptes d’utilisateur (UAC)
19. Contrôle de comptes d’utilisateur (UAC)
20. Contrôle de comptes d’utilisateur (UAC)
21. Récapitulatif
22. Démonstration
23. TP
24. Conclusion
25. Systèmes Clients Microsoft Gestion des utilisateurs et des groupes
26. Énoncé
27. Solution
28. Synthèse du Drive · Synthèse Module 5 - Gestion des Utilisateurs, Groupes et UAC V2 · 3 pages transcrites
29. Synthèse — Module 5 : Les Utilisateurs, les Groupes et le Contrôle de Comptes (UAC) (V2)
30. 1. Concept d’Utilisateur et de Profil
31. 2. Gestion des Groupes et Autorisations
32. 3. Contrôle de Compte d’Utilisateur (UAC) et Administration
33. Cmdlets PowerShell de gestion des utilisateurs locaux
34. Notes du Drive · module 5 et 6.txt · document texte
35. Inexistant
36. Les utilisateurs et les groupes
37. Proposition de solution

**Visuel externe**

```mermaid
flowchart TD
    N1["Support · Module 05 - Support de cours · 12 pages transcrites"]
    N2["Systèmes clients Microsoft"]
    N3["Objectifs"]
    N4["Les objets utilisateurs et groupes"]
    N5["La notion d’utilisateur"]
    N6["La notion d’utilisateur"]
    N7["Gestion des utilisateurs"]
    N8["Gestion des utilisateurs"]
    N9["Gestion des utilisateurs"]
    N10["Les catégories d’utilisateurs"]
    N11["La gestion des profils"]
    N12["La gestion des profils"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
    N5 --> N6
    N6 --> N7
    N7 --> N8
    N8 --> N9
    N9 --> N10
    N10 --> N11
    N11 --> N12
```

SOURCE DRIVE · TRANSCRIPTION DU SUPPORT

Le contenu des documents du dossier TSSR est transcrit ci-dessous, page par page. Les textes et tableaux sont intégrés à la page Web. Aucun fichier PDF, aucune diapositive entière ni aucune reproduction de page n’est affiché. Seuls des croquis ou visuels isolés et vérifiés peuvent accompagner la transcription. Les versions et les consignes restent celles des supports de formation. Les compléments IA sont conservés dans leur onglet distinct.

## Support · Module 05 - Support de cours · 12 pages transcrites

## Systèmes clients Microsoft

!!! note "À retenir"
    Module 05 – Les utilisateurs et les groupes

Module 05 – Les utilisateurs et les groupes

## Objectifs

!!! note "À retenir"
    Prendre conscience de l'importance de la notion d'utilisateur Distinguer les utilisateurs et leurs profils Gérer les utilisateurs et les groupes Découvrir les outils de gestion Assimiler le fonctionnement de l'UAC

**Visuel externe**

```mermaid
flowchart LR
    N1["Prendre conscience de l'importance de la notion d'utilisateur"]
    N2["Distinguer les utilisateurs et leurs profils"]
    N3["Gérer les utilisateurs et les groupes"]
    N4["Découvrir les outils de gestion"]
    N5["Assimiler le fonctionnement de l'UAC"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
```

- Prendre conscience de l'importance de la notion d'utilisateur
- Distinguer les utilisateurs et leurs profils
- Gérer les utilisateurs et les groupes
- Découvrir les outils de gestion
- Assimiler le fonctionnement de l'UAC

## Les objets utilisateurs et groupes

!!! note "À retenir"
    Notion d'utilisateurs Les profils d'utilisateurs Les groupes Le contrôle de compte utilisateurs

**Visuel externe**

```mermaid
flowchart LR
    N1["Notion d'utilisateurs"]
    N2["Les profils d'utilisateurs"]
    N3["Les groupes"]
    N4["Le contrôle de compte utilisateurs"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
```

- Notion d'utilisateurs
- Les profils d'utilisateurs
- Les groupes
- Le contrôle de compte utilisateurs

## La notion d’utilisateur

!!! note "À retenir"
    Le système d'exploitation client Windows est une porte ouverte sur le système d'information de l'entreprise Êtes-vous une personne de confiance ?

**Visuel externe**

```mermaid
flowchart LR
    N1["Êtes-vous une personne de confiance ?"]
    N2["Identifiant ?"]
    N3["Mot de passe ?"]
    N4["Simple utilisateur ? Technicien informatique ? Administrateur de l'entreprise ?"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
```

- Le système d'exploitation client Windows est une porte ouverte sur le système d'information de l'entreprise
- Êtes-vous une personne de confiance ?
- Identifiant ?
- Mot de passe ?
- Accès en lecture ? En modification ? À quelques fichiers ? À l'ensemble du réseau ?
- Simple utilisateur ? Technicien informatique ? Administrateur de l'entreprise ?

## La notion d’utilisateur

!!! note "À retenir"
    1 collaborateur de l'entreprise = 1 utilisateur du système d'information Accès au SI validé par : Le couple Identifiant + Mot de passe Biométrie (Windows Hello) Objet tiers (carte à puce, badge…) 2de authentification possible dans certains contextes spécifiques (SMS, lien de validation, etc.)

**Visuel externe**

```mermaid
flowchart LR
    N1["1 collaborateur de l'entreprise = 1 utilisateur du système d'information"]
    N2["Accès au SI validé par :"]
    N3["Le couple Identifiant + Mot de passe"]
    N4["Biométrie (Windows Hello)"]
    N5["Objet tiers (carte à puce, badge…)"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
```

- 1 collaborateur de l'entreprise = 1 utilisateur du système d'information
- Accès au SI validé par :
- Le couple Identifiant + Mot de passe
- Biométrie (Windows Hello)
- Objet tiers (carte à puce, badge…)
- 2de authentification possible dans certains contextes spécifiques (SMS, lien de validation, etc.)

## Gestion des utilisateurs

!!! note "À retenir"
    Utilisateur local Propre à chaque ordinateur Stocké dans la base de données locale SAM (Base Security Account Manager) L'utilisateur ne peut exploiter que les ressources de l'ordinateur source

Utilisateur local

- Propre à chaque ordinateur
- Stocké dans la base de données locale SAM (Base Security Account Manager)
- L'utilisateur ne peut exploiter que les ressources de l'ordinateur source

## Gestion des utilisateurs

Utilisateur du domaine

- Stocké dans une base de données commune (annuaire Active Directory)
- Sur un serveur de l'entreprise (contrôleur de domaine)
- Externalisé chez un prestataire (Microsoft Azure ou autre)
- Authentification Kerberos sécurisée par le réseau
- Un utilisateur peut ouvrir une session sur tous les ordinateurs du domaine
- Un utilisateur (local, de domaine) est identifié par le système grâce à son SID (Security IDentifier)

## Gestion des utilisateurs

Ouverture de session

- Pour les utilisateurs locaux
- Utiliser un compte présent dans la base SAM
- Sont affichés par défaut sur l'écran d'accueil
- Pour les utilisateurs du domaine
- Jonction du poste au domaine de l'entreprise indispensable au préalable
- Domaine sélectionné par défaut Possibilité de s'authentifier grâce à l'annuaire d'un autre domaine

Attention, la liste des utilisateurs locaux n’apparaît plus une fois l’ordinateur joint au domaine de l’entreprise !

![Illustration isolée du support — Module 05 - Support de cours](../../assets/course-sources/isolated/b428003d4e687898/g2-p4-1.webp)

Illustration isolée du support — Module 05 - Support de cours

## Les catégories d’utilisateurs

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

## La gestion des profils

!!! note "À retenir"
    Un utilisateur ouvre une session pour la première fois, un profil personnel est créé Dans le dossier C:\Users Propre à chaque utilisateur Contient tous les paramètres et données de l'utilisateur Documents Téléchargement Bureau Images… Illustration isolée du support — Module 05 - Support de cours

Un utilisateur ouvre une session pour la première fois, un profil personnel est créé

- Dans le dossier C:\Users
- Propre à chaque utilisateur
- Contient tous les paramètres et données de l'utilisateur
- Documents
- Téléchargement
- Bureau
- Images…

![Illustration isolée du support — Module 05 - Support de cours](../../assets/course-sources/isolated/b428003d4e687898/g2-p5-1.webp)

Illustration isolée du support — Module 05 - Support de cours

## La gestion des profils

Un utilisateur ouvre une session pour la première fois, un profil personnel est créé

- Dans le dossier C:\Users
- Propre à chaque utilisateur
- Contient tous les paramètres et données de l'utilisateur
- Documents
- Téléchargement
- Bureau
- Images…
- Profil public : commun à tous les utilisateurs
- Profil par défaut (caché) : modèle pour la création d'un nouveau profil

## La gestion des profils

!!! note "À retenir"
    La gestion manuelle des profils dans le dossier c:\Users est à proscrire !

Comment gérer les profils ?

- La gestion manuelle des profils dans le dossier c:\Users est à proscrire !
- sysdm.cpl onglet Paramètres systèmes avancés
- Supprimer des profils
- Modifier le type du profil
- Gestion du profil par défaut

![Illustration isolée du support — Module 05 - Support de cours](../../assets/course-sources/isolated/b428003d4e687898/g2-p6-1.webp)

Illustration isolée du support — Module 05 - Support de cours

![Illustration isolée du support — Module 05 - Support de cours](../../assets/course-sources/isolated/b428003d4e687898/g2-p6-2.webp)

Illustration isolée du support — Module 05 - Support de cours

## Gestion des groupes

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

## Gestion des utilisateurs et des groupes

Configuration

- Graphiquement grâce aux consoles MMC
- lusrmgr.msc (gestion des utilisateurs et groupes locaux)
- compmgmt.msc (gestion de l'ordinateur)
- Menu Comptes d'utilisateurs dans le panneau de configuration (orienté utilisateur)
- En ligne de commande
- net user (net help user pour l'aide détaillée)
- net localgroup (net help localgroup)

![Illustration isolée du support — Module 05 - Support de cours](../../assets/course-sources/isolated/b428003d4e687898/g2-p7-1.webp)

Illustration isolée du support — Module 05 - Support de cours

![Illustration isolée du support — Module 05 - Support de cours](../../assets/course-sources/isolated/b428003d4e687898/g2-p7-2.webp)

Illustration isolée du support — Module 05 - Support de cours

## Gestion des utilisateurs et des groupes

### Configuration en PowerShell

| Description | verbe | -nom |
| --- | --- | --- |
| Affiche la liste des utilisateurs locaux | Get | -LocalUser |
| Créer un nouvel utilisateur dans la base SAM | New | -LocalUser |
| Modifier un utilisateur local existant | Set | -LocalUser |
| Renommer un utilisateur | Rename | -LocalUser |
| Activer l’utilisateur, il pourra de ce fait utiliser les ressources de l’ordinateur | Enable | -LocalUser |
| Désactiver un utilisateur | Disable | -LocalUser |
| Supprimer un utilisateur de la base SAM | Remove | -LocalUser |

Manipulation des groupes et de leurs membres avec les cmdlets : \{Get | Set | New | Remove\}-LocalGroup et \{Get | Set | Remove\}-LocalGroupMember.

## Démonstration

## Contrôle de comptes d’utilisateur (UAC)

Sans action particulière, le système loge tous les utilisateurs à la même enseigne … même les administrateurs !

- Par l'intermédiaire de l'UAC, le système n'accorde les privilèges que lorsque c'est nécessaire
- Élévation de pouvoir symbolisée par le « bouclier »
- Validation requise pour un administrateur
- Authentification requise pour un utilisateur

## Contrôle de comptes d’utilisateur (UAC)

- Pourquoi ces contrôles ?
- Lutter contre les actions des programmes malveillants
- Avertir face à un paramètre sensible du système
- Comment le configurer ?
- Via le panneau de configuration
- À l'aide de la stratégie de sécurité locale
- secpol.msc
- Stratégies locales > Options de sécurité
- Valeurs Contrôle de compte d'utilisateur

Il est donc déconseillé de désactiver l’UAC.

![Illustration isolée du support — Module 05 - Support de cours](../../assets/course-sources/isolated/b428003d4e687898/g2-p9-1.webp)

Illustration isolée du support — Module 05 - Support de cours

![Illustration isolée du support — Module 05 - Support de cours](../../assets/course-sources/isolated/b428003d4e687898/g2-p9-2.webp)

Illustration isolée du support — Module 05 - Support de cours

![Illustration isolée du support — Module 05 - Support de cours](../../assets/course-sources/isolated/b428003d4e687898/g2-p9-3.webp)

Illustration isolée du support — Module 05 - Support de cours

![Illustration isolée du support — Module 05 - Support de cours](../../assets/course-sources/isolated/b428003d4e687898/g2-p9-4.webp)

Illustration isolée du support — Module 05 - Support de cours

## Contrôle de comptes d’utilisateur (UAC)

Pour certaines actions, il est nécessaire de demander l’élévation

- Graphiquement avec la fonction Exécuter en tant qu’administrateur

## Récapitulatif

Un utilisateur est associé à :

- Un nom d’ouverture de session et un mot de passe
- Un profil local
- Généré à la première ouverture de session
- Contient les données personnelles et les paramètres de l'utilisateur
- Un identifiant unique (SID)
- Des appartenances de groupe définies dans l’onglet Membre de
- L'ensemble des SID constituent le jeton d'accès, ouvrant des accès et accordant des privilèges
- Les informations du jeton d'accès sont consultables avec la commande whoami

![Illustration isolée du support — Module 05 - Support de cours](../../assets/course-sources/isolated/b428003d4e687898/g2-p10-1.webp)

Illustration isolée du support — Module 05 - Support de cours

![Illustration isolée du support — Module 05 - Support de cours](../../assets/course-sources/isolated/b428003d4e687898/g2-p10-2.webp)

Illustration isolée du support — Module 05 - Support de cours

## Démonstration

TP

## Conclusion

- Un collaborateur = un utilisateur
- A chacun son métier
- A chacun ses données
- Le système est protégé
- L’identification est la clé de la sécurité

Référence du document : 1s2o2V7Zj5iJuErUiXOsz9PAEcmDykImt · SHA-256 b428003d4e687898…

## Synthèse du Drive · Synthèse Module 5 - Gestion des Utilisateurs, Groupes et UAC V2 · 3 pages transcrites

Les synthèses Windows 10 de ce dossier sont rattachées au cours Systèmes clients.

## Synthèse — Module 5 : Les Utilisateurs, les Groupes et le Contrôle de Comptes (UAC) (V2)

## 1. Concept d’Utilisateur et de Profil

Dans Windows 10, chaque collaborateur est identifié par un compte d’utilisateur associé à un identifiant de sécurité unique (SID - Security Identifier).

- Utilisateur Local : enregistré dans la base de données locale SAM (Security Account Manager) du poste.
- Utilisateur de Domaine : enregistré dans l’annuaire Active Directory pour un accès centralisé.
- Profil Utilisateur : dossier personnel stocké dans C:\Users\<nom> contenant les paramètres et documents de l’utilisateur. La gestion des profils se fait via sysdm.cpl.

## 2. Gestion des Groupes et Autorisations

Les groupes permettent de simplifier l’attribution des droits et privilèges. Un utilisateur hérite des permissions accordées aux groupes auxquels il appartient.

| Type de groupe | Exemples / Rôle |
| --- | --- |
| Administrateurs | Contrôle total sur l’ordinateur et le système. Compte administrateur désactivé par défaut. |
| Utilisateurs | Membres standards autorisés à exécuter des applications sans modifier le système. |
| Invités (Guests) | Accès très restreint, désactivé par défaut. |
| Entités intégrées | Tout le monde, Utilisateurs authentifiés (gérées automatiquement par l’OS). |

## 3. Contrôle de Compte d’Utilisateur (UAC) et Administration

L’UAC (User Account Control) empêche les modifications système non autorisées en imposant une confirmation ou une saisie de mot de passe administrateur (élévation de privilèges symbolisée par le bouclier).

### Commandes de gestion CLI et PowerShell

```
:: Gestion des utilisateurs et groupes locaux (cmd.exe)
net user
net user pdupond Pa$$w0rd /add
net localgroup Administrateurs pdupond /add
whoami /all
:: Lancement des consoles de gestion MMC
lusrmgr.msc
compmgmt.msc
secpol.msc
```

## Cmdlets PowerShell de gestion des utilisateurs locaux

```
Get-LocalUser
New-LocalUser -Name "pdupond" -AccountNeverExpires
Add-LocalGroupMember -Group "Administrateurs" -Member "pdupond"
Disable-LocalUser -Name "Guest"
```

Référence du document : 1xPtrQx5oKA-CNDqmsl8HKcDMVemUE5n-XXwvyJYUpqU · SHA-256 e6bea2f53019f56d…

## Notes du Drive · module 5 et 6.txt · document texte

Inexistant — fichier de notes vide dans le Drive.

Référence du document : 1Oi75J3l2QDn53DJw1GUoxHxkXTShq3T7 · SHA-256 e3b0c44298fc1c14…

| Systèmes clients Microsoft | Module 05 – Les utilisateurs et les groupes |
| Objectifs | Prendre conscience de l'importance de la notion d'utilisateur Distinguer les utilisateurs et leurs profils Gérer les utilisateurs et les groupes Découvrir les outils de gestion… |
| Les objets utilisateurs et groupes | Notion d'utilisateurs Les profils d'utilisateurs Les groupes Le contrôle de compte utilisateurs |
| La notion d’utilisateur | Le système d'exploitation client Windows est une porte ouverte sur le système d'information de l'entreprise Êtes-vous une personne de confiance ? |
| La notion d’utilisateur | 1 collaborateur de l'entreprise = 1 utilisateur du système d'information Accès au SI validé par : Le couple Identifiant + Mot de passe Biométrie (Windows Hello) Objet tiers (car… |
| Gestion des utilisateurs | Utilisateur local Propre à chaque ordinateur Stocké dans la base de données locale SAM (Base Security Account Manager) L'utilisateur ne peut exploiter que les ressources de l'or… |
| Gestion des utilisateurs | Utilisateur du domaine Stocké dans une base de données commune (annuaire Active Directory) Sur un serveur de l'entreprise (contrôleur de domaine) Externalisé chez un prestataire… |
| Gestion des utilisateurs | Ouverture de session Pour les utilisateurs locaux Utiliser un compte présent dans la base SAM Sont affichés par défaut sur l'écran d'accueil Pour les utilisateurs du domaine Jon… |
| Les catégories d’utilisateurs | Standard Pour utiliser les ressources de l'ordinateur Être membre du groupe Utilisateurs Administrateur Pour utiliser et modifier les ressources de l'ordinateur Être membre du g… |
| La gestion des profils | Un utilisateur ouvre une session pour la première fois, un profil personnel est créé Dans le dossier C:\Users Propre à chaque utilisateur Contient tous les paramètres et données… |
| La gestion des profils | Un utilisateur ouvre une session pour la première fois, un profil personnel est créé Dans le dossier C:\Users Propre à chaque utilisateur Contient tous les paramètres et données… |
| La gestion des profils | La gestion manuelle des profils dans le dossier c:\Users est à proscrire ! |
| Gestion des groupes | Tout utilisateur doit appartenir à au moins un groupe Un groupe est identifié par le système grâce à son SID (Security IDentifier) Le SID du groupe s'ajoute au jeton d'accès de… |
| Gestion des utilisateurs et des groupes | Configuration Graphiquement grâce aux consoles MMC lusrmgr.msc (gestion des utilisateurs et groupes locaux) compmgmt.msc (gestion de l'ordinateur) Menu Comptes d'utilisateurs da… |
| Contrôle de comptes d’utilisateur (UAC) | Sans action particulière, le système loge tous les utilisateurs à la même enseigne … même les administrateurs ! |
| Contrôle de comptes d’utilisateur (UAC) | Lutter contre les actions des programmes malveillants Avertir face à un paramètre sensible du système Comment le configurer ? |
| Contrôle de comptes d’utilisateur (UAC) | Pour certaines actions, il est nécessaire de demander l’élévation Graphiquement avec la fonction Exécuter en tant qu’administrateur |
| Récapitulatif | Un utilisateur est associé à : Un nom d’ouverture de session et un mot de passe Un profil local Généré à la première ouverture de session Contient les données personnelles et le… |
| Conclusion | Un collaborateur = un utilisateur A chacun son métier A chacun ses données Le système est protégé L’identification est la clé de la sécurité Référence du document : 1s2o2V7Zj5iJ… |
| Énoncé | Lisez l'ensemble de cet atelier avant de vous lancer dans la pratique |
| Solution | Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les ressources à télécharger. |
| Synthèse du Drive · Synthèse Module 5 - Gestion des Utilisateurs, Groupes et UAC V2 · 3 pages transcrites | Les synthèses Windows 10 de ce dossier sont rattachées au cours Systèmes clients. |
| 1. Concept d’Utilisateur et de Profil | Dans Windows 10, chaque collaborateur est identifié par un compte d’utilisateur associé à un identifiant de sécurité unique (SID - Security Identifier). |
| 2. Gestion des Groupes et Autorisations | Les groupes permettent de simplifier l’attribution des droits et privilèges. |
| 3. Contrôle de Compte d’Utilisateur (UAC) et Administration | L’UAC (User Account Control) empêche les modifications système non autorisées en imposant une confirmation ou une saisie de mot de passe administrateur (élévation de privilèges… |
| Cmdlets PowerShell de gestion des utilisateurs locaux | Référence du document : 1xPtrQx5oKA-CNDqmsl8HKcDMVemUE5n-XXwvyJYUpqU · SHA-256 e6bea2f53019f56d… |
| Notes du Drive · module 5 et 6.txt · document texte | Inexistant — fichier de notes vide dans le Drive. |
| Proposition de solution | À l'aide de la console de gestion des utilisateurs de la VM Win10-XX, créez les objets avec les paramètres suivant : François possèdera un mot de passe qui n'aura pas de date d'… |
