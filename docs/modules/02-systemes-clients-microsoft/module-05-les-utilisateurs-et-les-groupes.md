# Module 05 — Les utilisateurs et les groupes

**Séquence :** Systèmes clients Microsoft

## Objectifs

À l’issue du module, vous devez pouvoir :

- distinguer les utilisateurs, leurs profils et les groupes ;
- identifier les outils de gestion présentés pour un poste Windows ;
- expliquer comment les appartenances à des groupes participent aux privilèges ;
- repérer le rôle du contrôle de compte d’utilisateur (UAC).

## 1. Identifier un utilisateur

Le support présente le système d’exploitation client comme un point d’accès au système d’information de l’entreprise. Un collaborateur est associé à un utilisateur : son identification et ses appartenances déterminent les ressources auxquelles il peut accéder.

### Utilisateur local et utilisateur de domaine

| Type présenté dans le support | Où l’objet est géré | Portée décrite |
| --- | --- | --- |
| Utilisateur local | Base locale **SAM** (*Security Account Manager*) | Ressources de l’ordinateur concerné. |
| Utilisateur de domaine | Annuaire Active Directory | Ouverture de session sur les ordinateurs du domaine, après jonction du poste au domaine. |

Le support indique qu’un utilisateur, local ou de domaine, possède un **SID** (*Security Identifier*) : c’est l’identifiant utilisé par le système pour le reconnaître.

## 2. Comprendre les profils utilisateur

À la première ouverture de session, Windows crée un profil personnel dans `C:\Users`. Le support le décrit comme propre à l’utilisateur et contenant ses paramètres et ses données, notamment les dossiers Documents, Téléchargements, Bureau et Images.

Deux repères complètent cette notion :

- le profil public est commun aux utilisateurs ;
- le profil par défaut, caché, sert de modèle lorsqu’un nouveau profil est créé.

!!! tip "Contrôler avant de conclure"
    La présence d’un compte dans la base locale ne prouve pas qu’un profil a déjà été créé. Le TP demande de vérifier ce point après une première ouverture de session.

Le support déconseille la gestion manuelle des profils dans `C:\Users`. Il cite `sysdm.cpl`, puis les paramètres système avancés, comme chemin de gestion des profils.

## 3. Utiliser les groupes pour attribuer des privilèges

Tout utilisateur appartient à au moins un groupe. Le SID des groupes est ajouté au jeton d’accès de l’utilisateur. Ce jeton regroupe les identifiants qui participent aux accès et privilèges pendant la session.

Le support distingue :

- les **groupes locaux**, utilisés pour configurer les autorisations d’accès aux ressources et certains privilèges d’administration ;
- les **groupes prédéfinis**, déjà présents dans Windows, par exemple Administrateurs ou Opérateurs de sauvegarde ;
- les **entités intégrées de sécurité**, affectées automatiquement par le système et non visibles dans les consoles, par exemple Tout le monde ou Utilisateurs authentifiés.

Les catégories d’utilisateurs citées par le support sont Standard, Administrateur et Invité. Les appartenances aux groupes expliquent les possibilités d’ouverture de session et les privilèges observés dans le TP.

## 4. Choisir l’outil adapté

Le module présente trois voies complémentaires :

| Outil | Usage attesté |
| --- | --- |
| Interface graphique / MMC | Consoles `lusrmgr.msc` et `compmgmt.msc` pour les utilisateurs et groupes locaux. |
| Invite de commandes | `net user` et `net localgroup` ; le support renvoie aussi vers leur aide détaillée. |
| PowerShell | Familles de cmdlets `Get`, `New`, `Set`, `Rename`, `Enable`, `Disable` et `Remove` appliquées aux objets `LocalUser`, `LocalGroup` et membres de groupes locaux. |

Le TP utilise aussi `whoami /user` et `whoami /groups` pour afficher les SID d’un utilisateur et des groupes dont il est membre. Ces commandes servent de contrôle : elles ne remplacent pas l’observation des appartenances dans la console.

## 5. Contrôle de compte d’utilisateur et élévation

Le contrôle de compte d’utilisateur, ou **UAC**, limite l’usage permanent des privilèges. Le support indique que les privilèges sont accordés lorsque l’action le nécessite : une validation est demandée à un administrateur, tandis qu’une authentification peut être demandée à un utilisateur.

L’élévation est notamment signalée par le bouclier et peut être demandée par la fonction **Exécuter en tant qu’administrateur**. Le support relie l’UAC à la prévention d’actions malveillantes et à l’avertissement face à un paramètre sensible.

## 6. Méthode de vérification issue du TP

Les activités du module permettent d’associer chaque action à un contrôle :

1. créer ou modifier l’objet demandé dans l’outil indiqué ;
2. contrôler ses propriétés et ses appartenances dans la console ;
3. utiliser la commande demandée pour afficher les informations attendues ;
4. ouvrir une session lorsque le scénario le demande afin d’observer la création du profil ;
5. comparer le résultat à l’objectif de l’activité avant de consulter la correction.

!!! warning "Privilèges et groupe ciblé"
    L’énoncé fait manipuler des privilèges d’administration et des groupes prédéfinis. Vérifiez toujours le compte et le groupe ciblés dans le scénario de laboratoire avant d’appliquer une modification.

## Synthèse

Un utilisateur est associé à un nom d’ouverture de session, un profil local, un SID et des appartenances à des groupes. Les SID de l’utilisateur et de ses groupes constituent le jeton d’accès. Les consoles graphiques, les commandes `net` et les cmdlets PowerShell présentées dans le module offrent des moyens complémentaires de gérer et de contrôler ces objets. L’UAC encadre l’élévation nécessaire aux actions protégées.

## Mise en pratique

- [TP — présentation](../../tp/systemes-clients/module-05/index.md)
- [Énoncé du TP](../../tp/systemes-clients/module-05/enonces.md)
- [Correction du TP](../../tp/systemes-clients/module-05/corrections.md)
- [Fiche de révision](../../revision/systemes-clients/module-05-les-utilisateurs-et-les-groupes.md)
- [Kahoot du module](../../kahoot/02-systemes-clients-microsoft-05-les-utilisateurs-et-les-groupes.md)
- [Présentation de la formation](index.md)

## Source et provenance

- **Sources A — TSSR Drive live :** support `Module 05 - Support de cours.pdf`, énoncé `Enoncé du TP - Gestion des utilisateurs et des groupes.pdf` et correction `Solution du TP - Gestion des utilisateurs et des groupes.pdf`.
- **Structuration B :** organisation web, tableaux, formulation des méthodes de vérification et articulation entre support, énoncé et correction, sans ajout de source externe.
