# Corrections — Module 05 — Les utilisateurs et les groupes

!!! warning
    Une correction décrit le contexte du laboratoire. Comparer la logique et les contrôles avant de reprendre une valeur, une version ou un chemin dans un autre environnement.

## Solution du TP - Gestion des utilisateurs et des groupes

### Systèmes Clients Microsoft

#### Les utilisateurs et les

#### groupes

#### TP du Module 05 — Les utilisateurs et les groupes

À l'aide de la console de gestion des utilisateurs de la VM Win10-XX, créez les

#### objets avec les paramètres suivant :

- François possèdera un mot de passe qui n'aura pas de date d'expiration.

- Il fera partie des groupes L_Informatiques et L_Responsables (vous créerez les

groupes en amont). Dans votre console personnalisée MaConsole.msc disponible sur votre bureau Composant logiciel enfichable "Utilisateurs et groupes locaux" &gt; utilisateurs

#### Clic droit &gt; Nouvel utilisateur

Remplir le champ Nom d'utilisateur "françois" ou "francois" et entrez un mot de passe Vous pouvez décocher l'utilisateur doit changer son mot de passe à la prochaine ouverture

#### de session

Cocher Le mot de passe n'expire jamais.

#### Créer puis Fermer

#### Francois apparait dorénavant dans la fenêtre des utilisateurs

#### Composant logiciel enfichable "Utilisateurs et groupes locaux"

#### Clic droit &gt; Nouveau groupe …

#### Nom du groupe : L_Informatiques

#### Ajouter …

#### Entrez les noms des objets à sélectionner : francois

#### OK

#### Créer

#### Nom du groupe : L_Responsables

#### Ajouter…

#### Entrez les noms des objets à sélectionner : francois

#### OK

#### Créer

#### Fermer

#### Les deux nouveaux groupes apparaissent dans la liste

- Yann fera partie des mêmes groupes que François.

Dans votre console personnalisée MaConsole.msc disponible sur votre bureau Composant logiciel enfichable "Utilisateurs et groupes locaux" &gt; utilisateurs

#### Clic droit &gt; Nouvel utilisateur

#### Remplir le champ Nom d'utilisateur "Yann" et entrez un mot de passe

Vous pouvez décocher l'utilisateur doit changer son mot de passe à la prochaine ouverture

#### de session

#### Créer puis Fermer

#### Yann apparait dorénavant dans la fenêtre des utilisateurs

#### Clic droit sur l'utilisateur Yann &gt; Propriétés

#### Onglet Membre de

#### Ajouter…

Entrez les noms des objets à sélectionner : L_Informatiques;L_Responsables

#### Appliquer &gt; OK

- Créez deux comptes utilisateurs auquel vous donnerez nom, prénom, login et mot

#### de passe de votre choix. Ils feront partie du groupe L_Collegues

Composant logiciel enfichable "Utilisateurs et groupes locaux" &gt; utilisateurs

#### Clic droit &gt; Nouvel utilisateur

#### Remplir le champ Nom d'utilisateur et entrez un mot de passe

Vous pouvez décocher l'utilisateur doit changer son mot de passe à la prochaine ouverture

#### de session

#### Créer

#### Refaites ces étapes pour un utilisateur supplémentaire puis Fermer

#### Ils apparaissent dorénavant dans la fenêtre des utilisateurs

#### Composant logiciel enfichable "Utilisateurs et groupes locaux"

#### Clic droit &gt; Nouveau groupe …

#### Nom du groupe : L_Collegues

#### Ajouter …

#### Entrez les noms des objets à sélectionner : Pauline;Alix

#### OK

#### Créer

#### Fermer

#### Mise en place de privilèges d'administration

- François aura la possibilité d'administrer l'ensemble des ressources du poste Win10 -

XX.

#### Ajouter François dans le groupe prédéfini Administrateurs

- Yann pourra consulter les journaux d'évènements et configurer la carte réseau.

#### Ajouter Yann dans les groupes prédéfinis suivants :

#### Lecteurs des journaux d'événements

#### Opérateurs de configuration réseau

- Vous accorderez à vos collègues la possibilité de sauvegarder votre poste Win10-XX.

Ajouter vos deux utilisateurs supplémentaires dans le groupe prédéfini Opérateurs de

#### sauvegarde

L'imbrication de groupe n'est pas opérationnelle d'un groupe local vers un autre gr oupe local d'une base SAM d'un système d'exploitation client. Il est possible de le faire en ligne

#### de commande mais pour simple information

- Retirez l'un de vos collègues du groupe utilisateurs.

#### Supprimer l'un de vos deux utilisateurs du groupe prédéfini Utilisateurs

#### Informations concernant les utilisateurs et groupes

- En navigant dans la console graphique des utilisateurs et des groupes, listez les

propriétés d'un utilisateur.

#### Nom complet

#### Description

3 actions possibles sur les mots de passe (Changement à la prochaine ouverture de session,

#### expiration, impossibilité de changer de mot de passe)

#### 2 actions possibles sur le compte (désactivation et déverrouillage)

#### Appartenance aux groupes

Information de profil, script d'ouverture de session, connexion automatique à lecteur réseau

#### et mappage via une lettre de lecteur, local path

- Listez les propriétés d'un groupe.

#### Description

#### Ajouter ou supprimer des membres dans le groupe

À l'aide de la ligne de commande cmd.exe.

- Afficher les informations du compte utilisateur François.

`net user francois`

On remarquera ici que la ligne de commande affiche beaucoup plus d'information s concernant l'utilisateur que le composant logiciel enfichable "Util isateurs et groupes locaux". Cela prouve que la ligne de commande est plus pointue, plus aiguisé e et

#### complète que l'interface graphique

- Affichez les membres du groupe administrateurs

`net localgroup administrateurs`

- Créez un utilisateur Romain, attribuez -lui un mot de passe. Attention, pour des

questions de sécurité, le mot de passe que vous taperez ne devra pas être visible à

#### l'écran !

`net user Romain * /add`

#### Entrez le mot de passe au clavier, il ne s'affichera pas à l'écran

Attention, pour pouvoir créer un nouvel utilisateur dans la base SAM, vous devez ouvrir une fenêtre de ligne de commande en tant qu'administrateur. Créer un utilisateur, c'est modifier

#### le système !

- Ajoutez Romain au groupe L_Responsables

`net localgroup L_Responsables Romain /add`

#### Manipulations supplémentaires avec l'interface graphique de Windows 10

- Fermez la session de l'utilisateur en cours.

#### logoff

- Quels utilisateurs peuvent ouvrir une session sur le poste ?

Seuls les utilisateurs membres des groupes Utilisateurs, Administrateurs ou Invités peuvent

#### ouvrir une session locale sur la machine

- L'un de vos collègues ne peut pas ouvrir de session. Pourquoi ?

L'un de vos utilisateurs supplémentaires n'apparait pas sur l'écran d'accueil car vous l'avez

#### supprimé du groupe utilisateurs

- Ouvrez une session avec l'utilisateur François puis affichez les profils présents sur le

#### système. Que peut-on observer ?

Après avoir ouvert une session avec l'utilisateur francois, terminez la configuration de son profil utilisateur . Puisque c'est la première fois que François ouvre une session, un profil d'utilisateur est automatiquement créé dans le dossier c:\Users. Son profil est un sous dossier dont le nom est le même que son login.

#### Pour afficher les profils présents sur le système :

#### Rechercher &gt; sysdm.cpl

#### Onglet Paramètres système avancés

#### Bouton Paramètres… du champ Profil des utilisateurs

Seuls les profils des utilisateurs ayant déjà ouvert au moins une fois une session sur l'ordinateur sont présents. Il existe plus d'utilisateurs que de profils dans notre cas. C'est normal. Par exemple Yann et Romain sont bien présents dans la base SAM mais n'ont pas encore ouvert de session sur l'ordinateur. Un profil leur sera automatiquement créé lors de leur première ouverture de session, à l'aide

#### du profil "modèle" le Profil par défaut

- À l'aide de la ligne de commande, affichez son SID, puis affichez les SID des groupes

dont il est membre.

#### Ouvrez une ligne de commande cmd.exe

`whoami /user`

`whoami /groups`

#### L'ensemble de ces SID forment le jeton d'accès de l'utilisateur

#### À l'aide de PowerShell et de la VM Discovery

- Afficher la liste des utilisateurs sur le système. Vous afficherez le nom, le SID et la

description de chacun d'eux.

`Get-LocalUser | select Name,SID,Description`

- Afficher les informations suivantes concernant l'utilisateur james :

  - Nom complet, description, classe d'objets, date de dernière connexion

`Get-LocalUser -Name james | Select FullName,description,ObjectClass,LastLogon`

- Ajouter la description Compte générique avec privilèges d'administration à

#### l'utilisateur adm

`Set-LocalUser -Name adm -description "Compte générique administrateur de secours"`

- Afficher le nom et le SID des membres du groupe local L_SupportInfo

`Get-LocalGroupMember -Name L_SupportInfo | Select Name,SID`
